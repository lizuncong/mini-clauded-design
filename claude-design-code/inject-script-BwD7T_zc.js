const e=`
(function() {
  if (window.__DM) return;

  // ─── Ref registry ──────────────────────────────────────────────────────────
  var nextRef = 1;
  var refMap = {}; // ref → Element

  function getRef(el) {
    if (!el || el.nodeType !== 1) return null;
    var r = el.getAttribute('data-dm-ref');
    if (r) return parseInt(r, 10);
    r = nextRef++;
    el.setAttribute('data-dm-ref', r);
    refMap[r] = el;
    return r;
  }
  function byRef(ref) {
    var el = refMap[ref];
    if (el && el.isConnected) return el;
    // fallback: query (element may have been re-created)
    el = document.querySelector('[data-dm-ref="' + ref + '"]');
    if (el) refMap[ref] = el;
    return el || null;
  }

  // ─── Emit ──────────────────────────────────────────────────────────────────
  // parent.postMessage works cross-origin; host filters by event.source.
  var P = window.parent;
  function emit(msg) { try { P.postMessage({__DM_MSG__: msg}, '*'); } catch(e){} }

  // ─── Style reading ─────────────────────────────────────────────────────────
  var STYLE_PROPS = [
    'position','top','left','right','bottom','zIndex',
    'width','height','minWidth','maxWidth','minHeight','maxHeight',
    'display','flexDirection','justifyContent','alignItems','flexWrap','gap',
    'gridTemplateColumns','gridTemplateRows',
    'paddingTop','paddingRight','paddingBottom','paddingLeft',
    'marginTop','marginRight','marginBottom','marginLeft',
    'backgroundColor','backgroundImage',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderStyle','borderColor','borderRadius',
    'boxShadow','textShadow',
    'color','fontSize','fontWeight','fontFamily','lineHeight','letterSpacing',
    'textAlign','textDecorationLine','textTransform',
    'opacity','overflow',
    'flexGrow','flexShrink','flexBasis','alignSelf',
    // SVG presentation attrs (readable as CSS props on computed style)
    'fill','fillOpacity','fillRule',
    'stroke','strokeWidth','strokeOpacity','strokeDasharray',
    'strokeLinecap','strokeLinejoin'
  ];

  // Tags for which the SVG panel is relevant. Excludes <svg> root (it's a container)
  // and <text>/<tspan> (text panel covers those well enough).
  var SVG_SHAPE_TAGS = {
    path:1, rect:1, circle:1, ellipse:1, line:1, polyline:1, polygon:1,
    g:1, use:1, mask:1, clippath:1
  };

  function readStyles(el) {
    var cs = window.getComputedStyle(el);
    var out = {};
    for (var i = 0; i < STYLE_PROPS.length; i++) {
      var p = STYLE_PROPS[i];
      out[p] = cs[p];
    }
    return out;
  }

  function readInline(el) {
    var out = {};
    var s = el.style;
    for (var i = 0; i < STYLE_PROPS.length; i++) {
      var p = STYLE_PROPS[i];
      var v = s[p];
      if (v) out[p] = v;
    }
    return out;
  }

  // ─── Descriptors ───────────────────────────────────────────────────────────
  function trunc(s, n) {
    n = n || 24;
    if (!s) return '';
    s = String(s).trim().replace(/\\s+/g, ' ');
    return s.length > n ? s.slice(0, n) + '…' : s;
  }

  // React dev-mode fiber → nearest named component. Key suffix is randomized
  // once per root, so cache it on first successful probe.
  var _fiberKey;
  function reactName(el) {
    try {
      if (!_fiberKey) {
        // Re-probe on each call until we find it — the first element hit
        // (e.g. the React root container, which has __reactContainer$ not
        // __reactFiber$) may lack the key. Caching null would poison the
        // lookup for the entire session.
        for (var k in el) { if (k.indexOf('__reactFiber$') === 0) { _fiberKey = k; break; } }
      }
      var f = _fiberKey && el[_fiberKey];
      var hops = 0;
      while (f && hops < 24) {
        var t = f.type || f.elementType;
        if (typeof t === 'function') {
          var n = t.displayName || t.name;
          if (n && n.length > 1) return n;
        } else if (t && typeof t === 'object' && t.displayName) {
          return t.displayName;
        }
        f = f.return;
        hops++;
      }
    } catch (e) {}
  }

  function describe(el) {
    var tag = el.tagName.toLowerCase();
    var parts = ['<' + tag];
    if (el.id) parts.push('#' + el.id);
    if (el.className && typeof el.className === 'string') {
      var cls = el.className.split(' ').filter(Boolean).slice(0, 2);
      cls.forEach(function(c) { parts.push('.' + trunc(c, 16)); });
    }
    parts.push('>');
    var txt = (el.innerText || el.textContent || '').trim();
    if (txt) parts.push('"' + trunc(txt, 24) + '"');
    return parts.join('');
  }

  // Middle-truncate a joined path at separator boundaries. Prefers keeping
  // tail hops (nearest the target) over head hops when budget is tight.
  function clampMid(joined, sep, n) {
    if (joined.length <= n) return joined;
    var parts = joined.split(sep);
    var head = [parts[0]], tail = [parts[parts.length - 1]];
    var len = head[0].length + tail[0].length + sep.length + 1;
    var hi = 1, ti = parts.length - 2;
    while (hi <= ti) {
      var t = parts[ti];
      if (len + sep.length + t.length <= n) { tail.unshift(t); len += sep.length + t.length; ti--; continue; }
      var h = parts[hi];
      if (len + sep.length + h.length <= n) { head.push(h); len += sep.length + h.length; hi++; continue; }
      break;
    }
    if (hi > ti) return head.concat(tail).join(sep);
    return head.concat('…', tail).join(sep);
  }

  function domHop(el, wantIndex) {
    var s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    var cn = el.className;
    if (cn && typeof cn === 'string') {
      var cls = cn.split(' ').filter(Boolean).slice(0, 2);
      for (var i = 0; i < cls.length; i++) s += '.' + trunc(cls[i], 20);
    }
    var sl = el.getAttribute && el.getAttribute('data-screen-label');
    if (sl) s += '[screen="' + trunc(sl, 24) + '"]';
    if (wantIndex) {
      var p = el.parentElement;
      if (p && p.children.length > 1) {
        var idx = Array.prototype.indexOf.call(p.children, el);
        s += '[' + (idx + 1) + '/' + p.children.length + ']';
      }
    }
    return s;
  }

  /**
   * Rich descriptor for edit-log — <mentioned-element> block, each line ≤100 chars.
   * IDENTICAL format to __describeEl in webview-scripts.ts; the two are kept in
   * lockstep so model prompts see one shape regardless of which mode produced it.
   * Uses the design-mode ref (data-dm-ref) as the transient id since every
   * element we describe here already has one via getRef().
   */
  function richDescriptor(el) {
    var LINE_MAX = 100;
    var SEP = ' › ';

    var reactPath = [];
    for (var a = el; a && a.nodeType === 1 && a !== document.documentElement; a = a.parentElement) {
      var rn = reactName(a);
      if (rn && rn !== reactPath[0]) reactPath.unshift(rn);
    }

    var domParts = [];
    for (var d = el; d && d.nodeType === 1 && d !== document.documentElement; d = d.parentElement) {
      domParts.unshift(domHop(d, d === el));
    }

    var textBits = [];
    var txt = (el.innerText || el.textContent || '').trim().replace(/\\s+/g, ' ');
    if (txt) textBits.push('"' + trunc(txt, 60) + '"');
    var aria = el.getAttribute('aria-label');
    if (aria) textBits.push('aria-label: "' + trunc(aria, 40) + '"');
    var alts = [];
    if (el.getAttribute('alt')) alts.push(el.getAttribute('alt'));
    var imgs = el.querySelectorAll('img[alt]');
    for (var i = 0; i < imgs.length && alts.length < 3; i++) {
      var a2 = imgs[i].getAttribute('alt');
      if (a2) alts.push(a2);
    }
    if (alts.length) textBits.push('alt: "' + trunc(alts.join(' · '), 40) + '"');

    var kids = [];
    var cn = el.childNodes;
    for (var k = 0; k < cn.length; k++) {
      var c = cn[k];
      if (c.nodeType === 1) kids.push(c.tagName.toLowerCase());
      else if (c.nodeType === 3 && c.textContent.trim()) kids.push('text');
    }

    var lines = ['<mentioned-element>'];
    if (reactPath.length) lines.push('react:    ' + trunc(reactPath.join(SEP), LINE_MAX));
    lines.push('dom:      ' + clampMid(domParts.join(SEP), SEP, LINE_MAX));
    if (textBits.length) lines.push('text:     ' + trunc(textBits.join(' · '), LINE_MAX));
    if (kids.length) lines.push('children: ' + trunc(kids.join(', '), LINE_MAX));
    lines.push('id:       dm-' + getRef(el));
    lines.push('</mentioned-element>');
    return lines.join('\\n');
  }

  function shortLabel(el) {
    var tag = el.tagName.toLowerCase();
    if (el.id) return tag + '#' + el.id;
    if (el.className && typeof el.className === 'string') {
      var cls = el.className.split(' ').filter(Boolean)[0];
      if (cls) return tag + '.' + trunc(cls, 14);
    }
    var txt = (el.innerText || el.textContent || '').trim();
    if (txt) return tag + ' "' + trunc(txt, 12) + '"';
    return tag;
  }

  function rectOf(el) {
    var r = el.getBoundingClientRect();
    // display:contents (and similar) produce a 0×0 box. Fall back to the union
    // of child rects so selection chrome stays visible after e.g. wrapping.
    if (r.width === 0 && r.height === 0 && el.children.length > 0) {
      var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (var i = 0; i < el.children.length; i++) {
        var cr = el.children[i].getBoundingClientRect();
        if (cr.width === 0 && cr.height === 0) continue;
        if (cr.left < x0) x0 = cr.left;
        if (cr.top < y0) y0 = cr.top;
        if (cr.right > x1) x1 = cr.right;
        if (cr.bottom > y1) y1 = cr.bottom;
      }
      if (x0 !== Infinity) return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
    }
    return { x: r.left, y: r.top, width: r.width, height: r.height };
  }

  // ─── Position mode ─────────────────────────────────────────────────────────
  // Only three modes: 'absolute' (abs/fixed) | 'static' (static/relative) | 'fixed'.
  // Relative is treated as static with x/y offset — drag behavior is the same.
  function positionMode(el, styles) {
    var pos = styles.position;
    if (pos === 'fixed') return 'fixed';
    if (pos === 'absolute') return 'absolute';
    return 'static'; // static, relative, sticky all get inline-move behavior
  }

  /** Infer the dominant position mode among children of a container. */
  function inferChildPositionMode(parent) {
    var kids = parent.children;
    if (kids.length === 0) {
      // fall back to parent's own layout: absolute if positioned container
      var pcs = window.getComputedStyle(parent);
      return (pcs.position !== 'static') ? 'static' : 'static';
    }
    var abs = 0, stat = 0;
    for (var i = 0; i < kids.length; i++) {
      var cs = window.getComputedStyle(kids[i]);
      if (cs.position === 'absolute' || cs.position === 'fixed') abs++;
      else stat++;
    }
    return abs > stat ? 'absolute' : 'static';
  }

  // ─── Build ElementInfo ─────────────────────────────────────────────────────
  function buildInfo(el) {
    var ref = getRef(el);
    var styles = readStyles(el);
    var parent = el.parentElement;
    return {
      ref: ref,
      tag: el.tagName.toLowerCase(),
      id: el.id || '',
      classes: el.className && typeof el.className === 'string'
        ? el.className.split(' ').filter(Boolean)
        : [],
      rect: rectOf(el),
      styles: styles,
      inline: readInline(el),
      textContent: trunc(el.innerText || el.textContent || '', 80),
      // Editable attrs the sidebar can surface. Sent as-is (no truncation) so
      // the field shows the real value. .value is a property, not an attribute,
      // so read it directly — getAttribute('value') returns the HTML default,
      // not what the user typed.
      attrs: {
        placeholder: el.getAttribute('placeholder') || '',
        value: (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') ? (el.value || '') : '',
        src: el.getAttribute('src') || '',
        alt: el.getAttribute('alt') || '',
        href: el.getAttribute('href') || '',
      },
      childCount: el.children.length,
      parentRef: parent && parent !== document.documentElement ? getRef(parent) : null,
      positionMode: positionMode(el, styles),
      isSVG: !!SVG_SHAPE_TAGS[el.tagName.toLowerCase()] && el.namespaceURI === 'http://www.w3.org/2000/svg',
      descriptor: richDescriptor(el)
    };
  }

  // ─── Outline tree ──────────────────────────────────────────────────────────
  function buildOutlineNode(el, selectedRef, ancestorRefs, depth) {
    var ref = getRef(el);
    var isAncestor = ancestorRefs.indexOf(ref) >= 0;
    var node = {
      ref: ref,
      tag: el.tagName.toLowerCase(),
      label: shortLabel(el),
      childCount: el.children.length,
      isSelected: ref === selectedRef,
      isAncestor: isAncestor
    };
    // Expand: always expand ancestors of selection + the selected node's parent's children
    // Also expand body by default. Cap depth to avoid huge trees.
    var shouldExpand = depth < 2 || isAncestor || ref === selectedRef;
    if (shouldExpand && el.children.length > 0 && depth < 20) {
      var kids = [];
      for (var i = 0; i < el.children.length; i++) {
        kids.push(buildOutlineNode(el.children[i], selectedRef, ancestorRefs, depth + 1));
      }
      node.children = kids;
    }
    return node;
  }

  function ancestorsOf(el) {
    var out = [];
    var cur = el.parentElement;
    while (cur && cur !== document.documentElement) {
      out.push(getRef(cur));
      cur = cur.parentElement;
    }
    return out;
  }

  // ─── Insertion points ──────────────────────────────────────────────────────
  // For a given container element, compute the gaps between its children
  // where a new inline element could be inserted.
  function insertionPointsFor(container) {
    var cs = window.getComputedStyle(container);
    var axis = 'v'; // default: block flow = vertical
    if (cs.display === 'flex' || cs.display === 'inline-flex') {
      axis = (cs.flexDirection === 'row' || cs.flexDirection === 'row-reverse') ? 'h' : 'v';
    } else if (cs.display === 'grid' || cs.display === 'inline-grid') {
      axis = 'h'; // crude — grids are 2D but treat as row-first
    }
    var crect = container.getBoundingClientRect();
    var kids = Array.from(container.children).filter(function(k) {
      // skip our own overlays/tagged elements
      return !k.hasAttribute('data-dm-overlay');
    });
    var points = [];
    var pRef = getRef(container);

    function lineRect(pos, axis) {
      if (axis === 'h') {
        return { x: pos - 1, y: crect.top + 2, width: 2, height: crect.height - 4 };
      }
      return { x: crect.left + 2, y: pos - 1, width: crect.width - 4, height: 2 };
    }

    if (kids.length === 0) {
      // single point at center
      var mid = axis === 'h' ? crect.left + crect.width / 2 : crect.top + crect.height / 2;
      points.push({ parentRef: pRef, index: 0, axis: axis, rect: lineRect(mid, axis) });
    } else {
      // before first
      var r0 = kids[0].getBoundingClientRect();
      var before = axis === 'h' ? (crect.left + r0.left) / 2 : (crect.top + r0.top) / 2;
      points.push({ parentRef: pRef, index: 0, axis: axis, rect: lineRect(before, axis) });
      // between each pair
      for (var i = 0; i < kids.length - 1; i++) {
        var a = kids[i].getBoundingClientRect();
        var b = kids[i + 1].getBoundingClientRect();
        var mid2 = axis === 'h' ? (a.right + b.left) / 2 : (a.bottom + b.top) / 2;
        points.push({ parentRef: pRef, index: i + 1, axis: axis, rect: lineRect(mid2, axis) });
      }
      // after last
      var rl = kids[kids.length - 1].getBoundingClientRect();
      var after = axis === 'h' ? (rl.right + crect.right) / 2 : (rl.bottom + crect.bottom) / 2;
      points.push({ parentRef: pRef, index: kids.length, axis: axis, rect: lineRect(after, axis) });
    }
    return points;
  }

  // ─── Undo stack ────────────────────────────────────────────────────────────
  var undoStack = []; // array of () => void
  function pushUndo(fn) { undoStack.push(fn); if (undoStack.length > 100) undoStack.shift(); }

  // ─── Clipboard ─────────────────────────────────────────────────────────────
  var clipboard = null; // { html: string, tag: string, descriptor: string }

  // ─── State ─────────────────────────────────────────────────────────────────
  // Multi-select: selectedRefs[0] is the "primary" (shown in property panel).
  // Style ops apply to all.
  var selectedRefs = [];
  function primaryRef() { return selectedRefs.length > 0 ? selectedRefs[0] : null; }
  function primaryEl() { var r = primaryRef(); return r != null ? byRef(r) : null; }

  function emitSelection() {
    // Prune disconnected refs
    selectedRefs = selectedRefs.filter(function(r) { var e = byRef(r); return e && e.isConnected; });
    if (selectedRefs.length === 0) {
      emit({ type: 'selection', info: null, allRects: [], similarSelectors: null });
      return;
    }
    var primary = primaryEl();
    var selectors = null;
    try {
      if (window.__generateSelectorList && primary) selectors = window.__generateSelectorList(primary);
    } catch (e) {}
    var allRects = selectedRefs.map(function(r) { return rectOf(byRef(r)); });
    emit({
      type: 'selection',
      info: buildInfo(primary),
      allRects: allRects,
      count: selectedRefs.length,
      similarSelectors: selectors
    });
  }

  function emitRect() {
    if (selectedRefs.length === 0) return;
    var allRects = selectedRefs.map(function(r) { var e = byRef(r); return e ? rectOf(e) : null; }).filter(Boolean);
    emit({ type: 'rect', rects: allRects });
  }

  // Track scroll to keep overlay in sync
  var rafPending = false;
  function onViewChange() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function() { rafPending = false; emitRect(); });
  }
  window.addEventListener('scroll', onViewChange, true);
  window.addEventListener('resize', onViewChange);

  // ─── Public API ────────────────────────────────────────────────────────────
  var DM = {};

  /** Hit-test at viewport coords. If select is true, update selection. extend adds to set. */
  DM.pick = function(x, y, select, extend) {
    var stack = document.elementsFromPoint(x, y);
    var el = stack[0];
    if (!el || el === document.documentElement) el = document.body;
    if (!el) return;
    // Drill-into-selection: when clicking inside the current primary, prefer
    // it (or its descendants) over whatever else happens to be topmost in the
    // stacking order. Newly-inserted elements often land behind siblings that
    // have z-index or transform-induced stacking contexts; without this, the
    // click-inside-chrome → drill-pick path reselects the sibling instead.
    if (select && !extend && selectedRefs.length > 0) {
      var primary = primaryEl();
      if (primary && primary !== el && !primary.contains(el)) {
        for (var i = 1; i < stack.length; i++) {
          if (stack[i] === primary || primary.contains(stack[i])) {
            el = stack[i];
            break;
          }
        }
      }
    }
    var ref = getRef(el);
    if (select) {
      if (extend) {
        var idx = selectedRefs.indexOf(ref);
        if (idx >= 0) selectedRefs.splice(idx, 1); // toggle off
        else selectedRefs.push(ref);
      } else {
        selectedRefs = [ref];
      }
      emitSelection();
    } else {
      emit({ type: 'hover', ref: ref, rect: rectOf(el), tag: el.tagName.toLowerCase() });
    }
  };

  /** Set selection to a known ref. extend adds to set. */
  DM.select = function(ref, extend) {
    if (extend) {
      var idx = selectedRefs.indexOf(ref);
      if (idx >= 0) selectedRefs.splice(idx, 1);
      else selectedRefs.push(ref);
    } else {
      selectedRefs = [ref];
    }
    var el = byRef(ref);
    if (el && el.scrollIntoView) {
      var r = el.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight || r.left < 0 || r.right > window.innerWidth) {
        el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' });
      }
    }
    emitSelection();
  };

  /** Emit a hover rect for a known ref (outline row hover). Pass null to clear. */
  DM.hoverRef = function(ref) {
    if (ref == null) { emit({ type: 'hover', ref: null, rect: null, tag: null }); return; }
    var el = byRef(ref);
    if (!el) { emit({ type: 'hover', ref: null, rect: null, tag: null }); return; }
    emit({ type: 'hover', ref: ref, rect: rectOf(el), tag: el.tagName.toLowerCase() });
  };

  /** Re-emit selection rects. Host calls on window resize so the selection
   *  chrome tracks the new layout; iframe-internal resize doesn't fire when
   *  the iframe itself has a fixed size. No-op when nothing is selected. */
  DM.reemitRects = function() { emitRect(); };

  /** Clear selection. */
  DM.deselect = function() { selectedRefs = []; emitSelection(); };

  /** Navigate: operates on primary selection. */
  DM.nav = function(dir) {
    var el = primaryEl();
    if (!el) { DM.select(getRef(document.body)); return; }
    var next = null;
    if (dir === 'parent') next = el.parentElement !== document.documentElement ? el.parentElement : null;
    else if (dir === 'firstChild') next = el.children[0] || null;
    else if (dir === 'next') next = el.nextElementSibling;
    else if (dir === 'prev') next = el.previousElementSibling;
    if (next) DM.select(getRef(next));
  };

  /** Get the outline tree rooted at body, with selection path expanded. */
  DM.outline = function() {
    var body = document.body;
    if (!body) return;
    var pr = primaryRef();
    var ancestors = pr != null ? ancestorsOf(byRef(pr) || body) : [];
    var root = buildOutlineNode(body, pr, ancestors, 0);
    emit({ type: 'outline', root: root });
  };

  /** Expand a single node's children (lazy). Returns children array. */
  DM.outlineExpand = function(ref) {
    var el = byRef(ref);
    if (!el) return JSON.stringify([]);
    var kids = [];
    for (var i = 0; i < el.children.length; i++) {
      var c = el.children[i];
      kids.push({
        ref: getRef(c),
        tag: c.tagName.toLowerCase(),
        label: shortLabel(c),
        childCount: c.children.length,
        isSelected: selectedRefs.indexOf(getRef(c)) >= 0,
        isAncestor: false
      });
    }
    return JSON.stringify(kids);
  };

  /** Set a single inline style on ALL selected elements. Returns {before, after} from primary. */
  DM.setStyle = function(prop, value) {
    if (selectedRefs.length === 0) return JSON.stringify(null);
    var snapshots = selectedRefs.map(function(r) {
      var el = byRef(r);
      return el ? { el: el, old: el.style[prop] } : null;
    }).filter(Boolean);
    var primary = primaryEl();
    // Report inline-only \`before\` so the edit log shows what the user actually
    // overrode. Falling back to computed produced noisy "rgb(0,0,0) → #000"
    // entries when the panel set what was already the effective value.
    var before = primary ? (primary.style[prop] || '') : '';
    snapshots.forEach(function(s) { s.el.style[prop] = value; });
    pushUndo(function() {
      snapshots.forEach(function(s) { s.el.style[prop] = s.old; });
      emitSelection();
    });
    // emitSelection (not emitRect) so s.styles is fresh on the host's first
    // render — otherwise a controlled TextField bound to setStyle reverts the
    // keystroke when the 'rect' message triggers a render with stale styles,
    // before the host's ping() round-trip catches up. setAttr already does this.
    emitSelection();
    return JSON.stringify({ before: before, after: value });
  };

  /** Set multiple styles on all selected. */
  DM.setStyles = function(stylesJson) {
    if (selectedRefs.length === 0) return JSON.stringify({});
    var styles = JSON.parse(stylesJson);
    var snapshots = selectedRefs.map(function(r) {
      var el = byRef(r);
      return el ? { el: el, css: el.style.cssText } : null;
    }).filter(Boolean);
    var primary = primaryEl();
    var result = {};
    for (var p in styles) {
      var before = primary ? (primary.style[p] || '') : '';
      result[p] = { before: before, after: styles[p] };
    }
    snapshots.forEach(function(s) {
      for (var p in styles) s.el.style[p] = styles[p];
    });
    pushUndo(function() {
      snapshots.forEach(function(s) { s.el.style.cssText = s.css; });
      emitSelection();
    });
    emitSelection();
    return JSON.stringify(result);
  };

  /** Begin a drag transaction — capture a style snapshot for smooth undo. */
  var dragSnapshot = null;
  DM.dragBegin = function(ref) {
    var el = byRef(ref);
    if (!el) return;
    // Snapshot per-prop via el.style[p] (NOT cssText parsing). The browser
    // expands shorthands on both reads, so inline \`padding: 10px\` yields
    // paddingTop==='10px' both before and after — no false diffs.
    var inline = {};
    for (var i = 0; i < STYLE_PROPS.length; i++) {
      inline[STYLE_PROPS[i]] = el.style[STYLE_PROPS[i]] || '';
    }
    // pointerEvents isn't in STYLE_PROPS but dragHideSource touches it and
    // dragEnd restores from this snapshot — capture it explicitly.
    inline.pointerEvents = el.style.pointerEvents || '';
    var parent = el.parentElement;
    dragSnapshot = {
      el: el, css: el.style.cssText, inline: inline,
      parent: parent, next: el.nextElementSibling,
      origIndex: parent ? Array.prototype.indexOf.call(parent.children, el) : -1,
      hidden: false
    };
  };
  /** Apply transient styles during drag (no undo push). */
  DM.dragApply = function(ref, stylesJson) {
    var el = byRef(ref);
    if (!el) return;
    var styles = JSON.parse(stylesJson);
    for (var p in styles) el.style[p] = styles[p];
    emitRect();
  };
  /** Hide the dragged element (for inline-move previews). Restored on dragEnd/Cancel. */
  DM.dragHideSource = function(hide) {
    if (!dragSnapshot) return;
    if (hide && !dragSnapshot.hidden) {
      dragSnapshot.el.style.opacity = '0';
      dragSnapshot.el.style.pointerEvents = 'none';
      dragSnapshot.hidden = true;
    } else if (!hide && dragSnapshot.hidden) {
      // opacity/pointerEvents get restored by cssText on end/cancel, but for
      // live preview we also need to toggle back
      dragSnapshot.el.style.opacity = '';
      dragSnapshot.el.style.pointerEvents = '';
      dragSnapshot.hidden = false;
    }
  };
  /** End drag — push a single undo entry, return final inline styles for edit-log. */
  DM.dragEnd = function() {
    if (!dragSnapshot) return JSON.stringify(null);
    var s = dragSnapshot;
    dragSnapshot = null;
    // Clear transient hide — but restore to the pre-drag inline values,
    // not ''. dragHideSource isn't called on every path (e.g. resize), so
    // blindly clearing would wipe a user-set opacity and falsely report
    // it as changed in the diff below.
    s.el.style.opacity = s.inline.opacity || '';
    s.el.style.pointerEvents = s.inline.pointerEvents || '';
    pushUndo(function() {
      s.el.style.cssText = s.css;
      if (s.el.parentElement !== s.parent || s.el.nextElementSibling !== s.next) {
        if (s.next) s.parent.insertBefore(s.el, s.next);
        else s.parent.appendChild(s.el);
      }
      emitSelection();
    });
    // Report style diff for edit log — only props the drag actually touched.
    var changes = {};
    for (var i = 0; i < STYLE_PROPS.length; i++) {
      var p = STYLE_PROPS[i];
      var now = s.el.style[p] || '';
      var was = s.inline[p] || '';
      if (now !== was) changes[p] = { before: was || '(unset)', after: now || '(unset)' };
    }
    // Report DOM-position change (reparent / reorder). Static drags leave no
    // style diff so this is the only record of the edit.
    var moved = null;
    var newParent = s.el.parentElement;
    if (newParent && (newParent !== s.parent || s.el.nextElementSibling !== s.next)) {
      var newIdx = Array.prototype.indexOf.call(newParent.children, s.el);
      moved = {
        toParent: describe(newParent),
        toIndex: newIdx,
        fromParent: s.parent ? describe(s.parent) : '(none)',
        fromIndex: s.origIndex,
        sameParent: newParent === s.parent
      };
    }
    emitSelection();
    return JSON.stringify({
      changes: changes, moved: moved,
      descriptor: richDescriptor(s.el), tag: s.el.tagName.toLowerCase(), ref: getRef(s.el)
    });
  };
  DM.dragCancel = function() {
    if (!dragSnapshot) return;
    var s = dragSnapshot;
    dragSnapshot = null;
    s.el.style.cssText = s.css;
    if (s.el.parentElement !== s.parent || s.el.nextElementSibling !== s.next) {
      if (s.next) s.parent.insertBefore(s.el, s.next);
      else s.parent.appendChild(s.el);
    }
    emitSelection();
  };

  /** Move element to a new inline position: into parentRef at index. */
  DM.moveInline = function(ref, parentRef, index) {
    var el = byRef(ref);
    var parent = byRef(parentRef);
    if (!el || !parent) return JSON.stringify(null);
    var kids = Array.from(parent.children).filter(function(k) { return k !== el; });
    var before = kids[index] || null;
    // position bookkeeping is handled by caller (clear abs position etc.)
    if (before) parent.insertBefore(el, before);
    else parent.appendChild(el);
    emitRect();
    return JSON.stringify({ parentDescriptor: describe(parent), index: index });
  };

  /** Hit-test for insert mode: return container + insertion points. */
  DM.insertHover = function(x, y) {
    var el = document.elementFromPoint(x, y);
    if (!el || el === document.documentElement) el = document.body;
    if (!el) { emit({ type: 'insertHover', data: null }); return; }
    // Walk up until we find something that can meaningfully contain children
    var container = el;
    var cs = window.getComputedStyle(container);
    // If hovering a leaf text node container, use parent
    if (container.children.length === 0 && container.parentElement && container !== document.body) {
      var ptxt = (container.innerText || '').trim();
      if (ptxt) container = container.parentElement;
    }
    emit({
      type: 'insertHover',
      data: {
        containerRef: getRef(container),
        containerRect: rectOf(container),
        points: insertionPointsFor(container)
      }
    });
  };

  /** Insert a new element as a SIBLING of the primary selection. */
  DM.insertSibling = function(kind) {
    var sibling = primaryEl() || document.body;
    var parent = sibling === document.body ? document.body : sibling.parentElement;
    if (!parent) parent = document.body;

    var el;
    if (kind === 'text') {
      el = document.createElement('span');
      el.textContent = 'Text';
      el.style.fontSize = '16px';
    } else {
      el = document.createElement('div');
      el.style.cssText = 'background:#e5e5e5;min-width:40px;min-height:40px;';
    }

    var mode = inferChildPositionMode(parent);
    var priorParentPos = null;
    if (mode === 'absolute') {
      var pcs = window.getComputedStyle(parent);
      if (pcs.position === 'static') {
        priorParentPos = parent.style.position;
        parent.style.position = 'relative';
      }
      var sr = sibling === document.body ? {left:20,top:20} : sibling.getBoundingClientRect();
      var pr = parent.getBoundingClientRect();
      el.style.position = 'absolute';
      el.style.left = Math.round(sr.left - pr.left + 20) + 'px';
      el.style.top = Math.round(sr.top - pr.top + 20) + 'px';
    }

    if (sibling === document.body) parent.appendChild(el);
    else parent.insertBefore(el, sibling.nextElementSibling);

    var newRef = getRef(el);
    pushUndo(function() {
      el.remove();
      // Restore parent.style.position if we changed it above — leaving
      // 'relative' behind shifts the containing block for any existing
      // absolute-positioned children, and undo must be a full inverse.
      if (priorParentPos !== null) parent.style.position = priorParentPos;
      emitSelection();
    });
    selectedRefs = [newRef];
    emitSelection();
    return JSON.stringify({
      ref: newRef, descriptor: richDescriptor(el), tag: el.tagName.toLowerCase(),
      placement: 'sibling of ' + describe(sibling) + ' (' + mode + ')',
      initialStyle: el.style.cssText
    });
  };

  /** Wrap ALL selected elements in a new container at their nearest common parent. */
  DM.group = function() {
    if (selectedRefs.length === 0) return JSON.stringify(null);
    var els = selectedRefs.map(byRef).filter(function(e) { return e && e !== document.body; });
    if (els.length === 0) return JSON.stringify(null);

    // Drop any element whose ancestor is also selected — keeping both
    // makes the nearest-common-parent walk stop on the ancestor itself
    // (Node.contains returns true for self), and the later
    // wrapper.appendChild(ancestor) throws HierarchyRequestError since
    // wrapper is by then a child of that ancestor. The descendant moves
    // with its ancestor anyway, so dropping it is the correct grouping.
    els = els.filter(function(e) {
      return !els.some(function(other) { return other !== e && other.contains(e); });
    });

    // Sort into document order — selectedRefs is built in click order, and
    // the reverse-undo below only works when each element's captured .next
    // is restored before it. Out-of-order els also causes the forward
    // wrapper.appendChild loop to silently reorder siblings.
    els.sort(function(a, b) {
      return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    // Nearest common parent: if single, just parentElement. If multiple, find shared ancestor.
    var parent = els[0].parentElement;
    if (els.length > 1) {
      // Walk up from first until all others are contained
      while (parent && parent !== document.documentElement) {
        var allIn = els.every(function(e) { return parent.contains(e); });
        if (allIn) break;
        parent = parent.parentElement;
      }
    }
    if (!parent || parent === document.documentElement) parent = document.body;

    // Determine insert position: before the first selected child that is a direct child of parent
    var anchor = null;
    for (var i = 0; i < parent.children.length; i++) {
      if (els.indexOf(parent.children[i]) >= 0 ||
          els.some(function(e) { return parent.children[i].contains(e); })) {
        anchor = parent.children[i]; break;
      }
    }

    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:contents;';
    getRef(wrapper);
    parent.insertBefore(wrapper, anchor);

    // Capture undo state
    var restore = els.map(function(e) { return { el: e, parent: e.parentElement, next: e.nextElementSibling }; });
    els.forEach(function(e) { wrapper.appendChild(e); });

    pushUndo(function() {
      // Reverse order: each element's captured .next is the element after
      // it in the batch. Restoring forward means when we restore A, its
      // next (B) is still inside wrapper -- insertBefore(A, B) throws
      // NotFoundError because B's parent is wrapper, not r.parent.
      // Reverse restores C first (next=D is in place), then B (next=C now
      // in place), then A (next=B now in place).
      for (var i = restore.length - 1; i >= 0; i--) {
        var r = restore[i];
        if (r.next && r.next.isConnected) r.parent.insertBefore(r.el, r.next);
        else r.parent.appendChild(r.el);
      }
      wrapper.remove();
      selectedRefs = els.map(getRef);
      emitSelection();
    });

    selectedRefs = [getRef(wrapper)];
    emitSelection();
    return JSON.stringify({
      ref: getRef(wrapper), descriptor: richDescriptor(wrapper), tag: 'div',
      childDescriptor: els.map(richDescriptor).join('\\n')
    });
  };

  /** Delete ALL selected elements. */
  DM.deleteSelected = function() {
    if (selectedRefs.length === 0) return JSON.stringify(null);
    var els = selectedRefs.map(byRef).filter(function(e) { return e && e !== document.body; });
    if (els.length === 0) return JSON.stringify(null);
    // Drop any element whose ancestor is also selected — removing the
    // ancestor already removes the descendant, and keeping both corrupts
    // undo: the descendant's captured .next is inside the still-disconnected
    // ancestor subtree (isConnected=false), so the reverse-undo appendChild
    // lands it at the wrong sibling position.
    els = els.filter(function(e) {
      return !els.some(function(other) { return other !== e && other.contains(e); });
    });
    // Sort into document order — selectedRefs is click-order, and the
    // reverse-undo below assumes each element's .next is restored first.
    els.sort(function(a, b) {
      return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
    var restore = els.map(function(e) {
      return { el: e, parent: e.parentElement, next: e.nextElementSibling,
               desc: richDescriptor(e), tag: e.tagName.toLowerCase(), ref: getRef(e) };
    });
    els.forEach(function(e) { e.remove(); });
    pushUndo(function() {
      // Reverse order so each element's .next has already been put back
      // by the time it's needed as the insertBefore reference. Forward
      // iteration with consecutive siblings [A,B,C] would try to insert A
      // before B while B is still removed (isConnected=false -> appendChild
      // to end), silently corrupting the order to [X, C, D, Y, A, B].
      for (var i = restore.length - 1; i >= 0; i--) {
        var r = restore[i];
        if (r.next && r.next.isConnected) r.parent.insertBefore(r.el, r.next);
        else r.parent.appendChild(r.el);
      }
      selectedRefs = restore.map(function(r) { return r.ref; });
      emitSelection();
    });
    // Select first remaining context: first next sibling or parent
    var newSel = restore[0].next || restore[0].parent;
    selectedRefs = newSel && newSel.isConnected ? [getRef(newSel)] : [];
    emitSelection();
    // Return the primary for edit-log compatibility
    var r = restore[0];
    return JSON.stringify({ ref: r.ref, descriptor: r.desc, tag: r.tag, count: restore.length });
  };

  /** Copy primary selection to internal clipboard. */
  DM.copy = function() {
    var el = primaryEl();
    if (!el) return JSON.stringify(null);
    clipboard = { html: el.outerHTML, tag: el.tagName.toLowerCase(), descriptor: describe(el) };
    return JSON.stringify(clipboard);
  };

  /** Paste clipboard into/after selection. If duplicate is true, paste as next sibling. */
  DM.paste = function(duplicate) {
    if (!clipboard) return JSON.stringify(null);
    var el = primaryEl();
    if (!el) return JSON.stringify(null);
    // <template> parses context-dependent tags (tr/td/th/option/etc.) that
    // a <div>'s innerHTML would silently drop.
    var tmp = document.createElement('template');
    tmp.innerHTML = clipboard.html;
    var newEl = tmp.content.firstElementChild;
    if (!newEl) return JSON.stringify(null);
    // strip stale refs from the clone
    newEl.removeAttribute('data-dm-ref');
    newEl.querySelectorAll('[data-dm-ref]').forEach(function(c) { c.removeAttribute('data-dm-ref'); });
    var placement;
    if (duplicate || el === document.body) {
      // insert as next sibling (or as last child of body)
      if (el === document.body) {
        el.appendChild(newEl);
        placement = 'appended to <body>';
      } else {
        el.parentElement.insertBefore(newEl, el.nextElementSibling);
        placement = 'after ' + describe(el);
      }
    } else {
      el.appendChild(newEl);
      placement = 'inside ' + describe(el);
    }
    var newRef = getRef(newEl);
    pushUndo(function() { newEl.remove(); emitSelection(); });
    selectedRefs = [newRef];
    emitSelection();
    return JSON.stringify({
      ref: newRef,
      descriptor: richDescriptor(newEl),
      tag: newEl.tagName.toLowerCase(),
      sourceDescriptor: clipboard.descriptor,
      placement: placement
    });
  };

  /** Undo last action. */
  DM.undo = function() {
    var fn = undoStack.pop();
    if (fn) fn();
  };

  /**
   * Set an attribute on all selected elements. For 'value' on input/textarea
   * we also set the property so the live field updates — the attribute alone
   * only changes the default, not the current display value.
   */
  DM.setAttr = function(name, value) {
    if (selectedRefs.length === 0) return JSON.stringify(null);
    var primary = primaryEl();
    var isVal = name === 'value';
    var before = isVal && primary && 'value' in primary
      ? primary.value
      : (primary ? (primary.getAttribute(name) || '') : '');
    var snaps = selectedRefs.map(function(r) {
      var el = byRef(r);
      if (!el) return null;
      return {
        el: el,
        old: isVal && 'value' in el
          ? el.value
          : (el.hasAttribute(name) ? el.getAttribute(name) : null),
      };
    }).filter(Boolean);
    snaps.forEach(function(s) {
      if (isVal && 'value' in s.el) s.el.value = value;
      if (value === '') s.el.removeAttribute(name);
      else s.el.setAttribute(name, value);
    });
    pushUndo(function() {
      snaps.forEach(function(s) {
        if (isVal && 'value' in s.el) s.el.value = s.old || '';
        if (s.old == null) s.el.removeAttribute(name);
        else s.el.setAttribute(name, s.old);
      });
      emitSelection();
    });
    emitSelection();
    return JSON.stringify({ before: before, after: value });
  };

  /** Set text content. */
  DM.setText = function(ref, text) {
    var el = byRef(ref);
    if (!el) return JSON.stringify(null);
    var before = el.textContent || '';
    el.textContent = text;
    pushUndo(function() { el.textContent = before; emitSelection(); });
    emitSelection();
    return JSON.stringify({ before: before, after: text });
  };

  // ─── Inline text editing ───────────────────────────────────────────────────
  var textEditState = null; // { el, original }

  /** Start inline text editing on the selection (contentEditable). */
  DM.textEditBegin = function() {
    var el = primaryEl();
    if (!el) return JSON.stringify(null);
    textEditState = { el: el, original: el.textContent || '' };
    el.contentEditable = 'true';
    el.style.outline = '2px solid #2563EB';
    el.style.outlineOffset = '2px';
    el.focus();
    // place caret at end
    var range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges(); sel.addRange(range);
    return JSON.stringify({ original: textEditState.original });
  };

  /** Commit the inline text edit. Returns {before, after}. */
  DM.textEditCommit = function() {
    if (!textEditState) return JSON.stringify(null);
    var el = textEditState.el;
    var before = textEditState.original;
    var after = el.textContent || '';
    el.contentEditable = 'false';
    el.style.outline = ''; el.style.outlineOffset = '';
    textEditState = null;
    if (before !== after) {
      pushUndo(function() { el.textContent = before; emitSelection(); });
    }
    emitSelection();
    return JSON.stringify({ before: before, after: after, changed: before !== after });
  };

  /** Revert the inline text edit (esc). */
  DM.textEditRevert = function() {
    if (!textEditState) return;
    var el = textEditState.el;
    el.textContent = textEditState.original;
    el.contentEditable = 'false';
    el.style.outline = ''; el.style.outlineOffset = '';
    textEditState = null;
    emitSelection();
  };

  /** Change the selection's position mode. Returns the changes for edit log. */
  DM.setPositionMode = function(mode) {
    var el = primaryEl();
    if (!el) return JSON.stringify(null);
    var cs = window.getComputedStyle(el);
    var before = cs.position;
    var snapshot = el.style.cssText;
    if (mode === 'static') {
      el.style.position = '';
      el.style.left = ''; el.style.top = '';
      el.style.right = ''; el.style.bottom = '';
    } else if (mode === 'relative') {
      // Keep any existing insets — relative offsets are author intent.
      el.style.position = 'relative';
    } else if (mode === 'absolute' || mode === 'fixed') {
      var r = el.getBoundingClientRect();
      if (mode === 'fixed') {
        // fixed: containing block is the viewport; getBoundingClientRect is
        // already viewport-relative, so use r.left/r.top directly.
        el.style.position = mode;
        el.style.left = Math.round(r.left) + 'px';
        el.style.top = Math.round(r.top) + 'px';
      } else {
        // absolute: compute offset relative to positioned ancestor so it stays put
        var ancestor = el.offsetParent || document.body;
        var ar = ancestor.getBoundingClientRect();
        el.style.position = mode;
        el.style.left = Math.round(r.left - ar.left) + 'px';
        el.style.top = Math.round(r.top - ar.top) + 'px';
      }
    }
    pushUndo(function() { el.style.cssText = snapshot; emitSelection(); });
    emitSelection();
    return JSON.stringify({ before: before, after: mode });
  };

  /** Preview a selector's matches: emit their rects so overlay can draw boxes. */
  DM.previewSelector = function(selector) {
    try {
      var matches = document.querySelectorAll(selector);
      var rects = [];
      for (var i = 0; i < matches.length && i < 200; i++) {
        rects.push(rectOf(matches[i]));
      }
      emit({ type: 'similarRects', rects: rects });
    } catch (e) {
      emit({ type: 'similarRects', rects: [] });
    }
  };

  /** Select ALL elements matching the selector (multi-select). */
  DM.selectSimilar = function(selector) {
    try {
      var matches = document.querySelectorAll(selector);
      selectedRefs = [];
      for (var i = 0; i < matches.length && i < 200; i++) {
        selectedRefs.push(getRef(matches[i]));
      }
      emitSelection();
    } catch (e) {}
  };

  /** Scroll the iframe by a delta — used to forward wheel events from overlay. */
  DM.scrollBy = function(dx, dy) {
    window.scrollBy(dx, dy);
  };

  /** Reorder primary selection among its siblings by ±delta. Undoable. */
  DM.nudgeIndex = function(delta) {
    var el = primaryEl();
    if (!el || el === document.body) return JSON.stringify(null);
    var parent = el.parentElement;
    if (!parent) return JSON.stringify(null);
    var kids = Array.from(parent.children);
    var idx = kids.indexOf(el);
    var newIdx = Math.max(0, Math.min(kids.length - 1, idx + delta));
    if (newIdx === idx) return JSON.stringify(null);
    var oldNext = el.nextElementSibling;
    // insertBefore ref: when moving forward, insert before the element that's
    // currently 2 positions ahead (since we vacate our slot first).
    var refNode = delta > 0 ? kids[newIdx + 1] || null : kids[newIdx];
    parent.insertBefore(el, refNode);
    pushUndo(function() {
      if (oldNext) parent.insertBefore(el, oldNext);
      else parent.appendChild(el);
      emitSelection();
    });
    emitSelection();
    return JSON.stringify({ from: idx, to: newIdx, descriptor: richDescriptor(el), tag: el.tagName.toLowerCase(), ref: getRef(el) });
  };

  /** Select all direct children of the primary selection. */
  DM.selectChildren = function() {
    var el = primaryEl();
    if (!el || el.children.length === 0) return;
    selectedRefs = [];
    for (var i = 0; i < el.children.length; i++) {
      selectedRefs.push(getRef(el.children[i]));
    }
    emitSelection();
  };

  /** Select all siblings (including self) of the primary selection. */
  DM.selectSiblings = function() {
    var el = primaryEl();
    if (!el || el === document.body) return;
    var parent = el.parentElement;
    if (!parent) return;
    selectedRefs = [];
    for (var i = 0; i < parent.children.length; i++) {
      selectedRefs.push(getRef(parent.children[i]));
    }
    emitSelection();
  };

  /** Collect unique colors from the document's computed styles. */
  DM.getDocumentColors = function() {
    var seen = {};
    var colors = [];
    var props = ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke'];
    var els = document.body.querySelectorAll('*');
    var max = Math.min(els.length, 500); // cap for perf
    for (var i = 0; i < max; i++) {
      var cs = window.getComputedStyle(els[i]);
      for (var j = 0; j < props.length; j++) {
        var v = cs[props[j]];
        if (!v || v === 'none' || v.indexOf('rgba(0, 0, 0, 0)') >= 0) continue;
        // normalize: keep only rgb/rgba/hex-like
        if (v.indexOf('rgb') === 0 || v.charAt(0) === '#') {
          if (!seen[v]) { seen[v] = true; colors.push(v); }
        }
      }
      if (colors.length >= 24) break;
    }
    return JSON.stringify(colors);
  };

  /** Collect unique font-family values from the document. */
  DM.getDocumentFonts = function() {
    var seen = {};
    var fonts = [];
    var els = document.body.querySelectorAll('*');
    var max = Math.min(els.length, 500);
    for (var i = 0; i < max; i++) {
      var ff = window.getComputedStyle(els[i]).fontFamily;
      if (!ff) continue;
      // take first family in the stack, strip quotes
      var first = ff.split(',')[0].trim().replace(/^["']|["']$/g, '');
      if (first && !seen[first]) { seen[first] = true; fonts.push(first); }
      if (fonts.length >= 12) break;
    }
    return JSON.stringify(fonts);
  };

  /** Re-emit current selection info (useful after external reload). */
  DM.ping = function() { emitSelection(); };

  // ─── DOM snapshot ──────────────────────────────────────────────────────────
  // Pretty-printed serialization of document.body for before/after diffing.
  // One tag per line, children indented, text nodes on their own line.
  //
  // Fiber-derived React component names are stamped as data-react-component
  // attrs for the duration of the walk only — the live DOM is clean again by
  // the time this function returns.
  //
  // data-dm-ref is stripped from the output: it's session-local noise that
  // would show up as a spurious diff on every element design-mode touched.
  // style/script bodies are elided — huge, and the diff cares about structure.
  var SNAP_SKIP_ATTRS = { 'data-dm-ref': 1, 'contenteditable': 1 };
  var SNAP_ELIDE_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };

  function snapSerialize(el, depth, out) {
    var ind = '  '.repeat(depth);
    var tag = el.tagName.toLowerCase();
    var open = ind + '<' + tag;
    var attrs = el.attributes;
    for (var i = 0; i < attrs.length; i++) {
      var a = attrs[i];
      if (SNAP_SKIP_ATTRS[a.name]) continue;
      // Quote-escape just enough to keep one attr per line-ish; the point is
      // diffability, not valid HTML.
      var v = a.value.replace(/"/g, '&quot;').replace(/\\n/g, ' ');
      open += ' ' + a.name + '="' + v + '"';
    }
    open += '>';
    out.push(open);

    if (SNAP_ELIDE_TAGS[el.tagName]) {
      out.push(ind + '  …');
    } else {
      var kids = el.childNodes;
      for (var k = 0; k < kids.length; k++) {
        var c = kids[k];
        if (c.nodeType === 1) {
          snapSerialize(c, depth + 1, out);
        } else if (c.nodeType === 3) {
          var t = c.textContent.replace(/\\s+/g, ' ').trim();
          if (t) out.push(ind + '  ' + t);
        }
      }
    }
    out.push(ind + '</' + tag + '>');
  }

  DM.snapshot = function() {
    // Stamp. Cap the scan — a prototype with 10k nodes doesn't need per-node
    // component labels to produce a useful diff, and the fiber walk isn't free.
    var all = document.body.querySelectorAll('*');
    var n = Math.min(all.length, 4000);
    var stamped = [];
    for (var i = 0; i < n; i++) {
      var rn = reactName(all[i]);
      if (rn) { all[i].setAttribute('data-react-component', rn); stamped.push(all[i]); }
    }
    // Serialize.
    var lines = [];
    snapSerialize(document.body, 0, lines);
    // Unstamp.
    for (var j = 0; j < stamped.length; j++) stamped[j].removeAttribute('data-react-component');
    return lines.join('\\n');
  };

  window.__DM = DM;
})();
`;export{e as DESIGN_MODE_SCRIPT};
