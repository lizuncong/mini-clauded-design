import{c$ as de,d0 as q,d1 as b,d2 as Q,d3 as $,d4 as N,d5 as H,d6 as J,d7 as fe,d8 as F,d9 as pe,da as me,db as X,dc as ie,r as c,dd as oe,E as ge,R as ye,b3 as be,a as ve,j as p,s as v,B as we,C as xe,k as I,n as ae,cZ as Re,de as Ee}from"./index-Bey6wlSl.js";var Se=class extends de{constructor(e,t){super(),this.options=t,this.#s=e,this.#n=null,this.#r=q(),this.bindMethods(),this.setOptions(t)}#s;#e=void 0;#p=void 0;#t=void 0;#o;#u;#r;#n;#m;#h;#d;#a;#c;#i;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),ee(this.#e,this.options)?this.#l():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return B(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return B(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#w(),this.#x(),this.#e.removeObserver(this)}setOptions(e){const t=this.options,s=this.#e;if(this.options=this.#s.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof b(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#R(),this.#e.setOptions(this.options),t._defaulted&&!Q(this.options,t)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const r=this.hasListeners();r&&te(this.#e,s,this.options,t)&&this.#l(),this.updateResult(),r&&(this.#e!==s||b(this.options.enabled,this.#e)!==b(t.enabled,this.#e)||$(this.options.staleTime,this.#e)!==$(t.staleTime,this.#e))&&this.#g();const n=this.#y();r&&(this.#e!==s||b(this.options.enabled,this.#e)!==b(t.enabled,this.#e)||n!==this.#i)&&this.#b(n)}getOptimisticResult(e){const t=this.#s.getQueryCache().build(this.#s,e),s=this.createResult(t,e);return Te(this,s)&&(this.#t=s,this.#u=this.options,this.#o=this.#e.state),s}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(s,r)=>(this.trackProp(r),t?.(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#r.status==="pending"&&this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(s,r))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#s.defaultQueryOptions(e),s=this.#s.getQueryCache().build(this.#s,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#l({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#l(e){this.#R();let t=this.#e.fetch(this.options,e);return e?.throwOnError||(t=t.catch(N)),t}#g(){this.#w();const e=$(this.options.staleTime,this.#e);if(H||this.#t.isStale||!J(e))return;const s=fe(this.#t.dataUpdatedAt,e)+1;this.#a=F.setTimeout(()=>{this.#t.isStale||this.updateResult()},s)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#b(e){this.#x(),this.#i=e,!(H||b(this.options.enabled,this.#e)===!1||!J(this.#i)||this.#i===0)&&(this.#c=F.setInterval(()=>{(this.options.refetchIntervalInBackground||pe.isFocused())&&this.#l()},this.#i))}#v(){this.#g(),this.#b(this.#y())}#w(){this.#a&&(F.clearTimeout(this.#a),this.#a=void 0)}#x(){this.#c&&(F.clearInterval(this.#c),this.#c=void 0)}createResult(e,t){const s=this.#e,r=this.options,n=this.#t,o=this.#o,i=this.#u,d=e!==s?e.state:this.#p,{state:f}=e;let l={...f},x=!1,u;if(t._optimisticResults){const y=this.hasListeners(),_=!y&&ee(e,t),P=y&&te(e,s,t,r);(_||P)&&(l={...l,...me(f.data,e.options)}),t._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:w,errorUpdatedAt:S,status:g}=l;u=l.data;let M=!1;if(t.placeholderData!==void 0&&u===void 0&&g==="pending"){let y;n?.isPlaceholderData&&t.placeholderData===i?.placeholderData?(y=n.data,M=!0):y=typeof t.placeholderData=="function"?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,y!==void 0&&(g="success",u=X(n?.data,y,t),x=!0)}if(t.select&&u!==void 0&&!M)if(n&&u===o?.data&&t.select===this.#m)u=this.#h;else try{this.#m=t.select,u=t.select(u),u=X(n?.data,u,t),this.#h=u,this.#n=null}catch(y){this.#n=y}this.#n&&(w=this.#n,u=this.#h,S=Date.now(),g="error");const k=l.fetchStatus==="fetching",O=g==="pending",a=g==="error",m=O&&k,R=u!==void 0,C={status:g,fetchStatus:l.fetchStatus,isPending:O,isSuccess:g==="success",isError:a,isInitialLoading:m,isLoading:m,data:u,dataUpdatedAt:l.dataUpdatedAt,error:w,errorUpdatedAt:S,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>d.dataUpdateCount||l.errorUpdateCount>d.errorUpdateCount,isFetching:k,isRefetching:k&&!O,isLoadingError:a&&!R,isPaused:l.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:a&&R,isStale:K(e,t),refetch:this.refetch,promise:this.#r,isEnabled:b(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const y=C.data!==void 0,_=C.status==="error"&&!y,P=U=>{_?U.reject(C.error):y&&U.resolve(C.data)},Z=()=>{const U=this.#r=C.promise=q();P(U)},j=this.#r;switch(j.status){case"pending":e.queryHash===s.queryHash&&P(j);break;case"fulfilled":(_||C.data!==j.value)&&Z();break;case"rejected":(!_||C.error!==j.reason)&&Z();break}}return C}updateResult(){const e=this.#t,t=this.createResult(this.#e,this.options);if(this.#o=this.#e.state,this.#u=this.options,this.#o.data!==void 0&&(this.#d=this.#e),Q(t,e))return;this.#t=t;const s=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,n=typeof r=="function"?r():r;if(n==="all"||!n&&!this.#f.size)return!0;const o=new Set(n??this.#f);return this.options.throwOnError&&o.add("error"),Object.keys(this.#t).some(i=>{const h=i;return this.#t[h]!==e[h]&&o.has(h)})};this.#E({listeners:s()})}#R(){const e=this.#s.getQueryCache().build(this.#s,this.options);if(e===this.#e)return;const t=this.#e;this.#e=e,this.#p=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#E(e){ie.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#t)}),this.#s.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function Ce(e,t){return b(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ee(e,t){return Ce(e,t)||e.state.data!==void 0&&B(e,t,t.refetchOnMount)}function B(e,t,s){if(b(t.enabled,e)!==!1&&$(t.staleTime,e)!=="static"){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&K(e,t)}return!1}function te(e,t,s,r){return(e!==t||b(r.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&K(e,s)}function K(e,t){return b(t.enabled,e)!==!1&&e.isStaleByTime($(t.staleTime,e))}function Te(e,t){return!Q(e.getCurrentResult(),t)}var ce=c.createContext(!1),Ie=()=>c.useContext(ce);ce.Provider;function ke(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Oe=c.createContext(ke()),_e=()=>c.useContext(Oe),$e=(e,t,s)=>{const r=s?.state.error&&typeof e.throwOnError=="function"?oe(e.throwOnError,[s.state.error,s]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},De=e=>{c.useEffect(()=>{e.clearReset()},[e])},Me=({result:e,errorResetBoundary:t,throwOnError:s,query:r,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(n&&e.data===void 0||oe(s,[e.error,r])),Pe=e=>{if(e.suspense){const s=n=>n==="static"?n:Math.max(n??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...n)=>s(r(...n)):s(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},je=(e,t)=>e.isLoading&&e.isFetching&&!t,Ue=(e,t)=>e?.suspense&&t.isPending,se=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function Fe(e,t,s){const r=Ie(),n=_e(),o=ge(),i=o.defaultQueryOptions(e);o.getDefaultOptions().queries?._experimental_beforeQuery?.(i);const h=o.getQueryCache().get(i.queryHash);i._optimisticResults=r?"isRestoring":"optimistic",Pe(i),$e(i,n,h),De(n);const d=!o.getQueryCache().get(i.queryHash),[f]=c.useState(()=>new t(o,i)),l=f.getOptimisticResult(i),x=!r&&e.subscribed!==!1;if(c.useSyncExternalStore(c.useCallback(u=>{const w=x?f.subscribe(ie.batchCalls(u)):N;return f.updateResult(),w},[f,x]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),c.useEffect(()=>{f.setOptions(i)},[i,f]),Ue(i,l))throw se(i,f,n);if(Me({result:l,errorResetBoundary:n,throwOnError:i.throwOnError,query:h,suspense:i.suspense}))throw l.error;return o.getDefaultOptions().queries?._experimental_afterQuery?.(i,l),i.experimental_prefetchInRender&&!H&&je(l,r)&&(d?se(i,f,n):h?.promise)?.catch(N).finally(()=>{f.updateResult()}),i.notifyOnChangeProps?l:f.trackResult(l)}function yt(e,t){return Fe(e,Se)}const D={progress:0,crosshair:0},G={},Le={progress:"* { cursor: progress !important; }",crosshair:"* { cursor: crosshair !important; }"},re=["crosshair","progress"];function Ae(e){let t=G[e];return t||(t=document.createElement("style"),t.setAttribute("data-alt-cursor",e),t.textContent=Le[e],G[e]=t),t}function A(){for(const e of re)G[e]?.remove();for(const e of re)D[e]>0&&document.head.appendChild(Ae(e))}function Qe(e,t){c.useEffect(()=>{if(t)return D[e]++,A(),()=>{D[e]--,A()}},[e,t])}function bt(e){Qe("progress",e)}async function vt(e){D.progress++,A(),await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(()=>t())));try{return await e()}finally{D.progress--,A()}}const V="700px",Ne=250,He=200,Y=800,Be=Y*10/16,le="/design/gallery",Ge="omelette:pending-seed-prompt";function ze(e){let t=5381;for(let s=0;s<e.length;s++)t=t*33^e.charCodeAt(s);return t>>>0}function We(e){let t=e;return()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function Ke(e){const t=new Date,s=`${t.getUTCFullYear()}-${t.getUTCMonth()+1}-${t.getUTCDate()}`,r=We(ze(s)),n=e.slice();for(let o=n.length-1;o>0;o--){const i=Math.floor(r()*(o+1));[n[o],n[i]]=[n[i],n[o]]}return n}const Ve=new Set(["text-around-drawing"]),Ye=[{id:"text-around-drawing",title:"Text around drawing",prompt:"Draw a page of two-column lorem ipsum — enough to fill any viewport. Add a red crayon-style pen tool. As I draw, in realtime, make text avoid filling whatever I have drawn, with a substantial margin."},{id:"app-onboarding",title:"App onboarding",prompt:"Create a simple iOS signup flow for a bikesharing app. Show screens on a canvas. Blue + orange modern color scheme."},{id:"organic-loaders",title:"Organic loaders",prompt:"Prototype 20 simple, tasteful indeterminate loading indicators that fit in a 200×200 space, on a wrapping grid. All black and white, no text. All should have an organic, blobby feeling."},{id:"shader-wallpapers",title:"Shader wallpapers",prompt:"Imagine you’re creating a wallpaper for a futuristic operating system. We want it to feel interactive and fun to fidget with. Create five different interactive shader wallpapers that react to mouse position, and maybe clicks."},{id:"iridescent-card",title:"Iridescent card",prompt:"Create a monochromatic playing card. Display it on the page with a rich perspective hover effect and glow. The bright areas should be iridescent; there should be a subtle noise texture and specular glow that reacts to the mouse position. Add tweaks for as many aspects of this effect as you can."},{id:"calculator-kit",title:"Calculator construction kit",prompt:'Create a "Calculator construction kit" — a simple calculator UI with a LOT of tweaks (do not use the normal tweaks system; keep these tweaks onscreen at all times). Use a two-column layout. Provide a ton of visual + layout options.',links:[{text:'"Calculator construction kit"',href:"https://www.folklore.org/Calculator_Construction_Set.html"}]},{id:"text-particle-effects",title:"Text particle effects",prompt:'Create a very large editable text box, pre-filled with sample text. For certain words like "Fire", "Smoke", "metal", "wind", render visual + particle effects that match the word.'},{id:"globe-loader",title:"Globe loader",prompt:"Prototype a loading indicator that shows the globe spinning with real country outlines, full monochrome, no text, 200×200 centered on off-white background. Add a whirl effect around it."},{id:"text-streaming",title:"Text streaming",prompt:"On a responsive grid, animate 10 different text-streaming animations for a chat app; sample each one in a 300×300 cell; show a user question and stream a response below. Loop it. Monochrome."},{id:"cosmic-scale",title:"Cosmic scale animation",prompt:"Create a sprite-based animation that gives fun facts about the distance and sizes of celestial bodies. Mix abstract animations using circles of various sizes as celestial bodies with text-based animation. Use a monochrome, helvetica palette."}],Ze=v.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,qe=v.div`
  display: grid;
  grid-template-columns: 1fr ${Ne}px;
  column-gap: 28px;
  align-items: start;

  @media (max-width: ${V}) {
    grid-template-columns: 1fr;
    row-gap: 14px;
  }
`,Je=v.div`
  position: relative;
  aspect-ratio: 16 / 10;
  transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  transform: ${e=>e.$active?"scale(1.02)":"scale(1)"};
  transform-origin: center center;

  &:hover {
    transform: ${e=>e.$active?"scale(1.02)":"scale(1.01)"};
  }

  @media (max-width: ${V}) {
    transform: none;
    &:hover {
      transform: none;
    }
  }
`,Xe=v.div`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${I.bg.surface};
  border: 1px solid ${I.border.subtle};
  box-shadow: ${I.shadow.sm};
`,et=v.div`
  position: absolute;
  inset: 0;
  background: url(${e=>e.$src}) right top / cover no-repeat;
  opacity: ${e=>e.$hidden?0:1};
  transition: opacity 0.3s ease;
  pointer-events: none;
`,tt=v.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: ${Y}px;
  height: ${Be}px;
  border: 0;
  background: transparent;
  transform-origin: top left;
  transform: scale(${e=>e.$scale});
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
`,st=v.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0;

  @media (max-width: ${V}) {
    padding: 0;
  }
`,rt=v.div`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 22px;
  font-weight: 430;
  line-height: 1.2;
  color: ${I.text.primary};
  margin-bottom: 10px;
`,nt=v.div`
  font-size: 13px;
  line-height: 1.5;
  font-style: italic;
  color: ${I.text.secondary};
  margin-bottom: 14px;

  &::before {
    content: '\u201C';
  }
  &::after {
    content: '\u201D';
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`,it=v.div`
  align-self: flex-start;
`,ot=v.div`
  position: absolute;
  bottom: 10px;
  right: 12px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: ${I.text.inverse};
  background: rgba(15, 12, 8, 0.5);
  padding: 4px 8px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
  pointer-events: none;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.25s ease;

  .touch-only {
    display: none;
  }
  @media (hover: none) {
    .hover-only {
      display: none;
    }
    .touch-only {
      display: inline;
    }
  }
`;function at({text:e,links:t}){if(!t||t.length===0)return p.jsx(p.Fragment,{children:e});const s=[];let r=0;const n=t.map(o=>({...o,at:e.indexOf(o.text,0)})).filter(o=>o.at>=0).sort((o,i)=>o.at-i.at);for(const o of n)o.at<r||(o.at>r&&s.push(e.slice(r,o.at)),s.push(p.jsx("a",{href:o.href,target:"_blank",rel:"noopener noreferrer nofollow",children:o.text},o.at)),r=o.at+o.text.length);return r<e.length&&s.push(e.slice(r)),p.jsx(p.Fragment,{children:s})}function ct(e,t){const[s,r]=c.useState(null);return c.useEffect(()=>{if(!t){r(null);return}let n=!1,o=null;return(async()=>{try{const i=await fetch(`${le}/${e}.html.gz`);if(!i.ok||!i.body)throw new Error(`gallery fetch ${e}: ${i.status}`);const h=i.body.pipeThrough(new DecompressionStream("gzip")),d=await new Response(h,{headers:{"Content-Type":"text/html"}}).blob();if(n)return;o=URL.createObjectURL(d),r(o)}catch{n||r(null)}})(),()=>{n=!0,o&&URL.revokeObjectURL(o)}},[e,t]),s}function lt(){const e=c.useRef(null),[t,s]=c.useState(0);return c.useEffect(()=>{const r=e.current;if(!r)return;const n=()=>{const i=r.offsetWidth;i>0&&s(i/Y)};n();const o=new ResizeObserver(n);return o.observe(r),()=>o.disconnect()},[]),[e,t]}function ut({item:e,isSelected:t,loaded:s,creating:r,createDisabled:n,onHoverStart:o,onHoverEnd:i,onActivate:h,onIframeLoaded:d,onIframeError:f,onCreate:l}){const[x,u]=lt(),w=`${le}/${e.id}.jpg`,S=ct(e.id,t&&u>0);return p.jsxs(qe,{children:[p.jsx(Je,{$active:t,onMouseEnter:()=>o(e.id),onMouseLeave:i,onClick:()=>h(e.id),role:"button",tabIndex:0,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),h(e.id))},"aria-label":`${e.title} — activate preview`,children:p.jsxs(Xe,{ref:x,children:[S&&p.jsx(tt,{src:S,title:e.title,$visible:s,$scale:u,sandbox:"allow-scripts",onLoad:()=>d(e.id),onError:()=>f(e.id)}),p.jsx(et,{$src:w,$hidden:t&&s}),p.jsxs(ot,{$visible:!(t&&s),"aria-hidden":"true",children:[p.jsx("span",{className:"hover-only",children:"Hover to preview"}),p.jsx("span",{className:"touch-only",children:"Tap to preview"})]})]})}),p.jsxs(st,{children:[p.jsx(rt,{children:e.title}),p.jsx(nt,{children:p.jsx(at,{text:e.prompt,links:e.links})}),p.jsx(it,{children:p.jsx(we,{variant:"primary",size:"md",loading:r,disabled:r||n,title:n?xe:void 0,onClick:()=>void l(e),children:"Use this prompt"})})]})]})}function wt({onCreateProject:e}){const t=ye.useMemo(()=>Ke(Ye.filter(a=>!Ve.has(a.id))),[]),[s,r]=c.useState(()=>t[0]?.id??""),[n,o]=c.useState({}),i=c.useRef(null),[,h]=be(Ge,null);c.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const d=c.useCallback(a=>{r(a),o(m=>{if(!m[a])return m;const R={...m};return delete R[a],R})},[]),f=c.useCallback(a=>{i.current&&(clearTimeout(i.current),i.current=null),a!==s&&(i.current=setTimeout(()=>d(a),He))},[s,d]),l=c.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=null)},[]),x=c.useCallback(a=>{i.current&&(clearTimeout(i.current),i.current=null),a!==s&&d(a)},[s,d]),u=c.useRef(null),[w,S]=c.useState(null),g=ve(),M=c.useCallback(async a=>{if(!e||w)return;const m=a.prompt;u.current=m,h(m),S(a.id);try{await e(a.title,[])}catch{u.current===m&&h(null)}finally{S(null)}},[w,e,h]),k=c.useCallback(a=>{o(m=>({...m,[a]:!0}))},[]),O=c.useCallback(a=>{o(m=>{if(!m[a])return m;const R={...m};return delete R[a],R})},[]);return p.jsx(Ze,{children:t.map(a=>p.jsx(ut,{item:a,isSelected:a.id===s,loaded:!!n[a.id],creating:w===a.id,createDisabled:g,onHoverStart:f,onHoverEnd:l,onActivate:x,onIframeLoaded:k,onIframeError:O,onCreate:M},a.id))})}const T=new Map,E=new Map,z=new Set;let L=0;function ue(e,t){return`${e}:${t?"1":"0"}`}function he(){for(const e of z)e()}async function W(e,t){const s=ue(e,t);if(E.has(s))return E.get(s);const r=(async()=>{const n=L,o=ae(),i=[];let h="";try{do{const d=await o.listOrgProjects({type:Re(e),publishedOnly:t,cursor:h});i.push(...d.items.map(Ee)),h=d.cursor}while(h);if(n!==L){!T.has(s)&&!E.has(s)&&W(e,t);return}T.set(s,{items:i,loading:!1,error:null})}catch(d){if(n!==L){!T.has(s)&&!E.has(s)&&W(e,t);return}const f=T.get(s);T.set(s,{items:f?.items??[],loading:!1,error:d instanceof Error?d.message:String(d)})}he()})();return E.set(s,r),r.finally(()=>{E.get(s)===r&&E.delete(s)}),r}function ht(e){return z.add(e),()=>{z.delete(e)}}function xt(){L++,T.clear(),E.clear(),he()}const dt={items:[],loading:!0,error:null};function Rt(e,t=!1){const s=ue(e,t),r=c.useSyncExternalStore(ht,()=>T.get(s));return c.useEffect(()=>{!T.has(s)&&!E.has(s)&&W(e,t)},[s,r,e,t]),r??dt}const ne=32e3,ft=2e3;async function pt(e){const t=async n=>{try{const o=await ae().getFile({projectId:e,path:n,raw:!0});return new TextDecoder().decode(o.content)}catch{return null}},s=(async()=>await t("README.md")??await t("base.md"))();return await Promise.race([s,new Promise(n=>setTimeout(()=>n(null),ft))])??""}async function Et(e,t){let s=await pt(e);s.length>ne&&(s=s.slice(0,ne)+`
…[truncated — read the full file]`);const r=s?`Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
${s}
</design-system-guide>`:`Before producing any visuals, explore it: call \`list_files("/projects/${e}/")\` to see the structure, then \`read_file\` the README/base.md or whatever index file it has. Don't guess at the design system's contents.`;return{name:`${t} (design system)`,prompt:`[Design System] The user selected the **${t}** design system. This is a binding choice — every visual must follow it, even if the task seems irrelevant. Don't invent colors, type, spacing, or components not grounded here.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.
    
    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at \`/projects/${e}/\`. ${r}

For assets and UI kits beyond the guide: \`read_file("/projects/${e}/<path>")\` and \`copy_files\` to bring them into the current project.`}}function St(e){const t=e.description?`${e.description}
`:"";return{name:e.templateTitle,prompt:`[Template] ${t}The user picked this as the starting structure. Before producing anything, call \`list_files("/projects/${e.projectId}/")\` to see what's there, then \`read_file\` and \`copy_files\` what you need into the current project.`,...e.introText?{introductoryMsg:e.introText}:{}}}export{wt as G,Ge as P,yt as a,bt as b,Qe as c,Et as d,xt as i,St as t,Rt as u,vt as w};
