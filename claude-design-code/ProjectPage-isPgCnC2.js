const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UPNG-Bc5lEvux.js","assets/index-Bey6wlSl.js","assets/index-Pkt6MKtB.css","assets/gen-pptx-dX2JocF9.js"])))=>i.map(i=>d[i]);
import{j as r,a0 as wp,a1 as vp,a2 as Lc,R as $t,r as l,H as Ye,a3 as tn,G as $n,B as fe,s as x,v as Ue,k as h,W as Gt,a4 as Es,a5 as ia,d as bt,a6 as io,a7 as Pc,a8 as Tt,a9 as oo,aa as Oc,ab as vr,u as gt,ac as Fc,ad as Ic,ae as ao,af as Ts,ag as Ri,ah as zc,ai as Ai,F as Tn,aj as oa,ak as kp,h as Nc,I as kr,al as lo,am as Bc,an as qt,ao as jr,Z as co,ap as uo,aq as js,ar as Wt,as as aa,at as Rs,au as As,av as Ds,aw as vt,ax as fr,ay as la,az as Kn,aA as Hc,aB as Rn,n as at,aC as qn,aD as Uc,aE as Sr,p as G,aF as fn,aG as Vn,aH as Sp,aI as Cp,aJ as _p,aK as $p,aL as Ep,aM as Tp,aN as jp,aO as Rp,aP as Ap,aQ as Dp,aR as Mp,aS as Lp,aT as Wc,aU as Gc,aV as mr,aW as nn,aX as Pp,D as Jc,A as Ms,aY as Op,t as Fp,aZ as _t,a_ as Ip,a$ as zp,b0 as Np,b1 as Xn,e as Yn,q as Kc,b2 as Bp,b3 as Hp,b4 as Up,b5 as Wp,b6 as Gp,b7 as Jp,b8 as Kp,b9 as Xp,ba as qp,bb as Vp,bc as Yp,bd as Zp,be as Qp,bf as Sn,bg as ef,bh as Ls,bi as Xc,M as An,bj as tf,bk as nf,bl as fs,bm as rf,bn as sf,bo as of,bp as qc,bq as af,br as lf,bs as cf,bt as df,bu as uf,bv as Ks,bw as Ft,c as Ps,bx as po,by as pf,bz as ff,bA as Vc,bB as Yc,bC as fo,bD as ca,bE as hf,bF as gf,bG as ho,bH as mf,bI as xf,bJ as bf,bK as da,bL as yf,bM as hs,bN as wf,bO as vf,bP as kf,bQ as Sf,bR as Cf,bS as _f,bT as $f,bU as Ef,bV as Tf,bW as jf,bX as Rf,bY as Xs,bZ as xr,b_ as Zc,b$ as hn,c0 as Qc,c1 as En,c2 as Af,c3 as Df,c4 as Mf,c5 as Lf,E as Os,c6 as go,c7 as Pf,c8 as ed,c9 as Fs,ca as Of,cb as mo,cc as td,cd as Is,ce as ua,cf as Vt,f as nd,m as rd,cg as xo,o as sd,ch as Ff,ci as If,V as zf,i as br,cj as Nf,ck as id,a as od,C as Di,T as bo,cl as yr,cm as Bf,cn as Hf,co as pa,cp as Uf,cq as Wf,cr as Gf,cs as Jf,ct as Kf,cu as Xf,cv as ad,cw as qf,cx as Vf,L as Yf,cy as Zf,cz as Qf,cA as fa,cB as eh,cC as th,cD as nh,cE as Ir,cF as rh,cG as sh,b as ih,_ as ld,$ as cd,cH as oh,cI as ha,cJ as ah,cK as ga,cL as lh,cM as ch,cN as dh,cO as uh,cP as ph,cQ as fh,cR as hh,cS as gh,cT as mh,cU as xh,cV as ma,cW as xa,cX as bh,cY as yh,cZ as wh,Y as vh,c_ as kh}from"./index-Bey6wlSl.js";import{w as dd,b as Nt,u as ud,d as Sh,c as Ch,P as _h,a as zs,i as Cr,t as $h}from"./templates-CR9CcxXm.js";function gs({children:e,title:t,onRemove:s}){return r.jsx(wp,{title:t,onRemove:s,children:e})}function Mi(e){if(!["comment","text-edit","knobs","design-edit","skill","text","html-error","ds-feedback","font-upload"].includes(e.type)||!e.content)return;const s=800;return e.content.length>s?Lc(e.content,s)+"…":e.content}const Eh={file:"File",image:"Image",canvas:"Edit",comment:"Chat","text-edit":"TextAa",skill:"Star",knobs:"Settings","html-error":"Code",text:"Clipboard",folder:"Folder","design-edit":"Styles","web-capture":"Globe","design-resource":"Styles","param-edit":"Settings","ds-feedback":"ThumbsDown","font-upload":"TextAa","fig-file":"Projects"},ba=new Set(["param-edit"]);function ya(e){return Eh[e.type]??"File"}function wa(e){return e.some(t=>t.type==="skill"&&t.name?.endsWith("(design system)"))}function Li(e){const t=e.filter(v=>v.type==="file"||v.type==="image"||v.type==="canvas"),s=e.filter(v=>v.type==="comment"),i=e.filter(v=>v.type==="knobs"),n=e.filter(v=>v.type==="text-edit"),o=e.filter(v=>v.type==="design-edit"),a=e.filter(v=>v.type==="skill"),c=e.filter(v=>v.type==="text"),d=[];if(t.length>0){const v=t.map(w=>`- ${w.path}`).join(`
`);d.push(on("attached_files",v))}if(s.length>0){const v=s.map(w=>w.content).join(`

`);d.push(on("webview_inline_comments",`<!-- The user attached inline comments to elements on the page; try to infer which element they are discussing and apply the changes. If not sure, ask user. -->
`+v))}if(i.length>0){const v=i.map(w=>w.content).join(`

`);d.push(on("design_knob_edit_requests",v))}if(n.length>0){const v=n.map(w=>w.content).join(`

`);d.push(on("text_edit_requests",v))}if(o.length>0){const v=o.map(w=>w.content).join(`

`);d.push(v)}if(c.length>0){const v=c.map(w=>`<pasted_text name="${w.name}">
${w.content}
</pasted_text>`).join(`

`);d.push(v)}const u=e.filter(v=>v.type==="html-error");if(u.length>0){const v=u.map(w=>w.content).join(`

`);d.push(on("html_errors_from_webview",v))}e.filter(v=>v.type==="fig-file").forEach(v=>{d.push(on("figma_file_mounted",vp(v.name,v.selectedFrames??[],v.figOutline)))}),e.filter(v=>v.type==="folder").forEach(v=>{d.push(`<!-- The user attached a local folder named "${v.name}". It may contain a codebase, design components, or other files. Explore it with local_ls("${v.name}") — all paths into this folder must start with "${v.name}/". -->`)});const b=e.filter(v=>v.type==="web-capture");if(b.length>0){const v=b.map(w=>`<web_element_capture name="${w.name}" path="${w.path}">
${w.content}
</web_element_capture>`).join(`

`);d.push(v)}const m=e.filter(v=>v.type==="design-resource");if(m.length>0){const v=m.map(w=>`<design_resource name="${w.name}"${w.path?` source="${w.path}"`:""}>
${w.content??""}
</design_resource>`).join(`

`);d.push(`<!-- The user has attached design resources. Follow these when generating output: -->
${v}`)}const y=e.filter(v=>v.type==="ds-feedback");if(y.length>0){const v=y.map(w=>`<design_system_feedback asset="${w.name}"${w.path?` path="${w.path}"`:""}>
${w.content??""}
</design_system_feedback>`).join(`

`);d.push(`<!-- The user flagged design-system assets for revision from the review pane. Edit the flagged files, then call show_to_user — in the review pane this refreshes the asset in place. -->
${v}`)}const g=e.filter(v=>v.type==="font-upload");if(g.length>0){const v=/^[\w./-]+\.(?:ttf|otf|woff|woff2)$/i,w=g.flatMap(S=>(S.content??"").split(",")).map(S=>S.replace(/[\r\n<>]/g,"").trim()).filter(S=>v.test(S)).map(S=>`- ${S}`).join(`
`);w.length>0&&d.push(on("brand_fonts_uploaded",`The user uploaded brand font files. Update colors_and_type.css @font-face to use these (replace any Google Fonts substitutes for matching families) and regenerate the typography preview cards.
${w}`))}const C=e.filter(v=>v.type==="param-edit");if(C.length>0){const v=C.map(w=>w.content).join(`

`);d.push(on("parameterized_edit_update",`${v}
<!-- No need to acknowledge this; it is for your information so subsequent reads/edits agree with disk. -->`))}if(a.length>0){const v=a.map(w=>`<attached-skill name="${w.name}">
${w.content}
</attached-skill>`).join(`

`);d.push(`<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
${v}`)}return d.length>0&&d.push(`
`),d.join(`

`)}function on(e,t){return`<${e}>
${t}
</${e}>`}const kn=new Map,Th=50;function yo(e,t){const s=kn.get(e);if(s&&(URL.revokeObjectURL(s),kn.delete(e)),kn.set(e,URL.createObjectURL(t)),kn.size>Th){const[i,n]=kn.entries().next().value;URL.revokeObjectURL(n),kn.delete(i)}}function wo(e){return kn.get(e)}const vo=l.createContext({canEdit:!0,canComment:!0});function Zt(){return l.useContext(vo).canEdit}function pd(){return l.useContext(vo).canComment}function va({canEdit:e,canComment:t,children:s}){const i=$t.useMemo(()=>({canEdit:e,canComment:t??e}),[e,t]);return r.jsx(vo.Provider,{value:i,children:s})}const wr=new Map;function jh(e,t){const s=wr.get(e)??{};wr.set(e,{...s,...t})}function Rh(){if(wr.size===0)return null;const e=[];for(const[t,s]of wr){const i=Object.entries(s).map(([n,o])=>`  ${n}: ${JSON.stringify(o)}`).join(`
`);e.push(`${t}:
${i}`)}return wr.clear(),e.join(`

`)}const ms=new Map;function fd(e,t){const s=ms.get(e);s?s.push(t):ms.set(e,[t])}function hd(e){const t=ms.get(e);return!t||t.length===0?[]:(ms.delete(e),t)}const xs=new Map;function Ah(){return new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function bs(e,t){const s=xs.get(e)??{},i=Ah(),n=[],o=t.projectTitle?.trim();o&&o!==s.projectTitle&&n.push(`Project title is now "${o}"`);const a=t.viewingFile??void 0;a&&a!==s.viewingFile&&n.push(`User is now viewing ${a} in the project pane`),i!==s.date&&n.push(`Current date is now ${i}`);const c=Rh();if(c&&n.push("User adjusted these values via the in-page Tweaks panel (already saved to disk):",c),t.projectKey)for(const d of hd(t.projectKey))n.push(d);return xs.set(e,{projectTitle:o,viewingFile:a,date:i}),n.length===0?"":`<system-info comment="Only acknowledge these if relevant">
${n.join(`
`)}
</system-info>

`}function ys(e){e?xs.delete(e):xs.clear()}function gd(e){Ye("beforeunload",t=>{e&&(t.preventDefault(),t.returnValue="")})}const Pi="✶ ",md="✓ ",Dh=[Pi,md];function Mh(e){const t=l.useRef(!1),s=l.useRef(!1);l.useEffect(()=>{t.current&&!e&&document.hidden&&(s.current=!0,document.title=md+zr(document.title)),t.current=e},[e]),l.useEffect(()=>{function i(){document.hidden?e&&(document.title=Pi+zr(document.title)):(s.current=!1,document.title=zr(document.title))}return document.addEventListener("visibilitychange",i),()=>document.removeEventListener("visibilitychange",i)},[e]),l.useEffect(()=>{document.hidden&&e&&(document.title=Pi+zr(document.title))},[e])}function zr(e){for(const t of Dh)if(e.startsWith(t))return e.slice(t.length);return e}const Lh={"local-fonts":"Reference brand fonts by name; assume they are installed locally. Do not embed.","safe-fonts":"Substitute all fonts with web-safe equivalents (Arial, Georgia, Courier New).","google-fonts":"Substitute all fonts with close matches from Google Fonts for Google Slides compatibility.",screenshots:"Export each slide as a full-bleed PNG image. Text does not need to be editable."},Ph=[{id:"local-fonts",label:"Editable · custom fonts",sublabel:"For computers with brand fonts installed. Best fidelity with full editability."},{id:"safe-fonts",label:"Editable · universal fonts",sublabel:"Substitutes web-safe fonts everyone has. Best for sharing broadly.",recommended:!0},{id:"google-fonts",label:"Editable · Google Slides fonts",sublabel:"Uses Google Fonts for full compatibility when uploading to Google Slides."},{id:"screenshots",label:"Screenshot-based PPTX",sublabel:"Pixel-perfect slides as images. Not editable, but exactly what you see."}],Oh=x.div`
  width: 460px;
  max-width: calc(100vw - 32px);
  background: #fff;
  border: 1px solid rgba(15, 12, 8, 0.14);
  border-radius: 12px;
  box-shadow:
    0 20px 60px rgba(20, 20, 19, 0.18),
    0 4px 12px rgba(20, 20, 19, 0.08);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,Fh=x.div`
  padding: 16px 16px 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(15, 12, 8, 0.08);
`,Ih=x.span`
  font-size: 14px;
  font-weight: 600;
  color: rgba(15, 12, 8, 0.92);
`,zh=x.div`
  padding: 16px 20px;
`,Nh=x.div`
  font-size: 12px;
  font-weight: 500;
  color: rgba(15, 12, 8, 0.64);
  margin-bottom: 10px;
`,xd=x.div`
  position: relative;
  padding: 12px 4px;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(15, 12, 8, 0.08);
  }
`,Bh=x.div`
  position: absolute;
  left: -10px;
  right: -10px;
  top: 3px;
  bottom: 3px;
  border-radius: 8px;
  background: rgba(15, 12, 8, 0.04);
  opacity: 0;
  transition: opacity 0.12s ease;
  pointer-events: none;

  ${xd}:hover & {
    opacity: 1;
  }
`,Hh=x.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,Uh=x.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$selected?"#D97757":"rgba(15, 12, 8, 0.14)"};
  flex-shrink: 0;
  margin-top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,Wh=x.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d97757;
`,Gh=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Jh=x.span`
  font-size: 13px;
  font-weight: 500;
  color: rgba(15, 12, 8, 0.92);
`,Kh=x.div`
  font-size: 12px;
  color: rgba(15, 12, 8, 0.48);
  margin-top: 2px;
  line-height: 1.4;
`,Xh=x.span`
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(217, 119, 87, 0.12);
  color: #d97757;
`,qh=x.div`
  padding: 12px 20px 16px;
  border-top: 1px solid rgba(15, 12, 8, 0.08);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;function Vh({isOpen:e,onClose:t,onGenerate:s}){const[i,n]=l.useState("safe-fonts");l.useEffect(()=>{e&&n("safe-fonts")},[e]);const o=()=>{s(i),t()};return r.jsx(tn,{isOpen:e,onClose:t,children:r.jsxs(Oh,{children:[r.jsxs(Fh,{children:[r.jsx(Ih,{children:"Export as PPTX"}),r.jsx($n,{icon:"X",size:28,iconSize:14,onClick:t,title:"Close"})]}),r.jsxs(zh,{children:[r.jsx(Nh,{children:"Where is this deck headed?"}),Ph.map(a=>r.jsxs(xd,{onClick:()=>n(a.id),children:[r.jsx(Bh,{}),r.jsxs(Hh,{children:[r.jsx(Uh,{$selected:i===a.id,children:i===a.id&&r.jsx(Wh,{})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs(Gh,{children:[r.jsx(Jh,{children:a.label}),a.recommended&&r.jsx(Xh,{children:"Recommended"})]}),r.jsx(Kh,{children:a.sublabel})]})]})]},a.id))]}),r.jsxs(qh,{children:[r.jsx(fe,{variant:"ghost",size:"md",onClick:t,children:"Cancel"}),r.jsx(fe,{variant:"black",size:"md",onClick:o,"data-autofocus":!0,children:"Generate PPTX…"})]})]})})}const bd=5;function yd(e){const t=[];for(const s of e.messages)s.role==="assistant"&&s.contentBlocks&&t.push(...s.contentBlocks);return e.streaming?.blocks&&t.push(...e.streaming.blocks),t}function ko(e){return yd(e).flatMap(t=>t.type==="tool_call"?[t.toolCall]:[])}function wd(e,t){const s=t.todos;if(s)return s.map((a,c)=>{const d=a.name??a.text;return{id:String(c),text:typeof d=="string"?d:"",completed:a.completed===!0}});const i=t.operations??[];let n=[...e],o=n.reduce((a,c)=>Math.max(a,Number(c.id)||0),0)+1;for(const a of i)a.type==="add"?n.push({id:String(o++),text:typeof a.name=="string"?a.name:"",completed:!1}):a.type==="remove"?n=n.filter(c=>c.id!==a.id):a.type==="complete"&&(n=n.map(c=>c.id===a.id?{...c,completed:!0}:c));return n}function Yh(e){let t=(e.todos??[]).map(n=>({text:n.text,completed:n.completed}));if(t.length===0){let n=[];for(const o of ko(e))o.name==="update_todos"&&(n=wd(n,o.input??{}));t=n.map(o=>({text:o.text,completed:o.completed}))}const s=t.filter(n=>n.completed).length,i=t.find(n=>!n.completed)??null;return{total:t.length,done:s,current:i,items:t}}function vd(e){const t=e?Yh(e):null;return Math.max(t&&t.total>0?t.done/t.total*100:0,1)}function kd(e){return e.messages.some(t=>t.role==="user"&&t.attachments?.some(s=>s.name==="Create design system"))}function ka(e){return e.kind==="design-system"?!0:Object.values(e.chats).some(kd)}function Zh(e){return e==="needs-review"||e==="approved"||e==="changes-requested"?e:void 0}function Qh(e){const t={},s=(n,o,a)=>{const c=t[n]?.versions??[],d=a.status??"needs-review",u=c.findIndex(p=>p.path===o);u>=0?(c[u].status=d,a.subtitle!==void 0&&(c[u].subtitle=a.subtitle),a.viewport!==void 0&&(c[u].viewport={width:a.viewport.width,height:a.viewport.height??c[u].viewport?.height})):c.push({path:o,createdAt:"",status:d,subtitle:a.subtitle,viewport:a.viewport}),t[n]={versions:c}},i=n=>{const o=n;return o&&typeof o.width=="number"?{width:o.width,height:typeof o.height=="number"?o.height:void 0}:void 0};for(const n of ko(e))if(n.name==="register_assets"){const o=n.input?.items??[];for(const a of o)typeof a.asset=="string"&&typeof a.path=="string"&&s(a.asset,a.path,{status:Zh(a.status),subtitle:typeof a.subtitle=="string"?a.subtitle:void 0,viewport:i(a.viewport)})}else if(n.name==="write_file"&&typeof n.input?.asset=="string"&&typeof n.input?.path=="string"){const o=n.input;s(n.input.asset,n.input.path,{subtitle:typeof o.subtitle=="string"?o.subtitle:void 0,viewport:i(o.viewport)})}return t}function Sd(e){let t=0;for(const s of e.messages){if(s.role!=="assistant"||!s.contentBlocks)continue;if(t+=s.contentBlocks.length,s.contentBlocks.some(n=>n.type==="tool_call"&&n.toolCall.name==="create_design_resource"&&n.toolCall.input?.type==="brand"))return t}return e.streaming?.blocks&&(t+=e.streaming.blocks.length),t}function eg(e,t){const i=yd(e).slice(0,t),n=t>=Sd(e);let o=[];for(const a of i)a.type==="tool_call"&&a.toolCall.name==="update_todos"&&(o=wd(o,a.toolCall.input??{}));return{...e,messages:e.messages.filter(a=>a.role==="user"),todos:o,streaming:{isLoading:!n,blocks:i,error:null}}}const tg=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${h.bg.app};
  padding: 40px 32px;
  overflow: auto;
`,ng=x.div`
  max-width: 420px;
  width: 100%;
  text-align: center;
`,rg=x.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
  font-family: inherit;
  letter-spacing: -0.3px;
`,sg=x.p`
  font-size: 15px;
  color: ${h.text.tertiary};
  margin: 0 0 36px;
  line-height: 1.6;
`,ig=Gt`
  to { transform: rotate(360deg); }
`,og=x.div`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${ig} 0.6s linear infinite;
`;function ag({onBack:e,onCreate:t,creating:s}){return r.jsx(tg,{children:r.jsxs(ng,{children:[r.jsxs(rg,{children:["It will take about ",bd," minutes to generate your design system."]}),r.jsx(sg,{children:"You can step away. Keep the tab open in the background."}),r.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",alignItems:"center"},children:[r.jsxs(fe,{variant:"default",size:"md",onClick:e,disabled:s,children:[r.jsx(Ue,{name:"ArrowLeft",size:12}),"Back"]}),r.jsx(fe,{variant:"primary",size:"md",onClick:t,disabled:s,children:s?r.jsxs(r.Fragment,{children:[r.jsx(og,{}),"Starting…"]}):r.jsxs(r.Fragment,{children:[r.jsx(Ue,{name:"Lightning",size:12}),"Generate"]})})]})]})})}const lg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3658%2062.2435L36.7823%2051.9165L37.0858%2051.012L36.7823%2050.5083H35.8716L32.7853%2050.3206L22.2616%2050.0389L13.1546%2049.6634L4.30054%2049.194L2.07438%2048.7246L0%2045.9551L0.202378%2044.5938L2.07438%2043.3264L4.75589%2043.5611L10.6755%2043.9836L19.5801%2044.5938L26.0056%2044.9693L35.568%2045.9551H37.0858L37.2882%2045.3448L36.7823%2044.9693L36.3775%2044.5938L27.1693%2038.3507L17.2022%2031.7789L11.9909%2027.9767L9.20822%2026.0522L7.79157%2024.2684L7.18443%2020.3254L9.71416%2017.5089L13.1546%2017.7436L14.0147%2017.9783L17.5057%2020.654L24.9431%2026.4277L34.6573%2033.5627L36.0739%2034.7362L36.6444%2034.3512L36.7317%2034.079L36.0739%2032.9994L30.8121%2023.4704L25.1961%2013.7537L22.6664%209.71675L22.0086%207.32277C21.7539%206.31812%2021.6039%205.48695%2021.6039%204.45938L24.4878%200.516349L26.1068%200L30.0026%200.516349L31.6216%201.92457L34.0502%207.46359L37.9459%2016.1476L44.0173%2027.9767L45.7881%2031.4973L46.7494%2034.7362L47.1036%2035.722H47.7107V35.1587L48.2166%2028.4931L49.1274%2020.3254L50.0381%209.81063L50.3416%206.85336L51.8089%203.28586L54.7434%201.36128L57.0201%202.44092L58.8921%205.11655L58.6391%206.85336L57.5261%2014.0822L55.3505%2025.395L53.9338%2032.9994H54.7434L55.7047%2032.0136L59.5498%2026.944L65.9753%2018.8702L68.8086%2015.6782L72.1479%2012.1577L74.2729%2010.4678H78.3204L81.2549%2014.8802L79.9395%2019.4335L75.7907%2024.6909L72.3503%2029.1503L67.4173%2035.7593L64.3563%2041.0732L64.6308%2041.5116L65.3682%2041.4487L76.499%2039.0548L82.5198%2037.9751L89.7042%2036.7547L92.9423%2038.2568L93.2964%2039.8058L92.0316%2042.9509L84.3412%2044.8285L75.3354%2046.6592L61.9245%2049.8162L61.776%2049.9356L61.9513%2050.1956L67.9991%2050.743L70.5795%2050.8839H76.9038L88.6923%2051.7757L91.7786%2053.7942L93.6%2056.282L93.2964%2058.2066L88.5405%2060.6006L82.1656%2059.0985L67.2402%2055.531L62.1302%2054.2636H61.4218V54.6861L65.6718%2058.8638L73.514%2065.9049L83.2787%2075.0114L83.7846%2077.2646L82.5198%2079.0483L81.2043%2078.8606L72.6032%2072.3827L69.264%2069.4724L61.776%2063.1354H61.2701V63.7926L62.9903%2066.3274L72.1479%2080.081L72.6032%2084.3057L71.9455%2085.667L69.5676%2086.5119L66.9872%2086.0425L61.5736%2078.4851L56.0588%2070.0357L51.6065%2062.4313L51.0687%2062.7708L48.419%2091.0652L47.2048%2092.5204L44.3715%2093.6L41.9935%2091.8162L40.7286%2088.9059L41.9935%2083.1322L43.5114%2075.6217L44.7256%2069.6602L45.8387%2062.2435L46.5185%2059.7659L46.4584%2059.6001L45.9153%2059.6914L40.3239%2067.3601L31.824%2078.8606L25.0949%2086.0425L23.4759%2086.6997L20.6932%2085.2445L20.9462%2082.6628L22.5146%2080.3627L31.824%2068.5336L37.44%2061.1639L41.0595%2056.9335L41.0243%2056.3216L40.8245%2056.3046L16.0891%2072.4297L11.6874%2072.993L9.76476%2071.2092L10.0177%2068.2989L10.9284%2067.3601L18.3658%2062.2435Z'%20fill='%23D97757'/%3e%3c/svg%3e",cg="/design/assets/hand-shapes-Y4QnVXqY.svg",dg=x.div`
  width: 520px;
  max-width: 90vw;
  max-height: 70vh;
  background: ${h.bg.surface};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ug=x.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px 16px;
  border-top: 1px solid ${h.border.default};
`,pg=x.div`
  flex: 1;
`,fg=x.hr`
  border: none;
  border-top: 1px solid ${h.border.default};
  margin: 8px 14px;
`,hg=x.div`
  padding: 8px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Sa=x.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 6px;
  border: none;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  font: inherit;
  font-size: 14px;
  color: ${h.text.primary};
  &:hover {
    background: ${h.bg.hover};
  }
`,Ca=x.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.5px solid ${e=>e.$checked?h.accent.primary:h.border.strong};
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${h.accent.primary};
    display: ${e=>e.$checked?"block":"none"};
  }
`,gg=x.div`
  border-top: 1px solid ${h.border.default};
  max-height: 320px;
  overflow-y: auto;
`,_a=x.div`
  height: 38px;
  display: flex;
  align-items: stretch;
  padding: 0 14px 0 ${e=>14+e.$depth*36}px;
  &:hover {
    background: ${h.bg.hover};
  }
  /* Checkbox's own row padding double-counts inside the fixed-height shell. */
  & > button {
    padding: 0;
    height: 100%;
  }
`,$a=x.div`
  font-size: 13px;
  font-weight: ${e=>e.$page?550:450};
  color: ${h.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mg=x.span`
  font-size: 11px;
  font-weight: 450;
  color: ${h.text.tertiary};
  margin-left: 8px;
`,xg=x.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${h.text.tertiary};
  cursor: default;
  flex-shrink: 0;
  &:hover {
    background: ${h.bg.active};
    color: ${h.text.primary};
  }
`,bg=/^[-–—_─━═⎯·•\s]{2,}$/;function ws(e){return e.frames.length===0&&bg.test(e.name)}function So(e){const t=new Set;for(const s of e)ws(s)||(t.add(s.path),s.frames.forEach(i=>t.add(i.path)));return t}function Co(e){const t=e.filter(n=>!ws(n)),s=t.map(n=>`${n.path} (${n.frames.length} frame${n.frames.length===1?"":"s"})`),i=t.reduce((n,o)=>n+o.frames.length,0);return`${t.length} page${t.length===1?"":"s"}, ${i} top-level frame${i===1?"":"s"}: ${s.join(", ")}.`}const yg=x.div`
  width: 420px;
  max-width: 90vw;
  background: ${h.bg.surface};
  border-radius: 12px;
  overflow: hidden;
`,wg=x.div`
  padding: 4px 20px 20px;
  font-size: 13px;
  line-height: 1.6;
  color: ${h.text.secondary};
`,vg=x.ol`
  margin: 8px 0 0 16px;
  padding: 0;
  & > li {
    margin-bottom: 4px;
  }
`;function Cd({open:e,outline:t,onContinue:s,onCancel:i}){const[n,o]=l.useState("all"),[a,c]=l.useState(()=>new Set),[d,u]=l.useState(()=>new Set),p=l.useMemo(()=>So(t),[t]),f=a.size>0&&a.size===p.size,b=()=>c(f?new Set:new Set(p)),m=l.useMemo(()=>t.filter(w=>!ws(w)),[t]),y=l.useMemo(()=>m.reduce((w,S)=>w+S.frames.length,0),[m]),g=w=>c(S=>{const k=new Set(S);return k.has(w)?k.delete(w):k.add(w),k}),C=w=>c(S=>{const k=new Set(S);return w.frames.every(T=>k.has(T.path))&&k.has(w.path)?(k.delete(w.path),w.frames.forEach(T=>k.delete(T.path))):(k.add(w.path),w.frames.forEach(T=>k.add(T.path))),k}),v=w=>u(S=>{const k=new Set(S);return k.has(w)?k.delete(w):k.add(w),k});return r.jsx(tn,{isOpen:e,onClose:i,children:r.jsxs(dg,{children:[r.jsx(Es,{title:"Attach Figma file",subtitle:"It won't be uploaded, but Claude can explore it during this session.",onClose:i}),r.jsxs(hg,{role:"radiogroup",children:[r.jsxs(Sa,{type:"button",role:"radio","aria-checked":n==="all",onClick:()=>o("all"),children:[r.jsx(Ca,{$checked:n==="all"}),r.jsxs("span",{children:["Attach all pages (",m.length,") and frames (",y,")"]})]}),r.jsxs(Sa,{type:"button",role:"radio","aria-checked":n==="choose",onClick:()=>o("choose"),children:[r.jsx(Ca,{$checked:n==="choose"}),r.jsx("span",{children:"Choose what to attach"})]})]}),n==="choose"&&r.jsx(gg,{children:t.map(w=>{if(ws(w))return r.jsx(fg,{},w.id);const S=d.has(w.id),k=a.has(w.path)&&w.frames.every(E=>a.has(E.path));return r.jsxs($t.Fragment,{children:[r.jsx(_a,{$depth:0,children:r.jsx(ia,{boxSide:"right",checked:k,onChange:()=>C(w),leading:r.jsx(xg,{role:"button","aria-label":S?"Collapse":"Expand",onClick:E=>{E.stopPropagation(),v(w.id)},children:r.jsx(Ue,{name:S?"CaretDown":"CaretRight",size:11})}),label:r.jsxs($a,{$page:!0,children:[w.name,r.jsxs(mg,{children:[w.frames.length," frame",w.frames.length===1?"":"s"]})]})})}),S&&w.frames.map(E=>r.jsx(_a,{$depth:1,children:r.jsx(ia,{boxSide:"right",checked:a.has(E.path),onChange:()=>g(E.path),label:r.jsx($a,{children:E.name})})},E.id))]},w.id)})}),r.jsxs(ug,{children:[n==="choose"&&r.jsx(fe,{variant:"default",size:"sm",onClick:b,children:f?"Deselect all":"Select all"}),r.jsx(pg,{}),r.jsx(fe,{variant:"default",size:"sm",onClick:i,children:"Cancel"}),r.jsx(fe,{variant:"primary",size:"sm",disabled:n==="choose"&&a.size===0,onClick:()=>s(n==="all"?[]:[...a]),children:"Attach file"})]})]})})}function _o({open:e,onClose:t}){return r.jsx(tn,{isOpen:e,onClose:t,zLayer:"modalTop",children:r.jsxs(yg,{children:[r.jsx(Es,{title:"How to download a .fig file",onClose:t,noDivider:!0}),r.jsxs(wg,{children:["From the Figma web or desktop app:",r.jsxs(vg,{children:[r.jsx("li",{children:"Open the file in Figma."}),r.jsxs("li",{children:["Go to ",r.jsx("b",{children:"File → Save local copy…"})," (web: main menu → File)."]}),r.jsx("li",{children:"Figma downloads a .fig file. Drop it onto the chat input."})]}),r.jsx("div",{style:{marginTop:12,fontSize:11.5,color:h.text.tertiary},children:"The file is parsed locally in your browser and never uploaded."})]})]})})}function jn(e){return e.name.toLowerCase().endsWith(".fig")}function $o(e){const[t,s]=l.useState(null),i=l.useRef(null),{showToast:n}=bt(),o=(u,p)=>new Promise(f=>{i.current=f,dd(()=>oo(e,u,p)).then(({outline:b})=>{s({filename:u.name,outline:b})}).catch(b=>{Tt(b,"read fig file"),n(`Couldn’t read ${u.name}.`,"error"),f(null),i.current=null})}),a=u=>{if(!t)return;Pc(e,u);const p=So(t.outline),f=u.length>0&&u.length<p.size,b={id:crypto.randomUUID(),name:t.filename,type:"fig-file",selectedFrames:f?u:[],figOutline:Co(t.outline)};s(null),i.current?.(b),i.current=null},c=()=>{io(e),s(null),i.current?.(null),i.current=null},d=t?r.jsx(Cd,{open:!0,outline:t.outline,onContinue:a,onCancel:c}):null;return{attach:o,modal:d}}async function _d(){const e=window.showOpenFilePicker;if(typeof e=="function")try{const[t]=await e({multiple:!1,types:[{description:"Figma files",accept:{"application/octet-stream":[".fig"]}}]});if(!t)return null;const s=await t.getFile();return jn(s)?{file:s,handle:t}:null}catch{return null}return new Promise(t=>{const s=document.createElement("input");s.type="file",s.accept=".fig",s.style.display="none",s.onchange=()=>{const n=s.files?.[0]??null;t(n&&jn(n)?{file:n}:null)};const i=()=>{window.removeEventListener("focus",i),setTimeout(()=>{(!s.files||s.files.length===0)&&t(null)},500)};window.addEventListener("focus",i),document.body.appendChild(s),s.click(),document.body.removeChild(s)})}let kg=0;function Rr(){return"w_"+ ++kg}function Sg(e){try{const t=e.match(/figma\.com\/(?:design|file)\/[^/]+\/([^?]+)/);if(t)return decodeURIComponent(t[1]).replace(/-/g," ").trim()}catch{}return null}function Cg(e){try{const t=new URL(e.includes("://")?e:"https://"+e);if(t.hostname!=="github.com"&&t.hostname!=="www.github.com")return null;const s=t.pathname.split("/").filter(Boolean);if(s.length<2)return null;const[i,n,o,a,...c]=s,d=n.replace(/\.git$/,"");if(!o)return{owner:i,repo:d,ref:"HEAD",pathPrefix:""};if(o!=="tree"&&o!=="blob"||!a)return null;let u=c.join("/");return o==="blob"&&u.includes("/")?u=u.slice(0,u.lastIndexOf("/")):o==="blob"&&(u=""),{owner:i,repo:d,ref:a,pathPrefix:u}}catch{return null}}async function _g(e){const t=[];for(const i of e.items){if(i.kind!=="file")continue;const n=i.getAsFileSystemHandle;typeof n=="function"&&t.push(n.call(i))}return(await Promise.all(t)).filter(i=>i?.kind==="directory")}function $d(e){const t=[];for(const s of e.items){if(s.kind!=="file"||s.webkitGetAsEntry?.()?.isDirectory)continue;const n=s.getAsFile();n&&t.push(n)}return t}const $g=x.div`
  min-height: 100%;
  background: ${h.bg.app};
  font-family: inherit;
  display: flex;
  flex-direction: column;
`,Eg=x.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 14px 32px;
  border-bottom: 1px solid rgba(15,12,8,0.08);
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${h.bg.app};
`,Tg=x.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 32px 80px;
`,jg=x.div`
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${Nc}px;
`,Rg=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  min-height: 24px;
  background: ${e=>e.$warn?"rgba(201, 168, 45, 0.12)":"#f3f3ec"};
  border: 0.5px solid ${e=>e.$warn?h.accent.warning:"#E0DED6"};
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 11px;
  font-weight: 500;
  color: ${h.text.secondary};
  font-variant-numeric: tabular-nums;
`,Ag=x.span`
  flex: 1;
  min-width: 0;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`,Dg=x.button`
  all: unset;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${h.text.tertiary};
  cursor: default;
  flex-shrink: 0;
  &:hover {
    background: ${h.bg.active};
    color: ${h.text.primary};
  }
`,Ed=x.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, ${e=>e.$open?.35:0});
  z-index: ${co.modal};
  transition: background 0.15s ease;
  pointer-events: ${e=>e.$open?"auto":"none"};
`,Td=x.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${e=>e.$open?1:.95});
  width: 520px;
  max-width: 90vw;
  max-height: 70vh;
  background: ${h.bg.surface};
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(15,12,8,0.08);
  z-index: ${co.modal+1};
  transition: transform 0.15s ease, opacity 0.15s ease,
    visibility 0s linear ${e=>e.$open?"0s":"0.15s"};
  opacity: ${e=>e.$open?1:0};
  visibility: ${e=>e.$open?"visible":"hidden"};
  pointer-events: ${e=>e.$open?"auto":"none"};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Mg=x.button`
  all: unset;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  color: ${h.accent.warning};
  cursor: pointer;
  &:hover {
    background: rgba(201, 168, 45, 0.15);
  }
`,Zn=x.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #fff;
  &:hover {
    background: #fefefe;
  }
`,Ar=x.div`
  flex: 0 0 368px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Eo=x.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 10px;
  border: 1px dashed
    ${e=>e.$dragOver?h.accent.primary:h.border.default};
  border-radius: 6px;
  background: ${e=>e.$dragOver?h.accent.primaryBg:h.bg.muted};
  font-size: 11px;
  font-weight: 550;
  color: ${h.text.tertiary};
  ${Zn}:hover & {
    border-color: ${e=>e.$dragOver?h.accent.primary:h.border.focus};
  }
`,Dr=x.div`
  flex: 1;
  min-width: 0;
`,jd=x.div`
  flex: 1 1 auto;
  min-width: 0;
`,Mr=x.div`
  font-size: 13px;
  font-weight: 550;
  color: ${h.text.primary};
`,Lg=x.div.attrs({"data-indented-divider":""})`
  padding: 12px 0;
  background: #fff;
`,Pg=x.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 20px;
`;function Lr({children:e}){return r.jsx(Lg,{children:r.jsx(Pg,{children:e})})}const vs=x.div.attrs({"data-indented-divider":""})`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: #fff;
  font-size: 12.5px;
  color: rgba(15, 12, 8, 0.56);
  line-height: 1.5;
  
  > span {
    flex: 1;
    min-width: 0;
  }
`,Og=x.button`
  font: inherit;
  color: inherit;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: currentColor;
  text-underline-offset: 2px;
  &:hover {
    color: ${h.text.primary};
  }
`,To=x.button`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${h.text.tertiary};
  text-decoration: underline;
  text-decoration-color: rgba(20, 20, 19, 0.2);
  &:hover {
    color: ${h.text.primary};
    text-decoration-color: currentColor;
  }
`;function Pr({icon:e,display:t,onRemove:s,warning:i,action:n}){return r.jsxs(Rg,{$warn:i,children:[r.jsx(Ue,{name:e,size:12,style:{color:i?h.accent.warning:h.text.tertiary}}),r.jsx(Ag,{title:t,children:t}),n&&r.jsx(Mg,{onClick:n.onClick,children:n.label}),r.jsx(Dg,{onClick:s,"aria-label":`Remove ${t}`,children:r.jsx(Ue,{name:"X",size:9})})]})}function Fg({wells:e,onAdd:t,onRemove:s,onBusy:i}){const[n,o]=l.useState(!1),a=e.filter(p=>p.type==="codebase"&&p.value),c=p=>{const f=new Set(a.map(b=>b.value.display));for(const b of p)f.has(b.name)||(f.add(b.name),t({id:Rr(),type:"codebase",value:{raw:b.name,display:b.name,handle:b}}))},d=async p=>{p.preventDefault(),p.stopPropagation(),o(!1),i(!0);try{const f=await _g(p.dataTransfer);c(f)}finally{i(!1)}},u=async()=>{if(qt)try{i(!0);const p=await window.showDirectoryPicker({mode:"read"});c([p])}catch(p){p instanceof DOMException&&p.name}finally{i(!1)}};return r.jsxs(r.Fragment,{children:[r.jsxs(Zn,{onDragOver:qt?p=>{p.preventDefault(),o(!0)}:p=>{p.preventDefault(),p.dataTransfer.dropEffect="none"},onDragLeave:qt?p=>{p.currentTarget.contains(p.relatedTarget)||o(!1)}:void 0,onDrop:qt?d:p=>p.preventDefault(),children:[r.jsx(Dr,{children:r.jsxs(Mr,{children:["Link code from your computer",!qt&&r.jsx("span",{style:{fontWeight:400,color:h.text.tertiary,marginLeft:8},children:"— requires Chrome or Edge"})]})}),qt&&r.jsx(Ar,{children:r.jsxs(Eo,{$dragOver:n,children:["Drag a folder here or ",r.jsx(To,{onClick:u,children:"browse"})]})})]}),r.jsx(vs,{children:"This doesn’t upload the whole codebase; Claude will copy selected files. For large codebases, we recommend attaching a frontend-focused subfolder."}),a.length>0&&r.jsx(Lr,{children:a.map(p=>r.jsx(Pr,{icon:"Folder",display:p.value.display,onRemove:()=>s(p.id)},p.id))})]})}function Ig({wells:e,onAdd:t,onRemove:s}){const[i,n]=l.useState(""),o=e.filter(d=>d.type==="figma"&&d.value),a=()=>{const d=i.split(/[\n,]/).map(p=>p.trim()).filter(Boolean),u=new Set(o.map(p=>p.value.raw));for(const p of d){if(u.has(p))continue;u.add(p);const f=Sg(p),b=p.includes("figma.com");t({id:Rr(),type:"figma",value:{raw:p,display:f||p,needsFigmaAuth:b}})}n("")},c=d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),a())};return r.jsxs(r.Fragment,{children:[r.jsxs(Zn,{children:[r.jsx(Dr,{children:r.jsx(Mr,{children:"Link Figma designs"})}),r.jsxs(Ar,{children:[r.jsx(jd,{children:r.jsx(kr,{value:i,onChange:d=>n(d.target.value),onKeyDown:c,onBlur:a,placeholder:"https://figma.com/design/..."})}),r.jsx(fe,{size:"md",onClick:a,children:"Add"})]})]}),o.length>0&&r.jsx(Lr,{children:o.map(d=>r.jsx(Pr,{icon:"Link",display:d.value.display,onRemove:()=>s(d.id)},d.id))})]})}const Ea="__fig_onboarding__";function zg({wells:e,onAdd:t,onRemove:s}){const[i,n]=l.useState(!1),[o,a]=l.useState(null),[c,d]=l.useState(!1),{showToast:u}=bt(),p=e.filter(g=>g.type==="fig-file"&&g.value),f=async g=>{try{const{outline:C}=await dd(()=>oo(Ea,g));a({file:g,outline:C})}catch(C){Tt(C,"read fig file"),u(`Couldn’t read ${g.name}.`,"error")}finally{io(Ea)}},b=g=>{g.preventDefault(),g.stopPropagation(),n(!1);const C=$d(g.dataTransfer).find(jn);C&&f(C)},m=async()=>{const g=await _d();g&&f(g.file)},y=g=>{if(!o)return;const C=So(o.outline),v=g.length>0&&g.length<C.size;t({id:Rr(),type:"fig-file",value:{raw:o.file.name,display:o.file.name,figFile:o.file,selectedFrames:v?g:[],figOutline:Co(o.outline)}}),a(null)};return r.jsxs(r.Fragment,{children:[r.jsxs(Zn,{onDragOver:g=>{g.preventDefault(),n(!0)},onDragLeave:g=>{g.currentTarget.contains(g.relatedTarget)||n(!1)},onDrop:b,children:[r.jsx(Dr,{children:r.jsx(Mr,{children:"Upload a .fig file"})}),r.jsx(Ar,{children:r.jsxs(Eo,{$dragOver:i,children:["Drop .fig here or ",r.jsx(To,{onClick:m,children:"browse"})]})})]}),r.jsx(vs,{children:r.jsxs("span",{children:["Parsed locally in your browser — never uploaded."," ",r.jsx(Og,{type:"button",onClick:()=>d(!0),children:"Learn how to get a .fig file"})]})}),p.length>0&&r.jsx(Lr,{children:p.map(g=>r.jsx(Pr,{icon:"Projects",display:g.value.display,onRemove:()=>s(g.id)},g.id))}),r.jsx(_o,{open:c,onClose:()=>d(!1)}),o&&r.jsx(Cd,{open:!0,outline:o.outline,onContinue:y,onCancel:()=>a(null)})]})}function Ng({wells:e,onAdd:t,onRemove:s}){const[i,n]=l.useState(!1),o=l.useRef(null),a=jr(),{showToast:c}=bt(),d=e.filter(b=>b.type==="file"&&b.value),u=b=>{if(a){c(Wt,"error");return}const m=new Set(d.map(y=>y.value.display));for(const y of b)m.has(y.name)||(m.add(y.name),t({id:Rr(),type:"file",value:{raw:y.name,display:y.name,file:y}}))},p=b=>{b.preventDefault(),b.stopPropagation(),n(!1),u($d(b.dataTransfer))},f=()=>{o.current?.click()};return r.jsxs(r.Fragment,{children:[r.jsxs(Zn,{onDragOver:b=>{b.preventDefault(),n(!0)},onDragLeave:b=>{b.currentTarget.contains(b.relatedTarget)||n(!1)},onDrop:p,children:[r.jsx(Dr,{children:r.jsx(Mr,{children:"Add fonts, logos and assets"})}),r.jsx(Ar,{children:r.jsxs(Eo,{$dragOver:i,children:["Drag files here or ",r.jsx(To,{onClick:f,children:"browse"})]})}),r.jsx("input",{ref:o,type:"file",multiple:!0,style:{display:"none"},onChange:b=>{u(Array.from(b.target.files??[])),b.target.value=""}})]}),d.length>0&&r.jsx(Lr,{children:d.map(b=>r.jsx(Pr,{icon:"Upload",display:b.value.display,onRemove:()=>s(b.id)},b.id))})]})}function Bg({wells:e,onAdd:t,onRemove:s}){const[i,n]=l.useState(""),[o,a]=l.useState(vr),[c,d]=l.useState(!1),u=l.useMemo(()=>e.filter(g=>g.type==="github"&&g.value),[e]),p=u.length>0,f=Cg(i.trim());l.useEffect(()=>Ts(a),[]);const b=l.useRef(!1);l.useEffect(()=>{p||(b.current=!1)},[p]);const m=()=>{if(!f||b.current)return;b.current=!0;const g=`${f.owner}/${f.repo}:${f.pathPrefix}`,C=f.pathPrefix?`${f.owner}/${f.repo} · ${f.pathPrefix}/`:`${f.owner}/${f.repo}`;t({id:Rr(),type:"github",value:{raw:g,display:C,github:f}}),n("")},y=async()=>{d(!0);try{await js()}catch{}finally{d(!1)}};return r.jsxs(r.Fragment,{children:[r.jsxs(Zn,{children:[r.jsx(Dr,{children:r.jsx(Mr,{children:"Link code on GitHub"})}),r.jsxs(Ar,{children:[r.jsx(jd,{children:r.jsx(kr,{value:i,onChange:g=>n(g.target.value),onKeyDown:g=>{g.key==="Enter"&&(g.preventDefault(),m())},onBlur:m,placeholder:p?"Remove the current repo to add a different one":"https://github.com/owner/repo",disabled:p})}),r.jsx(fe,{size:"md",onClick:m,disabled:!f||p,children:"Add"})]})]}),p&&r.jsx(Lr,{children:u.map(g=>r.jsx(Pr,{icon:"Branch",display:g.value.display,onRemove:()=>s(g.id)},g.id))}),p&&(o.connected?r.jsxs(vs,{children:[r.jsxs("span",{children:["Connected as ",o.login," — configure to grant access to more repos"]}),r.jsx(fe,{onClick:lo,size:"sm",children:"Configure"}),r.jsx(fe,{variant:"ghost",size:"sm",onClick:()=>void Bc(),disabled:c,children:"Disconnect"})]}):r.jsxs(vs,{children:[r.jsx("span",{children:"Connect GitHub to allow Claude to read from your repos"}),r.jsx(fe,{variant:"black",onClick:y,disabled:c,loading:c,size:"sm",children:"Connect GitHub"})]}))]})}function Hg({open:e,onConnect:t,onSkip:s,onClose:i}){const[n,o]=l.useState(!1),a=l.useRef(e);a.current=e,l.useEffect(()=>()=>{a.current=!1},[]);const c=async()=>{o(!0);try{await uo(),a.current&&t()}catch{}finally{o(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(Ed,{$open:e,onClick:n?void 0:i}),r.jsxs(Td,{$open:e,style:{width:420},children:[r.jsxs("div",{style:{padding:"28px 24px 20px",textAlign:"center"},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:10,margin:"0 auto 14px",background:"rgba(15,12,8,0.06)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ue,{name:"Projects",size:20})}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"rgba(15,12,8,0.92)",marginBottom:6},children:"Connect Figma to continue"}),r.jsx("div",{style:{fontSize:13,color:"rgba(15,12,8,0.58)",lineHeight:1.5,maxWidth:320,margin:"0 auto"},children:"You attached a Figma link, but Figma isn't connected yet. Connect now so we can read your design files during generation."})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,padding:"12px 16px 16px",borderTop:"1px solid rgba(15,12,8,0.08)"},children:[r.jsx(fe,{variant:"default",size:"sm",onClick:s,children:"Skip and continue"}),r.jsx(fe,{variant:"primary",size:"sm",onClick:c,disabled:n,children:n?"Connecting...":"Connect Figma"})]})]})]})}function Ug({open:e,onConnect:t,onSkip:s,onClose:i}){const[n,o]=l.useState(!1),a=l.useRef(e);a.current=e,l.useEffect(()=>()=>{a.current=!1},[]);const c=async()=>{o(!0);try{await js(),a.current&&t()}catch{}finally{o(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(Ed,{$open:e,onClick:n?void 0:i}),r.jsxs(Td,{$open:e,style:{width:420},children:[r.jsxs("div",{style:{padding:"28px 24px 20px",textAlign:"center"},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:10,margin:"0 auto 14px",background:"rgba(15,12,8,0.06)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ue,{name:"Branch",size:20})}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"rgba(15,12,8,0.92)",marginBottom:6},children:"Connect GitHub to continue"}),r.jsx("div",{style:{fontSize:13,color:"rgba(15,12,8,0.58)",lineHeight:1.5,maxWidth:320,margin:"0 auto"},children:"You attached a GitHub repo, but GitHub isn't connected yet. Connect now so we can read private repos and fetch files on demand during generation."})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,padding:"12px 16px 16px",borderTop:"1px solid rgba(15,12,8,0.08)"},children:[r.jsx(fe,{variant:"default",size:"sm",onClick:s,children:"Skip and continue"}),r.jsx(fe,{variant:"black",size:"sm",onClick:c,disabled:n,loading:n,children:"Connect GitHub"})]})]})]})}function Wg({data:e,onChange:t,onNext:s,onBack:i}){const[n,o]=l.useState(()=>Oc().authenticated),[a,c]=l.useState(!1),[d,u]=l.useState(()=>vr().connected),[p,f]=l.useState(!1),[b,m]=l.useState(0);Nt(b>0);const y=!gt("omelette_connect_github_disabled").on,g=gt("omelette_au_jambon").on,C=gt("omelette_aux_fines_herbes").on,v=l.useCallback(R=>{m($=>$+(R?1:-1))},[]);l.useEffect(()=>(g&&Fc().catch(()=>{}),Ic(R=>{R.authenticated&&(o(!0),t("figmaConnected",!0))})),[t,g]),l.useEffect(()=>(vr().connected&&t("githubConnected",!0),ao(),Ts(R=>{u(R.connected),t("githubConnected",R.connected)})),[t]);const w=l.useRef(e.wells);w.current=e.wells;const S=l.useCallback(R=>{const $=[...w.current,R];t("wells",$),w.current=$},[t]),k=l.useCallback(R=>{const $=w.current.filter(M=>M.id!==R);t("wells",$),w.current=$},[t]),E=e.inputText.trim()||e.wells.some(R=>R.value)||e.additionalNotes.trim(),T=()=>{if(y&&!d&&w.current.some($=>$.type==="github"&&$.value)){f(!0);return}s()},_=()=>{if(g&&!n&&w.current.some($=>$.type==="figma"&&$.value?.needsFigmaAuth)){c(!0);return}T()};return r.jsxs($g,{children:[r.jsxs(Eg,{children:[r.jsx("div",{style:{display:"flex",alignItems:"center",gap:10,justifySelf:"start"},children:i&&r.jsxs(fe,{variant:"default",size:"sm",onClick:i,children:[r.jsx(Ue,{name:"ArrowLeft",size:13}),"Back"]})}),r.jsx("div",{style:{display:"flex",alignItems:"center",gap:10,justifySelf:"center"},children:r.jsx("img",{src:lg,alt:"",style:{width:22,height:22}})}),r.jsx("div",{style:{justifySelf:"end"},children:r.jsxs(fe,{variant:"primary",size:"sm",onClick:_,disabled:!E,children:["Continue to generation",r.jsx(Ue,{name:"ArrowRight",size:13})]})})]}),r.jsx(Hg,{open:a,onConnect:()=>{c(!1),T()},onSkip:()=>{c(!1),T()},onClose:()=>c(!1)}),r.jsx(Ug,{open:p,onConnect:()=>{f(!1),s()},onSkip:()=>{f(!1),s()},onClose:()=>f(!1)}),r.jsx(Tg,{children:r.jsxs(jg,{children:[r.jsxs(Ri,{centered:!0,children:[r.jsx("img",{src:cg,alt:"",style:{width:64,height:64,marginBottom:6,opacity:.85}}),r.jsx(zc,{children:"Set up your design system"}),r.jsx(Ai,{children:"Tell us about your company and attach any design resources you have."})]}),r.jsx(Tn,{label:r.jsxs(r.Fragment,{children:["Company name and blurb"," ",r.jsx("span",{style:{fontWeight:430,color:h.text.tertiary},children:"(or name of design system)"})]}),children:r.jsx(oa,{value:e.inputText,onChange:R=>t("inputText",R),placeholder:"e.g. Mission Impastabowl: fast-casual pasta restaurant with in-store touchscreen kiosk, mobile app and website",minRows:3})}),r.jsxs(Ri,{children:[r.jsxs(kp,{children:["Provide examples of your design system and products"," ",r.jsx("span",{style:{fontWeight:430,color:h.text.tertiary},children:"(all optional)"})]}),r.jsx(Ai,{children:"What works best: code and designs for your design system and your code products."})]}),r.jsxs(Tn,{children:[y&&r.jsx(Bg,{wells:e.wells,onAdd:S,onRemove:k}),r.jsx(Fg,{wells:e.wells,onAdd:S,onRemove:k,onBusy:v}),g&&r.jsx(Ig,{wells:e.wells,onAdd:S,onRemove:k}),C&&r.jsx(zg,{wells:e.wells,onAdd:S,onRemove:k}),r.jsx(Ng,{wells:e.wells,onAdd:S,onRemove:k})]}),r.jsx(Tn,{label:"Any other notes?",children:r.jsx(oa,{value:e.additionalNotes,onChange:R=>t("additionalNotes",R),placeholder:"e.g. We use a warm, earthy color palette with rounded corners. Our brand voice is playful but professional...",minRows:3})})]})})]})}const Gg={inputText:"",brandName:"",wells:[],additionalNotes:"",figmaConnected:!1,githubConnected:!1,selectedOutputs:[],figmaLinks:[],folderHandles:[],guidelines:"",uploadedFiles:[]};function Jg({onComplete:e,onExit:t}){const[s,i]=l.useState("onboarding"),[n,o]=l.useState(Gg),[a,c]=l.useState(!1);Nt(a);const d=gt("omelette_ds_build_from_repo").on&&!0,u=l.useCallback((f,b)=>{o(m=>({...m,[f]:b}))},[]),p=l.useCallback(async()=>{c(!0);try{const f=aa(n,{ccrBuildEnabled:d}),b=d?aa(n,{ccrBuildEnabled:!1}):void 0,m=[],y=[],g=[],C=[];for(const k of n.wells)k.value&&(k.value.handle&&y.push(k.value.handle),k.value.file&&m.push(k.value.file),k.value.github&&g.push(k.value.github),k.value.figFile&&C.push({file:k.value.figFile,selectedFrames:k.value.selectedFrames??[]}));m.push(...n.uploadedFiles),y.push(...n.folderHandles);const v=n.wells.filter(k=>k.value),w=v.map(k=>k.type),S={wellTypes:w,hasFigma:w.includes("figma")||n.figmaLinks.some(k=>k.trim()),hasCodebase:w.includes("codebase")||y.length>0,hasGithub:g.length>0,hasBrandName:!!n.brandName.trim(),fileCount:m.length,folderCount:y.length,resourceCount:v.length};await e(f,m,y,g,C,S,b)}catch{}finally{c(!1)}},[n,d,e]);switch(s){case"onboarding":return r.jsx(Wg,{data:n,onChange:u,onNext:()=>i("confirm"),onBack:t});case"confirm":return r.jsx(ag,{data:n,onBack:()=>i("onboarding"),onCreate:p,creating:a})}}const Kg=`
(function() {
  if (window.__describeEl) return;

  var LINE_MAX = 100;

  function clamp(s, n) {
    if (!s) return '';
    s = String(s).trim().replace(/\\s+/g, ' ');
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  // Middle-truncate: keep the head and tail of a joined path, drop middle hops.
  // Accepts the already-joined string plus the separator so we can cut at hop
  // boundaries (readers never see a half-token like "sec…grid").
  function clampMid(joined, sep, n) {
    if (joined.length <= n) return joined;
    var parts = joined.split(sep);
    // Always keep first + last; grow outward until budget is hit.
    var head = [parts[0]], tail = [parts[parts.length - 1]];
    var len = head[0].length + tail[0].length + sep.length + 1; // +1 for the ellipsis hop
    var hi = 1, ti = parts.length - 2;
    while (hi <= ti) {
      // Prefer the tail — the hops nearest the target carry more signal.
      var t = parts[ti];
      if (len + sep.length + t.length <= n) { tail.unshift(t); len += sep.length + t.length; ti--; continue; }
      var h = parts[hi];
      if (len + sep.length + h.length <= n) { head.push(h); len += sep.length + h.length; hi++; continue; }
      break;
    }
    if (hi > ti) return head.concat(tail).join(sep); // everything fit after all
    return head.concat('…', tail).join(sep);
  }

  // React dev-mode fiber lookup. React stamps DOM nodes with a __reactFiber$<hash>
  // property; walk the fiber return chain to the nearest function/class component.
  // Returns undefined if React isn't present or the build is prod-minified.
  var _fiberKey; // cache: key suffix is randomized once per React root
  window.__reactName = function(el) {
    try {
      if (!_fiberKey) {
        // Re-probe until found — don't cache a miss (e.g. first call on the
        // React root container, which has __reactContainer$ not __reactFiber$).
        for (var k in el) { if (k.indexOf('__reactFiber$') === 0) { _fiberKey = k; break; } }
      }
      var f = _fiberKey && el[_fiberKey];
      var hops = 0;
      while (f && hops < 24) {
        var t = f.type || f.elementType;
        if (typeof t === 'function') {
          var n = t.displayName || t.name;
          if (n && n.length > 1) return n; // skip minified single-letter names
        } else if (t && typeof t === 'object') {
          // memo/forwardRef wrappers expose displayName directly
          if (t.displayName) return t.displayName;
        }
        f = f.return;
        hops++;
      }
    } catch (e) {}
  };

  // Transient id registry. We stamp elements with data-cc-id rather than id= so
  // we never clobber user markup. The model can quote this back to us and we can
  // querySelector('[data-cc-id="cc-42"]') to find the exact node.
  var _ccSeq = 1;
  function ensureCcId(el) {
    var v = el.getAttribute('data-cc-id');
    if (v) return v;
    v = 'cc-' + (_ccSeq++);
    el.setAttribute('data-cc-id', v);
    return v;
  }

  // Short signature for one DOM hop: tag#id.cls.cls[screen="…"][n/N]
  // Sibling index only on the target (caller passes wantIndex), since it's noise
  // on ancestors. Screen labels appear on whichever hop carries them — they can
  // sit arbitrarily far up so we surface them inline rather than as a separate
  // line, and they survive middle-truncation as long as that hop does.
  function domHop(el, wantIndex) {
    var s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    var cn = el.className;
    if (cn && typeof cn === 'string') {
      var cls = cn.split(' ').filter(Boolean).slice(0, 2);
      for (var i = 0; i < cls.length; i++) s += '.' + clamp(cls[i], 20);
    }
    var sl = el.getAttribute && el.getAttribute('data-screen-label');
    if (sl) s += '[screen="' + clamp(sl, 24) + '"]';
    if (wantIndex) {
      var p = el.parentElement;
      if (p && p.children.length > 1) {
        var idx = Array.prototype.indexOf.call(p.children, el);
        s += '[' + (idx + 1) + '/' + p.children.length + ']';
      }
    }
    return s;
  }

  window.__describeEl = function(el, selector) {
    // ─ react: outer→inner, consecutive-deduped ─
    // Walk DOM ancestry and probe each hop's fiber. A component that renders
    // several nested DOM nodes will resolve to the same name at each — collapse
    // those runs so the path reads like JSX, not like the DOM.
    var reactPath = [];
    for (var a = el; a && a.nodeType === 1 && a !== document.documentElement; a = a.parentElement) {
      var rn = window.__reactName(a);
      if (rn && rn !== reactPath[0]) reactPath.unshift(rn);
    }

    // ─ dom: outer→inner, body-rooted, middle-truncated ─
    var domParts = [];
    for (var d = el; d && d.nodeType === 1 && d !== document.documentElement; d = d.parentElement) {
      domParts.unshift(domHop(d, d === el));
    }

    // ─ text: innerText + aria-label + alt (own + descendant imgs), concat ─
    var textBits = [];
    var txt = (el.innerText || el.textContent || '').trim().replace(/\\s+/g, ' ');
    if (txt) textBits.push('"' + clamp(txt, 60) + '"');
    var aria = el.getAttribute('aria-label');
    if (aria) textBits.push('aria-label: "' + clamp(aria, 40) + '"');
    var alts = [];
    if (el.getAttribute('alt')) alts.push(el.getAttribute('alt'));
    var imgs = el.querySelectorAll('img[alt]');
    for (var i = 0; i < imgs.length && alts.length < 3; i++) {
      var a2 = imgs[i].getAttribute('alt');
      if (a2) alts.push(a2);
    }
    if (alts.length) textBits.push('alt: "' + clamp(alts.join(' · '), 40) + '"');

    // ─ children: direct childNodes, tag name or "text" for non-empty text nodes ─
    var kids = [];
    var cn = el.childNodes;
    for (var k = 0; k < cn.length; k++) {
      var c = cn[k];
      if (c.nodeType === 1) kids.push(c.tagName.toLowerCase());
      else if (c.nodeType === 3 && c.textContent.trim()) kids.push('text');
    }

    // ─ id: transient, stamped now ─
    var ccId = ensureCcId(el);

    var SEP = ' › ';
    var lines = ['<mentioned-element>'];
    if (reactPath.length) lines.push('react:    ' + clamp(reactPath.join(SEP), LINE_MAX));
    lines.push('dom:      ' + clampMid(domParts.join(SEP), SEP, LINE_MAX));
    if (textBits.length) lines.push('text:     ' + clamp(textBits.join(' · '), LINE_MAX));
    if (kids.length) lines.push('children: ' + clamp(kids.join(', '), LINE_MAX));
    if (selector) lines.push('selector: ' + clamp(selector, LINE_MAX));
    lines.push('id:       ' + ccId);
    lines.push('</mentioned-element>');
    return lines.join('\\n');
  };

  // Collect unique colors from computed styles — used by knobs ColorPicker swatches.
  window.__getDocumentColors = function() {
    var seen = {}; var out = [];
    var props = ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke'];
    var els = document.body.querySelectorAll('*');
    var max = Math.min(els.length, 500);
    for (var i = 0; i < max; i++) {
      var cs = window.getComputedStyle(els[i]);
      for (var j = 0; j < props.length; j++) {
        var v = cs[props[j]];
        if (!v || v === 'none' || v.indexOf('rgba(0, 0, 0, 0)') >= 0) continue;
        if (v.indexOf('rgb') === 0 || v.charAt(0) === '#') {
          if (!seen[v]) { seen[v] = true; out.push(v); }
        }
      }
      if (out.length >= 24) break;
    }
    return JSON.stringify(out);
  };
})();
`,Xg=`
(function() {
  if (window.__commentModeInitialized) return;
  window.__commentModeInitialized = true;

  let highlightOverlay = null;
  let persistentHighlights = [];

  function trunc(str, max) {
    max = max || 20;
    if (!str) return '';
    str = str.trim().replace(/\\s+/g, ' ');
    return str.length > max ? str.slice(0, max) + '…' : str;
  }

  function describeElement(el, includeText) {
    const parts = [];
    const tag = el.tagName.toLowerCase();

    const parent = el.parentElement;
    let indexStr = '';
    if (parent) {
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(el);
      if (siblings.length > 1) {
        indexStr = '[' + index + '/' + siblings.length + ']';
      }
    }

    parts.push('<' + tag + '>' + indexStr);
    if (el.id) parts.push('#' + el.id);
    if (el.className && typeof el.className === 'string') {
      const classes = el.className.split(' ').filter(Boolean).slice(0, 3);
      classes.forEach(c => parts.push('.' + trunc(c, 20)));
    }
    const rc = window.__reactName && window.__reactName(el);
    if (rc) parts.push('⚛' + trunc(rc, 24));
    if (el.getAttribute('aria-label')) {
      parts.push('aria:"' + trunc(el.getAttribute('aria-label')) + '"');
    }
    if (el.getAttribute('role')) {
      parts.push('role:' + el.getAttribute('role'));
    }
    if (el.title) parts.push('title:"' + trunc(el.title) + '"');
    if (includeText) {
      const text = el.innerText || el.textContent;
      if (text) parts.push('"' + trunc(text) + '"');
    }
    return parts.join(' ');
  }

  function getScreenLabels(el) {
    // Collect [data-screen-label] from el + ALL ancestors (innermost → outermost).
    // Walks the full chain since slide/screen containers may sit above the
    // 5-level ancestry window shown in the description.
    const labels = [];
    let cur = el;
    while (cur && cur !== document.body && cur !== document.documentElement) {
      const label = cur.getAttribute && cur.getAttribute('data-screen-label');
      if (label) labels.push(label);
      cur = cur.parentElement;
    }
    return labels;
  }

  function getDescription(el) {
    const lines = [];
    lines.push('→ ' + describeElement(el, true));
    let current = el.parentElement;
    let level = 0;
    while (current && current !== document.body && level < 5) {
      lines.push('  '.repeat(level + 1) + '↑ ' + describeElement(current, false));
      current = current.parentElement;
      level++;
    }
    const screens = getScreenLabels(el);
    if (screens.length) {
      lines.push('in screen: ' + screens.map(s => '"' + s + '"').join(' › '));
    }
    return lines.join('\\n');
  }

  function createHighlight(color) {
    color = color || '#3B82F6';
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;pointer-events:none;border:2px solid ' + color + ';border-radius:4px;z-index:99999;';
    overlay.setAttribute('data-designer-overlay', '1');
    document.body.appendChild(overlay);
    return overlay;
  }

  function positionHighlight(overlay, el) {
    const rect = el.getBoundingClientRect();
    overlay.style.left = (rect.left - 2) + 'px';
    overlay.style.top = (rect.top - 2) + 'px';
    overlay.style.width = (rect.width + 4) + 'px';
    overlay.style.height = (rect.height + 4) + 'px';
    overlay.style.display = 'block';
  }

  function emitSelection(result) {
    var description = getDescription(result.element);
    var descriptor = window.__describeEl ? window.__describeEl(result.element, result.selector) : '';
    console.log('__DESIGNER_ELEMENT_SELECTED__' + JSON.stringify({
      selector: result.selector,
      matchCount: result.matchCount,
      description: description,
      descriptor: descriptor,
      rect: result.rect
    }));
  }

  function fallbackSelector(el) {
    if (el.id) {
      var idSel = '#' + CSS.escape(el.id);
      if (document.querySelectorAll(idSel).length === 1) return idSel;
    }
    if (el === document.body) return 'body';
    var parent = el.parentNode;
    if (!parent) return el.tagName.toLowerCase();
    var siblings = Array.from(parent.children);
    var index = siblings.indexOf(el);
    return fallbackSelector(parent) + ' > ' + el.tagName.toLowerCase() + ':nth-child(' + (index + 1) + ')';
  }

  function pickSelector(el) {
    // body/html/head are compared by literal selector at several call sites
    // (structural guards); keep those names stable.
    if (el === document.body) return { selector: 'body', matchCount: 1 };
    // data-src-loc is a serve-time stamp unique per source element; stable
    // across DOM mutations within an iframe generation. Prefer it so later
    // querySelector calls don't drift onto an overlay or sibling.
    var loc = el.getAttribute && el.getAttribute('data-src-loc');
    if (loc) return { selector: '[data-src-loc="' + loc + '"]', matchCount: 1 };
    try {
      var sels = window.__generateSelectorList ? window.__generateSelectorList(el) : [];
      if (sels.length > 0) return { selector: sels[0].selector, matchCount: sels[0].matchCount };
    } catch(e) {}
    var fb = fallbackSelector(el);
    return { selector: fb, matchCount: document.querySelectorAll(fb).length };
  }

  // Hover tracking is shared between comment mode (toolbar, clicks
  // captured) and hover-track mode (voice, clicks pass through). Either
  // flag enables the mousemove highlight + __DESIGNER_ELEMENT_HOVERED__
  // emit; only __commentModeActive enables the click handler below.
  var lastHoverEl = null;
  function hoverActive() {
    return window.__commentModeActive || window.__hoverTrackActive;
  }
  function clearHover() {
    if (highlightOverlay) highlightOverlay.style.display = 'none';
    if (lastHoverEl !== null) {
      lastHoverEl = null;
      console.log('__DESIGNER_ELEMENT_HOVERED__' + JSON.stringify(null));
    }
  }
  // Pierce open shadow roots: elementFromPoint returns the host when a
  // shadow descendant is under the cursor. deck_stage.js puts its nav
  // overlay + tapzones in an open shadow and tags them data-noncommentable;
  // without piercing, the hover/click guard checks the host (no attr) and
  // we both outline the whole deck and swallow clicks on Prev/Next. Exposed
  // on window so EDIT_MODE_SCRIPT and any other later-injected script can
  // reuse the same check.
  window.__deepElementFromPoint = function(x, y) {
    var el = document.elementFromPoint(x, y);
    while (el && el.shadowRoot) {
      var inner = el.shadowRoot.elementFromPoint(x, y);
      if (!inner || inner === el) break;
      el = inner;
    }
    // If we landed on a shadow-internal element that isn't tagged
    // data-noncommentable, fall back to its light-DOM host so pickSelector/
    // fallbackSelector (which assume light-DOM parentNode ancestry) don't
    // walk into a ShadowRoot and crash on undefined.tagName. We only
    // pierced to see data-noncommentable on deck nav; if the attr isn't
    // there, the host is the right selectable target anyway.
    if (el && !(el.closest && el.closest('[data-noncommentable]'))) {
      var root = el.getRootNode && el.getRootNode();
      while (root && root.host) {
        el = root.host;
        root = el.getRootNode && el.getRootNode();
      }
    }
    return el;
  };
  // Check the full composedPath so an event retargeted to a shadow host
  // still sees a data-noncommentable inside the shadow. Falls back to the
  // light-DOM closest() walk when composedPath isn't available.
  window.__eventIsNonCommentable = function(e) {
    var path = typeof e.composedPath === 'function' ? e.composedPath() : null;
    if (path) {
      for (var i = 0; i < path.length; i++) {
        var n = path[i];
        if (n && n.nodeType === 1 && n.hasAttribute && n.hasAttribute('data-noncommentable')) return true;
      }
      return false;
    }
    return !!(e.target && e.target.closest && e.target.closest('[data-noncommentable]'));
  };
  var deepElementFromPoint = window.__deepElementFromPoint;
  var eventIsNonCommentable = window.__eventIsNonCommentable;
  document.addEventListener('mousemove', function(e) {
    if (!hoverActive()) return;
    var el = deepElementFromPoint(e.clientX, e.clientY);
    if (!el || (el.closest && el.closest('[data-noncommentable]'))) return;
    if (!highlightOverlay) highlightOverlay = createHighlight();
    positionHighlight(highlightOverlay, el);
    // Dedupe so a still mouse doesn't spam the bridge.
    if (el !== lastHoverEl) {
      lastHoverEl = el;
      var picked = pickSelector(el);
      var r = el.getBoundingClientRect();
      var description = getDescription(el);
      var descriptor = window.__describeEl ? window.__describeEl(el, picked.selector) : '';
      console.log('__DESIGNER_ELEMENT_HOVERED__' + JSON.stringify({
        selector: picked.selector,
        matchCount: picked.matchCount,
        description: description,
        descriptor: descriptor,
        rect: { x: r.x, y: r.y, width: r.width, height: r.height }
      }));
    }
  });
  document.addEventListener('mouseleave', function() {
    if (!hoverActive()) return;
    clearHover();
  });

  document.addEventListener('click', function(e) {
    if (!window.__commentModeActive) return;
    if (eventIsNonCommentable(e)) return;
    e.preventDefault();
    e.stopPropagation();
    var el = deepElementFromPoint(e.clientX, e.clientY);
    if (!el) return;
    if (highlightOverlay) highlightOverlay.style.display = 'none';
    var picked = pickSelector(el);
    var r = el.getBoundingClientRect();
    emitSelection({ element: el, selector: picked.selector, matchCount: picked.matchCount,
      rect: { x: r.x, y: r.y, width: r.width, height: r.height } });
  }, true);

  window.__enterCommentMode = function(cursor) {
    window.__commentModeActive = true;
    document.body.style.cursor = cursor || 'crosshair';
  };

  window.__exitCommentMode = function() {
    window.__commentModeActive = false;
    if (!window.__hoverTrackActive) {
      document.body.style.cursor = '';
      clearHover();
    }
  };

  // Hover-track mode — highlight + emit hover events, but never
  // intercept clicks. Live voice uses this so the user can point at
  // elements while still clicking through to the underlying app.
  window.__setHoverTrack = function(on) {
    window.__hoverTrackActive = !!on;
    if (on) {
      document.body.style.cursor = 'crosshair';
    } else if (!window.__commentModeActive) {
      document.body.style.cursor = '';
      clearHover();
    }
  };

  window.__highlightElement = function(selector) {
    try {
      const el = document.querySelector(selector);
      if (el) {
        const hl = createHighlight('#F59E0B');
        positionHighlight(hl, el);
        persistentHighlights.push(hl);
      }
    } catch (e) {}
  };

  window.__clearHighlights = function() {
    persistentHighlights.forEach(hl => hl.remove());
    persistentHighlights = [];
  };

  // Comment highlight management: yellow tint applied directly to elements.
  // Original inline styles are stashed as expando props on the element itself
  // so we can restore on removal. Because the tint lives on the element, it
  // scrolls with it and naturally disappears when it leaves the viewport.
  let commentHighlights = {};

  // Disambiguate when one CSS selector matches several elements (the
  // selector-gen algorithm only guarantees lowest-matchCount, not unique).
  // The algorithm here mirrors pickCommentTarget in
  // src/views/comment-target-resolver.ts — keep both in sync. That module
  // owns the test coverage; the duplication exists because this script
  // body has to be self-contained JS injected into the preview iframe.
  function normText(s) {
    return (s || '').toString().trim().replace(/\\s+/g, ' ');
  }
  window.__findCommentTarget = function(selector, hint, domSig) {
    try {
      var matches = Array.prototype.slice.call(document.querySelectorAll(selector));
      if (matches.length === 0) return null;
      if (matches.length === 1) return matches[0];

      var pool = matches.map(function(_, i){ return i; });
      var ht = normText(hint).replace(/…$/, '').slice(0, 60);

      // 1. Text match — exact wins, overlap is the truncation fallback.
      // Runs across ALL matches, not just visible ones, so a tall page
      // with the right element scrolled offscreen still resolves correctly.
      if (ht) {
        var texts = matches.map(function(el){
          return normText(el.innerText || el.textContent).slice(0, 60);
        });
        var exact = pool.filter(function(i){ return texts[i] === ht; });
        if (exact.length > 0) {
          pool = exact;
        } else {
          var overlap = pool.filter(function(i){
            var t = texts[i];
            return t && (t.indexOf(ht) === 0 || ht.indexOf(t) === 0);
          });
          if (overlap.length > 0) pool = overlap;
        }
      }

      // 2. Sibling-position match — distinguishes same-text siblings via
      // the descriptor's [idx/N] marker (only emitted for the target hop).
      if (pool.length > 1 && domSig) {
        var m = /^(\\d+)\\/(\\d+)$/.exec(domSig);
        if (m) {
          var idx = parseInt(m[1], 10);
          var total = parseInt(m[2], 10);
          var sigMatch = pool.filter(function(i){
            var p = matches[i].parentElement;
            if (!p || p.children.length !== total) return false;
            return Array.prototype.indexOf.call(p.children, matches[i]) + 1 === idx;
          });
          if (sigMatch.length > 0) pool = sigMatch;
        }
      }

      // 3. Visibility tiebreak. getClientRects().length > 0 is robust to
      // position:fixed (whose offsetParent is always null even when shown).
      var visible = pool.filter(function(i){ return matches[i].getClientRects().length > 0; });
      if (visible.length > 0) pool = visible;

      return matches[pool[0]];
    } catch(e) { return null; }
  };

  window.__addCommentHighlight = function(selector, hint, domSig) {
    if (commentHighlights[selector]) return;
    try {
      var el = window.__findCommentTarget(selector, hint, domSig);
      if (!el) return;
      // SVG descendants (<g>, <circle>, <path>…) don't render CSS
      // background-color, and inner SVG groups are commonly animated
      // (scale/opacity keyframes) which would hide outline too. Redirect
      // to the <svg> root — it sits in HTML layout so the tint renders,
      // and it's the stable container the inner shapes animate within.
      if (el.ownerSVGElement) el = el.ownerSVGElement;
      // Guard by element identity, not selector string — two different
      // selectors can resolve to the same element (click vs drag-scrub),
      // and re-stashing would overwrite __origBg with the highlight color.
      if (el.__origBg !== undefined) {
        commentHighlights[selector] = el;
        return;
      }
      el.__origBg = el.style.backgroundColor || '';
      el.__origOutline = el.style.outline || '';
      el.style.backgroundColor = 'rgba(250, 204, 21, 0.18)';
      el.style.outline = '2px solid #FACC15';
      commentHighlights[selector] = el;
    } catch (e) {}
  };

  window.__removeCommentHighlight = function(selector) {
    var el = commentHighlights[selector];
    if (!el) return;
    el.style.backgroundColor = el.__origBg;
    el.style.outline = el.__origOutline;
    delete el.__origBg;
    delete el.__origOutline;
    delete commentHighlights[selector];
  };
})();
`,qg=`
(function() {
  if (window.__knobsModeInitialized) return;
  window.__knobsModeInitialized = true;

  let hoverOverlay = null;
  let selectedOverlay = null;
  let selectedItems = []; // Array of { el, selector }

  function createOverlay(color) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;pointer-events:none;border:2px solid ' + color + ';border-radius:4px;z-index:99999;';
    d.setAttribute('data-designer-overlay', '1');
    document.body.appendChild(d);
    return d;
  }

  function positionOverlay(overlay, el) {
    var r = el.getBoundingClientRect();
    overlay.style.left = (r.left - 2) + 'px';
    overlay.style.top = (r.top - 2) + 'px';
    overlay.style.width = (r.width + 4) + 'px';
    overlay.style.height = (r.height + 4) + 'px';
    overlay.style.display = 'block';
  }

  function clearAll() {
    selectedItems = [];
    if (selectedOverlay) selectedOverlay.style.display = 'none';
  }

  function hasDirectText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var node = el.childNodes[i];
      if (node.nodeType === 3 && node.textContent.trim().length > 0) return true;
    }
    return false;
  }

  function isTextElement(el) {
    if (!el || el === document.body || el === document.documentElement) return false;
    if (el.namespaceURI && el.namespaceURI.indexOf('svg') >= 0) return false;
    var text = (el.innerText || el.textContent || '').trim();
    if (!text) return false;
    if (hasDirectText(el)) return true;
    return el.children.length === 0;
  }

  function finishTextEdit() {
    var el = window.__textEditCurrentElement;
    if (el) {
      el.removeAttribute('contenteditable');
      el.style.outline = '';
      el.style.outlineOffset = '';
      delete el.__omeletteOrigText;
      delete el.__omeletteOrigHTML;
    }
    if (window.__textEditTrapCleanup) window.__textEditTrapCleanup();
    window.__textEditCurrentElement = null;
  }

  function emitSelection(el, selector, isText, originalInnerHTML) {
    var r = el.getBoundingClientRect();
    var descriptor = window.__describeEl ? window.__describeEl(el, selector) : '';
    console.log('__DESIGNER_SELECTION_CHANGED__' + JSON.stringify({
      selector: selector,
      rect: { x: r.x, y: r.y, width: r.width, height: r.height },
      descriptor: descriptor,
      isText: isText,
      originalInnerHTML: originalInnerHTML,
      originalText: isText ? el.__omeletteOrigText : null,
      omId: (el.getAttribute && el.getAttribute('data-om-id')) || null
    }));
  }

  function fallbackSelector(el) {
    if (el.id) {
      var idSel = '#' + CSS.escape(el.id);
      if (document.querySelectorAll(idSel).length === 1) return idSel;
    }
    if (el === document.body) return 'body';
    var parent = el.parentNode;
    if (!parent) return el.tagName.toLowerCase();
    var siblings = Array.from(parent.children);
    var index = siblings.indexOf(el);
    return fallbackSelector(parent) + ' > ' + el.tagName.toLowerCase() + ':nth-child(' + (index + 1) + ')';
  }

  function pickSelector(el) {
    if (el === document.body) return 'body';
    var loc = el.getAttribute && el.getAttribute('data-src-loc');
    if (loc) return '[data-src-loc="' + loc + '"]';
    try {
      var sels = window.__generateSelectorList ? window.__generateSelectorList(el) : [];
      if (sels.length > 0) return sels[0].selector;
    } catch(e) {}
    return fallbackSelector(el);
  }

  // Shared with comment mode — pierces shadow DOM so data-noncommentable
  // inside an open shadow (deck_stage nav) is honoured here too. Falls back
  // if COMMENT_MODE_SCRIPT didn't run (shouldn't happen — both are injected
  // by useWebviewLifecycle, but stay resilient in case injection order flips).
  var deepElementFromPoint = window.__deepElementFromPoint || function(x, y) { return document.elementFromPoint(x, y); };
  var eventIsNonCommentable = window.__eventIsNonCommentable || function(e) {
    return !!(e.target && e.target.closest && e.target.closest('[data-noncommentable]'));
  };

  document.addEventListener('mousemove', function(e) {
    if (!window.__editModeActive) return;
    var el = deepElementFromPoint(e.clientX, e.clientY);
    if (!el || (el.closest && el.closest('[data-noncommentable]'))) return;
    if (el === document.body) { if (hoverOverlay) hoverOverlay.style.display = 'none'; return; }
    if (selectedItems.some(function(s) { return s.el === el; })) {
      if (hoverOverlay) hoverOverlay.style.display = 'none'; return;
    }
    if (!hoverOverlay) hoverOverlay = createOverlay('#10B981');
    positionOverlay(hoverOverlay, el);
  });

  document.addEventListener('mouseleave', function() {
    if (!window.__editModeActive) return;
    if (hoverOverlay) hoverOverlay.style.display = 'none';
  });

  // Pre-activate contentEditable on mousedown so drag-to-select works on the
  // very first interaction with a text element (before click fires).
  document.addEventListener('mousedown', function(e) {
    if (!window.__editModeActive || window.__textEditCurrentElement) return;
    if (eventIsNonCommentable(e)) return;
    if (!isTextElement(e.target)) return;
    e.target.contentEditable = 'true';
  }, true);

  document.addEventListener('click', function(e) {
    if (!window.__editModeActive) return;
    if (eventIsNonCommentable(e)) return;
    // Click inside the element currently being text-edited: let the browser
    // handle caret placement / text selection naturally.
    if (window.__textEditCurrentElement &&
        window.__textEditCurrentElement.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    var el = deepElementFromPoint(e.clientX, e.clientY);
    if (!el) return;
    if (hoverOverlay) hoverOverlay.style.display = 'none';

    // Finalize any previous text edit before switching. Host owns persist —
    // it will serialize+write via finalizeSelection before setPendingSelection.
    finishTextEdit();

    var selector = pickSelector(el);
    selectedItems = [{ el: el, selector: selector }];
    if (el !== document.body) {
      if (!selectedOverlay) selectedOverlay = createOverlay('#8B5CF6');
      positionOverlay(selectedOverlay, el);
    } else {
      if (selectedOverlay) selectedOverlay.style.display = 'none';
    }

    var isText = isTextElement(el);
    var originalInnerHTML = null;
    if (isText) {
      if (selectedOverlay) selectedOverlay.style.display = 'none';
      if (el.__omeletteOrigText === undefined) {
        el.__omeletteOrigText = el.innerText || el.textContent || '';
        el.__omeletteOrigHTML = el.innerHTML;
      }
      originalInnerHTML = el.__omeletteOrigHTML;
      el.contentEditable = 'true';
      el.style.outline = '2px solid #8B5CF6';
      el.style.outlineOffset = '2px';
      el.focus();
      // Drag-select (mousedown already made the element editable) leaves a
      // non-collapsed range. Only place a caret if nothing is selected yet.
      var selNow = window.getSelection();
      if (!selNow || selNow.isCollapsed || !el.contains(selNow.anchorNode)) {
        var caret = document.caretRangeFromPoint
          ? document.caretRangeFromPoint(e.clientX, e.clientY)
          : null;
        var sel = window.getSelection();
        if (caret && el.contains(caret.startContainer)) {
          sel.removeAllRanges();
          sel.addRange(caret);
        } else {
          var r2 = document.createRange();
          r2.selectNodeContents(el);
          r2.collapse(false);
          sel.removeAllRanges();
          sel.addRange(r2);
        }
      }
      function trapKeys(ev) { ev.stopPropagation(); }
      // Figma-style -> / <- replacement while typing. Mirrors the chat
      // composer's useSmartPunctuation hook: fires on keystroke input only
      // (not paste/IME/undo), uses execCommand so Cmd+Z reverts the glyph
      // back to the literal sequence.
      function smartPunct(ev) {
        if (ev.inputType !== 'insertText' || ev.isComposing) return;
        var s = window.getSelection();
        if (!s || !s.isCollapsed) return;
        var n = s.anchorNode, off = s.anchorOffset;
        if (!n || n.nodeType !== 3) return;
        var tail = n.data.slice(Math.max(0, off - 2), off);
        var glyph = tail === '->' ? '\\u2192' : tail === '<-' ? '\\u2190' : null;
        if (!glyph) return;
        var r = document.createRange();
        r.setStart(n, off - 2);
        r.setEnd(n, off);
        s.removeAllRanges();
        s.addRange(r);
        document.execCommand('insertText', false, glyph);
      }
      el.addEventListener('keydown', trapKeys, false);
      el.addEventListener('keyup', trapKeys, false);
      el.addEventListener('keypress', trapKeys, false);
      el.addEventListener('input', smartPunct, false);
      window.__textEditTrapCleanup = function() {
        el.removeEventListener('keydown', trapKeys, false);
        el.removeEventListener('keyup', trapKeys, false);
        el.removeEventListener('keypress', trapKeys, false);
        el.removeEventListener('input', smartPunct, false);
        window.__textEditTrapCleanup = null;
      };
      window.__textEditCurrentElement = el;
    }

    emitSelection(el, selector, isText, originalInnerHTML);
  }, true);

  // Cmd/Ctrl+Enter commits the current text edit (host finalizes + writes).
  document.addEventListener('keydown', function(e) {
    if (!window.__textEditCurrentElement) return;
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      console.log('__DESIGNER_EDIT_ACTION__submit');
    }
  }, true);

  var STYLE_PROPS = [
    'display','position','width','height','minWidth','maxWidth','minHeight','maxHeight',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'borderWidth','borderStyle','borderColor','borderRadius',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius',
    'backgroundColor','backgroundImage','backgroundSize','backgroundPosition','objectFit',
    'color','fontSize','fontWeight','fontFamily',
    'lineHeight','letterSpacing','textAlign','textDecoration','textTransform',
    'gap','flexDirection','justifyContent','alignItems','flexWrap',
    'opacity','overflow','boxShadow','transform',
    'gridTemplateColumns','gridTemplateRows',
    'fill','stroke','strokeWidth'
  ];

  // Diff computed styles against a fresh element of the same tag.
  // Don't set position:absolute on the temp — position is in STYLE_PROPS
  // so the inline style would pollute the baseline (false negatives for
  // absolutely-positioned elements, false positives for static ones),
  // and CSS blockifies absolutely-positioned inlines, corrupting display.
  function nonDefaultStyles(node) {
    var comp = window.getComputedStyle(node);
    var temp = document.createElement(node.tagName);
    temp.style.cssText = 'visibility:hidden;pointer-events:none;';
    document.body.appendChild(temp);
    var def = window.getComputedStyle(temp);
    var out = {};
    STYLE_PROPS.forEach(function(prop) {
      var v = comp[prop];
      if (v && v !== def[prop]) out[prop] = v;
    });
    temp.remove();
    return out;
  }

  function rectOf(node) {
    var r = node.getBoundingClientRect();
    return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) };
  }

  window.__knobsGetContext = function() {
    return JSON.stringify(selectedItems.map(function(s) {
      var el = s.el;
      var styles = nonDefaultStyles(el);
      // nonDefaultStyles diffs against a temp element appended to <body>,
      // which inherits the page's color/font — so inherited props diff to
      // zero and get dropped. Backfill them from computed styles directly
      // so the typography panel shows the actual rendered values.
      var cs = window.getComputedStyle(el);
      if (!styles.color && cs.color) styles.color = cs.color;
      if (!styles.fontFamily && cs.fontFamily) styles.fontFamily = cs.fontFamily;
      if (!styles.fontSize && cs.fontSize) styles.fontSize = cs.fontSize;
      if (el === document.body) {
        // body {} selector also matches the temp <body>, same zero-diff issue
        // for backgroundColor (not inherited, so the general backfill above
        // doesn't cover it).
        var directBg = cs.backgroundColor;
        if (directBg && directBg !== 'rgba(0, 0, 0, 0)') styles.backgroundColor = directBg;
      }

      var attrs = {};
      for (var i = 0; i < el.attributes.length; i++) {
        var a = el.attributes[i];
        if (a.name !== 'style') attrs[a.name] = (a.value || '').slice(0, 200);
      }

      // Ancestors — styles + bounding box so the NL generator can infer
      // which ancestor is "similar size" to the selection (a full-width
      // wrapper is a less likely target than a same-size parent).
      var parents = [];
      var cur = el.parentElement;
      var lvl = 0;
      while (cur && cur !== document.body && lvl < 4) {
        var pa = {};
        for (var j = 0; j < cur.attributes.length; j++) {
          pa[cur.attributes[j].name] = (cur.attributes[j].value || '').slice(0, 100);
        }
        parents.push({
          tag: cur.tagName.toLowerCase(),
          attrs: pa,
          styles: nonDefaultStyles(cur),
          inlineStyle: (cur.getAttribute('style') || '').slice(0, 400),
          rect: rectOf(cur)
        });
        cur = cur.parentElement;
        lvl++;
      }

      // Direct children + grandchildren — same reasoning. A "bg color"
      // ask might really mean the child card, not the clicked text node.
      // Cap at 8 to avoid blowing up on grid containers.
      var children = [];
      function walkChildren(parent, depth) {
        if (depth > 2 || children.length >= 8) return;
        var kids = parent.children;
        for (var k = 0; k < kids.length && children.length < 8; k++) {
          var kid = kids[k];
          var kidStyles = nonDefaultStyles(kid);
          // Include actual computed typography for text-bearing children so Mixed
          // detection works (e.g. <strong> bold, CSS-class font sizes). Skip
          // non-text elements like <img>/<svg>/<hr> which always report font props
          // but never display text, causing spurious Typography sections.
          var kidText = (kid.innerText || kid.textContent || '').trim();
          if (kidText.length > 0) {
            var kidComp = window.getComputedStyle(kid);
            ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','textAlign'].forEach(function(p) {
              var v = kidComp[p]; if (v) kidStyles[p] = v;
            });
          }
          children.push({
            tag: kid.tagName.toLowerCase(),
            styles: kidStyles,
            inlineStyle: (kid.getAttribute('style') || '').slice(0, 200),
            rect: rectOf(kid),
            depth: depth
          });
          walkChildren(kid, depth + 1);
        }
      }
      walkChildren(el, 1);

      return {
        selector: s.selector,
        tag: el.tagName.toLowerCase(),
        attrs: attrs,
        styles: styles,
        inlineStyle: (el.getAttribute('style') || '').slice(0, 400),
        rect: rectOf(el),
        innerHTML: el.innerHTML.slice(0, 1000),
        parents: parents,
        children: children
      };
    }));
  };

  // Saved state lives in its own array so it survives selectedItems
  // reassignment. onSelect/onScrub/onScrubEnd replace selectedItems
  // wholesale with fresh objects — storing savedStyle as an expando on
  // those entries meant restore would iterate the NEW items (no
  // savedStyle) and silently no-op, leaving the previously-tweaked
  // element's inline styles permanently stuck.
  var savedKnobsState = [];

  window.__knobsSaveState = function() {
    // Save the selected element AND ancestors up to depth 4 — the builtin
    // sections use walkUp(depth) to target ancestors in applyFn, so Discard
    // needs to revert those too.
    savedKnobsState = [];
    selectedItems.forEach(function(s) {
      savedKnobsState.push({ el: s.el, cssText: s.el.style.cssText });
      var cur = s.el.parentElement;
      for (var i = 0; i < 4 && cur && cur !== document.body; i++) {
        savedKnobsState.push({ el: cur, cssText: cur.style.cssText });
        cur = cur.parentElement;
      }
    });
    // On babel pages the JSX source cache is mutated per-edit; snapshot it so
    // a Discard restores a coherent baseline for subsequent AST patches.
    var bs = window.__babelScriptSources;
    window.__savedBabelCodes = bs ? bs.map(function(e){return e.code}) : null;
  };

  window.__knobsRestoreState = function() {
    savedKnobsState.forEach(function(s) {
      s.el.style.cssText = s.cssText;
    });
    savedKnobsState = [];
    var bs = window.__babelScriptSources, sv = window.__savedBabelCodes;
    if (bs && sv) bs.forEach(function(e,i){ e.code = sv[i]; });
    window.__savedBabelCodes = null;
  };

  function parseCss(t) {
    var m = {};
    (t||'').split(';').forEach(function(d){
      var c = d.indexOf(':'); if (c < 0) return;
      var k = d.slice(0,c).trim(), v = d.slice(c+1).trim();
      if (k && v) m[k] = v;
    });
    return m;
  }

  // Return every element (selected + walkUp ancestors) whose inline style
  // changed since the last source write, as [{selector, cssText}]. The JSX
  // patcher receives ONLY touched props so it never has to guess which keys
  // came from a spread vs. a user knob. Diffed against s.written (set by
  // __knobsMarkWritten after each successful write) so a drag-back-to-A
  // after an intermediate write of B is reported as a change, not skipped.
  window.__knobsGetAllChanged = function() {
    var out = [];
    savedKnobsState.forEach(function(s) {
      // body has no React fiber — its inline styles only persist via the
      // HTML-serialize path, which the caller takes when body is selected.
      if (s.el === document.body) return;
      var base = s.written != null ? s.written : s.cssText;
      var before = parseCss(base), after = parseCss(s.el.style.cssText), parts = [];
      for (var k in after) {
        // text-edit selection chrome — never a user-touched knob
        if (k === 'outline' || k === 'outline-offset') continue;
        if (after[k] !== before[k]) parts.push(k + ': ' + after[k]);
      }
      if (!parts.length) return;
      out.push({ selector: pickSelector(s.el), cssText: parts.join('; ') });
    });
    return JSON.stringify(out);
  };

  // Re-baseline every saved entry to its current cssText. Called by the host
  // after a flushWrite round so the next diff is relative to what's on disk.
  // savedKnobsState[].cssText itself is left at selection-time for Discard.
  window.__knobsMarkWritten = function() {
    savedKnobsState.forEach(function(s) { s.written = s.el.style.cssText; });
  };

  window.__knobsApply = function(applyFnStr, propsJson) {
    try {
      var props = JSON.parse(propsJson);
      var fn = new Function('return ' + applyFnStr)();
      selectedItems.forEach(function(s) { fn(props, s.el); });
    } catch (e) {
      console.error('knobs apply error:', e);
    }
  };

  window.__serializeDocument = function() {
    // Temporarily detach injected overlays/scripts so they don't land in the
    // saved HTML. Restore in reverse so an element whose captured nextSibling
    // is itself stripped finds it already re-inserted.
    var strip = Array.from(document.querySelectorAll('[data-designer-overlay],[data-designer-retranspiled],[data-omelette-injected],#__om_srcmap'));
    // data-src-loc / data-om-id are serve-time annotations; writing them back
    // would pollute the file. Strip for the serialize but RESTORE after —
    // pickSelector and the host-side srcmap table rely on them.
    var stampAttrs = ['data-src-loc', 'data-om-id'];
    var stampEls = Array.from(document.querySelectorAll('[data-src-loc],[data-om-id]'));
    var stamps = stampEls.map(function(e){
      return stampAttrs.map(function(a){ var v=e.getAttribute(a); if(v!=null)e.removeAttribute(a); return v; });
    });
    var anchors = strip.map(function(el) { return { p: el.parentNode, n: el.nextSibling }; });
    strip.forEach(function(el) { el.remove(); });
    var html = '<!DOCTYPE html>' + document.documentElement.outerHTML;
    for (var i = strip.length - 1; i >= 0; i--) anchors[i].p.insertBefore(strip[i], anchors[i].n);
    for (var j = 0; j < stampEls.length; j++) {
      for (var k = 0; k < stampAttrs.length; k++) {
        if (stamps[j][k] != null) stampEls[j].setAttribute(stampAttrs[k], stamps[j][k]);
      }
    }
    return html;
  };

  window.__knobsSelectBody = function() {
    if (selectedOverlay) selectedOverlay.style.display = 'none';
    finishTextEdit();
    selectedItems = [{ el: document.body, selector: 'body' }];
    emitSelection(document.body, 'body', false, null);
  };

  window.__enterEditMode = function() {
    window.__editModeActive = true;
    document.body.style.cursor = 'crosshair';
  };

  window.__exitEditMode = function() {
    window.__editModeActive = false;
    if (!window.__hoverTrackActive && !window.__commentModeActive) {
      document.body.style.cursor = '';
    }
    if (hoverOverlay) hoverOverlay.style.display = 'none';
    if (selectedOverlay) selectedOverlay.style.display = 'none';
    finishTextEdit();
    clearAll();
  };

  window.__textEditFinish = function() {
    finishTextEdit();
  };

  window.__textEditRevert = function(originalInnerHTML) {
    var el = window.__textEditCurrentElement;
    if (el) el.innerHTML = originalInnerHTML;
    finishTextEdit();
  };
})();
`,Vg=`
(function() {
  if (window.__jsxPatchInitialized) return;
  window.__jsxPatchInitialized = true;

  function babelScripts() {
    return Array.from(document.querySelectorAll('script[type="text/babel"],script[type="text/jsx"]'));
  }

  window.__isBabelPage = function() {
    return !!window.Babel && babelScripts().length > 0;
  };

  window.__listBabelScripts = function() {
    return JSON.stringify(babelScripts().map(function(s, i) {
      return { idx: i, src: s.getAttribute('src') };
    }));
  };

  // Cache each script's source text so __patchJSXSource can re-parse it.
  // Idempotent; resolves once all external sources are fetched.
  window.__cacheBabelSources = function() {
    if (window.__babelScriptSources) return Promise.resolve();
    var scripts = babelScripts();
    var out = new Array(scripts.length);
    var fetches = [];
    scripts.forEach(function(s, i) {
      var src = s.getAttribute('src');
      if (src) {
        fetches.push(
          fetch(src).then(function(r){return r.text()}).then(function(t){
            out[i] = { idx: i, src: src, code: t };
          }).catch(function(){ out[i] = { idx: i, src: src, code: null }; })
        );
      } else {
        out[i] = { idx: i, src: null, code: s.textContent || '' };
      }
    });
    return Promise.all(fetches).then(function(){ window.__babelScriptSources = out; });
  };

  // _debugSource is only populated when transform-react-jsx-source ran at
  // transpile time. The bridge script (embedded/bridge.ts) appends that
  // plugin to every text/babel script's data-plugins on DOMContentLoaded
  // before babel-standalone's auto-transform fires, so the common path
  // already has source locations. This re-transpile is the fallback for
  // pages where the bridge didn't run (raw=1, bridge load failure).
  // Re-mount loses state; requires __cacheBabelSources to have resolved.
  window.__ensureJSXSource = function() {
    if (window.__jsxSourceEnsured) return 'ok';
    if (!window.Babel) return 'no-babel';
    // Find the first React-rendered element (not the mount point itself —
    // #root has no fiber) and check whether the bridge already populated
    // _debugSource. The previous single-probe could land on a non-React
    // child of body and false-negative into a needless retranspile.
    var probes = document.querySelectorAll('#root *, body > *:not(script):not([data-designer-overlay]) *');
    for (var i = 0; i < probes.length && i < 30; i++) {
      var pk = Object.keys(probes[i]).find(function(k){return k.indexOf('__reactFiber$')===0});
      if (!pk) continue;
      if (probes[i][pk]._debugSource) { window.__jsxSourceEnsured = true; return 'ok'; }
      break;
    }
    // Bridge already added the plugin but fibers still have no _debugSource —
    // page is on a production React build that drops it. Re-transpiling with
    // the same React is futile; bail so __getJSXLoc can fall through cleanly.
    var bridged = babelScripts().some(function(s){
      return (s.getAttribute('data-plugins')||'').indexOf('transform-react-jsx-source') >= 0;
    });
    if (bridged) { window.__jsxSourceEnsured = true; return 'prod-react'; }
    var srcs = window.__babelScriptSources || [];
    if (!srcs.length) return 'no-scripts';
    // Transform everything BEFORE touching the DOM so a transpile error
    // leaves the page intact instead of a blank #root.
    var outputs;
    try {
      outputs = srcs.map(function(s) {
        if (s.code == null) return null;
        return window.Babel.transform(s.code, {
          presets: ['react'],
          plugins: ['transform-react-jsx-source'],
          filename: s.src || ('inline-' + s.idx),
        }).code;
      });
    } catch (e) {
      console.error('[jsx] retranspile failed:', e);
      return 'retranspile-error';
    }
    var root = document.getElementById('root');
    if (root) root.innerHTML = '';
    outputs.forEach(function(out) {
      if (out == null) return;
      var ns = document.createElement('script');
      ns.setAttribute('data-designer-retranspiled', '1');
      // IIFE-wrap so top-level const/let from the original page-load eval
      // don't collide ("useState already declared"). The render call inside
      // still reaches the global ReactDOM and #root.
      ns.textContent = '(function(){\\n' + out + '\\n})();';
      document.body.appendChild(ns);
    });
    window.__jsxSourceEnsured = true;
    return 'retranspiled';
  };

  // Map a DOM element (by selector) to its JSX source location via React fiber.
  // Returns JSON {scriptIdx, line, col, fileName, tag} or null.
  // Count DOM elements whose own fiber's _debugSource is (line, col). >1
  // means the JSX at that location is inside a loop/map — removing the
  // source node would delete every rendered instance, not just the clicked
  // one, so the host defers to the agent instead of patching.
  window.__countFibersAtLoc = function(line, col) {
    try {
      var n = 0;
      var all = document.querySelectorAll('*');
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        var key = Object.keys(el).find(function(k){return k.indexOf('__reactFiber$')===0});
        if (!key) continue;
        var s = el[key] && el[key]._debugSource;
        if (s && s.lineNumber === line && (s.columnNumber === col || s.columnNumber === col + 1)) n++;
      }
      // Prod-React pages: fibers have no _debugSource, so n is 0 even when
      // multiple instances exist. The data-om-id fast path still resolves
      // a location on those pages, so count via the attribute too — every
      // instance from one JSX call site shares the same trailing :line:col.
      var byId = document.querySelectorAll('[data-om-id$=":' + line + ':' + col + '"]').length;
      return Math.max(n, byId);
    } catch (e) { return 0; }
  };

  window.__getJSXLoc = function(selector) {
    try {
      var el = document.querySelector(selector);
      if (!el) return null;
      // Fast path: the bridge's om-src-id Babel plugin stamps
      // data-om-id="jsx:<fileName>:<start>:<line>:<col>" at transpile time.
      // Parse it directly — no fiber walk, and works on prod React builds
      // that don't populate _debugSource.
      var omId = el.getAttribute('data-om-id');
      if (omId && omId.slice(0, 4) === 'jsx:') {
        var parts = omId.slice(4).split(':');
        if (parts.length >= 4) {
          var fn = parts.slice(0, parts.length - 3).join(':');
          var scripts = babelScripts();
          var idx = -1;
          for (var si = 0; si < scripts.length; si++) {
            var sSrc = scripts[si].getAttribute('src');
            var sFn = scripts[si].getAttribute('data-filename');
            if (fn === sSrc || fn === sFn || (sSrc && fn.slice(-sSrc.length - 1) === '/' + sSrc)) {
              idx = si; break;
            }
          }
          if (idx === -1 && scripts.length === 1) idx = 0;
          if (idx !== -1) {
            return JSON.stringify({
              scriptIdx: idx,
              line: parseInt(parts[parts.length - 2], 10),
              col: parseInt(parts[parts.length - 1], 10),
              fileName: fn,
              tag: el.tagName.toLowerCase(),
            });
          }
          // idx === -1: fileName from the omId didn't match any script
          // (babel-standalone sets opts.filename to "Inline Babel script"
          // before bridge's data-filename lands). Fall through to the
          // _debugSource walk instead of returning a bad scriptIdx.
        }
      }
      // Walk up until we find a fiber with _debugSource — text-level spans
      // sometimes don't carry one but their parent host element does.
      var node = el;
      var src = null;
      var hops = 0;
      while (node && hops < 6) {
        var key = Object.keys(node).find(function(k){return k.indexOf('__reactFiber$')===0});
        if (key) {
          var fib = node[key];
          while (fib && !src) {
            if (fib._debugSource) src = fib._debugSource;
            fib = fib.return;
          }
        }
        if (src) break;
        node = node.parentElement;
        hops++;
      }
      if (!src) return null;
      var scripts = babelScripts();
      var fn = src.fileName || '';
      var inlineIdxs = [];
      var idx = -1;
      for (var i = 0; i < scripts.length; i++) {
        var s = scripts[i].getAttribute('src');
        if (!s) { inlineIdxs.push(i); continue; }
        // External: suffix match — fileName is the resolved URL or bare path,
        // and substring would mis-match Nav.jsx for SideNav.jsx.
        if (fn === s || fn.slice(-s.length - 1) === '/' + s) { idx = i; break; }
      }
      if (idx === -1 && fn) {
        // __ensureJSXSource passes 'inline-<idx>' as filename — recover idx
        // directly. babel-standalone's own "Inline Babel script (N)" suffix
        // is 1-based when present; both land here via the trailing-integer
        // capture, but only the inline-<idx> form maps cleanly to our list.
        var m = /^inline-([0-9]+)$/.exec(fn);
        if (m) {
          var n = parseInt(m[1], 10);
          if (n >= 0 && n < scripts.length) idx = n;
        } else if (fn.indexOf('Inline') !== -1 && inlineIdxs.length === 1) {
          // Legacy babel-standalone fileName isn't disambiguated across
          // multiple inline blocks — only safe to map when there's exactly one.
          idx = inlineIdxs[0];
        }
      }
      if (idx === -1 && scripts.length === 1) idx = 0;
      return JSON.stringify({
        scriptIdx: idx,
        line: src.lineNumber,
        col: src.columnNumber,
        fileName: src.fileName,
        tag: el.tagName.toLowerCase(),
      });
    } catch (e) { return null; }
  };

  // CSS-text → JS object expression properties for the JSX style attr.
  function cssTextToProps(t, cssText) {
    var props = [];
    cssText.split(';').forEach(function(decl) {
      var c = decl.indexOf(':');
      if (c < 0) return;
      var prop = decl.slice(0, c).trim();
      var val = decl.slice(c + 1).trim();
      if (!prop || !val) return;
      // CSS custom properties stay verbatim as string keys — React passes
      // them through, and camelCasing them yields an invalid identifier.
      if (prop.slice(0, 2) === '--') {
        props.push(t.objectProperty(t.stringLiteral(prop), t.stringLiteral(val)));
        return;
      }
      var camel = prop.replace(/-([a-z])/g, function(_,ch){return ch.toUpperCase()});
      props.push(t.objectProperty(t.identifier(camel), t.stringLiteral(val)));
    });
    return props;
  }

  // Locate the JSXElement whose opening tag starts at (line, col). Babel's
  // _debugSource columnNumber is 1-based; AST loc.start.column is 0-based.
  function findJSXAt(traverse, ast, line, col, tag) {
    var hit = null;
    traverse(ast, {
      JSXOpeningElement: function(path) {
        var l = path.node.loc;
        if (!l) return;
        if (l.start.line === line && (l.start.column === col || l.start.column === col - 1)) {
          var n = path.node.name;
          var name = n.type === 'JSXIdentifier' ? n.name : null;
          if (!tag || !name || name.toLowerCase() === tag) {
            hit = path;
            path.stop();
          }
        }
      }
    });
    return hit;
  }

  // kind: 'style' payload {cssText} | kind: 'text' payload {newText}
  // Returns JSON: {ok:true, newSource} | {ok:false, reason}
  window.__patchJSXSource = function(scriptIdx, line, col, tag, kind, payloadJson) {
    var sources = window.__babelScriptSources;
    if (!sources || scriptIdx < 0 || scriptIdx >= sources.length) {
      return JSON.stringify({ ok: false, reason: 'bad_loc' });
    }
    var entry = sources[scriptIdx];
    // null code = external fetch failed at cache time, or the entry was
    // invalidated after an agent-side edit. stale_loc routes the edit through
    // the agent fallback rather than dead-ending with a misleading toast.
    if (entry.code == null) return JSON.stringify({ ok: false, reason: 'stale_loc' });
    var B = window.Babel;
    if (!B || !B.packages) return JSON.stringify({ ok: false, reason: 'parse_error' });
    var parser = B.packages.parser;
    var traverse = B.packages.traverse.default;
    var generate = B.packages.generator.default;
    var t = B.packages.types;
    var payload = JSON.parse(payloadJson);

    var ast;
    try {
      ast = parser.parse(entry.code, { sourceType: 'module', plugins: ['jsx'] });
    } catch (e) {
      return JSON.stringify({ ok: false, reason: 'parse_error' });
    }

    var openPath = findJSXAt(traverse, ast, line, col, tag);
    if (!openPath) return JSON.stringify({ ok: false, reason: 'stale_loc' });

    var deferred = [];
    if (kind === 'style') {
      var attrs = openPath.node.attributes;
      var styleAttr = attrs.find(function(a){
        return a.type==='JSXAttribute' && a.name && a.name.name==='style';
      });
      // payload.cssText now carries ONLY the props the user actually touched
      // (host diffed against __knobsSaveState). No need to guess which keys
      // came from a spread or a dynamic expression — every key here is an
      // intentional edit.
      var newProps = cssTextToProps(t, payload.cssText || '');
      if (newProps.length === 0) return JSON.stringify({ ok: false, reason: 'stale_loc' });
      var keyOf = function(p){ return p.key && (p.key.name || p.key.value); };
      var isLit = function(v){
        if (!v) return false;
        if (v.type==='StringLiteral' || v.type==='NumericLiteral') return true;
        return v.type==='UnaryExpression' && (v.operator==='-'||v.operator==='+')
          && v.argument && v.argument.type==='NumericLiteral';
      };
      if (!styleAttr) {
        attrs.push(t.jsxAttribute(
          t.jsxIdentifier('style'),
          t.jsxExpressionContainer(t.objectExpression(newProps))
        ));
      } else if (styleAttr.value && styleAttr.value.type==='JSXExpressionContainer') {
        var expr = styleAttr.value.expression;
        if (expr.type === 'ObjectExpression') {
          var existing = {};
          expr.properties.forEach(function(p){
            if (p.type==='ObjectProperty') existing[keyOf(p)] = p;
          });
          // Per touched key: literal/absent → replace/append directly;
          // explicit non-literal source value → defer to the agent so we
          // don't freeze a themeColor / ternary to a resolved string.
          var apply = newProps.filter(function(p){
            var e = existing[keyOf(p)];
            if (e && !isLit(e.value)) { deferred.push(keyOf(p)); return false; }
            return true;
          });
          if (apply.length === 0) {
            return JSON.stringify({ ok: false, reason: 'dynamic_style', deferred: deferred });
          }
          var applyKeys = {};
          apply.forEach(function(p){ applyKeys[keyOf(p)] = true; });
          expr.properties = expr.properties.filter(function(p){
            return !(p.type==='ObjectProperty' && applyKeys[keyOf(p)]);
          }).concat(apply);
        } else {
          // style={someVar} — wrap and append; touched keys override at runtime.
          styleAttr.value.expression = t.objectExpression(
            [t.spreadElement(expr)].concat(newProps)
          );
        }
      } else {
        return JSON.stringify({ ok: false, reason: 'stale_loc' });
      }
    } else if (kind === 'text') {
      var elPath = openPath.parentPath;
      var children = elPath.node.children || [];
      var txt = payload.newText || '';
      // JSXText is emitted verbatim — {, }, < would be reparsed as expression
      // or element openers and break the file. Wrap as a string literal so
      // the source round-trips: <p>{"a {b} c"}</p>.
      var mkChild = function(s) {
        return /[{}<]/.test(s)
          ? t.jsxExpressionContainer(t.stringLiteral(s))
          : t.jsxText(s);
      };
      var hasNonText = children.some(function(c){return c.type!=='JSXText'});
      // A {expr} child renders text we can't see in the AST, so indexOf
      // positioning can land on the expression's rendered output instead of
      // a JSXText. Defer rather than risk splicing the wrong node.
      var hasExpr = children.some(function(c){return c.type==='JSXExpressionContainer'});
      if (!hasNonText) {
        elPath.node.children = [mkChild(txt)];
      } else if (hasExpr) {
        return JSON.stringify({ ok: false, reason: 'dynamic_text' });
      } else {
        // Mixed children: innerText spans nested-element text too, so a full
        // match against one JSXText only works when the element has a single
        // text run. Instead diff original vs new (common prefix/suffix), walk
        // JSXText children positioning each in the original by sequential
        // indexOf, and replace the one that fully contains the diff range.
        // JSX source whitespace is not what the DOM renders, so normalise
        // both sides before comparing.
        var norm = function(s){return (s||'').replace(/\\s+/g,' ').trim()};
        var nO = norm(payload.original), nN = norm(txt);
        var P = 0; while (P < nO.length && P < nN.length && nO[P] === nN[P]) P++;
        var S = 0; while (S < nO.length - P && S < nN.length - P && nO[nO.length-1-S] === nN[nN.length-1-S]) S++;
        var diffEnd = nO.length - S;
        var pos = 0, idx = -1, segStart = 0, segLen = 0;
        for (var ci = 0; ci < children.length; ci++) {
          if (children[ci].type !== 'JSXText') continue;
          var seg = norm(children[ci].value);
          if (!seg) continue;
          var at = nO.indexOf(seg, pos);
          if (at < 0) { idx = -1; break; }
          if (P >= at && diffEnd <= at + seg.length) {
            idx = ci; segStart = at; segLen = seg.length; break;
          }
          pos = at + seg.length;
        }
        if (idx < 0) return JSON.stringify({ ok: false, reason: 'dynamic_text' });
        var delta = nN.length - nO.length;
        var newSeg = nN.slice(segStart, segStart + segLen + delta);
        var raw = children[idx].value;
        var lead = (raw.match(/^\\s*/)||[''])[0], trail = (raw.match(/\\s*$/)||[''])[0];
        children[idx] = mkChild(lead + newSeg + trail);
      }
      if (openPath.node.selfClosing) {
        openPath.node.selfClosing = false;
        elPath.node.closingElement = t.jsxClosingElement(openPath.node.name);
      }
    } else if (kind === 'delete') {
      openPath.parentPath.remove();
    } else {
      return JSON.stringify({ ok: false, reason: 'bad_loc' });
    }

    var out;
    try {
      out = generate(ast, { retainLines: true }).code;
    } catch (e) {
      return JSON.stringify({ ok: false, reason: 'parse_error' });
    }
    // Update cache so subsequent edits in the same session see prior patches.
    entry.code = out;
    return JSON.stringify({ ok: true, newSource: out, deferred: deferred });
  };
})();
`,Yg=`
(function() {
  if (window.__selectorGenInitialized) return;
  window.__selectorGenInitialized = true;

  // ─── Scoring ───────────────────────────────────────────────────────────────

  var SCORING = {
    TERM_PENALTY: -2,
    SEMANTIC_CLASS: 4,
    RANDOM_CLASS: -2,
    ID: 10,
    SEMANTIC_ATTR: 6,
    RANDOM_ATTR: -1,
    NTH_CHILD: 0,
    SEMANTIC_TAG: 1,
    RANDOM_TAG: -1,
    TAG_GROUP: 3
  };

  var SEMANTIC_TAGS = ['a','button','input','select','textarea','label','form','nav','header','footer','main','section','article','aside','h1','h2','h3','h4','h5','h6'];

  // ─── Tag groups ────────────────────────────────────────────────────────────
  // Each group defines a set of tags that are semantically related.
  // When the target element's tag is in a group, we emit a :is(…) candidate.

  /** @type {{ tags: string[], score: number }[]} */
  var TAG_GROUPS = [
    { tags: ['h1','h2','h3','h4','h5','h6'],                                         score: SCORING.TAG_GROUP },
    { tags: ['h1','h2'],                                                              score: SCORING.TAG_GROUP },
    { tags: ['h1','h2','h3','h4','h5','h6','p','li','dt','dd','blockquote','figcaption','label','span','a','em','strong','small','td','th','caption'], score: SCORING.TAG_GROUP },
    { tags: ['img','video'],                                                          score: SCORING.TAG_GROUP },
    { tags: ['button','input','textarea'],                                            score: SCORING.TAG_GROUP }
  ];

  function scoreForTag(tag) {
    return SEMANTIC_TAGS.indexOf(tag.toLowerCase()) >= 0 ? SCORING.SEMANTIC_TAG : SCORING.RANDOM_TAG;
  }

  function scoreForAttr(name, hasValue) {
    if (hasValue && (name === 'role' || name === 'aria-role' || name === 'aria-label')) {
      return SCORING.SEMANTIC_ATTR;
    }
    return SCORING.RANDOM_ATTR;
  }

  function scoreForClassName(className) {
    if (className.length < 2) return SCORING.RANDOM_CLASS;
    if (/^(btn|button|nav|menu|header|footer|main|content|container|wrapper|row|col|column|title|heading|label|input|form|card|panel|section|item|list|link|icon|img|image|bg|background|text|font|color|size|flex|grid|layout|margin|padding|border|active|disabled|hidden|visible|selected|hover|focus)/.test(className)) {
      return SCORING.SEMANTIC_CLASS;
    }
    if (/^[a-z]+(-[a-z]+)*$/.test(className)) return SCORING.SEMANTIC_CLASS;
    if (/^[a-z][a-zA-Z0-9]*$/.test(className)) return SCORING.SEMANTIC_CLASS;
    if (/^[a-zA-Z0-9]{5,}$/.test(className)) return SCORING.RANDOM_CLASS;
    if (/^_[a-zA-Z0-9]+_[a-zA-Z0-9]+/.test(className)) return SCORING.RANDOM_CLASS;
    if (/[0-9a-f]{4,}/.test(className)) return SCORING.RANDOM_CLASS;
    return 0;
  }

  // ─── Term → string ─────────────────────────────────────────────────────────
  //
  // Converts a Term object to its CSS selector fragment.
  // A term with tagGroup compiles to :is(tag1,tag2,…).

  function termToString(term) {
    var parts = [];
    if (term.directChild) parts.push('>');

    if (term.tagGroup) {
      // Tag group term → :is(h1,h2,…)
      parts.push(':is(' + term.tagGroup.join(',') + ')');
    } else if (term.tag) {
      parts.push(term.tag);
    } else if (!term.className && !term.id && !term.hasAttr) {
      parts.push('*');
    }

    if (term.id) parts.push('#' + CSS.escape(term.id));
    if (term.className) parts.push('.' + CSS.escape(term.className));
    if (term.hasAttr) {
      if (term.attrVal) {
        var av = String(term.attrVal).replace(/\\\\/g, '\\\\\\\\').replace(/"/g, '\\\\"');
        parts.push('[' + term.hasAttr + '="' + av + '"]');
      } else {
        parts.push('[' + term.hasAttr + ']');
      }
    }
    if (term.nthChild) {
      parts.push(':nth-child(' + term.nthChild + ')');
    } else if (term.lastChild) {
      parts.push(':last-child');
    }
    return parts.join('');
  }

  // ─── Candidate → string ────────────────────────────────────────────────────

  function candidateToString(cand) {
    return cand.terms.map(termToString).join(' ');
  }

  function matchCount(terms) {
    var sel = terms.map(termToString).join(' ');
    try { return document.querySelectorAll(sel).length; } catch(e) { return 9999; }
  }

  // ─── Base candidates for a single element ─────────────────────────────────
  //
  // Generates Candidate[] from the element's tag, id, classes, attributes,
  // positional pseudo-classes, and tag groups.

  function baseCandidates(element) {
    /** @type {Candidate[]} */
    var candidates = [];

    function addCandidate(terms, score) {
      candidates.push({
        terms: terms,
        topMatch: element,
        score: score + SCORING.TERM_PENALTY,
        matchCount: matchCount(terms)
      });
    }

    if (element.tagName === 'BODY') {
      addCandidate([{ tag: 'body' }], scoreForTag('body'));
      return candidates;
    }

    // ── Tag candidate ──
    if (element.tagName) {
      var tag = element.tagName.toLowerCase();
      /** @type {Term} */
      var tagTerm = { tag: tag };
      addCandidate([tagTerm], 1);

      // nth-child / last-child variants
      var siblingCount = element.parentElement ? element.parentElement.children.length : 0;
      var siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      var nth = siblings.indexOf(element);
      if (nth !== -1) {
        /** @type {Term} */
        var t2 = {}; for (var k in tagTerm) t2[k] = tagTerm[k];
        t2.nthChild = nth + 1;
        addCandidate([t2], SCORING.NTH_CHILD + SCORING.TERM_PENALTY + scoreForTag(tag));
        if (nth === siblingCount - 1) {
          /** @type {Term} */
          var t3 = {}; for (var k2 in tagTerm) t3[k2] = tagTerm[k2];
          t3.lastChild = true;
          addCandidate([t3], SCORING.NTH_CHILD + SCORING.TERM_PENALTY + scoreForTag(tag));
        }
      }

      // ── Tag group candidates ──
      // If this element's tag belongs to any group, emit a :is(…) candidate.
      for (var gi = 0; gi < TAG_GROUPS.length; gi++) {
        var group = TAG_GROUPS[gi];
        if (group.tags.indexOf(tag) >= 0) {
          /** @type {Term} */
          var groupTerm = { tagGroup: group.tags };
          addCandidate([groupTerm], group.score);
        }
      }
    }

    // ── ID candidate ──
    if (element.id) {
      addCandidate([{ id: element.id }], SCORING.ID);
    }

    // ── Class candidates ──
    if (element.classList && element.classList.length > 0) {
      Array.from(element.classList).forEach(function(cn) {
        addCandidate([{ className: cn }], SCORING.TERM_PENALTY + scoreForClassName(cn));
      });
    }

    // ── Attribute candidates ──
    if (element.attributes && element.attributes.length > 0) {
      Array.from(element.attributes).filter(function(a) {
        // contenteditable is our own selection chrome — using it as a
        // selector resolves to whichever element is currently being edited.
        return a.name !== 'id' && a.name !== 'class' && a.name !== 'style'
          && a.name !== 'contenteditable';
      }).forEach(function(attr) {
        addCandidate([{ hasAttr: attr.name }], scoreForAttr(attr.name, false));
        if (attr.value) {
          addCandidate([{ hasAttr: attr.name, attrVal: attr.value }], scoreForAttr(attr.name, true));
        }
      });
    }

    return candidates;
  }

  // ─── Reduce candidate pool ─────────────────────────────────────────────────
  //
  // Keeps a diverse spread of match counts by log-bucketing, then trimming
  // each bucket to the highest-scored candidates.

  function reduceCandidateCount(cands, keep) {
    var maxMatch = 4000;
    var buckets = 10;
    cands = cands.filter(function(x) { return x.matchCount <= maxMatch; });
    if (cands.length <= keep) return cands;

    var maxLog = Math.log2(Math.max.apply(null, cands.map(function(c) { return Math.max(1, c.matchCount); })));
    if (maxLog <= 0) {
      // All candidates have matchCount <= 1; just sort by score and trim
      cands.sort(function(a, b) { return b.score - a.score; });
      return cands.slice(0, keep);
    }
    var interval = maxLog / buckets;
    var bucketArr = [];
    for (var i = 0; i < buckets; i++) bucketArr.push([]);

    cands.forEach(function(c) {
      var lv = Math.log2(Math.max(1, c.matchCount));
      var bi = Math.min(buckets - 1, Math.floor(lv / interval));
      if (isNaN(bi) || bi < 0) bi = 0;
      bucketArr[bi].push(c);
    });

    bucketArr.forEach(function(b) { b.sort(function(a, b2) { return b2.score - a.score; }); });

    var perBucket = Math.ceil(keep / buckets);
    var result = [];
    bucketArr.forEach(function(b) { result.push.apply(result, b.slice(0, perBucket)); });

    if (result.length > keep) {
      result.sort(function(a, b2) { return b2.score - a.score; });
      return result.slice(0, keep);
    }
    return result;
  }

  // ─── Expand candidates by prepending parent selectors ──────────────────────
  //
  // For each candidate, walks up the DOM (up to 3 ancestors) and creates new
  // compound candidates by prepending parent-derived terms.

  function expandCandidate(candidate, seen, origElement) {
    if (candidate.terms.some(function(t) { return !!t.id; })) return [];

    /** @type {Candidate[]} */
    var result = [];
    var currentElement = candidate.topMatch;
    var parents = [];
    var parent = currentElement.parentElement;
    for (var i = 0; i < 3; i++) {
      if (!parent) break;
      parents.push(parent);
      if (parent.tagName === 'BODY') break;
      parent = parent.parentElement;
    }

    for (var pi = 0; pi < parents.length; pi++) {
      var pCands = baseCandidates(parents[pi]);
      for (var ci = 0; ci < pCands.length; ci++) {
        var pc = pCands[ci];
        if (pc.terms[0].tag === 'body' && pi !== 0) continue;

        var newTerms = pc.terms.concat(candidate.terms.map(function(t) {
          /** @type {Term} */
          var copy = {}; for (var k in t) copy[k] = t[k]; return copy;
        }));
        if (pi === 0) {
          newTerms[pc.terms.length] = Object.assign({}, newTerms[pc.terms.length], { directChild: true });
        }

        /** @type {Candidate} */
        var newCand = {
          terms: newTerms,
          topMatch: parents[pi],
          score: candidate.score + pc.score,
          matchCount: matchCount(newTerms)
        };
        var sel = candidateToString(newCand);
        if (!seen[sel]) {
          seen[sel] = true;
          result.push(newCand);
        }
      }
    }
    return result;
  }

  // ─── Filter out selectors that match parents of the target ─────────────────

  function getParents(el) {
    var parents = [];
    var p = el.parentElement;
    while (p) { parents.push(p); p = p.parentElement; }
    return parents;
  }

  function removeCandidatesMatchingParents(cands, element) {
    var parents = getParents(element);
    return cands.filter(function(c) {
      try {
        var matches = document.querySelectorAll(candidateToString(c));
        return !Array.from(matches).some(function(el) {
          return parents.some(function(p) { return p === el; });
        });
      } catch(e) { return false; }
    });
  }

  // ─── Main entry point ─────────────────────────────────────────────────────
  //
  // @param {HTMLElement} element — the clicked/target element
  // @returns {SelectorEntry[]} — sorted most-specific to most-generic

  window.__generateSelectorList = function(element) {
    var iterationCount = 3;
    var pool = reduceCandidateCount(baseCandidates(element), 40);

    var seen = {};
    pool.forEach(function(c) { seen[candidateToString(c)] = true; });

    var expandedIds = {};

    for (var i = 0; i < iterationCount; i++) {
      var nextPool = pool.slice();
      for (var j = 0; j < pool.length; j++) {
        var id = candidateToString(pool[j]);
        if (expandedIds[id]) continue;
        expandedIds[id] = true;
        var expansions = expandCandidate(pool[j], seen, element);
        nextPool.push.apply(nextPool, expansions);
      }
      var isFinal = i === iterationCount - 1;
      if (isFinal) {
        nextPool = nextPool.filter(function(c) { return c.matchCount <= 100; });
        nextPool = removeCandidatesMatchingParents(nextPool, element);
      }
      pool = reduceCandidateCount(nextPool, isFinal ? 20 : 40);
    }

    // Sort by matchCount ascending, then score descending
    pool.sort(function(a, b) {
      if (a.matchCount === b.matchCount) return b.score - a.score;
      return a.matchCount - b.matchCount;
    });

    // Deduplicate by match count — keep best-scored selector per count
    /** @type {{ [count: number]: true }} */
    var byCount = {};
    /** @type {SelectorEntry[]} */
    var deduped = [];
    pool.forEach(function(c) {
      var sel = candidateToString(c);
      if (!byCount[c.matchCount]) {
        byCount[c.matchCount] = true;
        deduped.push({ selector: sel, matchCount: c.matchCount });
      }
    });

    return deduped;
  };
})();
`,Zg=`(async function(){
  try{await document.fonts.ready}catch(e){}
  var vp=__VP__;
  var root=document.documentElement;
  var fw=root.scrollWidth,fh=root.scrollHeight;
  var w=vp?root.clientWidth:fw,h=vp?root.clientHeight:fh;
  var sx=vp?(window.scrollX||0):0,sy=vp?(window.scrollY||0):0;
  var scale=__SCALE__||Math.min(1,__MAX__/Math.max(w,h,1));

  function toDataURL(url){return fetch(url).then(function(r){return r.blob()}).then(function(b){return new Promise(function(res){var fr=new FileReader();fr.onload=function(){res(fr.result)};fr.onerror=function(){res(url)};fr.readAsDataURL(b)})}).catch(function(){return url})}

  async function inlineFonts(){
    var rules=[];
    for(var i=0;i<document.styleSheets.length;i++){
      var ss=document.styleSheets[i];
      var cssRules;try{cssRules=ss.cssRules}catch(e){continue}
      for(var j=0;j<cssRules.length;j++){
        var r=cssRules[j];
        if(r.type===CSSRule.FONT_FACE_RULE)rules.push({css:r.cssText,base:ss.href||location.href});
      }
    }
    if(!rules.length)return '';
    var parts=await Promise.all(rules.map(async function(rule){
      var re=/url\\((['"]?)([^'")]+)\\1\\)/g,m,out=rule.css,seen={};
      while((m=re.exec(rule.css))){
        var u=m[2];
        if(u.indexOf('data:')===0||seen[u])continue;
        seen[u]=1;
        var abs;try{abs=new URL(u,rule.base).href}catch(e){continue}
        var d=await toDataURL(abs);
        out=out.split(m[0]).join('url("'+d+'")');
      }
      return out;
    }));
    return '<style><![CDATA['+parts.join('\\n')+']]></style>';
  }

  async function inlineImages(node){
    var jobs=[];
    var imgs=node.querySelectorAll('img');
    for(var i=0;i<imgs.length;i++)(function(el){
      var src=el.getAttribute('src');
      if(src&&src.indexOf('data:')!==0)jobs.push(function(){return toDataURL(el.src).then(function(d){el.setAttribute('src',d)})});
    })(imgs[i]);
    var all=node.querySelectorAll('*');
    for(var j=0;j<all.length;j++)(function(el){
      var bg=el.style.backgroundImage;
      var m=bg&&bg.match(/url\\(["']?([^"')]+)["']?\\)/);
      if(m&&m[1].indexOf('data:')!==0)jobs.push(function(){return toDataURL(m[1]).then(function(d){el.style.backgroundImage='url('+d+')'})});
    })(all[j]);
    var cur=0,N=Math.min(6,jobs.length)||1;
    await Promise.all(Array.from({length:N},async function(){while(cur<jobs.length)await jobs[cur++]()}));
  }

  function cloneStyled(src){
    if(src.nodeType===1&&src.tagName==='SCRIPT')return document.createTextNode('');
    var dst=src.cloneNode(false);
    if(src.nodeType===1){
      var cs=getComputedStyle(src),txt='';
      for(var i=0;i<cs.length;i++){var p=cs[i];txt+=p+':'+cs.getPropertyValue(p)+';'}
      // img-rasterized SVG freezes CSS animations at t=0; an entrance keyframe
      // (from{opacity:0}) would hide the element. Visual state is already
      // captured in the computed values above, so drop animation/transition.
      txt+='animation:none;transition:none;';
      dst.setAttribute('style',txt);
      if(src.tagName==='CANVAS'){try{var im=document.createElement('img');im.src=src.toDataURL();im.setAttribute('style',txt);return im}catch(e){}}
    }
    for(var c=src.firstChild;c;c=c.nextSibling)dst.appendChild(cloneStyled(c));
    return dst;
  }

  var fontCss=await inlineFonts();
  var clone=cloneStyled(root);
  clone.setAttribute('xmlns','http://www.w3.org/1999/xhtml');
  await inlineImages(clone);
  var xml=new XMLSerializer().serializeToString(clone);
  var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'"><foreignObject x="'+(-sx)+'" y="'+(-sy)+'" width="'+fw+'" height="'+fh+'">'+fontCss+xml+'</foreignObject></svg>';
  var svgUrl='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);

  var img=new Image();
  await new Promise(function(res,rej){img.onload=res;img.onerror=function(){rej(new Error('svg load failed'))};img.src=svgUrl});
  var cv=document.createElement('canvas');
  cv.width=Math.round(w*scale);cv.height=Math.round(h*scale);
  var ctx=cv.getContext('2d');
  ctx.scale(scale,scale);
  ctx.drawImage(img,0,0);
  return cv.toDataURL(__FMT__,__Q__);
})()`;function Ta(e,t,s,i=0,n=!1){return Zg.replace("__FMT__",JSON.stringify(e)).replace("__Q__",String(t)).replace("__MAX__",String(s)).replace("__SCALE__",String(i)).replace("__VP__",n?"1":"0")}function Ve(e){if(!e)return null;const t=e;function s(o,a=1e4){return new Promise((c,d)=>{const u=Math.random().toString(36).slice(2),p=setTimeout(()=>{b(),d(new Error(`executeJavaScript timed out (${a/1e3}s)`))},a),f=m=>{if(m.source!==t.contentWindow)return;const y=m.data;if(!(!y||!y.__om_eval_r||y.id!==u))if(b(),y.ok)if(y.v===void 0)c(void 0);else try{c(JSON.parse(y.v))}catch(g){d(new Error(`eval returned unparseable JSON: ${g instanceof Error?g.message:g}`))}else d(new Error(y.e||"eval failed"))},b=()=>{clearTimeout(p),window.removeEventListener("message",f)};window.addEventListener("message",f),t.contentWindow?.postMessage({__om_eval:1,id:u,code:o},"*")})}function i(o,a){return s(o,a)}const n=new Map;return{reload(){i("location.reload()").catch(()=>{const o=new URL(t.src,window.location.href);o.searchParams.set("_r",String(Date.now())),t.src=o.toString()})},setZoomFactor(o){t.style.transform=`scale(${o})`,t.style.transformOrigin="top left",t.style.width=`${100/o}%`,t.style.height=`${100/o}%`},lockViewportSize(o,a){const c="data-genpptx-vplock";t.setAttribute(c,"");const d=document.createElement("style");return d.setAttribute(c,""),d.textContent=`iframe[${c}]{width:${o}px!important;height:${a}px!important;max-width:none!important;max-height:none!important;transform:none!important}`,document.head.appendChild(d),()=>{t.removeAttribute(c),d.remove()}},async executeJavaScript(o,a){return i(o,a)},executeJavaScriptUnchecked(o){i(o).catch(()=>{})},capturePage(o){return(async()=>{if(!o?.hq){const d=await i(Ta("image/jpeg",.4,1600,o?.scale,o?.viewport),7e3);return{toDataURL:()=>d}}performance.now();const c=await i(Ta("image/png",1,1600,o?.scale,o?.viewport),7e3);return await a(c)})();async function a(c,d){performance.now();const u=c.slice(c.indexOf(",")+1),p=atob(u),f=new Uint8Array(p.length);for(let k=0;k<p.length;k++)f[k]=p.charCodeAt(k);f.length;const b=await Rs(()=>import("./UPNG-Bc5lEvux.js"),__vite__mapDeps([0,1,2])),m=b.default??b,y=m.decode(f.buffer),g=m.toRGBA8(y)[0],C=m.encode([g],y.width,y.height,77),v=new Uint8Array(C);performance.now();let w="";for(let k=0;k<v.length;k++)w+=String.fromCharCode(v[k]);const S="data:image/png;base64,"+btoa(w);return{toDataURL:()=>S}}},addEventListener(o,a){if(o==="dom-ready")t.addEventListener("load",a);else if(o==="console-message"){const c=d=>{if(d.source!==t.contentWindow)return;const u=d.data;u?.__omelette_log&&u.type==="log"&&a({message:u.data})};n.set(a,c),window.addEventListener("message",c)}else t.addEventListener(o,a)},removeEventListener(o,a){if(o==="dom-ready")t.removeEventListener("load",a);else if(o==="console-message"){const c=n.get(a);c&&(window.removeEventListener("message",c),n.delete(a))}else t.removeEventListener(o,a)}}}const Qg={onDomReady:()=>{},onEditAction:()=>{},onSelectionChanged:()=>{},onCommentSelected:()=>{},onEditModeAvailable:()=>{},onEditModeSetKeys:()=>{},onEditModeDismissed:()=>{},onEditModeChat:()=>{}};function em(e,t){const[s,i]=l.useState(0),n=s>0,[o,a]=l.useState(null),{projectPath:c}=vt(),d=l.useRef(Qg),u=l.useCallback(p=>{const f=p.message,b=d.current,m="__DESIGNER_EDIT_ACTION__";if(f?.startsWith(m)){b.onEditAction(f.slice(m.length));return}const y="__DESIGNER_SELECTION_CHANGED__";if(f?.startsWith(y)){try{const v=JSON.parse(f.slice(y.length));b.onSelectionChanged({selector:v.selector,descriptor:v.descriptor||"",rect:v.rect,isText:!!v.isText,originalInnerHTML:v.originalInnerHTML??null,originalText:v.originalText??null,omId:v.omId??null})}catch{}return}const g="__DESIGNER_ELEMENT_SELECTED__";if(f?.startsWith(g)){try{const v=JSON.parse(f.slice(g.length));b.onCommentSelected({selector:v.selector,description:v.description,descriptor:v.descriptor||"",rect:v.rect})}catch{}return}const C="__DESIGNER_ELEMENT_HOVERED__";if(f?.startsWith(C))try{const v=JSON.parse(f.slice(C.length));b.onCommentHover?.(v?{selector:v.selector,description:v.description,descriptor:v.descriptor||"",rect:v.rect}:null)}catch{}},[]);return l.useEffect(()=>{const p=Ve(e.current);if(!p)return;const f={current:0},b=performance.now();let m=!0;const y=()=>{const g=++f.current;m&&(m=!1,Kn("design.preview.iframe_ready_ms",{duration:performance.now()-b,attrs:{file_ext:t?.split(".").pop()??""}})),d.current.onDomReady();const C=p.executeJavaScriptUnchecked.bind(p);C(Kg),C(Yg),C(Xg),C(qg),C(Vg),i(v=>v+1),p.executeJavaScript(`(function() { var m = document.querySelector('meta[name="omelette-fixed-size"]'); return m ? m.getAttribute('content') || m.getAttribute('value') : null; })()`).then(v=>{if(g===f.current)if(v){const w=v.split(",").map(S=>parseInt(S.trim(),10));w.length===2&&w[0]>0&&w[1]>0?a({width:w[0],height:w[1]}):a(null)}else a(null)}).catch(()=>{g===f.current&&a(null)})};return i(0),a(null),fr(la),p.addEventListener("dom-ready",y),p.addEventListener("console-message",u),()=>{f.current++,p.removeEventListener("dom-ready",y),p.removeEventListener("console-message",u)}},[t,u]),l.useEffect(()=>{const p=new Set,f=b=>{const m=b.data;if(!m)return;const y=e.current;if(!(!y||!("contentWindow"in y)||b.source!==y.contentWindow)){if(m.__omelette_log){if(typeof m.data=="string"&&m.data.startsWith("__DESIGNER_"))return;Hc(la,{type:m.type,data:m.data,timestamp:Date.now()});return}if(m.__om_api){const g=Rn();if(!g||b.origin!==g.origin)return;const C=w=>{b.source?.postMessage({__om_api_r:!0,id:m.id,...w},b.origin)},v=new AbortController;p.add(v),Rd(m.body,C,v.signal).finally(()=>{p.delete(v)});return}if(m.__om_file){const g=Rn();if(!g||b.origin!==g.origin)return;nm(c,m,v=>{b.source?.postMessage({__om_file_r:!0,id:m.id,...v},b.origin)});return}m.type==="__edit_mode_available"?d.current.onEditModeAvailable():m.type==="__edit_mode_set_keys"&&m.edits?d.current.onEditModeSetKeys(m.edits):m.type==="__edit_mode_dismissed"?d.current.onEditModeDismissed():m.type==="__edit_mode_chat"&&typeof m.text=="string"&&d.current.onEditModeChat(m.text)}};return window.addEventListener("message",f),()=>{window.removeEventListener("message",f);for(const b of p)b.abort();p.clear()}},[c]),{webviewReady:n,readyGen:s,fixedSize:o,callbacksRef:d}}const tm=/^\.?[\w-]+\.state\.json$/;async function nm(e,t,s){const i=t.path;if(t.op!=="write"||typeof i!="string"||i.includes("/")||i.includes("\\")||i.includes("..")||!tm.test(i)){s({ok:!1,error:"path not allowed"});return}try{await at().writeFiles({projectId:e,files:[{path:i,data:typeof t.content=="string"?t.content:"",encoding:""}]}),qn(e,{source:"user-import"}),s({ok:!0})}catch{s({ok:!1,error:"write failed"})}}const ja="claude-haiku-4-5",Ra=1024,Aa=256*1024;async function*rm(e){if(!e.body)return;const t=e.body.getReader(),s=new TextDecoder;let i="";for(;;){const{done:n,value:o}=await t.read();if(n)break;i+=s.decode(o,{stream:!0});let a;for(;(a=i.indexOf(`
`))>=0;){const c=i.slice(0,a).replace(/\r$/,"");if(i=i.slice(a+1),!c.startsWith("data: "))continue;const d=c.slice(6);if(d==="[DONE]")continue;let u;try{u=JSON.parse(d)}catch{continue}if(u.type==="content_block_delta"&&u.delta?.type==="text_delta"){const p=u.delta.text??"";p&&(yield p)}else if(u.type==="error")throw new Error(u.error?.message??"stream error")}}}async function Rd(e,t,s){let i;if(typeof e=="string")i={model:ja,max_tokens:Ra,messages:[{role:"user",content:e}],stream:!0};else if(e&&typeof e=="object")i={...e,model:ja,max_tokens:Ra,stream:!0},delete i.thinking;else{t({error:"claude.complete: expected string prompt or request object"});return}let n="";try{const o=JSON.stringify(i);if(o.length>Aa){t({error:`claude.complete: request too large (${o.length} bytes, max ${Aa})`});return}const a={"Content-Type":"application/json"},c=As();c&&(a[Ds]=c);const d=await fetch("/design/v1/design/artifact-proxy/v1/messages",{method:"POST",headers:a,body:o,signal:s});if(!d.ok||!d.body){const u=await d.text().catch(()=>d.statusText);t({error:`HTTP ${d.status}: ${u}`});return}for await(const u of rm(d))n+=u,t({chunk:u});t({done:!0,text:n})}catch(o){if(s.aborted)return;t({error:o instanceof Error?o.message:String(o)})}}const Qn=160,Ns=96,Un=2,jo=1,Ro=2.5,Ao=2,Do=6,sm=10,im=24,om=2,am=1470,lm=0,cm=-2,Da=.5,dm=-.5,Nr=Qn-2*(Un+jo),Br=Ns-2*(Un+jo),um=Ro+Ao+Do;function Ma(e){return Ns*Math.cos(e*Math.PI/180)+um}const qs=89.25,nr=85.5,pm=0,fm=500;function hm(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)}const gm=100,La=24;function mm({children:e,hidden:t,scrollFromBottom:s=0,onFootprintChange:i,onHover:n,onLeave:o,onHiddenClick:a}){const[c,d]=l.useState(qs),u=l.useRef(null),[p,f]=l.useState(!1),[b,m]=l.useState("dormant");l.useEffect(()=>{if(t){m("dormant");return}if(b!=="dormant")return;const te=setTimeout(()=>m(null),150);return()=>clearTimeout(te)},[t,b]);const y=s<=La,g=l.useRef(y);l.useEffect(()=>{y&&!g.current&&(b==="open"||b==="closed")&&m(null),g.current=y},[y,b]);const C=l.useRef(c);C.current=c;const v=l.useRef(null),w=l.useCallback((te,ce=!1)=>{if(!ce&&v.current===te)return;u.current&&(cancelAnimationFrame(u.current),u.current=null),v.current=null;const ue=C.current,me=te-ue;if(ce&&Math.abs(me)<15||Math.abs(me)<.5){d(te);return}v.current=te;const de=fm*Math.max(Math.abs(me)/90,.2),De=performance.now(),Re=te>ue,je=H=>{const ke=Math.min((H-De)/de,1),X=ue+me*hm(ke);d(Re?Math.min(X,te):X),ke<1?u.current=requestAnimationFrame(je):(u.current=null,v.current=null)};u.current=requestAnimationFrame(je)},[]),S=Math.min(Math.max(s-La,0)/gm,1)*qs,k=t||b==="dormant"||b==="closed"?qs:b==="open"?pm:S,E=p&&!t&&k>nr&&b!=="closed",T=E?nr:k,_=c>=nr&&k>=nr,R=Ma(_?k:c);l.useEffect(()=>{i?.(R)},[R,i]);const $=b===null&&!E;l.useEffect(()=>{w(T,$)},[T,$,w]),l.useEffect(()=>()=>{u.current&&cancelAnimationFrame(u.current)},[]);const M=()=>{f(!0),n?.()},L=()=>{f(!1),o?.()},z=()=>{if(a){a();return}m(k<=nr?"closed":"open")},J=c/90*.6,I=Ma(c);return r.jsxs(xm,{children:[r.jsxs(ym,{children:[r.jsxs(wm,{style:{transform:`rotateX(${-c}deg)`},children:[r.jsx(vm,{children:r.jsxs(km,{children:[e,r.jsx(Sm,{}),r.jsx(Cm,{style:{opacity:J}})]})}),r.jsx(_m,{})]}),r.jsx($m,{}),r.jsx(Em,{children:r.jsx(Tm,{})})]}),r.jsx(bm,{$clickable:!t||!!a,style:{height:I+2},onMouseEnter:M,onMouseLeave:L,onClick:z})]})}const xm=x.div`
  position: relative;
  width: ${Qn+20}px;
  height: ${Ns+Ro+Ao+Do}px;
  overflow: visible;
  pointer-events: none;
`,bm=x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  pointer-events: auto;
`,ym=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  perspective: ${am}px;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.12)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
  pointer-events: none;
`,wm=x.div`
  position: relative;
  width: ${Qn}px;
  height: ${Ns}px;
  transform-origin: bottom center;
  transform-style: preserve-3d;
  pointer-events: auto;
`,vm=x.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #2a2a2a 0%, #1e1e1e 30%, #191919 60%, #222 100%);
  border-radius: 6px 6px 0 0;
  border: ${Un}px solid #444;
  border-top-color: #555;
  border-left-color: #4a4a4a;
  border-right-color: #3e3e3e;
  border-bottom-color: #3a3a3a;
  padding: ${jo}px;
  overflow: hidden;
  backface-visibility: hidden;
`,km=x.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`,Sm=x.div`
  position: absolute;
  inset: 0;
  border-radius: 3px;
  pointer-events: none;
  box-shadow:
    inset 0 0 3px rgba(0, 0, 0, 0.15),
    inset 0 0 1px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 25%,
    transparent 45%,
    transparent 65%,
    rgba(255, 255, 255, 0.04) 85%,
    rgba(255, 255, 255, 0.06) 100%
  );
`,Cm=x.div`
  position: absolute;
  inset: 0;
  background: #000;
  border-radius: 3px;
  pointer-events: none;
`,_m=x.div`
  position: absolute;
  top: 0;
  left: ${Un-1-Da}px;
  width: ${Qn-(Un-1-Da)*2}px;
  height: ${Ro}px;
  background: linear-gradient(to right, #b0afa9, #a8a7a1 30%, #adaca6 70%, #b3b2ac);
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
  transform: rotateX(90deg) translateY(${Un+cm}px) translateX(${lm}px);
  backface-visibility: hidden;
`,$m=x.div`
  width: ${Qn}px;
  height: ${Ao}px;
  background: linear-gradient(to right, #9e9d98, #929189 20%, #a5a49f 50%, #929189 80%, #9e9d98);
  box-shadow:
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-radius: 0 0 1px 1px;
`,Em=x.div`
  width: ${Qn+sm}px;
  height: ${Do}px;
  background: linear-gradient(
    160deg,
    #d2d1cc 0%,
    #c8c7c2 15%,
    #bdbcb7 40%,
    #c3c2bd 70%,
    #d0cfca 100%
  );
  border-radius: 0 0 4px 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-top: none;
  box-shadow:
    0 1px 4px rgba(0, 0, 0, 0.12),
    0 2px 1px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
`,Tm=x.div`
  width: ${im}px;
  height: ${om}px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0.5px 1px rgba(0, 0, 0, 0.08);
  border-radius: 1px;
  transform: translateY(${dm}px);
`,Vs=e=>{const t=e.lastIndexOf("/");return t<0?fn(e):e.slice(0,t+1)+fn(e.slice(t+1))},Ad=l.memo(function({viewportKey:t,visible:s}){const{serverPort:i,data:n}=vt(),o=l.useRef(null),a=l.useRef(0),c=Uc(t),d=c?Sr(c):null,[u,p]=l.useState(d?Vs(d.barePath):null),[f,b]=l.useState(d?.fragment??"");l.useEffect(()=>(fr(t),()=>fr(t)),[t]);const m={w:Nr*6,h:Br*6},y=l.useMemo(()=>{if(!u||!n?.assets)return null;for(const T of Object.values(n.assets))for(let _=T.versions.length-1;_>=0;_--)if(Vs(T.versions[_].path)===u){const R=T.versions[_].viewport;if(!R)return null;const $=R.height??Math.round(R.width*Br/Nr);return{w:R.width,h:$}}return null},[u,n?.assets]),[g,C]=l.useState(null),v=g??y??m,w=Math.min(Nr/v.w,Br/v.h),S=(Nr-v.w*w)/2,k=(Br-v.h*w)/2,E=l.useMemo(()=>u?G.getPreviewUrl(i,u+f,{forIframe:!0,urlLike:!0}):"about:blank",[u,f,i]);return l.useEffect(()=>{const T=_=>{const R=_.detail;if(R.viewportKey!==t)return;const{barePath:$,fragment:M}=Sr(R.filePath),L=Vs($),z=L===u;if(z&&M===f){fr(t),a.current=0,C(null),Ve(o.current)?.reload();return}z||(fr(t),a.current=0,C(null),p(L)),b(M),z&&setTimeout(()=>{window.dispatchEvent(new CustomEvent("agent-viewport-ready",{detail:{viewportKey:t}}))},0)};return window.addEventListener("agent-show-file",T),()=>window.removeEventListener("agent-show-file",T)},[u,f,t]),l.useEffect(()=>{const T=o.current;if(!T)return;const _=()=>{a.current+=1,window.dispatchEvent(new CustomEvent("agent-viewport-ready",{detail:{viewportKey:t}})),Ve(T)?.executeJavaScript(`(function(){var m=document.querySelector('meta[name="omelette-fixed-size"]');if(!m)return null;var p=(m.getAttribute('content')||m.getAttribute('value')||'').split(',');var w=parseInt(p[0],10),h=parseInt(p[1],10);return w>0&&h>0?[w,h]:null})()`).then(M=>{C(M?{w:M[0],h:M[1]}:null)}).catch(()=>{})};T.addEventListener("load",_);const R=new Set,$=M=>{if(M.source!==T.contentWindow)return;const L=M.data;if(L&&L.__omelette_log){Hc(t,{type:L.type,data:L.data,timestamp:Date.now()});return}if(L&&L.__om_api){const z=Rn();if(!z||M.origin!==z.origin)return;const J=te=>{M.source?.postMessage({__om_api_r:!0,id:L.id,...te},M.origin)},I=new AbortController;R.add(I),Rd(L.body,J,I.signal).finally(()=>{R.delete(I)})}};return window.addEventListener("message",$),()=>{T.removeEventListener("load",_),window.removeEventListener("message",$);for(const M of R)M.abort()}},[t]),l.useEffect(()=>{const T=async _=>{const R=_.detail;if(R.target==="user"||R.viewportKey!==t)return;const $=Ve(o.current);if(!$||a.current===0){G.sendEvalResult(R.requestId,!1,void 0,"Agent viewport not ready");return}try{const M=await $.executeJavaScript(R.code);G.sendEvalResult(R.requestId,!0,M)}catch(M){G.sendEvalResult(R.requestId,!1,void 0,String(M))}};return window.addEventListener("agent-eval-js",T),()=>window.removeEventListener("agent-eval-js",T)},[t]),l.useEffect(()=>G.onScreenshotPrepare(async T=>{if(T?.target==="user"||T?.viewportKey!==t)return;const _=T?.requestId,R=Ve(o.current);if(!R||a.current===0){G.sendScreenshotReady({requestId:_,error:"Agent viewport not ready"});return}await new Promise($=>setTimeout($,500));try{const $=await R.capturePage(T);G.sendScreenshotReady({requestId:_,dataUrl:$.toDataURL()})}catch($){G.sendScreenshotReady({requestId:_,error:String($)})}}),[t]),r.jsx(jm,{$visible:s,children:r.jsx(Rm,{$scale:w,$tx:S,$ty:k,children:r.jsx("iframe",{ref:o,src:E,width:v.w,height:v.h,allow:"camera; microphone; geolocation",sandbox:`allow-scripts allow-forms allow-popups${Rn()?" allow-same-origin":""}`,style:{border:"none",pointerEvents:"none",display:"block",background:"transparent",colorScheme:"normal"}})})})}),jm=x.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 120% 90% at 40% 30%, #1a1a1a 0%, #0d0d0d 50%, #000 100%);
  visibility: ${e=>e.$visible?"visible":"hidden"};
`,Rm=x.div`
  transform: translate(${e=>e.$tx}px, ${e=>e.$ty}px) scale(${e=>e.$scale});
  transform-origin: 0 0;
`;function On(e,t,s){let i=s.initialDeps??[],n,o=!0;function a(){var c,d,u;let p;s.key&&((c=s.debug)!=null&&c.call(s))&&(p=Date.now());const f=e();if(!(f.length!==i.length||f.some((y,g)=>i[g]!==y)))return n;i=f;let m;if(s.key&&((d=s.debug)!=null&&d.call(s))&&(m=Date.now()),n=t(...f),s.key&&((u=s.debug)!=null&&u.call(s))){const y=Math.round((Date.now()-p)*100)/100,C=Math.round((Date.now()-m)*100)/100/16,v=(w,S)=>{for(w=String(w);w.length<S;)w=" "+w;return w}}return s?.onChange&&!(o&&s.skipInitialOnChange)&&s.onChange(n),o=!1,n}return a.updateDeps=c=>{i=c},a}function Pa(e,t){if(e===void 0)throw new Error("Unexpected undefined");return e}const Am=(e,t)=>Math.abs(e-t)<1.01,Dm=(e,t,s)=>{let i;return function(...n){e.clearTimeout(i),i=e.setTimeout(()=>t.apply(this,n),s)}},Oa=e=>{const{offsetWidth:t,offsetHeight:s}=e;return{width:t,height:s}},Mm=e=>e,Lm=e=>{const t=Math.max(e.startIndex-e.overscan,0),s=Math.min(e.endIndex+e.overscan,e.count-1),i=[];for(let n=t;n<=s;n++)i.push(n);return i},Pm=(e,t)=>{const s=e.scrollElement;if(!s)return;const i=e.targetWindow;if(!i)return;const n=a=>{const{width:c,height:d}=a;t({width:Math.round(c),height:Math.round(d)})};if(n(Oa(s)),!i.ResizeObserver)return()=>{};const o=new i.ResizeObserver(a=>{const c=()=>{const d=a[0];if(d?.borderBoxSize){const u=d.borderBoxSize[0];if(u){n({width:u.inlineSize,height:u.blockSize});return}}n(Oa(s))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(c):c()});return o.observe(s,{box:"border-box"}),()=>{o.unobserve(s)}},Fa={passive:!0},Ia=typeof window>"u"?!0:"onscrollend"in window,Om=(e,t)=>{const s=e.scrollElement;if(!s)return;const i=e.targetWindow;if(!i)return;let n=0;const o=e.options.useScrollendEvent&&Ia?()=>{}:Dm(i,()=>{t(n,!1)},e.options.isScrollingResetDelay),a=p=>()=>{const{horizontal:f,isRtl:b}=e.options;n=f?s.scrollLeft*(b&&-1||1):s.scrollTop,o(),t(n,p)},c=a(!0),d=a(!1);s.addEventListener("scroll",c,Fa);const u=e.options.useScrollendEvent&&Ia;return u&&s.addEventListener("scrollend",d,Fa),()=>{s.removeEventListener("scroll",c),u&&s.removeEventListener("scrollend",d)}},Fm=(e,t,s)=>{if(t?.borderBoxSize){const i=t.borderBoxSize[0];if(i)return Math.round(i[s.options.horizontal?"inlineSize":"blockSize"])}return e[s.options.horizontal?"offsetWidth":"offsetHeight"]},Im=(e,{adjustments:t=0,behavior:s},i)=>{var n,o;const a=e+t;(o=(n=i.scrollElement)==null?void 0:n.scrollTo)==null||o.call(n,{[i.options.horizontal?"left":"top"]:a,behavior:s})};class zm{constructor(t){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.laneAssignments=new Map,this.pendingMeasuredCacheIndexes=[],this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.now=()=>{var s,i,n;return((n=(i=(s=this.targetWindow)==null?void 0:s.performance)==null?void 0:i.now)==null?void 0:n.call(i))??Date.now()},this.observer=(()=>{let s=null;const i=()=>s||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:s=new this.targetWindow.ResizeObserver(n=>{n.forEach(o=>{const a=()=>{const c=o.target,d=this.indexFromElement(c);if(!c.isConnected){this.observer.unobserve(c);return}this.shouldMeasureDuringScroll(d)&&this.resizeItem(d,this.options.measureElement(c,o,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(a):a()})}));return{disconnect:()=>{var n;(n=i())==null||n.disconnect(),s=null},observe:n=>{var o;return(o=i())==null?void 0:o.observe(n,{box:"border-box"})},unobserve:n=>{var o;return(o=i())==null?void 0:o.unobserve(n)}}})(),this.range=null,this.setOptions=s=>{Object.entries(s).forEach(([i,n])=>{typeof n>"u"&&delete s[i]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Mm,rangeExtractor:Lm,onChange:()=>{},measureElement:Fm,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...s}},this.notify=s=>{var i,n;(n=(i=this.options).onChange)==null||n.call(i,this,s)},this.maybeNotify=On(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),s=>{this.notify(s)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(s=>s()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var s;const i=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==i){if(this.cleanup(),!i){this.maybeNotify();return}this.scrollElement=i,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((s=this.scrollElement)==null?void 0:s.window)??null,this.elementsCache.forEach(n=>{this.observer.observe(n)}),this.unsubs.push(this.options.observeElementRect(this,n=>{this.scrollRect=n,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(n,o)=>{this.scrollAdjustments=0,this.scrollDirection=o?this.getScrollOffset()<n?"forward":"backward":null,this.scrollOffset=n,this.isScrolling=o,this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(s,i)=>{const n=new Map,o=new Map;for(let a=i-1;a>=0;a--){const c=s[a];if(n.has(c.lane))continue;const d=o.get(c.lane);if(d==null||c.end>d.end?o.set(c.lane,c):c.end<d.end&&n.set(c.lane,!0),n.size===this.options.lanes)break}return o.size===this.options.lanes?Array.from(o.values()).sort((a,c)=>a.end===c.end?a.index-c.index:a.end-c.end)[0]:void 0},this.getMeasurementOptions=On(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes],(s,i,n,o,a,c)=>(this.prevLanes!==void 0&&this.prevLanes!==c&&(this.lanesChangedFlag=!0),this.prevLanes=c,this.pendingMeasuredCacheIndexes=[],{count:s,paddingStart:i,scrollMargin:n,getItemKey:o,enabled:a,lanes:c}),{key:!1}),this.getMeasurements=On(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:s,paddingStart:i,scrollMargin:n,getItemKey:o,enabled:a,lanes:c},d)=>{if(!a)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>s)for(const b of this.laneAssignments.keys())b>=s&&this.laneAssignments.delete(b);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMeasuredCacheIndexes=[]),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(b=>{this.itemSizeCache.set(b.key,b.size)}));const u=this.lanesSettling?0:this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[],this.lanesSettling&&this.measurementsCache.length===s&&(this.lanesSettling=!1);const p=this.measurementsCache.slice(0,u),f=new Array(c).fill(void 0);for(let b=0;b<u;b++){const m=p[b];m&&(f[m.lane]=b)}for(let b=u;b<s;b++){const m=o(b),y=this.laneAssignments.get(b);let g,C;if(y!==void 0&&this.options.lanes>1){g=y;const k=f[g],E=k!==void 0?p[k]:void 0;C=E?E.end+this.options.gap:i+n}else{const k=this.options.lanes===1?p[b-1]:this.getFurthestMeasurement(p,b);C=k?k.end+this.options.gap:i+n,g=k?k.lane:b%this.options.lanes,this.options.lanes>1&&this.laneAssignments.set(b,g)}const v=d.get(m),w=typeof v=="number"?v:this.options.estimateSize(b),S=C+w;p[b]={index:b,start:C,size:w,end:S,key:m,lane:g},f[g]=b}return this.measurementsCache=p,p},{key:!1,debug:()=>this.options.debug}),this.calculateRange=On(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(s,i,n,o)=>this.range=s.length>0&&i>0?Nm({measurements:s,outerSize:i,scrollOffset:n,lanes:o}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=On(()=>{let s=null,i=null;const n=this.calculateRange();return n&&(s=n.startIndex,i=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,s,i]),[this.options.rangeExtractor,this.options.overscan,this.options.count,s,i]},(s,i,n,o,a)=>o===null||a===null?[]:s({startIndex:o,endIndex:a,overscan:i,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=s=>{const i=this.options.indexAttribute,n=s.getAttribute(i);return n?parseInt(n,10):-1},this.shouldMeasureDuringScroll=s=>{var i;if(!this.scrollState||this.scrollState.behavior!=="smooth")return!0;const n=this.scrollState.index??((i=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))==null?void 0:i.index);if(n!==void 0&&this.range){const o=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),a=Math.max(0,n-o),c=Math.min(this.options.count-1,n+o);return s>=a&&s<=c}return!0},this.measureElement=s=>{if(!s){this.elementsCache.forEach((a,c)=>{a.isConnected||(this.observer.unobserve(a),this.elementsCache.delete(c))});return}const i=this.indexFromElement(s),n=this.options.getItemKey(i),o=this.elementsCache.get(n);o!==s&&(o&&this.observer.unobserve(o),this.observer.observe(s),this.elementsCache.set(n,s)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(i)&&this.resizeItem(i,this.options.measureElement(s,void 0,this))},this.resizeItem=(s,i)=>{var n;const o=this.measurementsCache[s];if(!o)return;const a=this.itemSizeCache.get(o.key)??o.size,c=i-a;c!==0&&(((n=this.scrollState)==null?void 0:n.behavior)!=="smooth"&&(this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(o,c,this):o.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=c,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(o.index),this.itemSizeCache=new Map(this.itemSizeCache.set(o.key,i)),this.notify(!1))},this.getVirtualItems=On(()=>[this.getVirtualIndexes(),this.getMeasurements()],(s,i)=>{const n=[];for(let o=0,a=s.length;o<a;o++){const c=s[o],d=i[c];n.push(d)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=s=>{const i=this.getMeasurements();if(i.length!==0)return Pa(i[Dd(0,i.length-1,n=>Pa(i[n]).start,s)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{const s=this.scrollElement.document.documentElement;return this.options.horizontal?s.scrollWidth-this.scrollElement.innerWidth:s.scrollHeight-this.scrollElement.innerHeight}},this.getOffsetForAlignment=(s,i,n=0)=>{if(!this.scrollElement)return 0;const o=this.getSize(),a=this.getScrollOffset();i==="auto"&&(i=s>=a+o?"end":"start"),i==="center"?s+=(n-o)/2:i==="end"&&(s-=o);const c=this.getMaxScrollOffset();return Math.max(Math.min(c,s),0)},this.getOffsetForIndex=(s,i="auto")=>{s=Math.max(0,Math.min(s,this.options.count-1));const n=this.getSize(),o=this.getScrollOffset(),a=this.measurementsCache[s];if(!a)return;if(i==="auto")if(a.end>=o+n-this.options.scrollPaddingEnd)i="end";else if(a.start<=o+this.options.scrollPaddingStart)i="start";else return[o,i];if(i==="end"&&s===this.options.count-1)return[this.getMaxScrollOffset(),i];const c=i==="end"?a.end+this.options.scrollPaddingEnd:a.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(c,i,a.size),i]},this.scrollToOffset=(s,{align:i="start",behavior:n="auto"}={})=>{const o=this.getOffsetForAlignment(s,i),a=this.now();this.scrollState={index:null,align:i,behavior:n,startedAt:a,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(s,{align:i="auto",behavior:n="auto"}={})=>{s=Math.max(0,Math.min(s,this.options.count-1));const o=this.getOffsetForIndex(s,i);if(!o)return;const[a,c]=o,d=this.now();this.scrollState={index:s,align:c,behavior:n,startedAt:d,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(s,{behavior:i="auto"}={})=>{const n=this.getScrollOffset()+s,o=this.now();this.scrollState={index:null,align:"start",behavior:i,startedAt:o,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:i}),this.scheduleScrollReconcile()},this.getTotalSize=()=>{var s;const i=this.getMeasurements();let n;if(i.length===0)n=this.options.paddingStart;else if(this.options.lanes===1)n=((s=i[i.length-1])==null?void 0:s.end)??0;else{const o=Array(this.options.lanes).fill(null);let a=i.length-1;for(;a>=0&&o.some(c=>c===null);){const c=i[a];o[c.lane]===null&&(o[c.lane]=c.end),a--}n=Math.max(...o.filter(c=>c!==null))}return Math.max(n-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(s,{adjustments:i,behavior:n})=>{this.options.scrollToFn(s,{behavior:n,adjustments:i},this)},this.measure=()=>{this.itemSizeCache=new Map,this.laneAssignments=new Map,this.notify(!1)},this.setOptions(t)}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId==null&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}const i=this.scrollState.index!=null?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,n=i?i[0]:this.scrollState.lastTargetOffset,o=1,a=n!==this.scrollState.lastTargetOffset;if(!a&&Am(n,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=o){this.scrollState=null;return}}else this.scrollState.stableFrames=0,a&&(this.scrollState.lastTargetOffset=n,this.scrollState.behavior="auto",this._scrollToOffset(n,{adjustments:void 0,behavior:"auto"}));this.scheduleScrollReconcile()}}const Dd=(e,t,s,i)=>{for(;e<=t;){const n=(e+t)/2|0,o=s(n);if(o<i)e=n+1;else if(o>i)t=n-1;else return n}return e>0?e-1:0};function Nm({measurements:e,outerSize:t,scrollOffset:s,lanes:i}){const n=e.length-1,o=d=>e[d].start;if(e.length<=i)return{startIndex:0,endIndex:n};let a=Dd(0,n,o,s),c=a;if(i===1)for(;c<n&&e[c].end<s+t;)c++;else if(i>1){const d=Array(i).fill(0);for(;c<n&&d.some(p=>p<s+t);){const p=e[c];d[p.lane]=p.end,c++}const u=Array(i).fill(s+t);for(;a>=0&&u.some(p=>p>=s);){const p=e[a];u[p.lane]=p.start,a--}a=Math.max(0,a-a%i),c=Math.min(n,c+(i-1-c%i))}return{startIndex:a,endIndex:c}}const za=typeof document<"u"?l.useLayoutEffect:l.useEffect;function Bm({useFlushSync:e=!0,...t}){const s=l.useReducer(()=>({}),{})[1],i={...t,onChange:(o,a)=>{var c;e&&a?Vn.flushSync(s):s(),(c=t.onChange)==null||c.call(t,o,a)}},[n]=l.useState(()=>new zm(i));return n.setOptions(i),za(()=>n._didMount(),[]),za(()=>n._willUpdate()),n}function Hm(e){return Bm({observeElementRect:Pm,observeElementOffset:Om,scrollToFn:Im,...e})}const Md=l.createContext(null),Um=Md.Provider;function Mo(){const e=l.useContext(Md);if(!e)throw new Error("useCardSubmit must be used within a CardSubmitProvider");return e}function Ld(){const{showToast:e,updateToast:t,hideToast:s}=bt();return l.useCallback(n=>{const o=n===1?"file":"files",a=e(`Uploading ${n} ${o}`,"info",0);return{update:c=>t(a,`Uploading ${o} ${c}/${n}`),done:()=>s(a)}},[e,t,s])}function Pd(e){const s=gt("omelette-turn-undo").on||!1;l.useEffect(()=>{Sp(s)},[s]);const i=l.useSyncExternalStore(Cp,()=>_p(e)),n=l.useCallback(()=>$p(e),[e]),o=l.useCallback(()=>Ep(e),[e]);return{enabled:s,...i,undo:n,redo:o}}function Wm(e){return e.startsWith("mcp__")?"mcp":e==="Read"?"read":"edit"}function Gm(e){if(!Array.isArray(e))return[];const t=[];for(const s of e)s.type==="text"&&typeof s.text=="string"?t.push({type:"text",text:Ap(s.text)}):s.type==="thinking"&&typeof s.thinking=="string"?t.push({type:"thinking",text:s.thinking}):s.type==="tool_use"&&s.id&&s.name&&t.push({type:"tool_call",toolCall:{id:s.id,type:Wm(s.name),name:s.name,input:s.input}});return t}const Jm="omelette.fanout.cursor:";function Od(e){return Jm+e}function Km(e){try{return sessionStorage.getItem(Od(e))}catch{return null}}function Xm(e,t){try{sessionStorage.setItem(Od(e),t)}catch{}}const Oi=new Map;function qm(e){return Oi.get(e)??[]}function Vm(e,t){t.length===0?Oi.delete(e):Oi.set(e,t)}function Ym(e){const t=e.data;switch(e.type){case"tokens":return{type:"tokens",output_tokens:t.output_tokens??0,thinking_tokens:t.thinking_tokens,is_thinking:t.is_thinking};case"done":{const s=t.message;return{type:"done",result:s?.content?.filter(n=>n.type==="text").map(n=>n.text??"").join("")??"",model:s?.model,usage:s?.usage}}case"tool_delta":default:return null}}function Zm(e,t,s,i,n,o){const a=()=>{const m=Km(t),y=m?`?cursor=${encodeURIComponent(m)}`:"";return`/design/v1/design/projects/${e}/chats/${t}/subscribe${y}`};let c=new EventSource(a()),d=!1,u=0,p=null;const f=m=>{m.onmessage=y=>{u=0,b(y)},m.onerror=()=>{if(d)return;m.close();const y=Tp(jp(u++,{base:1e3,cap:3e4}));p=setTimeout(()=>{d||(c=new EventSource(a()),f(c))},y)}};function b(m){m.lastEventId&&Xm(t,m.lastEventId);let y;try{y=JSON.parse(m.data)}catch{return}if(y.type==="message_appended"){s?.(y.data,y.triggeredBy);return}if(y.type==="files_changed"){i?.(y.data.paths??[],y.triggeredBy);return}if(y.type==="turn_state"){o?.(y.data.holderAccountUuid??null,y.data.holderDisplayName??null,y.data.epoch??0);return}if(y.type==="done"&&n){const C=y.data.message;n(Gm(C?.content),C?.stop_reason??"unknown");return}if(y.type==="error"&&n){n(null,"error");return}const g=Ym(y);g&&(g.remote=!0,Rp(e,t,g))}return f(c),()=>{d=!0,p!==null&&clearTimeout(p),c.close()}}const Qm=3e4;function ex(e,t){const[s,i]=l.useState(null),n=l.useRef(0),o=l.useCallback(async()=>{const c=n.current;try{const d=await at().getTurnState({projectId:e,chatId:t});if(c!==n.current)return;const u={holderAccountUuid:d.holderAccountUuid??null,holderDisplayName:d.holderDisplayName??null};i(p=>p&&p.holderAccountUuid===u.holderAccountUuid&&p.holderDisplayName===u.holderDisplayName?p:u)}catch{if(c!==n.current)return;i(d=>d??{holderAccountUuid:null,holderDisplayName:null})}},[e,t]);l.useEffect(()=>{if(n.current++,!t){i(null);return}o()},[t,o]),Dp(()=>void o(),t&&s?.holderAccountUuid!=null?Qm:null);const a=l.useCallback((c,d,u)=>{n.current++,i(p=>p?.epoch!=null&&u<p.epoch?p:{holderAccountUuid:c,holderDisplayName:d,epoch:u})},[]);return[s,a]}const tx=(e,t)=>e.length>t?e.slice(0,t-1).trimEnd()+"…":e,Hr=e=>`“${tx(e.trim(),32)}”`;function Na(e){return/^use[A-Z]/.test(e)?{key:`hook:${e}`,doing:`Adding ${e}`,done:`Added ${e}`}:/^[A-Z]/.test(e)?{key:`component:${e}`,doing:`Creating ${e}`,done:`Created ${e}`}:e.length<3?null:{key:`fn:${e}`,doing:`Adding ${e}`,done:`Added ${e}`}}const nx=[{re:/\bconst\s+([A-Z][A-Za-z0-9_]*)\s*=\s*styled[.(]/,build:e=>({key:`styled:${e[1]}`,doing:`Creating ${e[1]}`,done:`Created ${e[1]}`})},{re:/\bfunction\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/,build:e=>Na(e[1])},{re:/\bconst\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?\(/,build:e=>Na(e[1])},{re:/\bconst\s+([A-Z][A-Za-z0-9_]*)\s*(?::\s*React\.|=\s*React\.(?:memo|forwardRef)\b)/,build:e=>({key:`component:${e[1]}`,doing:`Creating ${e[1]}`,done:`Created ${e[1]}`})},{re:/\bclass\s+([A-Z][A-Za-z0-9_]*)/,build:e=>({key:`class:${e[1]}`,doing:`Creating ${e[1]}`,done:`Created ${e[1]}`})},{re:/\b(?:interface|type)\s+([A-Z][A-Za-z0-9_]*)\b/,build:e=>({key:`type:${e[1]}`,doing:`Defining ${e[1]}`,done:`Defined ${e[1]}`})}],Ur="[^>]*>\\s*([^<{\\n][^<{\\n]{1,80})",rx={section:"section",header:"header",footer:"footer",nav:"navigation",main:"main content",aside:"sidebar",form:"form",table:"table",dialog:"dialog"},sx=[{re:new RegExp(`<(h[1-3])${Ur}`,"i"),build:e=>{const t=Hr(e[2]);return{key:`heading:${e[2].trim()}`,doing:`Writing ${t}`,done:`Wrote ${t}`}}},{re:new RegExp(`<button${Ur}`,"i"),build:e=>{const t=Hr(e[1]);return{key:`button:${e[1].trim()}`,doing:`Adding ${t} button`,done:`Added ${t} button`}}},{re:new RegExp(`<a\\b${Ur}`,"i"),build:e=>{const t=Hr(e[1]);return{key:`link:${e[1].trim()}`,doing:`Adding ${t} link`,done:`Added ${t} link`}}},{re:new RegExp(`<label${Ur}`,"i"),build:e=>{const t=Hr(e[1]);return{key:`label:${e[1].trim()}`,doing:`Adding ${t} field`,done:`Added ${t} field`}}},{re:/<(section|header|footer|nav|main|aside|form|table|dialog)\b/i,build:e=>{const t=e[1].toLowerCase(),s=rx[t];return{key:`landmark:${t}`,doing:`Laying out ${s}`,done:`Laid out ${s}`}}},{re:/<script\b/i,build:()=>({key:"script",doing:"Writing script",done:"Wrote script"})},{re:/<style\b/i,build:()=>({key:"style",doing:"Writing styles",done:"Wrote styles"})},{re:/<([A-Z][A-Za-z0-9]*)(?:\.[A-Za-z0-9]+)?[\s/>]/,build:e=>({key:`jsx:${e[1]}`,doing:`Placing <${e[1]}>`,done:`Placed <${e[1]}>`})}],ix=[...nx,...sx];function ox(e){const t=[];for(const{re:s,build:i}of ix){const n=e.match(s);if(n){const o=i(n);o&&t.push(o)}}return t}function ax(e){if(!e)return[];const t=new Set,s=[];for(const i of e.split(`
`))for(const n of ox(i))t.has(n.key)||(t.add(n.key),s.push(n));return s}const lx=e=>/^[A-Za-z0-9_-]{20,}$/.test(e),vn=e=>{const t=e.replace(/\/+$/,"").split("/").pop()||e;return t.length>40?"…"+t.slice(-39):t},Fn=(e,t)=>e.length>t?e.slice(0,t-1)+"…":e,Ba=50,cx={read_file:{doing:"Reading",done:"Read"},local_read:{doing:"Reading",done:"Read"},write_file:{doing:"Writing",done:"Wrote"},str_replace_edit:{doing:"Editing",done:"Edited"},parameterized_str_replace_edit:{doing:"Editing",done:"Edited"},delete_file:{doing:"Deleting",done:"Deleted"},view_image:{doing:"Viewing",done:"Viewed"},show_html:{doing:"Previewing",done:"Previewed"},show_to_user:{doing:"Previewing",done:"Previewed"}};function dx(e){const t=[],s=e.input??{},i=(o,a,c)=>t.push({key:`${e.id}:${o}`,doing:Fn(a,Ba),done:Fn(c,Ba)}),n=cx[e.name];if(n&&typeof s.path=="string"&&s.path){const o=vn(s.path);i("path",`${n.doing} ${o}`,`${n.done} ${o}`)}switch(e.name){case"plan":i("plan","Planning...","Planned");break;case"list_files":case"local_ls":{const o=typeof s.path=="string"?s.path:"",a=o?vn(o):"",c=!a||lx(a)?"project":a;i("ls",`Listing files in ${c}`,`Listed files in ${c}`);break}case"grep":case"local_grep":{if(typeof s.pattern=="string"&&s.pattern){const o=Fn(s.pattern,24);i("grep",`Searching for “${o}”`,`Searched for “${o}”`)}break}case"copy_files":{const o=Array.isArray(s.files)?s.files:[];for(let a=0;a<o.length;a++){const c=o[a],d=typeof c?.dest=="string"?c.dest:void 0,u=typeof c?.src=="string"?c.src:void 0,p=d||u;p&&i(`copy:${a}`,`Copying ${vn(p)}`,`Copied ${vn(p)}`)}break}case"local_copy_to_project":{if(typeof s.path=="string"&&s.path){const o=vn(s.path);i("import",`Importing ${o}`,`Imported ${o}`)}break}case"github_import_files":{const o=Array.isArray(s.paths)?s.paths:[];for(let a=0;a<o.length;a++){const c=o[a];typeof c=="string"&&i(`gh:${a}`,`Importing ${vn(c)}`,`Imported ${vn(c)}`)}break}case"run_script":i("script","Running script","Ran script");break;case"web_search":{if(typeof s.query=="string"&&s.query){const o=Fn(s.query,32);i("ws",`Searching the web for “${o}”`,`Searched the web for “${o}”`)}break}case"web_fetch":{if(typeof s.url=="string"&&s.url){let o=s.url;try{o=new URL(s.url).host}catch{}i("wf",`Fetching ${Fn(o,32)}`,`Fetched ${Fn(o,32)}`)}break}}if(e.name==="write_file"||e.name==="str_replace_edit")for(const o of ax(ux(e)))i(`x:${o.key}`,o.doing,o.done);return t}function ux(e){const t=e.input??{};if(e.name==="write_file")return typeof t.content=="string"?t.content:"";let s=typeof t.new_string=="string"?t.new_string:"";const i=Array.isArray(t.edits)?t.edits:[];for(const n of i){const o=n?.new_string;typeof o=="string"&&(s+=`
`+o)}return s}function px(e){const t=[];for(const s of e)s.type==="tool_call"&&t.push(...dx(s.toolCall));return t}function fx(e){return e<=5?3e3:e>=15?700:Math.round(3e3-(e-5)/10*2300)}function hx(e,t){const[s,i]=l.useState(null),n=l.useRef([]),o=l.useRef(new Set),a=l.useRef(null),c=l.useRef(null),[,d]=l.useState(0),u=()=>{c.current&&(clearTimeout(c.current),c.current=null)};l.useEffect(()=>{n.current=[],o.current=new Set,a.current=null,i(null),u()},[t]);const p=l.useRef(()=>{});p.current=()=>{u();const b=n.current.shift();b&&(a.current=b,i(b),c.current=setTimeout(()=>p.current(),fx(n.current.length)))};const f=(()=>{for(let b=e.length-1;b>=0;b--){const m=e[b];if(m.type==="tool_call")return m.toolCall}return null})();return l.useEffect(()=>{if(!t)return;let b=!1;for(const m of px(e))o.current.has(m.key)||(o.current.add(m.key),n.current.push(m),b=!0);b&&(c.current?d(m=>m+1):p.current())},[t,e.length,f?.id,f?.input]),l.useEffect(()=>u,[]),s?n.current.length>0?s.done:s.doing:null}const gx=280,mx=Gt`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`,xx=Gt`
  from { transform: translateY(0);     opacity: 1; }
  to   { transform: translateY(-100%); opacity: 0; }
`,bx=x.span`
  display: inline-block;
  overflow: hidden;
  /* One line tall — drives translateY(±100%); matches parent line-height. */
  height: 1.6em;
  line-height: 1.6;
  position: relative;
  vertical-align: top;
  /* Let the parent flexbox shrink us so text-overflow can engage. */
  min-width: 0;
  max-width: 100%;
`,yx=x.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  position: ${e=>e.$latest?"relative":"absolute"};
  top: 0;
  left: 0;
  right: 0;
  animation: ${e=>e.$latest?mx:xx} ${gx}ms ease forwards;
`;function wx({text:e}){const t=l.useRef(0),[s,i]=l.useState(()=>[{text:e,key:0}]);return l.useEffect(()=>{i(n=>e===n[n.length-1]?.text?n:(t.current++,[...n.slice(-1),{text:e,key:t.current}]))},[e]),r.jsx(bx,{children:s.map((n,o)=>r.jsx(yx,{$latest:o===s.length-1,children:n.text},n.key))})}const Fd="/design/assets/spark-B8giJCoV.gif";function Dn(e){if(!e||e.length===0)return null;const t=e.length;return`Couldn’t upload ${t===1?"1 file":`${t} files`}. Please try again.`}const vx=e=>Lp(e),kx=()=>Mp;function Sx(){return l.useSyncExternalStore(vx,kx)}const Cx=Gt`
  from { opacity: 0; transform: scale(0.96) }
  to { opacity: 1; transform: scale(1) }
`,_x=x.div`
  position: relative;
  width: 420px;
  max-width: calc(100vw - 32px);
  background: ${h.bg.app};
  border-radius: 16px;
  box-shadow: ${h.shadow.lg};
  overflow: hidden;
  animation: ${Cx} 0.18s ease;
  padding: 28px;
`,$x=x.button`
  all: unset;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.06);
  color: ${h.text.secondary};
  transition: background 0.12s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`,Ex=x.h2`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  color: ${h.text.primary};
`,Tx=x.p`
  margin: 0 0 20px;
  font-size: 13px;
  color: ${h.text.secondary};
  line-height: 1.5;
`,jx=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wr=x.button`
  all: unset;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.12s ease;
  background: ${e=>e.$primary?h.accent.black:h.bg.muted};
  color: ${e=>e.$primary?h.text.inverse:h.text.primary};
  &:hover {
    background: ${e=>e.$primary?h.accent.blackHover:h.bg.hover};
  }
`;function Rx({limits:e,onClose:t}){const s=Wc(e.rateLimitType),i=Gc(e.resetsAt),n=e.overageStatus!=="rejected",o=e.overageDisabledReason==="out_of_credits";return r.jsx(tn,{isOpen:!0,onClose:t,children:r.jsxs(_x,{children:[r.jsx($x,{onClick:t,"aria-label":"Close",children:r.jsx(Ue,{name:"X",size:14})}),r.jsxs(Ex,{children:["You've hit your ",s]}),r.jsxs(Tx,{children:[e.rateLimitType!=="overage"&&!o&&"Claude Design uses its own usage limit for now — this is separate from your regular Claude usage. ",i?`Your limit ${i}.`:"Your limit will reset soon."," ",o?"You've also used all your extra usage credits for this period.":n?"You can keep working by switching to extra usage — billed against your credits.":""]}),r.jsxs(jx,{children:[o?r.jsxs(Wr,{$primary:!0,onClick:()=>window.open(`${mr()}/settings/billing`,"_blank"),children:["Add credits",r.jsx(Ue,{name:"ArrowOutSquare",size:14})]}):n?r.jsxs(Wr,{$primary:!0,onClick:()=>window.open(`${mr()}/settings/usage`,"_blank"),children:["Switch to extra usage",r.jsx(Ue,{name:"ArrowOutSquare",size:14})]}):null,r.jsxs(Wr,{onClick:()=>window.open(`${mr()}/settings/billing`,"_blank"),children:["Upgrade your plan",r.jsx(Ue,{name:"ArrowOutSquare",size:14})]}),r.jsx(Wr,{onClick:t,children:"Wait for limit to reset"})]})]})})}const Gr={latched:!1},Ys=new Set,Zs=new Map,Ax=`${mr()}/settings/usage`,Ha=`${mr()}/settings/billing`;function Dx(e,t){const s=[];if(t==="error"){const i=e.overageStatus!=="rejected";e.overageDisabledReason==="out_of_credits"?s.push({label:"Add credits",href:Ha}):i&&s.push({label:"Switch to extra usage",href:Ax})}return s.push({label:"Upgrade plan",href:Ha}),s}function Mx(){const e=Sx(),{showToast:t}=bt(),{addMessage:s}=vt(),n=nn()?.id,[o,a]=l.useState(!1);return l.useEffect(()=>{if(e.isUsingOverage&&!Gr.latched){Gr.latched=!0;const c=Wc(e.rateLimitType),d=Gc(e.resetsAt);t(`You're now using extra usage. Your ${c} ${d||"will reset"}.`,"info",8e3)}else!e.isUsingOverage&&Gr.latched&&(Gr.latched=!1)},[e.isUsingOverage,e.rateLimitType,e.resetsAt,t]),l.useEffect(()=>{const c=e.status==="rejected"&&!e.isUsingOverage;c&&n&&!Ys.has(n)?(Ys.add(n),a(!0)):c||(Ys.clear(),a(!1))},[e.status,e.isUsingOverage,n]),l.useEffect(()=>{const c=Pp(e);if(!c){Zs.clear();return}if(!n)return;const d=`${c.severity}:${e.status}:${e.rateLimitType}:${e.resetsAt}`;Zs.get(n)!==d&&(Zs.set(n,d),s(n,{role:"system",content:c.text,severity:c.severity,...c.severity!=="info"&&{actions:Dx(e,c.severity)}}))},[e,n,s]),o?r.jsx(Rx,{limits:e,onClose:()=>a(!1)}):null}const Lx=1e5,Px=3600*1e3,_r={bg:"#FDF4EE",border:"#F0C9B5",fg:"#A84E2E",sub:"rgba(168, 78, 46, 0.65)"},Ox=x.div`
  margin: 12px 0 4px;
  border-radius: 10px;
  background: ${_r.bg};
  border: 0.5px solid ${_r.border};
  box-shadow: ${h.shadow.xs};
  font-family: inherit;
`,Fx=x.div`
  padding: 10px 12px;
`,Ix=x.div`
  font-size: 12px;
  font-weight: 600;
  color: ${_r.fg};
  line-height: 1.4;
`,zx=x.div`
  font-size: 11px;
  color: ${_r.sub};
  line-height: 1.4;
  margin-top: 2px;
`,Nx=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-top: 0.5px solid ${_r.border};
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.4);
`,Ua=new Set;function Wa(e,t){for(let s=e.length-1;s>=0;s--)if(t(e[s]))return e[s]}function Bx(e){return e>=1e3?`${Math.round(e/1e3)}k`:String(e)}function Hx({chat:e,isLoading:t}){const{data:s,createChat:i,setActiveChat:n}=vt(),[,o]=l.useState(0);if(t||Ua.has(e.id))return null;const a=Wa(e.messages,b=>b.role!=="system");if(!a)return null;const c=Date.parse(a.timestamp);if(!Number.isFinite(c)||Date.now()-c<Px)return null;const u=Wa(e.messages,b=>b.role==="assistant"&&typeof b.turnInputTokens=="number")?.turnInputTokens??0;if(u<=Lx)return null;const p=()=>{const b=Object.values(s?.chats??{}).find(m=>m.messages.length===0&&!m.streaming?.isLoading);b?n(b.id):i()},f=()=>{Ua.add(e.id),o(b=>b+1)};return r.jsxs(Ox,{children:[r.jsxs(Fx,{children:[r.jsxs(Ix,{children:["Start a new chat to save ",Bx(u)," tokens of context"]}),r.jsx(zx,{children:"This uses your rate limits more effectively"})]}),r.jsxs(Nx,{children:[r.jsx(fe,{variant:"default",size:"xs",onClick:p,children:"New chat"}),r.jsx(fe,{variant:"ghost",size:"xs",onClick:f,children:"Continue here"})]})]})}async function bn(){return(await G.getSettings()).uploadsInFolder!==!1?"uploads":""}const Ux=Object.freeze(Object.defineProperty({__proto__:null,getUploadFolder:bn},Symbol.toStringTag,{value:"Module"})),Fi=new Set;function Wx(e){return Fi.add(e),()=>{Fi.delete(e)}}async function Gx(){const e=[...Fi].map(t=>t());await Promise.all(e)}const Ga="<web-capture>",Ja="</web-capture>";function Lo(e){const t=e.trim();if(!t.startsWith(Ga)||!t.endsWith(Ja))return null;const s=t.slice(Ga.length,-Ja.length);try{const i=JSON.parse(s);return!Array.isArray(i)||i.length===0||typeof i[0]?.id!="string"||typeof i[0]?.outerHTML!="string"?null:i}catch{return null}}async function Po(e,t){const i=`web-capture-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.json`,n=JSON.stringify(t,null,2),o=btoa(unescape(encodeURIComponent(n))),{getUploadFolder:a}=await Rs(async()=>{const{getUploadFolder:u}=await Promise.resolve().then(()=>Ux);return{getUploadFolder:u}},void 0),d=(await G.uploadData(e,[{type:"text",name:i,mimeType:"application/json",data:o}],await a())).files?.[0];if(!d)throw new Error("Failed to upload capture JSON");return t.map((u,p)=>({id:crypto.randomUUID(),type:"web-capture",name:u.label||u.selector,path:d.path,content:Kx(u,d.path,p)}))}const Jx=`interface WebCapture {
  id: string;
  selector: string;   // approximate CSS selector (for display)
  label: string;
  tag: string;
  url: string;        // page URL at capture time
  title: string;      // page <title>
  timestamp: string;
  innerText: string;
  outerHTML: string;  // full DOM subtree — mount this to traverse
  rect: { x: number; y: number; width: number; height: number };
  computedStyles: Record<string, string>;  // curated: layout, typography, color
  cssRules: Array<{ selector: string; css: string; media?: string }>;
}`;function Kx(e,t,s){return`Web element captured from ${e.url}
Element: ${e.selector} (${e.rect.width}×${e.rect.height}px)
Page: "${e.title}"

The full capture is stored at: ${t}
This attachment is entry index ${s} in that array (id: "${e.id}").

The JSON is LARGE — do not dump it into context. Explore it agentically:

1. Read ${t} and JSON.parse it. The file is an array of WebCapture objects:

\`\`\`ts
${Jx}
\`\`\`

2. Locate entry [${s}] (or find by id === "${e.id}").

3. The \`outerHTML\` field is the captured DOM subtree. Mount it safely — e.g.
   via \`new DOMParser().parseFromString(html, 'text/html').body.firstElementChild\`
   in a sandboxed eval, or string-search it — then traverse children to
   understand structure.

4. \`computedStyles\` is the element's resolved style map (layout, typography,
   color — curated, not all 350 props). Use it for exact px/color values.

5. \`cssRules\` lists stylesheet rules that matched the element (selector + declarations,
   with @media condition if present). CORS-blocked sheets were skipped.

6. \`innerText\` has the visible text content if you just need copy.`}const Xx=x.div`
  padding: 18px;
  width: 340px;
  font-family: inherit;
`,qx=x.div`
  font-size: 14px;
  font-weight: 600;
  color: ${h.text.primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Vx=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 11px 16px;
  background: ${h.accent.primary};
  color: ${h.text.inverse};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  cursor: grab;
  user-select: none;
  box-shadow:
    0 1px 3px rgba(180, 90, 30, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  &:active { cursor: grabbing; }
  &:hover { background: ${h.accent.primaryHover}; }
`,Yx=x.div`
  font-size: 12px;
  color: ${h.text.tertiary};
  text-align: center;
  margin-top: 8px;
`,Zx=x.kbd`
  padding: 1px 5px;
  font: 11px ui-monospace, Menlo, monospace;
  background: ${h.bg.panel};
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  color: ${h.text.primary};
`,Qx=x.ol`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
  border-top: 1px solid ${h.border.subtle};

  & li {
    counter-increment: step;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    font-size: 13px;
    color: ${h.text.primary};
    border-bottom: 1px solid ${h.border.subtle};
  }
  & li:last-child { border-bottom: none; padding-bottom: 0; }
  & li::before {
    content: counter(step);
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${h.bg.muted};
    color: ${h.text.secondary};
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,eb=typeof navigator<"u"&&/Mac/.test(navigator.platform);function tb({open:e,onClose:t,anchorEl:s}){const i=Jc(),[n,o]=l.useState(null);l.useEffect(()=>{!e||n!==null||fetch("/design/web-capture-picker.js").then(c=>c.text()).then(o).catch(()=>o(null))},[e,n]);const a=l.useMemo(()=>{if(n===null)return"#";const c=JSON.stringify(i).slice(1,-1);return"javascript:"+encodeURIComponent(n.replaceAll("__PRODUCT_NAME__",()=>c))},[n,i]);return r.jsx(Ms,{open:e,onClose:t,anchorEl:s,children:r.jsxs(Xx,{children:[r.jsxs(qx,{children:[r.jsx(Ue,{name:"Globe",size:15}),"Grab web element"]}),r.jsxs(Vx,{href:a,onClick:c=>c.preventDefault(),onDragEnd:t,children:[r.jsx(Ue,{name:"Globe",size:13}),i," capture"]}),r.jsxs(Yx,{children:["Drag to bookmarks bar · ",r.jsx(Zx,{children:eb?"⌘⇧B":"Ctrl+Shift+B"})," to show it"]}),r.jsxs(Qx,{children:[r.jsx("li",{children:"Click the bookmarklet on any page"}),r.jsx("li",{children:"Click elements to capture"}),r.jsx("li",{children:r.jsxs("span",{children:[r.jsx("strong",{children:"Copy"})," → paste here"]})})]})]})})}async function nb(e){const t=[];for(const i of e.items){if(i.kind!=="file")continue;const n=i.getAsFileSystemHandle;typeof n=="function"&&t.push(n.call(i))}return(await Promise.all(t)).filter(i=>i?.kind==="directory")}function rb({open:e,onClose:t,onAttach:s}){const[i,n]=l.useState(!1),[o,a]=l.useState([]),[c,d]=l.useState(!1);Nt(c),l.useEffect(()=>{e&&a([])},[e]),l.useEffect(()=>{if(!e)return;const y=g=>{g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect="none")};return window.addEventListener("dragover",y),window.addEventListener("drop",y),()=>{window.removeEventListener("dragover",y),window.removeEventListener("drop",y)}},[e]);const u=y=>{y.length!==0&&a(g=>{const C=new Map(g.map(v=>[v.name,v]));for(const v of y)C.set(v.name,v);return Array.from(C.values())})},p=async y=>{y.preventDefault(),y.stopPropagation(),n(!1);const g=await nb(y.dataTransfer);u(g)},f=async()=>{if(qt){d(!0);try{const y=await window.showDirectoryPicker({mode:"read"}),g=new Map(o.map(C=>[C.name,C]));g.set(y.name,y),s([...g.values()]),t()}catch(y){if(y instanceof DOMException&&y.name==="AbortError")return}finally{d(!1)}}},b=y=>{a(g=>g.filter(C=>C.name!==y))},m=()=>{s(o),t()};return r.jsx(tn,{isOpen:e,onClose:t,children:r.jsxs(sb,{children:[r.jsx(Es,{title:"Attach codebase",onClose:t,noDivider:!0}),r.jsxs(ib,{children:[r.jsx(ob,{$dragOver:i,onDragOver:y=>{y.preventDefault(),y.stopPropagation(),n(!0)},onDragLeave:y=>{y.currentTarget.contains(y.relatedTarget)||n(!1)},onDrop:p,children:r.jsx(Op,{title:c?"Attaching…":o.length>0?"Drop another codebase here":"Drop your codebase here",subtitle:"For large codebases, drop the frontend or design system folder",actions:qt?r.jsx(fe,{variant:"default",size:"sm",onClick:f,disabled:c,children:"or browse…"}):null})}),o.length>0&&r.jsx(ab,{children:o.map(y=>r.jsx(gs,{icon:"Folder",title:y.name,onRemove:()=>b(y.name),children:y.name},y.name))})]}),r.jsxs(lb,{children:[r.jsx(fe,{variant:"ghost",size:"sm",onClick:t,children:"Cancel"}),r.jsxs(fe,{variant:"primary",size:"sm",onClick:m,disabled:o.length===0,children:["Attach ",o.length>0&&`(${o.length})`]})]})]})})}const sb=x.div`
  width: 520px;
  max-width: calc(100vw - 32px);
  background: ${h.bg.surface};
  border: 1px solid ${h.border.modal};
  border-radius: 14px;
  box-shadow:
    0 24px 48px rgba(15, 12, 8, 0.16),
    0 8px 16px rgba(15, 12, 8, 0.08);
  overflow: hidden;
  font-family: inherit;
`,ib=x.div`
  padding: 8px 20px 16px;
`,ob=x.div`
  border: 2px dashed
    ${e=>e.$dragOver?h.accent.primary:h.border.default};
  border-radius: 12px;
  background: ${e=>e.$dragOver?h.accent.primaryBg:h.bg.muted};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ab=x.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-height: 160px;
  overflow-y: auto;
`,lb=x.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 20px 18px;
  border-top: 1px solid ${h.border.modal};
`,cb=Gt`
  from { opacity: 0; transform: scale(0.96) }
  to { opacity: 1; transform: scale(1) }
`,db=x.div`
  width: 480px;
  max-width: calc(100vw - 32px);
  max-height: min(640px, calc(100vh - 64px));
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 14px;
  box-shadow:
    0 24px 48px rgba(15, 12, 8, 0.16),
    0 8px 16px rgba(15, 12, 8, 0.08);
  overflow: hidden;
  animation: ${cb} 0.18s ease;
  display: flex;
  flex-direction: column;
`,ub=x.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 16px 14px 20px;
  flex-shrink: 0;
`,pb=x.div`
  flex: 1;
  min-width: 0;
`,fb=x.div`
  font-size: 15px;
  font-weight: 600;
  color: ${h.text.primary};
`,hb=x.div`
  font-size: 12px;
  color: ${h.text.tertiary};
  margin-top: 2px;
`,gb=x.div`
  height: 1px;
  background: ${h.border.subtle};
  flex-shrink: 0;
`,mb=x.div`
  padding: 0 8px 12px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,Ka=x.div`
  font-size: 12px;
  font-weight: 600;
  color: ${h.text.tertiary};
  padding: 22px 12px 6px;

  &:first-child {
    padding-top: 20px;
  }
`,Xa=x.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  .row-actions {
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  &:hover {
    background: ${h.bg.hover};
    .row-actions {
      opacity: 1;
    }
  }
  ${e=>e.$disabled&&`
    cursor: default;
    opacity: 0.5;
  `}
`,qa=x.div.attrs({className:"row-actions",onClick:e=>e.stopPropagation()})`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`,Va=x.div`
  flex: 1;
  min-width: 0;
`,Ya=x.div`
  font-size: 13px;
  font-weight: 500;
  color: ${h.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Za=x.div`
  font-size: 11px;
  color: ${h.text.tertiary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1px;
`,Qs=x.div`
  font-size: 12px;
  color: ${h.text.tertiary};
  padding: 8px 12px 4px;
`;function xb({open:e,onClose:t,onAttach:s}){const{items:i,loading:n,error:o}=ud("design_system",!0),a=new Set(["Create design system","BigQuery","Handoff to Claude Code"]),c=Fp().filter(g=>!g.hidden&&!a.has(g.name)),{showToast:d}=bt(),[u,p]=l.useState(null),f=g=>{s(g),t()},b=async(g,C)=>{if(!u){p(g);try{const{name:v,prompt:w}=await Sh(g,C);f({id:crypto.randomUUID(),name:v,type:"skill",content:w})}catch{d("Could not load that design system. Try again.","error")}finally{p(null)}}},m=(g,C)=>{f({id:crypto.randomUUID(),name:g,type:"skill",content:C})},y=g=>{window.open(`/design/p/${g}`,"_blank")};return r.jsx(tn,{isOpen:e,onClose:t,children:r.jsxs(db,{children:[r.jsxs(ub,{children:[r.jsxs(pb,{children:[r.jsx(fb,{children:"Skills and design systems"}),r.jsx(hb,{children:"Attach design systems or skills to give Claude additional context."})]}),r.jsx(_t,{icon:"XSmall",size:32,iconSize:20,iconBold:!0,onClick:t,title:"Close"})]}),r.jsx(gb,{}),r.jsxs(mb,{children:[r.jsx(Ka,{children:"Design systems"}),n&&i.length===0&&r.jsx(Qs,{children:"Loading…"}),o&&i.length===0&&r.jsx(Qs,{children:"Couldn’t load design systems."}),!n&&!o&&i.length===0&&r.jsx(Qs,{children:"No published design systems yet."}),i.map(g=>r.jsxs(Xa,{onClick:()=>void b(g.projectId,g.name),$disabled:u!==null,children:[r.jsxs(Va,{children:[r.jsx(Ya,{children:g.name}),g.description&&r.jsx(Za,{children:g.description})]}),r.jsxs(qa,{children:[r.jsx(fe,{size:"xs",variant:"default",loading:u===g.projectId,onClick:()=>void b(g.projectId,g.name),children:"Use"}),r.jsx(fe,{size:"xs",variant:"default",onClick:()=>y(g.projectId),children:"Edit"})]})]},g.projectId)),r.jsx(Ka,{children:"Skills"}),c.map(g=>r.jsxs(Xa,{onClick:()=>m(g.name,g.prompt),children:[r.jsxs(Va,{children:[r.jsx(Ya,{children:g.name}),g.subtitle&&r.jsx(Za,{children:g.subtitle})]}),r.jsx(qa,{children:r.jsx(fe,{size:"xs",variant:"default",onClick:()=>m(g.name,g.prompt),children:"Use"})})]},g.name))]})]})})}function bb(){return gt("omelette_design_sync_enabled").on}x.div`
  font-size: 12px;
  color: ${h.text.secondary};
  line-height: 1.5;
  margin-bottom: 12px;
`;x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
`;x.div`
  font-size: 12px;
  color: ${e=>e.$tone==="success"?"#2a7e3e":e.$tone==="error"?"#b33a3a":h.text.tertiary};
  display: flex;
  align-items: center;
  gap: 6px;
`;const yb=[["->","→"],["<-","←"]];function wb(e){for(const[t,s]of yb)if(e.endsWith(t))return{pattern:t,glyph:s};return null}function vb(e){l.useEffect(()=>{const t=e.current;if(!t)return;const s=i=>{const n=i;if(n.inputType!=="insertText"||n.isComposing)return;const o=t.selectionStart;if(o!==t.selectionEnd)return;const a=wb(t.value.slice(0,o));if(!a)return;t.setSelectionRange(o-a.pattern.length,o),document.execCommand("insertText",!1,a.glyph)||(t.setRangeText(a.glyph,o-a.pattern.length,o,"end"),t.dispatchEvent(new Event("input",{bubbles:!0})))};return t.addEventListener("input",s),()=>t.removeEventListener("input",s)},[e])}function kb(){const e=window,t=e.SpeechRecognition??e.webkitSpeechRecognition;if(!t)return null;const s=new t;return s.continuous=!0,s.interimResults=!0,s.lang=navigator.language||"en-US",s}async function Sb(){try{const e=navigator.permissions;return e?.query?(await e.query({name:"microphone"})).state:"unknown"}catch{return"unknown"}}let Ii=!1;const zi=new Set;function Qa(e){if(Ii!==e){Ii=e;for(const t of zi)t()}}function Cb(e){return zi.add(e),()=>{zi.delete(e)}}function _b(){return l.useSyncExternalStore(Cb,()=>Ii)}function $b(e){const[t,s]=l.useState("idle"),i=l.useRef(e);i.current=e;const n=l.useRef(null),o=l.useRef(""),a=l.useRef(""),c=l.useRef(null),d=l.useRef(!1),u=l.useRef(null),p=l.useCallback(()=>{const w=n.current;if(w){w.onresult=null,w.onend=null,w.onerror=null;try{w.abort()}catch{}}n.current=null,u.current&&(clearTimeout(u.current),u.current=null)},[]);l.useEffect(()=>()=>{p()},[p]);const f=l.useCallback(w=>{o.current="",a.current="",d.current=!1;const S=kb();if(!S){i.current.onError?.("no-api"),s("idle");return}i.current.onSessionStart?.(),S.onresult=k=>{let E="",T="";for(let M=0;M<k.results.length;M++){const L=k.results[M];L.isFinal?E+=L[0].transcript:T+=L[0].transcript}const _=a.current,R=E.slice(_.length);a.current=E;const $=E+T;$===o.current&&!R||(o.current=$,i.current.onTranscript({transcript:$,delta:R,finalsLength:E.length}))},S.onend=()=>{n.current=null;const k=d.current;d.current=!1,s("idle"),i.current.onSessionEnd?.(k)},S.onerror=k=>{const E=k;n.current=null,d.current=!1,s("idle"),E?.error==="not-allowed"||E?.error==="service-not-allowed"?i.current.onError?.("permission-denied"):i.current.onError?.("unknown",k)},n.current=S,s("listening");try{S.start()}catch(k){(k?.message??"").includes("already")||(p(),s("idle"),i.current.onError?.("unknown",k))}},[p]),b=l.useCallback(async(w,S)=>{if(t!=="idle")return;s("requesting");const k=await Sb();if(k==="denied"){s("idle"),S?i.current.onError?.("permission-denied"):(c.current={mode:w},i.current.onNeedsPermissionGesture?.());return}if(k==="prompt"&&!S){s("idle"),c.current={mode:w},i.current.onNeedsPermissionGesture?.();return}f(w)},[t,f]),m=l.useCallback(()=>{if(t==="idle")return;const w=n.current;if(!w){s("idle");return}s("finalizing"),u.current=setTimeout(()=>{u.current=null;try{w.stop()}catch{}},300)},[t]),y=l.useCallback(()=>{t==="idle"?b("toggle",!0):m()},[t,m,b]),g=l.useCallback(()=>{t==="idle"&&b("hold",!1)},[t,b]),C=l.useCallback(w=>{t!=="idle"&&(d.current=w,m())},[t,m]),v=l.useCallback(()=>{const w=c.current;w&&(c.current=null,b(w.mode,!0))},[b]);return l.useEffect(()=>(Qa(t==="listening"||t==="finalizing"),()=>Qa(!1)),[t]),l.useMemo(()=>({active:t==="listening"||t==="finalizing"||t==="requesting",listening:t==="listening",finalizing:t==="finalizing",toggle:y,stop:m,startHold:g,releaseHold:C,retryPending:v}),[t,y,m,g,C,v])}const Eb=typeof navigator<"u"&&/Mac/.test(navigator.platform),Tb=Eb?"⌘":"Ctrl";function jb(){return Vn.createPortal(r.jsxs(Lb,{children:[r.jsxs(Pb,{children:["Point at elements in the design — Claude will know",r.jsx(Ob,{}),r.jsxs(Fb,{children:[Tb,"G"]})]}),r.jsx(Ab,{})]}),document.body)}let Rb=0;function Ab(){const[e,t]=l.useState([]),s=l.useRef({x:window.innerWidth/2,y:window.innerHeight/2});Ye("mousemove",n=>{s.current={x:n.clientX,y:n.clientY}}),Ye("live-voice:particles",n=>{const{words:o,target:a}=n.detail,c={x:s.current.x,y:s.current.y-28};t(d=>[...d,...o.map((u,p)=>({id:++Rb,word:u,from:c,to:a,delay:p*60}))])});const i=l.useCallback(n=>{t(o=>o.filter(a=>a.id!==n))},[]);return r.jsx(r.Fragment,{children:e.map(n=>r.jsx(Db,{particle:n,onDone:i},n.id))})}function Db({particle:e,onDone:t}){const s=l.useCallback(i=>{if(!i)return;const n=e.to.x-e.from.x,o=e.to.y-e.from.y,a=i.animate([{transform:"translate(-50%, -50%) scale(1.1)",opacity:0,filter:"blur(0.6px)"},{transform:"translate(-50%, -50%) scale(1)",opacity:.85,filter:"blur(1.5px)",offset:.15},{transform:`translate(calc(-50% + ${n}px), calc(-50% + ${o}px)) scale(0.6)`,opacity:0,filter:"blur(0.6px)"}],{duration:900,delay:e.delay,easing:"cubic-bezier(0.22, 0.61, 0.36, 1)",fill:"both"});a.onfinish=()=>t(e.id),a.oncancel=()=>t(e.id)},[e,t]);return r.jsx(Ib,{ref:s,style:{left:e.from.x,top:e.from.y},children:e.word})}const Mb=Gt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Lb=x.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  pointer-events: none;
  background: radial-gradient(
    ellipse 120% 120% at center,
    transparent 45%,
    rgba(47, 117, 255, 0.12) 75%,
    rgba(47, 117, 255, 0.35) 100%
  );
  animation: ${Mb} 180ms ease-out;
`,Pb=x.div`
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background: #2f75ff;
  color: #fff;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.01em;
  box-shadow:
    0 4px 14px rgba(47, 117, 255, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.35) inset;
`,Ob=x.span`
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.4);
`,Fb=x.kbd`
  padding: 1px 6px;
  font:
    600 11px/1.4 ui-monospace,
    Menlo,
    monospace;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 4px;
  color: #fff;
`,Ib=x.span`
  position: fixed;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  color: #6ea2ff;
  text-shadow: 0 0 12px rgba(47, 117, 255, 0.9);
  white-space: nowrap;
  will-change: transform, opacity, filter;
`,zb=Gt`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.15); opacity: 0.6; }
`,Nb=x.div`
  position: absolute;
  inset: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  pointer-events: none;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  color: ${h.accent.primary};
  letter-spacing: 0.02em;
  z-index: 100;

  &::before {
    position: absolute;
    inset: 0;
    /* Parent's z-index:100 creates a stacking context; ::before's z-index
     * competes with the OVERLAY'S children, not the parent. Positive 99
     * paints on TOP of the icon/label (in-flow + transform-stacking).
     * -1 paints behind them while staying above the context root's bg. */
    z-index: -1;
    filter: blur(12px);
    border-radius: 8px;
    background: ${h.accent.primary}2c;
    content: "";
  }
`,Bb=x.span`
  display: inline-flex;
  animation: ${zb} 1.4s ease-in-out infinite;
`,Hb={boxShadow:`0 0 0 2px ${h.accent.primary}, 0 0 12px ${h.accent.primary}88`,transition:"box-shadow 0.15s ease"},Ub={boxShadow:"0 0 0 2px #2f75ff, 0 0 16px rgba(47, 117, 255, 0.55)",transition:"box-shadow 0.15s ease"};function Wb(){return r.jsxs(Nb,{children:[r.jsx(Bb,{children:r.jsx(Ue,{name:"Voice",size:20})}),"Listening..."]})}const Gb=x.div`
  padding: 12px;
  padding-top: 0;
  contain: layout style;
`,Jb=x.div`
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 12px;
  padding: 12px;
  box-shadow: ${h.shadow.sm};
  position: relative;
  z-index: 10;
`,Kb=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 10px;
`,Xb=Gt`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`,Id=x.div`
  position: relative;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${h.border.default};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  background: linear-gradient(90deg, ${h.bg.muted} 0%, ${h.bg.surface} 40%, ${h.bg.muted} 80%);
  background-size: 400px 100%;
  animation: ${Xb} 1.4s linear infinite;

  img {
    display: block;
    height: 100%;
    min-width: 48px;
    max-width: 160px;
    object-fit: cover;
  }
`,qb=80,Vb=e=>e?Math.min(160,Math.max(48,Math.round(qb*e))):void 0,Yb=x.div`
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;

  ${Id}:hover & {
    opacity: 1;
  }

  /* Force GhostButton's icon color to white inside the dark backdrop.
     The :hover selector has to be listed explicitly because
     GhostButton's own &:hover rule has higher specificity (class +
     pseudo-class) than our plain child selector (class + type),
     and would otherwise repaint the icon to colors.text.secondary —
     dark gray on a dark backdrop, nearly invisible at click time. */
  & > button,
  & > button:hover {
    color: #fff;
  }
`,Zb=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Qb=x.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ey=x.div`
  padding: 8px 8px 4px;
`;function ty({chat:e,projectPath:t,localText:s,setLocalText:i,isLoading:n,onSend:o,updateComposer:a,codebaseModalOpen:c,setCodebaseModalOpen:d}){const{appendAttachments:u}=vt(),[p,f]=l.useState(!1),[b,m]=l.useState(!1),[y,g]=l.useState(!1);bb();const[C,v]=l.useState(!1),[w,S]=l.useState(!1),[k,E]=l.useState({model:""}),[T,_]=l.useState(!1),R=Ip(),$=zp(),M=Np(),L=$||Vp,z=Xn(k.model)||L,[J,I]=l.useState(!1),te=jr(),ce=l.useRef(null),ue=l.useRef(null),me=l.useRef(null),{showToast:de}=bt(),De=Yn(),[Re,je]=l.useState(Oc()),[H,ke]=l.useState(vr()),[X,Se]=l.useState([]),[oe,he]=l.useState(!1),[pe,Le]=Kc(ny,!1),re=Bp();Nt(J),vb(me);const U=l.useRef(s);U.current=s;const D=l.useRef(""),O=l.useRef(""),[P,B]=l.useState(!1);Ye("html-viewer:visible-change",j=>{B(j.detail.visible)});const ne=l.useRef(null),se=$b({onSessionStart:()=>{D.current=U.current,O.current=""},onTranscript:({transcript:j,delta:K,finalsLength:ee})=>{const F=new CustomEvent("live-voice:chunk",{detail:{chunk:K,consumed:!1}});window.dispatchEvent(F);let W=F.detail.target;if(!W){const _e=ne.current?.getBoundingClientRect();W=_e?{x:_e.left+_e.width/2,y:_e.top+_e.height/2}:{x:window.innerWidth/2,y:window.innerHeight-80}}const A=K.split(/\s+/).filter(Boolean);if(A.length&&window.dispatchEvent(new CustomEvent("live-voice:particles",{detail:{words:A,target:W}})),F.detail.consumed)return;O.current+=K;const N=D.current,Y=O.current+j.slice(ee),xe=N&&Y&&!/\s$/.test(N)&&!/^\s/.test(Y)?" ":"",Ce=N+xe+Y;U.current=Ce,i(Ce),a(e.id,{text:Ce})},onSessionEnd:j=>{j&&setTimeout(()=>{Oe.current()},0)},onError:j=>{de(j==="no-api"?"Voice input isn’t available in this browser.":j==="permission-denied"?"Microphone permission denied. Enable it in your browser settings to use voice mode.":"Voice recognition failed. Try again.","error")},onNeedsPermissionGesture:()=>{de("Click the mic button to grant microphone access.","info")}}),Oe=l.useRef(()=>{}),Me=l.useRef(null),Fe=l.useRef(null),Pe=l.useRef(!1),We=l.useRef(se.active);We.current=se.active,Ch("crosshair",se.listening);const tt=200;l.useEffect(()=>{const j=()=>{Fe.current&&(clearTimeout(Fe.current),Fe.current=null)},K=W=>{if(W.key==="Escape"&&We.current){W.preventDefault(),Me.current=null,j(),Pe.current=!1,se.stop();return}if(W.code==="KeyG"&&(W.metaKey||W.ctrlKey)){if(Me.current!==null){W.preventDefault();return}if(W.preventDefault(),We.current){se.stop();return}Me.current=performance.now(),Pe.current=!1,Fe.current=setTimeout(()=>{Me.current!==null&&(Pe.current=!0,se.startHold())},tt)}},ee=W=>{if(Me.current===null||!(W.code==="KeyG"||W.code==="MetaLeft"||W.code==="MetaRight"||W.code==="ControlLeft"||W.code==="ControlRight"))return;const N=performance.now()-Me.current;Me.current=null,j(),Pe.current?(se.releaseHold(!1),Pe.current=!1):(N<tt,se.toggle())},F=()=>{Me.current!==null&&(document.activeElement instanceof HTMLIFrameElement||(Me.current=null,j(),Pe.current&&(se.releaseHold(!1),Pe.current=!1)))};return window.addEventListener("keydown",K),window.addEventListener("keyup",ee),window.addEventListener("blur",F),()=>{window.removeEventListener("keydown",K),window.removeEventListener("keyup",ee),window.removeEventListener("blur",F),j()}},[se]);const[Ee,,Je]=Hp(_h,null);l.useEffect(()=>{if(Ee){if(s||e.composer.attachments.length>0){Je();return}i(Ee),a(e.id,{text:Ee}),Je()}},[]),l.useEffect(()=>{const j=()=>Se(tf(e.id).filter(K=>K.toolName!=="fork_verifier_agent"));return j(),Up(j)},[e.id]);const Ie=gt("omelette_au_jambon").on,le=gt("omelette_aux_fines_herbes").on,q=$o(t),[we,ie]=l.useState(!1),Ge=async()=>{f(!1);const j=await _d();if(!j)return;const K=await q.attach(j.file,j.handle);K&&u(e.id,[K])};l.useEffect(()=>{Wp(Ie),Ie&&Fc().catch(()=>{}),ao();const j=Ic(je),K=Ts(ke);return()=>{j(),K()}},[Ie]);const ze=gt("omelette_mcp_toolbox").on,qe=!gt("omelette_connect_github_disabled").on;l.useEffect(()=>{Gp(ze),ze&&(Jp().catch(()=>{}),Kp())},[ze]);const Ke=gt("omelette_plan_tool_enabled").on;l.useEffect(()=>{Xp(Ke)},[Ke]);const Xe=gt("omelette_tweaks_suggestion_bar_enabled").on;l.useEffect(()=>{af(Xe)},[Xe]);const rt=gt("omelette_truncate_starter_component_output").on;l.useEffect(()=>{lf(rt)},[rt]);const yt=gt("omelette_adaptive_effort").value;l.useEffect(()=>{qp(yt)},[yt]),Ye("composer:open-model",()=>S(!0)),l.useEffect(()=>{G.getSettings().then(j=>{E(j),_(!0)}).catch(j=>{})},[]);const kt=j=>{const K=j.trim();E(ee=>({...ee,model:K})),G.updateSettings({model:K})};l.useEffect(()=>{if(!(!T||!$||localStorage.getItem(el)===$)){try{localStorage.setItem(el,$)}catch{}M&&k.model&&k.model!==$&&kt($)}},[T,$,M]);const{mainPresets:St,overflowPresets:pt}=l.useMemo(()=>{const j=R??[],K=j.filter(F=>!F.overflow||F.id===z),ee=j.filter(F=>F.overflow&&F.id!==z);return{mainPresets:K,overflowPresets:ee}},[R,z]),wt=()=>{S(!1)},ft=j=>{kt(j),wt()},Ct=l.useMemo(()=>{const j=[],K=ee=>({label:ee.label,trailingIcon:z===ee.id?"Check":void 0,onClick:()=>ft(ee.id)});for(const ee of St)j.push(K(ee));if(pt.length>0){j.push({separator:!0});for(const ee of pt)j.push(K(ee))}return j},[St,pt,z]),jt=Yp()?void 0:r.jsx(ey,{children:r.jsx(kr,{placeholder:z,value:k.model??"",onChange:j=>kt(j.target.value),style:{width:"100%"}})}),Ne=async()=>{if(te){de(Wt,"error");return}if(!(e.composer.attachments.filter(j=>j.type==="file").length>=10)){G.trackEvent("composer_attach_file",{}),I(!0);try{const j=await G.uploadFiles(t,{intercept:le?async ee=>{if(!ee.name.toLowerCase().endsWith(".fig"))return!1;const F=await q.attach(ee);return F&&u(e.id,[F]),!0}:void 0});if(j.linkedDir&&(fs(t,[j.linkedDir]),u(e.id,[{id:crypto.randomUUID(),name:j.linkedDir.name,type:"folder"}]),de(`Linked ${j.linkedDir.name} as a codebase — use the Import menu to re-link later`,"info")),j.files&&j.files.length>0){const ee=j.files.map(F=>({id:crypto.randomUUID(),name:F.name,path:F.path,type:F.type}));u(e.id,ee)}const K=Dn(j.errors);K&&de(K,"error")}finally{I(!1)}}},V=async()=>{f(!1);try{await uo(),de("Connected to Figma","success")}catch(j){const K=j instanceof Error?j.message:"Failed to connect to Figma";K.includes("was closed")||de(K,"error")}},ae=async()=>{f(!1),await of(),de("Disconnected from Figma","info")},ge=async()=>{f(!1);try{await js(),de("Connected to GitHub","success"),window.dispatchEvent(new CustomEvent("github-connected"))}catch(j){const K=j instanceof Error?j.message:"Failed to connect to GitHub";K.includes("was closed")||de(K,"error")}},Be=async()=>{f(!1),await Bc(),de("Disconnected from GitHub","info")},Ae=()=>{f(!1),d(!0)},nt=j=>{j.length!==0&&(G.trackEvent("composer_attach_codebase",{count:j.length}),qc(t,j),a(e.id,{attachments:[...e.composer.attachments.filter(K=>K.type!=="folder"),...j.map(K=>({id:crypto.randomUUID(),name:K.name,type:"folder"}))]}))};l.useEffect(()=>{let j=!1;return Promise.all([Zp(t),Qp(t)]).then(([K,ee])=>{j||K.length===0&&!ee||a(e.id,{attachments:[...e.composer.attachments.filter(F=>!(F.type==="folder"&&K.includes(F.name))&&!(F.type==="fig-file"&&F.name===ee)),...K.map(F=>({id:crypto.randomUUID(),name:F,type:"folder"})),...ee?[{id:crypto.randomUUID(),name:ee,type:"fig-file"}]:[]]})}),()=>{j=!0}},[t]);const Ze=()=>{oe&&he(!1),nf(s),o()};Oe.current=Ze;const st=l.useRef(Ne);st.current=Ne;const ht=l.useRef(Ae);ht.current=Ae,l.useEffect(()=>{const j=()=>st.current(),K=()=>ht.current(),ee=()=>g(!0);return window.addEventListener("empty-state:screenshot",j),window.addEventListener("empty-state:codebase",K),window.addEventListener("empty-state:design-system",ee),()=>{window.removeEventListener("empty-state:screenshot",j),window.removeEventListener("empty-state:codebase",K),window.removeEventListener("empty-state:design-system",ee)}},[]);const Rt=2e3,Dt=12e4,Z=async j=>{const K=/^image\.(png|jpe?g|gif|webp|bmp|avif|tiff?)$/i,ee=Array.from(j.clipboardData.files).filter(xe=>(xe.type||"").startsWith("image/"));if(ee.length>0){if(j.preventDefault(),te){de(Wt,"error");return}const xe=ee.map((_e,Te)=>{const He=_e.type||"image/png",Qe=_e.name.match(K),xt=!_e.name||Qe?`pasted-${Date.now()}-${Te}.${Qe?.[1]||He.split("/")[1]||"png"}`:_e.name;return{type:"binary",name:fn(xt),mimeType:He,blob:_e}}),Ce=Promise.all(ee.map(async(_e,Te)=>{try{const He=await createImageBitmap(_e),Qe=He.width/He.height;return He.close(),[xe[Te].name,Qe]}catch{return[xe[Te].name,void 0]}})).then(_e=>new Map(_e));I(!0);try{const[_e,Te]=await Promise.all([G.uploadData(t,xe,await bn()),Ce]);if(_e.files&&_e.files.length>0){const Qe=new Map(xe.map($e=>[$e.name,$e])),xt=$e=>$e.replace(/-(?:\d+|[0-9a-f]{8})(\.[^.]+)$/,"$1"),Q=$e=>Qe.get($e)??Qe.get(xt($e));for(const $e of _e.files){const ot=Q($e.name);ot?.blob&&yo($e.path,ot.blob)}u(e.id,_e.files.map($e=>({id:crypto.randomUUID(),name:$e.name,path:$e.path,type:$e.type,aspectRatio:Te.get($e.name)??Te.get(xt($e.name))})))}const He=Dn(_e.errors);He&&de(He,"error")}catch(_e){Tt(_e,"upload image"),de("Couldn’t upload image. Please try again.","error")}finally{I(!1)}return}const F=j.clipboardData.getData("text/plain"),W=Lo(F);if(W){if(j.preventDefault(),te){de(Wt,"error");return}I(!0);try{const xe=await Po(t,W);u(e.id,xe),de(`Added ${xe.length} web ${xe.length===1?"capture":"captures"}`,"success")}catch(xe){Tt(xe,"import web capture"),de("Couldn’t import web capture. Please try again.","error")}finally{I(!1)}return}if(F.length<=Rt)return;j.preventDefault();const A=F.length>Dt?F.slice(0,Dt):F,N=A.split(`
`).length,Y=A.length<F.length?`Pasted text (${N} lines, truncated)`:`Pasted text (${N} lines)`;a(e.id,{attachments:[...e.composer.attachments,{id:crypto.randomUUID(),name:Y,type:"text",content:A}]})},be=Re.connected?{label:"Figma connected",icon:"Projects",trailingAction:{label:"Disconnect",onClick:ae}}:{label:"Connect Figma to import Figma URLs",icon:"Projects",onClick:V},ve=H.connected?{label:"Configure GitHub access",icon:"Branch",subtitle:H.login?`Connected as ${H.login}`:void 0,onClick:()=>{f(!1),lo()},trailingAction:{label:"Disconnect",onClick:Be}}:{label:"Connect GitHub",icon:"Branch",onClick:ge},ye=[...Ie?[be]:[],...le?[{label:"Upload .fig file",icon:"Upload",onClick:Ge,trailingAction:{label:"How to download",onClick:()=>{f(!1),ie(!0)}}}]:[],...qe?[ve]:[],{label:"Grab web element",icon:"Globe",onClick:()=>{f(!1),m(!0)}},...qt?[{label:"Link code folder",icon:"Folder",onClick:Ae}]:[],{label:"Skills and design systems",icon:"Wrench",onClick:()=>{f(!1),g(!0)}},{label:"Reference another project",icon:"Projects",onClick:()=>{f(!1),De({title:"Reference another project",message:"To bring another project into this chat, paste its URL directly into the composer. Claude will pick it up and can read its files.",confirmLabel:"Got it",hideCancel:!0,secondaryAction:{label:"Browse projects",onClick:()=>window.open("/design/","_blank")}})}}];return r.jsxs(Gb,{children:[oe&&r.jsxs(Sn,{$variant:"hint",$placement:"docked",children:["FYI: ",navigator.platform.toLowerCase().includes("mac")?"Cmd":"Ctrl","+Enter submits.",r.jsx("span",{style:{marginLeft:"auto"},children:r.jsx($n,{icon:"X",size:20,iconSize:11,onClick:()=>he(!1),title:"Dismiss"})})]}),re&&r.jsxs(Sn,{$variant:"hint",$placement:"docked",children:[re.source==="chin_frustration"?"Something not working? Tell us what went wrong.":"How did that go? We’d love to hear.",r.jsxs("span",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:4},children:[r.jsx(fe,{variant:"default",size:"xs",onClick:re.open,children:"Send feedback"}),r.jsx($n,{icon:"X",size:20,iconSize:11,onClick:re.dismiss,title:"Dismiss"})]})]}),e.composer.attachments.some(j=>j.type==="comment"||j.type==="text-edit"||j.type==="knobs")&&r.jsx(Sn,{$variant:"warning",$placement:"docked",children:"Submit your changes when ready"}),e.composer.attachments.some(j=>j.type==="html-error")&&r.jsx(Sn,{$variant:"warning",$placement:"docked",children:"Send Claude the error from this page"}),X.length>0&&r.jsxs(Sn,{$variant:"hint",$placement:"docked",style:{justifyContent:"space-between"},children:[r.jsx("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(()=>{const j=X.filter(K=>K.progress).at(-1);return j?X.length>1?`${j.progress} (+${X.length-1} more)`:j.progress:X.length===1?"1 background task running...":`${X.length} background tasks running...`})()}),r.jsx($n,{icon:"X",size:18,iconSize:10,onClick:()=>X.forEach(j=>ef(j.id))})]}),r.jsxs(Jb,{ref:ne,style:se.listening&&!P?Ub:void 0,children:[e.composer.attachments.length>0&&r.jsx(Kb,{children:e.composer.attachments.map(j=>{const K=()=>{j.type==="folder"&&rf(t,j.name);const ee=e.composer.attachments.filter(F=>F.id!==j.id);if(j.type==="fig-file"){const F=sf(t)?.filename;ee.some(W=>W.type==="fig-file"&&W.name===F)||io(t)}a(e.id,{attachments:ee})};if(j.type==="image"&&j.path){const ee=Vb(j.aspectRatio),F=W=>{const A=W.currentTarget.parentElement;A.style.animation="none",A.style.background="none"};return r.jsxs(Id,{title:j.name,style:ee!==void 0?{width:ee}:void 0,children:[r.jsx("img",{src:wo(j.path)??Ls(t,j.path),alt:j.name,style:ee!==void 0?{width:"100%",maxWidth:"none"}:void 0,onLoad:F,onError:F}),r.jsx(Yb,{children:r.jsx($n,{icon:"X",size:18,iconSize:9,onClick:K,title:"Remove image"})})]},j.id)}return r.jsx(gs,{title:Mi(j),onRemove:K,children:j.name},j.id)})}),r.jsx("div",{style:{position:"relative",marginBottom:10},children:r.jsx(Xc,{ref:me,"data-testid":"chat-composer-input",placeholder:"Describe what you want to create...",value:s,onChange:j=>{i(j),a(e.id,{text:j})},onSubmit:()=>{Ze()},onPlainEnter:()=>{s.trim()&&(s.includes(`
`)||pe||(Le(!0),he(!0)))},onPaste:Z,minRows:2,maxRows:8})}),r.jsxs(Zb,{children:[r.jsxs(Qb,{children:[r.jsx(fe,{ref:ue,variant:"default",size:"xs",icon:"Settings",title:"Change model","data-testid":"model-selector-button",style:{width:28,height:28,padding:0},onClick:()=>S(!0)}),r.jsx(_t,{icon:"Attachment",size:28,variant:"default",disabled:te,title:te?Wt:"Attach file",onClick:Ne}),r.jsx(_t,{icon:se.finalizing?"DotsHorizontalSmall":"Voice",size:28,variant:"default",active:se.listening,disabled:se.finalizing,title:se.finalizing?"Finishing…":se.listening?"Stop voice input (tap mic or ⌘G)":"Start voice input (⌘G tap or hold)",onClick:()=>se.toggle(),"data-testid":"live-voice-mic-button"}),r.jsx("div",{ref:ce,style:{display:"inline-flex"},children:r.jsx(fe,{variant:"default",size:"xs",style:{height:28},onClick:()=>f(!0),children:"Import"})})]}),r.jsx("div",{style:{display:"flex",gap:6},children:n?r.jsxs(r.Fragment,{children:[r.jsx(_t,{icon:"PaperPlane",size:28,variant:"primary",title:"Send",onClick:Ze,disabled:!s.trim()&&e.composer.attachments.length===0}),r.jsx(_t,{icon:"Stop",size:28,variant:"default",title:"Stop",onClick:()=>G.interruptAgent(e.id)})]}):r.jsx(fe,{variant:"primary",size:"sm",icon:"PaperPlane",onClick:Ze,disabled:!s.trim()&&e.composer.attachments.length===0,"data-testid":"chat-send-button",children:"Send"})})]})]}),r.jsx(An,{open:p,onClose:()=>f(!1),anchorEl:ce.current,modalOnMobile:!0,items:ye}),r.jsx(tb,{open:b,onClose:()=>m(!1),anchorEl:ce.current}),q.modal,r.jsx(_o,{open:we,onClose:()=>ie(!1)}),r.jsx(rb,{open:c,onClose:()=>d(!1),onAttach:nt}),r.jsx(xb,{open:y,onClose:()=>g(!1),onAttach:j=>u(e.id,[j])}),!1,r.jsx(An,{open:w,onClose:wt,anchorEl:ue.current,modalOnMobile:!0,header:jt,items:Ct}),se.listening&&r.jsx(jb,{})]})}const ny="omelette:enter-hint-seen",el="omelette:cached-default-model",ry=[];function sy({chatId:e}){const s=l.useSyncExternalStore(cf,df,()=>ry).find(o=>o.viewportKey===`${e}::verifier`),[i,n]=l.useState(!0);return l.useEffect(()=>{if(s){const o=setTimeout(()=>n(!1),50);return()=>clearTimeout(o)}n(!0)},[s]),s?r.jsxs(iy,{children:[r.jsx(oy,{children:s.label}),r.jsxs(ay,{children:[r.jsx(cy,{children:r.jsx(mm,{hidden:i,scrollFromBottom:0,children:r.jsx(Ad,{viewportKey:s.viewportKey,visible:!0})})}),r.jsx(ly,{children:r.jsx(_t,{icon:"X",size:20,variant:"ghost",title:"Stop verifier",onClick:()=>uf(s.viewportKey)})})]})]}):null}const iy=x.div`
  margin: 12px 20px;
`,oy=x.div`
  font-size: 12px;
  color: ${h.text.tertiary};
  margin-bottom: 6px;
`,ay=x.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 10px 10px;
  background: ${Ks.bg};
  border: 0.5px solid ${Ks.border};
  border-radius: ${Ks.radius}px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`,ly=x.div`
  position: absolute;
  top: 6px;
  right: 6px;
`,cy=x.div`
  width: 128px;
  flex-shrink: 0;
`,ei=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 32px 24px;
  text-align: center;
`,ti=x.div`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 21px;
  font-weight: 380;
  letter-spacing: -0.2px;
  color: ${h.text.primary};
  margin-bottom: 5px;
`,tl=x.div`
  font-size: 11.5px;
  color: ${h.text.tertiary};
  line-height: 1.5;
  margin-bottom: 18px;
`,nl=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,dy={reference:{fg:"#FAF2EF",bg:"#C6613F"},screenshot:{fg:"#EFF1EC",bg:"#5F7348"},codebase:{fg:"#EEF3F8",bg:"#4A7DAE"},figma:{fg:"#F8F0F3",bg:"#A64F6C"}},uy="0 1px 2px rgba(20, 20, 19, 0.04)",py="0 1px 3px rgba(20, 20, 19, 0.06), 0 1px 2px rgba(20, 20, 19, 0.04)",fy=x.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 8px 12px 8px 8px;
  border-radius: 20px;
  border: 1px solid ${h.border.default};
  background: ${h.bg.surface};
  box-shadow: ${uy};
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: all 0.12s ease;
  font: inherit;
  text-align: left;

  ${e=>e.$clickable&&`
    &:hover {
      background: ${h.bg.muted};
      box-shadow: ${py};
      transform: translateY(-1px);
    }
  `}
`,hy=x.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>e.$bg};
  color: ${e=>e.$fg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,gy=x.span`
  font-size: 12.5px;
  font-weight: 500;
  color: ${h.text.primary};
  flex: 1;
`,my=x.span`
  width: 20px;
  height: 20px;
  margin: -4px -4px -4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${h.text.tertiary};
  &:hover {
    background: ${h.bg.active};
    color: ${h.text.primary};
  }
`;function an({hue:e,icon:t,label:s,onClick:i,trailing:n,onHelpClick:o}){const a=dy[e];return r.jsxs(fy,{$clickable:!!i,onClick:i,type:"button",children:[r.jsx(hy,{$bg:a.bg,$fg:a.fg,children:r.jsx(Ue,{name:t,size:14,bold:!0})}),r.jsx(gy,{children:s}),n&&r.jsx(Ue,{name:n,size:12,style:{color:h.text.tertiary}}),o&&r.jsx(my,{role:"button","aria-label":"Help",onClick:c=>{c.stopPropagation(),o()},children:r.jsx(Ue,{name:"Help",size:14})})]})}const rr=e=>window.dispatchEvent(new CustomEvent(e));function xy({templateIntro:e,activeSkills:t}){const s=t?.includes("Make a deck"),i=gt("omelette_au_jambon").on,n=gt("omelette_aux_fines_herbes").on,[o,a]=l.useState(!1);return e?r.jsxs(ei,{style:{alignItems:"flex-start",textAlign:"left"},children:[r.jsx(ti,{style:{fontFamily:"inherit",fontSize:13,fontWeight:600,letterSpacing:0},children:e.name}),r.jsx("span",{style:{fontSize:12,color:h.text.secondary,maxWidth:320,lineHeight:1.5},children:e.msg})]}):s?r.jsxs(ei,{children:[r.jsx(ti,{children:"What's the presentation about?"}),r.jsx(tl,{children:"Upload a doc, share your notes, or an existing presentation to start from."}),r.jsxs(nl,{children:[r.jsx(an,{hue:"screenshot",icon:"File",label:"Upload a doc",onClick:()=>rr("empty-state:screenshot")}),r.jsx(an,{hue:"codebase",icon:"Edit",label:"Paste your notes",trailing:"ArrowDown"}),r.jsx(an,{hue:"reference",icon:"Slides",label:"Existing deck",onClick:()=>rr("empty-state:screenshot")})]})]}):r.jsxs(ei,{children:[r.jsx(ti,{children:"Start with context"}),r.jsx(tl,{children:"Designs grounded in real context turn out better."}),r.jsxs(nl,{children:[r.jsx(an,{hue:"reference",icon:"Library",label:"Design System",onClick:()=>rr("empty-state:design-system")}),r.jsx(an,{hue:"screenshot",icon:"Image",label:"Add screenshot",onClick:()=>rr("empty-state:screenshot")}),qt&&r.jsx(an,{hue:"codebase",icon:"CodeBlock",label:"Attach codebase",onClick:()=>rr("empty-state:codebase")}),i&&r.jsx(an,{hue:"figma",icon:"Link",label:"Paste Figma link",trailing:"ArrowDown"}),n&&!i&&r.jsx(an,{hue:"figma",icon:"File",label:"Drag in a Figma file",onHelpClick:()=>a(!0)})]}),r.jsx(_o,{open:o,onClose:()=>a(!1)})]})}function Oo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ln=Oo();function zd(e){Ln=e}var Cn={exec:()=>null};function it(e,t=""){let s=typeof e=="string"?e:e.source,i={replace:(n,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Lt.caret,"$1"),s=s.replace(n,a),i},getRegex:()=>new RegExp(s,t)};return i}var by=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Lt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},yy=/^(?:[ \t]*(?:\n|$))+/,wy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Or=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ky=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Nd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Bd=it(Nd).replace(/bull/g,Fo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Sy=it(Nd).replace(/bull/g,Fo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Io=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Cy=/^[^\n]+/,zo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_y=it(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",zo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$y=it(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Fo).getRegex(),Bs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",No=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ey=it("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",No).replace("tag",Bs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hd=it(Io).replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex(),Ty=it(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hd).getRegex(),Bo={blockquote:Ty,code:wy,def:_y,fences:vy,heading:ky,hr:Or,html:Ey,lheading:Bd,list:$y,newline:yy,paragraph:Hd,table:Cn,text:Cy},rl=it("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex(),jy={...Bo,lheading:Sy,table:rl,paragraph:it(Io).replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex()},Ry={...Bo,html:it(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",No).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Cn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:it(Io).replace("hr",Or).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Bd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ay=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dy=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ud=/^( {2,}|\\)\n(?!\s*$)/,My=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Hs=/[\p{P}\p{S}]/u,Ho=/[\s\p{P}\p{S}]/u,Wd=/[^\s\p{P}\p{S}]/u,Ly=it(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ho).getRegex(),Gd=/(?!~)[\p{P}\p{S}]/u,Py=/(?!~)[\s\p{P}\p{S}]/u,Oy=/(?:[^\s\p{P}\p{S}]|~)/u,Jd=/(?![*_])[\p{P}\p{S}]/u,Fy=/(?![*_])[\s\p{P}\p{S}]/u,Iy=/(?:[^\s\p{P}\p{S}]|[*_])/u,zy=it(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",by?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Kd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ny=it(Kd,"u").replace(/punct/g,Hs).getRegex(),By=it(Kd,"u").replace(/punct/g,Gd).getRegex(),Xd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Hy=it(Xd,"gu").replace(/notPunctSpace/g,Wd).replace(/punctSpace/g,Ho).replace(/punct/g,Hs).getRegex(),Uy=it(Xd,"gu").replace(/notPunctSpace/g,Oy).replace(/punctSpace/g,Py).replace(/punct/g,Gd).getRegex(),Wy=it("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Wd).replace(/punctSpace/g,Ho).replace(/punct/g,Hs).getRegex(),Gy=it(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Jd).getRegex(),Jy="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Ky=it(Jy,"gu").replace(/notPunctSpace/g,Iy).replace(/punctSpace/g,Fy).replace(/punct/g,Jd).getRegex(),Xy=it(/\\(punct)/,"gu").replace(/punct/g,Hs).getRegex(),qy=it(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vy=it(No).replace("(?:-->|$)","-->").getRegex(),Yy=it("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ks=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Zy=it(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ks).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qd=it(/^!?\[(label)\]\[(ref)\]/).replace("label",ks).replace("ref",zo).getRegex(),Vd=it(/^!?\[(ref)\](?:\[\])?/).replace("ref",zo).getRegex(),Qy=it("reflink|nolink(?!\\()","g").replace("reflink",qd).replace("nolink",Vd).getRegex(),sl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Uo={_backpedal:Cn,anyPunctuation:Xy,autolink:qy,blockSkip:zy,br:Ud,code:Dy,del:Cn,delLDelim:Cn,delRDelim:Cn,emStrongLDelim:Ny,emStrongRDelimAst:Hy,emStrongRDelimUnd:Wy,escape:Ay,link:Zy,nolink:Vd,punctuation:Ly,reflink:qd,reflinkSearch:Qy,tag:Yy,text:My,url:Cn},e0={...Uo,link:it(/^!?\[(label)\]\((.*?)\)/).replace("label",ks).getRegex(),reflink:it(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ks).getRegex()},Ni={...Uo,emStrongRDelimAst:Uy,emStrongLDelim:By,delLDelim:Gy,delRDelim:Ky,url:it(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:it(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sl).getRegex()},t0={...Ni,br:it(Ud).replace("{2,}","*").getRegex(),text:it(Ni.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Jr={normal:Bo,gfm:jy,pedantic:Ry},sr={normal:Uo,gfm:Ni,breaks:t0,pedantic:e0},n0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},il=e=>n0[e];function Jt(e,t){if(t){if(Lt.escapeTest.test(e))return e.replace(Lt.escapeReplace,il)}else if(Lt.escapeTestNoEncode.test(e))return e.replace(Lt.escapeReplaceNoEncode,il);return e}function ol(e){try{e=encodeURI(e).replace(Lt.percentDecode,"%")}catch{return null}return e}function al(e,t){let s=e.replace(Lt.findPipe,(o,a,c)=>{let d=!1,u=a;for(;--u>=0&&c[u]==="\\";)d=!d;return d?"|":" |"}),i=s.split(Lt.splitPipe),n=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(Lt.slashPipe,"|");return i}function ir(e,t,s){let i=e.length;if(i===0)return"";let n=0;for(;n<i&&e.charAt(i-n-1)===t;)n++;return e.slice(0,i-n)}function r0(e,t){if(e.indexOf(t[1])===-1)return-1;let s=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])s++;else if(e[i]===t[1]&&(s--,s<0))return i;return s>0?-2:-1}function s0(e,t=0){let s=t,i="";for(let n of e)if(n==="	"){let o=4-s%4;i+=" ".repeat(o),s+=o}else i+=n,s++;return i}function ll(e,t,s,i,n){let o=t.href,a=t.title||null,c=e[1].replace(n.other.outputLinkReplace,"$1");i.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:s,href:o,title:a,text:c,tokens:i.inlineTokens(c)};return i.state.inLink=!1,d}function i0(e,t,s){let i=e.match(s.other.indentCodeCompensation);if(i===null)return t;let n=i[1];return t.split(`
`).map(o=>{let a=o.match(s.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=n.length?o.slice(n.length):o}).join(`
`)}var Ss=class{options;rules;lexer;constructor(e){this.options=e||Ln}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let s=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ir(s,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let s=t[0],i=i0(s,t[3]||"",this.rules);return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(this.rules.other.endingHash.test(s)){let i=ir(s,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(s=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ir(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let s=ir(t[0],`
`).split(`
`),i="",n="",o=[];for(;s.length>0;){let a=!1,c=[],d;for(d=0;d<s.length;d++)if(this.rules.other.blockquoteStart.test(s[d]))c.push(s[d]),a=!0;else if(!a)c.push(s[d]);else break;s=s.slice(d);let u=c.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,n=n?`${n}
${p}`:p;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=f,s.length===0)break;let b=o.at(-1);if(b?.type==="code")break;if(b?.type==="blockquote"){let m=b,y=m.raw+`
`+s.join(`
`),g=this.blockquote(y);o[o.length-1]=g,i=i.substring(0,i.length-m.raw.length)+g.raw,n=n.substring(0,n.length-m.text.length)+g.text;break}else if(b?.type==="list"){let m=b,y=m.raw+`
`+s.join(`
`),g=this.list(y);o[o.length-1]=g,i=i.substring(0,i.length-b.raw.length)+g.raw,n=n.substring(0,n.length-m.raw.length)+g.raw,s=y.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),i=s.length>1,n={type:"list",raw:"",ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]};s=i?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=i?s:"[*+-]");let o=this.rules.other.listItemRegex(s),a=!1;for(;e;){let d=!1,u="",p="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=s0(t[2].split(`
`,1)[0],t[1].length),b=e.split(`
`,1)[0],m=!f.trim(),y=0;if(this.options.pedantic?(y=2,p=f.trimStart()):m?y=t[1].length+1:(y=f.search(this.rules.other.nonSpaceChar),y=y>4?1:y,p=f.slice(y),y+=t[1].length),m&&this.rules.other.blankLine.test(b)&&(u+=b+`
`,e=e.substring(b.length+1),d=!0),!d){let g=this.rules.other.nextBulletRegex(y),C=this.rules.other.hrRegex(y),v=this.rules.other.fencesBeginRegex(y),w=this.rules.other.headingBeginRegex(y),S=this.rules.other.htmlBeginRegex(y),k=this.rules.other.blockquoteBeginRegex(y);for(;e;){let E=e.split(`
`,1)[0],T;if(b=E,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),T=b):T=b.replace(this.rules.other.tabCharGlobal,"    "),v.test(b)||w.test(b)||S.test(b)||k.test(b)||g.test(b)||C.test(b))break;if(T.search(this.rules.other.nonSpaceChar)>=y||!b.trim())p+=`
`+T.slice(y);else{if(m||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||v.test(f)||w.test(f)||C.test(f))break;p+=`
`+b}m=!b.trim(),u+=E+`
`,e=e.substring(E.length+1),f=T.slice(y)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),n.raw+=u}let c=n.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let d of n.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(d.raw);if(u){let p={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};d.checked=p.checked,n.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=p.raw+d.tokens[0].raw,d.tokens[0].text=p.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(p)):d.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):d.tokens.unshift(p)}}if(!n.loose){let u=d.tokens.filter(f=>f.type==="space"),p=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));n.loose=p}}if(n.loose)for(let d of n.items){d.loose=!0;for(let u of d.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let s=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:i,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let s=al(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<s.length;a++)o.header.push({text:s[a],tokens:this.lexer.inline(s[a]),header:!0,align:o.align[a]});for(let a of n)o.rows.push(al(a,o.header.length).map((c,d)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[d]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let o=ir(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{let o=r0(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],n=o[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),ll(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[i.toLowerCase()];if(!n){let o=s[0].charAt(0);return{type:"text",raw:o,text:o}}return ll(s,n,s[0],this.lexer,this.rules)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!(!i||i[3]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,c=n,d=0,u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+n);(i=u.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(a=[...o].length,i[3]||i[4]){c+=a;continue}else if((i[5]||i[6])&&n%3&&!((n+a)%3)){d+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+d);let p=[...i[0]][0].length,f=e.slice(0,n+i.index+p+a);if(Math.min(n,a)%2){let m=f.slice(1,-1);return{type:"em",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}let b=f.slice(2,-2);return{type:"strong",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(s),n=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return i&&n&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:t[0],text:s}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,s=""){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!s||this.rules.inline.punctuation.exec(s))){let n=[...i[0]].length-1,o,a,c=n,d=this.rules.inline.delRDelim;for(d.lastIndex=0,t=t.slice(-1*e.length+n);(i=d.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(a=[...o].length,a!==n))continue;if(i[3]||i[4]){c+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c);let u=[...i[0]][0].length,p=e.slice(0,n+i.index+u+a),f=p.slice(n,-n);return{type:"del",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let s,i;return t[2]==="@"?(s=t[1],i="mailto:"+s):(s=t[1],i=s),{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=t[0],i="mailto:"+s;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);s=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let s=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:s}}}},Ht=class Bi{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ln,this.options.tokenizer=this.options.tokenizer||new Ss,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:Lt,block:Jr.normal,inline:sr.normal};this.options.pedantic?(s.block=Jr.pedantic,s.inline=sr.pedantic):this.options.gfm&&(s.block=Jr.gfm,this.options.breaks?s.inline=sr.breaks:s.inline=sr.gfm),this.tokenizer.rules=s}static get rules(){return{block:Jr,inline:sr}}static lex(t,s){return new Bi(s).lex(t)}static lexInline(t,s){return new Bi(s).inlineTokens(t)}lex(t){t=t.replace(Lt.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let i=this.inlineQueue[s];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,s=[],i=!1){for(this.options.pedantic&&(t=t.replace(Lt.tabCharGlobal,"    ").replace(Lt.spaceLine,""));t;){let n;if(this.options.extensions?.block?.some(a=>(n=a.call({lexer:this},t,s))?(t=t.substring(n.raw.length),s.push(n),!0):!1))continue;if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length);let a=s.at(-1);n.raw.length===1&&a!==void 0?a.raw+=`
`:s.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length);let a=s.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.at(-1).src=a.text):s.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length);let a=s.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title},s.push(n));continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),s.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),s.push(n);continue}let o=t;if(this.options.extensions?.startBlock){let a=1/0,c=t.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},c),typeof d=="number"&&d>=0&&(a=Math.min(a,d))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){let a=s.at(-1);i&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):s.push(n),i=o.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length);let a=s.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):s.push(n);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent)break;throw new Error(a)}}return this.state.top=!0,s}inline(t,s=[]){return this.inlineQueue.push({src:t,tokens:s}),s}inlineTokens(t,s=[]){let i=t,n=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,n.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)o=n[2]?n[2].length:0,i=i.slice(0,n.index+o)+"["+"a".repeat(n[0].length-o-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,c="";for(;t;){a||(c=""),a=!1;let d;if(this.options.extensions?.inline?.some(p=>(d=p.call({lexer:this},t,s))?(t=t.substring(d.raw.length),s.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let p=s.at(-1);d.type==="text"&&p?.type==="text"?(p.raw+=d.raw,p.text+=d.text):s.push(d);continue}if(d=this.tokenizer.emStrong(t,i,c)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.del(t,i,c)){t=t.substring(d.raw.length),s.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),s.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),s.push(d);continue}let u=t;if(this.options.extensions?.startInline){let p=1/0,f=t.slice(1),b;this.options.extensions.startInline.forEach(m=>{b=m.call({lexer:this},f),typeof b=="number"&&b>=0&&(p=Math.min(p,b))}),p<1/0&&p>=0&&(u=t.substring(0,p+1))}if(d=this.tokenizer.inlineText(u)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(c=d.raw.slice(-1)),a=!0;let p=s.at(-1);p?.type==="text"?(p.raw+=d.raw,p.text+=d.text):s.push(d);continue}if(t){let p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent)break;throw new Error(p)}}return s}},Cs=class{options;parser;constructor(e){this.options=e||Ln}space(e){return""}code({text:e,lang:t,escaped:s}){let i=(t||"").match(Lt.notSpaceStart)?.[0],n=e.replace(Lt.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Jt(i)+'">'+(s?n:Jt(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Jt(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,s=e.start,i="";for(let a=0;a<e.items.length;a++){let c=e.items[a];i+=this.listitem(c)}let n=t?"ol":"ul",o=t&&s!==1?' start="'+s+'"':"";return"<"+n+o+`>
`+i+"</"+n+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",s="";for(let n=0;n<e.header.length;n++)s+=this.tablecell(e.header[n]);t+=this.tablerow({text:s});let i="";for(let n=0;n<e.rows.length;n++){let o=e.rows[n];s="";for(let a=0;a<o.length;a++)s+=this.tablecell(o[a]);i+=this.tablerow({text:s})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),s=e.header?"th":"td";return(e.align?`<${s} align="${e.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Jt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:s}){let i=this.parser.parseInline(s),n=ol(e);if(n===null)return i;e=n;let o='<a href="'+e+'"';return t&&(o+=' title="'+Jt(t)+'"'),o+=">"+i+"</a>",o}image({href:e,title:t,text:s,tokens:i}){i&&(s=this.parser.parseInline(i,this.parser.textRenderer));let n=ol(e);if(n===null)return Jt(s);e=n;let o=`<img src="${e}" alt="${Jt(s)}"`;return t&&(o+=` title="${Jt(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Jt(e.text)}},Wo=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ut=class Hi{options;renderer;textRenderer;constructor(t){this.options=t||Ln,this.options.renderer=this.options.renderer||new Cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wo}static parse(t,s){return new Hi(s).parse(t)}static parseInline(t,s){return new Hi(s).parseInline(t)}parse(t){let s="";for(let i=0;i<t.length;i++){let n=t[i];if(this.options.extensions?.renderers?.[n.type]){let a=n,c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){s+=c||"";continue}}let o=n;switch(o.type){case"space":{s+=this.renderer.space(o);break}case"hr":{s+=this.renderer.hr(o);break}case"heading":{s+=this.renderer.heading(o);break}case"code":{s+=this.renderer.code(o);break}case"table":{s+=this.renderer.table(o);break}case"blockquote":{s+=this.renderer.blockquote(o);break}case"list":{s+=this.renderer.list(o);break}case"checkbox":{s+=this.renderer.checkbox(o);break}case"html":{s+=this.renderer.html(o);break}case"def":{s+=this.renderer.def(o);break}case"paragraph":{s+=this.renderer.paragraph(o);break}case"text":{s+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw new Error(a)}}}return s}parseInline(t,s=this.renderer){let i="";for(let n=0;n<t.length;n++){let o=t[n];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=c||"";continue}}let a=o;switch(a.type){case"escape":{i+=s.text(a);break}case"html":{i+=s.html(a);break}case"link":{i+=s.link(a);break}case"image":{i+=s.image(a);break}case"checkbox":{i+=s.checkbox(a);break}case"strong":{i+=s.strong(a);break}case"em":{i+=s.em(a);break}case"codespan":{i+=s.codespan(a);break}case"br":{i+=s.br(a);break}case"del":{i+=s.del(a);break}case"text":{i+=s.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return"";throw new Error(c)}}}return i}},hr=class{options;block;constructor(e){this.options=e||Ln}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Ht.lex:Ht.lexInline}provideParser(){return this.block?Ut.parse:Ut.parseInline}},Yd=class{defaults=Oo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ut;Renderer=Cs;TextRenderer=Wo;Lexer=Ht;Tokenizer=Ss;Hooks=hr;constructor(...e){this.use(...e)}walkTokens(e,t){let s=[];for(let i of e)switch(s=s.concat(t.call(this,i)),i.type){case"table":{let n=i;for(let o of n.header)s=s.concat(this.walkTokens(o.tokens,t));for(let o of n.rows)for(let a of o)s=s.concat(this.walkTokens(a.tokens,t));break}case"list":{let n=i;s=s.concat(this.walkTokens(n.items,t));break}default:{let n=i;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(o=>{let a=n[o].flat(1/0);s=s.concat(this.walkTokens(a,t))}):n.tokens&&(s=s.concat(this.walkTokens(n.tokens,t)))}}return s}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{let i={...s};if(i.async=this.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let o=t.renderers[n.name];o?t.renderers[n.name]=function(...a){let c=n.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[n.level];o?o.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),i.extensions=t),s.renderer){let n=this.defaults.renderer||new Cs(this.defaults);for(let o in s.renderer){if(!(o in n))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=s.renderer[a],d=n[a];n[a]=(...u)=>{let p=c.apply(n,u);return p===!1&&(p=d.apply(n,u)),p||""}}i.renderer=n}if(s.tokenizer){let n=this.defaults.tokenizer||new Ss(this.defaults);for(let o in s.tokenizer){if(!(o in n))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=s.tokenizer[a],d=n[a];n[a]=(...u)=>{let p=c.apply(n,u);return p===!1&&(p=d.apply(n,u)),p}}i.tokenizer=n}if(s.hooks){let n=this.defaults.hooks||new hr;for(let o in s.hooks){if(!(o in n))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=s.hooks[a],d=n[a];hr.passThroughHooks.has(o)?n[a]=u=>{if(this.defaults.async&&hr.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await c.call(n,u);return d.call(n,f)})();let p=c.call(n,u);return d.call(n,p)}:n[a]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await c.apply(n,u);return f===!1&&(f=await d.apply(n,u)),f})();let p=c.apply(n,u);return p===!1&&(p=d.apply(n,u)),p}}i.hooks=n}if(s.walkTokens){let n=this.defaults.walkTokens,o=s.walkTokens;i.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),n&&(c=c.concat(n.call(this,a))),c}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ht.lex(e,t??this.defaults)}parser(e,t){return Ut.parse(e,t??this.defaults)}parseMarkdown(e){return(t,s)=>{let i={...s},n={...this.defaults,...i},o=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(t):t,c=await(n.hooks?await n.hooks.provideLexer():e?Ht.lex:Ht.lexInline)(a,n),d=n.hooks?await n.hooks.processAllTokens(c):c;n.walkTokens&&await Promise.all(this.walkTokens(d,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser():e?Ut.parse:Ut.parseInline)(d,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));let a=(n.hooks?n.hooks.provideLexer():e?Ht.lex:Ht.lexInline)(t,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let c=(n.hooks?n.hooks.provideParser():e?Ut.parse:Ut.parseInline)(a,n);return n.hooks&&(c=n.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+Jt(s.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(s);throw s}}},Mn=new Yd;function ut(e,t){return Mn.parse(e,t)}ut.options=ut.setOptions=function(e){return Mn.setOptions(e),ut.defaults=Mn.defaults,zd(ut.defaults),ut};ut.getDefaults=Oo;ut.defaults=Ln;ut.use=function(...e){return Mn.use(...e),ut.defaults=Mn.defaults,zd(ut.defaults),ut};ut.walkTokens=function(e,t){return Mn.walkTokens(e,t)};ut.parseInline=Mn.parseInline;ut.Parser=Ut;ut.parser=Ut.parse;ut.Renderer=Cs;ut.TextRenderer=Wo;ut.Lexer=Ht;ut.lexer=Ht.lex;ut.Tokenizer=Ss;ut.Hooks=hr;ut.parse=ut;ut.options;ut.setOptions;ut.use;ut.walkTokens;ut.parseInline;Ut.parse;Ht.lex;const cl=x.div`
  &:last-child {
    margin-bottom: 0;
  }
`,dl=x.div`
  font-size: 12px;
  font-weight: 400;
  color: ${h.text.primary};
  margin-bottom: 4px;
`,o0=x.select`
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  padding: 5px 26px 5px 8px;
  font-size: 12px;
  font-family: inherit;
  font-weight: 400;
  background: ${e=>e.$changed?"#e8f0fa":h.bg.surface};
  border: 1px solid ${e=>e.$changed?h.accent.secondary:h.border.default};
  border-radius: 5px;
  color: ${h.text.primary};
  box-shadow: ${h.shadow.xs};
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;

  &:hover {
    border-color: ${h.border.strong};
  }
  &:focus-visible {
    border-color: ${h.accent.secondary};
    box-shadow: 0 0 0 2px ${h.accent.secondary}22;
  }
`,a0=x.input`
  width: 100%;
  padding: 5px 8px;
  font-size: 12px;
  font-family: inherit;
  background: ${h.bg.surface};
  border: 1px solid ${h.accent.secondary};
  border-radius: 5px;
  color: ${h.text.primary};
  outline: none;
  margin-top: 3px;
  box-sizing: border-box;

  &:focus {
    box-shadow: 0 0 0 2px ${h.accent.secondary}22;
  }
`,Kr="__other__";function ul(e){let t=e;return t.includes("xmlns")||(t=t.replace("<svg",'<svg xmlns="http://www.w3.org/2000/svg"')),`data:image/svg+xml,${encodeURIComponent(t)}`}const l0=x.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 5px;
  border: 2px solid ${e=>e.$changed?h.accent.secondary:h.border.default};
  background: ${h.bg.surface};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${h.accent.secondary};
  }
`,c0=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,d0=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
  gap: 6px;
  padding: 8px;
  max-width: 260px;
`,u0=x.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 5px;
  border: 2px solid ${e=>e.$selected?h.accent.secondary:h.border.default};
  background: ${e=>e.$selected?h.accent.secondary+"0a":h.bg.surface};
  cursor: pointer;

  &:hover {
    border-color: ${h.accent.secondary};
    background: ${h.accent.secondary}0a;
  }

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }
`;function p0({options:e,selectedIndex:t,changed:s,disabled:i,onSelect:n}){const[o,a]=l.useState(!1),c=l.useRef(null),d=l.useCallback(()=>{i||a(!0)},[i]),u=f=>{n(f),a(!1)},p=e[t]??"";return r.jsxs(c0,{children:[r.jsx(l0,{ref:c,src:ul(p),$changed:s,onClick:d,title:"Click to see options"}),!i&&r.jsxs("span",{style:{fontSize:11,color:h.text.tertiary,fontVariantNumeric:"tabular-nums"},children:[t+1,"/",e.length," — click to change"]}),r.jsx(Ms,{open:o,onClose:()=>a(!1),anchorEl:c.current,children:r.jsx(d0,{children:e.map((f,b)=>r.jsx(u0,{$selected:b===t,onClick:()=>u(b),children:r.jsx("img",{src:ul(f)})},b))})})]})}function f0({call:e}){const t=e.input?.questions??[];if(t.length===0)return null;const[s,i]=l.useState(()=>t.map(y=>y.options[0]??"")),[n,o]=l.useState(()=>t.map(()=>"")),[a,c]=l.useState(!1),d=Mo(),u=(y,g)=>{i(C=>{const v=[...C];return v[y]=g,v})},p=(y,g)=>{o(C=>{const v=[...C];return v[y]=g,v})},f=t.reduce((y,g,C)=>{const v=g.options[0]??"";return(s[C]===Kr?n[C]:s[C])!==v&&y.push(C),y},[]),b=f.length>0,m=()=>{const g=t.map((w,S)=>{const k=f.includes(S);if(w.isSvg){const T=w.options.indexOf(s[S]);return`- ${w.question}: Option ${(T>=0?T:0)+1}${k?" (changed)":""}`}const E=s[S]===Kr?n[S]:s[S];return`- ${w.question}: ${E}${k?" (changed)":""}`}).join(`
`),C=b?"Questions answered (with changes)":"Questions answered (defaults)",v={id:`questions-${Date.now()}`,name:"Question Answers",content:g,type:"text"};d(C,[v]),c(!0)};return r.jsxs(Ft,{icon:"Help",label:"Questions",expanded:!0,children:[r.jsx("div",{style:{height:4}}),t.map((y,g)=>{const C=s[g]===Kr,v=f.includes(g);if(y.isSvg){const w=y.options.indexOf(s[g]);return r.jsxs(cl,{style:{marginBottom:g<t.length-1?18:0},children:[r.jsx(dl,{children:y.question}),r.jsx(p0,{options:y.options,selectedIndex:w>=0?w:0,changed:v,disabled:a,onSelect:S=>u(g,y.options[S])})]},g)}return r.jsxs(cl,{style:{marginBottom:g<t.length-1?18:0},children:[r.jsx(dl,{children:y.question}),r.jsxs(o0,{$changed:v,value:s[g],onChange:w=>u(g,w.target.value),disabled:a,children:[y.options.map((w,S)=>r.jsx("option",{value:w,children:S===0?`${w} (default)`:w},S)),r.jsx("option",{value:Kr,children:"Other..."})]}),C&&r.jsx(a0,{placeholder:"Type...",value:n[g],onChange:w=>p(g,w.target.value),disabled:a,autoFocus:!0})]},g)}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:r.jsx(fe,{variant:"primary",size:"xs",icon:"PaperPlane",onClick:m,disabled:a,children:a?"Sent":"Submit"})})]})}function h0(e,t,s){const[i,n]=l.useState(e),o=l.useRef(s);o.current=s;const a=l.useRef(!1);return l.useEffect(()=>{if(a.current=!1,!t){n(e);return}n(e);const c=setInterval(()=>{n(d=>d<=1?(clearInterval(c),0):d-1)},1e3);return()=>clearInterval(c)},[t,e]),l.useEffect(()=>{t&&i===0&&!a.current&&(a.current=!0,o.current())},[t,i]),i}const g0={read_file:"Reading",write_file:"Writing",list_files:"Listing files",grep:"Searching",delete_file:"Deleting",copy_files:"Copying",str_replace_edit:"Editing",parameterized_str_replace_edit:"Editing",register_assets:"Registering assets",unregister_assets:"Unregistering assets",copy_starter_component:"Copying starter",show_html:"Showing preview",show_to_user:"Showing preview",view_image:"Viewing image",image_metadata:"Reading image metadata",get_webview_logs:"Reading logs",eval_js:"Running JS",eval_js_user_view:"Running JS",sleep:"Waiting",screenshot:"Screenshot",save_screenshot:"Screenshot",multi_screenshot:"Screenshot",screenshot_user_view:"Screenshot",start_fast_mode_project:"Start Fast Mode",fast_mode_write:"Fast Mode",run_script:"Running script",super_inline_html:"Generating HTML",open_for_print:"Opening print view",gen_pptx:"Converting to PPTX...",present_fs_item_for_download:"Preparing download",update_todos:"Updating todos",invoke_skill:"Invoking skill",local_ls:"Listing local files",local_read:"Reading local file",local_grep:"Searching locally",local_copy_to_project:"Importing file",fig_ls:"Listing Figma file",fig_read:"Reading Figma file",fig_grep:"Searching Figma file",fig_copy_files:"Importing Figma asset",fig_screenshot:"Rendering Figma frame",connect_github:"Connecting GitHub",github_list_repos:"Listing GitHub repos",github_get_tree:"Browsing GitHub repo",github_import_files:"Importing from GitHub",github_prompt_install:"Requesting GitHub access",connect_figma:"Connecting Figma",web_search:"Searching web",web_fetch:"Fetching page",snip:"Snipping",save_as_template:"Saving template"},m0=new Set(["snip"]);function Zd(e){const t=e.split("__"),s=t.length>1?t[t.length-1]:e,i=g0[s];if(i)return i;const n=s.replace(/_/g," ");return n.charAt(0).toUpperCase()+n.slice(1)}const as=x.div`
  margin-bottom: 14px;
`,ls=x.div`
  user-select: text;
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;
`,Qd=x.div`
  font-size: 13px;
  line-height: 1.6;
  color: ${h.text.secondary};
  overflow-wrap: break-word;
  word-break: break-word;

  p {
    margin: 0 0 0.75em;
    &:last-child { margin-bottom: 0; }
  }

  code {
    background: ${h.bg.muted};
    padding: 2px 5px;
    border-radius: 4px;
    font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
    font-size: 12px;
    word-break: break-all;
  }

  pre {
    background: ${h.bg.muted};
    border: 1px solid ${h.border.subtle};
    border-radius: 8px;
    padding: 12px;
    overflow-x: auto;
    margin: 0.75em 0;

    code {
      background: none;
      padding: 0;
      word-break: normal;
    }
  }

  strong, b { font-weight: 600; color: ${h.text.primary}; }
  em, i { font-style: italic; }

  h1, h2, h3, h4 {
    color: ${h.text.primary};
    font-weight: 600;
    margin: 1em 0 0.5em;
    &:first-child { margin-top: 0; }
  }
  h1 { font-size: 18px; }
  h2 { font-size: 16px; }
  h3 { font-size: 14px; }
  h4 { font-size: 13px; }

  ul, ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }
  li { margin: 0.25em 0; }

  a {
    color: ${h.accent.primary};
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  blockquote {
    border-left: 3px solid ${h.border.default};
    margin: 0.75em 0;
    padding-left: 12px;
    color: ${h.text.tertiary};
  }
`,x0=x.div`
  margin: 6px 0px;
`,pl=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 6px;
  margin-top: 8px;
`,b0=Gt`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`,y0=x.div`
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${h.border.default};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  background: linear-gradient(90deg, ${h.bg.muted} 0%, ${h.bg.surface} 40%, ${h.bg.muted} 80%);
  background-size: 400px 100%;
  animation: ${b0} 1.4s linear infinite;

  img {
    display: block;
    height: 100%;
    min-width: 40px;
    max-width: 128px;
    object-fit: cover;
  }
`,w0=64,v0=e=>e?Math.min(128,Math.max(40,Math.round(w0*e))):void 0;function fl({att:e,projectPath:t}){const s=v0(e.aspectRatio),i=n=>{const o=n.currentTarget.parentElement;o.style.animation="none",o.style.background="none"};return r.jsx(y0,{title:e.name,style:s!==void 0?{width:s}:void 0,children:r.jsx("img",{src:wo(e.path)??Ls(t,e.path),alt:e.name,style:s!==void 0?{width:"100%",maxWidth:"none"}:void 0,onLoad:i,onError:i})})}function eu(e){return!/^([a-zA-Z][a-zA-Z\d+\-.]*:|\/\/)/.test(e)}const k0=new Set(["http:","https:","mailto:"]);function S0(e){const t=e.replace(/[\x00-\x1f]/g,"").trim();if(t==="")return null;if(eu(t))return t;try{return k0.has(new URL(t).protocol)?t:null}catch{return null}}const C0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xr=e=>e.replace(/[&<>"']/g,t=>C0[t]),_0=new Yd({renderer:{html:({text:e})=>Xr(e),image:({text:e})=>Xr(e),link({href:e,title:t,tokens:s}){const i=this.parser.parseInline(s),n=S0(e);if(n===null)return i;const o=t?` title="${Xr(t)}"`:"";return`<a href="${Xr(n)}"${o}>${i}</a>`}}}),ni=new Map;let ri=0;const $0=2e6;function E0(e){const t=ni.get(e);if(t!==void 0)return t;const s=_0.parse(e,{async:!1});return ri+=e.length+s.length,ri>$0&&(ni.clear(),ri=e.length+s.length),ni.set(e,s),s}function tu(e,t){const s=E0(e),i=n=>{const o=n.target.closest("a");if(o){n.preventDefault();const a=o.getAttribute("href");a&&eu(a)&&t?(t(a),window.dispatchEvent(new CustomEvent("mobile-show-preview"))):a&&G.openExternal(o.href)}};return r.jsx("div",{dangerouslySetInnerHTML:{__html:s},onClick:i})}function Us(e){const t=e.split("__");return t.length>1?t[t.length-1]:e}function T0(e){const t=Zd(e.name),s=e.input||{},i=s.file_path||s.path||s.filePath;if(i){const a=String(i).split("/").pop();return`${t} ${a}`}const n=s.command;if(n){const a=String(n);return`${t}: ${a.slice(0,80)}${a.length>80?"...":""}`}const o=Object.values(s).find(a=>typeof a=="string"&&a.length>0);if(o){const a=String(o),c=a.slice(0,80)+(a.length>80?"...":"");return`${t}: ${c}`}return t}function nu(e){return e==="thinking"||e.split("__").pop()==="thinking"}function j0({items:e}){const[t,s]=l.useState(!1);if(!e||e.length===0)return null;const i={};for(const c of e){const d=c.kind==="thinking"?"Thinking":Zd(c.call.name);i[d]=(i[d]||0)+1}const n=Object.entries(i).map(([c,d])=>d>1?`${c} ×${d}`:c).join(", "),o=e.some(c=>c.kind==="thinking"),a=e.flatMap(c=>c.kind==="call"?[c.call]:[]);return a.length===0?r.jsx(Ft,{icon:"ExtendedThinking",label:n}):r.jsx(Ft,{icon:o?"ExtendedThinking":"Lightning",label:n,actionIcon:"CaretDown",onClick:()=>s(c=>!c),expanded:t,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:1},children:a.map((c,d)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontSize:12,color:h.text.secondary},children:[r.jsx("span",{style:{width:4,height:4,borderRadius:"50%",flexShrink:0,background:h.text.disabled}}),T0(c)]},d))})})}function R0({call:e}){const{openFile:t}=vt(),s=e.input||{},i=String(s.path||""),n=i.split("/").pop()||i,o=()=>{t(i),window.dispatchEvent(new CustomEvent("mobile-show-preview"))};return r.jsx(Ft,{icon:"File",label:n,actionIcon:"ArrowOutSquare",onClick:o})}const ru="present_fs_item_for_download";function A0(e,t,s){if(s==="canva_fallback")return"canva_fallback_download";const i=e.toLowerCase(),n=t.toLowerCase();return i.endsWith(".pdf")||i.endsWith("-print.html")||n.includes("pdf")?"pdf_download":i.endsWith(".html")||n.includes("html")||n.includes("standalone")?"html_download":i.endsWith(".pptx")||n.includes("pptx")||n.includes("powerpoint")?"pptx_download":"agent_download"}function D0({call:e}){const{projectPath:t}=vt(),[s,i]=l.useState(!1),n=e.input||{},o=String(n.path||""),a=String(n.origin||""),c=String(n.label||"")||o&&o.split("/").pop()||"Project",d=async()=>{if(!s){i(!0);try{const u=o?`?path=${encodeURIComponent(o)}`:"",p=As(),f={};p&&(f[Ds]=p);const b=await fetch(`/design/v1/design/projects/${t}/download${u}`,{headers:f});if(!b.ok)throw new Error("Download failed");const m=await b.blob(),y=URL.createObjectURL(m),g=document.createElement("a");g.href=y;const v=b.headers.get("content-disposition")?.match(/filename="?([^"]+)"?/);g.download=v?.[1]||`${c}.zip`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(y);const w=A0(o,c,a),S=o.includes(".")?o.split(".").pop().toLowerCase():"",k=w==="pdf_download"?"pdf":S;G.trackEvent(w,{ext:k})}catch{}finally{i(!1)}}};return r.jsx(Ft,{icon:"Download",label:s?"Downloading...":`Download ${c}`,variant:"dark",onClick:d})}const su=l.createContext(null),Go=l.createContext({isDisabled:()=>!0,onFired:()=>{},onDismiss:()=>{}});function iu(e){return e==="update_todos"}function M0({call:e}){const[t,s]=l.useState(!0),i=l.useContext(su),n=i==null||e.id===i,o=e.input?.operations??[],a=e.input?.todos??[];let c,d;if(o.length>0){const u={add:"+",complete:"✓",remove:"×"};d=o.map((p,f)=>({key:String(f),label:`${u[p.type]??"?"} ${p.name??`#${p.id}`}`,completed:p.type==="complete",inProgress:!1})),c="Updated todos"}else if(a.length>0)d=a.map((p,f)=>({key:String(f),label:p.name??"",completed:p.completed===!0,inProgress:!1})),c=`Progress ${d.filter(p=>p.completed).length}/${d.length}`;else return null;return r.jsx(Ft,{icon:"Checklist",label:c,actionIcon:n?"CaretDown":void 0,onClick:n?()=>s(u=>!u):void 0,expanded:n&&t,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2},children:d.map(u=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:400,padding:"4px 0",color:u.completed?h.text.disabled:h.text.secondary,textDecoration:u.completed?"line-through":"none"},children:[r.jsx("span",{style:{width:11,height:11,borderRadius:3,flexShrink:0,border:`1.5px solid ${u.completed?"#788C5D":u.inProgress?"#D97757":"#C2C0B6"}`,background:u.completed?"#788C5D":u.inProgress?"#D97757":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"white",lineHeight:1},children:u.completed&&"✓"}),u.label]},u.key))})})}function L0(){return r.jsx(Ft,{icon:"ExtendedThinking",label:"Thinking"})}function P0({call:e}){const[t,s]=l.useState(!1),i=String(e.input?.plan??"");return r.jsx(Ft,{icon:"Signpost",label:"Plan",actionIcon:"CaretDown",onClick:()=>s(n=>!n),expanded:t,children:r.jsx("div",{style:{fontSize:12,color:h.text.tertiary,lineHeight:1.5,whiteSpace:"pre-wrap",fontStyle:"italic"},children:i})})}function O0({content:e}){const[t,s]=l.useState(!1),i=/^Apply (\d+) direct edits:/.exec(e),n=i?`Apply ${i[1]} direct edits`:"Apply direct edit";return r.jsx(Ft,{icon:"Edit",label:n,actionIcon:"CaretDown",onClick:()=>s(o=>!o),expanded:t,children:r.jsx("div",{style:{fontSize:12,color:h.text.tertiary,lineHeight:1.5,whiteSpace:"pre-wrap"},children:e.trim()})})}const F0="repeating-conic-gradient(#e5e5e5 0% 25%, #fff 0% 50%) 0 / 10px 10px",I0=x.button`
  position: relative;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  padding: 0;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  border: 2px solid ${e=>e.$selected?h.text.primary:"transparent"};
  outline-offset: 1px;
  background: ${F0};
  overflow: hidden;
  flex-shrink: 0;
  opacity: ${e=>e.$disabled?.5:1};

  &:hover { border-color: ${e=>e.$disabled?e.$selected?h.text.primary:"transparent":h.text.primary}; }
  &:focus-visible { outline: 2px solid ${h.accent.primary}; }
`;function z0({options:e,value:t,disabled:s,onChange:i}){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[e.map((n,o)=>r.jsx(I0,{type:"button",$selected:t===n,$disabled:s,disabled:s,title:o===0?`${n} (default)`:n,onClick:()=>i(n),children:r.jsx("span",{style:{position:"absolute",inset:0,background:n}})},o)),r.jsx("span",{style:{fontSize:11,color:h.text.tertiary,marginLeft:4,fontFamily:"'SF Mono', Menlo, monospace"},children:t})]})}function N0({call:e}){const t=e.parameterizedEdit;return!t||t.params.length===0?null:e.output?.startsWith("Error:")?r.jsx(Ft,{icon:"Warning",label:e.output,wrapLabel:!0}):r.jsx(B0,{call:e,state:t})}function B0({call:e,state:t}){const{projectPath:s,updateParameterizedEdit:i,flush:n}=vt(),o=nn(),a=Mo(),{showToast:c}=bt(),d=o?.streaming?.isLoading??!1,[u,p]=l.useState(()=>t.params.map((v,w)=>t.values?.[w]??v.options[0]??"")),[f,b]=l.useState(!1),m=hf(t.template,t.params,u),y=m!==t.lastApplied,g=d||f,C=async()=>{if(!(!o||g||!y)){b(!0);try{await n();try{await at().editFile({projectId:s,path:t.path,edits:[{oldString:t.lastApplied,newString:m}]})}catch(k){Tt(k,"apply parameterized edit"),c("Couldn’t apply edit. Please try again.","error");return}i(o.id,e.id,m,u);const v=Uc(o.id);v&&window.dispatchEvent(new CustomEvent("agent-show-file",{detail:{filePath:v,viewportKey:o.id,target:"user"}}));const w=t.params.map((k,E)=>`${k.name} = ${u[E]}`).join(", "),S={id:`param-edit-${e.id}-${Date.now()}`,name:"Parameter change",type:"param-edit",content:`User re-saved the parameterized edit in ${t.path}.
New values: ${w}
Applied string:
${m}`};a("Updated parameters",[S])}finally{b(!1)}}};return r.jsx(Ft,{icon:"Settings",label:"Edited with alternatives",expanded:!0,footer:r.jsx(fe,{variant:"ghost",size:"xs",icon:"Reload",onClick:C,disabled:g||!y,style:{fontWeight:500,fontSize:11,fontFamily:"inherit",marginBottom:-4,marginLeft:"auto"},children:f?"Saving…":"Save & reload"}),children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:t.params.map((v,w)=>{const S=k=>{const E=[...u];E[w]=k,p(E)};return r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:11,fontWeight:500,color:h.text.secondary,marginBottom:3},children:v.name}),gf(v)?r.jsx(z0,{options:v.options,value:u[w],disabled:g,onChange:S}):r.jsx("select",{value:u[w],disabled:g,onChange:k=>S(k.target.value),style:{width:"100%",fontSize:12,padding:"4px 6px",border:`1px solid ${h.border.default}`,borderRadius:5,background:g?h.bg.muted:h.bg.surface,fontFamily:"inherit",color:h.text.primary,cursor:g?"not-allowed":"pointer"},children:v.options.map((k,E)=>r.jsx("option",{value:k,children:E===0?`${k} (default)`:k},E))})]},w)})})})}const ou={fontWeight:500,fontSize:11,fontFamily:"inherit",marginBottom:-4};function Bn({icon:e,onClick:t,children:s}){return r.jsx(fe,{variant:"ghost",size:"xs",icon:e,onClick:t,style:ou,children:s})}function H0({onRetry:e,onDismissed:t}){const{isDisabled:s,onFired:i,onDismiss:n}=l.useContext(Go),[,o]=l.useState(0),a=$t.useRef(!1),c=s(),d=()=>{a.current||(a.current=!0,i(),e())},u=$t.useRef(ca+Math.floor(Math.random()*(ca-1))).current,p=h0(u,!c,d);return c?r.jsx(Bn,{icon:"Reload",onClick:e,children:"Retry"}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,width:"100%"},children:[r.jsxs("span",{style:{fontSize:11,color:h.text.tertiary,flex:1,paddingLeft:6},children:["Retrying in ",p,"s…"]}),r.jsx(fe,{variant:"ghost",size:"xs",onClick:d,style:ou,children:"Retry now"}),r.jsx($n,{icon:"X",size:19,iconSize:11,onClick:()=>{a.current=!0,n(),o(f=>f+1),t?.()},title:"Cancel auto-retry"})]})}function U0(e,t){const s=["omelette debug",`  error: ${e}`];return t.requestId&&s.push(`  request_id: ${t.requestId}`),t.fieldPath&&s.push(`  field_path: ${t.fieldPath}`),t.projectId&&s.push(`  project_id: ${t.projectId}`),t.chatId&&s.push(`  chat_id: ${t.chatId}`),t.timestamp&&s.push(`  time: ${t.timestamp}`),s.join(`
`)}function W0({message:e,isLatest:t,debugInfo:s}){const i=Mo(),n=nn(),{showToast:o}=bt(),a=pf(),c=()=>{n&&G.interruptAgent(n.id),i("",[],{rerun:!0})},{isDisabled:d}=l.useContext(Go),[,u]=l.useState(0),p=s?()=>{navigator.clipboard.writeText(U0(e,s)).then(()=>o("Debug info copied","info")).catch(()=>o("Copy failed","error"))}:void 0;if(!t){const g=p?r.jsx(Bn,{icon:"Copy",onClick:p,children:"Copy debug info"}):void 0;return r.jsx(Ft,{icon:"Warning",label:e,wrapLabel:!0,footer:g})}const f=/not_found_error|"not found"|^404\b/i.test(e),b=p&&(f||d())?r.jsx(Bn,{icon:"Copy",onClick:p,children:"Copy debug info"}):null,m=a&&(f||d())?r.jsx(Bn,{icon:"Feedback",onClick:()=>ff(a,"error_card"),children:"Report…"}):null,y=f?r.jsxs(r.Fragment,{children:[r.jsx(Bn,{icon:"Reload",onClick:c,children:"Retry"}),r.jsx(Bn,{icon:"Settings",onClick:()=>window.dispatchEvent(new CustomEvent("composer:open-model")),children:"Change model"}),m,b]}):r.jsxs(r.Fragment,{children:[r.jsx(H0,{onRetry:c,onDismissed:()=>u(g=>g+1)}),m,b]});return r.jsx(Ft,{icon:"Warning",label:e,wrapLabel:!0,footer:y})}const au=new Set(["show_html","show_to_user","show_file"]);function G0(e){const t=Us(e.name);return e.name==="update_todos"||t===po||t===Vc||t===Yc||e.name===ru||e.name===fo&&!!e.parameterizedEdit||au.has(e.name)||nu(e.name)}function Ui({call:e}){const t=Us(e.name);return iu(e.name)?r.jsx(M0,{call:e}):t===po?r.jsx(f0,{call:e}):t===Vc?r.jsx(Ft,{icon:"Help",label:"Claude has some questions →",variant:"glow"}):t===Yc?r.jsx(P0,{call:e}):e.name===ru?r.jsx(D0,{call:e}):e.name===fo?r.jsx(N0,{call:e}):au.has(e.name)?r.jsx(R0,{call:e}):nu(e.name)?r.jsx(L0,{}):null}const lu=new Set([po]);function J0(e){return lu.has(Us(e))}function K0({blocks:e}){const t=[],s=[],i=n=>{const o=s[s.length-1];o?.kind==="group"?o.items.push(n):s.push({kind:"group",items:[n]})};for(const n of e){if(n.type==="thinking"){n.text.trim()&&i({kind:"thinking",text:n.text});continue}if(n.type!=="tool_call")continue;const o=n.toolCall;if(!m0.has(Us(o.name))){if(J0(o.name)){t.push(o);continue}if(G0(o)){s.push({kind:"custom",call:o});continue}i({kind:"call",call:o})}}return r.jsxs(x0,{children:[s.map((n,o)=>n.kind==="custom"?r.jsx(Ui,{call:n.call},o):r.jsx(j0,{items:n.items},o)),t.map((n,o)=>r.jsx(Ui,{call:n},`bottom-${o}`))]})}function cu(e){const t=[];let s=[];for(const i of e)i.type==="user_interjection"?(s.length&&t.push({kind:"assistant",blocks:s}),t.push({kind:"user",message:i.message}),s=[]):s.push(i);return s.length&&t.push({kind:"assistant",blocks:s}),t}function X0({blocks:e,openFile:t,isLatest:s=!1}){const i=[],n=[];for(const c of e){if(c.type==="tool_call"&&lu.has(c.toolCall.name)){n.push(c.toolCall);continue}i.push(c)}const o=[];for(const c of i){const d=c.type==="text"?"text":c.type==="error"?"error":"tools",u=o[o.length-1];u&&u.type===d&&d!=="error"?u.items.push(c):o.push({type:d,items:[c]})}const a=o.length>0&&o[o.length-1].type==="error";return r.jsxs(r.Fragment,{children:[o.map((c,d)=>c.type==="text"?c.items.map((u,p)=>r.jsx(Qd,{children:tu(u.text,t)},`${d}-${p}`)):c.type==="error"?c.items.map((u,p)=>r.jsx(W0,{message:u.message,debugInfo:u.debugInfo,isLatest:s&&a&&d===o.length-1&&p===c.items.length-1},`${d}-${p}`)):r.jsx(K0,{blocks:c.items},d)),n.map((c,d)=>r.jsx(Ui,{call:c},`bottom-msg-${d}`))]})}function du({blocks:e,openFile:t,isLatest:s}){return r.jsx(as,{children:r.jsxs(ls,{children:[r.jsx("span",{style:{fontSize:12,fontWeight:600,display:"block",marginBottom:3},children:"Claude"}),r.jsx(X0,{blocks:e,openFile:t,isLatest:s})]})})}const q0=x.div`
  margin: 10px 0;
  ${e=>e.$isLatest&&"margin-bottom: 80px;"}
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.45;
  ${e=>e.$severity==="info"&&"background: #ebf2fa; color: #2a5c8f;"}
  ${e=>e.$severity==="warning"&&"background: #f8f3e8; color: #8a6d2b;"}
  ${e=>e.$severity==="error"&&"background: #f8ecec; color: #943040;"}
`,V0=x.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  & + & {
    margin-left: 10px;
  }
`,hl=$t.memo(function e({message:t,isLatest:s}){const{openFile:i,projectPath:n}=vt(),o=Ps();if(t.role==="system"){const d=t.severity??"info";return r.jsxs(q0,{$severity:d,$isLatest:!!s,children:[r.jsx(Ue,{name:d==="info"?"Info":"Warning",size:14,style:{flexShrink:0,marginTop:1}}),r.jsxs("div",{children:[r.jsx("div",{children:t.content}),t.actions&&t.actions.length>0&&r.jsx("div",{style:{marginTop:4},children:t.actions.map(u=>r.jsx(V0,{href:u.href,target:"_blank",rel:"noreferrer",children:u.label},u.label))})]})]})}const a=t.role==="user",c=t.authorAccountUuid&&o&&t.authorAccountUuid!==o.userId?t.authorName||"Teammate":null;if(a&&t.pill){const d=(t.attachments??[]).filter(u=>!ba.has(u.type)&&!u.hidden);return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:24,textAlign:"center",width:"100%",alignSelf:"stretch",gap:6,padding:"4px 10px",borderRadius:8,border:`1px solid ${h.border.subtle}`,fontSize:11,fontWeight:500,color:h.text.tertiary,marginTop:2,marginBottom:d.length?0:16},children:c?`${c} · ${t.content}`:t.content}),d.length>0&&r.jsx(pl,{style:{justifyContent:"center",marginBottom:16},children:d.map(u=>u.type==="image"&&u.path?r.jsx(fl,{att:u,projectPath:n},u.id):r.jsx(gs,{title:Mi(u),icon:ya(u),children:u.name},u.id))})]})}if(a&&t.kind==="direct-edit")return r.jsx(as,{children:r.jsxs(ls,{children:[r.jsx("div",{style:{fontSize:12,fontWeight:600,marginBottom:3},children:c??"You"}),r.jsx(O0,{content:t.content})]})});if(a)return r.jsx(as,{children:r.jsxs(ls,{children:[r.jsx("span",{style:{fontSize:12,fontWeight:600,display:"block",marginBottom:3},children:c??"You"}),r.jsx("span",{style:{fontSize:13,color:h.text.secondary,lineHeight:1.6,whiteSpace:"pre-wrap"},children:t.content.trim()}),(()=>{const d=(t.attachments??[]).filter(u=>!ba.has(u.type)&&!u.hidden);return d.length===0?null:r.jsx(pl,{children:d.map(u=>u.type==="image"&&u.path?r.jsx(fl,{att:u,projectPath:n},u.id):r.jsx(gs,{title:Mi(u),icon:ya(u),children:u.name},u.id))})})()]})});if(t.contentBlocks&&t.contentBlocks.length>0){const d=cu(t.contentBlocks);return r.jsx(r.Fragment,{children:d.map((u,p)=>u.kind==="user"?r.jsx(e,{message:u.message},`${t.id}-i${p}`):r.jsx(du,{blocks:u.blocks,openFile:i,isLatest:s&&p===d.length-1},`${t.id}-a${p}`))})}return r.jsx(as,{children:r.jsxs(ls,{children:[r.jsx("span",{style:{fontSize:12,fontWeight:600,display:"block",marginBottom:3},children:"Claude"}),r.jsx(Qd,{children:tu(t.content,i)})]})})}),Y0=[[jf,"billing"],[Rf,"rate_limit"],[e=>e.includes("refused"),"refusal"],[e=>e.includes("Stream ended"),"stream_ended"],[e=>e.includes("Network error"),"network"],[e=>e.includes("API error"),"api_error"]];function Z0(e){for(const[t,s]of Y0)if(t(e))return s;return"unknown"}const si=r.jsx("div",{style:{padding:"0.5rem 0",color:"#888",fontStyle:"italic"},children:"[message failed to render]"}),Q0=async()=>{},gl=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${e=>e.$dragOver&&`
    &::after {
      content: 'Drop files to attach';
      position: absolute;
      inset: 0;
      background: ${h.accent.primary}11;
      border: 2px dashed ${h.accent.primary};
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      color: ${h.accent.primary};
      z-index: 100;
      pointer-events: none;
    }
  `}
  position: relative;
`,ew=x.div`
  flex: 1;
  height: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, ${h.bg.surface} 50%, ${h.bg.panel} 100%);
`,tw=x.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  contain: strict;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${h.bg.surface} 2%, transparent 100%);
    pointer-events: none;
    z-index: 1;
  }
`,nw=x.div`
  height: 100%;
  padding: 14px 14px 38px;
  overflow: auto;
  position: relative;
  ${e=>e.$empty&&`
    display: flex;
    flex-direction: column;
  `}

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    background-clip: content-box;
  }
`,ml=["Thinking","Working","Shelling","Scrambling","Sauteing","Caramelizing onions"];function xl(){return ml[Math.floor(Math.random()*ml.length)]}const rw=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: ${h.text.secondary};
  font-size: 13px;
  line-height: 1.6;

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background: url('${Fd}') center/contain no-repeat;
    ${e=>e.$blocked&&`
      background: none;
      border: 2px solid ${h.accent.primary};
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `}
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,sw=x.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`,iw=x.div`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  background: ${h.accent.secondary}24;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${h.accent.secondaryHover};
`,ow=x.div`
  flex: 1;
  min-width: 0;
  /* Top-align so the first line's baseline sits at the 28px icon's centre. */
  padding-top: 2px;
`,aw=x.div`
  font-size: 12px;
  font-weight: 600;
  color: ${h.text.primary};
  line-height: 1.3;
`,lw=x.div`
  font-size: 11px;
  color: ${h.text.tertiary};
  line-height: 1.3;
  margin-top: 1px;
`,cw=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  /* Left-align under the title/subtitle column: icon (28px) + head gap (10px). */
  padding-left: 38px;
`;function qr({icon:e,title:t,subtitle:s,actionLabel:i="Connect",onConnect:n,onDismiss:o,onCancel:a}){const[c,d]=l.useState(!1),u=async()=>{d(!0);try{await n()}catch{}finally{d(!1)}};return r.jsxs(Sn,{$variant:"info",style:{marginBottom:14,display:"block",padding:"12px 12px 10px"},children:[r.jsxs(sw,{children:[r.jsx(iw,{children:r.jsx(Ue,{name:e,size:15})}),r.jsxs(ow,{children:[r.jsx(aw,{children:t}),r.jsx(lw,{children:s})]}),r.jsx($n,{icon:"X",size:24,iconSize:12,onClick:o,title:"Dismiss",style:{margin:"-5px -5px 0 0"}})]}),r.jsxs(cw,{children:[r.jsx(fe,{variant:"blue",size:"xs",onClick:u,disabled:c,loading:c,children:i}),a&&r.jsx(fe,{variant:"ghost",size:"xs",onClick:a,disabled:c,children:"Cancel"})]})]})}function bl(e){const t=new Uint8Array(e);let s="";const i=8192;for(let n=0;n<t.length;n+=i){const o=t.subarray(n,n+i);s+=String.fromCharCode.apply(null,o)}return btoa(s)}function dw(e){const t=[];for(const s of e){const i=t.at(-1);s.kind==="revert"&&i?.kind==="revert"&&i.authorAccountUuid===s.authorAccountUuid?t[t.length-1]=s:t.push(s)}return t}const uw=$t.memo(function({scrollContainerRef:t,messages:s,streamingBlocks:i,isLoading:n,holderLabel:o,permissionPending:a,error:c,openFile:d,showBqBanner:u,onBqConnect:p,onBqDismiss:f,showFigmaBanner:b,onFigmaConnect:m,onFigmaDismiss:y,showGithubInstallBanner:g,onGithubInstall:C,onGithubInstallDismiss:v,fsRegrantNames:w,onFsRegrantAllow:S,onFsRegrantCancel:k,templateIntro:E,activeSkills:T}){const _=l.useMemo(()=>dw(s),[s]),R=hx(i,n),$=l.useRef(xl());l.useEffect(()=>{n&&($.current=xl())},[n]);const M=l.useMemo(()=>{let I=null;const te=ce=>{if(ce)for(const ue of ce)ue.type==="tool_call"&&iu(ue.toolCall.name)&&(I=ue.toolCall.id)};for(const ce of _)te(ce.contentBlocks);return te(i),I},[_,i]),L=Hm({count:_.length,getScrollElement:()=>t.current,estimateSize:()=>200,initialRect:{width:0,height:800},overscan:5,getItemKey:I=>_[I].id}),z=L.getTotalSize(),J=l.useRef(!0);return l.useEffect(()=>{const I=t.current;if(!I)return;const te=()=>{J.current=I.scrollHeight-I.scrollTop-I.clientHeight<2};return I.addEventListener("scroll",te,{passive:!0}),()=>I.removeEventListener("scroll",te)},[]),l.useEffect(()=>{const I=t.current;I&&(I.scrollTop=I.scrollHeight,J.current=!0)},[_.length,i.length]),l.useEffect(()=>{const I=t.current;I&&J.current&&(I.scrollTop=I.scrollHeight)},[z]),r.jsxs(su.Provider,{value:M,children:[_.length===0&&!n&&r.jsx(xy,{templateIntro:E,activeSkills:T}),_.length>0&&r.jsx("div",{style:{position:"relative",height:z},children:L.getVirtualItems().map(I=>{const te=_[I.index];return r.jsx("div",{"data-index":I.index,ref:L.measureElement,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${I.start}px)`},children:r.jsx(En,{componentName:"MessageDisplay",fallback:si,children:r.jsx(hl,{message:te,isLatest:I.index===_.length-1&&i.length===0})})},I.key)})}),i.length>0&&cu(i).map((I,te,ce)=>I.kind==="user"?r.jsx(En,{componentName:"MessageDisplay",tags:{streaming:"true"},fallback:si,children:r.jsx(hl,{message:I.message})},`stream-i${te}`):r.jsx(En,{componentName:"AssistantTurn",tags:{streaming:"true"},fallback:si,children:r.jsx(du,{blocks:I.blocks,openFile:d,isLatest:te===ce.length-1})},`stream-a${te}`)),r.jsx(Mx,{}),u&&r.jsx(qr,{icon:"Database",title:"BigQuery access required",subtitle:"Connect your Google account to run queries",onConnect:p,onDismiss:f}),b&&r.jsx(qr,{icon:"Projects",title:"Figma access required",subtitle:"Connect your Figma account to read and write designs",onConnect:m,onDismiss:y}),g&&r.jsx(qr,{icon:"Branch",title:"GitHub App not installed on that organization",subtitle:"Grant the app access to the repository you want to import from",onConnect:C,onDismiss:v}),w.length>0&&r.jsx(qr,{icon:"Folder",title:`Allow access to ${w.map(I=>`“${I}”`).join(", ")}?`,subtitle:"Re-approve to continue",actionLabel:"Allow",onConnect:S,onCancel:k,onDismiss:k}),(n||o)&&r.jsx(rw,{$blocked:a,children:r.jsx(wx,{text:a?"Waiting for permission...":o?`Working on ${o}'s request...`:R??`${$.current}...`})}),c&&r.jsxs(Sn,{$variant:"error",style:{marginBottom:14},children:[r.jsx(Ue,{name:"Warning",size:14,style:{color:h.accent.error}}),r.jsx("span",{style:{fontSize:12,color:h.accent.error},children:c})]})]})});function pw({cardSubmitRef:e,hideTabs:t}){const{projectPath:s,data:i,setActiveChat:n,createChat:o,closeChat:a,updateComposer:c,appendAttachments:d,addMessage:u,appendRemoteMessage:p,startStreaming:f,appendStreamingText:b,appendStreamingThinking:m,addStreamingToolCall:y,addStreamingInterjection:g,updateStreamingToolResult:C,setStreamingError:v,updateStreamingTokens:w,finishStreaming:S,setChatTodos:k,openFile:E,updateChat:T}=vt(),{showToast:_}=bt(),R=Ld(),$=nn(),M=ho(),[L,z]=l.useState(!1),[J,I]=l.useState(!1),[te,ce]=l.useState(!1),[ue,me]=l.useState(!1),[de,De]=l.useState(!1),[Re,je]=l.useState(!1),[H,ke]=l.useState(!1),[X,Se]=l.useState([]),oe=Yn(),he=l.useRef(null);Pd(s);const pe=gt("omelette_multiplayer").on||!1,Le=gt("omelette_aux_fines_herbes").on,re=!gt("omelette_chat_auto_title_disabled").on,U=l.useRef(new Set),D=jr(),O=$o(s);l.useEffect(()=>{Af(pe)},[pe]);const P=Ps();l.useEffect(()=>{P?.userId&&mf(P.userId)},[P?.userId]);const B=Zt(),[ne,se]=ex(s,pe&&B?$?.id??"":""),Oe=pe&&ne?.holderAccountUuid!=null&&P!=null&&ne.holderAccountUuid!==P.userId,Me=l.useRef(Oe);Me.current=Oe;const Fe=ne!==null,Pe=Oe&&ne?.holderAccountUuid?ne.holderDisplayName||`another user (${ne.holderAccountUuid.slice(0,8)})`:null,[We,tt]=l.useState(()=>$?.id?qm($.id):[]),Ee=l.useCallback(Z=>{tt(be=>{const ve=typeof Z=="function"?Z(be):Z;return $?.id&&Vm($.id,ve),ve})},[$?.id]),Je=Oe?ne?.holderAccountUuid??null:null,Ie=l.useRef(void 0);l.useEffect(()=>{Fe&&(Ie.current!==void 0&&Je!==Ie.current&&Ee([]),Ie.current=Je)},[Fe,Je,Ee]),l.useEffect(()=>{if(!pe||!B||!$?.id)return;const Z=$.id;return Zm(s,Z,(be,ve)=>{if(Df(be.id)){Mf(be.id)&&G.appendCachedMessage(s,Z,be);return}const ye=hs(s)?.chats[Z]?.messages.some(j=>j.id===be.id)??!1;if(be.role==="assistant"&&Ee([]),p(Z,be),be.role==="assistant"&&!ye&&be.contentBlocks)for(const j of be.contentBlocks){if(j.type!=="tool_call")continue;const K=j.toolCall;if(K.name!=="show_to_user"&&K.name!=="done"&&K.name!=="show_file")continue;const ee=String(K.input?.path??"");ee&&(Lf(ee,Z),window.dispatchEvent(new CustomEvent("agent-show-file",{detail:{filePath:ee,viewportKey:Z,target:"user"}})))}},(be,ve)=>{qn(s,{source:"fanout"});for(const ye of be)window.dispatchEvent(new CustomEvent("file-written",{detail:{path:ye,remote:!0}}))},(be,ve)=>{be===null?Ee([]):Me.current&&Ee(ye=>[...ye,...be])},se)},[pe,B,s,$?.id,p,se]);const le=l.useRef(),q=l.useRef(new Map);Nt(te),Ye("bq-auth-required",()=>De(!0)),Ye("figma-auth-required",()=>je(!0)),Ye("github-install-required",()=>ke(!0)),Ye("fs-access-regrant-required",Z=>Se(Z.detail.names));const[we,ie]=l.useState($?.composer.text??""),Ge=l.useRef($?.id);Ye("composer-set-text",Z=>ie(Z.detail.text)),l.useEffect(()=>{Ge.current&&Ge.current!==$?.id&&c(Ge.current,{text:we}),$?.id!==Ge.current&&ie($?.composer.text??""),Ge.current=$?.id},[$?.id,$?.composer.text,we,c]);const ze=$?.streaming,qe=ze?.isLoading??!1,Ke=ze?.blocks??[],Xe=Ke.length>0?Ke:Pe?We:[],rt=ze?.error??null,yt=async Z=>{if(Z.preventDefault(),z(!1),J||!$)return;const be=Z.dataTransfer.items,ve=[],ye=[],j=[],K=new Map;for(let N=0;N<be.length;N++){const Y=be[N];if(Y.kind!=="file")continue;const xe=Y.webkitGetAsEntry?.(),Ce=Y.getAsFileSystemHandle;if(xe?.isDirectory)typeof Ce=="function"&&j.push(Ce.call(Y));else{const _e=Y.getAsFile();_e&&(ye.push(_e),Le&&jn(_e)&&typeof Ce=="function"&&K.set(_e,Ce.call(Y)))}}const ee=(await Promise.all(j)).filter(N=>N?.kind==="directory");if(ee.length>0){const N=[];for(const Y of ee){let xe=!1;try{await Y.getDirectoryHandle(".git"),xe=!0}catch{}const Ce=await Zc(Y,hn);xe||Ce>hn?await oe({title:`Link “${Y.name}” folder?`,message:`This folder ${Ce>hn?"contains too many files to upload":"looks like a git repo"}. Link a folder to let Claude explore files on your device and upload only the files it needs.`,confirmLabel:"Link folder",cancelLabel:"Skip"})&&N.push(Y):_(`Skipped folder “${Y.name}” — drop it on the Files pane to upload its contents.`,"info")}if(N.length>0){fs(s,N);const Y=new Set($.composer.attachments.filter(Ce=>Ce.type==="folder").map(Ce=>Ce.name));d($.id,N.filter(Ce=>!Y.has(Ce.name)).map(Ce=>({id:crypto.randomUUID(),name:Ce.name,type:"folder"})));const xe=N.map(Ce=>Ce.name).join(", ");_(`Linked ${xe} as a codebase — use the Import menu to re-link later`,"info")}}if(Le){const N=ye.filter(jn);for(const Y of N){const xe=await K.get(Y)?.catch(()=>null),Ce=xe?.kind==="file"?xe:void 0,_e=await O.attach(Y,Ce);_e&&d($.id,[_e])}if(N.length>0)for(let Y=ye.length-1;Y>=0;Y--)jn(ye[Y])&&ye.splice(Y,1)}if(ye.length===0)return;if(ye.length>hn){const N=await Qc();N&&(fs(s,[N]),d($.id,[{id:crypto.randomUUID(),name:N.name,type:"folder"}]),_(`Linked ${N.name} as a codebase — use the Import menu to re-link later`,"info"));return}if(D){_(Wt,"error");return}for(const N of ye){const Y=N.type||"application/octet-stream";if(xr(Y)){const xe=await N.arrayBuffer(),Ce=bl(xe);ve.push({type:"text",name:fn(N.name),mimeType:Y,data:Ce})}else ve.push({type:"binary",name:fn(N.name),mimeType:Y,blob:N})}const F=N=>{const Y=N.map(xe=>({id:crypto.randomUUID(),name:xe.name,path:xe.path,type:xe.type}));d($.id,Y)};ce(!0);const W=ve.length>0?R(ve.length):null,A=await bn();try{if(ve.length>0){const N=await G.uploadData(s,ve,A,W?.update);N.files&&F(N.files);const Y=Dn(N.errors);Y&&_(Y,"error")}}catch(N){Tt(N,"upload file"),_("Couldn’t upload file. Please try again.","error")}finally{W?.done(),ce(!1)}};l.useEffect(()=>{const Z=new Map;return G.onAgentEvent((ve,ye,j)=>{if(ve!==s||j.remote)return;if(j.type==="waiting_for_turn"){S(ye);return}if(j.type==="turn_revoked"){v(ye,"Another user took over — your changes were not applied."),S(ye),Z.delete(ye);return}if(j.type==="async_result"){le.current?.(ye,j.tool,j.result);return}Z.has(ye)||Z.set(ye,{startTime:Date.now(),toolCallCount:0,eventCount:0});const K=Z.get(ye);if(K.eventCount++,j.type==="text")b(ye,j.content);else if(j.type==="thinking")m(ye,j.content);else if(j.type==="tool_call"){K.toolCallCount++;const ee={id:j.id,type:j.tool.startsWith("mcp__")?"mcp":j.tool==="Read"?"read":"edit",name:j.tool,input:j.input,serverSide:j.serverSide};j.tool===fo&&(ee.parameterizedEdit=xf(ee.input)),j.tool==="done"&&(K.sawDoneTool=!0),y(ye,ee)}else if(j.type==="tool_result")C(ye,j.id,j.result);else if(j.type==="tokens")K.ttftMs===void 0&&(K.ttftMs=Date.now()-K.startTime,Kn("design.chat.ttft_ms",{duration:K.ttftMs,attrs:{is_thinking:j.is_thinking===!0}})),w(ye,j.output_tokens,j.thinking_tokens,j.is_thinking);else if(j.type==="error"){const ee=j.message||"",F=Z0(ee);j.fixture||G.trackEvent("agent_error",{errorKind:F}),Z.delete(ye),v(ye,j.message,j.debugInfo),j.noAutoRetry?q.current.set(ye,"burned"):F!=="rate_limit"&&F!=="billing"&&!q.current.has(ye)&&q.current.set(ye,"eligible"),me(!1),S(ye),Xs(s)}else if(j.type==="stopped")G.trackEvent("agent_cancelled",{durationMs:Date.now()-K.startTime,toolCallCount:K.toolCallCount,eventCount:K.eventCount}),Z.delete(ye),me(!1),S(ye),Xs(s);else if(j.type==="done"){if(!j.fixture){const ee=j.usage||{},F=Date.now()-K.startTime;Kn("design.chat.time_to_done_ms",{duration:F,attrs:{tool_call_count:K.toolCallCount,ttft_ms:K.ttftMs}}),G.trackEvent("agent_turn_complete",{durationMs:F,toolCallCount:K.toolCallCount,eventCount:K.eventCount,model:j.model,inputTokens:ee.input_tokens,outputTokens:ee.output_tokens,cacheReadTokens:ee.cache_read_input_tokens,cacheWriteTokens:ee.cache_creation_input_tokens})}bf(K.sawDoneTool===!0),Z.delete(ye),q.current.delete(ye),me(!1),S(ye,j.result,j.sessionId,j.context_tokens),Xs(s)}else j.type==="todos_updated"&&k(ye,j.todos)})},[s,b,m,y,C,w,v,S,k]),l.useEffect(()=>G.onPermissionPending(be=>{me(be)}),[]);const kt=l.useRef(document);if(Ye("paste",async Z=>{if(!$||Z.defaultPrevented)return;const be=Z.clipboardData?.getData("text/plain")??"",ve=Lo(be);if(ve){if(Z.preventDefault(),D){_(Wt,"error");return}try{const F=await Po(s,ve);d($.id,F),_(`Added ${F.length} web ${F.length===1?"capture":"captures"}`,"success")}catch(F){Tt(F,"import web capture"),_("Couldn’t import web capture. Please try again.","error")}return}const ye=Z.clipboardData?.items;if(!ye)return;const j=[],K=/^image\.(png|jpe?g|gif|webp|bmp|avif|tiff?)$/i,ee=[];for(let F=0;F<ye.length;F++){const W=ye[F];if(W.kind==="file"){const A=W.getAsFile();A&&ee.push({file:A,idx:F})}}for(const{file:F,idx:W}of ee){const A=F.type||"application/octet-stream",N=F.name.match(K),Y=!F.name||N?`pasted-${Date.now()}-${W}.${N?.[1]||A.split("/")[1]||"png"}`:F.name;if(xr(A)){const xe=await F.arrayBuffer(),Ce=bl(xe);j.push({type:"text",name:fn(Y),mimeType:A,data:Ce})}else j.push({type:"binary",name:fn(Y),mimeType:A,blob:F})}if(j.length>0){if(Z.preventDefault(),D){_(Wt,"error");return}try{const F=await G.uploadData(s,j,await bn());if(F.files&&F.files.length>0){const A=F.files.map(N=>({id:crypto.randomUUID(),name:N.name,path:N.path,type:N.type}));d($.id,A)}const W=Dn(F.errors);W&&_(W,"error")}catch(F){Tt(F,"upload file"),_("Couldn’t upload file. Please try again.","error")}}},kt),!$)return r.jsx(gl,{children:r.jsx("span",{style:{fontSize:12,color:h.text.primary,padding:"1em"},children:"Loading..."})});const pt=Z=>{n(M[Z].id)},wt=Z=>{const be=M[Z];if(be&&M.length!==1){if(be.streaming?.isLoading&&G.interruptAgent(be.id),be.id===$.id){const ve=Z===0?1:Z-1;n(M[ve].id)}q.current.delete(be.id),a(be.id)}},ft=()=>{const Z=M.find(be=>be.messages.length===0&&!be.streaming?.isLoading);if(Z){n(Z.id);return}o()},Ct=M.map((Z,be)=>({label:Z.title,closable:M.length>1,onClose:()=>wt(be)})),jt=M.findIndex(Z=>Z.id===$.id),Ne=l.useCallback(async(Z,be,ve,ye,j)=>{const K=i?.chats[Z];if(!K)return;ke(!1);const ee=K.messages.slice(),F=await G.getSettings(),W=K.messages.filter(Te=>Te.role==="user").every(Te=>Te.pill);re&&!j?.pill&&!j?.rerun&&be.trim()&&K.title===da&&!U.current.has(Z)&&(U.current.add(Z),yf(be,{kind:"chat"}).then(Te=>{const He=hs(s)?.chats[Z];Te&&He?.title===da&&T(Z,{title:Te,titleIsGenerated:!0})}).finally(()=>U.current.delete(Z)));const A=!1;j?.rerun||(wf(s),u(Z,{role:"user",content:be,attachments:ve,pill:j?.pill||A,kind:j?.kind})),f(Z);let N;if(j?.rerun)N="";else if(j?.prebuiltStatusPrefix!==void 0)N=j.prebuiltStatusPrefix;else{const Te=i.viewState.activeFileTab>0?i.viewState.openFiles[i.viewState.activeFileTab-1]??null:null;N=bs(Z,{projectTitle:i.name,viewingFile:Te,projectKey:s})}const Y=W&&!wa(ve)&&!j?.pill?vf+`

`:"",xe=W&&!wa(ve)&&!j?.pill?`<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

`:"",Ce=N+Y+Li(ve)+xe+be,_e=ve.filter(Te=>Te.type==="image"&&Te.path).map(Te=>Te.path);j?.rerun||G.trackEvent("message_sent",{messageLength:Ce.length,skillCount:K.composer.activeSkills.length,isResume:!!ye,attachmentsCount:ve.length,attachmentTypes:ve.map(Te=>Te.type),attachmentExts:ve.map(Te=>Te.name?.split(".").pop()?.toLowerCase()||Te.type),model:Xn(F.model)});try{await G.sendMessage({message:j?.rerun?"":Ce,projectPath:s,projectName:i?.name,chatId:Z,activeSkills:K.composer.activeSkills,sessionId:ye,storedMessages:ee,model:Xn(F.model),storedTodos:K.todos,imagePaths:_e,displayMeta:j?.rerun?void 0:{content:be,pill:j?.pill||A||void 0,kind:j?.kind,attachments:ve.length?ve:void 0},rerun:j?.rerun})}catch(Te){v(Z,Te instanceof Error?Te.message:String(Te)),ys(Z)}},[i,s,u,f,v,re,T]),V=l.useCallback(async(Z,be,ve,ye,j)=>{const K=i&&i.viewState.activeFileTab>0?i.viewState.openFiles[i.viewState.activeFileTab-1]??null:null,ee=bs(Z,{projectTitle:i?.name,viewingFile:K,projectKey:s}),F=ee+Li(ve)+be,W=ve.filter(N=>N.type==="image"&&N.path).map(N=>N.path);let A;try{A=await G.sendFollowUp(F,Z,W)}catch(N){throw ys(Z),N}if(A){g(Z,{id:crypto.randomUUID(),role:"user",content:be,attachments:ve,timestamp:new Date().toISOString(),kind:j?.kind,pill:j?.pill});return}await Ne(Z,be,ve,ye,{prebuiltStatusPrefix:ee,kind:j?.kind,pill:j?.pill})},[i,Ne,g]);le.current=(Z,be,ve)=>{const ye={id:crypto.randomUUID(),name:`${be} result`,type:"text",content:`<async_tool_result tool="${be}">
${ve}
</async_tool_result>`};be==="fork_verifier_agent"?V(Z,"Verifier agent check completed",[{...ye,hidden:!0}],void 0,{pill:!0}):V(Z,"A background task has completed. Here are the results:",[ye])};const ae=l.useCallback(async()=>{lo(),ke(!1)},[]),ge=l.useCallback(async Z=>{$&&(await G.sendFollowUp(Z,$.id)?g($.id,{id:crypto.randomUUID(),role:"user",content:Z,attachments:[],timestamp:new Date().toISOString(),pill:!0}):await Ne($.id,Z,[],$.sessionId,{pill:!0}))},[$,Ne,g]),Be=l.useCallback(async()=>{const{granted:Z,denied:be}=await kf(s),ve=await Sf(s);ve&&"granted"in ve?(Z.push(ve.granted),$&&c($.id,{attachments:$.composer.attachments.map(ye=>ye.type==="fig-file"&&ye.name===ve.granted?{...ye,figOutline:Co(ve.outline)}:ye)})):ve&&be.push(ve.denied),Se([]),Z.length>0?await ge(`Access re-granted for ${Z.map(ye=>`"${ye}"`).join(", ")}${be.length>0?` (denied: ${be.map(ye=>`"${ye}"`).join(", ")})`:""} — continue.`):be.length>0?Se(be):await ge("Local attachments changed — continue.")},[s,$,c,ge]),Ae=l.useCallback(()=>{(async()=>{const Z=await Cf(s),be=_f(s);if(be&&Z.push(be),Se([]),Z.length===0){await ge("Local attachments changed — continue.");return}$&&c($.id,{attachments:$.composer.attachments.filter(ve=>!((ve.type==="folder"||ve.type==="fig-file")&&Z.includes(ve.name)))}),await ge(`User declined to re-grant access to ${Z.map(ve=>`"${ve}"`).join(", ")}. No longer attached — proceed without it (don't call local_* or fig_* tools for these paths).`)})()},[s,$,c,ge]),nt=l.useRef(Re);nt.current=Re;const Ze=l.useCallback(async()=>{if(await uo(),!nt.current||(je(!1),!$))return;const Z="Figma connected — continue";await G.sendFollowUp(Z,$.id)?g($.id,{id:crypto.randomUUID(),role:"user",content:Z,attachments:[],timestamp:new Date().toISOString(),pill:!0}):await Ne($.id,Z,[],$.sessionId,{pill:!0})},[$,Ne,g]);Ye("github-connected",()=>{if(!$)return;const Z="GitHub connected";(async()=>await G.sendFollowUp(Z,$.id)?g($.id,{id:crypto.randomUUID(),role:"user",content:Z,attachments:[],timestamp:new Date().toISOString(),pill:!0}):await Ne($.id,Z,[],$.sessionId,{pill:!0}))()}),Ye("design-sync-completed",Z=>{});const st=l.useCallback(async(Z,be,ve)=>{if($){if(ve?.rerun){await Ne($.id,"",[],$.sessionId,{rerun:!0});return}await V($.id,Z,be,$.sessionId,ve)}},[$,Ne,V]);l.useEffect(()=>(e&&(e.current=st),()=>{e&&(e.current=null)}),[e,st]);const ht=l.useRef();ht.current=async()=>{if(!$)return!1;if($.messages.length>0)return!0;const Z=await $f();return Z&&await Ne($.id,"",[{...Z,hidden:!0}],$.sessionId,{pill:!0}),!0},l.useEffect(()=>{if(!Ef())return;const Z=setInterval(async()=>{await ht.current?.()&&clearInterval(Z)},200);return()=>clearInterval(Z)},[]);const Rt=async()=>{if(!we.trim()&&$.composer.attachments.length===0)return;const Z=we,be=$.composer.attachments;ie(""),c($.id,{text:"",attachments:[]}),q.current.delete($.id);try{await Gx()}catch{}await V($.id,Z,be,$.sessionId)},Dt=l.useMemo(()=>({isDisabled:()=>q.current.get($.id)!=="eligible",onFired:()=>q.current.set($.id,"burned"),onDismiss:()=>q.current.set($.id,"burned")}),[$.id]);return r.jsxs(gl,{$dragOver:L,onDragOver:Z=>{Z.preventDefault(),!J&&z(!0)},onDragLeave:Z=>{Z.currentTarget.contains(Z.relatedTarget)||z(!1)},onDrop:yt,children:[O.modal,!t&&r.jsx(Tf,{tabs:Ct,activeTab:jt,onChange:pt,onAddClick:ft}),r.jsx(Um,{value:st,children:r.jsx(Go.Provider,{value:Dt,children:r.jsxs(ew,{children:[r.jsx(tw,{children:r.jsxs(nw,{ref:he,"data-testid":"chat-messages",$empty:$.messages.length===0&&!qe,children:[r.jsx(uw,{scrollContainerRef:he,messages:$.messages,streamingBlocks:Xe,isLoading:qe,holderLabel:Pe,permissionPending:ue,error:rt,openFile:E,showBqBanner:de,onBqConnect:async()=>{await Q0(),De(!1)},onBqDismiss:()=>{De(!1)},showFigmaBanner:Re,onFigmaConnect:Ze,onFigmaDismiss:()=>je(!1),showGithubInstallBanner:H,onGithubInstall:ae,onGithubInstallDismiss:()=>ke(!1),fsRegrantNames:X,onFsRegrantAllow:Be,onFsRegrantCancel:Ae,templateIntro:(()=>{const Z=$.composer.attachments.find(be=>be.introductoryMsg);return Z?.introductoryMsg?{name:Z.name,msg:Z.introductoryMsg}:void 0})(),activeSkills:$.composer.activeSkills}),r.jsx(Hx,{chat:$,isLoading:qe})]},$.id)}),r.jsx(sy,{chatId:$.id}),r.jsx(ty,{chat:$,projectPath:s,localText:we,setLocalText:ie,isLoading:qe,onSend:Rt,updateComposer:c,codebaseModalOpen:J,setCodebaseModalOpen:I})]})})})]})}function yl(e,t){return e?t?e.seconds>t.seconds:!0:!1}function uu(e,t,s){const i=n=>s!==void 0&&n!==s;return i(e.authorAccountUuid)&&yl(e.createdAt,t)?!0:e.replies.some(n=>i(n.authorAccountUuid)&&yl(n.createdAt,t))}const Hn=e=>["listComments",e];async function Wi(e){const t=await at().listComments({projectId:e});return{comments:t.comments,commentsReadAt:t.commentsReadAt}}function fw(e){const t=Ps(),s=Os(),{data:i=0}=zs({queryKey:Hn(e),queryFn:()=>Wi(e),enabled:!!e,staleTime:5e3,select:n=>n.comments.filter(o=>(!o.resolvedAt||o.replies.length>0)&&uu(o,n.commentsReadAt,t?.userId)).length});return Ye("comment-created",()=>{s.invalidateQueries({queryKey:Hn(e)})}),i}function hw(e,t=!0){const s=Os(),i=["listFilesDeep",e],{data:n}=zs({queryKey:i,queryFn:async()=>{const o=await at().listFiles({projectId:e,path:"",depth:50}),a=new Map;for(const c of o.entries)c.type==="file"&&a.set(c.path,c);return a},enabled:!!e&&t,staleTime:5e3});return Ye("file-written",()=>{s.invalidateQueries({queryKey:i},{cancelRefetch:!1})}),n??null}function gw(e){const t=Os(),s=Hn(e),{data:i,isLoading:n,error:o,refetch:a}=zs({queryKey:s,queryFn:()=>Wi(e),enabled:!!e,staleTime:5e3}),c=i?.comments??[],d=o?o instanceof Error?o.message:String(o):null,[u,p]=l.useState(),f=l.useRef(null);l.useEffect(()=>{i&&f.current!==e&&(f.current=e,p(i.commentsReadAt))},[i,e]);const b=l.useCallback(async k=>{if(!e)return;const E=await a();!k?.preserveWatermark&&E.data&&p(E.data.commentsReadAt)},[e,a]),m=l.useCallback(()=>t.ensureQueryData({queryKey:Hn(e),queryFn:()=>Wi(e)}),[t,e]),y=l.useCallback(async k=>{await m(),t.setQueryData(Hn(e),E=>E&&{...E,comments:k(E.comments)})},[t,e,m]),g=l.useCallback(async()=>{if(e)try{await m();const k=await at().markCommentsRead({projectId:e});t.setQueryData(Hn(e),E=>E&&{...E,commentsReadAt:k.commentsReadAt})}catch{}},[e,t,m]),C=l.useCallback(async k=>{if(!e)throw new Error("no project");const E=await at().createComment({projectId:e,...k});return G.trackEvent("comment_created",{tethered:!!k.filePath}),await y(T=>[E.comment,...T]),E.comment},[e,y]),v=l.useCallback(async(k,E)=>{if(!e)throw new Error("no project");const T=await at().createCommentReply({projectId:e,commentId:k,body:E});G.trackEvent("comment_reply",{});const _=c.find(R=>R.commentId===k)?.resolvedAt;if(await y(R=>R.map($=>$.commentId===k?{...$,replies:[...$.replies,T.reply]}:$)),_){const R=await at().updateComment({projectId:e,commentId:k,resolved:!1});G.trackEvent("comment_reopen",{via:"reply"}),await y($=>$.map(M=>M.commentId===k?{...R.comment,replies:M.replies}:M))}return T.reply},[e,c,y]),w=l.useCallback(async(k,E)=>{if(!e)throw new Error("no project");const T=await at().updateComment({projectId:e,commentId:k,resolved:E});G.trackEvent(E?"comment_resolve":"comment_reopen",{}),await y(_=>_.map(R=>R.commentId===k?{...T.comment,replies:R.replies}:R))},[e,y]),S=l.useCallback(async k=>{if(!e)throw new Error("no project");await at().deleteComment({projectId:e,commentId:k}),await y(E=>E.filter(T=>T.commentId!==k))},[e,y]);return{comments:c,commentsReadAt:u,loading:n,error:d,refresh:b,markRead:g,createComment:C,createReply:v,resolveComment:w,deleteComment:S}}function mw(e,t){if(!e.filePath||!t)return"fresh";const s=t.get(e.filePath);if(!s)return"detached";const i=s.updatedAt?.seconds??0n,n=e.createdAt?.seconds??0n;return i>n?"stale":"fresh"}function wl(e){if(!e)return"";const t=Date.now()-Number(e.seconds)*1e3;return t<6e4?"just now":t<36e5?`${Math.floor(t/6e4)}m ago`:t<864e5?`${Math.floor(t/36e5)}h ago`:`${Math.floor(t/864e5)}d ago`}function pu(e){if(!e.elementDescriptor)return e.elementSelector?{short:e.elementSelector,full:e.elementSelector}:null;const t=e.elementDescriptor.split(`
`),s=m=>t.find(y=>y.startsWith(m))?.slice(m.length).trim(),n=s("text:")?.match(/"([^"]+)"/)?.[1],o=s("react:"),a=s("dom:")??e.elementSelector??"",c=" › ",d=a.split(c),u=d.length>2?"…"+c+d.slice(-2).join(c):a,p=o?.split(c).pop(),f=n||p||u;return{short:f,full:a||f}}const xw=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, ${h.bg.surface} 50%, ${h.bg.panel} 100%);
`,bw=x.div.attrs({className:"omelette-scrollbar-hidden"})`
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  background: transparent;
`,Vr=x.div`
  padding: 32px 16px;
  text-align: center;
  color: ${h.text.tertiary};
  font-size: 12px;
`,yw=x.div`
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 13px 0;
  margin-bottom: 0;
  box-shadow: none;
  opacity: ${e=>e.$resolved?.55:1};
`,ww=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`,vw=x.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${h.accent.primary};
  flex-shrink: 0;
`,kw=x.span`
  font-size: 12px;
  font-weight: 600;
  flex: 1;
  color: ${h.text.primary};
`,vl=x.span`
  font-size: 10px;
  color: ${h.text.tertiary};
`,Sw=x.button`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  flex-shrink: 0;
  border: 1.5px solid ${e=>e.$checked?h.accent.primary:h.border.strong};
  background: ${e=>e.$checked?h.accent.primary:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 9px;
  color: white;
  line-height: 1;
  padding: 0;
  &:hover {
    border-color: ${h.accent.primary};
  }
`,Cw=x.button`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  margin-bottom: 6px;
  font-weight: 500;
  max-width: 100%;
  > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  background: ${h.bg.muted};
  color: ${e=>e.$stale==="stale"?h.text.secondary:h.text.tertiary};
  &:hover {
    background: ${h.bg.active};
    color: ${h.text.secondary};
  }
`,_w=x.p`
  font-size: 13.5px;
  color: ${h.text.secondary};
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  ${e=>e.$highlighted&&`
    background: rgba(217, 119, 87, 0.08);
    border-radius: 3px;
    padding: 1px 4px;
    margin: -1px -4px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  `}
`,$w=x.div`
  margin-top: 10px;
  margin-left: 1px;
  padding-left: 12px;
  border-left: 2.5px solid ${h.border.subtle};
`,Ew=x.div`
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:has(+ .reply-action) {
    margin-bottom: 0;
  }
`,Tw=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
`,jw=x.span`
  font-size: 12px;
  font-weight: 600;
  color: ${h.text.primary};
`,Rw=x.p`
  font-size: 12.5px;
  color: ${h.text.secondary};
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  ${e=>e.$highlighted&&`
    background: rgba(217, 119, 87, 0.08);
    border-radius: 3px;
    padding: 1px 4px;
    margin: -1px -4px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  `}
`,Aw=x.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  font-size: 11px;
  font-weight: 500;
  font-family: inherit;
  color: ${h.text.tertiary};
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: ${e=>e.$topLevel?"6px":"0"};
  &:hover {
    color: ${h.text.secondary};
  }
`,Dw=x.div`
  display: flex;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 12px;
  padding: 6px 8px 6px 10px;
  margin-top: ${e=>e.$topLevel?"8px":"6px"};
  box-shadow: ${h.shadow.sm};
  align-items: center;
  ${e=>e.$topLevel&&"width: 100%;"}
`,Mw=x.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  font-size: 12px;
  font-family: inherit;
  color: ${h.text.primary};
  &::placeholder {
    color: ${h.text.tertiary};
  }
`,Lw=x.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${h.accent.primary};
  color: ${h.text.inverse};
  border: 1px solid rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  box-shadow:
    0 1px 3px rgba(180, 90, 30, 0.35),
    0 2px 6px rgba(180, 90, 30, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  &:hover:not(:disabled) {
    background: ${h.accent.primaryHover};
  }
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`,Pw=x.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 10px;
  color: ${h.text.tertiary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${h.text.secondary};
  }
`,Ow=x.input`
  flex: 1;
  border: 1px solid ${h.border.default};
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 11px;
  outline: none;
  font-family: inherit;
  background: ${h.bg.surface};
  color: ${h.text.primary};
  &:focus {
    border-color: ${h.border.focus};
  }
`,Fw=x.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  color: ${h.text.secondary};
  box-shadow: ${h.shadow.xs};
  &:hover {
    background: ${h.bg.hover};
  }
`,Iw=x.div`
  padding: 8px 10px;
  margin: 0 12px 8px;
  border: 1px solid ${h.border.subtle};
  border-radius: 10px;
  background: rgba(217, 119, 87, 0.04);
  display: flex;
  align-items: center;
  gap: 8px;
`,zw=x.span`
  font-size: 11px;
  color: ${h.text.secondary};
  flex: 1;
`,Nw=x.div`
  padding: 12px;
  padding-top: 0;
  background: transparent;
`,Bw=x.div`
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 12px;
  padding: 10px;
  box-shadow: ${h.shadow.sm};
`,Hw=x.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 13px;
  font-family: inherit;
  color: ${h.text.primary};
  background: transparent;
  margin-bottom: 10px;
  min-height: 32px;
  line-height: 1.5;
  &::placeholder {
    color: ${h.text.tertiary};
  }
`,Uw=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kl={fresh:"Click to jump to this element",stale:"File has changed since this comment — element may have moved. Click to try anyway."};function Ww({comment:e,selected:t,unread:s,staleness:i,onToggleSelect:n,onReply:o,onResolve:a}){const[c,d]=l.useState(""),[u,p]=l.useState(!1),[f,b]=l.useState(!1),m=!!e.resolvedAt,y=n?()=>{window.getSelection()?.toString()||n()}:void 0,g=pu(e),C=i!=="detached",v=e.replies.length>0,w=async()=>{const k=c.trim();if(!(!k||u)){p(!0);try{await o(k),d(""),b(!1)}catch{}finally{p(!1)}}},S=!m&&r.jsxs(r.Fragment,{children:[!f&&r.jsx(Aw,{$topLevel:!v,onClick:()=>b(!0),children:"Reply"}),f&&r.jsxs(Dw,{$topLevel:!v,children:[r.jsx(Mw,{value:c,onChange:k=>d(k.target.value),placeholder:"Reply...",autoFocus:!0,onBlur:k=>{const E=k.target.value;setTimeout(()=>{E.trim()||b(!1)},150)},onKeyDown:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),w()),k.key==="Escape"&&!c.trim()&&b(!1)}}),r.jsx(Lw,{onClick:w,disabled:!c.trim()||u,title:"Send reply",children:r.jsx(Ue,{name:"PaperPlane",size:11})})]})]});return r.jsxs(yw,{$resolved:m,"data-testid":"comment-card",children:[r.jsxs(ww,{children:[s&&r.jsx(vw,{"data-testid":"unread-dot",title:"New activity"}),r.jsx(kw,{children:e.authorDisplayName}),r.jsx(vl,{children:wl(e.createdAt)}),m?r.jsx(Pw,{onClick:()=>a(!1),children:"Reopen"}):n&&r.jsx(Sw,{$checked:t,onClick:n,title:t?"Deselect":"Select for Send to Claude",children:t?"✓":""})]}),g&&e.elementSelector&&C&&r.jsxs(Cw,{$stale:i,title:i==="stale"?`${g.full}

${kl.stale}`:`${g.full}

${kl.fresh}`,onClick:()=>{window.dispatchEvent(new CustomEvent("comment-highlight-element",{detail:{selector:e.elementSelector,filePath:e.filePath,sticky:!0,descriptor:e.elementDescriptor}}))},onMouseEnter:()=>{window.dispatchEvent(new CustomEvent("comment-highlight-element",{detail:{selector:e.elementSelector,filePath:e.filePath,sticky:!1,descriptor:e.elementDescriptor}}))},onMouseLeave:()=>{window.dispatchEvent(new CustomEvent("comment-clear-highlight"))},children:[r.jsx(Ue,{name:"ArrowInSquare",size:10}),r.jsx("span",{children:g.short})]}),r.jsx(_w,{$highlighted:t,onClick:y,children:e.body}),v?r.jsxs($w,{children:[e.replies.map(k=>r.jsxs(Ew,{children:[r.jsxs(Tw,{children:[r.jsx(jw,{children:k.authorDisplayName}),r.jsx(vl,{children:wl(k.createdAt)})]}),r.jsx(Rw,{$highlighted:t,onClick:y,children:k.body})]},k.replyId)),r.jsx("div",{className:"reply-action",children:S})]}):S]})}function Gw(e,t){const s=[];t.trim()&&(s.push(t.trim()),s.push("")),s.push("Address these comments from my teammates:"),s.push("");for(const i of e){let n=`**${i.authorDisplayName}**`;const o=pu(i);o&&(n+=` (on ${o.short})`),s.push(`${n}:`),s.push(i.body);for(const a of i.replies)s.push(`  - **${a.authorDisplayName}** (reply): ${a.body}`);s.push("")}return s.join(`
`)}function Jw({isActive:e,onSent:t}){const{projectPath:s,data:i,addMessage:n,startStreaming:o}=vt(),{comments:a,commentsReadAt:c,loading:d,error:u,refresh:p,markRead:f,createComment:b,createReply:m,resolveComment:y}=gw(s),g=Zt(),C=Ps(),{showToast:v}=bt(),w=X=>Se=>{Tt(Se,X),v(`Couldn’t ${X}. Please try again.`,"error")},S=hw(s,e);Ye("comment-created",()=>void p({preserveWatermark:!0}));const k=nn(),E=ho(),T=l.useRef(!1);l.useEffect(()=>{e&&!T.current?f():!e&&T.current&&p(),T.current=e},[e,f,p]);const[_,R]=l.useState(new Map),[$,M]=l.useState(""),[L,z]=l.useState(!1),[J,I]=l.useState(!1),[te,ce]=l.useState(!1),[ue,me]=l.useState(""),de=new Set(a.filter(X=>!X.resolvedAt&&(_.get(X.commentId)??X.queuedForClaude)).map(X=>X.commentId)),De=X=>{R(Se=>{const oe=new Map(Se);return oe.set(X,!de.has(X)),oe})},Re=async()=>{if(!(!$.trim()||L)){z(!0);try{await b({body:$}),M("")}catch(X){w("post comment")(X)}finally{z(!1)}}},je=async()=>{if(de.size===0||J||!s)return;const X=k?.id||E[0]?.id;if(!X)return;const Se=i?.chats[X];if(Se){G.trackEvent("comment_send_to_claude",{count:de.size}),I(!0);try{const oe=Array.from(de),he=a.filter(O=>de.has(O.commentId)),pe=Gw(he,ue),Le=Se.messages.slice();n(X,{role:"user",content:pe,attachments:[]}),o(X);const re=await G.getSettings();G.sendMessage({message:pe,projectPath:s,projectName:i?.name,chatId:X,activeSkills:Se.composer.activeSkills,storedMessages:Le,model:Xn(re.model),storedTodos:Se.todos,displayMeta:{content:pe}});const U=await at().sendCommentsToChat({projectId:s,commentIds:oe,chatId:X}),D=new Set(U.markedCommentIds);R(O=>{const P=new Map(O);for(const B of oe)D.has(B)&&P.delete(B);return P}),me(""),ce(!1),await p({preserveWatermark:!0}),t?.(X)}catch(oe){w("send to Claude")(oe)}finally{I(!1)}}},H=a.filter(X=>!X.resolvedAt||X.replies.length>0),ke=a.length-H.length;return r.jsxs(xw,{"data-testid":"comments-pane",children:[r.jsxs(bw,{children:[d&&a.length===0&&r.jsx(Vr,{children:"Loading…"}),u&&r.jsx(Vr,{style:{color:h.accent.error},children:u}),!d&&!u&&a.length===0&&r.jsx(Vr,{children:"No comments yet. Leave feedback for your teammates below."}),H.map(X=>r.jsx(Ww,{comment:X,selected:de.has(X.commentId),unread:uu(X,c,C?.userId),staleness:mw(X,S),onToggleSelect:g?()=>De(X.commentId):void 0,onReply:Se=>m(X.commentId,Se).catch(oe=>{throw w("post reply")(oe),oe}),onResolve:Se=>y(X.commentId,Se).catch(w("resolve comment"))},X.commentId)),ke>0&&r.jsxs(Vr,{style:{padding:"12px 0",fontSize:11},children:[ke," resolved ",ke===1?"comment":"comments"," hidden"]})]}),g&&de.size>0&&r.jsxs(Iw,{children:[te?r.jsx(Ow,{value:ue,onChange:X=>me(X.target.value),placeholder:"How should Claude apply these?",autoFocus:!0,onKeyDown:X=>{X.key==="Escape"&&(ce(!1),me(""))}}):r.jsxs(r.Fragment,{children:[r.jsxs(zw,{children:[de.size," selected"]}),r.jsx(fe,{size:"sm",variant:"ghost",onClick:()=>ce(!0),children:"Add note"})]}),r.jsxs(fe,{size:"sm",variant:"primary",onClick:je,disabled:J,children:[r.jsx(Ue,{name:"PaperPlane",size:11,style:{marginRight:4}}),"Send to Claude"]})]}),r.jsx(Nw,{children:r.jsxs(Bw,{children:[r.jsx(Hw,{value:$,onChange:X=>M(X.target.value),placeholder:"Add a comment...",rows:$?3:1,onKeyDown:X=>{(X.metaKey||X.ctrlKey)&&X.key==="Enter"&&(X.preventDefault(),Re())}}),r.jsxs(Uw,{children:[r.jsx(Fw,{title:"Attach",children:r.jsx(Ue,{name:"Attachment",size:13})}),r.jsxs(fe,{size:"sm",variant:"primary",onClick:Re,disabled:!$.trim()||L,children:[r.jsx(Ue,{name:"PaperPlane",size:11,style:{marginRight:4}}),"Send"]})]})]})})]})}function Kw(e){return e.slice().sort((t,s)=>t.isDirectory&&!s.isDirectory?-1:!t.isDirectory&&s.isDirectory?1:t.name.localeCompare(s.name))}const Xw=[],Sl=e=>["listFiles",e];function Jo(e,t){const{filter:s,refreshDep:i}=t??{},n=Os(),{data:o,isFetching:a,refetch:c}=zs({queryKey:Sl(e),queryFn:async()=>{const b=await G.readdir(e);return Kw(b.filter(m=>!m.name.startsWith(".")))},enabled:!!e,staleTime:5e3}),d=l.useRef(i);l.useEffect(()=>{d.current!==i&&(d.current=i,n.invalidateQueries({queryKey:Sl(e)},{cancelRefetch:!1}))},[i,e,n]);const u=l.useRef(s);u.current=s;const p=l.useMemo(()=>{const b=o??Xw;return u.current?b.filter(u.current):b},[o]),f=l.useCallback(()=>void c(),[c]);return{files:p,loading:a,reload:f}}const qw=/\.(html?|htm)$/i,Vw=/\.napkin$/i,fu=/\.(png|jpe?g|gif|svg|webp|ico|bmp)$/i,Yw=/\.(txt|md|json|js|jsx|ts|tsx|css|scss|less|xml|yaml|yml|toml|ini|conf|sh|bash|zsh|py|rb|go|rs|java|c|cpp|h|hpp|cs|php|sql|graphql|vue|svelte|astro|woff2?)$/i;function Zw(e){return qw.test(e)?"html":Vw.test(e)?"napkin":fu.test(e)?"image":Yw.test(e)?"text":null}const Cl=e=>fu.test(e);function _l(e){const t=e.split(/[/\\]/);return t[t.length-1]||""}function mn(...e){return e.filter(Boolean).join("/").replace(/\/+/g,"/")}const Qw=x.div`
  @keyframes fileGridSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  display: contents;

  & i {
    ${e=>e.$spinning&&"animation: fileGridSpin 0.8s linear infinite;"}
  }
`;function ev({loading:e,onClick:t}){return r.jsx(Qw,{$spinning:e,children:r.jsx(_t,{icon:"Reload",size:26,variant:"default",onClick:t,title:"Reload"})})}const ct=e=>({header:"Tip",text:e}),ln=e=>({header:"Useful info",text:e}),tv=[ct("Talk to Claude: tap ⌘G to start voice input, or hold Space in a comment to dictate."),ct("Drop images here — they auto-attach to your next message as context."),ct("⌘V pastes screenshots straight from your clipboard into the chat view."),ct("Mount a local folder from the Import menu — Claude reads your codebase live, no copying."),ct("Attach skills or reference design systems from the Import menu."),ct('Click "Comment" in the toolbar, then click any element to annotate it.'),ct("Leave multiple comments before sending — they all batch into one message."),ct("Text edit mode lets you click text in the preview and rewrite it in-place."),ct("Comments and text edits appear as chips in the composer. Remove any you don't want."),ct("Knobs mode lets you drag-adjust CSS values live — sizes, colors, spacing. Use a prompt to control the UI."),ct('"Prototype" starts at wireframes, moves to hi-fi, and ends as a working interactive app.'),ct("Turn on speaker notes when creating decks to get a full presenter script."),ct('Ask Claude to "save this as a template" — it packages the workflow for reuse.'),ct("The Share menu lets you export as PPTX, PDF, or a folder to give to Claude Code."),ct('"Handoff to Claude Code" creates a dev-ready package with specs and structure. Download it, then tell Claude Code "create this design."'),ct("Use the Gear next to the Send button to change model."),ct("Claude can call the Claude API from inside your prototypes. No backend needed."),ct("Ask Claude to use the Web Speech API for interactive voice input and output."),ct("The napkin sketch tool lets you draw freehand — great for rough layouts."),ct("Import → Web Capture lets you copy elements from real web pages and paste them to Claude."),ct("A prototype nobody clicks is just a painting."),ct("The best design system is the one nobody notices."),ct("You cannot unsee a bad font pairing. Choose carefully."),ct("Every pixel argues for attention. Most should lose."),ct("The fastest way to finish a design is to ship it."),ct("Whitespace is not empty. It is the silence between the notes."),ct("If you need more than three colors, you have zero colors."),ct("The user's mental model is the only spec that matters."),ln("Freeze gum with an ice cube for 2 minutes. It peels right off shoes."),ln("Microwave a damp paper towel for 30 seconds. Crud wipes right off the inside."),ln("A rubber band over a stripped screw head gives enough grip to turn it."),ln("Run walnuts over scratched wood furniture. The oils fill the scratches."),ln("Store bread in the freezer. Toasting it from frozen tastes better than fresh."),ln("Rub a wooden cutting board with lemon and salt to deodorize it completely."),ln("Put a wooden spoon across a boiling pot. It won't boil over."),ln("Adding a splash of water instead of milk makes fluffier eggs. Milk makes them dense.")];function nv(e){const t=e.slice();for(let s=t.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[t[s],t[i]]=[t[i],t[s]]}return t}function rv(e,t=18,s=18e3){const[i]=l.useState(()=>nv(e)),[n,o]=l.useState(0),[a,c]=l.useState(0),{header:d,text:u}=i[n];return l.useEffect(()=>{if(a<u.length){const p=setTimeout(()=>c(f=>f+1),t);return()=>clearTimeout(p)}else{const p=setTimeout(()=>{o(f=>(f+1)%i.length),c(0)},s);return()=>clearTimeout(p)}},[a,u.length,n,i.length,t,s]),{header:d,charIdx:a,text:u}}const Yr=38,$l="linear-gradient(to bottom, rgba(0,0,0,0.015) 0%, rgba(0,0,0,0.045) 100%)",sv=x.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(15, 12, 8, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 12, 8, 1) 1px, transparent 1px);
  background-size: ${Yr}px ${Yr}px, ${Yr}px ${Yr}px;
  background-position: -0.5px -0.5px, -0.5px -0.5px;
  mask-image: ${$l};
  -webkit-mask-image: ${$l};
`,iv=Gt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,ov=Gt`
  from { opacity: 0; }
  to { opacity: 1; }
`,av=x.div`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  border-top: 1px solid rgba(15, 12, 8, 0.06);
  background: rgba(250, 249, 245, 0.7);
  padding: 14px 20px 16px;
`,hu=x.div`
  animation: ${ov} 0.2s ease-out;
`,gu=x.div`
  font-family: inherit;
  font-size: 10px;
  font-weight: 550;
  color: ${e=>e.$clay?"#D97757":"rgba(15,12,8,0.5)"};
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`,mu=x.div`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 14px;
  font-weight: 370;
  color: rgba(15, 12, 8, 0.7);
  line-height: 1.55;
  min-height: 44px;
`,lv=x.span`
  display: inline-block;
  width: 1.5px;
  height: 14px;
  background: #d97757;
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: ${iv} 0.8s step-end infinite;
`;function cv(){const{header:e,charIdx:t,text:s}=rv(tv);return r.jsxs(hu,{children:[r.jsxs(gu,{$clay:!0,children:[r.jsx("img",{src:Fd,alt:"",style:{width:12,height:12}}),e]}),r.jsxs(mu,{children:[s.slice(0,t),r.jsx(lv,{})]})]})}function dv(){return r.jsxs(hu,{children:[r.jsxs(gu,{children:[r.jsx(Ue,{name:"Upload",size:10,style:{color:"rgba(15,12,8,0.45)"}}),"Drop files here"]}),r.jsx(mu,{children:"Images, docs, references, Figma links, or folders — Claude will use them as context."})]})}function uv({isWorking:e}){return r.jsx(av,{children:e?r.jsx(cv,{},"working"):r.jsx(dv,{},"idle")})}const xu=44,Ko=1200,bu=800,yu=40,pv=!1,El=.04,Tl=h.accent.blue,fv=["Folders","Pages","Components","Stylesheets","Scripts","Images","Documents","Data","Other"],hv={html:"Pages",jsx:"Components",css:"Stylesheets",js:"Scripts",image:"Images",md:"Documents",json:"Data",other:"Other"},gv={html:"HTML page",jsx:"Component",css:"Stylesheet",js:"Script",image:"Image",md:"Document",json:"Data file",other:"File"},mv={html:"linear-gradient(135deg, #FDE8E0 0%, #F5D0C0 100%)",css:"linear-gradient(135deg, #DCEAF7 0%, #C8DAF0 100%)",jsx:"linear-gradient(135deg, #E0E8F0 0%, #D0D8E8 100%)",js:"linear-gradient(135deg, #FFF3D0 0%, #F0E4B8 100%)",image:"linear-gradient(135deg, #E0ECD8 0%, #D0DFC8 100%)",md:"linear-gradient(135deg, #EEEAF5 0%, #DED8EC 100%)",json:"linear-gradient(135deg, #F0EEE6 0%, #E5E2D8 100%)",other:"linear-gradient(135deg, #F0EEE6 0%, #E5E2D8 100%)"};function $r(e){const t=e.split(".").pop()?.toLowerCase()??"";return t==="html"||t==="htm"?"html":t==="jsx"||t==="tsx"?"jsx":t==="css"||t==="scss"||t==="less"?"css":t==="js"||t==="mjs"||t==="ts"?"js":/^(png|jpg|jpeg|gif|svg|webp|ico|bmp)$/.test(t)?"image":t==="md"||t==="txt"?"md":t==="json"||t==="yaml"||t==="yml"||t==="toml"?"json":"other"}function wu(e){return e.isDirectory?"Folder":gv[$r(e.name)]}function xv(e){return e.updatedAt?Fs(e.updatedAt):"—"}function bv(e){return e===void 0?null:e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}const vu=x.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;function yv({size:e=24}){const t=e,s=e*.7;return r.jsx(vu,{$size:e,children:r.jsxs("div",{style:{width:t,height:s,background:"#fff",border:`1px solid ${h.border.default}`,borderRadius:4,position:"relative",overflow:"hidden",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},children:[r.jsx("div",{style:{position:"absolute",top:-4,left:4,width:10,height:5,background:h.bg.hover,borderRadius:"3px 3px 0 0",borderLeft:`1px solid ${h.border.subtle}`,borderRight:`1px solid ${h.border.subtle}`,borderTop:`1px solid ${h.border.subtle}`}}),r.jsx("div",{style:{position:"absolute",top:5,left:0,right:0,bottom:0,background:h.bg.hover,borderTop:`1px solid ${h.border.subtle}`}})]})})}function wv({type:e,size:t=24}){const s=t*.75,i=t;return r.jsx(vu,{$size:t,children:r.jsxs("div",{style:{width:s,height:i,background:mv[e],borderRadius:3,border:`1px solid ${h.border.default}`,padding:3,display:"flex",flexDirection:"column",position:"relative",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},children:[r.jsx("div",{style:{position:"absolute",top:0,right:0,width:5,height:5,background:"rgba(255,255,255,0.6)",borderBottomLeftRadius:3,borderLeft:`0.5px solid ${h.border.default}`,borderBottom:`0.5px solid ${h.border.default}`}}),e==="image"?r.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ue,{name:"Image",size:8,style:{color:h.border.strong}})}):r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",paddingTop:3,gap:2},children:[r.jsx("div",{style:{height:1.5,background:"rgba(0,0,0,0.12)",borderRadius:1,width:"55%"}}),r.jsx("div",{style:{height:1,background:"rgba(0,0,0,0.08)",borderRadius:1,width:"80%"}}),r.jsx("div",{style:{height:1,background:"rgba(0,0,0,0.08)",borderRadius:1,width:"65%"}})]})]})})}function ku({entry:e,size:t}){return e.isDirectory?r.jsx(yv,{size:t}):r.jsx(wv,{type:$r(e.name),size:t})}const vv=x.div`
  flex-shrink: 0;
  padding: 10px 14px 6px;
  font-size: 10px;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${h.text.tertiary};
  background: ${h.bg.app};
  border-bottom: 1px solid rgba(15, 12, 8, ${El});
  border-top: ${e=>e.$isFirst?"none":`1px solid rgba(15, 12, 8, ${El})`};
  display: flex;
  align-items: center;
  gap: 6px;
  position: sticky;
  top: 0;
  z-index: 1;
`;x.span`
  font-size: 9px;
  font-weight: 500;
  color: ${h.text.disabled};
  background: ${h.bg.hover};
  padding: 1px 5px;
  border-radius: 8px;
`;function kv({label:e,count:t,isFirst:s}){return r.jsxs(vv,{$isFirst:s,children:[e,pv]})}const Su=x.div`
  height: ${xu}px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px 0 ${e=>14+e.$depth*20}px;
  background: ${e=>e.$selected?Tl:"transparent"};
  cursor: default;
  border-bottom: 0.5px solid ${h.border.subtle};

  &:hover {
    background: ${e=>e.$selected?Tl:h.bg.hover};
  }
`,Sv=x.div`
  visibility: hidden;
  flex-shrink: 0;

  ${Su}:hover & {
    visibility: visible;
  }

  & button {
    color: ${e=>e.$selected?"rgba(255,255,255,0.7)":h.text.tertiary};
  }
`,Cv=x.div`
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  position: relative;
  
  /* Invisible hit-area extender — the caret glyph stays 14px wide in the layout flow, but clicks within ±10px land here instead of on the row. */
  &::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
`,_v=x.div`
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${e=>e.$selected?"#fff":h.text.primary};
`,$v=x.div`
  font-size: 10px;
  margin-top: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${e=>e.$selected?"rgba(255,255,255,0.6)":h.text.tertiary};
  min-height: 13px;
`,Ev=x.span`
  width: 80px;
  flex-shrink: 0;
  font-size: 11px;
  text-align: right;
  color: ${e=>e.$selected?"rgba(255,255,255,0.5)":h.text.tertiary};
`;function Cu({entry:e,depth:t=0,selected:s,expanded:i,singleClickOpen:n,onSelect:o,onOpen:a,onToggle:c,onContextMenu:d}){const u=Math.min(xu-10,28),p=[e.name];e.updatedAt&&p.push(`Modified ${Fs(e.updatedAt)}`);const f=p.join(" · "),b=()=>{o(),n&&a()};return r.jsxs(Su,{$depth:t,$selected:s,onClick:b,onDoubleClick:n?void 0:a,onContextMenu:d,title:f,children:[e.isDirectory&&c?r.jsx(Cv,{onClick:m=>{m.stopPropagation(),c()},children:r.jsx(Ue,{name:i?"CaretDown":"CaretRight",size:9,style:{color:s?"rgba(255,255,255,0.7)":h.text.tertiary}})}):r.jsx("div",{style:{width:14}}),r.jsx(ku,{entry:e,size:u}),r.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center"},children:[r.jsx(_v,{$selected:s,children:e.name}),r.jsx($v,{$selected:s,children:wu(e)})]}),r.jsx(Ev,{$selected:s,children:xv(e)}),r.jsx(Sv,{$selected:s,children:r.jsx(_t,{icon:"DotsHorizontal",size:22,variant:"ghost",title:"More",onClick:m=>{m.stopPropagation(),d?.(m)}})})]})}const jl=x.div`
  flex: 0 0 ${yu}%;
  min-width: 180px;
  padding: 20px;
  background: ${h.bg.app};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  @media ${ed} {
    display: none;
  }
`,Tv=x.iframe`
  width: ${Ko}px;
  height: ${bu}px;
  border: none;
  pointer-events: none;
  background: #fff;
  transform-origin: 0 0;
  position: absolute;
  top: 0;
  left: 0;
`,ii=x.div`
  width: 100%;
  aspect-ratio: ${Ko} / ${bu};
  background: ${h.bg.muted};
  border-radius: 8px;
  border: 1px solid ${h.border.default};
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06);
`,jv=x.div`
  font-size: 14px;
  font-weight: 600;
  color: ${h.text.primary};
  text-align: center;
  margin-bottom: 4px;
  word-break: break-word;
`,Rv=x.div`
  font-size: 11px;
  color: ${h.text.secondary};
  text-align: center;
  line-height: 1.4;
  margin-bottom: 14px;
`,Av=x.div`
  font-size: 11px;
  color: ${h.text.tertiary};
  text-align: center;
`;function Dv({entry:e,imageSrc:t,iframeSrc:s,onOpen:i}){const n=l.useRef(null),{width:o=0}=Of({ref:n,box:"border-box"}),a=o/Ko;return s?r.jsx(ii,{ref:n,onClick:i,title:"Click to open",children:o>0&&r.jsx(Tv,{src:s,sandbox:`allow-scripts${Rn()?" allow-same-origin":""}`,loading:"lazy",style:{transform:`scale(${a})`}},s)}):t?r.jsx(ii,{onClick:i,title:"Click to open",children:r.jsx("img",{src:t,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}):r.jsx(ii,{onClick:i,title:"Click to open",children:r.jsx(ku,{entry:e,size:48})})}function Mv({entry:e,imageSrc:t,iframeSrc:s,onOpen:i}){if(!e)return r.jsx(jl,{children:r.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:h.text.tertiary,fontSize:12},children:"Select a file to preview"})});const n=e.isDirectory?"Folder":$r(e.name).toUpperCase(),o=[e.updatedAt&&`Modified ${Fs(e.updatedAt)}`,!e.isDirectory&&bv(e.size),n].filter(Boolean).join(" · ");return r.jsxs(jl,{children:[r.jsx(Dv,{entry:e,imageSrc:t,iframeSrc:s,onOpen:i}),r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:12,marginBottom:12},children:r.jsx(fe,{variant:"default",size:"xs",icon:"ArrowOutSquare",onClick:i,children:"Open"})}),r.jsx(jv,{children:e.name}),r.jsx(Rv,{children:wu(e)}),r.jsx(Av,{children:o})]})}function Lv({projectPath:e,folderRel:t,selected:s,singleClickOpen:i,onSelect:n,onOpen:o,onContextMenu:a}){const c=mn(e,t),{files:d}=Jo(c,{filter:u=>u.name!=="project-data.json"});return r.jsx(r.Fragment,{children:d.map(u=>{const p=mn(t,u.name);return r.jsx(Cu,{entry:u,depth:1,selected:s===p,singleClickOpen:i,onSelect:()=>n(p,u),onOpen:()=>o(p,u),onContextMenu:f=>a(f,p,u)},p)})})}const Pv=x.div`
  flex: 1;
  display: flex;
  min-height: 0;
`,Ov=x.div`
  flex: ${e=>e.$full?"1 1 100%":`1 1 ${100-yu}%`};
  min-width: 200px;
  overflow: auto;
  border-right: ${e=>e.$full?"none":`1px solid ${h.border.subtle}`};
  display: flex;
  flex-direction: column;

  @media ${ed} {
    border-right: none;
  }
`,Rl=x.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Covers the transient "Loading…" string; the persistent empty-state
   * headline uses DisplayHeader for its own typography. */
  font-family: inherit;
  font-size: 13px;
  color: ${h.text.tertiary};
`,Fv=x.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;function Iv({files:e,loading:t,projectPath:s,currentFolder:i,serverPort:n,onOpen:o,onContextMenu:a,onStartWithSketch:c}){const d=go(),[u,p]=l.useState(null),[f,b]=l.useState(void 0),[m,y]=l.useState({}),g=l.useMemo(()=>{const T={};for(const _ of e){const R=_.isDirectory?"Folders":hv[$r(_.name)];(T[R]??=[]).push(_)}for(const _ of Object.values(T))_.sort((R,$)=>{const M=R.updatedAt?Date.parse(R.updatedAt):0;return($.updatedAt?Date.parse($.updatedAt):0)-M});return fv.filter(_=>T[_]?.length).map(_=>({label:_,files:T[_]}))},[e]);l.useEffect(()=>{if(u||e.length===0)return;const T=g.find(_=>_.label!=="Folders")?.files[0]??g[0]?.files[0];T&&(p(mn(i,T.name)),b(T))},[g,e.length,u,i]),l.useEffect(()=>{p(null),b(void 0),y({})},[i]),l.useEffect(()=>{if(!u)return;const _=(i?u.slice(i.length+1):u).split("/")[0];e.some(R=>R.name===_)||(p(null),b(void 0))},[e,u,i]);const C=(T,_)=>{p(T),b(_)},v=T=>y(_=>({..._,[T]:!_[T]})),w=f&&!f.isDirectory?$r(f.name):void 0,S=w==="image"&&u?G.getPreviewUrl(n,u):void 0,k=w==="html"&&u?G.getPreviewUrl(n,u,{forIframe:!0}):void 0,E=!t&&e.length===0;return r.jsxs(Pv,{children:[r.jsxs(Ov,{$full:E||d,children:[t&&e.length===0&&r.jsx(Rl,{children:"Loading…"}),E&&r.jsxs(Rl,{children:[r.jsx(sv,{}),r.jsxs(Fv,{children:[r.jsx(Pf,{variant:"h2",dim:!0,centered:!0,children:"Creations will appear here"}),c&&r.jsx(fe,{variant:"default",size:"md",icon:"Edit",onClick:c,children:"Start with a sketch"})]})]}),g.map((T,_)=>r.jsxs($t.Fragment,{children:[r.jsx(kv,{label:T.label,count:T.files.length,isFirst:_===0}),T.files.map(R=>{const $=mn(i,R.name),M=!!m[$];return r.jsxs($t.Fragment,{children:[r.jsx(Cu,{entry:R,selected:u===$,expanded:M,singleClickOpen:d&&!R.isDirectory,onSelect:()=>C($,R),onOpen:()=>o(R,$),onToggle:()=>v($),onContextMenu:L=>a(L,R,$)}),R.isDirectory&&M&&r.jsx(Lv,{projectPath:s,folderRel:$,selected:u,singleClickOpen:d,onSelect:C,onOpen:(L,z)=>o(z,L),onContextMenu:(L,z,J)=>a(L,J,z)})]},$)})]},T.label))]}),!E&&!d&&r.jsx(Mv,{entry:f,imageSrc:S,iframeSrc:k,onOpen:()=>{f&&u&&o(f,u)}})]})}const Al=x.div`
  display: flex;
  flex-direction: column;
  background: ${h.bg.surface};
  height: 100%;
`,zv=x.div`
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  ${e=>e.$dragOver&&`
    background: ${h.accent.primary}11;
    outline: 2px dashed ${h.accent.primary};
    outline-offset: -4px;
  `}
`,Nv=x.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 4px;
  overflow: hidden;
`,Bv=x.button`
  background: ${e=>e.$isHovered&&!e.$isLast?h.bg.hover:"transparent"};
  border: none;
  border-radius: 4px;
  padding: 2px 5px;
  color: ${e=>e.$isLast?h.text.secondary:h.text.tertiary};
  font-size: 11px;
  font-family: inherit;
  font-weight: ${e=>e.$isLast?500:400};
  cursor: ${e=>e.$isLast?"default":"pointer"};
  outline: none;
  white-space: nowrap;
  transition: background 0.1s ease, color 0.1s ease;

  &:hover {
    color: ${e=>e.$isLast?h.text.secondary:h.text.primary};
  }
`,Hv=x.span`
  color: ${h.text.disabled};
  font-size: 10px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;function oi(e){const t=new Uint8Array(e);let s="";const i=8192;for(let n=0;n<t.length;n+=i){const o=t.subarray(n,n+i);s+=String.fromCharCode.apply(null,o)}return btoa(s)}function Dl({onAttachments:e,refreshKey:t,onFileOpened:s}){const{projectPath:i,serverPort:n,openFile:o,navigateFolder:a,navigateBack:c}=vt(),d=gt("omelette_aux_fines_herbes").on,u=jr(),p=$o(i),f=Zt(),{showToast:b}=bt(),m=Yn(),y=Ld(),g=mo(),C=td(),v=nn(),[w,S]=l.useState(!1),[k,E]=l.useState(!1),[T,_]=l.useState(!1);Nt(k||T);const[R,$]=l.useState({open:!1,position:{x:0,y:0},entry:null}),M=g?.folderPath||"",L=oe=>new Promise((he,pe)=>{const Le=oe.createReader(),re=[],U=()=>{Le.readEntries(D=>{D.length===0?he(re):(re.push(...D),U())},pe)};U()}),z=oe=>new Promise((he,pe)=>oe.file(he,pe)),J=async(oe,he,pe)=>{const Le=await L(oe);for(const re of Le){const U=`${he}/${re.name}`;if(re.isFile)try{const D=await z(re),O=D.type||"application/octet-stream";if(xr(O)){const P=await D.arrayBuffer(),B=oi(P);pe.push({type:"text",name:U,data:B,mimeType:O})}else pe.push({type:"binary",name:U,mimeType:O,blob:D})}catch{}else re.isDirectory&&!ua.has(re.name)&&await J(re,U,pe)}},I=async oe=>{oe.preventDefault(),oe.stopPropagation(),S(!1);const he=oe.dataTransfer.items,pe=[],Le=[];for(let P=0;P<he.length;P++){const B=he[P];if(B.kind==="file"){const ne=B.webkitGetAsEntry?.()||null,se=B.getAsFile(),Oe=B.getAsFileSystemHandle,Me=ne?.isDirectory&&typeof Oe=="function"?Oe.call(B):null;Le.push({entry:ne,file:se,handlePromise:Me})}}const re=[];for(const{entry:P,file:B,handlePromise:ne}of Le)if(P?.isDirectory){if(ua.has(P.name)){b(`Skipped folder “${P.name}” — ignored on upload.`,"info");continue}const se=ne?await ne:null;if(se?.kind==="directory"){const Oe=se;let Me=!1;try{await Oe.getDirectoryHandle(".git"),Me=!0}catch{}const Fe=await Zc(Oe,hn);if(Me||Fe>hn){await m({title:`Link “${P.name}” folder?`,message:`This folder ${Fe>hn?"contains too many files to upload":"looks like a git repo"}. Link a folder to let Claude explore files on your device and upload only the files it needs.`,confirmLabel:"Link folder",cancelLabel:"Skip"})&&re.push(Oe);continue}}await J(P,P.name,pe)}else if(B){if(d&&jn(B)){const se=await p.attach(B);se&&e?.([se]);continue}try{const se=B.type||"application/octet-stream";if(xr(se)){const Oe=await B.arrayBuffer(),Me=oi(Oe);pe.push({type:"text",name:B.name,data:Me,mimeType:se})}else pe.push({type:"binary",name:B.name,mimeType:se,blob:B})}catch{}}if(pe.length>hn){const P=await Qc();P&&re.push(P),pe.length=0}if(re.length>0&&(fs(i,re),e?.(re.map(P=>({id:crypto.randomUUID(),name:P.name,type:"folder"}))),b(`Linked ${re.map(P=>P.name).join(", ")} as a codebase — Claude will copy only the files it needs.`,"info")),pe.length===0)return;if(u){b(Wt,"error");return}const U=M||await bn(),D=[];E(!0);const O=pe.length>0?y(pe.length):null;try{if(pe.length>0){const P=await G.uploadData(i,pe,U,O?.update);P.files&&D.push(...P.files);const B=Dn(P.errors);B&&b(B,"error")}}catch(P){Tt(P,"upload file"),b("Couldn’t upload file. Please try again.","error");return}finally{O?.done(),E(!1)}D.length>0&&e&&e(D.map(P=>({id:Math.random().toString(36).slice(2,15),name:P.name,path:P.path,type:Cl(P.name)?"image":"file"})))},te=mn(i,M),{files:ce,loading:ue,reload:me}=Jo(te,{filter:oe=>oe.name!=="project-data.json",refreshDep:t});if(!g||!C)return r.jsx(Al,{children:r.jsx("span",{style:{fontSize:12,color:h.text.primary},children:"Loading..."})});const Re=[{label:"Download",icon:"Download",onClick:async()=>{if(!R.entry||T)return;const oe=R.entry,he=R.relPath??mn(M,oe.name),pe=As(),Le={};pe&&(Le[Ds]=pe),_(!0);try{const re=await fetch(`/design/v1/design/projects/${encodeURIComponent(i)}/download?path=${encodeURIComponent(he)}`,{headers:Le});if(!re.ok)throw new Error(`Download failed: ${re.status}`);const U=await re.blob(),D=URL.createObjectURL(U),O=document.createElement("a");O.href=D;const P=re.headers.get("content-disposition")??"",B=P.match(/filename\*=UTF-8''([^;]+)/i),ne=P.match(/filename="?([^";]+)"?/);O.download=(()=>{if(B)try{return decodeURIComponent(B[1])}catch{}return ne?.[1]||oe.name})(),document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(D)}catch{b("Download failed — please try again.","error")}finally{_(!1)}}},{separator:!0},{label:"Delete",icon:"Trash",destructive:!0,onClick:async()=>{const oe=R.entry;if(!oe)return;const he=R.relPath??mn(M,oe.name);if(await m({title:oe.isDirectory?"Delete folder?":"Delete file?",message:oe.isDirectory?`Delete folder "${oe.name}" and everything inside it? This cannot be undone.`:`Delete "${oe.name}"? This cannot be undone.`,danger:!0}))try{await G.deleteFile(i,he)}catch(Le){Tt(Le,"delete file"),b("Couldn’t delete file. Please try again.","error")}}}],je=M!=="",H=g.activeFileTab===-1,ke=l.useCallback(async()=>{G.trackEvent("composer_attach_napkin",{});try{const oe=await G.createNapkin(i);oe.path&&(o(oe.path),e?.([{id:Math.random().toString(36).slice(2,15),name:oe.name,path:oe.path,type:"canvas"}]))}catch(oe){Tt(oe,"create sketch"),b("Couldn’t create sketch. Please try again.","error")}},[i,o,e,b]),X=l.useCallback(async()=>{if(u){b(Wt,"error");return}G.trackEvent("file_paste",{});try{const oe=await navigator.clipboard.readText().catch(()=>""),he=Lo(oe);if(he){const re=await Po(i,he);e?.(re),b(`Added ${re.length} web ${re.length===1?"capture":"captures"}`,"success");return}const pe=await navigator.clipboard.read(),Le=[];for(const re of pe){const U=re.types.find(O=>O.startsWith("image/"));if(U){const O=await re.getType(U),P=U.split("/")[1]==="jpeg"?"jpg":U.split("/")[1],B=`pasted-${Date.now()}.${P}`;Le.push({type:"binary",name:B,mimeType:U,blob:O});continue}if(re.types.includes("text/plain")){const P=await(await re.getType("text/plain")).text(),B=btoa(unescape(encodeURIComponent(P))),ne=`pasted-${Date.now()}.txt`;Le.push({type:"text",name:ne,data:B,mimeType:"text/plain"});continue}const D=re.types[0];if(D){const O=await re.getType(D),P=D.split("/")[1]||"bin",B=`pasted-${Date.now()}.${P}`;if(xr(D)){const ne=await O.arrayBuffer(),se=oi(ne);Le.push({type:"text",name:B,data:se,mimeType:D})}else Le.push({type:"binary",name:B,mimeType:D,blob:O})}}if(Le.length>0){const re=M||await bn(),U=await G.uploadData(i,Le,re);U.files&&U.files.length>0&&e&&e(U.files.map(O=>({id:Math.random().toString(36).slice(2,15),name:O.name,path:O.path,type:Cl(O.name)?"image":"file"})));const D=Dn(U.errors);D&&b(D,"error")}}catch(oe){Tt(oe,"paste file"),b("Couldn’t paste from clipboard. Please try again.","error")}},[M,u,i,e,b]),Se=["project",...M.split("/").filter(Boolean)];return r.jsxs(Al,{children:[p.modal,H?r.jsxs(r.Fragment,{children:[r.jsxs(Is,{children:[r.jsx(_t,{icon:"ArrowUp",size:26,variant:"default",disabled:!je,onClick:()=>{G.trackEvent("file_navigate",{via:"up"}),c()},title:"Up one level"}),r.jsx(ev,{loading:ue,onClick:me}),r.jsx(Nv,{children:Se.map((oe,he)=>{const pe=he===Se.length-1;return r.jsxs($t.Fragment,{children:[he>0&&r.jsx(Hv,{children:r.jsx(Ue,{name:"CaretRight",size:8})}),r.jsx(Bv,{$isLast:pe,onClick:()=>{if(!pe)if(G.trackEvent("file_navigate",{via:"breadcrumb"}),he===0)a("");else{const Le=Se.slice(1,he+1).join("/");a(Le)}},children:oe})]},he)})}),r.jsx("div",{style:{flex:1}}),f&&r.jsxs(r.Fragment,{children:[r.jsx(fe,{variant:"ghost",size:"xs",icon:"Edit",onClick:ke,title:"Create a new sketch",children:"New sketch"}),r.jsx(fe,{variant:"ghost",size:"xs",icon:"Clipboard",onClick:X,title:"Paste from clipboard",children:"Paste"})]})]}),r.jsxs(zv,{$dragOver:w,onDragOver:oe=>{oe.preventDefault(),S(!0)},onDragLeave:oe=>{oe.currentTarget.contains(oe.relatedTarget)||S(!1)},onDrop:oe=>{I(oe)},children:[r.jsx(Iv,{files:ce,loading:ue,projectPath:i,currentFolder:M,serverPort:n,onStartWithSketch:f?ke:void 0,onOpen:(oe,he)=>{oe.isDirectory?(G.trackEvent("file_navigate",{via:"list"}),a(he)):(G.trackEvent("file_open",{}),o(he),s?.(he))},onContextMenu:(oe,he,pe)=>{oe.preventDefault(),$({open:!0,position:{x:oe.clientX,y:oe.clientY},entry:he,relPath:pe})}}),r.jsx(uv,{isWorking:!!v?.streaming?.isLoading})]})]}):r.jsx("div",{style:{flex:1,padding:14},children:r.jsxs("span",{children:["Viewing: ",C[g.activeFileTab-1]]})}),r.jsx(An,{open:R.open,onClose:()=>$(oe=>({...oe,open:!1})),anchorPosition:R.position,items:Re})]})}const _u=56,Uv=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 6px;
  margin-top: 6px;
`,$u=x.div`
  position: relative;
  height: ${_u}px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${h.border.default};
  background: ${h.bg.muted};

  img {
    display: block;
    height: 100%;
    min-width: 36px;
    max-width: 120px;
    object-fit: cover;
  }
`,Wv=x.button`
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  padding: 2px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.1s ease;

  ${$u}:hover & {
    opacity: 1;
  }
`,Gv=e=>e?Math.min(120,Math.max(36,Math.round(_u*e))):void 0;function Eu({attachments:e,projectPath:t,onRemove:s}){return e.length===0?null:r.jsx(Uv,{children:e.map(i=>{const n=Gv(i.aspectRatio);return r.jsxs($u,{title:i.name,style:n!==void 0?{width:n}:void 0,children:[i.path&&r.jsx("img",{src:wo(i.path)??Ls(t,i.path),alt:i.name,style:n!==void 0?{width:"100%",maxWidth:"none"}:void 0}),r.jsx(Wv,{type:"button",onClick:()=>s(i.id),"aria-label":"Remove image",children:r.jsx(Ue,{name:"X",size:9})})]},i.id)})})}const Jv=/^image\.(png|jpe?g|gif|webp|bmp|avif|tiff?)$/i;function Tu(e){const{projectPath:t,onUploaded:s,onUploadingChange:i}=e,{showToast:n}=bt(),o=jr(),[a,c]=l.useState(!1);Nt(a);const d=l.useRef(i);d.current=i;const u=l.useCallback(y=>{c(y),d.current?.(y)},[]),p=l.useRef(void 0),f=l.useCallback(async y=>{if(o){n(Wt,"error");return}const g=y.map((v,w)=>{const S=v.type||"image/png",k=v.name.match(Jv),E=!v.name||k?`pasted-${Date.now()}-${w}.${k?.[1]||S.split("/")[1]||"png"}`:v.name;return{type:"binary",name:fn(E),mimeType:S,blob:v}}),C=Promise.all(y.map(async(v,w)=>{try{const S=await createImageBitmap(v),k=S.width/S.height;return S.close(),[g[w].name,k]}catch{return[g[w].name,void 0]}})).then(v=>new Map(v));u(!0);try{const[v,w]=await Promise.all([G.uploadData(t,g,await bn()),C]);if(v.files&&v.files.length>0){const k=new Map(g.map(_=>[_.name,_])),E=_=>_.replace(/-(?:\d+|[0-9a-f]{8})(\.[^.]+)$/,"$1"),T=_=>k.get(_)??k.get(E(_));for(const _ of v.files){const R=T(_.name);R?.blob&&yo(_.path,R.blob)}s(v.files.map(_=>({id:crypto.randomUUID(),name:_.name,path:_.path,type:_.type,aspectRatio:w.get(_.name)??w.get(E(_.name))})))}const S=Dn(v.errors);S&&n(S,"error")}catch(v){Tt(v,"upload image"),n("Couldn’t upload image. Please try again.","error")}finally{u(!1)}},[o,t,s,n,u]);p.current=f;const b=l.useCallback(y=>{const g=Array.from(y.clipboardData.files).filter(C=>(C.type||"").startsWith("image/"));g.length!==0&&(y.preventDefault(),p.current?.(g))},[]),m=l.useCallback(()=>{const y=document.createElement("input");y.type="file",y.accept="image/*",y.multiple=!0,y.style.display="none",y.onchange=()=>{const g=Array.from(y.files??[]).filter(C=>(C.type||"").startsWith("image/"));y.remove(),g.length>0&&p.current?.(g)},y.addEventListener("cancel",()=>y.remove()),document.body.appendChild(y),y.click()},[]);return{onPaste:b,onPick:m,uploading:a}}const Xo="Requires edit permission";function Kv(e,t,s,i){hs(e)&&(Ff.updateProjectData(e,{type:"SET_VERSION_STATUS",name:t,path:s,status:i}),at().setAssetStatus({projectId:e,name:t,path:s,status:If(i)}).catch(n=>Kn("design.asset_rpc_failed",{attrs:{op:"setStatus",path:s,error:String(n)}})))}function Xv(e){const[t,s]=e.split("/");if(t==="ui_kits"&&s){const i=s.replace(/[-_]/g," ").replace(/\b\w/g,n=>n.toUpperCase());return{key:`ui-${s}`,name:`UI Kit — ${i}`}}return t==="slides"?{key:"slides",name:"Slides"}:{key:"brand",name:"Brand"}}function _n(e){for(let t=e.versions.length-1;t>=0;t--)if(e.versions[t].pinned)return e.versions[t];return e.versions.at(-1)}const ai=x.div`
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(to bottom, white, ${h.bg.app});
`,qv=x.div`
  display: flex;
  flex-direction: column;
  gap: ${Nc}px;
  padding: 30px 16px 80px;
  max-width: 760px;
  margin: 0 auto;
`,Er=x.div`
  display: grid;
  grid-template-rows: ${e=>e.$open?"1fr":"0fr"};
  transition: grid-template-rows ${e=>e.$ms??250}ms cubic-bezier(0.2, 0, 0, 1);
  > div {
    overflow: hidden;
    opacity: ${e=>e.$open?1:0};
    transition: opacity ${e=>e.$ms??250}ms ease-out ${e=>e.$open?"80ms":"0ms"};
  }
`,Gi=x.div`
  display: flex;
  gap: 4px;
  && button i {
    font-size: 14px;
    margin: -1px;
  }
`,Vv=x.div`
  ${e=>e.$expanded?`
    overflow: hidden;
  `:`
    &:hover { background: ${h.bg.hover}; }
  `}
`,Yv=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 8px;
  min-height: 24px;
  padding: ${e=>e.$expanded?"10px 12px":"8px 12px"};
  transition: background-color 0.2s ease-out;
  ${e=>e.$expanded&&`background: ${h.bg.hover};`}
  > ${Gi} {
    align-self: center;
  }
  /* ReviewActions' feedback Collapse breaks to its own full-width row */
  > ${Er} {
    flex-basis: 100%;
  }
`,Zv=x.span`
  font-size: 12px;
  font-weight: 500;
  color: ${h.text.primary};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Qv=x.div`
  font-size: 11px;
  color: ${h.text.tertiary};
  margin-top: 2px;
`,Ml=x.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,e1=x.div`
  background: white;
  border-top: 1px solid ${h.border.subtle};
  overflow: hidden;
  iframe {
    display: block;
    border: 0;
    pointer-events: none;
  }
  &:hover iframe {
    pointer-events: auto;
  }
`;function ju({src:e,path:t,title:s,viewport:i,maxHeight:n=500,fallback:o=60}){const a=l.useRef(null),c=l.useRef(null),[d,u]=l.useState(null),[p,f]=l.useState(0);l.useEffect(()=>{const S=a.current;if(!S)return;const k=new ResizeObserver(([E])=>f(E.contentRect.width));return k.observe(S),()=>k.disconnect()},[]),id(t,c),l.useLayoutEffect(()=>{u(null)},[e]),l.useEffect(()=>{const S=c.current;if(!S)return;const k=E=>{if(E.source===S.contentWindow&&E.data?.type==="omelette:height"){const T=E.data.height;typeof T=="number"&&Number.isFinite(T)&&u(T)}};return window.addEventListener("message",k),()=>window.removeEventListener("message",k)},[]);const b=i?.width??p,m=d??i?.height??o,y=i?.height?n/i.height:1,g=p>0&&b>0?Math.min(p/b,y,1):1,C=Math.min(m*g,n),v=b*g,w=Math.min(m,n/(g||1));return r.jsx("div",{ref:a,style:{height:C,transition:"height 0.35s cubic-bezier(0.2, 0, 0, 1)",display:"flex",justifyContent:"center"},children:r.jsx("div",{style:{width:v,height:C,overflow:"hidden"},children:r.jsx("iframe",{ref:c,src:e,title:s,sandbox:`allow-scripts${Rn()?" allow-same-origin":""}`,loading:"lazy",style:{width:b||"100%",height:w,transform:g<1?`scale(${g})`:void 0,transformOrigin:"top left",transition:"transform 0.35s cubic-bezier(0.2, 0, 0, 1)",background:"transparent",colorScheme:"normal"}})})})}const t1=x.div`
  color: ${h.text.tertiary};
  font-size: 13px;
  padding: 40px 20px;
  text-align: center;
`,Ru=x.div`
  height: 3px;
  background: ${h.bg.muted};
  border-radius: 2px;
  overflow: hidden;
  > div {
    height: 100%;
    background: ${h.accent.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  /* Still working but todo list is exhausted — sweep a highlight across the
     full bar so it doesn't read as "done" while the agent finishes up. */
  ${e=>e.$indeterminate&&zf`
      > div {
        width: 100% !important;
        background: linear-gradient(
          90deg,
          ${h.accent.primary} 0%,
          ${h.accent.primary} 35%,
          rgba(255, 255, 255, 0.65) 50%,
          ${h.accent.primary} 65%,
          ${h.accent.primary} 100%
        );
        background-size: 200% 100%;
        animation: ds-progress-shimmer 1.2s linear infinite;
      }
      @keyframes ds-progress-shimmer {
        from { background-position: 200% 0; }
        to { background-position: -200% 0; }
      }
    `}
`,n1=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
`,Ll=x.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  cursor: default;
`,r1=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  text-align: center;
`,s1=x.div`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 24px;
  font-weight: 330;
  font-variation-settings:
    'wght' 330,
    'opsz' 36;
  color: ${h.text.primary};
  line-height: 1.3;
`,i1=x.div`
  font-size: 13px;
  color: ${h.text.tertiary};
`,o1=x.div`
  background: white;
  position: relative;
  iframe {
    border: 0;
    pointer-events: none;
  }
  &:hover iframe {
    pointer-events: auto;
  }
`,a1=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 8px;
  justify-content: flex-end;
  > ${Er} {
    flex-basis: 100%;
  }
`,l1=x.div`
  margin-top: 6px;
  && textarea {
    padding: 5px 8px;
    border: 1px solid ${h.border.default};
    border-radius: 5px;
    background: white;
    box-sizing: border-box;
  }
`,cn={green:{bg:"#f2f8ea",bgHover:"#eaf3dd",bgActive:"#e2ecd0",fg:"#4a7b00",border:"rgba(74, 123, 0, 0.25)",shadow:"0 1px 3px rgba(74, 123, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7)"},red:{bg:"#fef3f3",bgHover:"#fbebeb",bgActive:"#f7dddd",fg:"#b93535",border:"rgba(185, 53, 53, 0.25)",shadow:"0 1px 3px rgba(185, 53, 53, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7)"}},Pl=x.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  border-radius: 6px;
  cursor: default;
  user-select: none;
  /* Active = solid fill so the toggled-on state reads as a selection (the
     feedback box opening below is the consequence of having selected it). */
  background: ${e=>e.$active?cn[e.$tint].fg:cn[e.$tint].bg};
  color: ${e=>e.$active?"#fff":cn[e.$tint].fg};
  border: 1px solid
    ${e=>e.$active?cn[e.$tint].fg:cn[e.$tint].border};
  box-shadow: ${e=>e.$active?"none":cn[e.$tint].shadow};
  &:hover:not(:disabled) {
    background: ${e=>e.$active?cn[e.$tint].fg:cn[e.$tint].bgHover};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  & > i {
    font-size: 12px;
    color: inherit;
  }
`;function Au({onApprove:e,onFlag:t}){const{projectPath:s}=vt(),i=Zt(),[n,o]=l.useState(!1),[a,c]=l.useState(""),[d,u]=l.useState([]),p=l.useRef(null);l.useEffect(()=>{n&&p.current?.focus()},[n]);const{onPaste:f,onPick:b,uploading:m}=Tu({projectPath:s,onUploaded:v=>u(w=>[...w,...v])}),y=i?{}:{disabled:!0,title:Xo},g=()=>{m||(t(a,d),o(!1),c(""),u([]))},C=v=>v.stopPropagation();return r.jsxs(r.Fragment,{children:[r.jsxs(Gi,{onClick:C,children:[r.jsxs(Pl,{$tint:"green",onClick:e,...y,children:[r.jsx(Ue,{name:"ThumbsUp",size:12}),"Looks good"]}),r.jsxs(Pl,{$tint:"red",$active:n,onClick:()=>o(!n),...y,children:[r.jsx(Ue,{name:"ThumbsDown",size:12}),"Needs work…"]})]}),r.jsx(Er,{$open:n,onClick:C,children:r.jsx("div",{children:r.jsxs(l1,{onKeyDown:v=>{v.key==="Escape"&&o(!1)},children:[r.jsx(Xc,{ref:p,value:a,onChange:c,onSubmit:g,onPaste:f,placeholder:"Describe what you'd prefer...",minRows:2}),r.jsx(Eu,{attachments:d,projectPath:s,onRemove:v=>u(w=>w.filter(S=>S.id!==v))}),r.jsxs(Gi,{style:{marginTop:6,marginBottom:6,justifyContent:"flex-end"},children:[r.jsx(_t,{icon:"Image",size:22,iconSize:13,variant:"ghost",title:"Attach image",disabled:m,onClick:b,style:{marginRight:"auto"}}),r.jsx(fe,{variant:"default",size:"xs",onClick:()=>o(!1),children:"Cancel"}),r.jsx(fe,{variant:"primary",size:"xs",onClick:g,disabled:m,children:"Submit"})]})]})})})]})}function c1({queue:e,serverPort:t,onApprove:s,onFlag:i}){const[n,o]=l.useState(e[0]?.[0]);l.useEffect(()=>{(!n||!e.some(([f])=>f===n))&&o(e[0]?.[0])},[e,n]);const a=e.find(([f])=>f===n)??e[0];if(!a)return null;const[c,d]=a,u=_n(d),p=G.getPreviewUrl(t,u.path,{forIframe:!0});return r.jsxs(Tn,{label:"Needs review",nextStackedItems:Math.max(0,e.length-1),children:[r.jsx(br,{title:c,subtitle:u.subtitle,expandedContent:r.jsx(a1,{children:r.jsx(Au,{onApprove:()=>s(c,u.path),onFlag:(f,b)=>i(c,u.path,f,b)},c)})}),r.jsx(o1,{children:r.jsx(ju,{src:p,path:u.path,title:c,viewport:u.viewport,maxHeight:500})})]})}function d1({genChat:e,needsReview:t,onCreateProject:s,createHref:i,isDesignSystem:n,projectId:o,published:a,setPublished:c,effectivePublished:d,onPublishedChange:u}){const p=e?.streaming?.isLoading??!1,f=vd(e),{defaultDesignSystemProjectUuid:b,setDefault:m}=nd(),{showToast:y}=bt(),g=Zt(),C=b===o,[v,w]=l.useState(!1),S=async L=>{if(v)return;w(!0);const z=a;c(L);try{const J=await at().setProjectPublished({projectId:o,published:L});Cr(),rd(),u?.(J.publishedAt?xo(J.publishedAt).toISOString():null),L&&sd(o)}catch{c(z),y("Failed to update published state","error")}finally{w(!1)}},k=async L=>{if(!v){w(!0);try{await m(L?o:null)}catch{y("Failed to set default design system","error")}finally{w(!1)}}};let E,T,_,R;p&&t===0?(E="Updating design system…",T=null,_=!0,R=!1):p?(E="Review draft design system",T="Claude is still working, but you can start giving feedback on the work so far.",_=!0,R=!1):t>0?(E="Review draft design system",T="Your design system is ready, but your feedback will improve it! Your team's new projects will use this design system by default.",_=!1,R=!0):(E="Your design system is ready",T="Your team's new projects will use this design system by default. You can always update this design system using the chat.",_=!1,R=!0);const $=n&&d===!1,M=T||n||R&&!$;return r.jsxs(r.Fragment,{children:[r.jsxs(Ri,{children:[r.jsx(zc,{children:E}),_&&r.jsx(Ru,{$indeterminate:p&&f>=100,children:r.jsx("div",{style:{width:`${f}%`}})})]}),M&&r.jsxs(Tn,{children:[T&&r.jsx(br,{mainContent:r.jsx(Ai,{children:T})}),n&&r.jsx(br,{mainContent:r.jsxs(n1,{children:[r.jsxs(Ll,{title:g?void 0:Xo,children:[r.jsx("input",{type:"checkbox",checked:d??!1,onChange:L=>S(L.target.checked),disabled:v||!g||d===void 0}),"Published"]}),d&&r.jsxs(Ll,{children:[r.jsx("input",{type:"checkbox",checked:C,onChange:L=>k(L.target.checked),disabled:v}),"Default"]})]})}),R&&!$&&r.jsx(br,{title:"Use this system",accessory:r.jsx(fe,{variant:"default",size:"xs",icon:"ArrowUpRight",onClick:i?()=>window.open(i,"_blank"):s,children:"New design"})})]})]})}function u1({projectPath:e,onUploaded:t}){const s=l.useRef(null),[i,n]=l.useState(!1),{showToast:o}=bt(),a=Zt(),c=async d=>{const u=Array.from(d.target.files??[]);if(d.target.value="",u.length!==0){n(!0);try{const p=[],f=new Set;for(const b of u){const m=(b.name.split(/[/\\]/).pop()||b.name).replace(/[^\w.-]/g,"_");let y=m;for(let S=1;f.has(y);S++)y=`${S}-${m}`;f.add(y);const g=`fonts/${y}`,C=new Uint8Array(await b.arrayBuffer());let v="";const w=32768;for(let S=0;S<C.length;S+=w)v+=String.fromCharCode(...C.subarray(S,S+w));await G.writeFile(`${e}/${g}`,btoa(v),"base64"),p.push(g)}t(p),o(`Uploaded ${p.length} font file${p.length===1?"":"s"}`,"success")}catch(p){Tt(p,"upload font"),o("Couldn’t upload font. Please try again.","error")}finally{n(!1)}}};return r.jsxs(r.Fragment,{children:[r.jsx("input",{ref:s,type:"file",accept:".ttf,.otf,.woff,.woff2",multiple:!0,style:{display:"none"},onChange:c}),r.jsx(fe,{variant:"default",size:"xs",icon:"Upload",disabled:i||!a,title:a?void 0:Xo,onClick:()=>s.current?.click(),children:i?"Uploading…":"Upload fonts"})]})}const Ol=["Type","Colors","Spacing","Components","Brand"];function p1(e){const t=e.trim();return/^(typography|typefaces?|fonts?)$/i.test(t)?"Type":/^(color|colour|palette|palettes)$/i.test(t)?"Colors":/^(component|components?\s+&.*|ui)$/i.test(t)?"Components":/^(tokens?|foundations?|layout)$/i.test(t)?"Spacing":t}function f1(e){const t=new Map;if(!e)return t;for(const s of Object.values(e))for(const i of ko(s)){if(i.name!=="register_assets")continue;const n=i.input?.items??[];for(const o of n){if(typeof o.asset!="string"||typeof o.group!="string")continue;const a=p1(o.group);a&&t.set(o.asset,a)}}return t}function h1(e){const[t,s]=l.useState([]),i=l.useRef(!0);l.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[e]);const n=l.useCallback(async()=>{try{const o=await G.readFile(`${e}/colors_and_type.css`);if(!i.current)return;const a=/src\s*:\s*url\(\s*['"]?(?:\.{0,2}\/)*(fonts\/[^'")\s]+)/g,c=new Set;let d;for(;(d=a.exec(o))!==null;)c.add(d[1]);const u=[...c].sort();s(p=>p.length===u.length&&p.every((f,b)=>f===u[b])?p:u)}catch{i.current&&s(o=>o.length===0?o:[])}},[e]);return l.useEffect(()=>{n()},[n]),Ye("file-written",o=>{(o.detail?.path?.split("/").pop()??"")==="colors_and_type.css"&&n()}),t}function g1({projectPath:e,onFontsUploaded:t}){return h1(e).length>0?null:r.jsx(Tn,{tinted:!0,children:r.jsx(br,{icon:r.jsx(Ue,{name:"Warning",size:16}),title:"Missing brand fonts",subtitle:"Claude is rendering typography with substitute web fonts.",accessory:r.jsx(u1,{projectPath:e,onUploaded:t})})})}function m1({name:e,asset:t,expanded:s,mounted:i,onToggle:n,onApprove:o,onFlag:a,serverPort:c}){const d=_n(t),u=d.status==="approved",p=d.status==="changes-requested",f=!u&&!p,b=G.getPreviewUrl(c,d.path,{forIframe:!0});return r.jsxs(Vv,{$expanded:s,children:[r.jsxs(Yv,{$expanded:s,onClick:n,style:{cursor:"default"},children:[r.jsx(Nf,{expanded:s}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Zv,{children:e}),!s&&u&&r.jsx(Ue,{name:"Check",size:14,style:{color:h.text.tertiary}}),!s&&p&&r.jsx(Ml,{$color:h.accent.primary}),!s&&f&&r.jsx(Ml,{$color:"#3987E5"})]}),d.subtitle&&r.jsx(Er,{$open:s,children:r.jsx("div",{children:r.jsx(Qv,{children:d.subtitle})})})]}),s&&r.jsx(Au,{onApprove:o,onFlag:a})]}),r.jsx(Er,{$open:s,$ms:350,children:r.jsx("div",{children:i&&r.jsx("div",{children:r.jsx(e1,{children:r.jsx(ju,{src:b,path:d.path,title:e,viewport:d.viewport,maxHeight:500})})})})})]})}const x1=x.div`
  position: sticky;
  bottom: 0;
  background: ${h.bg.surface};
  border-top: 1px solid ${h.border.subtle};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: ${h.text.tertiary};
  input[type='range'] {
    flex: 1;
  }
`;function b1({onSendFeedback:e,onFontsUploaded:t,onCreateProject:s,createHref:i,replay:n,onPublishedChange:o}){const{data:a,serverPort:c,projectPath:d}=vt(),[u,p]=l.useState(null),f=Vt()?.type==="design_system",{items:b,loading:m}=ud("design_system"),y=b.find(re=>re.projectId===d)?.publishedAt!=null,[g,C]=l.useState(null),v=g??(m?void 0:y),[w,S]=l.useState(()=>new Set),k=re=>{p(U=>U===re?null:re),S(U=>U.has(re)?U:new Set(U).add(re))},E=l.useCallback((re,U,D)=>Kv(d,re,U,D),[d]),T=l.useRef(u);T.current=u;const _=l.useRef(a?.assets);_.current=a?.assets,l.useEffect(()=>{const re=U=>{const D=U.detail;if(T.current!==null)return;const O=_.current;if(!(!O||Object.values(O).some(B=>{const ne=_n(B).status;return ne!=="approved"&&ne!=="changes-requested"}))){for(const[B,ne]of Object.entries(O))if(_n(ne).path===D.path){p(B),S(se=>se.has(B)?se:new Set(se).add(B));return}}};return window.addEventListener("ds-asset-updated",re),()=>window.removeEventListener("ds-asset-updated",re)},[]);const R=JSON.stringify(Object.keys(a?.assets??{}));l.useEffect(()=>{if(typeof requestIdleCallback!="function"||R==="[]")return;const re=JSON.parse(R);let U;const D=()=>{let O=!1;S(P=>{const B=re.find(ne=>!P.has(ne));return B?(O=!0,new Set(P).add(B)):P}),O&&(U=requestIdleCallback(D))};return U=requestIdleCallback(D),()=>cancelIdleCallback(U)},[R]);const[$,M]=l.useState(0),L=Object.values(a?.chats??{}).find(kd)??null,z=n&&L?Sd(L):0,J=z+1,I=n&&$>=J,te=n&&L&&z>0?eg(L,Math.min($,z)):L;let ce=n&&te?Qh(te):a?.assets??{};I&&(ce=Object.fromEntries(Object.entries(ce).map(([re,U])=>[re,{versions:U.versions.map((D,O)=>O===U.versions.length-1?{...D,status:"approved"}:D)}])));const ue=l.useMemo(()=>Object.entries(ce),[ce]),me=l.useMemo(()=>ue.filter(([,re])=>{const U=_n(re).status;return U!=="approved"&&U!=="changes-requested"}),[ue]),de=me.length,De=l.useMemo(()=>f1(a?.chats),[a?.chats]),Re=l.useMemo(()=>{const re=new Map;for(const B of ue){const ne=Xv(_n(B[1]).path);re.has(ne.key)||re.set(ne.key,{cat:ne,items:[]}),re.get(ne.key).items.push(B)}const U=re.get("brand");if(!U)return re;re.delete("brand");const D=new Map;for(const B of U.items){const ne=De.get(B[0])??"Brand";D.has(ne)||D.set(ne,[]),D.get(ne).push(B)}const O=new Set(Ol),P=[];for(const B of Ol)D.has(B)&&P.push(B);for(const B of[...D.keys()].sort())O.has(B)||P.push(B);for(const B of P)re.set(`brand:${B}`,{cat:{key:`brand:${B}`,name:B},items:D.get(B)??[]});return re},[ue,De]),je=te?.streaming?.isLoading??!1,{defaultDesignSystemProjectUuid:H,setDefault:ke}=nd(),X=Zt(),{showToast:Se}=bt(),oe=l.useRef(je),he=l.useRef(!1);l.useEffect(()=>{const re=oe.current;oe.current=je,!(!f||!X||n||he.current||je||!re||ue.length===0||v!==!1||H)&&(he.current=!0,C(!0),(async()=>{try{const U=await at().setProjectPublished({projectId:d,published:!0});Cr(),rd(),o?.(U.publishedAt?xo(U.publishedAt).toISOString():null),sd(d);try{await ke(d),Se("Design system published and set as your team’s default","success")}catch{}}catch{C(null),he.current=!1}})())},[je,ue.length,v,H,f,X,n,d,ke,o]);const pe=n&&z>0&&r.jsxs(x1,{children:[r.jsx("span",{children:"Replay"}),r.jsx("input",{type:"range",min:0,max:J,value:$,onChange:re=>M(Number(re.target.value))}),r.jsx("span",{children:I?"done":`${$} / ${z}`})]});if(ue.length===0){if(je){const re=vd(te);return r.jsxs(ai,{children:[r.jsxs(r1,{children:[r.jsx(s1,{children:"Creating your design system…"}),r.jsxs(i1,{children:["Keep this tab open and come back in ",bd," minutes"]}),r.jsx(Ru,{$indeterminate:re>=100,style:{width:200},children:r.jsx("div",{style:{width:`${re}%`}})})]}),pe]})}return r.jsxs(ai,{children:[r.jsx(t1,{children:"No assets registered yet. They'll appear here as the design system is generated."}),pe]})}const Le=(re,U,D,O)=>{E(re,U,"changes-requested"),e?.(re,U,D,O)};return r.jsxs(ai,{children:[r.jsxs(qv,{children:[r.jsx(d1,{genChat:te,needsReview:de,onCreateProject:s,createHref:i,isDesignSystem:f,projectId:d,published:g,setPublished:C,effectivePublished:v,onPublishedChange:o}),f&&t&&r.jsx(g1,{projectPath:d,onFontsUploaded:t}),me.length>0&&r.jsx(c1,{queue:me,serverPort:c,onApprove:(re,U)=>E(re,U,"approved"),onFlag:Le}),[...Re.values()].map(({cat:re,items:U})=>r.jsx(Tn,{label:re.name,children:U.map(([D,O])=>{const P=_n(O);return r.jsx(m1,{name:D,asset:O,serverPort:c,expanded:u===D,mounted:w.has(D),onToggle:()=>k(D),onApprove:()=>{E(D,P.path,"approved"),p(B=>B===D?null:B)},onFlag:(B,ne)=>Le(D,P.path,B,ne)},D)})},re.key))]}),pe]})}const Fl="Requires edit permission",y1=x.div`
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(to bottom, white, ${h.bg.app});
`,w1=x.div`
  padding: 16px 16px 80px;
  max-width: 560px;
  margin: 0 auto;
`,v1=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;
`,k1=x.h2`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 18px;
  font-weight: 350;
  font-variation-settings:
    'wght' 350,
    'opsz' 28;
  color: ${h.text.primary};
  line-height: 1.3;
  margin: 0;
`,li=x.div`
  margin-bottom: 20px;
`,ci=x.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: ${h.text.tertiary};
  margin-bottom: 6px;
`,S1=x.div`
  font-size: 11px;
  color: ${h.text.tertiary};
  margin-bottom: 6px;
`,C1=x.input`
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 6px;
  color: ${h.text.primary};
  outline: none;
  box-shadow: ${h.shadow.inset};
  transition: all 0.1s ease;

  &:focus {
    border-color: ${h.border.focus};
    box-shadow: 0 0 0 2px ${h.bg.selected};
  }
  &::placeholder {
    color: ${h.text.tertiary};
  }
`,Il=x.textarea`
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 6px;
  color: ${h.text.primary};
  outline: none;
  resize: vertical;
  line-height: 1.5;
  box-shadow: ${h.shadow.inset};
  transition: all 0.1s ease;

  &:focus {
    border-color: ${h.border.focus};
    box-shadow: 0 0 0 2px ${h.bg.selected};
  }
  &::placeholder {
    color: ${h.text.tertiary};
  }
`,_1=x.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 0;
  border-top: 1px solid ${h.border.subtle};
`,$1=x.div`
  min-width: 0;
`,E1=x.div`
  font-size: 12px;
  font-weight: 500;
  color: ${h.text.primary};
`,T1=x.div`
  font-size: 11px;
  line-height: 1.4;
  color: ${h.text.tertiary};
`;function j1({projectId:e,onPublishedChange:t,onNewFromTemplate:s}){const{showToast:i}=bt(),n=od(),o=Vt(),[a,c]=l.useState(o?.templateTitle??""),[d,u]=l.useState(o?.description??""),[p,f]=l.useState(o?.introText??""),b=l.useRef({title:o?.templateTitle??"",description:o?.description??"",introText:o?.introText??""}),[m,y]=l.useState(o?.publishedAt!=null),[g,C]=l.useState(!1),v=Zt(),w=v?{}:{disabled:!0,title:Fl},S=l.useRef(e);S.current=e,l.useEffect(()=>()=>{S.current=null},[]),l.useEffect(()=>{const _=Vt();c(_?.templateTitle??""),u(_?.description??""),f(_?.introText??""),y(_?.publishedAt!=null),b.current={title:_?.templateTitle??"",description:_?.description??"",introText:_?.introText??""}},[e]);const k={title:"templateTitle",description:"description",introText:"introText"},E=async _=>{const $={title:a,description:d,introText:p}[_];if($!==b.current[_])try{if(await at().updateProjectInfo({projectId:e,[k[_]]:$}),S.current!==e)return;b.current={...b.current,[_]:$};const M=Vt();M&&yr({...M,[k[_]]:$}),Cr()}catch{i("Failed to save template info","error")}},T=async _=>{if(g)return;C(!0);const R=m;y(_);try{const $=await at().setProjectPublished({projectId:e,published:_});if(S.current!==e)return;Cr();const M=$.publishedAt?xo($.publishedAt).toISOString():null;t?.(M);const L=Vt();L&&yr({...L,publishedAt:M})}catch{if(S.current!==e)return;y(R),i("Failed to update published state","error")}finally{C(!1)}};return r.jsx(y1,{children:r.jsxs(w1,{children:[r.jsxs(v1,{children:[r.jsx(k1,{children:"Template Info"}),s&&r.jsx(fe,{size:"sm",variant:"primary",icon:"Add",onClick:s,disabled:n,title:n?Di:void 0,children:"New from this template"})]}),r.jsxs(li,{children:[r.jsx(ci,{children:"Title"}),r.jsx(C1,{value:a,onChange:_=>c(_.target.value),onBlur:()=>E("title"),placeholder:"Template name shown in the picker",...w})]}),r.jsxs(li,{children:[r.jsx(ci,{children:"Description"}),r.jsx(Il,{value:d,onChange:_=>u(_.target.value),onBlur:()=>E("description"),rows:2,placeholder:"Short description for the template picker",...w})]}),r.jsxs(li,{children:[r.jsx(ci,{children:"Intro text"}),r.jsx(S1,{children:"Shown in the composer before the user's first message"}),r.jsx(Il,{value:p,onChange:_=>f(_.target.value),onBlur:()=>E("introText"),rows:4,placeholder:"Tell users what to provide so you can get started",...w})]}),r.jsxs(_1,{title:v?void 0:Fl,children:[r.jsx(bo,{checked:m,onChange:T,disabled:g||!v}),r.jsxs($1,{children:[r.jsx(E1,{children:"Published"}),r.jsx(T1,{children:"When off, only you can see this template. Publish to make it appear in the Templates tab for everyone in your organization."})]})]})]})})}function R1(e){const[,t]=l.useReducer(n=>n+1,0);Ye("fast-mode-streaming",t);const s=l.useCallback(()=>{G.interruptAgent()},[]);return{fastModeActive:e!==null&&Bf(e),handleStop:s}}const A1=x.div`
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 80px 20px rgba(59, 130, 246, 0.35);
  pointer-events: none;
  z-index: 90;
`,D1=x.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  padding-right: 8px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  z-index: 101;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
  pointer-events: auto;
  white-space: nowrap;
`,M1=x.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`,L1="Streaming...";function P1({active:e,onStop:t,label:s=L1}){return e?r.jsxs(r.Fragment,{children:[r.jsx(A1,{"data-testid":"fast-mode-overlay"}),r.jsxs(D1,{children:[r.jsx("span",{children:s}),r.jsx(M1,{onClick:t,children:"Stop"})]})]}):null}function or(e){const t=document.createElement("div");t.style.color=e,document.body.appendChild(t);const s=getComputedStyle(t).color;document.body.removeChild(t);const i=s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!i)return{h:0,s:0,v:0,a:1};const n=+i[1]/255,o=+i[2]/255,a=+i[3]/255,c=i[4]!=null?+i[4]:1,d=Math.max(n,o,a),u=Math.min(n,o,a),p=d-u;let f=0;p!==0&&(d===n?f=(o-a)/p%6:d===o?f=(a-n)/p+2:f=(n-o)/p+4,f*=60,f<0&&(f+=360));const b=d===0?0:p/d;return{h:f,s:b,v:d,a:c}}function cs(e){const{h:t,s,v:i,a:n}=e,o=i*s,a=o*(1-Math.abs(t/60%2-1)),c=i-o;let d=0,u=0,p=0;t<60?(d=o,u=a):t<120?(d=a,u=o):t<180?(u=o,p=a):t<240?(u=a,p=o):t<300?(d=a,p=o):(d=o,p=a);const f=Math.round((d+c)*255),b=Math.round((u+c)*255),m=Math.round((p+c)*255);return n<1?`rgba(${f}, ${b}, ${m}, ${+n.toFixed(3)})`:`rgb(${f}, ${b}, ${m})`}function Zr(e){const s=cs({...e,a:1}).match(/(\d+),\s*(\d+),\s*(\d+)/);return s?"#"+[+s[1],+s[2],+s[3]].map(i=>i.toString(16).padStart(2,"0")).join(""):"#000000"}const O1=x.div`
  position: fixed;
  inset: 0;
  z-index: 1999;
`,F1=x.div`
  position: fixed;
  z-index: 2000;
  background: ${h.bg.elevated};
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  box-shadow: ${h.shadow.lg};
  padding: 10px;
  width: 220px;
  user-select: none;
`,I1=x.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 4px;
  cursor: crosshair;
  background:
    linear-gradient(to top, #000, transparent),
    linear-gradient(to right, #fff, hsl(${e=>e.$hue}, 100%, 50%));
`,z1=x.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  pointer-events: none;
`,zl=x.div`
  margin-top: 8px;
  position: relative;
`,N1=x.div`
  height: 12px;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
`,B1=x.div`
  height: 12px;
  border-radius: 6px;
  cursor: pointer;
  background:
    linear-gradient(to right, transparent, ${e=>e.$color}),
    repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 / 8px 8px;
`,Nl=x.div`
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(-50%);
  pointer-events: none;
`,H1=x.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
  align-items: center;
`,U1=x.input`
  flex: 1;
  min-width: 0;
  padding: 4px 6px;
  font-size: 11px;
  font-family: 'SF Mono', Consolas, monospace;
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  background: ${h.bg.muted};
  color: ${h.text.primary};
  outline: none;
  &:focus { border-color: ${h.border.focus}; background: ${h.bg.surface}; }
`,W1=x.input`
  width: 40px;
  padding: 4px 4px;
  font-size: 11px;
  font-family: 'SF Mono', Consolas, monospace;
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  background: ${h.bg.muted};
  color: ${h.text.primary};
  outline: none;
  text-align: right;
  &:focus { border-color: ${h.border.focus}; }
`,G1=x.button`
  border: 1px solid ${h.border.default};
  background: ${h.bg.muted};
  border-radius: 4px;
  width: 28px;
  height: 28px;
  padding: 0;
  cursor: pointer;
  color: ${h.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  &:hover { color: ${h.text.primary}; background: ${h.bg.hover}; }
`,J1=x.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${h.border.subtle};
`,K1=x.button`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid ${h.border.default};
  border-radius: 3px;
  background: ${e=>e.$color};
  cursor: pointer;
  padding: 0;
  &:hover { border-color: ${h.border.strong}; }
`;function Bl(e){return l.useCallback(t=>{const i=t.currentTarget.getBoundingClientRect(),n=c=>Math.max(0,Math.min(1,(c-i.left)/i.width));e(n(t.clientX));const o=c=>e(n(c.clientX)),a=()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)},[e])}function qo({open:e,anchorEl:t,value:s,onChange:i,onClose:n,getSwatches:o}){const[a,c]=l.useState(()=>or(s)),d=l.useRef(a);d.current=a;const[u,p]=l.useState(()=>Zr(a)),[f,b]=l.useState(()=>Math.round(a.a*100).toString()),[m,y]=l.useState([]),[g,C]=l.useState({x:0,y:0}),v=l.useRef(null),w=l.useRef(s);l.useEffect(()=>{if(s!==w.current){const z=or(s);c(z),p(Zr(z)),b(Math.round(z.a*100).toString()),w.current=s}},[s]),l.useEffect(()=>{if(!e||!t)return;const z=t.getBoundingClientRect();let J=z.left,I=z.bottom+4;requestAnimationFrame(()=>{const te=v.current?.getBoundingClientRect();te&&(J+te.width>window.innerWidth-8&&(J=window.innerWidth-te.width-8),I+te.height>window.innerHeight-8&&(I=z.top-te.height-4)),C({x:Math.max(8,J),y:Math.max(8,I)})})},[e,t]),l.useEffect(()=>{if(!e)return;const z=J=>{J.key==="Escape"&&n()};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[e,n]),l.useEffect(()=>{e&&o&&m.length===0&&o().then(y).catch(z=>{})},[e,o,m.length]);const S=l.useCallback(z=>{c(z);const J=cs(z);w.current=J,i(J),p(Zr(z)),b(Math.round(z.a*100).toString())},[i]),k=l.useCallback(z=>{const I=z.currentTarget.getBoundingClientRect(),te=(de,De)=>({s:Math.max(0,Math.min(1,(de-I.left)/I.width)),v:Math.max(0,Math.min(1,1-(De-I.top)/I.height))}),ce=(de,De)=>{const{s:Re,v:je}=te(de,De);S({...d.current,s:Re,v:je})};ce(z.clientX,z.clientY);const ue=de=>ce(de.clientX,de.clientY),me=()=>{window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",me)};window.addEventListener("mousemove",ue),window.addEventListener("mouseup",me)},[S]),E=Bl(z=>S({...d.current,h:z*360})),T=Bl(z=>S({...d.current,a:z})),_=typeof EyeDropper<"u",R=l.useCallback(async()=>{if(!(typeof EyeDropper>"u"))try{const J=await new EyeDropper().open(),I=or(J.sRGBHex);S({...I,a:a.a})}catch{}},[a.a,S]),$=()=>{const z=u.trim();if(/^#?(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(z)){const J=or(z.startsWith("#")?z:"#"+z),I=z.replace(/^#/,"").length;S(I===4||I===8?J:{...J,a:a.a})}else p(Zr(a))},M=()=>{const z=parseFloat(f);isNaN(z)?b(Math.round(a.a*100).toString()):S({...a,a:Math.max(0,Math.min(1,z/100))})},L=l.useMemo(()=>cs({...a,a:1}),[a.h,a.s,a.v]);return e?Vn.createPortal(r.jsxs(r.Fragment,{children:[r.jsx(O1,{"data-popover-layer":!0,onMouseDown:n}),r.jsxs(F1,{ref:v,"data-popover-layer":!0,style:{left:g.x,top:g.y},children:[r.jsx(I1,{$hue:a.h,onMouseDown:k,children:r.jsx(z1,{style:{left:`${a.s*100}%`,top:`${(1-a.v)*100}%`,background:L}})}),r.jsxs(zl,{children:[r.jsx(N1,{onMouseDown:E}),r.jsx(Nl,{style:{left:`${a.h/360*100}%`,background:`hsl(${a.h}, 100%, 50%)`}})]}),r.jsxs(zl,{children:[r.jsx(B1,{$color:L,onMouseDown:T}),r.jsx(Nl,{style:{left:`${a.a*100}%`,background:cs(a)}})]}),r.jsxs(H1,{children:[_&&r.jsx(G1,{title:"Pick color from screen",onClick:R,children:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M2 22l1-5L13 7l4 4-10 10-5 1z"}),r.jsx("path",{d:"M16 4l4 4-2 2-4-4 2-2z",fill:"currentColor"})]})}),r.jsx(U1,{value:u,onChange:z=>p(z.target.value),onBlur:$,onKeyDown:z=>{z.key==="Enter"&&z.target.blur()}}),r.jsx(W1,{value:f,onChange:z=>b(z.target.value),onBlur:M,onKeyDown:z=>{z.key==="Enter"&&z.target.blur()}}),r.jsx("span",{style:{fontSize:10,color:h.text.tertiary},children:"%"})]}),m.length>0&&r.jsx(J1,{children:m.slice(0,16).map((z,J)=>r.jsx(K1,{$color:z,title:z,onClick:()=>S({...or(z),a:a.a})},J))})]})]}),document.body):null}const X1=["Arial","Helvetica","Times New Roman","Georgia","Courier New","Verdana","Trebuchet MS","Palatino","Garamond","Tahoma"],Du=["Inter","Roboto","Open Sans","Lato","Montserrat","Poppins","Source Sans Pro","Raleway","Nunito","Playfair Display","Merriweather","Oswald","Ubuntu","PT Sans","Noto Sans","Work Sans","Rubik","Fira Sans","Quicksand","Karla","DM Sans","Manrope","Space Grotesk","Libre Baskerville","Crimson Text","Lora","Bitter","Arvo","Josefin Sans","Cabin","Dosis","Comfortaa","Abril Fatface","Bebas Neue","Righteous","Pacifico","Dancing Script","Caveat","Architects Daughter","Permanent Marker"];function q1(e,t){if(!Du.includes(e))return;const s=`gfont-${e.replace(/\s+/g,"-")}`,i=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e).replace(/%20/g,"+")}:wght@300;400;500;600;700&display=swap`;t.executeJavaScript(`(function(){if(document.getElementById(${JSON.stringify(s)}))return;var l=document.createElement('link');l.id=${JSON.stringify(s)};l.rel='stylesheet';l.href=${JSON.stringify(i)};document.head.appendChild(l)})()`).catch(()=>{})}const V1=x.div`
  margin-bottom: 4px;
  padding: 0 14px;
`,Y1=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a8071;
  padding: 12px 0 6px;
`,Z1=x.button`
  border: none;
  background: transparent;
  color: ${h.text.tertiary};
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  &:hover { color: ${h.text.primary}; }
`,Q1=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`,er=x.div`
  display: flex;
  align-items: center;
  height: 28px;
  background: #fff;
  border: 1px solid #e3ddd1;
  border-radius: 8px;
  overflow: hidden;
  font-size: 12px;
  grid-column: ${e=>e.$span2?"1 / -1":"auto"};
`,en=x.span`
  padding: 0 8px;
  color: #8a8071;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  flex-shrink: 0;
  cursor: ${e=>e.$scrub?"ew-resize":"default"};
  ${e=>e.$scrub&&"touch-action: none;"}
`,Ws=x.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: #281e14;
  font-size: 11.5px;
  font-family: ui-monospace, 'SF Mono', monospace;
  font-variant-numeric: tabular-nums;
  text-align: right;
  padding: 0 8px 0 4px;
  outline: none;
  height: 100%;
  &::placeholder {
    color: #8a8071;
    font-style: italic;
    font-family: inherit;
    text-align: right;
  }
`,ek=x(Ws)`
  text-align: left;
  font-family: inherit;
`;function Vo({value:e,onNumChange:t,...s}){const[i,n]=l.useState(e==null?"":String(e)),o=l.useRef(e);return l.useEffect(()=>{e!==o.current&&(n(e==null?"":String(e)),o.current=e)},[e]),r.jsx(Ws,{...s,type:"text",value:i,onChange:a=>{const c=a.target.value;n(c);const d=parseFloat(c);isNaN(d)||(o.current=d,t(d))}})}const Yo=x.span`
  padding: 0 8px 0 0;
  color: #8a8071;
  font-size: 11.5px;
  font-family: ui-monospace, 'SF Mono', monospace;
  flex-shrink: 0;
  pointer-events: none;
`,Mu=x.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: 0 6px 0 4px;
  cursor: pointer;
  height: 100%;
  gap: 4px;
  outline: none;
  &:hover {
    background: ${h.bg.selected};
  }
  &:focus-visible {
    outline: 2px solid ${h.accent.primary};
    outline-offset: -1px;
  }
`,Lu=x.span`
  flex: 1;
  min-width: 0;
  font-size: 11.5px;
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: ${e=>e.$mixed?"#8a8071":"#281e14"};
  ${e=>e.$mixed&&"font-style: italic;"}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pu=x.span`
  font-size: 10px;
  color: ${h.text.tertiary};
  flex-shrink: 0;
  line-height: 1;
`,Ou=x.div`
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
  min-width: 140px;
  outline: none;
`,Zo=x.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  color: ${e=>e.$active?"#cc785c":"#281e14"};
  background: ${e=>e.$highlighted?"#f3efe9":"transparent"};
  font-weight: ${e=>e.$active?"600":"400"};
  &:hover {
    background: #f3efe9;
  }
`,Fu=x.div`
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${h.text.tertiary};
  padding: 6px 8px 2px;
`,Iu=x.input`
  display: block;
  width: calc(100% - 12px);
  margin: 4px 6px 6px;
  height: 24px;
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  background: ${h.bg.muted};
  color: ${h.text.primary};
  font-size: 11px;
  padding: 0 8px;
  outline: none;
  &:focus {
    border-color: ${h.accent.primary};
  }
`,tk=x.div`
  ${Iu} { text-align: right; }
  ${Fu} { text-align: right; }
  ${Zo} { justify-content: flex-end; }
`,zu=x.button`
  width: 16px;
  height: 16px;
  margin: 0 4px 0 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background: ${e=>e.$color};
  cursor: pointer;
  flex-shrink: 0;
`;function nk({cell:e,value:t,onChange:s}){const i=t==null,n=l.useRef(null),o=e.step??1,a=u=>{i||(n.current={x:u.clientX,v:t},u.target.setPointerCapture(u.pointerId))},c=u=>{if(!n.current)return;const p=u.clientX-n.current.x,f=n.current.v+p*o;s(Math.round(f/o)*o)},d=()=>{n.current=null};return r.jsxs(er,{$span2:e.span2,"data-testid":`knob-${e.key}`,children:[r.jsx(en,{$scrub:i?void 0:"ew",onPointerDown:a,onPointerMove:c,onPointerUp:d,onPointerCancel:d,children:e.label}),r.jsx(Vo,{value:t,onNumChange:s,placeholder:i?"Mixed":void 0,onKeyDown:u=>{if(i)return;const p=e.step??1;u.key==="ArrowUp"?(u.preventDefault(),s(Math.round((t+p)/p)*p)):u.key==="ArrowDown"&&(u.preventDefault(),s(Math.round((t-p)/p)*p))},style:!i&&e.unit?{paddingRight:2}:void 0}),!i&&e.unit&&r.jsx(Yo,{children:e.unit})]})}function rk({cell:e,value:t,onChange:s}){const i=t==null,[n,o]=l.useState(!1),a=l.useRef(null);return r.jsxs(er,{$span2:e.span2,"data-testid":`knob-${e.key}`,children:[r.jsx(en,{children:e.label}),r.jsx(zu,{ref:a,$color:i?"#aaaaaa":t,onClick:()=>!i&&o(c=>!c),style:i?{background:"repeating-linear-gradient(45deg,#ccc,#ccc 2px,#eee 2px,#eee 5px)",cursor:"default"}:void 0}),r.jsx(Ws,{value:i?"":t,placeholder:i?e.placeholder??"Mixed":void 0,onChange:c=>s(c.target.value)}),!i&&r.jsx(qo,{open:n,anchorEl:a.current,value:t,onChange:s,onClose:()=>o(!1)})]})}const sk={TL:r.jsx("svg",{viewBox:"0 0 8 8",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",children:r.jsx("path",{d:"M7,1.5 L2.5,1.5 Q1.5,1.5 1.5,2.5 L1.5,7"})}),TR:r.jsx("svg",{viewBox:"0 0 8 8",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",children:r.jsx("path",{d:"M1,1.5 L5.5,1.5 Q6.5,1.5 6.5,2.5 L6.5,7"})}),BR:r.jsx("svg",{viewBox:"0 0 8 8",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",children:r.jsx("path",{d:"M6.5,1 L6.5,5.5 Q6.5,6.5 5.5,6.5 L1,6.5"})}),BL:r.jsx("svg",{viewBox:"0 0 8 8",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",children:r.jsx("path",{d:"M1.5,1 L1.5,5.5 Q1.5,6.5 2.5,6.5 L7,6.5"})})};function ik({label:e,value:t,step:s,min:i,unit:n,onChange:o}){const a=l.useRef(null),c=p=>{a.current={x:p.clientX,v:t},p.target.setPointerCapture(p.pointerId)},d=p=>{if(!a.current)return;const f=p.clientX-a.current.x;o(Math.max(i??-1/0,a.current.v+f*s))},u=()=>{a.current=null};return r.jsxs(Ji,{children:[r.jsx(en,{$scrub:"ew",onPointerDown:c,onPointerMove:d,onPointerUp:u,onPointerCancel:u,children:e}),r.jsx(Vo,{value:t,onNumChange:o,onKeyDown:p=>{p.key==="ArrowUp"?(p.preventDefault(),o(Math.round((t+s)/s)*s)):p.key==="ArrowDown"&&(p.preventDefault(),o(Math.round((t-s)/s)*s))},style:n?{paddingRight:2}:void 0}),n&&r.jsx(Yo,{children:n})]})}function Nu({cell:e,value:t,onChange:s,initialExpanded:i,children:n}){const o=Array.isArray(t)?t:[0,0,0,0],a=o.every(C=>C===o[0]),c=e.step??1,d=e.subLabels??["T","R","B","L"],[u,p]=l.useState(i??!a),f=l.useRef(null),b=C=>{a&&(f.current={x:C.clientX,v:o[0]},C.target.setPointerCapture(C.pointerId))},m=C=>{if(!f.current)return;const v=C.clientX-f.current.x,w=Math.max(e.min??-1/0,f.current.v+v*c);s([w,w,w,w])},y=()=>{f.current=null},g=(C,v)=>{const w=[...o];w[C]=v,s(w)};return u?r.jsxs(ok,{children:[r.jsxs(ak,{children:[r.jsx(en,{$scrub:a?"ew":void 0,onPointerDown:b,onPointerMove:m,onPointerUp:y,onPointerCancel:y,style:{flex:1},children:e.label}),r.jsx(Hl,{onClick:()=>p(!1),title:"Collapse",children:r.jsx(Ue,{name:"CaretUpSmall",size:10})})]}),r.jsxs(lk,{children:[d.map((C,v)=>r.jsx(ik,{label:sk[C]??C,value:o[v],step:c,min:e.min,unit:e.unit,onChange:w=>g(v,w)},C)),n]})]}):r.jsxs(er,{$span2:!0,"data-testid":`knob-${e.key}`,children:[r.jsx(en,{$scrub:a?"ew":void 0,onPointerDown:b,onPointerMove:m,onPointerUp:y,onPointerCancel:y,children:e.label}),r.jsx(Vo,{value:a?o[0]:null,onNumChange:C=>s([C,C,C,C]),placeholder:a?void 0:"Mixed",readOnly:!a,onKeyDown:C=>{if(a){if(C.key==="ArrowUp"){C.preventDefault();const v=Math.round((o[0]+c)/c)*c;s([v,v,v,v])}else if(C.key==="ArrowDown"){C.preventDefault();const v=Math.round((o[0]-c)/c)*c;s([v,v,v,v])}}},onClick:()=>{a||p(!0)},style:a?e.unit?{paddingRight:2}:void 0:{cursor:"default"}}),a&&e.unit&&r.jsx(Yo,{children:e.unit}),r.jsx(Hl,{onClick:()=>p(!0),title:"Expand",children:r.jsx(Ue,{name:"CaretDownSmall",size:10})})]})}const ok=x.div`
  display: flex;
  flex-direction: column;
  background: #fbfaf7;
  border: 1px solid #e3ddd1;
  border-radius: 8px;
  overflow: hidden;
  font-size: 12px;
  grid-column: 1 / -1;
`,ak=x.div`
  display: flex;
  align-items: center;
  height: 28px;
  border-bottom: 1px solid #e3ddd1;
`,lk=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
`,Ji=x.div`
  display: flex;
  align-items: center;
  height: 24px;
  background: #fff;
  border: 1px solid #e3ddd1;
  border-radius: 5px;
  overflow: hidden;
`,Hl=x.button`
  border: none;
  background: transparent;
  color: #8a8071;
  cursor: default;
  padding: 0 8px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  &:hover {
    color: #281e14;
  }
`,ck=["none","solid","dashed","dotted","double"];function dk({cell:e,values:t,onChange:s}){const i=t.borderWidth??e.default,n=t.borderStyle??e.extraDefaults?.borderStyle??"solid",o=t.borderColor??e.extraDefaults?.borderColor??"#000000",[a,c]=l.useState(!1),d=l.useRef(null);return r.jsxs(Nu,{cell:e,value:i,onChange:u=>s("borderWidth",u),initialExpanded:i.some(u=>u>0),children:[r.jsxs(Ji,{children:[r.jsx(en,{children:"Style"}),r.jsx(Bu,{value:n,options:ck,onChange:u=>s("borderStyle",u)})]}),r.jsxs(Ji,{children:[r.jsx(zu,{ref:d,$color:o,onClick:()=>c(u=>!u)}),r.jsx(Ws,{value:o,onChange:u=>s("borderColor",u.target.value)}),r.jsx(qo,{open:a,anchorEl:d.current,value:o,onChange:u=>s("borderColor",u),onClose:()=>c(!1)})]})]})}function uk({value:e,pageFonts:t,onChange:s}){const[i,n]=l.useState(!1),[o,a]=l.useState(""),[c,d]=l.useState(-1),u=l.useRef(null),p=l.useRef(null),f=l.useRef(null),b=[{label:"On this page",fonts:t},{label:"Web-safe",fonts:X1},{label:"Google Fonts",fonts:Du}],m=o.toLowerCase(),y=b.flatMap(S=>S.fonts.filter(k=>!m||k.toLowerCase().includes(m)));l.useEffect(()=>{i&&(d(e==null?-1:y.indexOf(e)),requestAnimationFrame(()=>{p.current?.focus({preventScroll:!0}),p.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({block:"nearest"})}))},[i]);const g=S=>{s(S),n(!1),a(""),d(-1),u.current?.focus()},C=S=>{d(S),p.current?.querySelector(`[data-idx="${S}"]`)?.scrollIntoView({block:"nearest"})},v=S=>{S.key==="ArrowDown"?(S.preventDefault(),C(Math.min(c+1,y.length-1))):S.key==="ArrowUp"?(S.preventDefault(),C(Math.max(c-1,0))):S.key==="Enter"&&c>=0?(S.preventDefault(),g(y[c])):S.key==="Escape"?(n(!1),a(""),u.current?.focus()):S.currentTarget===p.current&&S.key.length===1&&!S.ctrlKey&&!S.metaKey&&f.current?.focus()},w=S=>{if(i)return;const k=b.flatMap(T=>T.fonts),E=e==null?-1:k.indexOf(e);if(S.key==="ArrowDown"){S.preventDefault();const T=k[Math.min(E+1,k.length-1)];T&&s(T)}else if(S.key==="ArrowUp"){S.preventDefault();const T=k[Math.max(E-1,0)];T&&s(T)}else(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),n(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs(Mu,{ref:u,tabIndex:0,onClick:S=>{S.currentTarget.focus(),n(k=>!k)},onKeyDown:w,children:[r.jsx(Lu,{$mixed:e==null,children:e??"Mixed"}),r.jsx(Pu,{children:"▾"})]}),r.jsx(Ms,{open:i,anchorEl:u.current,align:"right",onClose:()=>{n(!1),a("")},children:r.jsxs(tk,{children:[r.jsx(Iu,{ref:f,value:o,onChange:S=>{a(S.target.value),d(-1)},onKeyDown:v,placeholder:"Search fonts…"}),r.jsx(Ou,{ref:p,tabIndex:-1,onKeyDown:v,children:b.map(S=>{const k=S.fonts.filter(E=>!m||E.toLowerCase().includes(m));return k.length===0?null:r.jsxs($t.Fragment,{children:[r.jsx(Fu,{children:S.label}),k.map(E=>{const T=y.indexOf(E);return r.jsx(Zo,{$active:E===e,$highlighted:T===c,"aria-selected":E===e,"data-idx":T,onMouseEnter:()=>d(T),onClick:()=>g(E),children:E},E)})]},S.label)})})]})})]})}function Bu({value:e,options:t,onChange:s}){const[i,n]=l.useState(!1),[o,a]=l.useState(-1),c=l.useRef(null),d=l.useRef(null);l.useEffect(()=>{i&&(a(e==null?-1:t.indexOf(e)),requestAnimationFrame(()=>{d.current?.focus({preventScroll:!0}),d.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({block:"nearest"})}))},[i]);const u=m=>{s(m),n(!1),a(-1),c.current?.focus()},p=m=>{a(m),d.current?.children[m]?.scrollIntoView({block:"nearest"})},f=m=>{m.key==="ArrowDown"?(m.preventDefault(),p(Math.min(o+1,t.length-1))):m.key==="ArrowUp"?(m.preventDefault(),p(Math.max(o-1,0))):m.key==="Enter"&&o>=0?(m.preventDefault(),u(t[o])):m.key==="Escape"&&(n(!1),c.current?.focus())},b=m=>{if(i)return;const y=e==null?-1:t.indexOf(e);if(m.key==="ArrowDown"){m.preventDefault();const g=t[Math.min(y+1,t.length-1)];g!==void 0&&s(g)}else if(m.key==="ArrowUp"){m.preventDefault();const g=t[Math.max(y-1,0)];g!==void 0&&s(g)}else(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),n(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs(Mu,{ref:c,tabIndex:0,onClick:m=>{m.currentTarget.focus(),n(y=>!y)},onKeyDown:b,children:[r.jsx(Lu,{$mixed:e==null,children:e??"Mixed"}),r.jsx(Pu,{children:"▾"})]}),r.jsx(Ms,{open:i,anchorEl:c.current,onClose:()=>n(!1),children:r.jsx(Ou,{ref:d,tabIndex:-1,onKeyDown:f,children:t.map((m,y)=>r.jsx(Zo,{$active:m===e,$highlighted:y===o,"aria-selected":m===e,onMouseEnter:()=>a(y),onClick:()=>u(m),children:m},m))})})]})}function pk({cell:e,value:t,pageFonts:s,onChange:i}){return r.jsxs(er,{$span2:e.span2??!0,children:[r.jsx(en,{children:e.label}),r.jsx(uk,{value:t,pageFonts:s,onChange:i})]})}function fk({cell:e,value:t,onChange:s}){return r.jsxs(er,{$span2:e.span2,children:[r.jsx(en,{children:e.label}),r.jsx(Bu,{value:t,options:e.options??[],onChange:s})]})}function hk({cell:e,value:t,onChange:s}){return r.jsxs(er,{$span2:e.span2??!0,children:[r.jsx(en,{children:e.label}),r.jsx(ek,{value:t,onChange:i=>s(i.target.value)})]})}function gk({section:e,values:t,pageFonts:s,onChange:i,onDismiss:n}){return r.jsxs(V1,{children:[r.jsxs(Y1,{children:[r.jsx("span",{children:e.title}),e.dismissable&&n&&r.jsx(Z1,{onClick:n,children:"×"})]}),r.jsx(Q1,{children:e.cells.map(o=>{const a=t[o.key]??o.default,c=d=>i(o.key,d);switch(o.type){case"num":return r.jsx(nk,{cell:o,value:a,onChange:c},o.key);case"color":return r.jsx(rk,{cell:o,value:a,onChange:c},o.key);case"font":return r.jsx(pk,{cell:o,value:a,pageFonts:s,onChange:c},o.key);case"select":return r.jsx(fk,{cell:o,value:a,onChange:c},o.key);case"text":return r.jsx(hk,{cell:o,value:a,onChange:c},o.key);case"four":return r.jsx(Nu,{cell:o,value:a,onChange:c},o.key);case"border":return r.jsx(dk,{cell:o,values:t,onChange:i},o.key)}})})]})}const mk=new Set(["h1","h2","h3","h4","h5","h6","p","span","a","strong","em","b","i","u","li","td","th","label","button","code","pre","blockquote","small","figcaption","dt","dd"]);function dt(e,t=0){const s=parseFloat(e??"");return isNaN(s)?t:s}let In;function xk(e){if(In===void 0&&(In=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),!In)return e;In.fillStyle="#000000";try{In.fillStyle=e}catch{return e}return In.fillStyle}function Tr(e){if(!e)return"#000000";if(e.startsWith("#"))return e.length===4?"#"+[...e.slice(1)].map(o=>o+o).join(""):e;if(!e.startsWith("rgb")){const o=xk(e);if(o.startsWith("#"))return o.length===4?"#"+[...o.slice(1)].map(a=>a+a).join(""):o;e=o}const t=e.match(/rgba?\(([\d\s,./]+)\)/);if(!t)return"#000000";const[s,i,n]=t[1].split(/[\s,/]+/).filter(Boolean).map(o=>parseInt(o,10));return"#"+[s,i,n].map(o=>(o||0).toString(16).padStart(2,"0")).join("")}function bk(e){return mk.has(e.tag)?!0:e.innerHTML.replace(/<[^>]*>/g,"").replace(/&[a-z]+;/gi," ").trim().length>2}const yk=new Set(["svg","path","circle","rect","line","ellipse","polygon","polyline","g","use","text"]);function Qo(e){return yk.has(e.tag)}function wk(e){const t=e.styles.display;return!t||t==="block"||t.includes("flex")||t.includes("grid")||t==="inline-block"}function vk(e){return(e.styles.display??"").includes("flex")}function Ki(e,t,s=i=>!!i&&i!=="none"&&i!=="transparent"&&i!=="rgba(0, 0, 0, 0)"){if(s(e.styles[t]))return{value:e.styles[t],depth:0};for(let i=0;i<e.parents.length;i++){const n=e.parents[i].styles?.[t];if(s(n))return{value:n,depth:i+1}}return{value:void 0,depth:0}}function Xi(e){return e===0?"e":`e${".parentElement".repeat(e)}`}function kk(e,t){if(!e)return!1;const s=t.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);return e.split(";").some(i=>i.trim().toLowerCase().startsWith(s+":")||i.trim().toLowerCase().startsWith(s+" :"))}function Sk(e,t){if(e.styles[t]!==void 0&&kk(e.inlineStyle,t))return e.styles[t];const s=(e.children??[]).filter(n=>n.styles[t]!==void 0);if(s.length===0)return;const i=new Set(s.map(n=>n.styles[t]));return i.size===1?[...i][0]:null}function Ck(e){if(Qo(e))return null;const t=bk(e),i=(e.children??[]).filter(y=>y.styles.fontSize||y.styles.fontFamily||y.styles.fontWeight||y.styles.color).length>0;if(!t&&!i)return null;const n=i?y=>Sk(e,y):y=>e.styles[y],o=n("fontFamily"),a=n("fontSize"),c=n("fontWeight"),d=n("color"),u=n("textAlign"),p=n("lineHeight"),f=n("letterSpacing");return{id:"typography",title:"Typography",cells:[{key:"font",type:"font",label:"Font",span2:!0,default:o===null?null:(o??"inherit").split(",")[0].replace(/['"]/g,"").trim()},{key:"fontSize",type:"num",label:"Size",min:6,max:200,step:1,unit:"px",default:a===null?null:dt(a,16)},{key:"fontWeight",type:"select",label:"Weight",options:["100","200","300","400","500","600","700","800","900"],default:c===null?null:c??"400"},{key:"color",type:"color",label:"Color",default:d===null?null:Tr(d)},{key:"textAlign",type:"select",label:"Align",options:["left","center","right","justify"],default:u===null?null:u??"left"},{key:"lineHeight",type:"num",label:"Line",step:.05,default:(()=>{if(p===null)return null;const y=dt(p,0),g=dt(a??e.styles.fontSize,16);return y>0&&g>0?Math.round(y/g*100)/100:1.4})()},{key:"letterSpacing",type:"num",label:"Tracking",min:-5,max:20,step:.1,unit:"px",default:f===null?null:dt(f,0)}],applyFn:i?"function(p,e){function a(t){if('font'in p)t.style.fontFamily=p.font;if('fontSize'in p)t.style.fontSize=p.fontSize+'px';if('fontWeight'in p)t.style.fontWeight=p.fontWeight;if('color'in p)t.style.color=p.color;if('textAlign'in p)t.style.textAlign=p.textAlign;if('lineHeight'in p)t.style.lineHeight=p.lineHeight;if('letterSpacing'in p)t.style.letterSpacing=p.letterSpacing+'px';}a(e);Array.from(e.querySelectorAll('*')).filter(function(d){return(d.innerText||d.textContent||'').trim().length>0;}).forEach(a);}":"function(p,e){if('font'in p)e.style.fontFamily=p.font;if('fontSize'in p)e.style.fontSize=p.fontSize+'px';if('fontWeight'in p)e.style.fontWeight=p.fontWeight;if('color'in p)e.style.color=p.color;if('textAlign'in p)e.style.textAlign=p.textAlign;if('lineHeight'in p)e.style.lineHeight=p.lineHeight;if('letterSpacing'in p)e.style.letterSpacing=p.letterSpacing+'px';}"}}function _k(e){if(Qo(e)||!wk(e))return null;const t=e.styles.backgroundColor,s=!!t&&t!=="transparent"&&t!=="rgba(0, 0, 0, 0)",i=(e.styles.borderStyle??"none").split(" ")[0],n=[];return s&&n.push({key:"background",type:"color",label:"Fill",default:Tr(t)}),n.push({key:"opacity",type:"num",label:"Opacity",default:dt(e.styles.opacity,1),min:0,max:1,step:.01},{key:"padding",type:"four",label:"Padding",unit:"px",min:0,max:200,default:[dt(e.styles.paddingTop),dt(e.styles.paddingRight),dt(e.styles.paddingBottom),dt(e.styles.paddingLeft)]},{key:"margin",type:"four",label:"Margin",unit:"px",min:-100,max:200,default:[dt(e.styles.marginTop),dt(e.styles.marginRight),dt(e.styles.marginBottom),dt(e.styles.marginLeft)]},{key:"borderWidth",type:"border",label:"Border",unit:"px",min:0,max:40,default:[dt(e.styles.borderTopWidth),dt(e.styles.borderRightWidth),dt(e.styles.borderBottomWidth),dt(e.styles.borderLeftWidth)],extraDefaults:{borderStyle:i==="none"?"solid":i,borderColor:Tr(e.styles.borderColor??e.styles.color)}},{key:"radius",type:"four",label:"Radius",unit:"px",min:0,max:100,subLabels:["TL","TR","BR","BL"],default:[dt(e.styles.borderTopLeftRadius),dt(e.styles.borderTopRightRadius),dt(e.styles.borderBottomRightRadius),dt(e.styles.borderBottomLeftRadius)]}),{id:"box",title:"Box",cells:n,applyFn:"function(p,e){if('background'in p)e.style.backgroundColor=p.background;if('opacity'in p)e.style.opacity=p.opacity;if('padding'in p)e.style.padding=p.padding.map(function(v){return v+'px'}).join(' ');if('margin'in p)e.style.margin=p.margin.map(function(v){return v+'px'}).join(' ');if('borderWidth'in p){e.style.borderWidth=p.borderWidth.map(function(v){return v+'px'}).join(' ');if(!('borderStyle'in p)&&!e.style.borderStyle){var cs=getComputedStyle(e);if(cs.borderTopStyle==='none'&&cs.borderRightStyle==='none'&&cs.borderBottomStyle==='none'&&cs.borderLeftStyle==='none')e.style.borderStyle='solid';}}if('borderStyle'in p)e.style.borderStyle=p.borderStyle;if('borderColor'in p)e.style.borderColor=p.borderColor;if('radius'in p){var r=p.radius;e.style.borderRadius=Array.isArray(r)?r.map(function(v){return v+'px'}).join(' '):r+'px';}}"}}function $k(e){return vk(e)?{id:"layout",title:"Layout",cells:[{key:"gap",type:"num",label:"Gap",default:dt(e.styles.gap),min:0,max:200,unit:"px"},{key:"dir",type:"select",label:"Direction",default:e.styles.flexDirection??"row",options:["row","column","row-reverse","column-reverse"]},{key:"justify",type:"select",label:"Justify",default:e.styles.justifyContent??"flex-start",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{key:"align",type:"select",label:"Align",default:e.styles.alignItems??"stretch",options:["stretch","flex-start","center","flex-end","baseline"]}],applyFn:"function(p,e){if('gap'in p)e.style.gap=p.gap+'px';if('dir'in p)e.style.flexDirection=p.dir;if('justify'in p)e.style.justifyContent=p.justify;if('align'in p)e.style.alignItems=p.align;}"}:null}function Ek(e){const t=Ki(e,"width",a=>!!a&&a.endsWith("px")),s=Ki(e,"height",a=>!!a&&a.endsWith("px"));if(!t.value&&!s.value)return null;const i=[];t.value&&i.push({key:"width",type:"num",label:"Width",default:dt(t.value),min:0,max:2e3,unit:"px"}),s.value&&i.push({key:"height",type:"num",label:"Height",default:dt(s.value),min:0,max:2e3,unit:"px"});const n=Xi(t.depth),o=Xi(s.depth);return{id:"size",title:"Size",cells:i,applyFn:`function(p,e){if('width'in p)${n}.style.width=p.width+'px';if('height'in p)${o}.style.height=p.height+'px';}`}}function Tk(e){const t=e.tag==="img",s=!!e.styles.backgroundImage&&e.styles.backgroundImage!=="none";if(!t&&!s)return null;const i=t?[{key:"src",type:"text",label:"Source",default:e.attrs.src??"",span2:!0},{key:"fit",type:"select",label:"Fit",default:e.styles.objectFit??"cover",options:["cover","contain","fill","none","scale-down"]},{key:"w",type:"num",label:"Width",default:dt(e.styles.width),min:0,max:2e3,unit:"px"}]:[{key:"bgSize",type:"select",label:"Size",default:e.styles.backgroundSize??"cover",options:["cover","contain","auto"]},{key:"bgPos",type:"select",label:"Position",default:e.styles.backgroundPosition??"center",options:["center","top","bottom","left","right"]}];return{id:"image",title:t?"Image":"Background Image",cells:i,applyFn:t?"function(p,e){if('src'in p)e.src=p.src;if('fit'in p)e.style.objectFit=p.fit;if('w'in p)e.style.width=p.w+'px';}":"function(p,e){if('bgSize'in p)e.style.backgroundSize=p.bgSize;if('bgPos'in p)e.style.backgroundPosition=p.bgPos;}"}}function jk(e){const t=p=>p==="absolute"||p==="fixed",s=p=>!!p&&p!=="auto",i=Ki(e,"position",t);if(!i.value)return null;const n=i.depth,o=n===0?e.styles:e.parents[n-1]?.styles;if(!o)return null;const a=["top","right","bottom","left"].filter(p=>s(o[p]));if(a.length===0)return null;const c=Xi(n),d=a.map(p=>({key:`pos_${p}`,type:"num",label:p.charAt(0).toUpperCase()+p.slice(1),default:parseFloat(o[p]||"0"),step:1,unit:"px"})),u=a.map(p=>`if('pos_${p}'in p)${c}.style.${p}=p.pos_${p}+'px';`).join("");return{id:"positioning",title:`Position (${i.value}${n>0?`, ${n} up`:""})`,cells:d,applyFn:`function(p,e){${u}}`}}function Rk(e){if(e.tag!=="body")return null;const t=e.styles.backgroundColor,s=t&&t!=="rgba(0, 0, 0, 0)"?Tr(t):"#ffffff",i=e.styles.fontFamily?.split(",")[0]?.trim().replace(/['"]+/g,"")??"system-ui";return{id:"page",title:"Page",cells:[{key:"bg",type:"color",label:"Background",default:s,span2:!0},{key:"font",type:"font",label:"Font",default:i,span2:!0},{key:"fontSize",type:"num",label:"Base size",default:dt(e.styles.fontSize),min:8,max:32,unit:"px"}],applyFn:"function(p,e){if('bg'in p)e.style.backgroundColor=p.bg;if('font'in p)e.style.fontFamily=p.font;if('fontSize'in p)e.style.fontSize=p.fontSize+'px';}"}}function Ak(e){if(!["input","textarea"].includes(e.tag))return null;const t=[];return e.attrs.placeholder!==void 0&&t.push({key:"placeholder",type:"text",label:"Placeholder",default:e.attrs.placeholder,span2:!0}),e.tag==="input"&&e.attrs.value!==void 0&&t.push({key:"value",type:"text",label:"Value",default:e.attrs.value,span2:!0}),t.length===0?null:{id:"form-content",title:"Content",cells:t,applyFn:"function(p,e){if('placeholder'in p)e.setAttribute('placeholder',p.placeholder);if('value'in p)e.setAttribute('value',p.value);}"}}function Dk(e){if(!Qo(e))return null;const t=e.styles.fill??e.attrs.fill,s=e.styles.stroke??e.attrs.stroke,i=e.styles.strokeWidth??e.attrs["stroke-width"],n=o=>!o||o==="none"?null:Tr(o);return{id:"svg",title:"SVG",cells:[{key:"fill",type:"color",label:"Fill",default:n(t),placeholder:"none"},{key:"stroke",type:"color",label:"Stroke",default:n(s),placeholder:"none"},{key:"strokeWidth",type:"num",label:"Stroke W",default:dt(i,1),min:0,step:.5},{key:"opacity",type:"num",label:"Opacity",default:dt(e.styles.opacity,1),min:0,max:1,step:.01}],applyFn:"function(p,e){if('fill'in p)e.style.fill=p.fill;if('stroke'in p)e.style.stroke=p.stroke;if('strokeWidth'in p)e.style.strokeWidth=p.strokeWidth+'px';if('opacity'in p)e.style.opacity=p.opacity;}"}}function Mk(e){if(e.length===0)return[];const t=e[0];return t.tag==="body"?[Rk(t)].filter(s=>s!==null):[Dk,Ak,Ck,Tk,jk,Ek,$k,_k].map(s=>s(t)).filter(s=>s!==null)}const Hu=340,Lk=x.div`
  width: ${e=>e.$open?Hu:0}px;
  flex-shrink: 0;
  background: #fbfaf7;
  border-left: ${e=>e.$open?"1px solid #e3ddd1":"none"};
  overflow: hidden;
  box-shadow: ${e=>e.$open?"-4px 0 12px rgba(40, 30, 20, 0.08)":"none"};
  transition: width ${Hf};
`,Pk=x.div`
  width: ${Hu}px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Ok=x.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 0 12px;
`,Fk=x.div`
  padding: 28px 20px;
  text-align: center;
  font-size: 12px;
  color: #8a8071;
  line-height: 1.5;
`,Ik=x.div`
  font-size: 11px;
  color: #8a8071;
  text-align: center;
  padding: 12px 14px;
`,zk=x.div`
  padding: 12px 14px;
  border-top: 1px solid #e3ddd1;
`;function Nk({open:e,pendingSelection:t,webviewRef:s,scheduleWrite:i,deleteSelection:n}){const[o,a]=l.useState([]),[c,d]=l.useState({}),[u,p]=l.useState({}),[f,b]=l.useState([]),m=l.useRef(new Set),y=t?.selector??"";l.useEffect(()=>{if(a([]),d({}),p({}),m.current.clear(),!y)return;const w=Ve(s.current);if(!w)return;let S=!1;return w.executeJavaScript("window.__knobsGetContext && window.__knobsGetContext()").then(k=>{if(S||!k)return;const E=JSON.parse(k),T=Mk(E);a(T);const _={};T.forEach(R=>R.cells.forEach($=>{_[$.key]=$.default,$.extraDefaults&&Object.assign(_,$.extraDefaults)})),p(_),d(_),w.executeJavaScriptUnchecked("window.__knobsSaveState && window.__knobsSaveState()")}).catch(()=>{}),w.executeJavaScript(`(function(){var set = new Set();document.querySelectorAll("*").forEach(function(el){var f = getComputedStyle(el).fontFamily;if (f) f.split(",").forEach(function(n){ set.add(n.trim().replace(/['']/g,"")); });});return JSON.stringify(Array.from(set).filter(function(f){return f && f!=="inherit" && f!=="initial";}).slice(0,20));})()`).then(k=>{S||b(JSON.parse(k||"[]"))}).catch(()=>{}),()=>{S=!0}},[y]);const g=l.useRef(u);g.current=u;const C=l.useCallback((w,S,k)=>{const E=Ve(s.current);if(!E)return;const T=w.id+":",_={};w.cells.forEach(R=>{for(const $ of[R.key,...Object.keys(R.extraDefaults??{})]){const M=S[$];if(M===void 0)continue;if(JSON.stringify(M)!==JSON.stringify(k[$])||m.current.has($)){const z=$.startsWith(T)?$.slice(T.length):$;_[z]=M}}}),Object.keys(_).length!==0&&E.executeJavaScriptUnchecked("window.__knobsApply && window.__knobsApply("+JSON.stringify(w.applyFn)+", "+JSON.stringify(JSON.stringify(_))+")")},[s]),v=l.useCallback((w,S)=>{const k=!m.current.has(w);m.current.add(w);const E=o.find(_=>_.cells.some(R=>R.key===w||R.extraDefaults&&w in R.extraDefaults)),T=E?.cells.find(_=>_.key===w||_.extraDefaults&&w in _.extraDefaults);k&&E&&G.trackEvent("edit_knob_change",{via:E.id,mode:T?.type}),d(_=>{const R={..._,[w]:S};if(E){if(T?.type==="font"){const $=Ve(s.current);$&&q1(S,$)}C(E,R,g.current)}return R}),i()},[o,C,s,i]);return r.jsx(Lk,{$open:e,children:r.jsxs(Pk,{children:[r.jsxs(Ok,{children:[!t&&e&&r.jsx(Fk,{children:"Click anything on the canvas to edit it."}),t&&r.jsx(r.Fragment,{children:o.length===0?r.jsx(Ik,{children:"Reading element…"}):o.map(w=>r.jsx(gk,{section:w,values:c,pageFonts:f,onChange:v,onDismiss:void 0},w.id))})]}),n&&t&&t.selector!=="body"&&r.jsx(zk,{children:r.jsx(fe,{variant:"default",size:"sm",onClick:()=>void n(),style:{width:"100%"},children:"Delete element"})})]})})}function Bk(e){return!(!e||e.includes("..")||e.startsWith("/")||/^[a-z]+:\/\//i.test(e))}async function Hk(e){await e.executeJavaScript("window.__isBabelPage && window.__isBabelPage()").catch(()=>!1)&&(await e.executeJavaScript("window.__cacheBabelSources && window.__cacheBabelSources()").catch(()=>{}),await e.executeJavaScript("window.__ensureJSXSource && window.__ensureJSXSource()").catch(()=>{}))}async function Ul(e){if(!await e.executeJavaScript("window.__isBabelPage && window.__isBabelPage()").catch(()=>!1))return null;await e.executeJavaScript("window.__cacheBabelSources && window.__cacheBabelSources()").catch(()=>{});const s=await e.executeJavaScript("window.__listBabelScripts && window.__listBabelScripts()").catch(()=>null);return s?JSON.parse(s).map(n=>({idx:n.idx,src:n.src&&Bk(n.src)?n.src:(n.src==null,null)})):[]}async function di(e,t,s,i,n,o,a,c,d){const u=await e.executeJavaScript(`window.__getJSXLoc && window.__getJSXLoc(${JSON.stringify(n)})`).catch(()=>null);if(!u)return d("Can't save this edit — element isn't from project source."),{written:!1,deferred:null,reason:null};const p=JSON.parse(u);if(p.scriptIdx<0||p.scriptIdx>=i.length)return d("Can't save this edit — couldn't locate the source script."),{written:!1,deferred:null,reason:null};const f=i[p.scriptIdx],b=f.src??s,m=f.src?`${b} (near line ${p.line}, <${p.tag}>)`:`the inline babel script in ${b} (near script line ${p.line}, <${p.tag}>)`;if(a==="delete"){const v=await e.executeJavaScript(`window.__countFibersAtLoc && window.__countFibersAtLoc(${p.line},${p.col})`).catch(()=>0);if(v>1)return{written:!1,deferred:`In ${m}: delete the element described below. It's rendered ${v}× from one JSX location — if that's a component body like <Card>, remove the matching <Card .../> usage; if it's a .map(), remove the corresponding data item.
${o}`,reason:"jsx-fiber-multi"}}const y=await e.executeJavaScript(`window.__patchJSXSource && window.__patchJSXSource(${p.scriptIdx},${p.line},${p.col},${JSON.stringify(p.tag)},${JSON.stringify(a)},${JSON.stringify(JSON.stringify({cssText:c.cssText,newText:c.newText,original:c.original}))})`).catch(()=>null),g=y?JSON.parse(y):{ok:!1,reason:"parse_error"},C=v=>{const w=c.cssText??"";return!v||v.length===0?`set the inline style to \`${w}\``:`set ${v.join(", ")} to match \`${w}\` (current source value is a dynamic expression)`};if(g.ok){f.src?await G.writeFile(`${t}/${f.src}`,g.newSource):await Uk(t,s,p.scriptIdx,g.newSource);const v=g.deferred.length>0?`In ${m}: ${C(g.deferred)}.`:null;return{written:!0,deferred:v,reason:v?"jsx-dynamic-style-partial":null}}if(g.reason==="dynamic_text"||g.reason==="dynamic_style"||g.reason==="stale_loc"){const v=a==="text"?`change the text from ${JSON.stringify(c.original??"")} to ${JSON.stringify(c.newText??"")}`:a==="delete"?"delete the element described below":C(g.deferred),w=g.reason==="dynamic_text"?"jsx-dynamic-text":g.reason==="dynamic_style"?"jsx-dynamic-style":"jsx-stale-loc";return{written:!1,deferred:`In ${m}: ${v}.
${o}`,reason:w}}return d("Can't save this edit — element isn't from project source."),{written:!1,deferred:null,reason:null}}async function Wl(e,t){if(t.length===0)return;const s=Array.from(new Set(t)),i=s.length===1?`Apply a direct edit. ${s[0]}`:`Apply ${s.length} direct edits:
${s.map((n,o)=>`${o+1}. ${n}`).join(`
`)}`;window.dispatchEvent(new CustomEvent("autosend-attachments",{detail:{label:i,attachments:[],kind:"direct-edit"}})),await e.executeJavaScript("window.__babelScriptSources=null;window.__cacheBabelSources&&window.__cacheBabelSources();window.__ensureJSXSource&&window.__ensureJSXSource()").catch(()=>{})}async function Uk(e,t,s,i){const n=`${e}/${t}`,o=await G.readFile(n),a=/(<script\b[^>]*type=["'](?:text\/babel|text\/jsx)["'][^>]*>)([\s\S]*?)(<\/script>)/gi;let c=-1;const d=o.replace(a,(u,p,f,b)=>(c++,c!==s||/\bsrc\s*=/.test(p)?u:p+`
`+i+`
`+b));await G.writeFile(n,d)}const Wk=64*1024,Gk=/<meta\s+[^>]*name\s*=\s*["']?(?:apple-)?mobile-web-app-capable["']?[^>]*>/i,Jk=/content\s*=\s*["']?yes["']?/i,Kk=/<link\s+[^>]*rel\s*=\s*["']?apple-touch-icon["']?/i;function Xk(e){const t=e.slice(0,Wk),s=t.match(Gk);return!!s&&Jk.test(s[0])&&Kk.test(t)}const qk=x.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 8px 14px;
  background: ${h.bg.elevated};
  border: 1px solid ${h.border.default};
  border-radius: 10px;
  box-shadow: ${h.shadow.lg};
  z-index: 20;
  font-family: inherit;
  max-width: calc(100% - 24px);
`,Vk=x.span`
  font-size: 13px;
  font-weight: 500;
  color: ${h.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yk=x.button`
  all: unset;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  cursor: pointer;
  color: ${h.text.tertiary};
  flex-shrink: 0;
  &:hover {
    background: ${h.bg.hover};
    color: ${h.text.primary};
  }
`;function Zk({projectPath:e,filePath:t,externalUrl:s}){const i=Yn(),[n,o]=l.useState(!1),[a,c]=l.useState(null);if(l.useEffect(()=>{if(!pa)return;if(!/\.html?$/i.test(t)){o(!1);return}let u=!1;return(async()=>{try{const p=await at().getFile({projectId:e,path:t,raw:!0});if(u)return;const f=new TextDecoder().decode(p.content);o(Xk(f))}catch{u||o(!1)}})(),()=>{u=!0}},[e,t]),!pa||!n||a===t)return null;const d=async()=>{await i({title:"View as mobile prototype",message:'We’ll open this in a new tab. To pin it to your home screen, tap the Share button in Safari and choose "Add to Home Screen".',confirmLabel:"Continue"})&&G.openExternal(s)};return r.jsxs(qk,{children:[r.jsx(Vk,{children:"View as mobile prototype?"}),r.jsx(fe,{size:"xs",variant:"black",onClick:()=>void d(),children:"Open"}),r.jsx(Yk,{onClick:()=>c(t),"aria-label":"Dismiss",title:"Dismiss",children:r.jsx(Ue,{name:"XSmall",size:12})})]})}function Qk(e,t,s,i){const[n,o]=l.useState(1),[a,c]=l.useState(!1),[d,u]=l.useState(!0);l.useEffect(()=>{i&&u(!0)},[i]),l.useEffect(()=>{G.getSettings().then(y=>{y.htmlViewerZoom&&o(y.htmlViewerZoom)}).catch(y=>{})},[]),l.useEffect(()=>{if(!i||!d||!s||!t.current)return;const y=t.current,g=()=>{const v=y.getBoundingClientRect();if(v.width===0||v.height===0)return;const w=v.width/i.width,S=v.height/i.height;o(Math.min(w,S))};g();const C=new ResizeObserver(g);return C.observe(y),()=>C.disconnect()},[i,d,s]),l.useEffect(()=>{const y=Ve(e.current);if(!(!y||!s))try{y.setZoomFactor(n)}catch{}},[n,s]);const p=l.useCallback(y=>{i&&u(!1),o(y),c(!1),G.updateSettings({htmlViewerZoom:y})},[i]),f=l.useCallback(()=>{u(!0),c(!1)},[]),b=l.useMemo(()=>{const y=[];return i&&(y.push({label:d?"✓ Auto":"Auto",onClick:f}),y.push({separator:!0})),y.push({label:"50%",onClick:()=>p(.5)},{label:"75%",onClick:()=>p(.75)},{label:"90%",onClick:()=>p(.9)},{label:"100%",onClick:()=>p(1)},{label:"110%",onClick:()=>p(1.1)},{label:"125%",onClick:()=>p(1.25)},{label:"150%",onClick:()=>p(1.5)},{label:"175%",onClick:()=>p(1.75)},{label:"200%",onClick:()=>p(2)}),y},[p,f,i,d]),m=l.useMemo(()=>{if(!i||!t.current)return{x:0,y:0};const y=t.current.getBoundingClientRect(),g=i.width*n,C=i.height*n;return{x:Math.max(0,(y.width-g)/2),y:Math.max(0,(y.height-C)/2)}},[i,n]);return{zoomLevel:n,zoomMenuOpen:a,setZoomMenuOpen:c,zoomMenuItems:b,handleZoomChange:p,fixedSizeOffset:m,autoZoom:d}}const eS=50;function tS(e,t,s,i){const n=l.useRef(null);l.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),l.useEffect(()=>G.onAgentShowFile((a,c)=>{c?.target!=="user"||Sr(a).barePath!==t||(n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{n.current=null,Ve(e.current)?.reload()},eS))}),[t]),l.useEffect(()=>{window.__omUserViewerHandle=Ve(e.current);const o=G.onAgentEvalJs(async(c,d,u)=>{if(u?.target!=="user")return;const p=Ve(e.current);if(!p){G.sendEvalResult(c,!1,void 0,"User's preview not available");return}try{const f=await p.executeJavaScript(d);G.sendEvalResult(c,!0,f)}catch(f){G.sendEvalResult(c,!1,void 0,String(f))}}),a=G.onScreenshotPrepare(async c=>{if(c?.target!=="user")return;const d=c?.requestId,u=Ve(e.current);if(!u){G.sendScreenshotReady({requestId:d,error:"User's preview not available"});return}await new Promise(p=>setTimeout(p,500));try{const p=await u.capturePage(c);G.sendScreenshotReady({requestId:d,dataUrl:p.toDataURL()})}catch(p){G.sendScreenshotReady({requestId:d,error:String(p)})}});return()=>{o(),a(),window.__omUserViewerHandle=null}},[]),l.useEffect(()=>{const o=a=>{};return window.addEventListener("webview-first-error",o),()=>window.removeEventListener("webview-first-error",o)},[s,i])}function nS(e){if(e.isBody)return"serialize";if(e.isStaticSrc){if(e.ledgerStale&&(e.hasBabelScripts||e.isBabel))return"bail-babel";if(!e.ledgerStale)return"srcmap"}return e.hasBabelScripts?"jsx":e.isBabel?"bail-babel":e.hasGeneratorScript?"defer-gen":"serialize"}function ui(e){return e.hasBabelScripts||e.isBabel?"bail-babel":e.hasGeneratorScript?"defer-gen":"serialize"}function pi(e){const t=new TextEncoder().encode(e);let s=5381;for(let i=0;i<t.length;i++)s=(s<<5)+s+t[i]>>>0;return s.toString(16).padStart(8,"0")}class ea{constructor(t,s,i,n){this.filePath=t,this.io=s,this.srcmap=i,this.bytes=n}ops=[];chain=Promise.resolve();pendingOwnWrites=0;stale=!1;static async open(t,s,i){if(!i.gen||i.entries.size===0)return null;const n=await s.readFile(t).catch(()=>"");return!n||pi(n)!==i.gen?null:new ea(t,s,i,new TextEncoder().encode(n))}get gen(){return this.srcmap.gen}get isStale(){return this.stale}get pendingCount(){return this.ops.length}canApply(t){if(this.stale)return"ledger-stale";switch(t.kind){case"move":case"insert":case"duplicate":case"group":return"not-implemented"}const s=this.srcmap.entries.get(t.omId);if(!s)return"non-canonical";if(t.kind==="delete"&&s.closeEnd==null)return"implied-close-nonempty";if(t.kind==="attr"&&!/^[a-zA-Z_:][\w:.-]*$/.test(t.name))return"srcmap-offset-invalid";if(t.kind==="text"){if(s.textRuns.length===0)return"srcmap-offset-invalid";const i=new TextDecoder;if(!s.textRuns.some(([o,a])=>{const c=i.decode(this.bytes.subarray(o,a));return c===t.before||c.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")===t.before}))return"srcmap-offset-invalid"}return null}apply(t){this.stale||this.canApply(t)!==null||this.ops.push(t)}reconcile(){const t=this.chain.then(()=>this.doReconcile());return this.chain=t.catch(()=>{}),t}async doReconcile(){if(this.stale)return"stale";if(this.ops.length===0)return"noop";const t=await this.io.readFile(this.filePath).catch(()=>"");if(!t||pi(t)!==this.srcmap.gen)return this.stale=!0,"stale";const s=rS(this.ops),i=s.map(a=>sS(this.bytes,this.srcmap.entries,a)).filter(a=>a!==null);if(i.length!==s.length)return this.stale=!0,"stale";const n=iS(this.bytes,i),o=new TextDecoder().decode(n);this.pendingOwnWrites++;try{await this.io.writeFile(this.filePath,o)}catch(a){throw this.pendingOwnWrites--,a}return this.bytes=n,this.srcmap={gen:pi(o),entries:oS(this.srcmap.entries,i)},this.ops=[],"ok"}onExternalWrite(){if(this.pendingOwnWrites>0){this.pendingOwnWrites--;return}this.stale=!0}}function rS(e){const t=new Map,s=[];for(const i of e){const n=i.kind==="attr"?`attr:${i.omId}:${i.name}`:"omId"in i?`${i.kind}:${i.omId}`:`${i.kind}:${JSON.stringify(i)}`,o=t.get(n);o!=null?s[o]=i:(t.set(n,s.length),s.push(i))}return s}function sS(e,t,s){const i=new TextEncoder,n=new TextDecoder;switch(s.kind){case"style":{const o=t.get(s.omId);if(!o||o.openEnd>e.length||e[o.openEnd-1]!==62)return null;const a=o.styleAttr?n.decode(e.subarray(o.styleAttr[0],o.styleAttr[1])).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"):"",c=Gl(a);for(const[b,m]of Gl(s.cssText))c.set(b,m);const d=Array.from(c,([b,m])=>`${b}: ${m}`).join("; ").replace(/"/g,"&quot;");if(o.styleAttr)return{from:o.styleAttr[0],to:o.styleAttr[1],ins:i.encode(d)};const u=i.encode(d),p=i.encode(' style="'),f=new Uint8Array(p.length+u.length+1);return f.set(p),f.set(u,p.length),f[f.length-1]=34,{from:o.attrEnd,to:o.attrEnd,ins:f,setStyleAttr:{omId:s.omId,rel:[p.length,p.length+u.length]}}}case"text":{const o=t.get(s.omId);if(!o)return null;const a=o.textRuns.find(([d,u])=>{const p=n.decode(e.subarray(d,u));return p===s.before||p.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")===s.before});if(!a)return null;const c=s.after.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return{from:a[0],to:a[1],ins:i.encode(c)}}case"attr":{const o=t.get(s.omId);if(!o||o.openEnd>e.length||e[o.openEnd-1]!==62)return null;const a=s.value.replace(/&/g,"&amp;").replace(/"/g,"&quot;");return{from:o.attrEnd,to:o.attrEnd,ins:i.encode(` ${s.name}="${a}"`)}}case"delete":{const o=t.get(s.omId);return!o||o.closeEnd==null?null:{from:o.openStart,to:o.closeEnd,ins:new Uint8Array(0)}}default:return null}}function iS(e,t){const s=[...t].sort((n,o)=>o.from-n.from);let i=e;for(const n of s){const o=new Uint8Array(i.length-(n.to-n.from)+n.ins.length);o.set(i.subarray(0,n.from)),o.set(n.ins,n.from),o.set(i.subarray(n.to),n.from+n.ins.length),i=o}return i}function oS(e,t){const s=[...t].sort((c,d)=>c.from-d.from),i=c=>{let d=0;for(const u of s){if(c<=u.from)break;d+=u.ins.length-(u.to-u.from)}return c+d},n=[];for(const c of s)c.ins.length===0&&c.to>c.from&&n.push([c.from,c.to]);const o=c=>n.some(([d,u])=>c>=d&&c<u),a=new Map;for(const[c,d]of e){if(o(d.openStart))continue;const u={...d,openStart:i(d.openStart),attrEnd:i(d.attrEnd),openEnd:i(d.openEnd),closeEnd:d.closeEnd!=null?i(d.closeEnd):void 0,styleAttr:d.styleAttr?[i(d.styleAttr[0]),i(d.styleAttr[1])]:void 0,textRuns:d.textRuns.map(([p,f])=>[i(p),i(f)])};a.set(c,u)}for(const c of s){if(!c.setStyleAttr)continue;const d=a.get(c.setStyleAttr.omId);if(!d)continue;const u=i(c.from);d.styleAttr=[u+c.setStyleAttr.rel[0],u+c.setStyleAttr.rel[1]]}return a}function Gl(e){const t=new Map;let s=0,i="",n=0;const o=a=>{const c=a.indexOf(":");if(c<=0)return;const d=a.slice(0,c).trim(),u=a.slice(c+1).trim();d&&t.set(d,u)};for(let a=0;a<e.length;a++){const c=e[a];i?c===i&&(i=""):c==='"'||c==="'"?i=c:c==="("?s++:c===")"?s=Math.max(0,s-1):c===";"&&s===0&&(o(e.slice(n,a)),n=a+1)}return o(e.slice(n)),t}function Jl(e){const t=new Map;let s=0,i="",n=0;const o=a=>{const c=e.slice(n,a),d=c.indexOf(":");if(d>0){const u=c.slice(0,d).trim();u&&t.set(u,c.slice(d+1).trim())}n=a+1};for(let a=0;a<e.length;a++){const c=e[a];i?c===i&&(i=""):c==='"'||c==="'"?i=c:c==="("?s++:c===")"?s=Math.max(0,s-1):c===";"&&s===0&&o(a)}return o(e.length),t}function aS(e,t){const s=/(\sstyle\s*=\s*)(["'])([\s\S]*?)\2/i.exec(e),i=s?s[2]:'"',n=i==='"'?"&quot;":"&#39;",o=(s?.[3]??"").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),a=Jl(o);for(const[p,f]of Jl(t))a.set(p,f);const c=Array.from(a,([p,f])=>`${p}: ${f}`).join("; ").split(i).join(n);if(s)return e.slice(0,s.index)+`${s[1]}${i}${c}${i}`+e.slice(s.index+s[0].length);const d=e.endsWith("/>")&&!/=[^\s"'>]*\/>$/.test(e),u=e.length-(d?2:1);return`${e.slice(0,u)} style="${c}"${e.slice(u)}`}function ar(e,t){for(const{at:s,d:i}of e)t>s&&(t+=i);return t}function Kl(e){const t=e.split(":").map(Number);return t.length>=2&&t.every(Number.isFinite)?t:null}async function lS(e,t,s,i,n,o,a,c){const d=c.knobTouched?JSON.parse(c.cssChanged||"[]"):[];if(c.knobTouched&&(d.length!==1||d[0].selector!==s))return null;const u=c.isText&&c.originalText!=null&&c.newText!=null&&c.newText!==c.originalText;if(!c.knobTouched&&!u)return[];const p=`${e}/${t}`,f=await G.readFile(p).catch(()=>""),b=new TextEncoder,m=new TextDecoder;let y=b.encode(f);if(!f||n>y.length||y[i]!==60||y[n-1]!==62)return"stale";const g=(v,w,S)=>{const k=new Uint8Array(y.length-(w-v)+S.length);return k.set(y.subarray(0,v)),k.set(S,v),k.set(y.subarray(w),v+S.length),y=k,S.length-(w-v)},C=[];if(u&&c.originalText!=null&&c.newText!=null){const v=c.originalText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/&/g,"(?:&amp;|&)").replace(/</g,"(?:&lt;|<)").replace(/>/g,"(?:&gt;|>)"),w=m.decode(y.subarray(n,o??void 0)),S=new RegExp(v,"g");let k;for(;(k=S.exec(w))&&!(w.lastIndexOf("<",k.index)<=w.lastIndexOf(">",k.index));)S.lastIndex=k.index+1;if(!k)return null;const E=n+b.encode(w.slice(0,k.index)).length,T=b.encode(k[0]).length,_=c.newText.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");C.push({at:E,d:g(E,E+T,b.encode(_))})}if(c.knobTouched){const v=m.decode(y.subarray(i,n)),w=b.encode(aS(v,d[0].cssText));C.push({at:i,d:g(i,n,w)})}return a(),await G.writeFile(p,m.decode(y)),C}function qi(e,t){let s=0;const i=e;for(let o=0;o<i.length;o++)s=(s<<5)-s+i.charCodeAt(o)|0;return`${Math.abs(s).toString(36)}-${t}`}function cS(e,t){window.dispatchEvent(new CustomEvent("autosend-attachments",{detail:{label:e,attachments:[t]}}))}function gr(e,t,s,i){e&&(!i&&!s||t(e.id,s,i))}function dS(e,t,s,i,n,o){const{showToast:a}=bt(),[c,d]=l.useState(!1),[u,p]=l.useState(null),[f,b]=l.useState(""),[m,y]=l.useState(!1),[g,C]=l.useState(null),v=l.useRef(g);v.current=g;const w=l.useRef(m);w.current=m;const S=l.useCallback(D=>{D!==w.current&&(G.trackEvent(D?"edit_enter":"edit_exit",{}),w.current=D),y(D)},[]),k=l.useRef({projectPath:s,filePath:i});gd(!!g||!!u&&f.trim()!=="");const E=u?qi(u.selector,"comment"):null;l.useEffect(()=>{const D=Ve(e.current);!D||t===0||(c?D.executeJavaScriptUnchecked("window.__enterCommentMode && window.__enterCommentMode()"):(D.executeJavaScriptUnchecked("window.__exitCommentMode && window.__exitCommentMode()"),p(null)))},[c,t]);const T=l.useRef(null),_=l.useRef([]),R=l.useRef(0),$=l.useRef(null),M=l.useRef(null);l.useEffect(()=>{_.current=[],R.current=0,$.current=null,M.current=null},[t,s,i]);const L=l.useCallback(()=>{R.current++},[]),z=l.useCallback(()=>{if(M.current?.onExternalWrite(),R.current>0){R.current--;return}_.current=null},[]),J=l.useRef(!1),I=l.useRef([]),te=l.useRef(!1),ce=(D,O)=>{I.current.push(D),G.trackEvent("edit_persist",{via:"deferred",reason:O}),!te.current&&(te.current=!0,a("Queued for Claude — will apply on exit."))},ue=l.useRef(Promise.resolve()),me=l.useRef(Promise.resolve()),de=l.useCallback(async D=>{const O=Ve(e.current);if(!O)return;const{sel:P,knobTouched:B}=D;if(!B&&!P?.isText)return;const{projectPath:ne,filePath:se}=D.path;if(!(!ne||!se))try{const Oe=await Ul(O),Me=await O.executeJavaScript(`!!(window.Babel && document.querySelector('script[type="text/babel"]'))`).catch(()=>!1),Fe=await O.executeJavaScript(`(function(){var s=document.querySelectorAll('script:not([data-omelette-injected]):not([type="text/babel"]):not([type="text/jsx"])');for(var i=0;i<s.length;i++){var t=(s[i].type||'').toLowerCase();if(t&&t!=='module'&&!/javascript|ecmascript/.test(t))continue;var src=s[i].getAttribute('src');if(src){if(/^(https?:)?\\/\\//.test(src))continue;return true}if(s[i].textContent.trim())return true}return false})()`).catch(()=>!1),Pe={hasBabelScripts:!!Oe,isBabel:Me,hasGeneratorScript:Fe,isStaticSrc:P?.selector.startsWith("[data-src-loc=")??!1,isBody:P?.selector==="body",ledgerStale:_.current===null};let We=nS(Pe);e:for(let tt=0;tt<2;tt++)switch(We){case"jsx":{if(!Oe||!P)return;if(P.isText&&P.originalText!=null){const le=JSON.stringify(P.selector),q=await O.executeJavaScript(`(function(){var e=document.querySelector(${le});return e?(e.innerText||e.textContent):null})()`).catch(()=>null);if(q!=null&&q!==P.originalText){const we=await di(O,ne,se,Oe,P.selector,P.descriptor,"text",{newText:q,original:P.originalText},a);we.written&&(_.current=null,P.originalText=q),we.deferred&&we.reason&&ce(we.deferred,we.reason),we.written&&G.trackEvent("edit_persist",{via:"jsx",mode:"text"})}}const Ee=await O.executeJavaScript("window.__knobsGetAllChanged && window.__knobsGetAllChanged()").catch(()=>"[]"),Je=B?JSON.parse(Ee||"[]"):[];let Ie=!1;for(const{selector:le,cssText:q}of Je){const we=await di(O,ne,se,Oe,le,P.descriptor,"style",{cssText:q},a);we.written&&(Ie=!0),we.deferred&&we.reason&&ce(we.deferred,we.reason)}Ie&&(_.current=null),(Ie||Je.length>0)&&O.executeJavaScriptUnchecked("window.__knobsMarkWritten && window.__knobsMarkWritten()"),Ie&&G.trackEvent("edit_persist",{via:"jsx",mode:"style"});return}case"bail-babel":{_.current===null&&a("Reload the preview to continue direct edits.");return}case"srcmap":{if(!P||_.current===null){We=ui(Pe);continue e}const Ee=_.current,Je=JSON.stringify(P.selector),Ie=P.isText?"true":"false",le=await O.executeJavaScript(`(function(){var e=document.querySelector(${Je});if(!e)return null;var l=e.getAttribute('data-src-loc');if(!l)return null;var t=${Ie}?(e.innerText||e.textContent):null;return JSON.stringify({loc:l,text:t})})()`).catch(()=>null),{loc:q,text:we}=le?JSON.parse(le):{loc:null,text:null},ie=B?await O.executeJavaScript("window.__knobsGetAllChanged && window.__knobsGetAllChanged()").catch(()=>"[]"):"[]";if(P.omId&&!P.omId.startsWith("jsx:")){if($.current===null){const ze=await O.executeJavaScript("(function(){var e=document.getElementById('__om_srcmap');return e?e.textContent:null})()").catch(()=>null);try{const qe=ze?JSON.parse(ze):null;$.current={gen:qe?.gen??"",entries:new Map((qe?.entries??[]).map(Ke=>[Ke.id,Ke]))}}catch{$.current={gen:"",entries:new Map}}}M.current===null&&$.current.gen&&(M.current=await ea.open(`${ne}/${se}`,G,$.current));const Ge=M.current;if(Ge&&!Ge.isStale&&_.current!==null){const ze=[];P.isText&&P.originalText!=null&&we!=null&&we!==P.originalText&&ze.push({kind:"text",omId:P.omId,before:P.originalText,after:we});let qe=!1;if(B){const rt=JSON.parse(ie||"[]");rt.length===1&&rt[0].selector===P.selector&&(ze.push({kind:"style",omId:P.omId,cssText:rt[0].cssText}),qe=!0)}const Ke=B&&!qe,Xe=ze.map(rt=>Ge.canApply(rt)).find(rt=>rt!==null);if(ze.length>0&&!Xe&&!Ke){for(const yt of ze)Ge.apply(yt);L();let rt;try{rt=await Ge.reconcile()}catch(yt){throw R.current=Math.max(0,R.current-1),yt}if(rt!=="ok"&&(R.current=Math.max(0,R.current-1)),rt==="ok"){qe&&O.executeJavaScriptUnchecked("window.__knobsMarkWritten && window.__knobsMarkWritten()"),P.isText&&we!=null&&we!==P.originalText&&(P.originalText=we),G.trackEvent("edit_persist",{via:"ledger",mode:B?"style":"text"});return}if(rt==="stale"){_.current=null,We=ui(Pe);continue e}}}}if(q){const Ge=Kl(q);if(Ge&&_.current!==null){const ze=ar(Ee,Ge[0]),qe=ar(Ee,Ge[1]),Ke=Ge.length>2?ar(Ee,Ge[2]):null,Xe=await lS(ne,se,P.selector,ze,qe,Ke,L,{knobTouched:B,cssChanged:ie,isText:!!P.isText,originalText:P.originalText??null,newText:we});if(Xe==="stale")_.current=null;else if(Xe){if(Xe.length===0)return;Ee.push(...Xe),B&&O.executeJavaScriptUnchecked("window.__knobsMarkWritten && window.__knobsMarkWritten()"),P.isText&&we!=null&&we!==P.originalText&&(P.originalText=we),G.trackEvent("edit_persist",{via:"srcmap",mode:B?"style":"text"});return}}}We=ui(Pe);continue e}case"defer-gen":{if(!P)return;if(P.isText&&P.originalText!=null){const Ee=JSON.stringify(P.selector),Je=await O.executeJavaScript(`(function(){var e=document.querySelector(${Ee});return e?(e.innerText||e.textContent):null})()`).catch(()=>null);if(Je!=null&&Je!==P.originalText){const Ie=await G.readFile(`${ne}/${se}`).catch(()=>""),le=P.originalText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/&/g,"(?:&amp;|&)").replace(/</g,"(?:&lt;|<)").replace(/>/g,"(?:&gt;|>)"),q=P.originalText?(Ie.match(new RegExp(le,"g"))||[]).length:0,we=q>1?` This text appears ${q} times in the source; a <script> on this page regenerates the DOM on load, so update every occurrence (including inside script/template literals) or the edit reverts on reload.`:"";ce(`In ${se}: change the text from ${JSON.stringify(P.originalText)} to ${JSON.stringify(Je)}.${we}
${P.descriptor}`,"generator-script-text")}}if(B){const Ee=await O.executeJavaScript("window.__knobsGetAllChanged && window.__knobsGetAllChanged()").catch(()=>"[]"),Je=JSON.parse(Ee||"[]");for(const{selector:Ie,cssText:le}of Je){const q=Ie===P.selector?`
${P.descriptor}`:` at ${Ie}`;ce(`In ${se}: set the inline style to \`${le}\`.${q}`,"generator-script-style")}Je.length>0&&O.executeJavaScriptUnchecked("window.__knobsMarkWritten && window.__knobsMarkWritten()")}return}case"serialize":{if(P?.isText&&P.originalText!=null&&!B){const Je=JSON.stringify(P.selector);if(await O.executeJavaScript(`(function(){var e=document.querySelector(${Je});return e?(e.innerText||e.textContent):null})()`).catch(()=>null)===P.originalText)return}const Ee=await O.executeJavaScript('(function(){var el=window.__textEditCurrentElement;if(el){el.removeAttribute("contenteditable");el.style.outline="";el.style.outlineOffset="";}var h=window.__serializeDocument&&window.__serializeDocument();if(el){el.contentEditable="true";el.style.outline="2px solid #8B5CF6";el.style.outlineOffset="2px";}return h;})()');if(!Ee)return;L(),await G.writeFile(`${ne}/${se}`,Ee),_.current=null,G.trackEvent("edit_persist",{via:"serialize"});return}default:{const Ee=We;return}}return}catch{}finally{D.knobTouched&&(J.current=!1)}},[e,a]),De=l.useCallback(async D=>{const O=D??{path:k.current,knobTouched:J.current,sel:v.current};T.current&&(clearTimeout(T.current),T.current=null);const P=ue.current;ue.current=(async()=>{await P.catch(()=>{}),await de(O)})(),await ue.current},[de]),Re=l.useCallback(()=>{J.current=!0;const D={path:k.current,knobTouched:!0,sel:v.current};T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{T.current=null;const O=ue.current;ue.current=(async()=>{await O.catch(()=>{}),await de(D)})()},400)},[de]);l.useEffect(()=>(k.current={projectPath:s,filePath:i},C(null),J.current=!1,I.current=[],te.current=!1,()=>{De();const D=Ve(e.current),O=I.current;D&&O.length>0&&(Wl(D,O),_.current=null)}),[s,i,De]);const je=l.useCallback(async()=>{const D=Ve(e.current);if(!D)return;const O=v.current;D.executeJavaScriptUnchecked("window.__textEditFinish && window.__textEditFinish()"),(T.current||O?.isText)&&await De(),C(P=>P===O?null:P)},[e,De]),H=l.useCallback(async()=>{const D=Ve(e.current);if(!D)return;T.current&&(clearTimeout(T.current),T.current=null);const O=v.current;if(O?.isText&&O.originalInnerHTML!=null){const P=JSON.stringify(O.originalInnerHTML);await D.executeJavaScript(`window.__textEditRevert && window.__textEditRevert(${P})`).catch(()=>{})}else D.executeJavaScriptUnchecked("window.__textEditFinish && window.__textEditFinish()");D.executeJavaScriptUnchecked("window.__knobsRestoreState && window.__knobsRestoreState()"),C(P=>P===O?null:P)},[e]),ke=l.useCallback(async()=>{const D=Ve(e.current),O=v.current;if(!D||!O||O.selector==="body"||O.selector==="html"||O.selector==="head")return;await De();const P=async()=>{const{projectPath:ne,filePath:se}=k.current,Oe=JSON.stringify(O.selector),Me=()=>D.executeJavaScriptUnchecked(`(function(){var e=document.querySelector(${Oe});if(e)e.remove();document.querySelectorAll('[data-designer-overlay]').forEach(function(o){o.style.display='none'})})()`),Fe=(Ee,Je)=>{Me(),ce(`In ${se}: delete the element described below${Je?` (${Je})`:""}.
${O.descriptor}`,Ee),C(Ie=>Ie===O?null:Ie)},Pe=await Ul(D),We=O.selector.startsWith("[data-src-loc=");if(!Pe||We){const Ee=await D.executeJavaScript(`(function(){var e=document.querySelector(${Oe});return e&&e.getAttribute('data-src-loc')})()`).catch(()=>null),Je=Ee?Kl(Ee):null;if(!Je)return Fe("no-src-loc");let Ie=null;if(Je.length<3){const Ke=await D.executeJavaScript(`(function(){var e=document.querySelector(${Oe});if(!e)return null;return JSON.stringify({tag:e.tagName,kids:e.children.length,text:(e.textContent||'').length})})()`).catch(()=>null),Xe=Ke?JSON.parse(Ke):null;if(!Xe||Xe.kids>0||Xe.text>0)return Fe("implied-close-nonempty","source close tag is missing or mismatched");Je.push(Je[1]),Ie=Xe.tag}const le=_.current;if(le===null)return a("Reload the preview to continue direct edits."),Fe("ledger-stale");const q=ar(le,Je[0]);let we=ar(le,Je[2]);const ie=`${ne}/${se}`,Ge=await G.readFile(ie).catch(()=>""),ze=new TextEncoder().encode(Ge);if(Ie){const Ke=new TextDecoder().decode(ze.subarray(we,Math.min(ze.length,we+Ie.length+16))),Xe=new RegExp(`^\\s*</${Ie}\\s*>`,"i").exec(Ke);Xe&&(we+=Xe[0].length)}if(!Ge||we>ze.length||ze[q]!==60)return _.current=null,Fe("srcmap-offset-invalid");const qe=new Uint8Array(ze.length-(we-q));qe.set(ze.subarray(0,q)),qe.set(ze.subarray(we),q),L(),await G.writeFile(ie,new TextDecoder().decode(qe)),le.push({at:q,d:-(we-q)}),G.trackEvent("edit_persist",{via:"srcmap",mode:"delete"}),Me(),C(Ke=>Ke===O?null:Ke);return}const tt=await di(D,ne,se,Pe,O.selector,O.descriptor,"delete",{},a);tt.written&&(_.current=null,G.trackEvent("edit_persist",{via:"jsx",mode:"delete"}),Me()),tt.deferred&&tt.reason&&ce(tt.deferred,tt.reason),C(Ee=>Ee===O?null:Ee)},B=ue.current;ue.current=(async()=>{await B.catch(()=>{}),await P()})(),await ue.current},[e,a,De]),X=l.useRef(je);X.current=je,l.useEffect(()=>{const D=Ve(e.current);!D||t===0||(m?D.executeJavaScriptUnchecked("window.__enterEditMode && window.__enterEditMode()"):X.current().catch(()=>{}).finally(()=>{w.current||(D.executeJavaScriptUnchecked("window.__exitEditMode && window.__exitEditMode()"),I.current.length>0&&(_.current=null),Wl(D,I.current),I.current=[],te.current=!1)}))},[m,t]),l.useEffect(()=>{if(!E||!u||!n)return;if(!f.trim()){gr(n,o,null,E);const P=Ve(e.current);if(P){const B=JSON.stringify(u.selector);P.executeJavaScriptUnchecked(`window.__removeCommentHighlight && window.__removeCommentHighlight(${B})`)}return}const D={id:E,name:f.trim(),type:"comment",content:`File: ${i}
Element: ${u.descriptor||u.selector}
Feedback: ${f.trim()}`};gr(n,o,D);const O=Ve(e.current);if(O){const P=JSON.stringify(u.selector);O.executeJavaScriptUnchecked(`window.__addCommentHighlight && window.__addCommentHighlight(${P})`)}},[f,E,u?.selector,i]);const Se=l.useCallback(()=>{p(null),b("")},[]),oe=l.useCallback(()=>{if(!E||!u||!n||!f.trim())return;const D={id:E,name:f.trim(),type:"comment",content:`File: ${i}
Element: ${u.descriptor||u.selector}
Feedback: ${f.trim()}`};gr(n,o,null,E),cS("Apply comment",D);const O=Ve(e.current);if(O){const P=JSON.stringify(u.selector);O.executeJavaScriptUnchecked(`window.__removeCommentHighlight && window.__removeCommentHighlight(${P})`)}p(null),b("")},[E,u,f,n,o,i]),he=l.useCallback(()=>{if(E&&gr(n,o,null,E),u){const D=Ve(e.current);if(D){const O=JSON.stringify(u.selector);D.executeJavaScriptUnchecked(`window.__removeCommentHighlight && window.__removeCommentHighlight(${O})`)}}p(null),b("")},[E,u,n,o]),pe=l.useCallback(()=>{},[]),Le=l.useCallback(D=>{D==="submit"&&X.current()},[]),re=l.useCallback(D=>{G.trackEvent("edit_select",{mode:D.isText?"text":"element"});const O=me.current;me.current=(async()=>{await O.catch(()=>{}),(T.current||v.current?.isText)&&await De(),C(D)})()},[De]),U=l.useCallback(D=>{p(D);const O=qi(D.selector,"comment"),B=(n?.composer?.attachments||[]).find(ne=>ne.id===O);if(B&&B.type==="comment"){const ne=B.content?.match(/Feedback: ([\s\S]+)$/);b(ne?ne[1]:B.name)}else b("")},[n]);return{commentMode:c,setCommentMode:d,pendingComment:u,commentText:f,setCommentText:b,editMode:m,setEditMode:S,pendingSelection:g,scheduleWrite:Re,finalizeSelection:je,cancelSelection:H,deleteSelection:ke,invalidateSrcDeltas:z,handleCommentClose:Se,handleCommentSend:oe,handleCancelComment:he,lifecycleCallbacks:{onDomReady:pe,onEditAction:Le,onSelectionChanged:re,onCommentSelected:U}}}const uS=600,fi=(e,t)=>`editmode-off:${e}:${t}`;function pS(e,t,s,i,n){const[o,a]=l.useState(!1),[c,d]=l.useState(!1),[u,p]=l.useState(0),[f,b]=l.useState(!1),m=l.useRef({}),y=l.useRef(null),g=l.useRef(0),C=l.useRef(Promise.resolve()),v=l.useRef({projectPath:s,filePath:i}),w=l.useCallback(()=>{y.current=null;const _=C.current;return C.current=(async()=>{await _.catch(()=>{});const R=m.current;if(Object.keys(R).length===0)return;m.current={};const{projectPath:$,filePath:M}=v.current;if(!$||!M)return;const L=++g.current;b(!0);try{const z=`${$}/${M}`,J=await G.readFile(z),I=Uf(J,R);await G.writeFile(z,I),jh(M,R),G.trackEvent("tweaks_persist",{})}catch{}finally{g.current===L&&b(!1)}})(),C.current},[]),S=l.useRef(n);S.current=n;const k=l.useCallback(_=>{G.trackEvent("tweaks_toggle",{mode:_?"on":"off"});const{projectPath:R,filePath:$}=v.current;try{_?localStorage.removeItem(fi(R,$)):localStorage.setItem(fi(R,$),"1")}catch{}a(_)},[]),E=l.useCallback(()=>{if(d(!0),p(M=>M+1),S.current)return;const{projectPath:_,filePath:R}=v.current;let $=!1;try{$=localStorage.getItem(fi(_,R))==="1"}catch{}$||a(!0)},[]),T=l.useCallback(_=>{m.current={...m.current,..._},y.current&&clearTimeout(y.current),y.current=setTimeout(w,uS)},[w]);return l.useEffect(()=>(v.current={projectPath:s,filePath:i},d(!1),a(!1),()=>{y.current&&(clearTimeout(y.current),y.current=null),w()}),[s,i,w]),l.useEffect(()=>{n&&a(!1)},[n]),l.useEffect(()=>{const _=Ve(e.current);if(!_||!t||!c)return;const R=o?"__activate_edit_mode":"__deactivate_edit_mode";_.executeJavaScriptUnchecked(`window.postMessage({type: ${JSON.stringify(R)}}, '*')`)},[o,t,c,u]),{active:o,setActive:k,available:c,saving:f,lifecycleCallbacks:{onEditModeAvailable:E,onEditModeSetKeys:T,onEditModeDismissed:()=>a(!1)}}}function fS(e,t){const s=l.useRef(0),i=l.useRef(0),n=l.useRef(!1),[o,a]=l.useState(!1),c=l.useRef(t);l.useEffect(()=>{(t||c.current)&&(s.current=Date.now()),c.current=t},[t]),l.useEffect(()=>{const p=e.current;if(!p)return;const f=()=>{n.current=!0,i.current=Date.now()},b=()=>{n.current=!1};return p.addEventListener("mouseenter",f),p.addEventListener("mouseleave",b),()=>{p.removeEventListener("mouseenter",f),p.removeEventListener("mouseleave",b)}},[e.current]),l.useEffect(()=>{const p=()=>{document.activeElement===e.current&&a(!0)},f=()=>a(!1);return window.addEventListener("blur",p),window.addEventListener("focus",f),()=>{window.removeEventListener("blur",p),window.removeEventListener("focus",f)}},[e]);const d=l.useRef(t);return d.current=t,{isMidInteraction:l.useCallback(()=>{const p=Date.now();return!!(d.current||p-s.current<1e3||n.current&&p-i.current>1e3||o)},[o])}}const hS=`(function(){
  if (!window.__omeletteSlideBridge) {
    window.__omeletteSlideBridge = true;
    var P = window.parent;
    function out(n) { try { P.postMessage({__omelette_slide_idx: n}, '*'); } catch(e){} }
    window.addEventListener('message', function(e){
      var d = e.data;
      if (d && typeof d.slideIndexChanged === 'number') {
        window.__omeletteSlideIdx = d.slideIndexChanged;
        out(d.slideIndexChanged);
      }
    });
  }
  var el = document.getElementById('speaker-notes');
  var raw = el ? el.textContent : null;
  var idx = typeof window.__omeletteSlideIdx === 'number' ? window.__omeletteSlideIdx : null;
  return JSON.stringify({ raw: raw, idx: idx });
})()`;function gS(e,t){const s=/(<script\b[^>]*\bid\s*=\s*["']speaker-notes["'][^>]*>)([\s\S]*?)(<\/script>)/i,i=e.match(s);if(!i)return null;const n=`
`+JSON.stringify(t,null,2).replace(/</g,"\\u003c")+`
`;return e.slice(0,i.index)+i[1]+n+i[3]+e.slice(i.index+i[0].length)}function mS(e,t,s,i){const[n,o]=l.useState(null),[a,c]=l.useState(0),[d,u]=l.useState(null),[p,f]=l.useState(!1),b=l.useRef(i);b.current=i;const m=E=>{c(E),window.dispatchEvent(new CustomEvent("deck-slide-change",{detail:{filePath:b.current,slideIndex:E}}))},y=l.useRef(m);y.current=m,l.useEffect(()=>{const E=T=>{if(T.source!==e.current?.contentWindow)return;const _=T.data?.__omelette_slide_idx;typeof _=="number"&&y.current(_)};return window.addEventListener("message",E),()=>window.removeEventListener("message",E)},[t,e]),l.useEffect(()=>{if(t===0){o(null),u(null),c(0);return}c(0);const E=Ve(e.current);if(!E)return;let T=!1;return E.executeJavaScript(hS).then(_=>{if(T)return;let R=null,$=null;try{const{raw:M,idx:L}=JSON.parse(_);if($=L,M){const z=JSON.parse(M);Array.isArray(z)&&z.every(J=>typeof J=="string")&&(R=z)}}catch{}o(R),u(R?[...R]:null),typeof $=="number"&&y.current($)}).catch(()=>{T||(o(null),u(null))}),()=>{T=!0}},[t,e]);const g=l.useCallback((E,T)=>{u(_=>{if(!_)return _;const R=[..._];for(;R.length<=E;)R.push("");return R[E]=T,R})},[]),C=l.useRef(n);C.current=n;const v=l.useRef(d);v.current=d;const w=!!d&&!!n&&(d.length!==n.length||d.some((E,T)=>E!==n[T])),S=l.useCallback(async()=>{const E=v.current;if(E){f(!0);try{const T=`${s}/${i}`,_=await G.readFile(T),R=gS(_,E);if(R===null)return;await G.writeFile(T,R),await G.flush(),o([...E])}catch{}finally{f(!1)}}},[s,i]),k=l.useCallback(E=>{const T=Ve(e.current);if(!T)return;const _=JSON.stringify({key:E,code:E,keyCode:E==="ArrowLeft"?37:39,bubbles:!0,cancelable:!0});T.executeJavaScript(`document.dispatchEvent(new KeyboardEvent('keydown',${_}))`).catch(()=>{})},[e]);return{notes:n,draft:d,slideIndex:a,dirty:w,saving:p,updateNote:g,save:S,sendKey:k}}const xS=400,bS=x.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
`,yS=x.div`
  width: 1px;
  height: 16px;
  background: rgba(15, 12, 8, 0.08);
  margin: 0 4px;
`,Xl=x.button`
  height: 26px;
  padding: 0 6px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #666461;
  cursor: default;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s;
  &:hover:not(:disabled) {
    background: ${h.bg.hover};
  }
  &:active:not(:disabled) {
    background: rgba(15, 12, 8, 0.06);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,wS=x.div`
  position: absolute;
  top: 100%;
  margin-top: 4px;
  ${e=>e.$anchor==="undo"?"left: 0;":"right: -60px;"}
  width: 260px;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 10px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.12),
    0 0 0 0.5px rgba(0, 0, 0, 0.04);
  z-index: 200;
`,vS=x.div`
  padding: 8px 12px 6px;
  border-bottom: 1px solid rgba(15, 12, 8, 0.06);
  font-size: 11px;
  font-weight: 600;
  color: ${h.text.secondary};
  display: flex;
  align-items: center;
  gap: 6px;
`,kS=x.div`
  max-height: 240px;
  overflow-y: auto;
  padding: 4px 0;
`,ql=x.button`
  width: 100%;
  padding: 7px 12px;
  border: none;
  background: ${e=>e.$current?"rgba(217, 119, 87, 0.06)":"transparent"};
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  cursor: ${e=>e.$current?"default":"pointer"};
  font-family: inherit;
  &:hover {
    background: ${e=>e.$current?"rgba(217, 119, 87, 0.06)":h.bg.hover};
  }
`,Vl=x.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: ${e=>e.$current?600:430};
  color: ${e=>e.$current?h.accent.primary:e.$future?h.text.tertiary:h.text.primary};
`,SS=x.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${h.accent.primary};
`,CS=x.div`
  position: fixed;
  inset: 0;
  z-index: 150;
`;function _S(){return r.jsxs("svg",{width:13,height:13,viewBox:"0 0 16 16",fill:"none",style:{display:"block"},children:[r.jsx("path",{d:"M3.5 5.5h6a3.5 3.5 0 0 1 0 7H7",stroke:"currentColor",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("polyline",{points:"6,3 3.5,5.5 6,8",stroke:"currentColor",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})]})}function $S(){return r.jsxs("svg",{width:13,height:13,viewBox:"0 0 16 16",fill:"none",style:{display:"block"},children:[r.jsx("path",{d:"M12.5 5.5h-6a3.5 3.5 0 0 0 0 7H9",stroke:"currentColor",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("polyline",{points:"10,3 12.5,5.5 10,8",stroke:"currentColor",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})]})}function ES(){return r.jsxs("svg",{width:12,height:12,viewBox:"0 0 16 16",fill:"none",children:[r.jsx("circle",{cx:8,cy:8,r:6.5,stroke:"currentColor",strokeWidth:1.5}),r.jsx("polyline",{points:"8,4.5 8,8 10.5,9.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]})}function Yl(e,t,s){const i=l.useRef(null),n=l.useRef(!1),o=()=>{s&&(n.current=!1,i.current=setTimeout(()=>{n.current=!0,t()},xS))},a=()=>{i.current&&clearTimeout(i.current),i.current=null};return{onMouseDown:o,onMouseUp:a,onMouseLeave:a,onClick:()=>{if(n.current){n.current=!1;return}e()}}}function TS({projectPath:e}){const{enabled:t,canUndo:s,canRedo:i,isRestoring:n,hasPending:o,depth:a,undo:c,redo:d}=Pd(e),[u,p]=l.useState(null),f=n||o,b=Yl(()=>{G.trackEvent("turn_undo",{depth:a}),c()},()=>p("undo"),s&&!f),m=Yl(()=>{G.trackEvent("turn_redo",{depth:a}),d()},()=>p("redo"),i&&!f);if(!t)return null;const y=u?Wf(e):[];return r.jsxs(r.Fragment,{children:[r.jsx(yS,{}),r.jsxs(bS,{children:[r.jsx(Xl,{disabled:!s||f,title:"Undo",...b,children:r.jsx(_S,{})}),r.jsx(Xl,{disabled:!i||f,title:"Redo",...m,children:r.jsx($S,{})}),u&&r.jsxs(r.Fragment,{children:[r.jsx(CS,{onClick:()=>p(null)}),r.jsxs(wS,{$anchor:u,children:[r.jsxs(vS,{children:[r.jsx(ES,{}),"Session History"]}),r.jsxs(kS,{children:[y.map((g,C)=>r.jsxs(ql,{$current:g.isCurrent,$future:g.offset>0,disabled:g.isCurrent,onClick:()=>{g.isCurrent||(G.trackEvent("turn_history_jump",{offset:g.offset}),p(null),Gf(e,g.offset))},children:[r.jsx(Vl,{$current:g.isCurrent,$future:g.offset>0,children:g.title}),g.isCurrent&&r.jsx(SS,{})]},C)),a===0&&r.jsx(ql,{$current:!1,$future:!1,disabled:!0,children:r.jsx(Vl,{$current:!1,$future:!0,children:"No history yet"})})]})]})]})]})]})}const jS=x.div`
  flex: 1;
  min-height: 0;
  border-top: 1px solid ${h.border.default};
  background: ${h.bg.surface};
  display: flex;
  flex-direction: column;
`,RS=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 10px;
  flex-shrink: 0;
  border-bottom: 1px solid ${h.border.subtle};
  font-size: 11px;
  font-weight: 600;
  color: ${h.text.tertiary};
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,AS=x.div`
  width: 48px;
  display: flex;
  justify-content: flex-end;
`,DS=x.textarea`
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.6;
  font-family: inherit;
  background: ${h.bg.surface};
  color: ${h.text.primary};
`;function MS({slideIndex:e,total:t,note:s,dirty:i,saving:n,onChange:o,onSave:a}){return Nt(n),r.jsxs(jS,{children:[r.jsxs(RS,{children:[r.jsx("span",{children:"Speaker notes"}),r.jsxs("span",{style:{fontWeight:400,textTransform:"none",letterSpacing:0,fontVariantNumeric:"tabular-nums"},children:["Slide ",e+1," / ",t]}),r.jsx("div",{style:{flex:1}}),r.jsx(AS,{children:i&&r.jsx(fe,{size:"xs",variant:"primary",onClick:a,loading:n,children:"Save"})})]}),r.jsx(DS,{value:s,onChange:c=>o(c.target.value),placeholder:"No notes for this slide."})]})}const LS=`<!doctype html><meta charset=utf-8><title>Speaker notes</title>
<style>
  html,body{margin:0;height:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#1a1a1a;color:#e8e8e8}
  body{display:flex;flex-direction:column}
  header{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid #333;flex-shrink:0}
  #pos{font-size:13px;font-weight:600;color:#999;font-variant-numeric:tabular-nums}
  .sp{flex:1}
  button{font:inherit;font-size:12px;padding:5px 12px;border-radius:5px;border:1px solid #444;background:#2a2a2a;color:#e8e8e8;cursor:pointer}
  button:hover{background:#333}
  button:active{background:#3a3a3a}
  button.primary{background:#D97757;border-color:#D97757;color:#fff}
  button.primary:hover{background:#c8664a}
  button:disabled{opacity:.4;cursor:default}
  #note{flex:1;border:none;outline:none;resize:none;padding:16px 18px;font:inherit;font-size:16px;line-height:1.7;background:#1a1a1a;color:#e8e8e8;overflow-y:auto}
  #note[readonly]{cursor:default;caret-color:transparent}
  #note::placeholder{color:#555}
</style>
<header>
  <span id=pos>– / –</span>
  <div class=sp></div>
  <button id=save class=primary style="display:none">Save</button>
  <button id=edit>Edit</button>
  <button id=prev>&larr; Prev</button>
  <button id=next>Next &rarr;</button>
</header>
<textarea id=note readonly placeholder="No notes for this slide."></textarea>
<script>
(function(){
  var op = window.opener;
  if (!op) { document.body.textContent = 'Lost connection to presenter.'; return; }
  var post = function(m){ try { op.postMessage(Object.assign({__sn:1}, m), '*'); } catch(_){} };

  var note = document.getElementById('note');
  var pos  = document.getElementById('pos');
  var save = document.getElementById('save');
  var edit = document.getElementById('edit');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  var editing   = false;
  var lastIndex = -1;

  function setEditing(on){
    editing = on;
    note.readOnly = !on;
    edit.textContent = on ? 'Done' : 'Edit';
    if (on) { note.focus(); } else { note.blur(); note.scrollTop = 0; }
  }

  prev.onclick = function(){ post({t:'nav', dir:'prev'}); };
  next.onclick = function(){ post({t:'nav', dir:'next'}); };
  save.onclick = function(){ post({t:'save'}); };
  edit.onclick = function(){ setEditing(!editing); };
  note.oninput = function(){ if (editing) post({t:'edit', text: note.value}); };
  note.onmousedown = function(e){ if (!editing) e.preventDefault(); }; // block caret/selection in view mode

  window.addEventListener('keydown', function(e){
    if (editing) {
      if (e.key === 'Escape') { e.preventDefault(); setEditing(false); }
      return; // textarea owns the rest
    }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); post({t:'nav', dir:'prev'}); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); post({t:'nav', dir:'next'}); return; }
    if (e.key === 'ArrowUp')    { e.preventDefault(); note.scrollTop -= 40; return; }
    if (e.key === 'ArrowDown')  { e.preventDefault(); note.scrollTop += 40; return; }
    if (e.key === 'Escape')     { e.preventDefault(); post({t:'esc'}); }
  });

  window.addEventListener('message', function(e){
    var d = e.data;
    if (!d || d.__sn !== 2) return;
    pos.textContent = (d.index + 1) + ' / ' + d.total;
    var slideChanged = d.index !== lastIndex;
    lastIndex = d.index;
    // Skip same-slide echoes while editing (every keystroke round-trips via
    // oninput -> app -> push back; overwriting loses chars typed mid-flight).
    // Slide changes MUST update even while editing — Prev/Next don't exit
    // edit mode, and typing after a skipped update would write this slide's
    // stale text to the new slide via oninput -> updateNote(newIndex, ...).
    if ((slideChanged || !editing) && note.value !== d.note) {
      note.value = d.note;
      note.scrollTop = 0;
    }
    save.style.display = d.dirty ? '' : 'none';
    save.disabled = !!d.saving;
    save.textContent = d.saving ? 'Saving…' : 'Save';
  });

  window.addEventListener('beforeunload', function(){ post({t:'closed'}); });
  post({t:'ready'});
})();
<\/script>`;function PS(){const e=window.open("","omelette_speaker_notes","width=520,height=420");if(!e)return null;try{e.document.open(),e.document.write(LS),e.document.close()}catch{}return e}function OS(e){const{win:t}=e,s=l.useRef(e);s.current=e;const i=l.useRef(e);i.current=e;const n=()=>{if(t.closed)return;const o=i.current;t.postMessage({__sn:2,index:o.slideIndex,total:o.total,note:o.note,dirty:o.dirty,saving:o.saving},"*")};return Ye("message",o=>{if(o.source!==t)return;const a=o.data;if(!a||a.__sn!==1)return;const c=s.current;switch(a.t){case"ready":n();break;case"nav":c.onNav(a.dir);break;case"edit":c.onEdit(a.text);break;case"save":c.onSave();break;case"esc":c.onEsc();break;case"closed":c.onClose();break}}),l.useEffect(n,[t,e.slideIndex,e.total,e.note,e.dirty,e.saving]),null}function Qt(e,t){return`dm-${e}-${t}`}function Qr(e,t,s,i,n){const o=Qt(t,"style"),a=e.findIndex(c=>c.id===o);if(a>=0&&e[a].kind==="style"){const c=e[a],d={...c.changes};for(const[p,f]of Object.entries(n))d[p]?(d[p]={before:d[p].before,after:f.after},d[p].before===d[p].after&&delete d[p]):d[p]=f;const u=[...e];return Object.keys(d).length===0?u.splice(a,1):u[a]={...c,changes:d},u}return[...e,{id:o,kind:"style",elementRef:t,descriptor:s,tag:i,changes:n}]}function dn(e,t){const s=e.findIndex(i=>i.id===t.id);if(s>=0){const i=[...e];return i[s]=t,i}return[...e,t]}function hi(e,t){return{toOverlay:s=>({x:s.x*e+t.x,y:s.y*e+t.y,width:s.width*e,height:s.height*e}),toWebview:(s,i)=>({x:(s-t.x)/e,y:(i-t.y)/e})}}const Uu=l.createContext(null);function FS({children:e}){const[t,s]=l.useState(!1),[i,n]=l.useState(null),[o,a]=l.useState([]),[c,d]=l.useState(0),[u,p]=l.useState(null),[f,b]=l.useState(null),[m,y]=l.useState([]),[g,C]=l.useState([]),[v,w]=l.useState(null),[S,k]=l.useState(null),[E,T]=l.useState([]),_=l.useRef(null),[R,$]=l.useState(null),[M,L]=l.useState(!1),[z,J]=l.useState(!1),I=l.useRef(null),te=l.useRef(null),[ce,ue]=l.useState(0),me=l.useMemo(()=>{const V=I.current;return hi(V?.zoom??1,V?.offset??{x:0,y:0})},[ce]),de=l.useMemo(()=>o.map(V=>me.toOverlay(V)),[o,me]),De=l.useMemo(()=>u?me.toOverlay(u):null,[u,me]),Re=l.useMemo(()=>g.map(V=>me.toOverlay(V)),[g,me]),je=l.useRef(i);je.current=i;const H=l.useCallback(V=>{const ae=I.current;return ae?ae.exec(V).catch(()=>null):Promise.resolve(null)},[]);l.useEffect(()=>{const V=()=>{p(null),b(null),ue(ge=>ge+1);const ae=I.current;ae&&ae.exec("window.__DM && window.__DM.reemitRects && window.__DM.reemitRects()").catch(()=>null)};return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]);const ke=l.useCallback(V=>{I.current=V,ue(ae=>ae+1),V||(s(!1),n(null),a([]),d(0),p(null),w(null),k(null),C([]))},[]),X=l.useCallback(V=>{switch(V.type){case"selection":n(V.info),a(V.allRects||[]),d(V.count??(V.info?1:0)),y(V.similarSelectors||[]),C([]);break;case"rect":a(V.rects||[]);break;case"hover":p(V.rect),b(V.tag);break;case"outline":w(V.root);break;case"insertHover":k(V.data);break;case"similarRects":C(V.rects);break}},[]),Se=l.useCallback(async()=>{const V=await H("window.__DM && window.__DM.snapshot()");return typeof V=="string"?V:null},[H]),oe=l.useCallback(V=>{V&&G.trackEvent("design_mode_enter",{}),s(V),V?(H("window.__DM && window.__DM.outline()"),_.current==null&&Se().then(ae=>{_.current=ae})):(n(null),a([]),d(0),p(null),k(null),C([]),J(!1),$(null),L(!1),H("window.__DM && window.__DM.deselect()"))},[H,Se]),he=l.useCallback((V,ae,ge,Be)=>{const Ae=I.current;if(!Ae)return;const{x:nt,y:Ze}=hi(Ae.zoom,Ae.offset).toWebview(V,ae);H(`window.__DM && window.__DM.pick(${nt}, ${Ze}, ${ge}, ${!!Be})`),ge&&setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),pe=l.useCallback((V,ae)=>{H(`window.__DM && window.__DM.select(${V}, ${!!ae})`),setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),Le=l.useCallback(V=>{H(`window.__DM && window.__DM.hoverRef(${V??"null"})`)},[H]),re=l.useCallback(()=>{H("window.__DM && window.__DM.deselect()")},[H]),U=l.useCallback(V=>{H(`window.__DM && window.__DM.nav(${JSON.stringify(V)})`),setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),D=l.useCallback((V,ae)=>{const ge=je.current;ge&&H(`window.__DM && window.__DM.setStyle(${JSON.stringify(V)}, ${JSON.stringify(ae)})`).then(Be=>{if(!Be)return;const Ae=JSON.parse(Be);Ae&&(T(nt=>Qr(nt,ge.ref,ge.descriptor,ge.tag,{[V]:Ae})),H("window.__DM && window.__DM.ping()"))})},[H]),O=l.useCallback((V,ae)=>{const ge=je.current;ge&&H(`window.__DM && window.__DM.setAttr(${JSON.stringify(V)}, ${JSON.stringify(ae)})`).then(Be=>{if(!Be)return;const Ae=JSON.parse(Be);if(!Ae)return;const nt=`attr:${ge.ref}:${V}`;T(Ze=>{const st=Ze.find(Rt=>Rt.id===nt),ht=st&&st.kind==="attr"?st.before:Ae.before;return ht===Ae.after?Ze.filter(Rt=>Rt.id!==nt):dn(Ze,{id:nt,kind:"attr",elementRef:ge.ref,descriptor:ge.descriptor,tag:ge.tag,attr:V,before:ht,after:Ae.after})})})},[H]),P=l.useCallback(V=>{const ae=je.current;ae&&H(`window.__DM && window.__DM.setStyles(${JSON.stringify(JSON.stringify(V))})`).then(ge=>{if(!ge)return;const Be=JSON.parse(ge);Be&&(T(Ae=>Qr(Ae,ae.ref,ae.descriptor,ae.tag,Be)),H("window.__DM && window.__DM.ping()"))})},[H]),B=l.useCallback(()=>{const V=je.current;V&&H(`window.__DM && window.__DM.dragBegin(${V.ref})`)},[H]),ne=l.useCallback(V=>{const ae=je.current;ae&&H(`window.__DM && window.__DM.dragApply(${ae.ref}, ${JSON.stringify(JSON.stringify(V))})`)},[H]),se=l.useCallback(async(V,ae)=>{const ge=je.current;if(!ge)return null;const Be=await H(`window.__DM && window.__DM.moveInline(${ge.ref}, ${V}, ${ae})`);return Be?JSON.parse(Be):null},[H]),Oe=l.useCallback(V=>{H(`window.__DM && window.__DM.dragHideSource(${V})`)},[H]),Me=l.useCallback(()=>{H("window.__DM && window.__DM.dragEnd()").then(V=>{if(!V)return;const ae=JSON.parse(V);ae&&T(ge=>{let Be=ge;if(ae.changes&&Object.keys(ae.changes).length>0&&(Be=Qr(Be,ae.ref,ae.descriptor,ae.tag,ae.changes)),ae.moved){const Ae=ae.moved,nt=Ae.sameParent?`reordered in ${Ae.toParent}: index ${Ae.fromIndex} → ${Ae.toIndex}`:`reparented: from ${Ae.fromParent} (index ${Ae.fromIndex}) → into ${Ae.toParent} at index ${Ae.toIndex}`;Ae.sameParent||(Be=Be.filter(Ze=>Ze.id!==Qt(ae.ref,"move"))),Be=dn(Be,{id:Qt(ae.ref,Ae.sameParent?"move":"reparent"),kind:"move",elementRef:ae.ref,descriptor:ae.descriptor,tag:ae.tag,position:"static",detail:nt})}return Be})})},[H]),Fe=l.useCallback(()=>{H("window.__DM && window.__DM.dragCancel()")},[H]),Pe=l.useCallback((V,ae)=>{const ge=I.current;if(!ge)return;const{x:Be,y:Ae}=hi(ge.zoom,ge.offset).toWebview(V,ae);H(`window.__DM && window.__DM.insertHover(${Be}, ${Ae})`)},[H]),We=l.useCallback(()=>k(null),[]),tt=l.useCallback(V=>{G.trackEvent("design_mode_insert",{kind:V}),H(`window.__DM && window.__DM.insertSibling(${JSON.stringify(V)})`).then(ae=>{if(!ae)return;const ge=JSON.parse(ae);ge&&(T(Be=>dn(Be,{id:Qt(ge.ref,"insert"),kind:"insert",elementRef:ge.ref,descriptor:ge.descriptor,tag:ge.tag,insertKind:V,placement:ge.placement,initialStyle:ge.initialStyle})),H("window.__DM && window.__DM.outline()"))})},[H]),Ee=l.useCallback(()=>{G.trackEvent("design_mode_group",{}),H("window.__DM && window.__DM.group()").then(V=>{if(!V)return;const ae=JSON.parse(V);ae&&(T(ge=>dn(ge,{id:Qt(ae.ref,"group"),kind:"group",elementRef:ae.ref,descriptor:ae.descriptor,tag:"div",childDescriptor:ae.childDescriptor})),H("window.__DM && window.__DM.outline()"))})},[H]),Je=l.useCallback(V=>{H(`window.__DM && window.__DM.setPositionMode(${JSON.stringify(V)})`).then(ae=>{if(!ae)return;const ge=JSON.parse(ae);if(!ge)return;const Be=je.current;Be&&T(Ae=>Qr(Ae,Be.ref,Be.descriptor,Be.tag,{position:{before:ge.before,after:ge.after}}))})},[H]),Ie=l.useCallback(()=>{H("window.__DM && window.__DM.textEditBegin()").then(V=>{V&&JSON.parse(V)&&J(!0)})},[H]),le=l.useCallback(()=>{H("window.__DM && window.__DM.textEditCommit()").then(V=>{if(J(!1),!V)return;const ae=JSON.parse(V);if(!ae||!ae.changed)return;const ge=je.current;if(ge){const Be=Qt(ge.ref,"text");T(Ae=>{const nt=Ae.find(st=>st.id===Be),Ze=nt&&nt.kind==="text"?nt.before:ae.before;return Ze===ae.after?Ae.filter(st=>st.id!==Be):dn(Ae,{id:Be,kind:"text",elementRef:ge.ref,descriptor:ge.descriptor,tag:ge.tag,before:Ze,after:ae.after})})}})},[H]),q=l.useCallback(()=>{H("window.__DM && window.__DM.textEditRevert()"),J(!1)},[H]),we=l.useCallback(()=>{H("window.__DM && window.__DM.deleteSelected()").then(V=>{if(!V)return;const ae=JSON.parse(V);ae&&(T(ge=>dn(ge,{id:Qt(ae.ref,"delete"),kind:"delete",elementRef:ae.ref,descriptor:ae.descriptor,tag:ae.tag})),H("window.__DM && window.__DM.outline()"))})},[H]),ie=l.useCallback(()=>{H("window.__DM && window.__DM.copy()"),te.current=je.current?.ref??null},[H]),Ge=l.useCallback(V=>{const ae=je.current,ge=V||ae!=null&&te.current===ae.ref;H(`window.__DM && window.__DM.paste(${ge})`).then(Be=>{if(!Be)return;const Ae=JSON.parse(Be);Ae&&(T(nt=>dn(nt,{id:Qt(Ae.ref,"duplicate"),kind:"duplicate",elementRef:Ae.ref,descriptor:Ae.descriptor,tag:Ae.tag,sourceDescriptor:Ae.sourceDescriptor,placement:Ae.placement})),H("window.__DM && window.__DM.outline()"))})},[H]),ze=l.useCallback(()=>{H("window.__DM && window.__DM.undo()"),H("window.__DM && window.__DM.outline()")},[H]),qe=l.useCallback(V=>{H(`window.__DM && window.__DM.previewSelector(${JSON.stringify(V)})`)},[H]),Ke=l.useCallback(()=>C([]),[]),Xe=l.useCallback(V=>{H(`window.__DM && window.__DM.selectSimilar(${JSON.stringify(V)})`),setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),rt=l.useCallback((V,ae)=>{H(`window.__DM && window.__DM.scrollBy(${V}, ${ae})`)},[H]),yt=l.useCallback((V,ae)=>{const ge=je.current;if(!ge)return;const Be=ge.positionMode;if(Be==="absolute"||Be==="fixed"){const Ae=V==="x"?"left":"top",Ze=`${(parseFloat(ge.styles[Ae])||0)+ae}px`;D(Ae,Ze),ge.styles[Ae]=Ze}else{const Ae=ae>0?1:-1;H(`window.__DM && window.__DM.nudgeIndex(${Ae})`).then(nt=>{if(!nt)return;const Ze=JSON.parse(nt);Ze&&(T(st=>dn(st,{id:Qt(Ze.ref,"move"),kind:"move",elementRef:Ze.ref,descriptor:Ze.descriptor,tag:Ze.tag,position:"static",detail:`reordered: index ${Ze.from} → ${Ze.to}`})),H("window.__DM && window.__DM.outline()"))})}},[H,D]),kt=l.useCallback(()=>{H("window.__DM && window.__DM.selectChildren()"),setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),St=l.useCallback(()=>{H("window.__DM && window.__DM.selectSiblings()"),setTimeout(()=>H("window.__DM && window.__DM.outline()"),50)},[H]),pt=l.useCallback(async()=>{const V=await H("window.__DM && window.__DM.getDocumentColors()");if(!V)return[];try{return JSON.parse(V)}catch{return[]}},[H]),wt=l.useCallback(async()=>{const V=await H("window.__DM && window.__DM.getDocumentFonts()");if(!V)return[];try{return JSON.parse(V)}catch{return[]}},[H]),ft=l.useCallback(()=>{H("window.__DM && window.__DM.outline()")},[H]),Ct=l.useCallback(async V=>{const ae=await H(`window.__DM && window.__DM.outlineExpand(${V})`);if(!ae)return[];try{return JSON.parse(ae)}catch{return[]}},[H]),jt=l.useCallback(()=>{T([]),_.current=null},[]),Ne={active:t,setActive:oe,selection:i,selectionRects:de,selectionCount:c,hoverRect:De,hoverTag:f,similarSelectors:m,similarRects:Re,outline:v,expandOutlineNode:Ct,insertHover:S,edits:E,clearEdits:jt,entrySnapshot:_.current,captureSnapshot:Se,overlayLabel:R,setOverlayLabel:$,chromeDimmed:M,setChromeDimmed:L,textEditing:z,transform:me,pick:he,selectRef:pe,hoverRef:Le,deselect:re,nav:U,setStyle:D,setAttr:O,setStyles:P,dragBegin:B,dragApplyStyles:ne,dragHideSource:Oe,dragMoveInline:se,dragEnd:Me,dragCancel:Fe,queryInsertHover:Pe,clearInsertHover:We,insertSibling:tt,group:Ee,setPositionMode:Je,deleteSelected:we,copy:ie,paste:Ge,undo:ze,previewSelector:qe,clearSelectorPreview:Ke,selectSimilar:Xe,selectChildren:kt,selectSiblings:St,scrollBy:rt,nudge:yt,getDocumentColors:pt,getDocumentFonts:wt,requestOutline:ft,textEditBegin:Ie,textEditCommit:le,textEditRevert:q,__connect:ke,__handleMessage:X};return r.jsx(Uu.Provider,{value:Ne,children:e})}function Gs(){return l.useContext(Uu)}function IS(e,t,s,i){const n=Gs(),o=l.useRef(n);o.current=n;const a=l.useRef(s),c=l.useRef(i);l.useEffect(()=>{if(!t||!n)return;const d=Ve(e.current);if(!d)return;let u=!1;Rs(async()=>{const{DESIGN_MODE_SCRIPT:y}=await import("./inject-script-BwD7T_zc.js");return{DESIGN_MODE_SCRIPT:y}},[]).then(({DESIGN_MODE_SCRIPT:y})=>{u||d.executeJavaScriptUnchecked(y)});const p=e.current?.contentWindow,f=y=>{if(y.source!==p)return;const g=y.data?.__DM_MSG__;g&&o.current?.__handleMessage(g)};window.addEventListener("message",f);const b=()=>window.removeEventListener("message",f),m=y=>d.executeJavaScript(y);return n.__connect({exec:m,zoom:a.current,offset:c.current}),()=>{u=!0,b?.(),o.current?.__connect(null)}},[t]),l.useEffect(()=>{if(a.current=s,c.current=i,!t||!n)return;const d=Ve(e.current);if(!d)return;const u=p=>d.executeJavaScript(p);n.__connect({exec:u,zoom:s,offset:i})},[s,i.x,i.y])}const yn=x.div`
  display: flex;
  align-items: center;
  height: 24px;
  background: ${h.bg.muted};
  border: 1px solid ${h.border.subtle};
  border-radius: 6px;
  overflow: hidden;
  font-size: 11px;
  min-width: 0;
  ${e=>e.$span2&&"grid-column: span 2;"}

  &:focus-within {
    border-color: ${h.border.focus};
    background: ${h.bg.surface};
  }
`,wn=x.span`
  padding: 0 7px;
  color: ${h.text.tertiary};
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  flex-shrink: 0;
  cursor: ${e=>e.$scrub?"ew-resize":"default"};
  font-size: 10px;
  letter-spacing: 0.2px;
`,Js=x.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${h.text.primary};
  font-size: 11px;
  font-family: 'SF Mono', Consolas, monospace;
  text-align: right;
  padding: 0 7px 0 0;
  outline: none;
  height: 100%;

  -moz-appearance: textfield;
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Wu=x.select`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${h.text.primary};
  font-size: 10px;
  font-family: inherit;
  padding: 0 18px 0 4px;
  outline: none;
  cursor: pointer;
  height: 100%;
  appearance: none;
  text-align: right;
  text-align-last: right;
  direction: rtl;
`,Gu=x.div`
  position: absolute;
  right: 4px;
  pointer-events: none;
  color: ${h.text.tertiary};
  display: flex;
  align-items: center;
`,Ju=x.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${e=>e.$color||"transparent"};
  border: 1px solid ${h.border.default};
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  margin-right: 4px;

  /* transparency checker */
  ${e=>(!e.$color||e.$color==="transparent"||e.$color.includes("rgba(0, 0, 0, 0)"))&&`
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 6px 6px;
    background-position: 0 0, 0 3px, 3px -3px, -3px 0px;
  `}
`,rn=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`;function zS(e){return!e||e==="auto"||e==="fit-content"||e==="max-content"?"natural":e==="100%"?"fill":"pixels"}const NS=x.select`
  border: none;
  background: transparent;
  color: ${h.text.secondary};
  font-size: 9px;
  cursor: pointer;
  outline: none;
  padding: 0 4px 0 2px;
  flex-shrink: 0;
  height: 100%;
  appearance: none;
  width: 32px;
  text-align: center;
`;function Zl({label:e,value:t,computedPx:s,onChange:i}){const n=zS(t),o=parseFloat(t),a=n==="pixels"?Number.isNaN(o)?s:o:s,[c,d]=l.useState(String(Math.round(a))),u=l.useRef(!1);l.useEffect(()=>{d(String(Math.round(a)))},[a]);const p=l.useCallback(m=>{if(n!=="pixels")return;m.preventDefault();const y=m.clientX,g=a,C=w=>{const S=Math.max(0,Math.round(g+(w.clientX-y)));i(`${S}px`)},v=()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",v)};window.addEventListener("mousemove",C),window.addEventListener("mouseup",v)},[n,a,i]),f=()=>{if(u.current){u.current=!1;return}const m=parseFloat(c);isNaN(m)?d(String(Math.round(a))):i(`${m}px`)},b=m=>{i(m==="fill"?"100%":m==="natural"?"auto":`${Math.round(s)||100}px`)};return r.jsxs(yn,{children:[r.jsx(wn,{$scrub:n==="pixels",onMouseDown:p,children:e}),n==="pixels"?r.jsx(Js,{value:c,onChange:m=>d(m.target.value),onBlur:f,onKeyDown:m=>{m.key==="Enter"&&m.target.blur(),m.key==="Escape"&&(u.current=!0,d(String(Math.round(a))),m.target.blur())}}):r.jsx("div",{style:{flex:1,textAlign:"right",fontSize:10,color:h.text.tertiary,paddingRight:4,opacity:.5},children:Math.round(s)}),r.jsxs(NS,{value:n,onChange:m=>b(m.target.value),children:[r.jsx("option",{value:"pixels",children:"px"}),r.jsx("option",{value:"fill",children:"Fill"}),r.jsx("option",{value:"natural",children:"Hug"})]})]})}function BS(e){if(!e||e==="auto")return null;const t=parseFloat(e);return isNaN(t)?null:{num:t,unit:e.trim().endsWith("%")?"%":"px"}}const HS=x.button`
  border: none;
  background: transparent;
  width: 18px;
  height: 100%;
  cursor: pointer;
  color: ${h.text.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  &:hover { color: ${h.text.primary}; }
`,US=x.button`
  border: none;
  background: transparent;
  color: ${h.text.secondary};
  font-size: 9px;
  font-family: 'SF Mono', Consolas, monospace;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  height: 100%;
  width: 22px;
  &:hover { background: ${h.bg.hover}; color: ${h.text.primary}; }
`;function es({label:e,value:t,onChange:s}){const i=BS(t),n=i!==null,o=i?.num??0,a=i?.unit??"px",[c,d]=l.useState(n?String(o):""),u=l.useRef(!1);l.useEffect(()=>{d(n?String(o):"")},[n,o]);const p=l.useCallback((m,y)=>s(`${m}${y}`),[s]),f=l.useCallback(m=>{m.preventDefault();const y=m.clientX,g=o,C=a==="%"?.5:1,v=S=>{const k=S.clientX-y;let E=g+k*C;E=a==="%"?Math.round(E*2)/2:Math.round(E),p(E,a)},w=()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",w)};window.addEventListener("mousemove",v),window.addEventListener("mouseup",w)},[o,a,p]),b=()=>{if(u.current){u.current=!1;return}const m=c.trim();if(m===""){s("");return}const y=m.endsWith("%")?"%":a,g=parseFloat(m);if(isNaN(g)){d(n?String(o):"");return}p(g,y)};return r.jsxs(yn,{children:[r.jsx(wn,{$scrub:n,onMouseDown:n?f:void 0,children:e}),r.jsx(Js,{value:c,placeholder:"—",onChange:m=>d(m.target.value),onBlur:b,onKeyDown:m=>{m.key==="Enter"&&m.target.blur(),m.key==="Escape"&&(u.current=!0,d(n?String(o):""),m.target.blur())}}),n&&r.jsxs(r.Fragment,{children:[r.jsx(HS,{title:"Unset (auto)",onClick:()=>s(""),children:r.jsx(Ue,{name:"X",size:9})}),r.jsx(US,{title:"Toggle px / %",onClick:()=>p(o,a==="px"?"%":"px"),children:a})]})]})}function WS(e,t,s,i,n){const o=l.useRef({x:0,val:0});return l.useCallback(a=>{a.preventDefault(),o.current={x:a.clientX,val:e};const c=u=>{const p=u.clientX-o.current.x;let f=o.current.val+p*t;t>=1?f=Math.round(f):f=Math.round(f/t)*t,i!=null&&(f=Math.max(i,f)),n!=null&&(f=Math.min(n,f)),s(f)},d=()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",d)};window.addEventListener("mousemove",c),window.addEventListener("mouseup",d)},[e,t,s,i,n])}function GS(e){if(typeof e=="number")return e;const t=parseFloat(e);return isNaN(t)?0:t}function mt({label:e,value:t,unit:s="px",step:i=1,min:n,max:o,onChange:a,span2:c,accessory:d}){const u=GS(t),p=l.useCallback(g=>a(s?`${g}${s}`:String(g)),[a,s]),f=WS(u,i,p,n,o),[b,m]=l.useState(String(u)),y=l.useRef(!1);return l.useEffect(()=>{m(String(u))},[u]),r.jsxs(yn,{$span2:c,children:[r.jsx(wn,{$scrub:!0,onMouseDown:f,children:e}),r.jsx(Js,{value:b,onFocus:g=>g.currentTarget.select(),onMouseUp:g=>{document.activeElement===g.currentTarget&&g.preventDefault()},onChange:g=>m(g.target.value),onBlur:()=>{if(y.current){y.current=!1;return}const g=parseFloat(b);isNaN(g)?m(String(u)):p(g)},onKeyDown:g=>{g.key==="Enter"&&g.target.blur(),g.key==="Escape"&&(y.current=!0,m(String(u)),g.target.blur())}}),d]})}function gn({label:e,value:t,onChange:s,span2:i,placeholder:n}){return r.jsxs(yn,{$span2:i,children:[r.jsx(wn,{children:e}),r.jsx(Js,{value:t,placeholder:n,style:{textAlign:"left",fontFamily:"inherit"},onChange:o=>s(o.target.value)})]})}function Et({label:e,value:t,options:s,onChange:i,span2:n}){const o=s.map(a=>typeof a=="string"?{label:a,value:a}:a);return r.jsxs(yn,{$span2:n,style:{position:"relative"},children:[r.jsx(wn,{children:e}),r.jsx(Wu,{value:t,onChange:a=>i(a.target.value),children:o.map(a=>r.jsx("option",{value:a.value,children:a.label},a.value))}),r.jsx(Gu,{children:r.jsx(Ue,{name:"CaretDownSmall",size:10})})]})}const JS=["system-ui","-apple-system","Inter","Helvetica Neue","Arial","Georgia","Times New Roman","SF Mono","Menlo","Consolas","monospace","Verdana","Tahoma"];function KS({label:e,value:t,onChange:s,span2:i,getProjectFonts:n}){const[o,a]=l.useState([]),c=l.useMemo(()=>t.split(",")[0].trim().replace(/^["']|["']$/g,""),[t]);l.useEffect(()=>{n&&n().then(a).catch(u=>{})},[n]);const d=l.useMemo(()=>{const u=new Set,p=[],f=b=>{u.has(b)||(u.add(b),p.push(b))};return o.forEach(f),JS.forEach(f),c&&!u.has(c)&&p.unshift(c),p},[o,c]);return r.jsxs(yn,{$span2:i,style:{position:"relative"},children:[r.jsx(wn,{children:e}),r.jsx(Wu,{value:c,onChange:u=>{const p=u.target.value,f=/\s/.test(p)?`"${p}"`:p;s(f)},style:{fontFamily:c},children:d.map(u=>r.jsx("option",{value:u,style:{fontFamily:u},children:u},u))}),r.jsx(Gu,{children:r.jsx(Ue,{name:"CaretDownSmall",size:10})})]})}function xn({label:e,value:t,onChange:s,span2:i,getSwatches:n}){const[o,a]=l.useState(!1),c=l.useRef(null),d=t&&t!=="none"&&!t.includes("rgba(0, 0, 0, 0)")?t:"transparent";return r.jsxs(r.Fragment,{children:[r.jsxs(yn,{$span2:i,children:[r.jsx(wn,{children:e}),r.jsx("div",{style:{flex:1}}),r.jsx(Ju,{ref:c,$color:d,onClick:()=>a(u=>!u)})]}),r.jsx(qo,{open:o,anchorEl:c.current,value:d,onChange:s,onClose:()=>a(!1),getSwatches:n})]})}const Ku=x.div`
  position: fixed;
  z-index: 2000;
  background: ${h.bg.elevated};
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  box-shadow: ${h.shadow.lg};
  padding: 10px;
  min-width: 200px;
`;function XS({label:e,summary:t,children:s,span2:i,swatch:n}){const[o,a]=l.useState(!1),c=l.useRef(null),d=l.useRef(null),[u,p]=l.useState({x:0,y:0});return l.useEffect(()=>{if(!o||!c.current)return;const f=c.current.getBoundingClientRect();let b=f.left,m=f.bottom+4;requestAnimationFrame(()=>{const y=d.current?.getBoundingClientRect();y&&(b+y.width>window.innerWidth-8&&(b=window.innerWidth-y.width-8),m+y.height>window.innerHeight-8&&(m=f.top-y.height-4)),p({x:Math.max(8,b),y:Math.max(8,m)})})},[o]),l.useEffect(()=>{if(!o)return;const f=m=>{d.current?.contains(m.target)||c.current?.contains(m.target)||m.target?.closest?.("[data-popover-layer]")||a(!1)},b=m=>{m.key==="Escape"&&(m.stopPropagation(),a(!1))};return document.addEventListener("mousedown",f),document.addEventListener("keydown",b),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",b)}},[o]),r.jsxs(r.Fragment,{children:[r.jsxs(yn,{ref:c,$span2:i,onClick:()=>a(!o),style:{cursor:"pointer"},children:[r.jsx(wn,{children:e}),r.jsx("div",{style:{flex:1,minWidth:0,textAlign:"right",paddingRight:n?0:6,fontSize:10,color:h.text.primary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t}),n&&r.jsx(Ju,{$color:n,style:{pointerEvents:"none"}}),r.jsx("div",{style:{paddingRight:4,color:h.text.tertiary,display:"flex"},children:r.jsx(Ue,{name:"CaretRightSmall",size:10})})]}),o&&Vn.createPortal(r.jsx(Ku,{ref:d,style:{left:u.x,top:u.y},children:s}),document.body)]})}const qS=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  width: 180px;
`;function Vi({values:e,onChange:t,unit:s="px"}){return r.jsxs(qS,{children:[r.jsx(mt,{label:"T",value:e.top,unit:s,onChange:i=>t("top",i)}),r.jsx(mt,{label:"R",value:e.right,unit:s,onChange:i=>t("right",i)}),r.jsx(mt,{label:"B",value:e.bottom,unit:s,onChange:i=>t("bottom",i)}),r.jsx(mt,{label:"L",value:e.left,unit:s,onChange:i=>t("left",i)})]})}const VS=x.button`
  border: none;
  background: transparent;
  width: 20px;
  height: 100%;
  cursor: pointer;
  color: ${h.text.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    background: ${h.bg.hover};
    color: ${h.text.primary};
  }
`;function Yi({icon:e="DotsHorizontalSmall",children:t}){const[s,i]=l.useState(!1),n=l.useRef(null),o=l.useRef(null),[a,c]=l.useState({x:0,y:0});return l.useEffect(()=>{if(!s||!n.current)return;const d=n.current.getBoundingClientRect();c({x:Math.max(8,d.right-200),y:d.bottom+4})},[s]),l.useEffect(()=>{if(!s)return;const d=u=>{o.current?.contains(u.target)||n.current?.contains(u.target)||i(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[s]),r.jsxs(r.Fragment,{children:[r.jsx(VS,{ref:n,onClick:d=>{d.stopPropagation(),i(!s)},title:"Individual sides",children:r.jsx(Ue,{name:e,size:11})}),s&&Vn.createPortal(r.jsx(Ku,{ref:o,style:{left:a.x,top:a.y},children:t}),document.body)]})}const tr=$t.createContext({}),YS=x.div`
  border-bottom: 1px solid ${h.border.subtle};
`,Xu=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${h.text.primary};
`,ZS=x.div`
  padding: 0 10px 10px 10px;
`,QS=x.button`
  margin-left: auto;
  border: none;
  background: transparent;
  font-size: 9px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: ${h.text.tertiary};
  padding: 1px 4px;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0;
  ${Xu}:hover & { opacity: 0.7; }
  &:hover { opacity: 1 !important; background: ${h.bg.hover}; }
`,eC=x.button`
  width: 100%;
  padding: 8px;
  border: 1px dashed ${h.border.default};
  background: transparent;
  border-radius: 6px;
  color: ${h.text.tertiary};
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:hover { color: ${h.text.primary}; border-color: ${h.border.strong}; }
`;function sn({title:e,children:t,empty:s,onAdd:i,onClear:n}){return r.jsxs(YS,{children:[r.jsxs(Xu,{children:[e,n&&s===!1&&r.jsx(QS,{onClick:n,children:"Remove"})]}),r.jsx(ZS,{children:s&&i?r.jsxs(eC,{onClick:i,children:[r.jsx(Ue,{name:"Add",size:11})," Add ",e.toLowerCase()]}):t})]})}const _s=e=>!!e&&e!=="none"&&e!=="normal"&&e!=="auto"&&e!=="0px"&&e!=="rgba(0, 0, 0, 0)";function Zi(e,t,s,i){const n=parseFloat(e)||0,o=parseFloat(t)||0,a=parseFloat(s)||0,c=parseFloat(i)||0;return n===o&&o===a&&a===c?`${n}px`:`${Math.round((n+o+a+c)/4)}px`}function tC({s:e,inline:t,set:s}){const i=e.position,n=i==="sticky"?"sticky":i,o=i!=="static",a=i!=="static";return r.jsx(sn,{title:"Position",defaultOpen:a,children:r.jsxs(rn,{children:[r.jsx(Et,{label:"Mode",span2:!0,value:n,options:[{label:"Static",value:"static"},{label:"Relative",value:"relative"},{label:"Absolute",value:"absolute"},{label:"Fixed",value:"fixed"},...i==="sticky"?[{label:"Sticky",value:"sticky"}]:[]],onChange:c=>s("position",c)}),o&&r.jsxs(r.Fragment,{children:[r.jsx(es,{label:"Top",value:t.top,onChange:c=>s("top",c)}),r.jsx(es,{label:"Right",value:t.right,onChange:c=>s("right",c)}),r.jsx(es,{label:"Bottom",value:t.bottom,onChange:c=>s("bottom",c)}),r.jsx(es,{label:"Left",value:t.left,onChange:c=>s("left",c)}),r.jsx(mt,{label:"Z",value:e.zIndex,unit:"",step:1,onChange:c=>s("zIndex",c)})]})]})})}function nC({s:e,inline:t,rect:s,set:i,setMany:n}){const o=e.display==="flex"||e.display==="inline-flex",a=e.display==="grid"||e.display==="inline-grid",c=Zi(e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft),d=Zi(e.marginTop,e.marginRight,e.marginBottom,e.marginLeft);return r.jsx(sn,{title:"Layout",defaultOpen:!0,children:r.jsxs(rn,{children:[r.jsx(Et,{label:"Display",span2:!0,value:e.display,options:["block","inline-block","inline","flex","inline-flex","grid","inline-grid","none"],onChange:u=>i("display",u)}),r.jsx(Zl,{label:"W",value:t.width,computedPx:s.width,onChange:u=>i("width",u)}),r.jsx(Zl,{label:"H",value:t.height,computedPx:s.height,onChange:u=>i("height",u)}),o&&r.jsxs(r.Fragment,{children:[r.jsx(Et,{label:"Direction",value:e.flexDirection,options:["row","column","row-reverse","column-reverse"],onChange:u=>i("flexDirection",u)}),r.jsx(mt,{label:"Gap",value:e.gap,onChange:u=>i("gap",u)}),r.jsx(Et,{label:"Justify",value:e.justifyContent,options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],onChange:u=>i("justifyContent",u)}),r.jsx(Et,{label:"Align",value:e.alignItems,options:["stretch","flex-start","center","flex-end","baseline"],onChange:u=>i("alignItems",u)})]}),a&&r.jsxs(r.Fragment,{children:[r.jsx(gn,{label:"Cols",span2:!0,value:e.gridTemplateColumns,onChange:u=>i("gridTemplateColumns",u),placeholder:"1fr 1fr"}),r.jsx(mt,{label:"Gap",value:e.gap,onChange:u=>i("gap",u)})]}),r.jsx(mt,{label:"Padding",value:c,onChange:u=>n({paddingTop:u,paddingRight:u,paddingBottom:u,paddingLeft:u}),accessory:r.jsx(Yi,{children:r.jsx(Vi,{values:{top:e.paddingTop,right:e.paddingRight,bottom:e.paddingBottom,left:e.paddingLeft},onChange:(u,p)=>i(`padding${u[0].toUpperCase()+u.slice(1)}`,p)})})}),r.jsx(mt,{label:"Margin",value:d,onChange:u=>n({marginTop:u,marginRight:u,marginBottom:u,marginLeft:u}),accessory:r.jsx(Yi,{children:r.jsx(Vi,{values:{top:e.marginTop,right:e.marginRight,bottom:e.marginBottom,left:e.marginLeft},onChange:(u,p)=>i(`margin${u[0].toUpperCase()+u.slice(1)}`,p)})})}),r.jsx(mt,{label:"Flex Grow",value:e.flexGrow,unit:"",step:1,min:0,onChange:u=>i("flexGrow",u)}),r.jsx(mt,{label:"Shrink",value:e.flexShrink,unit:"",step:1,min:0,onChange:u=>i("flexShrink",u)}),r.jsx(Et,{label:"Align Self",span2:!0,value:e.alignSelf,options:["auto","stretch","flex-start","center","flex-end","baseline"],onChange:u=>i("alignSelf",u)})]})})}function rC(e){return e.backgroundImage&&e.backgroundImage!=="none"?e.backgroundImage.includes("gradient")?"gradient":"image":_s(e.backgroundColor)?"solid":"none"}function sC({s:e,set:t,setMany:s,imgSrc:i,setAttr:n}){const o=rC(e),a=$t.useContext(tr),c=l.useMemo(()=>{const m=e.backgroundImage;if(!m)return null;const y=m.indexOf("linear-gradient(");if(y<0)return null;const g=y+16;let C=1,v=-1;for(let M=g;M<m.length;M++)if(m[M]==="(")C++;else if(m[M]===")"&&(C--,C===0)){v=M;break}if(v<0)return null;const w=m.slice(g,v),S=[];C=0;let k="";for(const M of w)M==="("?(C++,k+=M):M===")"?(C--,k+=M):M===","&&C===0?(S.push(k.trim()),k=""):k+=M;k.trim()&&S.push(k.trim());let E="180deg",T,_;const R=M=>!/^to\b/.test(M)&&/^(rgb|hsl|#|[a-z]+\b)/.test(M);if(S.length>=3&&!R(S[0]))E=S[0],T=S[1],_=S[S.length-1];else if(S.length>=2)T=S[0],_=S[S.length-1];else return null;const $=M=>M.replace(/\s+\d+%$/,"");return{angle:E,c1:$(T),c2:$(_)}},[e.backgroundImage]),d=l.useMemo(()=>{const m=e.backgroundImage?.match(/url\(["']?([^"')]+)["']?\)/);return m?m[1]:""},[e.backgroundImage]),u=o==="none"?"None":o==="solid"?e.backgroundColor:o==="gradient"?"Gradient":"Image",p=o==="none"&&i===void 0,f=()=>s({backgroundImage:"none",backgroundColor:"#e5e5e5"}),b=()=>s({backgroundColor:"transparent",backgroundImage:"none"});return r.jsx(sn,{title:"Fill",defaultOpen:!p,empty:p,onAdd:f,onClear:b,children:r.jsxs(rn,{children:[r.jsx(XS,{label:"Fill",span2:!0,summary:u,swatch:o==="solid"?e.backgroundColor:void 0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(Et,{label:"Type",span2:!0,value:o,options:[{label:"None",value:"none"},{label:"Solid",value:"solid"},{label:"Gradient",value:"gradient"},{label:"Image",value:"image"}],onChange:m=>{m==="none"?s({backgroundColor:"transparent",backgroundImage:"none"}):m==="solid"?s({backgroundImage:"none",backgroundColor:_s(e.backgroundColor)?e.backgroundColor:"#e5e5e5"}):m==="gradient"?s({backgroundImage:"linear-gradient(180deg, #ffffff, #cccccc)",backgroundColor:"transparent"}):m==="image"&&s({backgroundImage:'url("")',backgroundSize:"cover"})}}),o==="solid"&&r.jsx(xn,{label:"Color",span2:!0,value:e.backgroundColor,onChange:m=>t("backgroundColor",m),getSwatches:a.getColors}),o==="gradient"&&c&&r.jsxs(r.Fragment,{children:[r.jsx(xn,{label:"Start",span2:!0,value:c.c1,getSwatches:a.getColors,onChange:m=>t("backgroundImage",`linear-gradient(${c.angle}, ${m}, ${c.c2})`)}),r.jsx(xn,{label:"End",span2:!0,value:c.c2,getSwatches:a.getColors,onChange:m=>t("backgroundImage",`linear-gradient(${c.angle}, ${c.c1}, ${m})`)}),r.jsx(mt,{label:"Angle",span2:!0,value:Number.isNaN(parseFloat(c.angle))?180:parseFloat(c.angle),unit:"deg",onChange:m=>t("backgroundImage",`linear-gradient(${m}, ${c.c1}, ${c.c2})`)})]}),o==="image"&&r.jsx(gn,{label:"URL",span2:!0,value:d,onChange:m=>t("backgroundImage",`url("${m}")`),placeholder:"https://..."})]})}),i!==void 0&&n&&r.jsx(r.Fragment,{children:r.jsx(gn,{label:"Img src",span2:!0,value:i,onChange:m=>n("src",m),placeholder:"https://..."})})]})})}function iC({s:e,set:t,setMany:s}){const i=$t.useContext(tr),n=parseFloat(e.borderTopWidth)>0||parseFloat(e.borderRightWidth)>0||parseFloat(e.borderBottomWidth)>0||parseFloat(e.borderLeftWidth)>0||parseFloat(e.borderRadius)>0,o=Zi(e.borderTopWidth,e.borderRightWidth,e.borderBottomWidth,e.borderLeftWidth),a=()=>t("border","1px solid currentColor"),c=()=>{t("border","none"),t("borderRadius","0")};return r.jsx(sn,{title:"Border",defaultOpen:n,empty:!n,onAdd:a,onClear:c,children:r.jsxs(rn,{children:[r.jsx(mt,{label:"Width",value:o,onChange:d=>s({borderTopWidth:d,borderRightWidth:d,borderBottomWidth:d,borderLeftWidth:d}),accessory:r.jsx(Yi,{children:r.jsx(Vi,{values:{top:e.borderTopWidth,right:e.borderRightWidth,bottom:e.borderBottomWidth,left:e.borderLeftWidth},onChange:(d,u)=>t(`border${d[0].toUpperCase()+d.slice(1)}Width`,u)})})}),r.jsx(xn,{label:"Color",value:e.borderColor,onChange:d=>t("borderColor",d),getSwatches:i.getColors}),r.jsx(Et,{label:"Style",value:e.borderStyle,options:["none","solid","dashed","dotted","double"],onChange:d=>t("borderStyle",d)}),r.jsx(mt,{label:"Radius",value:e.borderRadius,onChange:d=>t("borderRadius",d)})]})})}function oC(e){const t=[];let s=0,i="";for(const n of e)n==="("?s++:n===")"&&s--,n===","&&s===0?(t.push(i.trim()),i=""):i+=n;return i.trim()&&t.push(i.trim()),t}function Ql(e){if(!e||e==="none")return{x:0,y:2,blur:8,spread:0,color:"rgba(0,0,0,0.15)",inset:!1,rest:""};const t=oC(e),s=t[0]??"",i=t.slice(1).join(", "),n=/\binset\b/.test(s);let o=s.replace(/\binset\b/,"").trim();const a=o.match(/(rgba?\([^)]+\)|#[0-9a-fA-F]{3,8})/),c=a?a[1]:"rgba(0,0,0,0.15)";a&&(o=o.replace(a[0],"").trim());const d=o.split(/\s+/).map(parseFloat);return{x:d[0]||0,y:d[1]||0,blur:d[2]||0,spread:d[3]||0,color:c,inset:n,rest:i}}function ec(e){const t=`${e.inset?"inset ":""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`;return e.rest?`${t}, ${e.rest}`:t}function aC(e){const t=`${e.x}px ${e.y}px ${e.blur}px ${e.color}`;return e.rest?`${t}, ${e.rest}`:t}function lC({s:e,set:t,setMany:s}){const i=$t.useContext(tr),n=_s(e.boxShadow),o=_s(e.textShadow),a=!n&&!o,[c,d]=l.useState(o&&!n?"text":"box"),u=c==="box"?"boxShadow":"textShadow",p=c==="box"?e.boxShadow:e.textShadow,f=l.useMemo(()=>Ql(p),[p]),b=g=>{const C={...f,...g};t(u,c==="box"?ec(C):aC(C))},m=()=>t("boxShadow",ec(Ql(""))),y=()=>s({boxShadow:"none",textShadow:"none"});return r.jsx(sn,{title:"Shadow",defaultOpen:!a,empty:a,onAdd:m,onClear:y,children:r.jsxs(rn,{children:[r.jsx(Et,{label:"Kind",span2:!0,value:c,options:[{label:"Box shadow",value:"box"},{label:"Text shadow",value:"text"}],onChange:g=>d(g)}),r.jsx(mt,{label:"X",value:f.x,onChange:g=>b({x:parseFloat(g)||0})}),r.jsx(mt,{label:"Y",value:f.y,onChange:g=>b({y:parseFloat(g)||0})}),r.jsx(mt,{label:"Blur",value:f.blur,min:0,onChange:g=>b({blur:parseFloat(g)||0})}),c==="box"&&r.jsx(mt,{label:"Spread",value:f.spread,onChange:g=>b({spread:parseFloat(g)||0})}),r.jsx(xn,{label:"Color",span2:!0,value:f.color,onChange:g=>b({color:g}),getSwatches:i.getColors}),c==="box"&&r.jsx(Et,{label:"Inset",value:f.inset?"inset":"outset",options:["outset","inset"],onChange:g=>b({inset:g==="inset"})})]})})}function cC({tag:e,attrs:t,setAttr:s}){const i=e==="input"||e==="textarea",n=i||t.placeholder!=="",o=i,a=e==="img"||t.alt!=="",c=e==="a"||t.href!=="";return!n&&!o&&!a&&!c?null:r.jsx(sn,{title:"Content",defaultOpen:!0,children:r.jsxs(rn,{children:[n&&r.jsx(gn,{label:"Placeholder",span2:!0,value:t.placeholder,onChange:d=>s("placeholder",d)}),o&&r.jsx(gn,{label:"Value",span2:!0,value:t.value,onChange:d=>s("value",d)}),a&&r.jsx(gn,{label:"Alt",span2:!0,value:t.alt,onChange:d=>s("alt",d)}),c&&r.jsx(gn,{label:"Href",span2:!0,value:t.href,onChange:d=>s("href",d),placeholder:"https://..."})]})})}function dC({s:e,set:t,hasText:s}){const i=$t.useContext(tr);return r.jsx(sn,{title:"Text",defaultOpen:s,children:r.jsxs(rn,{children:[r.jsx(KS,{label:"Font",span2:!0,value:e.fontFamily,onChange:n=>t("fontFamily",n),getProjectFonts:i.getFonts}),r.jsx(mt,{label:"Size",value:e.fontSize,onChange:n=>t("fontSize",n)}),r.jsx(xn,{label:"Color",value:e.color,onChange:n=>t("color",n),getSwatches:i.getColors}),r.jsx(Et,{label:"Weight",value:e.fontWeight,options:["100","200","300","400","500","600","700","800","900"],onChange:n=>t("fontWeight",n)}),r.jsx(Et,{label:"Align",value:e.textAlign,options:["left","center","right","justify"],onChange:n=>t("textAlign",n)}),r.jsx(mt,{label:"Line Ht",value:e.lineHeight,onChange:n=>t("lineHeight",n)}),r.jsx(mt,{label:"Letter Sp",value:e.letterSpacing,step:.1,onChange:n=>t("letterSpacing",n)}),r.jsx(Et,{label:"Decoration",value:e.textDecorationLine,options:["none","underline","line-through"],onChange:n=>t("textDecorationLine",n)}),r.jsx(Et,{label:"Case",value:e.textTransform,options:["none","uppercase","lowercase","capitalize"],onChange:n=>t("textTransform",n)})]})})}function uC({s:e,set:t}){const s=parseFloat(e.opacity)<1;return r.jsx(sn,{title:"Effects",defaultOpen:s,children:r.jsxs(rn,{children:[r.jsx(mt,{label:"Opacity",value:e.opacity,unit:"",step:.05,min:0,max:1,onChange:i=>t("opacity",i)}),r.jsx(Et,{label:"Overflow",value:e.overflow,options:["visible","hidden","auto","scroll"],onChange:i=>t("overflow",i)})]})})}function pC({s:e,set:t}){const s=$t.useContext(tr),i=e.fill&&e.fill!=="none",n=e.stroke&&e.stroke!=="none";return r.jsx(sn,{title:"SVG",defaultOpen:!0,children:r.jsxs(rn,{children:[r.jsx(xn,{label:"Fill",value:i?e.fill:"transparent",onChange:o=>t("fill",o),getSwatches:s.getColors}),r.jsx(mt,{label:"Fill α",value:e.fillOpacity,unit:"",step:.05,min:0,max:1,onChange:o=>t("fillOpacity",o)}),r.jsx(Et,{label:"Fill Rule",span2:!0,value:e.fillRule,options:["nonzero","evenodd"],onChange:o=>t("fillRule",o)}),r.jsx(xn,{label:"Stroke",value:n?e.stroke:"transparent",onChange:o=>t("stroke",o),getSwatches:s.getColors}),r.jsx(mt,{label:"Stroke W",value:e.strokeWidth,step:.5,min:0,onChange:o=>t("strokeWidth",o)}),r.jsx(mt,{label:"Stroke α",value:e.strokeOpacity,unit:"",step:.05,min:0,max:1,onChange:o=>t("strokeOpacity",o)}),r.jsx(gn,{label:"Dash",value:e.strokeDasharray==="none"?"":e.strokeDasharray,onChange:o=>t("strokeDasharray",o||"none"),placeholder:"4 2"}),r.jsx(Et,{label:"Cap",value:e.strokeLinecap,options:["butt","round","square"],onChange:o=>t("strokeLinecap",o)}),r.jsx(Et,{label:"Join",value:e.strokeLinejoin,options:["miter","round","bevel"],onChange:o=>t("strokeLinejoin",o)})]})})}function fC({info:e,setStyle:t,setStyles:s,setAttr:i,sources:n}){const o=e.styles,a=e.textContent.length>0,c=e.tag==="img",d=t,u=s;return r.jsxs(tr.Provider,{value:n??{},children:[e.isSVG&&r.jsx(pC,{s:o,set:d}),r.jsx(cC,{tag:e.tag,attrs:e.attrs,setAttr:i}),r.jsx(tC,{s:o,inline:e.inline,set:d}),r.jsx(nC,{s:o,inline:e.inline,rect:e.rect,set:d,setMany:u}),r.jsx(sC,{s:o,set:d,setMany:u,imgSrc:c?e.attrs.src:void 0,setAttr:i}),r.jsx(iC,{s:o,set:d,setMany:u}),r.jsx(lC,{s:o,set:d,setMany:u},e.ref),r.jsx(dC,{s:o,set:d,hasText:a}),r.jsx(uC,{s:o,set:d})]})}const hC=x.div`
  /* position: relative makes Well the offsetParent for Row children, so
   * row.offsetTop is measured against the Well's padding edge — the same
   * coordinate system well.scrollTop uses. Without this, offsetParent is
   * the absolutely-positioned Panel ancestor and scroll-into-view math
   * is off by ~Header-height+padding. */
  position: relative;
  background: ${h.bg.muted};
  border: 1px solid ${h.border.subtle};
  border-radius: 6px;
  box-shadow: ${h.shadow.inset};
  padding: 4px 0;
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 10px;
  height: 30vh;
  overflow-y: auto;
`,qu=l.createContext(null),gC=x.div`
  display: flex;
  align-items: center;
  height: 18px;
  padding-left: ${e=>4+e.$depth*12}px;
  padding-right: 6px;
  cursor: pointer;
  user-select: none;
  color: ${e=>e.$selected?h.text.primary:e.$ancestor?h.text.primary:h.text.tertiary};
  background: ${e=>e.$selected?h.bg.selected:"transparent"};
  font-weight: ${e=>e.$selected?600:e.$ancestor?500:400};

  &:hover {
    background: ${e=>e.$selected?h.bg.selected:h.bg.hover};
  }
`,mC=x.span`
  width: 12px;
  flex-shrink: 0;
  color: ${h.text.tertiary};
  display: flex;
  align-items: center;
  cursor: pointer;
  visibility: ${e=>e.$has?"visible":"hidden"};
`,xC=x.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;function Vu({node:e,depth:t,onSelect:s,onHover:i,onExpand:n,forceOpen:o}){const a=o||!!e.isAncestor||!!e.isSelected,[c,d]=l.useState(a),[u,p]=l.useState(e.children);l.useEffect(()=>{a?d(!0):e.children===void 0&&d(!1),p(e.children)},[a,e.children,e.ref]);const f=l.useCallback(async g=>{if(g.stopPropagation(),!c&&!u&&e.childCount>0){const C=await n(e.ref);p(C)}d(C=>!C)},[c,u,e.childCount,e.ref,n]),b=e.childCount>0,m=l.useRef(null),y=l.useContext(qu);return l.useEffect(()=>{if(!e.isSelected)return;const g=m.current,C=y?.current;if(!g||!C)return;const v=g.offsetTop,w=v+g.offsetHeight,S=C.scrollTop,k=S+C.clientHeight;v<S?C.scrollTop=v-4:w>k&&(C.scrollTop=w-C.clientHeight+4)},[e.isSelected,e.ref,y]),r.jsxs(r.Fragment,{children:[r.jsxs(gC,{ref:m,$depth:t,$selected:e.isSelected,$ancestor:e.isAncestor,onClick:()=>s(e.ref),onMouseEnter:()=>i(e.ref),children:[r.jsx(mC,{$has:b,$open:c,onClick:f,children:r.jsx(Ue,{name:c?"CaretDownSmall":"CaretRightSmall",size:9})}),r.jsx(xC,{children:e.label})]}),c&&u&&u.map(g=>r.jsx(Vu,{node:g,depth:t+1,onSelect:s,onHover:i,onExpand:n},g.ref))]})}function bC({root:e,onSelect:t,onHover:s,onExpand:i,onNav:n}){const o=$t.useRef(null);return l.useEffect(()=>{const a=o.current;if(!a)return;const c=d=>{d.key==="Enter"&&d.shiftKey?(d.preventDefault(),d.stopPropagation(),n("parent")):d.key==="Enter"?(d.preventDefault(),d.stopPropagation(),n("firstChild")):d.key==="ArrowDown"?(d.preventDefault(),d.stopPropagation(),n("next")):d.key==="ArrowUp"&&(d.preventDefault(),d.stopPropagation(),n("prev"))};return a.addEventListener("keydown",c),()=>a.removeEventListener("keydown",c)},[n]),r.jsx("div",{style:{padding:"8px 10px"},children:r.jsx(qu.Provider,{value:o,children:r.jsx(hC,{ref:o,tabIndex:0,onMouseLeave:()=>s(null),children:e?r.jsx(Vu,{node:e,depth:0,onSelect:t,onHover:s,onExpand:i,forceOpen:!0}):r.jsx("div",{style:{padding:"8px",color:h.text.tertiary,textAlign:"center"},children:"(no document)"})})})})}function yC(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function wC(e,t){const s=e.length,i=t.length,n=s+i,o=n,a=new Int32Array(2*n+1),c=[];let d=-1;e:for(let b=0;b<=n;b++){c.push(a.slice());for(let m=-b;m<=b;m+=2){let y=m===-b||m!==b&&a[o+m-1]<a[o+m+1]?a[o+m+1]:a[o+m-1]+1,g=y-m;for(;y<s&&g<i&&e[y]===t[g];)y++,g++;if(a[o+m]=y,y>=s&&g>=i){d=b;break e}}}const u=[];let p=s,f=i;for(let b=d;b>0;b--){const m=c[b],y=p-f,g=y===-b||y!==b&&m[o+y-1]<m[o+y+1],C=g?y+1:y-1,v=m[o+C],w=v-C;for(;p>v&&f>w;)u.push({tag:" ",line:e[--p]}),f--;g?u.push({tag:"+",line:t[--f]}):u.push({tag:"-",line:e[--p]})}for(;p>0&&f>0;)u.push({tag:" ",line:e[--p]}),f--;for(;p>0;)u.push({tag:"-",line:e[--p]});for(;f>0;)u.push({tag:"+",line:t[--f]});return u.reverse(),u}function tc(e,t,s=5,i=2e4){if(e===t)return"";const n=wC(e.split(`
`),t.split(`
`)),o=new Uint8Array(n.length);for(let u=0;u<n.length;u++)n[u].tag!==" "&&(o[u]=1);if(!o.some(Boolean))return"";for(let u=0;u<n.length;u++)if(n[u].tag!==" ")for(let p=Math.max(0,u-s);p<=Math.min(n.length-1,u+s);p++)o[p]=1;const a=[];let c=!1;for(let u=0;u<n.length;u++){if(!o[u]){c&&(a.push("  …"),c=!1);continue}c=!0,a.push(n[u].tag+" "+n[u].line)}let d=a.join(`
`);return d.length>i&&(d=Lc(d,i-15)+`
… (truncated)`),d}function nc(e,t,s){const i=[];return i.push("Design Mode — Direct Manipulation Edits"),i.push(""),i.push(`File: ${t}`),i.push(""),i.push("The user made the following changes via direct manipulation in the preview."),i.push("These were applied as inline styles/DOM mutations to the live DOM — NOT yet in source."),i.push("Please apply each change to the actual source code."),i.push(""),i.push("Each edit's target is a <mentioned-element> block describing the RENDERED"),i.push("DOM node — find the semantically matching element in source."),i.push(""),i.push("─────────────────────────────────────────"),i.push(""),e.forEach((n,o)=>{switch(i.push(`## Edit ${o+1}: ${n.kind.toUpperCase()}`),i.push(n.descriptor),i.push(""),n.kind){case"style":{i.push("Style changes:");for(const[a,c]of Object.entries(n.changes))i.push(`  ${yC(a)}: ${c.before||"(unset)"} → ${c.after}`);break}case"move":{i.push(`Moved (${n.position} positioning): ${n.detail}`);break}case"insert":{i.push(`Inserted new <${n.tag}> (${n.insertKind}):`),i.push(`  Placement: ${n.placement}`),n.initialStyle&&i.push(`  Initial style: ${n.initialStyle}`);break}case"delete":{i.push("Deleted. Remove from source.");break}case"text":{i.push("Text content changed:"),i.push(`  Before: "${n.before}"`),i.push(`  After:  "${n.after}"`);break}case"attr":{i.push(`Attribute ${n.attr} changed:`),i.push(`  Before: "${n.before}"`),i.push(`  After:  "${n.after}"`);break}case"duplicate":{i.push("Duplicated from:"),i.push(`  [[${n.sourceDescriptor}]]`),i.push(`  Placement: ${n.placement}`);break}case"group":{i.push('Wrapped the following in a new <div style="display:contents">:'),i.push(n.childDescriptor),i.push("Give the wrapper an appropriate class/style per codebase convention.");break}}i.push("")}),s&&(i.push("─────────────────────────────────────────"),i.push(""),i.push("## Live DOM diff (experimental)"),i.push("Snapshot of document.body before vs after the edit session. One tag per"),i.push("line; data-react-component attrs are fiber-derived (dev-mode only). This"),i.push("is rendered output — map it back to the JSX/template that produced it."),i.push(""),i.push(s),i.push("")),i.push("─────────────────────────────────────────"),i.push(""),i.push("NOTES:"),i.push("- Style edits: prefer updating existing CSS/style blocks over adding inline styles."),i.push("- Moves in lists/loops may need data reorder rather than markup reorder."),i.push("- Inserts: use class names matching codebase conventions."),i.push("- nth(i/N) is 1-indexed position among siblings in the rendered DOM."),i.join(`
`)}function vC(e){const t={};return e.forEach(i=>{t[i.kind]=(t[i.kind]||0)+1}),Object.entries(t).map(([i,n])=>`${n} ${i}`).join(", ")}const kC=x.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${e=>e.$width}px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background: ${h.bg.panel};
  border-right: 1px solid ${h.border.subtle};
`,SC=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid ${h.border.default};
  background: ${h.bg.surface};
`,CC=x.div`
  font-size: 12px;
  font-weight: 600;
  color: ${h.text.primary};
  flex: 1;
`,_C=x.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,$C=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-top: 1px solid ${h.border.subtle};
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${h.text.tertiary};
  cursor: pointer;
  user-select: none;
  &:hover { color: ${h.text.secondary}; }
`,EC=x.pre`
  margin: 0;
  padding: 8px 12px 12px;
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 9px;
  line-height: 1.5;
  color: ${h.text.secondary};
  white-space: pre-wrap;
  word-break: break-word;
  background: ${h.bg.muted};
  border-top: 1px solid ${h.border.subtle};
`,TC=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${h.bg.muted};
  border-top: 1px solid ${h.border.subtle};
  font-size: 10px;
  color: ${h.text.tertiary};
`,jC=x.div`
  padding: 10px 12px;
  border-top: 1px solid ${h.border.subtle};
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 10px;
  color: ${h.text.secondary};
  word-break: break-word;
  background: ${h.bg.surface};
`,RC=x.div`
  padding: 40px 20px;
  text-align: center;
  color: ${h.text.tertiary};
  font-size: 11px;
  line-height: 1.6;
`;function AC({filePath:e,activeChat:t,updateComposer:s,width:i}){const n=Gs(),[o,a]=l.useState(!1),c=l.useRef(null),[d,u]=l.useState(!1),[p,f]=l.useState(),[b,m]=l.useState(!1);l.useEffect(()=>{if(!n?.active)return;const k=E=>{const T=E.target;if(T&&(T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.tagName==="SELECT"||T.tagName==="BUTTON"||T.closest('button, a, [role="button"]')||T.isContentEditable))return;const _=E.metaKey||E.ctrlKey;_&&E.key==="c"?(E.preventDefault(),n.copy()):_&&E.key==="v"?(E.preventDefault(),n.paste(!1)):_&&E.key==="d"?(E.preventDefault(),n.copy(),n.paste(!0)):_&&E.key==="z"?(E.preventDefault(),n.undo()):_&&E.key==="g"?(E.preventDefault(),n.group()):_&&E.key==="a"?(E.preventDefault(),n.selectSiblings()):E.key==="Delete"||E.key==="Backspace"?n.selection&&(E.preventDefault(),n.deleteSelected()):E.key==="Escape"?(E.preventDefault(),n.selection?n.deselect():(G.trackEvent("design_mode_cancel",{via:"escape",edits:n.edits.length}),n.setActive(!1))):E.key==="Enter"&&E.shiftKey?(E.preventDefault(),n.nav("parent")):E.key==="Enter"?(E.preventDefault(),n.selectChildren()):E.key==="t"&&!_?(E.preventDefault(),n.insertSibling("text")):E.key==="r"&&!_?(E.preventDefault(),n.insertSibling("box")):E.key==="ArrowLeft"&&n.selection?(E.preventDefault(),n.nudge("x",E.shiftKey?-10:-1)):E.key==="ArrowRight"&&n.selection?(E.preventDefault(),n.nudge("x",E.shiftKey?10:1)):E.key==="ArrowUp"&&n.selection?(E.preventDefault(),n.nudge("y",E.shiftKey?-10:-1)):E.key==="ArrowDown"&&n.selection&&(E.preventDefault(),n.nudge("y",E.shiftKey?10:1))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[n]);const y=l.useCallback(async()=>{if(!n||!t||n.edits.length===0)return;G.trackEvent("design_mode_apply",{edits:n.edits.length});let k;const E=n.entrySnapshot;if(E){const $=await n.captureSnapshot();$&&(k=tc(E,$)||void 0)}const T=nc(n.edits,e,k),_={id:`dm-edits-${Date.now()}`,name:`Design edits: ${vC(n.edits)}`,type:"design-edit",content:T},R=t.composer.attachments||[];s(t.id,{attachments:[...R.filter($=>$.type!=="design-edit"),_]}),n.clearEdits(),n.setActive(!1)},[n,t,s,e]);if(!n||!n.active)return null;const g=n.edits.length,C=[{label:"Text",subtitle:"T",icon:"TextAa",onClick:()=>n.insertSibling("text")},{label:"Box",subtitle:"R",icon:"Add",onClick:()=>n.insertSibling("box")},{separator:!0},{label:"Group selection",subtitle:"⌘G",icon:"Folder",onClick:()=>n.group(),disabled:!n.selection}],v=l.useMemo(()=>g>0?nc(n.edits,e,p):"",[n.edits,e,p,g]),w=l.useCallback(async()=>{const k=n.entrySnapshot;if(!k){f(void 0);return}m(!0);try{const E=await n.captureSnapshot();f(E&&tc(k,E)||void 0)}finally{m(!1)}},[n]),S=n.selection?.descriptor.split(`
`).find(k=>k.startsWith("dom:"))??n.selection?.descriptor.split(`
`)[0]??"";return r.jsxs(kC,{$width:i,onMouseEnter:()=>n.setChromeDimmed(!0),onMouseLeave:()=>n.setChromeDimmed(!1),children:[r.jsxs(SC,{children:[r.jsxs(CC,{children:["Design",g>0?` (${g})`:""]}),r.jsx(fe,{variant:"default",size:"xs",onClick:()=>{G.trackEvent("design_mode_cancel",{via:"button",edits:g}),n.setActive(!1)},children:"Cancel"}),r.jsx("div",{ref:c,style:{display:"inline-flex"},children:r.jsx(fe,{variant:"default",size:"xs",iconRight:"CaretDown",onClick:()=>a(k=>!k),children:"Insert"})}),r.jsx(An,{open:o,onClose:()=>a(!1),anchorEl:c.current,items:C}),r.jsx(fe,{variant:"primary",size:"xs",disabled:g===0,onClick:y,children:"Apply via Claude"})]}),r.jsxs(_C,{children:[r.jsx(bC,{root:n.outline,onSelect:n.selectRef,onHover:n.hoverRef,onExpand:n.expandOutlineNode,onNav:n.nav}),n.selection?r.jsxs(r.Fragment,{children:[r.jsx(fC,{info:n.selection,setStyle:n.setStyle,setStyles:n.setStyles,setAttr:n.setAttr,sources:{getColors:n.getDocumentColors,getFonts:n.getDocumentFonts}}),r.jsxs(jC,{title:n.selection.descriptor,children:[S,n.selectionCount>1&&r.jsxs("span",{style:{marginLeft:8,color:"#8B5CF6"},children:["+",n.selectionCount-1," more"]})]})]}):r.jsxs(RC,{children:["Click an element in the preview to select it.",r.jsx("br",{}),r.jsx("br",{}),r.jsx("strong",{children:"Keyboard:"}),r.jsx("br",{}),"↵ select children · ⇧↵ parent · ⌘A siblings",r.jsx("br",{}),"⌘C / ⌘V / ⌘D copy / paste / duplicate",r.jsx("br",{}),"⌫ delete · ⌘Z undo · ⌘G group",r.jsx("br",{}),"T insert text · R insert box",r.jsx("br",{}),"←→↑↓ nudge 1px · ⇧←→↑↓ nudge 10px"]}),g>0&&r.jsxs(r.Fragment,{children:[r.jsxs($C,{onClick:()=>u(k=>!k),children:[r.jsx(Ue,{name:d?"CaretDownSmall":"CaretRightSmall",size:10}),r.jsxs("span",{children:["Debug · edit message (",g,")"]})]}),d&&r.jsxs(r.Fragment,{children:[r.jsxs(TC,{children:[r.jsx(fe,{variant:"default",size:"xs",icon:"Reload",disabled:b||!n.entrySnapshot,onClick:w,children:b?"Diffing…":"Reload with DOM diff"}),!n.entrySnapshot&&r.jsx("span",{children:"no entry snapshot"}),p!==void 0&&r.jsx("span",{children:"diff captured — stale after further edits"})]}),r.jsx(EC,{children:v})]})]})]})]})}const rc=x.div`
  display: flex;
  flex-direction: column;
  background: ${h.bg.surface};
  height: 100%;

  ${e=>e.$presenting&&`
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #000;
  `}
`,DC=x.div`
  flex: 1;
  background: ${e=>e.$presenting?"#000":h.bg.surface};
  position: relative;
  overflow: hidden;
  flex-basis: 0;
`,MC=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 2px;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
`,sc=x.div`
  width: 1px;
  height: 16px;
  background: ${h.border.default};
  margin: 0 6px;
`,LC=x.div`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 280px;
  max-width: 360px;
`,PC=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,OC=x.textarea`
  width: 100%;
  min-height: 60px;
  padding: 8px;
  border: 1px solid ${h.border.default};
  border-radius: 6px;
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  background: ${h.bg.surface};
  color: ${h.text.primary};

  &:focus {
    outline: none;
    border-color: ${h.accent.primary};
  }
`,FC=x.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;x.div`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${h.text.secondary};
`;const IC=x.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  z-index: 10000;
  pointer-events: none;
  opacity: 1;
  transition: opacity 1.5s ease 2s;
  
  &.hidden {
    opacity: 0;
  }
`;function zC(e,t,s,i,n,o=8){let a=e.x*t+s.x,c=(e.y+e.height)*t+s.y+o;if(i){const d=i.scrollWidth,u=i.scrollHeight;a=Math.max(o,Math.min(a,d-n.width-o)),c=Math.max(o,Math.min(c,u-n.height-o))}return{x:a,y:c}}function NC(){const e=window,t=e.SpeechRecognition??e.webkitSpeechRecognition;if(!t)return null;const s=new t;return s.continuous=!0,s.interimResults=!1,s.lang=navigator.language||"en-US",s}const BC=500,HC=1e3,UC=1e3;function WC(e,t,s){const[i,n]=l.useState(!1),o=l.useRef(t),a=l.useRef(s);l.useEffect(()=>{o.current=t},[t]),l.useEffect(()=>{a.current=s},[s]);const c=l.useRef(!1),d=l.useRef(null),u=l.useRef(""),p=l.useRef({start:0,end:0}),f=l.useRef(!1),b=l.useRef(null),m=l.useRef(""),y=l.useRef(!1),g=l.useRef(null);return l.useEffect(()=>{const C=e.current;if(!C)return;const v=()=>{d.current&&(clearTimeout(d.current),d.current=null)},w=()=>{a.current(u.current),requestAnimationFrame(()=>{const R=e.current;R&&(R.selectionStart=p.current.start,R.selectionEnd=p.current.end)});const _=NC();if(_){m.current="",y.current=!1,_.onresult=R=>{let $="";for(let M=R.resultIndex;M<R.results.length;M++){const L=R.results[M];L.isFinal&&($+=L[0].transcript)}$&&(m.current+=$)},_.onend=()=>{b.current=null,y.current=!1;const R=m.current.trim();if(!R)return;const $=u.current,{start:M,end:L}=p.current,z=$.slice(0,M),J=$.slice(L),I=z&&!/\s$/.test(z)?" ":"",te=z+I+R+J;a.current(te);const ce=(z+I+R).length;requestAnimationFrame(()=>{const ue=e.current;ue&&(ue.selectionStart=ue.selectionEnd=ce,ue.focus())})},_.onerror=()=>{b.current=null,y.current=!1},b.current=_,f.current=!0,n(!0);try{_.start()}catch{}}},S=()=>{f.current=!1,n(!1),y.current=!0,g.current=setTimeout(()=>{g.current=null,b.current?.stop(),b.current||(y.current=!1)},UC)},k=_=>{if(f.current||y.current){_.preventDefault(),_.stopPropagation();return}if(_.code!=="Space"||_.metaKey||_.ctrlKey||_.altKey||c.current)return;c.current=!0,u.current=o.current,p.current={start:C.selectionStart??o.current.length,end:C.selectionEnd??o.current.length};const R=o.current.trim()===""?BC:HC;d.current=setTimeout(()=>{d.current=null,c.current&&w()},R)},E=_=>{_.code==="Space"&&(c.current=!1,v(),f.current&&(_.preventDefault(),S()))},T=()=>{c.current=!1,v(),f.current&&(f.current=!1,n(!1),m.current="",b.current?.abort(),b.current=null,y.current=!1)};return C.addEventListener("keydown",k),C.addEventListener("keyup",E),C.addEventListener("blur",T),()=>{C.removeEventListener("keydown",k),C.removeEventListener("keyup",E),C.removeEventListener("blur",T),v(),g.current&&(clearTimeout(g.current),g.current=null);const _=b.current;_&&(_.onresult=null,_.onend=null,_.onerror=null,_.abort(),b.current=null),f.current=!1,y.current=!1}},[e]),{isDictating:i}}function GC({pending:e,position:t,commentText:s,onChangeText:i,onSend:n,onCancel:o,onSaveComment:a}){const[c,d]=$t.useState(!1),u=async()=>{if(!(!a||c||!s.trim())){d(!0);try{await a()}finally{d(!1)}}},p=l.useRef(null);l.useEffect(()=>{p.current?.focus()},[e.selector]);const{isDictating:f}=WC(p,s,i);return r.jsxs(LC,{$x:t.x,$y:t.y,children:[r.jsxs(PC,{children:[r.jsx("span",{style:{fontWeight:600,fontSize:13},children:"Comment"}),r.jsx(_t,{icon:"X",size:20,variant:"ghost",onClick:o})]}),r.jsxs("div",{style:{position:"relative"},children:[f&&r.jsx(Wb,{}),r.jsx(OC,{ref:p,value:s,onChange:b=>i(b.target.value),onKeyDown:b=>{(b.metaKey||b.ctrlKey)&&b.key==="Enter"&&(b.preventDefault(),b.stopPropagation(),n?n():u())},placeholder:f?"":"Describe the issue or suggestion...",style:f?{...Hb,color:"transparent",caretColor:"transparent"}:void 0,autoFocus:!0})]}),r.jsxs(FC,{children:[a&&r.jsx(fe,{size:"sm",onClick:u,disabled:c||!s.trim(),title:"Save as a comment — teammates can see it and reply",children:"Comment"}),r.jsx("div",{style:{flex:1}}),n&&r.jsx(fe,{variant:"primary",size:"sm",onClick:n,disabled:!s.trim(),children:"Send to Claude"})]})]})}function JC(e){if(!e)return"";const t=/^text:\s+"([^"]+)"/m.exec(e);return t?t[1].replace(/…$/,"").slice(0,60):""}function KC(e){if(!e)return"";const t=/^dom:\s*(.+)$/m.exec(e)?.[1];if(!t)return"";const s=t.split(" › ").pop()??"",i=/\[(\d+)\/(\d+)\]$/.exec(s);return i?`${i[1]}/${i[2]}`:""}const XC={title:"Discard drawing?",message:"Your strokes and notes will be lost.",confirmLabel:"Discard",danger:!0},Qi="#DC2626",eo=4,qC=x.canvas`
  position: absolute;
  inset: 0;
  z-index: 50;
  pointer-events: ${e=>e.$interactive?"auto":"none"};
  cursor: ${e=>e.$interactive?"crosshair":"default"};
  /* Let wheel events pass through to the iframe so the page scrolls while drawing. */
  touch-action: none;
`,VC=x.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border: 1px solid #d1cfc5;
  border-radius: 12px;
  padding: 5px 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  z-index: 110;
  display: flex;
  align-items: center;
  gap: 6px;
`,gi=x.div`
  width: 14px;
  flex-shrink: 0;
`,YC=x.div`
  display: flex;
  background: #f0eee6;
  border-radius: 7px;
  padding: 2px;
`,ic=x.kbd`
  font-size: 9px;
  font-family: ui-monospace, monospace;
  opacity: ${e=>e.$active?.7:.45};
  margin-left: 3px;
  background: transparent;
  border: none;
`,ZC=x.span`
  font-size: 11px;
  font-weight: 430;
  color: #87867f;
  white-space: nowrap;
`,ta="#FFF4B8",na="#E8C547",QC=x.div`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  background: ${ta};
  border: 1px solid ${na};
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: inherit;
  color: #111;
  z-index: 60;
  max-width: 280px;
  word-break: break-word;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`,e2=x.textarea`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  background: ${ta};
  border: 1px solid ${na};
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: inherit;
  line-height: 1.4;
  color: #111;
  z-index: 70;
  width: 240px;
  min-height: 60px;
  outline: none;
  resize: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;async function t2(e,t,s,i){const n=Ve(e);if(!n)throw new Error("No viewer handle for iframe");const a=(await n.capturePage({hq:!0,viewport:!0})).toDataURL(),c=new Image;await new Promise((y,g)=>{c.onload=()=>y(),c.onerror=()=>g(new Error("Failed to load page image")),c.src=a});const d=i.clientWidth||1,u=c.naturalWidth||d,p=c.naturalHeight||i.clientHeight||1,f=u/d,b=document.createElement("canvas");b.width=u,b.height=p;const m=b.getContext("2d");m.drawImage(c,0,0),m.strokeStyle=Qi,m.lineWidth=eo*f,m.lineCap="round",m.lineJoin="round";for(const y of t)if(!(y.points.length<2)){m.beginPath(),m.moveTo(y.points[0].x*f,y.points[0].y*f);for(let g=1;g<y.points.length;g++)m.lineTo(y.points[g].x*f,y.points[g].y*f);m.stroke()}m.font=`${Math.round(14*f)}px sans-serif`;for(const y of s){const g=y.text.split(`
`),C=g.map(S=>m.measureText(S).width),v=Math.min(Math.max(...C)+28*f,280*f),w=(g.length*18+20)*f;m.fillStyle=ta,m.fillRect(y.x*f,y.y*f,v,w),m.strokeStyle=na,m.lineWidth=f,m.strokeRect(y.x*f,y.y*f,v,w),m.fillStyle="#111",g.forEach((S,k)=>m.fillText(S,(y.x+14)*f,(y.y+22+k*18)*f))}return{dataUrl:b.toDataURL("image/png"),aspectRatio:u/p}}const n2=l.forwardRef(function({containerRef:t,webviewRef:s,projectPath:i,filePath:n,activeChat:o,upsertComposerAttachment:a,onExit:c},d){const[u,p]=l.useState("draw"),[f,b]=l.useState(!1),[m,y]=l.useState([]),[g,C]=l.useState([]),[v,w]=l.useState(null),[S,k]=l.useState({x:100,y:100}),[E,T]=l.useState(!1),_=l.useRef(null),R=l.useRef(!1),$=l.useRef(null),M=l.useRef([]),L=l.useRef(null),z=l.useCallback(()=>{const U=_.current;if(!U)return;const D=U.getContext("2d");D.clearRect(0,0,U.width,U.height),D.strokeStyle=Qi,D.lineWidth=eo,D.lineCap="round",D.lineJoin="round";for(const O of m)if(!(O.points.length<2)){D.beginPath(),D.moveTo(O.points[0].x,O.points[0].y);for(let P=1;P<O.points.length;P++)D.lineTo(O.points[P].x,O.points[P].y);D.stroke()}},[m]);l.useEffect(()=>{z()},[z]);const J=l.useRef(z);J.current=z,l.useEffect(()=>{const U=t.current,D=_.current;if(!U||!D)return;const O=()=>{D.width=U.clientWidth,D.height=U.clientHeight,J.current()};O();const P=new ResizeObserver(O);return P.observe(U),()=>P.disconnect()},[t]);const I=U=>{const D=_.current.getBoundingClientRect();return{x:U.clientX-D.left,y:U.clientY-D.top}},te=U=>{if(u!=="draw")return;R.current=!0;const D=I(U);$.current={points:[D]},U.target.setPointerCapture(U.pointerId)},ce=U=>{const D=I(U);if(k(D),!R.current||!$.current)return;$.current.points.push(D);const P=_.current.getContext("2d"),B=$.current.points,ne=B.length;P.strokeStyle=Qi,P.lineWidth=eo,P.lineCap="round",P.beginPath(),P.moveTo(B[ne-2].x,B[ne-2].y),P.lineTo(B[ne-1].x,B[ne-1].y),P.stroke()},ue=()=>{if(!R.current)return;R.current=!1;const U=$.current;$.current=null,U&&U.points.length>1&&(y(D=>[...D,U]),M.current.push("stroke"))},me=l.useCallback(U=>{const D=Ve(s.current);D&&D.executeJavaScript(`window.scrollBy(${U.deltaX}, ${U.deltaY})`).catch(()=>{})},[s]),de=l.useCallback(()=>{const U=M.current.pop();U==="stroke"?y(D=>D.slice(0,-1)):U==="note"&&C(D=>D.slice(0,-1))},[]),De=l.useRef(v);De.current=v;const Re=l.useCallback(()=>{const U=De.current;U&&U.text.trim()&&(C(D=>[...D,{x:U.x,y:U.y,text:U.text.trim()}]),M.current.push("note")),w(null)},[]),je=l.useRef(S);je.current=S,l.useEffect(()=>{if(!f)return;const U=window,D=U.SpeechRecognition??U.webkitSpeechRecognition;if(!D){b(!1);return}const O=new D;O.continuous=!0,O.interimResults=!0,O.lang=navigator.language||"en-US";let P=null,B="";O.onresult=ne=>{let se="";for(let Me=ne.resultIndex;Me<ne.results.length;Me++){const Fe=ne.results[Me][0].transcript;ne.results[Me].isFinal?B+=Fe:se+=Fe}const Oe=(B+se).trim();Oe&&(P||(P={...je.current}),se===""&&B.trim()?(C(Me=>[...Me,{x:P.x,y:P.y,text:B.trim()}]),M.current.push("note"),w(null),P=null,B=""):w({x:P.x,y:P.y,text:Oe}))},O.onend=()=>{try{O.start()}catch{}},O.onerror=()=>{b(!1)};try{O.start()}catch{b(!1)}return()=>{O.onresult=null,O.onend=null,O.stop()}},[f]);const{showToast:H}=bt(),ke=Yn(),X=m.length>0||g.length>0,Se=l.useRef(!1),oe=l.useCallback(async()=>{if(Se.current)return!1;if(!X)return!0;Se.current=!0;try{return await ke(XC)}finally{Se.current=!1}},[X,ke]);l.useImperativeHandle(d,()=>({requestDiscard:oe}),[oe]);const he=l.useCallback(async()=>{await oe()&&c()},[oe,c]);l.useEffect(()=>{const U=D=>{const O=D.metaKey||D.ctrlKey;if(Se.current)return;const P=document.activeElement;if(!(P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"||P.isContentEditable))){if(O&&D.key==="1"){D.preventDefault(),p("draw");return}if(O&&D.key==="2"){D.preventDefault(),p("click");return}if(O&&D.key.toLowerCase()==="m"){D.preventDefault(),b(B=>!B);return}if(O&&D.key.toLowerCase()==="z"){D.preventDefault(),de();return}if(v){D.key==="Escape"&&(D.preventDefault(),w(null),b(!1));return}if(D.key==="Escape"){D.preventDefault(),he();return}u==="draw"&&!O&&!D.altKey&&D.key.length===1&&(D.preventDefault(),w({x:S.x,y:S.y,text:D.key}),requestAnimationFrame(()=>{const B=L.current;if(!B)return;B.focus();const ne=B.value.length;B.setSelectionRange(ne,ne)}))}};return window.addEventListener("keydown",U,!0),()=>window.removeEventListener("keydown",U,!0)},[v,u,S,de,he]);const pe=l.useCallback(async()=>{const U=s.current,D=t.current;if(!U||!D||m.length===0&&g.length===0)return null;const{dataUrl:O,aspectRatio:P}=await t2(U,m,g,D),B=await fetch(O).then(Pe=>Pe.blob()),ne=`draw-${crypto.randomUUID()}.png`,Oe=(await G.uploadData(i,[{type:"binary",name:ne,mimeType:"image/png",blob:B}],await bn())).files?.[0]?.path;if(!Oe)throw new Error("drawing upload failed");const Me=O.slice(O.indexOf(",")+1);Jf(Oe,{mediaType:"image/png",base64:Me}),yo(Oe,B);const Fe=g.map(Pe=>`- ${Pe.text}`).join(`
`);return{id:`draw-${Date.now()}`,name:`Drawing on ${n.split("/").pop()}`,type:"image",path:Oe,aspectRatio:P,content:`Annotated screenshot of ${n}.
${m.length} stroke(s), ${g.length} note(s).
${Fe}`}},[m,g,n,i,s,t]),Le=async()=>{if(o){T(!0);try{const U=await pe();U&&gr(o,a,U),c()}catch(U){Tt(U,"screenshot"),H("Couldn’t capture screenshot. Please try again.","error")}finally{T(!1)}}},re=async()=>{T(!0);try{const U=await pe();U&&window.dispatchEvent(new CustomEvent("autosend-attachments",{detail:{label:"Apply drawing",attachments:[U]}})),c()}catch(U){Tt(U,"screenshot"),H("Couldn’t capture screenshot. Please try again.","error")}finally{T(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(qC,{ref:_,$interactive:u==="draw",onPointerDown:te,onPointerMove:ce,onPointerUp:ue,onPointerLeave:ue,onWheel:me}),g.map((U,D)=>r.jsx(QC,{$x:U.x,$y:U.y,children:U.text},D)),v&&r.jsx(e2,{ref:L,$x:v.x,$y:v.y,value:v.text,onChange:U=>w({...v,text:U.target.value}),onKeyDown:U=>{U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),Re()),U.key==="Escape"&&(U.preventDefault(),w(null),b(!1))},onBlur:Re}),r.jsxs(VC,{children:[r.jsx(_t,{icon:"X",size:28,variant:"ghost",title:"Discard",onClick:()=>void he()}),r.jsx(_t,{icon:"Reload",size:28,variant:"ghost",title:"Undo (⌘Z)",onClick:de,iconStyle:{transform:"scaleX(-1) rotate(45deg)"}}),r.jsx(gi,{}),r.jsxs(YC,{children:[r.jsxs(fe,{active:u==="draw",variant:"ghost",size:"xs",onClick:()=>p("draw"),children:["Draw",r.jsx(ic,{$active:u==="draw",children:"⌘1"})]}),r.jsxs(fe,{active:u==="click",variant:"ghost",size:"xs",onClick:()=>p("click"),children:["Click",r.jsx(ic,{$active:u==="click",children:"⌘2"})]})]}),r.jsx(gi,{}),r.jsx(_t,{icon:"Voice",variant:f?"primary":"ghost",title:"Voice (⌘M)",onClick:()=>b(U=>!U)}),u==="draw"&&r.jsx(ZC,{children:"Type anywhere to add a note"}),r.jsx(gi,{}),r.jsx(fe,{variant:"ghost",size:"xs",onClick:Le,disabled:!X||E,children:"Queue"}),r.jsx(fe,{variant:"primary",size:"xs",onClick:re,disabled:!X||E,children:"Send"})]})]})});function r2({filePath:e}){const{projectPath:t,serverPort:s,updateComposer:i,upsertComposerAttachment:n,openFile:o}=vt(),a=l.useRef(null),c=mo(),d=td(),u=nn(),p=l.useRef(null),[f,b]=l.useState(!1),[m,y]=l.useState(null),[g,C]=l.useState(!1),[v,w]=l.useState(!1);Nt(v);const S=l.useRef(null),k=l.useRef(null),E=go(),T=Zt(),_=pd(),{showToast:R}=bt(),{webviewReady:$,readyGen:M,fixedSize:L,callbacksRef:z}=em(a,e),J=gt("omelette_edit_delete").on,I=dS(a,M,t,e,u,n),te=_b(),ce=l.useRef(null),ue=l.useRef({}),me=l.useRef({zoom:1,offset:{x:0,y:0}}),de=l.useRef(!1),De=l.useCallback(j=>{de.current!==j&&(de.current=j,window.dispatchEvent(new CustomEvent("html-viewer:visible-change",{detail:{visible:j}})))},[]);l.useEffect(()=>()=>De(!1),[De]);const Re=l.useCallback(j=>{ce.current=j,De(!!j)},[De]),je=te&&_,{setCommentMode:H,setEditMode:ke}=I;l.useEffect(()=>{const j=Ve(a.current);if(!(!j||M===0)&&je)return H(!1),ke(!1),ue.current={},j.executeJavaScriptUnchecked("window.__setHoverTrack && window.__setHoverTrack(true)"),()=>{Re(null),j.executeJavaScriptUnchecked("window.__setHoverTrack && window.__setHoverTrack(false)")}},[je,M,Re,H,ke]),Ye("live-voice:chunk",j=>{const K=j.detail,ee=ce.current;if(!ee||!u)return;const F=qi(ee.selector,"comment");let W=ue.current[ee.selector];if(W===void 0){const xt=(u.composer?.attachments||[]).find($e=>$e.id===F),Q=xt?.content?.match(/\nFeedback: ([\s\S]+)$/);W=Q?Q[1]:xt?.name??""}const A=K.chunk,N=W&&A&&!/\s$/.test(W)&&!/^\s/.test(A),Y=W+(N?" ":"")+A;ue.current[ee.selector]=Y;const xe=Y.trim();xe&&(n(u.id,{id:F,name:xe,type:"comment",content:`File: ${e}
Element: ${ee.descriptor||ee.selector}
Feedback: ${xe}`}),Ve(a.current)?.executeJavaScriptUnchecked(`window.__addCommentHighlight && window.__addCommentHighlight(${JSON.stringify(ee.selector)})`)),K.consumed=!0;const Ce=p.current,_e=Ce?.getBoundingClientRect(),{zoom:Te,offset:He}=me.current;K.target={x:(_e?.left??0)-(Ce?.scrollLeft??0)+(ee.rect.x+ee.rect.width/2)*Te+He.x,y:(_e?.top??0)-(Ce?.scrollTop??0)+(ee.rect.y+ee.rect.height/2)*Te+He.y}});const[X,Se]=l.useState(!1),oe=l.useRef(null),he=I.commentMode||I.editMode||X||te,pe=l.useCallback(async()=>X?await oe.current?.requestDiscard()===!1?!1:(Se(!1),!0):!0,[X]);l.useEffect(()=>{window.dispatchEvent(new CustomEvent("unified-edit-mode-changed",{detail:{active:I.editMode}}))},[I.editMode]),l.useEffect(()=>()=>{window.dispatchEvent(new CustomEvent("unified-edit-mode-changed",{detail:{active:!1}}))},[]),Ye("unified-edit-mode-exit",()=>{I.setEditMode(!1)});const{isMidInteraction:Le}=fS(a,he),[re,U]=l.useState(!1),D=l.useRef(e);D.current=e;const O=l.useRef(Le);O.current=Le;const P=l.useRef(he);P.current=he,l.useEffect(()=>{const j=K=>{const ee=K.detail;ee.target==="user"&&Sr(ee.filePath).barePath===D.current&&P.current&&O.current()&&(ee.target="deferred",U(!0))};return window.addEventListener("agent-show-file",j,!0),()=>window.removeEventListener("agent-show-file",j,!0)},[]);const B=l.useRef(null),ne=l.useRef(null);B.current!==e&&(B.current=e,ne.current=Kf(e),ne.current!=null&&requestAnimationFrame(()=>Xf(e)));const[,se]=l.useReducer(j=>j+1,0);l.useEffect(()=>{const j=K=>{const ee=K.detail;ee.filePath===D.current&&(ne.current=ee.fragment,se())};return window.addEventListener("agent-show-fragment",j),()=>window.removeEventListener("agent-show-fragment",j)},[]);const Oe=ne.current;id(e,a,l.useCallback(()=>(U(!0),I.invalidateSrcDeltas(),!0),[I.invalidateSrcDeltas])),l.useEffect(()=>{U(!1)},[e,M]),l.useEffect(()=>{if(!e)return;const j=K=>{const ee=K.detail;if(ee.filePath!==e)return;Ve(a.current)?.executeJavaScriptUnchecked(`window.__fastModeScompUpdate&&window.__fastModeScompUpdate(${JSON.stringify(ee.name)},${JSON.stringify(ee.kind)},${JSON.stringify(ee.content)},${ee.streaming?"true":"false"})`)};return window.addEventListener("fast-mode-scomp",j),()=>window.removeEventListener("fast-mode-scomp",j)},[e]);const{fastModeActive:Me,handleStop:Fe}=R1(e),Pe=pS(a,$,t,e,!T||m!==null);z.current={...I.lifecycleCallbacks,...Pe.lifecycleCallbacks,onCommentHover:Re,onEditModeChat:j=>{ad()&&(!T||!Pe.active||!u||!j.trim()||window.dispatchEvent(new CustomEvent("composer-set-text",{detail:{text:`Update the tweaks panel: ${j.slice(0,500)}`}})))}};const We=mS(a,M,t,e),tt=!!We.draft,Ee=We.draft?.length??0,Je=We.draft?.[We.slideIndex]??"",[Ie,le]=l.useState(null),[q,we]=l.useState(140),ie=l.useRef(Ie);ie.current=Ie,l.useEffect(()=>()=>{const j=ie.current;j&&!j.closed&&j.close()},[]);const Ge=()=>{le(j=>(j&&!j.closed&&j.close(),null))},{zoomLevel:ze,zoomMenuOpen:qe,setZoomMenuOpen:Ke,zoomMenuItems:Xe,fixedSizeOffset:rt,autoZoom:yt}=Qk(a,p,$,L);me.current={zoom:ze,offset:rt},tS(a,e,u,i),IS(a,M,ze,rt);const St=l.useRef(0),pt=l.useRef(null),wt=l.useCallback(()=>{const j=pt.current;if(!j)return;Ve(a.current)?.executeJavaScript(`window.__removeCommentHighlight && window.__removeCommentHighlight(${JSON.stringify(j.selector)})`),pt.current=null},[]),ft=l.useRef(We.slideIndex);ft.current=We.slideIndex;const Ct=l.useRef(We.sendKey);Ct.current=We.sendKey;const jt=l.useCallback((j,K,ee)=>{const F=Ve(a.current);F&&F.executeJavaScript(`(function(){var s=${JSON.stringify(j)};var h=${JSON.stringify(K)};var d=${JSON.stringify(ee)};window.__addCommentHighlight&&window.__addCommentHighlight(s,h,d);var el=(window.__findCommentTarget&&window.__findCommentTarget(s,h,d))||document.querySelector(s);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});})()`)},[]);Ye("comment-highlight-element",j=>{const{selector:K,filePath:ee,sticky:F,descriptor:W}=j.detail,A=JC(W),N=KC(W),Y=pt.current,xe=!!Y&&Y.selector===K&&Y.hint===A&&Y.domSig===N;if(F&&Y?.sticky&&xe){wt();return}if(!F&&Y?.sticky)return;if(ee&&ee!==e){if(!F)return;o(ee);return}const Ce=Ve(a.current);if(!Ce)return;Y&&!xe&&Ce.executeJavaScript(`window.__removeCommentHighlight && window.__removeCommentHighlight(${JSON.stringify(Y.selector)})`);const _e=++St.current;pt.current={selector:K,hint:A,domSig:N,sticky:F,gen:_e};const Te=()=>pt.current?.gen===_e;if(!F){jt(K,A,N);return}(async()=>{const He=`(function(){
        try {
          var s = ${JSON.stringify(K)};
          var h = ${JSON.stringify(A)};
          var d = ${JSON.stringify(N)};
          var el = (window.__findCommentTarget && window.__findCommentTarget(s, h, d)) || document.querySelector(s);
          if (!el) return null;
          var visible = el.getClientRects().length > 0;
          var hasSlideIdx = typeof window.__omeletteSlideIdx === 'number';
          if (visible || !hasSlideIdx) return {visible: visible, hasSlideIdx: hasSlideIdx};
          var screens = Array.prototype.slice.call(
            document.querySelectorAll('[data-screen-label]')
          ).filter(function(n){
            return !n.parentElement || !n.parentElement.closest('[data-screen-label]');
          });
          var owner = null;
          var cur = el;
          while (cur && cur !== document.body) {
            if (screens.indexOf(cur) !== -1) { owner = cur; break; }
            cur = cur.parentElement;
          }
          return {
            visible: false,
            hasSlideIdx: true,
            screenIndex: owner ? screens.indexOf(owner) : undefined
          };
        } catch (e) { return null; }
      })()`,Qe=()=>Ce.executeJavaScript(He).catch(()=>null),xt=($e,ot)=>new Promise(lt=>{const At=performance.now(),Fr=()=>{if(!Te())return lt(!1);if(ft.current!==$e)return lt(!0);if(performance.now()-At>ot)return lt(!1);setTimeout(Fr,30)};Fr()}),Q=await Qe();if(Q&&!Q.visible&&Q.hasSlideIdx&&typeof Q.screenIndex=="number"&&Te()){let $e=ft.current<Q.screenIndex?"ArrowRight":"ArrowLeft",ot=!1;const lt=new Set([ft.current]);for(let At=0;At<50;At++){if(!Te())return;const Fr=ft.current;Ct.current($e);const yp=await xt(Fr,600);if(!Te())return;if(!yp){if(ot)break;ot=!0,$e=$e==="ArrowRight"?"ArrowLeft":"ArrowRight",lt.clear(),lt.add(ft.current);continue}if(lt.has(ft.current))break;lt.add(ft.current);const sa=await Qe();if(!sa||sa.visible)break}}Te()&&jt(K,A,N)})()}),Ye("comment-clear-highlight",()=>{pt.current?.sticky||wt()}),l.useEffect(()=>wt,[e,M,wt]);const Ne=Gs(),V=l.useRef(),ae=l.useCallback(async j=>{X&&!await pe()||(Ne?.active&&Ne.setActive(!1),I.setCommentMode(!1),I.setEditMode(!1),tt&&j==="tab"&&le(PS()),y(j),C(!1),j==="fullscreen"&&document.documentElement.requestFullscreen?.().catch(()=>{}),clearTimeout(V.current),V.current=window.setTimeout(()=>C(!0),3e3))},[tt,Ne,I,X,pe]),ge=l.useCallback(()=>{y(null),Ge(),document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})},[]);Ye("keydown",j=>{if(j.key!=="Escape")return;const K=I;if(K.pendingComment){j.preventDefault(),K.handleCancelComment();return}if(K.pendingSelection){j.preventDefault(),K.finalizeSelection();return}if(K.commentMode){j.preventDefault(),K.setCommentMode(!1);return}if(K.editMode){j.preventDefault(),K.setEditMode(!1);return}}),Ye("keydown",j=>{if(!J)return;const K=I;if(!K.editMode||j.key!=="Delete"&&j.key!=="Backspace"||!K.pendingSelection)return;const ee=j.target;ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable)||(j.preventDefault(),K.deleteSelection())}),Ye("keydown",j=>{const K=I;if(!K.commentMode||K.pendingComment||j.key==="Escape"||j.ctrlKey||j.metaKey||j.altKey||j.key==="Shift"||j.key==="Alt"||j.key==="Control"||j.key==="Meta")return;const ee=j.target;if(ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable))return;const F=JSON.stringify({key:j.key,code:j.code,keyCode:j.keyCode,shiftKey:j.shiftKey,repeat:j.repeat,bubbles:!0,cancelable:!0});Ve(a.current)?.executeJavaScript(`document.dispatchEvent(new KeyboardEvent('keydown',${F}))`).catch(()=>{})}),Ye("keydown",j=>{(j.metaKey||j.ctrlKey&&!j.altKey)&&!j.repeat&&j.key==="\\"&&(j.preventDefault(),m?ge():ae("tab"))}),l.useEffect(()=>{if(!m)return;const j=a.current,K=()=>{j?.contentWindow?.focus()};requestAnimationFrame(K);const ee=W=>{if(W.key==="Escape"){W.preventDefault(),W.stopPropagation(),ge();return}if(W.ctrlKey||W.metaKey||W.key==="Shift"||W.key==="Alt"||W.key==="Control"||W.key==="Meta")return;const A=JSON.stringify({key:W.key,code:W.code,keyCode:W.keyCode,shiftKey:W.shiftKey,altKey:W.altKey,repeat:W.repeat,bubbles:!0,cancelable:!0});Ve(j)?.executeJavaScript(`document.dispatchEvent(new KeyboardEvent('keydown',${A}))`).catch(()=>{}),K()};window.addEventListener("keydown",ee,!0);const F=W=>{W.data?.type==="escape-pressed"&&ge()};return window.addEventListener("message",F),Ve(j)?.executeJavaScript("(function(){if(document.__omPresent)return;document.__omPresent=1;document.addEventListener('keydown',function(e){if(e.key==='Escape'||((e.metaKey||(e.ctrlKey&&!e.altKey))&&e.key==='\\\\'))window.parent.postMessage({type:'escape-pressed'},'*')});document.addEventListener('click',function(e){if(!document.__omPresentActive)return;var t=e.target;while(t&&t!==document.body){var n=t.tagName;if(n==='A'||n==='BUTTON'||n==='INPUT'||n==='SELECT'||n==='TEXTAREA'||n==='LABEL')return;t=t.parentElement}document.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',code:'ArrowRight',bubbles:true,cancelable:true}))})})();document.__omPresentActive=1").catch(()=>{}),()=>{window.removeEventListener("keydown",ee,!0),window.removeEventListener("message",F),Ve(j)?.executeJavaScript("document.__omPresentActive=0").catch(()=>{})}},[m,ge,M]);const Be=l.useRef(document);Ye("fullscreenchange",()=>{m==="fullscreen"&&(document.fullscreenElement||ge())},Be);const[Ae,nt]=l.useState(null);l.useLayoutEffect(()=>{nt(document.getElementById(qf))},[]);const Ze=[{label:"In this tab",icon:"Expand",subtitle:tt?"Speaker notes in popup window":void 0,onClick:()=>void ae("tab")},{label:"Fullscreen",icon:"Play",onClick:()=>void ae("fullscreen")},{label:"New tab",icon:"Globe",onClick:()=>G.openExternal(ht)}],st=G.getPreviewUrl(s,Oe?e+Oe:e,{forIframe:!0,urlLike:!0,srcmap:!0}),ht=new URL(G.getPreviewUrl(s,Oe?e+Oe:e,{urlLike:!0}),window.location.origin).href,Rt=l.useCallback(async()=>{const j=I.pendingComment,K=I.commentText.trim();if(!(!t||!j||!K))try{await at().createComment({projectId:t,body:K,filePath:e,elementSelector:j.selector,elementDescriptor:j.descriptor}),G.trackEvent("comment_created",{tethered:!0}),R("Comment saved"),window.dispatchEvent(new CustomEvent("comment-created")),I.handleCancelComment()}catch(ee){Tt(ee,"save comment"),R("Couldn’t save comment. Please try again.","error")}},[t,e,I.pendingComment,I.commentText,I.handleCancelComment,R]),Dt=l.useRef(!1);if(l.useEffect(()=>{if(!I.editMode){Dt.current=!1;return}const j=Ve(a.current);j&&(Hk(j).then(()=>j.executeJavaScriptUnchecked("window.__knobsSelectBody && window.__knobsSelectBody()")),Dt.current=!0)},[I.editMode,M,a]),!c||!d)return r.jsx(rc,{children:r.jsx("span",{style:{fontSize:12,color:h.text.primary},children:"Loading..."})});const Z=()=>{Ve(a.current)?.reload(),U(!1)},be=ze,ve=I.pendingComment?zC(I.pendingComment.rect,be,rt,p.current,{width:360,height:200}):null,ye=r.jsxs("div",{style:{display:"flex",flex:1,minHeight:0,overflow:"hidden"},children:[r.jsxs(DC,{ref:p,$presenting:!!m,style:L?{display:"flex",overflow:"auto"}:void 0,children:[!m&&r.jsx(Zk,{projectPath:t,filePath:e,externalUrl:ht}),r.jsx("div",{style:L?{width:L.width*ze,height:L.height*ze,overflow:"hidden",flexShrink:0,margin:"auto"}:{width:"100%",height:"100%"},children:r.jsx("iframe",{"data-testid":"html-viewer-iframe",ref:a,src:st,allow:"camera; microphone; geolocation",style:{width:"100%",height:"100%",border:"none",background:"transparent",colorScheme:"normal"},sandbox:`allow-scripts allow-forms allow-popups allow-modals allow-downloads${Rn()?" allow-same-origin":""}`})}),X&&r.jsx(n2,{containerRef:p,webviewRef:a,projectPath:t,filePath:e,activeChat:u,upsertComposerAttachment:n,onExit:()=>Se(!1),ref:oe}),I.pendingComment&&ve&&r.jsx(GC,{pending:I.pendingComment,position:ve,commentText:I.commentText,onChangeText:I.setCommentText,onSend:T?I.handleCommentSend:null,onCancel:I.handleCancelComment,onSaveComment:Rt},I.pendingComment.selector),m&&r.jsx(IC,{className:g?"hidden":"",children:"Press Esc to exit"}),r.jsx(P1,{active:Me,onStop:Fe})]}),T&&r.jsx(Nk,{open:I.editMode,pendingSelection:I.pendingSelection,webviewRef:a,scheduleWrite:I.scheduleWrite,deleteSelection:J?I.deleteSelection:void 0})]});return r.jsxs(rc,{$presenting:!!m,children:[!m&&!E&&r.jsxs(Is,{children:[!T&&r.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:26,padding:"0 10px",fontSize:11,fontWeight:500,color:h.text.secondary,background:h.bg.muted,borderRadius:6},children:_?"Comment only":"View only"}),r.jsx(_t,{icon:"Reload",size:26,iconBold:!0,iconStyle:{transform:"scaleX(-1) rotate(90deg)"},variant:"ghost",onClick:Z,title:re?"New version available — click to reload":"Reload",style:re?{background:h.accent.primary,color:h.text.inverse}:void 0}),T&&r.jsx(TS,{projectPath:t}),re&&!E&&r.jsx("span",{style:{fontSize:11,color:h.accent.primary,fontWeight:600,marginLeft:2},children:"Reload for new version"}),r.jsx("div",{style:{flex:1}}),Pe.available?T&&r.jsxs(r.Fragment,{children:[r.jsxs(MC,{$active:Pe.active,onClick:()=>Pe.setActive(!Pe.active),title:Pe.saving?"Saving…":"Toggle tweak controls",children:[r.jsx("span",{style:{fontSize:11,color:Pe.active?h.text.primary:h.text.tertiary},children:"Tweaks"}),r.jsx(bo,{checked:Pe.active,onChange:Pe.setActive,style:{transform:"scale(0.7)"}})]}),r.jsx(sc,{})]}):T&&r.jsxs(r.Fragment,{children:[r.jsx(s2,{filePath:e}),r.jsx(sc,{})]}),_&&!Ne?.active&&r.jsx(fe,{variant:I.commentMode?"primary":"ghost",size:"xs",icon:"Chat",onClick:async()=>{const j=!I.commentMode;j&&!await pe()||(I.setCommentMode(j),j&&I.setEditMode(!1))},children:"Comment"}),T&&!Ne?.active&&r.jsxs(r.Fragment,{children:[r.jsx(fe,{variant:I.editMode?"primary":"ghost",size:"xs",icon:"Styles",onClick:async()=>{const j=!I.editMode;j&&!await pe()||(I.setEditMode(j),j&&I.setCommentMode(!1))},children:"Edit"}),r.jsx(fe,{variant:X?"primary":"ghost",size:"xs",icon:"Edit",onClick:async()=>{if(X){await pe();return}Se(!0),I.setCommentMode(!1),I.setEditMode(!1)},children:"Draw"})]}),!1,r.jsx("div",{ref:k,style:{display:"inline-flex"},children:r.jsx(fe,{variant:"ghost",size:"xs",icon:"Search",onClick:()=>Ke(!qe),title:"Zoom level",children:L&&yt?"Auto":`${Math.round(ze*100)}%`})}),r.jsx(An,{open:qe,onClose:()=>Ke(!1),anchorEl:k.current,items:Xe}),(()=>{const j=r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:S,style:{display:"inline-flex"},children:r.jsx(fe,{variant:"ghost",size:"xs",iconRight:"CaretDown",onClick:()=>b(!f),title:"Present",children:"Present"})}),r.jsx(An,{open:f,onClose:()=>b(!1),anchorEl:S.current,items:Ze})]});return Ae?Vn.createPortal(j,Ae):j})()]}),r.jsx(Vf,{top:ye,bottomHeight:q,onBottomHeightChange:j=>we(j),bottom:tt&&!m?r.jsx(MS,{slideIndex:We.slideIndex,total:Ee,note:Je,dirty:We.dirty,saving:We.saving,onChange:j=>We.updateNote(We.slideIndex,j),onSave:We.save}):null}),Ie&&r.jsx(OS,{win:Ie,slideIndex:We.slideIndex,total:Ee,note:Je,dirty:We.dirty,saving:We.saving,onNav:j=>We.sendKey(j==="next"?"ArrowRight":"ArrowLeft"),onEdit:j=>We.updateNote(We.slideIndex,j),onSave:We.save,onEsc:ge,onClose:Ge})]})}function s2({filePath:e}){const[t,s]=l.useState(!1);return r.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[r.jsx(fe,{variant:t?"primary":"ghost",size:"xs",icon:"Add",onClick:()=>s(i=>!i),title:"Ask Claude to add tweak controls",children:"Tweaks"}),t&&r.jsx("div",{style:{position:"absolute",top:"100%",right:0,marginTop:6,width:300,padding:12,background:h.bg.surface,border:`1px solid ${h.border.default}`,borderRadius:10,boxShadow:"0 8px 24px rgba(0,0,0,0.12)",zIndex:200},children:r.jsx(i2,{filePath:e,onSent:()=>s(!1)})})]})}function i2({filePath:e,onSent:t}){const s="Describe a tweak…",[i,n]=l.useState(""),[o,a]=l.useState(!1),[c,d]=l.useState(""),u=l.useRef(null);l.useEffect(()=>{let m=0;const y=setInterval(()=>{m++,d(s.slice(0,m)),m>=s.length&&clearInterval(y)},28);return()=>clearInterval(y)},[]);const p=m=>{window.dispatchEvent(new CustomEvent("autosend-attachments",{detail:{label:`Add tweakable controls to ${e}: ${m}`,attachments:[]}})),t()},f=()=>{const m=i.trim();m&&(p(m),n(""))},b=!i&&!o;return r.jsxs("div",{onMouseDown:()=>u.current?.focus(),style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:8,background:h.bg.muted,border:`1px solid ${o?h.border.focus:h.border.default}`},children:[r.jsxs("div",{style:{position:"relative",flex:1,minWidth:0},children:[r.jsx("input",{ref:u,value:i,placeholder:o?s:"",onChange:m=>n(m.target.value),onFocus:()=>a(!0),onBlur:()=>a(!1),onKeyDown:m=>{m.key==="Enter"?(m.preventDefault(),f()):m.key==="Escape"&&(m.preventDefault(),t())},style:{width:"100%",height:22,border:0,background:"transparent",font:"inherit",fontSize:12,outline:"none",color:h.text.primary}}),b&&r.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",fontSize:12,color:h.text.tertiary,pointerEvents:"none",whiteSpace:"nowrap",overflow:"hidden"},children:[c,c.length<s.length&&r.jsx("span",{style:{borderRight:"1.5px solid",opacity:.5,marginLeft:1,height:13,display:"inline-block"}})]})]}),r.jsx("span",{onMouseDown:m=>m.stopPropagation(),children:i?r.jsx(fe,{variant:"primary",size:"xs",onClick:f,children:"Add"}):c.length>=s.length?r.jsxs(fe,{variant:"ghost",size:"xs",onClick:()=>p(ad()?"study this design and add a tweaks panel — invent three expressive, multi-variable tweak ideas and pass them as suggestions":"study this design and add a tweaks panel with two or three expressive controls that reshape the feel, not single-property pixel-pushing"),children:["Ideas",r.jsx("img",{src:"/design/spark.svg",alt:"",width:11,height:11,style:{verticalAlign:"-1px",marginLeft:4}})]}):null})]})}const o2=x.div`
  display: flex;
  flex-direction: column;
  background: ${h.bg.surface};
  height: 100%;
`,a2=x.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background: ${h.bg.muted};
  padding: 20px;
`,l2=x.img`
  max-width: ${e=>e.$zoom===1?"100%":"none"};
  max-height: ${e=>e.$zoom===1?"100%":"none"};
  width: ${e=>e.$zoom!==1?`${e.$zoom*100}%`:"auto"};
  height: auto;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,c2=x.span`
  font-size: 11px;
  color: ${h.text.tertiary};
  min-width: 40px;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;function d2({filePath:e}){const{serverPort:t}=vt(),[s,i]=l.useState(1),n=G.getPreviewUrl(t,e),o=()=>i(d=>Math.min(d+.25,4)),a=()=>i(d=>Math.max(d-.25,.25)),c=()=>i(1);return r.jsxs(o2,{children:[r.jsxs(Is,{children:[r.jsx(_t,{icon:"Minus",size:26,variant:"default",onClick:a,disabled:s<=.25,title:"Zoom out"}),r.jsxs(c2,{children:[Math.round(s*100),"%"]}),r.jsx(_t,{icon:"Add",size:26,variant:"default",onClick:o,disabled:s>=4,title:"Zoom in"}),r.jsx(_t,{icon:"Reload",size:26,variant:"default",onClick:c,title:"Reset zoom"}),r.jsx("div",{style:{flex:1}})]}),r.jsx(a2,{children:r.jsx(l2,{src:n,alt:e,$zoom:s})})]})}const u2=x.div`
  display: flex;
  flex-direction: column;
  background: ${h.bg.surface};
  height: 100%;
`,p2=x.div`
  flex: 1;
  overflow: auto;
  display: flex;
  background: ${h.bg.surface};
`,f2=x.div`
  text-align: right;
  padding: 16px 12px 16px 16px;
  border-right: 1px solid ${h.border.subtle};
  color: ${h.text.tertiary};
  user-select: none;
  min-width: 40px;
  font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
  font-size: 12px;
  line-height: 1.5;
  flex-shrink: 0;
`,h2=x.textarea`
  flex: 1;
  margin: 0;
  padding: 16px;
  font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
  font-size: 12px;
  line-height: 1.5;
  color: ${h.text.primary};
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  white-space: pre;
  overflow-wrap: normal;
  tab-size: 2;

  &::placeholder {
    color: ${h.text.disabled};
  }
`,g2=x.span`
  font-size: 12px;
  color: ${h.text.tertiary};
  padding: 16px;
`,m2=x.span`
  font-size: 12px;
  color: ${h.accent.error};
  padding: 16px;
`,x2=x.span`
  font-size: 11px;
  color: ${h.accent.success};
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  margin-right: 4px;
`;function b2({filePath:e}){const{projectPath:t}=vt(),s=Yn(),[i,n]=l.useState(null),[o,a]=l.useState(null),[c,d]=l.useState(null),[u,p]=l.useState(!1),[f,b]=l.useState(!1),[m,y]=l.useState(!1),g=l.useRef(null),C=l.useRef(null),w=e.startsWith("/")?e:`${t}/${e}`,S=l.useCallback(()=>{d(null),G.readFile(w).then(L=>{n(L),a(L),y(!1)}).catch(L=>d(L.message||String(L)))},[w]);l.useEffect(()=>{n(null),a(null),S()},[S]);const k=o!==null&&o!==i;Ye("file-written",L=>{L.detail?.path===e&&y(!0)}),l.useEffect(()=>{m&&!k&&S()},[m,k,S]);const E=l.useCallback(async()=>{k&&!await s({title:"Discard unsaved edits?",message:"Reloading will replace your changes with the version on disk.",confirmLabel:"Reload",danger:!0})||S()},[k,s,S]),T=l.useCallback(async()=>{if(!(o===null||u)){p(!0),d(null);try{await G.writeFile(w,o),n(o),y(!1),b(!0),setTimeout(()=>b(!1),2e3)}catch(L){d(L instanceof Error?L.message:String(L))}finally{p(!1)}}},[o,w,u]);Ye("keydown",L=>{(L.metaKey||L.ctrlKey)&&L.key==="s"&&(L.preventDefault(),k&&T())});const _=()=>{o&&navigator.clipboard.writeText(o)},R=()=>{g.current&&C.current&&(C.current.scrollTop=g.current.scrollTop)},$=L=>{if(L.key==="Tab"){L.preventDefault();const z=g.current;if(!z)return;const J=z.selectionStart,I=z.selectionEnd,te=z.value,ce=te.substring(0,J)+"  "+te.substring(I);a(ce),requestAnimationFrame(()=>{z.selectionStart=z.selectionEnd=J+2})}},M=o?.split(`
`)||[];return r.jsxs(u2,{children:[r.jsxs(Is,{children:[r.jsx("div",{style:{flex:1}}),c&&o!==null&&r.jsxs("span",{style:{fontSize:11,color:"#dc2626",marginRight:8},children:["Error: ",c]}),r.jsx(x2,{$visible:f,children:"Saved"}),r.jsx(fe,{variant:m?"black":"ghost",size:"xs",icon:"Reload",onClick:E,title:m?"File changed on disk — reload to see latest":"Reload from disk",children:"Reload"}),r.jsx(fe,{variant:k?"black":"ghost",size:"xs",icon:"Check",onClick:T,disabled:!k,loading:u,children:"Save"}),r.jsx(fe,{variant:"ghost",size:"xs",icon:"Copy",onClick:_,disabled:!o,children:"Copy"})]}),r.jsx(p2,{children:c&&o===null?r.jsxs(m2,{children:["Error loading file: ",c]}):o===null?r.jsx(g2,{children:"Loading..."}):r.jsxs(r.Fragment,{children:[r.jsx(f2,{ref:C,style:{overflow:"hidden",pointerEvents:"none"},children:M.map((L,z)=>r.jsx("div",{children:z+1},z))}),r.jsx(h2,{ref:g,value:o,onChange:L=>a(L.target.value),onScroll:R,onKeyDown:$,spellCheck:!1})]})})]})}const y2=["#8B2500","#C2622D","#3D7C2F","#2D7DD2","#000000"],mi=[2,6],Wn={yellow:"#FEF3C7",pink:"#FCE7F3",blue:"#DBEAFE",green:"#D1FAE5",purple:"#EDE9FE",orange:"#FFEDD5"},Yu="omelette/sketch-objects-v1",to="web application/vnd.omelette.sketch+json",un=12,oc={width:150,height:150},ac={width:100,height:60},ts=400,xi={checkbox:{width:20},radio:{width:20},toggle:{width:44,height:24}},w2={color:"#8B2500",brushSize:2,strokeWidth:2,fontSize:16,bold:!1,stickyColor:"yellow",shapeFill:null,uiVariant:"primary"},pn=20,Xt=8,Gn=10;function v2(e=[]){const[t,s]=l.useState({past:[],present:e,future:[]}),i=l.useCallback(d=>{s(u=>({past:[...u.past.slice(-49),u.present],present:d,future:[]}))},[]),n=l.useCallback(d=>{s(u=>({...u,present:d}))},[]),o=l.useCallback(()=>{s(d=>{if(d.past.length===0)return d;const u=[...d.past],p=u.pop();return{past:u,present:p,future:[d.present,...d.future]}})},[]),a=l.useCallback(()=>{s(d=>{if(d.future.length===0)return d;const u=[...d.future],p=u.shift();return{past:[...d.past,d.present],present:p,future:u}})},[]),c=l.useCallback((d=[])=>{s({past:[],present:d,future:[]})},[]);return{objects:t.present,pushState:i,replaceState:n,undo:o,redo:a,reset:c,canUndo:t.past.length>0,canRedo:t.future.length>0}}function k2({onToolChange:e,onUndo:t,onRedo:s,onDelete:i,onSelectAll:n,onCopy:o,onEscape:a,isEnabled:c}){const d=l.useCallback(u=>{if(!c)return;const p=u.target;if(p.tagName==="INPUT"||p.tagName==="TEXTAREA"||p.isContentEditable)return;const f=u.metaKey||u.ctrlKey,b=u.key.toLowerCase();if(f&&b==="z"){u.preventDefault(),u.shiftKey?s():t();return}if(f&&b==="a"){u.preventDefault(),n();return}if(f&&b==="c"){o();return}if(!f){if(u.key==="Escape"){u.preventDefault(),a();return}if(u.key==="Delete"||u.key==="Backspace"){u.preventDefault(),i();return}switch(b){case"v":e("select");break;case"h":e("pan");break;case"p":e("pen");break;case"r":e("rect");break;case"o":e("ellipse");break;case"a":e("arrow");break;case"t":e("text");break;case"s":e("sticky");break}}},[c,e,t,s,i,n,o,a]);l.useEffect(()=>(document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)),[d])}function ds(e,t,s){return t.split(`
`).flatMap(i=>{if(!i)return[""];const n=i.split(" "),o=[];let a="";for(const c of n){if(e.measureText(c).width>s){a&&(o.push(a),a="");let u="";for(const p of c)e.measureText(u+p).width>s&&u?(o.push(u),u=p):u+=p;a=u;continue}const d=a?`${a} ${c}`:c;e.measureText(d).width>s&&a?(o.push(a),a=c):a=d}return a&&o.push(a),o})}function Yt(){return Math.random().toString(36).substring(2,11)}function Pn(e){switch(e.type){case"stroke":{const t=e.data.points;if(t.length===0)return{x:0,y:0,width:0,height:0};const s=t.map(a=>a.x),i=t.map(a=>a.y),n=Math.min(...s),o=Math.min(...i);return{x:n,y:o,width:Math.max(...s)-n,height:Math.max(...i)-o}}case"line":return{x:Math.min(e.x,e.endX),y:Math.min(e.y,e.endY),width:Math.abs(e.endX-e.x),height:Math.abs(e.endY-e.y)};case"text":return{x:e.x,y:e.y,width:e.width||100,height:e.height||20};default:return{x:e.x,y:e.y,width:e.width||0,height:e.height||0}}}function no(e,t,s){if(s.type==="line"){const o=s.endX-s.x,a=s.endY-s.y,c=o*o+a*a,d=c===0?0:Math.max(0,Math.min(1,((e-s.x)*o+(t-s.y)*a)/c));return Math.hypot(e-(s.x+d*o),t-(s.y+d*a))<=Math.max(s.data.strokeWidth,4)+4}const i=Pn(s),n=4;return e>=i.x-n&&e<=i.x+i.width+n&&t>=i.y-n&&t<=i.y+i.height+n}function lc(e,t,s){if(s.type==="line"){const b=Xt+4;return Math.hypot(e-s.x,t-s.y)<=b?"line-start":Math.hypot(e-s.endX,t-s.endY)<=b?"line-end":null}const i=Pn(s),n=4,o=Xt+4,a=6,c=[{handle:"nw",hx:i.x-n,hy:i.y-n},{handle:"ne",hx:i.x+i.width+n,hy:i.y-n},{handle:"se",hx:i.x+i.width+n,hy:i.y+i.height+n},{handle:"sw",hx:i.x-n,hy:i.y+i.height+n}];for(const{handle:b,hx:m,hy:y}of c)if(e>=m-o/2&&e<=m+o/2&&t>=y-o/2&&t<=y+o/2)return b;const d=i.x-n,u=i.x+i.width+n,p=i.y-n,f=i.y+i.height+n;return e>=d&&e<=u&&Math.abs(t-p)<=a?"n":e>=d&&e<=u&&Math.abs(t-f)<=a?"s":t>=p&&t<=f&&Math.abs(e-d)<=a?"w":t>=p&&t<=f&&Math.abs(e-u)<=a?"e":null}const S2=50,zt=new Map,ra=new Map;function C2(){for(;zt.size>S2;){const e=zt.keys().next().value;if(e===void 0)break;zt.delete(e),ra.delete(e)}}function $s(e){const t=zt.get(e);if(t)return zt.delete(e),zt.set(e,t),t;const s=new Promise((i,n)=>{const o=new Image;o.onload=()=>{ra.set(e,o),zt.has(e)||zt.set(e,Promise.resolve(o)),i(o)},o.onerror=a=>{zt.delete(e),n(a)},o.src=e});return zt.set(e,s),C2(),s}function _2(e){const t=ra.get(e);if(!t)return null;const s=zt.get(e);return s&&(zt.delete(e),zt.set(e,s)),t}function Zu(e){if(e.length<2)return"";let t=`M ${e[0].x} ${e[0].y}`;if(e.length===2)return t+=` L ${e[1].x} ${e[1].y}`,t;for(let s=0;s<e.length-1;s++){const i=e[s-1]||e[s],n=e[s],o=e[s+1],a=e[s+2]||o,c=n.x+(o.x-i.x)/6,d=n.y+(o.y-i.y)/6,u=o.x-(a.x-n.x)/6,p=o.y-(a.y-n.y)/6;t+=` C ${c} ${d}, ${u} ${p}, ${o.x} ${o.y}`}return t}function Qu(){const e=l.useCallback((n,o,a,c,d,u)=>{const p=d||{x:0,y:0},f=u||1,b=-p.x/f,m=-p.y/f,y=o/f,g=a/f,C=b+y,v=m+g;if(n.fillStyle="#F9F8F5",n.fillRect(b,m,y,g),n.fillStyle="rgba(255, 255, 255, 0.7)",n.fillRect(b,m,y,g),c==="dots"||c==="grid"){const w=Math.floor(b/pn)*pn+pn,S=Math.floor(m/pn)*pn+pn;n.fillStyle="rgba(114, 113, 107, 0.3)";for(let k=w;k<C;k+=pn)for(let E=S;E<v;E+=pn)n.beginPath(),n.arc(k,E,1,0,Math.PI*2),n.fill()}},[]),t=(n,o,a,c,d,u)=>{const m=d-24;n.save(),n.font="14px system-ui, sans-serif",n.fillStyle="#1a1a1a",n.textAlign="center",n.textBaseline="middle";const y=ds(n,o,m),g=y.length*18.2,C=c+(u-g)/2+18.2/2,v=a+d/2;for(let w=0;w<y.length;w++)n.fillText(y[w],v,C+w*18.2,m);n.restore()},s=l.useCallback((n,o)=>{if(n.save(),o.rotation){const a=o.x+(o.width||0)/2,c=o.y+(o.height||0)/2;n.translate(a,c),n.rotate(o.rotation*Math.PI/180),n.translate(-a,-c)}switch(o.type){case"stroke":{const{points:a,color:c,size:d}=o.data;if(a.length<2)break;n.strokeStyle=c,n.lineWidth=d,n.lineCap="round",n.lineJoin="round",n.stroke(new Path2D(Zu(a)));break}case"rect":{const{fill:a,stroke:c,strokeWidth:d,cornerRadius:u,text:p}=o.data;if(n.beginPath(),u){const f=Math.min(u,o.width/2,o.height/2);n.roundRect(o.x,o.y,o.width,o.height,f)}else n.rect(o.x,o.y,o.width,o.height);a&&(n.fillStyle=a,n.fill()),n.strokeStyle=c,n.lineWidth=d,n.stroke(),p&&t(n,p,o.x,o.y,o.width,o.height);break}case"ellipse":{const{fill:a,stroke:c,strokeWidth:d,text:u}=o.data;n.beginPath(),n.ellipse(o.x+o.width/2,o.y+o.height/2,o.width/2,o.height/2,0,0,Math.PI*2),a&&(n.fillStyle=a,n.fill()),n.strokeStyle=c,n.lineWidth=d,n.stroke(),u&&t(n,u,o.x,o.y,o.width,o.height);break}case"line":{const{stroke:a,strokeWidth:c}=o.data,d=Math.atan2(o.endY-o.y,o.endX-o.x),u=Math.max(12,c*4);n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.endX,o.endY),n.strokeStyle=a,n.lineWidth=c,n.lineCap="round",n.lineJoin="round",n.stroke(),n.beginPath(),n.moveTo(o.endX-u*Math.cos(d-Math.PI/6),o.endY-u*Math.sin(d-Math.PI/6)),n.lineTo(o.endX,o.endY),n.lineTo(o.endX-u*Math.cos(d+Math.PI/6),o.endY-u*Math.sin(d+Math.PI/6)),n.stroke();break}case"text":{const{content:a,fontSize:c,color:d,bold:u}=o.data;n.font=`${u?"bold ":""}${c}px system-ui, sans-serif`,n.fillStyle=d,n.textBaseline="top";const p=c*1.3;o.width&&o.width>0?ds(n,a,o.width).forEach((b,m)=>{n.fillText(b,o.x,o.y+m*p)}):a.split(`
`).forEach((f,b)=>{n.fillText(f,o.x,o.y+b*p)});break}case"sticky":{const a=Wn[o.data.color],c=Math.min(16,o.width*.1,o.height*.1);n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.x+o.width-c,o.y),n.lineTo(o.x+o.width,o.y+c),n.lineTo(o.x+o.width,o.y+o.height),n.lineTo(o.x,o.y+o.height),n.closePath(),n.fillStyle=a,n.fill(),n.strokeStyle="#00000020",n.lineWidth=1,n.stroke(),n.beginPath(),n.moveTo(o.x+o.width-c,o.y),n.lineTo(o.x+o.width-c,o.y+c),n.lineTo(o.x+o.width,o.y+c),n.closePath(),n.fillStyle="rgba(0, 0, 0, 0.06)",n.fill(),n.strokeStyle="#00000020",n.lineWidth=.5,n.stroke(),n.save(),n.beginPath(),n.rect(o.x,o.y,o.width,o.height),n.clip(),n.font="14px system-ui, sans-serif",n.fillStyle="#1F2937",n.textBaseline="top";const d=8;ds(n,o.data.content,o.width-d*2).forEach((p,f)=>{n.fillText(p,o.x+d,o.y+d+f*18)}),n.restore();break}case"image":{const a=_2(o.data.src);a?n.drawImage(a,o.x,o.y,o.width,o.height):(n.fillStyle="#F3F4F6",n.fillRect(o.x,o.y,o.width,o.height),n.strokeStyle="#D1D5DB",n.lineWidth=1,n.strokeRect(o.x,o.y,o.width,o.height));break}case"ui-button":{const{variant:a,label:c}=o.data,{width:d,height:u}=o;a==="primary"?(n.fillStyle="#3B82F6",n.beginPath(),n.roundRect(o.x,o.y,d,u,6),n.fill(),n.fillStyle="#FFFFFF"):(a==="secondary"&&(n.fillStyle="#FFFFFF",n.strokeStyle="#D1D5DB",n.lineWidth=1,n.beginPath(),n.roundRect(o.x,o.y,d,u,6),n.fill(),n.stroke()),n.fillStyle="#1F2937"),n.font="14px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(c,o.x+d/2,o.y+u/2),n.textAlign="left";break}case"ui-input":{n.fillStyle="#FFFFFF",n.strokeStyle="#D1D5DB",n.lineWidth=1,n.beginPath(),n.roundRect(o.x,o.y,o.width,o.height,6),n.fill(),n.stroke(),o.data.placeholder&&(n.font="14px system-ui, sans-serif",n.fillStyle="#9CA3AF",n.textBaseline="middle",n.fillText(o.data.placeholder,o.x+12,o.y+o.height/2));break}case"ui-checkbox":{const a=xi.checkbox.width;n.fillStyle="#FFFFFF",n.strokeStyle="#D1D5DB",n.lineWidth=1,n.beginPath(),n.roundRect(o.x,o.y,a,a,4),n.fill(),n.stroke(),o.data.checked&&(n.strokeStyle="#3B82F6",n.lineWidth=2,n.beginPath(),n.moveTo(o.x+4,o.y+a/2),n.lineTo(o.x+8,o.y+a-5),n.lineTo(o.x+a-4,o.y+5),n.stroke()),o.data.label&&(n.font="14px system-ui, sans-serif",n.fillStyle="#1F2937",n.textBaseline="middle",n.fillText(o.data.label,o.x+a+8,o.y+a/2));break}case"ui-radio":{const a=xi.radio.width;n.fillStyle="#FFFFFF",n.strokeStyle="#D1D5DB",n.lineWidth=1,n.beginPath(),n.arc(o.x+a/2,o.y+a/2,a/2,0,Math.PI*2),n.fill(),n.stroke(),o.data.checked&&(n.fillStyle="#3B82F6",n.beginPath(),n.arc(o.x+a/2,o.y+a/2,a/4,0,Math.PI*2),n.fill()),o.data.label&&(n.font="14px system-ui, sans-serif",n.fillStyle="#1F2937",n.textBaseline="middle",n.fillText(o.data.label,o.x+a+8,o.y+a/2));break}case"ui-toggle":{const{width:a,height:c}=xi.toggle,d=o.data.checked;n.fillStyle=d?"#3B82F6":"#D1D5DB",n.beginPath(),n.roundRect(o.x,o.y,a,c,c/2),n.fill();const u=d?o.x+a-c/2:o.x+c/2;n.fillStyle="#FFFFFF",n.beginPath(),n.arc(u,o.y+c/2,c/2-2,0,Math.PI*2),n.fill();break}case"ui-dropdown":{n.fillStyle="#FFFFFF",n.strokeStyle="#D1D5DB",n.lineWidth=1,n.beginPath(),n.roundRect(o.x,o.y,o.width,o.height,6),n.fill(),n.stroke(),n.font="14px system-ui, sans-serif",n.fillStyle="#9CA3AF",n.textBaseline="middle",n.fillText(o.data.placeholder||"Select...",o.x+12,o.y+o.height/2),n.fillStyle="#6B7280",n.beginPath(),n.moveTo(o.x+o.width-20,o.y+o.height/2-3),n.lineTo(o.x+o.width-16,o.y+o.height/2+3),n.lineTo(o.x+o.width-12,o.y+o.height/2-3),n.fill();break}}n.restore()},[]);return{exportToPNG:l.useCallback(async(n,o,a,c,d)=>{const u=document.createElement("canvas"),p=d?.scale??2;u.width=o*p,u.height=a*p;const f=u.getContext("2d");if(!f)throw new Error("Failed to get canvas context");f.scale(p,p),d&&f.translate(-d.x,-d.y),e(f,d?d.width:o,d?d.height:a,c,d?{x:-d.x,y:-d.y}:void 0);for(const b of n)s(f,b);return new Promise((b,m)=>{u.toBlob(y=>{y?b(y):m(new Error("Failed to create blob"))},"image/png",1)})},[e,s]),drawObject:s,drawBackground:e}}function $2({objects:e,activeTool:t,toolOptions:s,onObjectsChange:i,onSelectionChange:n,onToolChange:o,onDrawingChange:a}){const[c,d]=l.useState([]),[u,p]=l.useState(null),[f,b]=l.useState(!1),m=l.useRef(e);m.current=e;const y=l.useRef(c);y.current=c;const g=l.useCallback(T=>{b(T),a?.(T)},[a]),C=l.useCallback(T=>{g(!0),d([T])},[g]),v=l.useCallback((T,_)=>{d(R=>{if(_&&R.length>0){const $=R[0],M=T.x-$.x,L=T.y-$.y,z=Math.atan2(L,M),J=Math.sqrt(M*M+L*L),I=Math.round(z/(Math.PI/4))*(Math.PI/4);return[$,{x:$.x+Math.cos(I)*J,y:$.y+Math.sin(I)*J}]}return[...R,T]})},[]),w=l.useCallback(()=>{const T=y.current;if(T.length>1){const _={id:Yt(),type:"stroke",x:0,y:0,data:{points:T,color:s.color,size:s.brushSize}};i([...m.current,_])}d([])},[s,i]),S=l.useCallback(T=>{g(!0),p(T)},[g]),k=l.useCallback(T=>{if(u){if(t==="arrow"){if(Math.sqrt((T.x-u.x)**2+(T.y-u.y)**2)>Gn){const R={id:Yt(),type:"line",x:u.x,y:u.y,endX:T.x,endY:T.y,data:{fill:null,stroke:s.color,strokeWidth:s.strokeWidth}};i([...m.current,R]),o?.("select"),n([R.id])}}else{const _=Math.abs(T.x-u.x),R=Math.abs(T.y-u.y);if(_>Gn&&R>Gn){const $={id:Yt(),type:t,x:Math.min(T.x,u.x),y:Math.min(T.y,u.y),width:_,height:R,data:{fill:s.shapeFill,stroke:s.color,strokeWidth:s.strokeWidth}};i([...m.current,$]),o?.("select"),n([$.id])}}p(null)}},[u,t,s,i,n,o]),E=l.useCallback(()=>{g(!1),d([]),p(null)},[g]);return{currentStroke:c,drawingStart:u,isDrawing:f,startPenStroke:C,movePenStroke:v,endPenStroke:w,startShape:S,endShape:k,setIsDrawingActive:g,resetDrawing:E}}function cc(e,t,s,i){let n=e,o=t;return n>s&&(o=o*s/n,n=s),o>i&&(n=n*i/o,o=i),{width:n,height:o}}function E2({objects:e,pan:t,zoom:s,dimensions:i,canvasRef:n,onObjectsChange:o,onSelectionChange:a,onObjectsPaste:c,onTextPaste:d}){const u=l.useRef(e);u.current=e;const[p,f]=l.useState(!1);l.useEffect(()=>{const g=C=>{const v=C.target;if(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable)return;const w=C.clipboardData?.items;if(!w)return;for(const T of Array.from(w))if(T.type.startsWith("image/")){C.preventDefault();const _=T.getAsFile();if(!_)continue;const R=new FileReader;R.onload=async $=>{const M=$.target?.result;if(M)try{const L=await $s(M),{width:z,height:J}=cc(L.naturalWidth,L.naturalHeight,i.width*.8/s,i.height*.8/s),I={id:Yt(),type:"image",x:(i.width/2-t.x)/s-z/2,y:(i.height/2-t.y)/s-J/2,width:z,height:J,data:{src:M,naturalWidth:L.naturalWidth,naturalHeight:L.naturalHeight}};o([I,...u.current]),a([I.id])}catch{}},R.readAsDataURL(_);return}const S=T=>{try{const _=JSON.parse(T);if(_?.type===Yu&&Array.isArray(_.objects)&&_.objects.length>0)return C.preventDefault(),c?.(_.objects),!0}catch{}return!1},k=C.clipboardData?.getData(to);if(k&&S(k))return;const E=C.clipboardData?.getData("text/plain");E&&(S(E)||E.trim()&&d&&(C.preventDefault(),d(E)))};return document.addEventListener("paste",g),()=>document.removeEventListener("paste",g)},[i,t,s,o,a,c,d]);const b=l.useCallback(g=>{g.preventDefault(),g.stopPropagation(),f(!0)},[]),m=l.useCallback(g=>{g.preventDefault(),g.stopPropagation(),f(!1)},[]),y=l.useCallback(g=>{g.preventDefault(),g.stopPropagation(),f(!1);const C=Array.from(g.dataTransfer.files).filter(T=>T.type.startsWith("image/"));if(C.length===0)return;const v=n.current;if(!v)return;const w=v.getBoundingClientRect(),S=(g.clientX-w.left-t.x)/s,k=(g.clientY-w.top-t.y)/s,E=T=>new Promise(_=>{const R=new FileReader;R.onload=async $=>{const M=$.target?.result;if(!M)return _(null);try{const L=await $s(M),{width:z,height:J}=cc(L.naturalWidth,L.naturalHeight,i.width*.8/s,i.height*.8/s);_({id:Yt(),type:"image",x:S-z/2,y:k-J/2,width:z,height:J,data:{src:M,naturalWidth:L.naturalWidth,naturalHeight:L.naturalHeight}})}catch{_(null)}},R.onerror=()=>_(null),R.readAsDataURL(T)});Promise.all(C.map(E)).then(T=>{const _=T.filter(R=>R!==null);_.length>0&&o([..._,...u.current])})},[i,o,t,s,n]);return{isDragOver:p,handleDragOver:b,handleDragLeave:m,handleDrop:y}}function T2({pan:e,onPanChange:t,activeTool:s}){const[i,n]=l.useState(!1),[o,a]=l.useState(!1),[c,d]=l.useState(null);l.useEffect(()=>{const m=C=>{const v=C.target;v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable||C.code==="Space"&&!C.repeat&&(C.preventDefault(),a(!0))},y=C=>{C.code==="Space"&&a(!1)},g=()=>a(!1);return document.addEventListener("keydown",m),document.addEventListener("keyup",y),window.addEventListener("blur",g),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",y),window.removeEventListener("blur",g)}},[]);const u=l.useCallback(m=>m.button===1||o||s==="pan",[o,s]),p=l.useCallback(m=>{n(!0),d({...m,pan:{...e}})},[e]),f=l.useCallback(m=>{c&&t({x:c.pan.x+m.x-c.x,y:c.pan.y+m.y-c.y})},[c,t]),b=l.useCallback(()=>{n(!1),d(null)},[]);return{isPanning:i,isSpacebarHeld:o,panDragStart:c,startPan:p,movePan:f,endPan:b,shouldPan:u}}function j2({objects:e,selectedIds:t,canvasRef:s,onObjectsChange:i,onObjectsReplace:n}){const o=l.useRef(e);o.current=e;const[a,c]=l.useState(null),[d,u]=l.useState(null),[p,f]=l.useState(null),b=l.useRef(null),m=l.useRef(!1),y=l.useCallback(k=>{if(t.length!==1)return null;const E=e.find(T=>T.id===t[0]);return E?lc(k.x,k.y,E):null},[e,t]),g=l.useCallback(k=>{if(t.length!==1){u(null);return}const E=e.find(T=>T.id===t[0]);u(E?lc(k.x,k.y,E):null)},[e,t]),C=l.useCallback(()=>u(null),[]),v=l.useCallback((k,E,T)=>{c(E),f({point:k,bounds:Pn(T)}),b.current=T.type==="stroke"?T.data.points.map(_=>({..._})):null,m.current=!1},[]),w=l.useCallback((k,E,T)=>{if(!a||!p||t.length!==1)return;const _=o.current.find(H=>H.id===t[0]);if(!_)return;const R=H=>{m.current?n(H):(m.current=!0,i(H))};if(_.type==="line"&&(a==="line-start"||a==="line-end")){const H=o.current.map(ke=>ke.id!==t[0]||ke.type!=="line"?ke:a==="line-start"?{...ke,x:k.x,y:k.y}:{...ke,endX:k.x,endY:k.y});R(H);return}const $=k.x-p.point.x,M=k.y-p.point.y,L=p.bounds,z=L.width/L.height;let J=L.x,I=L.y,te=L.width,ce=L.height;switch(a){case"nw":J=L.x+$,I=L.y+M,te=L.width-$,ce=L.height-M;break;case"n":I=L.y+M,ce=L.height-M;break;case"ne":I=L.y+M,te=L.width+$,ce=L.height-M;break;case"e":te=L.width+$;break;case"se":te=L.width+$,ce=L.height+M;break;case"s":ce=L.height+M;break;case"sw":J=L.x+$,te=L.width-$,ce=L.height+M;break;case"w":J=L.x+$,te=L.width-$;break}if(E&&["nw","ne","se","sw"].includes(a))if(te/ce>z){const ke=ce*z;(a==="nw"||a==="sw")&&(J+=te-ke),te=ke}else{const ke=te/z;(a==="nw"||a==="ne")&&(I+=ce-ke),ce=ke}const ue=L.x+L.width/2,me=L.y+L.height/2;T&&(J=ue-te/2,I=me-ce/2);const de=_.type==="sticky",De=de?ac.width:Gn,Re=de?ac.height:Gn;te<De&&(T?J=ue-De/2:a.includes("w")&&(J=L.x+L.width-De),te=De),de&&te>ts&&(T?J=ue-ts/2:a.includes("w")&&(J=L.x+L.width-ts),te=ts),ce<Re&&(T?I=me-Re/2:a.includes("n")&&(I=L.y+L.height-Re),ce=Re);const je=o.current.map(H=>{if(H.id!==t[0])return H;if(H.type==="text"&&H.data.content){const ke=s.current?.getContext("2d");if(ke){ke.save(),ke.font=`${H.data.bold?"bold ":""}${H.data.fontSize}px system-ui, sans-serif`;const X=H.data.content.split(`
`).flatMap(Se=>{if(!Se)return[""];const oe=Se.split(" "),he=[];let pe="";for(const Le of oe){if(ke.measureText(Le).width>te){pe&&(he.push(pe),pe="");let U="";for(const D of Le)ke.measureText(U+D).width>te&&U?(he.push(U),U=D):U+=D;pe=U;continue}const re=pe?`${pe} ${Le}`:Le;ke.measureText(re).width>te&&pe?(he.push(pe),pe=Le):pe=re}return pe&&he.push(pe),he});ke.restore(),ce=Math.max(Math.ceil(X.length*H.data.fontSize*1.3),Gn),T?I=me-ce/2:a.includes("n")&&(I=L.y+L.height-ce)}}if(H.type==="stroke"&&b.current){const ke=L.width>0?te/L.width:1,X=L.height>0?ce/L.height:1,Se=b.current.map(oe=>({...oe,x:J+(oe.x-L.x)*ke,y:I+(oe.y-L.y)*X}));return{...H,data:{...H.data,points:Se}}}return{...H,x:J,y:I,width:te,height:ce}});R(je)},[a,p,t,s,i,n]),S=l.useCallback(()=>{c(null),f(null),b.current=null,m.current=!1},[]);return{resizeHandle:a,hoveredHandle:d,resizeStart:p,startResize:v,moveResize:w,endResize:S,checkHandleAtPoint:y,updateHoveredHandle:g,clearHoveredHandle:C}}function R2({objects:e,selectedIds:t,onObjectsChange:s,onObjectsReplace:i,onSelectionChange:n}){const o=l.useRef(e);o.current=e;const[a,c]=l.useState(null),[d,u]=l.useState(null),p=l.useRef(!1),f=l.useRef(!1),b=l.useCallback(S=>{for(let k=e.length-1;k>=0;k--)if(no(S.x,S.y,e[k]))return e[k];return null},[e]),m=l.useCallback((S,k,E,T)=>{p.current=!1,c(null);let _;if(E?_=t.includes(k.id)?t.filter(R=>R!==k.id):[...t,k.id]:t.includes(k.id)?_=t:_=[k.id],T&&_.length>0){const $=o.current.filter(M=>_.includes(M.id)).map(M=>{const L=structuredClone(M);return L.id=Yt(),L});s([...o.current,...$]),n($.map(M=>M.id)),p.current=!0}else _!==t&&n(_);u(S)},[t,s,n]),y=l.useCallback(S=>{u(null),f.current=!1,c({start:S,end:S}),n([])},[n]),g=l.useCallback(S=>{if(!d||t.length===0)return;const k=S.x-d.x,E=S.y-d.y,T=o.current.map(_=>t.includes(_.id)?_.type==="stroke"?{..._,data:{..._.data,points:_.data.points.map(R=>({...R,x:R.x+k,y:R.y+E}))}}:_.type==="line"?{..._,x:_.x+k,y:_.y+E,endX:_.endX+k,endY:_.endY+E}:{..._,x:_.x+k,y:_.y+E}:_);p.current?i(T):(p.current=!0,s(T)),u(S)},[d,t,s,i]),C=l.useCallback(S=>{a&&(f.current=!0,c({...a,end:S}))},[a]),v=l.useCallback(()=>{if(!a)return;const S={x:Math.min(a.start.x,a.end.x),y:Math.min(a.start.y,a.end.y),width:Math.abs(a.end.x-a.start.x),height:Math.abs(a.end.y-a.start.y)};if(!f.current){c(null);return}const k=e.filter(E=>{const T=Pn(E);return T.x<S.x+S.width&&T.x+T.width>S.x&&T.y<S.y+S.height&&T.y+T.height>S.y});k.length>0&&n(k.map(E=>E.id)),c(null)},[a,e,n]),w=l.useCallback(()=>{u(null),c(null),p.current=!1},[]);return{selectionRect:a,selectionDragStart:d,startObjectDrag:m,startSelectionRect:y,moveObjectDrag:g,moveSelectionRect:C,endSelectionRect:v,resetSelection:w,findObjectAtPoint:b}}function A2({objects:e,toolOptions:t,onObjectsChange:s,onSelectionChange:i,onTextEdit:n,onToolChange:o}){const a=l.useCallback(u=>{let p=null;for(let f=e.length-1;f>=0;f--)if(e[f].type==="text"&&no(u.x,u.y,e[f])){p=e[f];break}if(p)o?.("select"),i([p.id]),n?.(p.id);else{const f={id:Yt(),type:"text",x:u.x,y:u.y,data:{content:"",fontSize:t.fontSize,color:t.color,bold:t.bold}};s([...e,f]),o?.("select"),i([f.id]),n?.(f.id)}},[e,t,s,i,n,o]),c=l.useCallback(u=>{const p={id:Yt(),type:"sticky",x:u.x,y:u.y,width:oc.width,height:oc.height,data:{content:"",color:t.stickyColor}};s([...e,p]),o?.("select"),i([p.id]),n?.(p.id)},[e,t,s,i,n,o]),d=l.useCallback(u=>{for(let p=e.length-1;p>=0;p--){const f=e[p];if(no(u.x,u.y,f)){(f.type==="text"||f.type==="sticky"||f.type==="rect"||f.type==="ellipse"||f.type==="ui-button"||f.type==="ui-input"||f.type==="ui-checkbox"||f.type==="ui-radio"||f.type==="ui-dropdown")&&(i([f.id]),n?.(f.id));break}}},[e,i,n]);return{handleTextToolDown:a,handleStickyToolDown:c,handleDoubleClick:d}}const D2=x.div`
  position: relative;
  overflow: hidden;
  transition: background-color 0.15s ease;
  height: 100%;
  width: 100%;
  background: #F5F4ED;
  ${e=>e.$isDragOver?"box-shadow: inset 0 0 0 2px #6A9BCC;":""}
`,M2=x.canvas`
  position: absolute;
  inset: 0;
  touch-action: none;
`,L2=.5,P2=5,ep=l.memo(({objects:e,imageGeneration:t,selectedIds:s,activeTool:i,toolOptions:n,background:o,viewMode:a,pan:c,zoom:d,editingTextId:u,editingValue:p,onObjectsChange:f,onObjectsReplace:b,onObjectsPaste:m,onTextPaste:y,onSelectionChange:g,onPanChange:C,onZoomChange:v,onTextEdit:w,onToolChange:S,onDrawingChange:k})=>{const E=l.useRef(null),T=l.useRef(null),_=l.useRef(null),R=l.useRef(null),[$,M]=l.useState({width:0,height:0}),{drawObject:L,drawBackground:z}=Qu(),J=T2({pan:c,onPanChange:C,activeTool:i}),I=l.useRef(J);I.current=J;const te=$2({objects:e,activeTool:i,toolOptions:n,onObjectsChange:f,onSelectionChange:g,onToolChange:S,onDrawingChange:k}),ce=l.useRef(te);ce.current=te;const ue=R2({objects:e,selectedIds:s,onObjectsChange:f,onObjectsReplace:b,onSelectionChange:g}),me=l.useRef(ue);me.current=ue;const de=j2({objects:e,selectedIds:s,canvasRef:E,onObjectsChange:f,onObjectsReplace:b}),De=l.useRef(de);De.current=de;const Re=A2({objects:e,toolOptions:n,onObjectsChange:f,onSelectionChange:g,onTextEdit:w,onToolChange:S}),je=l.useRef(Re);je.current=Re;const H=E2({objects:e,pan:c,zoom:d,dimensions:$,canvasRef:E,onObjectsChange:f,onSelectionChange:g,onObjectsPaste:m,onTextPaste:y}),ke=l.useRef(i);ke.current=i;const X=l.useRef(s);X.current=s;const Se=l.useRef(e);Se.current=e;const oe=te.isDrawing||J.isPanning||ue.selectionDragStart!==null||ue.selectionRect!==null||de.resizeHandle!==null,[he,pe]=l.useState(!1);Ye("keydown",le=>{le.key==="Alt"&&!le.repeat&&pe(!0)}),Ye("keyup",le=>{le.key==="Alt"&&pe(!1)}),Ye("blur",()=>pe(!1)),l.useLayoutEffect(()=>{const le=()=>{if(T.current){const we=T.current.getBoundingClientRect();M({width:we.width,height:we.height})}};le();const q=new ResizeObserver(le);return T.current&&q.observe(T.current),()=>q.disconnect()},[]);const Le=l.useCallback(()=>{const le=E.current;if(!le)return;const q=le.getContext("2d");if(!q)return;const we=window.devicePixelRatio||1;q.setTransform(1,0,0,1,0,0),q.clearRect(0,0,le.width,le.height),q.setTransform(we,0,0,we,0,0),q.translate(c.x,c.y),q.scale(d,d),z(q,$.width,$.height,o,c,d);for(const ie of e){if(u&&ie.id===u){if(ie.type==="text"){L(q,{...ie,data:{...ie.data,content:p??ie.data.content}});continue}ie.type==="rect"||ie.type==="ellipse"?L(q,{...ie,data:{...ie.data,text:void 0}}):(ie.type==="ui-button"||ie.type==="ui-input"||ie.type==="ui-checkbox"||ie.type==="ui-radio"||ie.type==="ui-dropdown")&&L(q,{...ie,data:{...ie.data,label:""}});continue}L(q,ie)}if(te.currentStroke.length>1&&(q.strokeStyle=n.color,q.lineWidth=n.brushSize,q.lineCap="round",q.lineJoin="round",q.stroke(new Path2D(Zu(te.currentStroke)))),te.drawingStart&&i!=="pen"&&i!=="select"){const ie=R.current;ie&&I2(q,te.drawingStart,ie,i,n)}for(const ie of s){if(ie===u)continue;const Ge=e.find(ze=>ze.id===ie);Ge&&uc(q,Ge,{showHandles:s.length===1})}if(ue.selectionRect){const ie=Math.min(ue.selectionRect.start.x,ue.selectionRect.end.x),Ge=Math.min(ue.selectionRect.start.y,ue.selectionRect.end.y),ze=Math.abs(ue.selectionRect.end.x-ue.selectionRect.start.x),qe=Math.abs(ue.selectionRect.end.y-ue.selectionRect.start.y);for(const Ke of e){const Xe=Pn(Ke);Xe.x<ie+ze&&Xe.x+Xe.width>ie&&Xe.y<Ge+qe&&Xe.y+Xe.height>Ge&&uc(q,Ke,{showHandles:!1})}q.save(),q.fillStyle="rgba(59, 130, 246, 0.1)",q.fillRect(ie,Ge,ze,qe),q.strokeStyle="#3B82F6",q.lineWidth=1,q.setLineDash([4,4]),q.strokeRect(ie,Ge,ze,qe),q.restore()}},[e,s,te.currentStroke,te.drawingStart,ue.selectionRect,i,n,o,c,d,$,u,p,L,z,t]);l.useLayoutEffect(()=>{const le=E.current;if(!le)return;const q=window.devicePixelRatio||1;le.width=$.width*q,le.height=$.height*q},[$]);const re=Yf(`(resolution: ${window.devicePixelRatio}dppx)`);l.useEffect(()=>{M(le=>({...le}))},[re]),l.useLayoutEffect(()=>{Le()},[Le]);const U=l.useCallback(le=>{const q=E.current;if(!q)return{x:0,y:0};const we=q.getBoundingClientRect(),ie="touches"in le?(le.touches[0]??le.changedTouches[0]).clientX:le.clientX,Ge="touches"in le?(le.touches[0]??le.changedTouches[0]).clientY:le.clientY;return{x:ie-we.left,y:Ge-we.top}},[]),D=l.useCallback(le=>{const q=U(le);return{x:(q.x-c.x)/d,y:(q.y-c.y)/d}},[U,c,d]),O=l.useCallback(le=>{if(I.current.shouldPan(le)){I.current.startPan(U(le));return}const q=D(le);switch(R.current=q,ke.current){case"select":{if(X.current.length===1){const ie=De.current.checkHandleAtPoint(q);if(ie){const Ge=Se.current.find(ze=>ze.id===X.current[0]);if(Ge){De.current.startResize(q,ie,Ge),ce.current.setIsDrawingActive(!0);return}}}const we=me.current.findObjectAtPoint(q);if(we){const ie=le;me.current.startObjectDrag(q,we,ie.shiftKey,ie.altKey),ce.current.setIsDrawingActive(!0)}else me.current.startSelectionRect(q),ce.current.setIsDrawingActive(!0);break}case"pen":ce.current.startPenStroke(q);break;case"rect":case"ellipse":case"arrow":ce.current.startShape(q);break;case"text":je.current.handleTextToolDown(q);break;case"sticky":je.current.handleStickyToolDown(q);break}},[D,U]),P=l.useCallback(le=>{if(_.current=le.nativeEvent,I.current.isPanning&&I.current.panDragStart){I.current.movePan(U(le));return}const q=D(le);R.current=q;const we=ce.current.isDrawing||I.current.isPanning||me.current.selectionDragStart!==null||me.current.selectionRect!==null||De.current.resizeHandle!==null;if(!we&&ke.current==="select"?De.current.updateHoveredHandle(q):we||De.current.clearHoveredHandle(),!!we)switch(ke.current){case"pen":ce.current.movePenStroke(q,le.nativeEvent.shiftKey);break;case"select":if(De.current.resizeHandle&&De.current.resizeStart){const ie=le.nativeEvent;De.current.moveResize(q,ie.shiftKey,ie.altKey)}else me.current.selectionRect?me.current.moveSelectionRect(q):me.current.selectionDragStart&&X.current.length>0&&me.current.moveObjectDrag(q);break;case"rect":case"ellipse":case"arrow":Le();break}},[D,U,Le]),B=l.useCallback(le=>{if(I.current.isPanning){I.current.endPan();return}if(!(ce.current.isDrawing||I.current.isPanning||me.current.selectionDragStart!==null||me.current.selectionRect!==null||De.current.resizeHandle!==null))return;const we=D(le);switch(ke.current){case"pen":ce.current.endPenStroke();break;case"rect":case"ellipse":case"arrow":ce.current.endShape(we);break;case"select":me.current.selectionRect&&me.current.endSelectionRect();break}ce.current.resetDrawing(),me.current.resetSelection(),De.current.endResize()},[D]),ne=l.useCallback(le=>{je.current.handleDoubleClick(D(le))},[D]),se=l.useRef(P);se.current=P;const Oe=l.useRef(B);Oe.current=B;const Me=l.useRef(null),Fe=l.useCallback(le=>{Me.current=le.nativeEvent,Oe.current(le)},[]),Pe=l.useRef(null),We=l.useCallback(le=>{Pe.current=le.nativeEvent,se.current(le)},[]),tt=l.useRef(c);tt.current=c;const Ee=l.useRef(d);Ee.current=d;const Je=l.useRef(C);Je.current=C;const Ie=l.useRef(v);return Ie.current=v,l.useEffect(()=>{const le=T.current,q=le?.parentElement;if(!le||!q)return;const we=ie=>{if(ie.preventDefault(),ie.ctrlKey||ie.metaKey){const Ge=Ee.current,ze=-ie.deltaY*.01,qe=Math.min(Math.max(Ge*(1+ze),L2),P2),Ke=le.getBoundingClientRect(),Xe=ie.clientX-Ke.left,rt=ie.clientY-Ke.top,yt=(Xe-tt.current.x)/Ge,kt=(rt-tt.current.y)/Ge;Je.current({x:Xe-yt*qe,y:rt-kt*qe}),Ie.current(qe)}else Je.current({x:tt.current.x-ie.deltaX,y:tt.current.y-ie.deltaY})};return q.addEventListener("wheel",we,{passive:!1}),()=>q.removeEventListener("wheel",we)},[]),l.useEffect(()=>{if(!oe&&!J.isPanning)return;const le=ie=>({nativeEvent:ie,clientX:ie.clientX,clientY:ie.clientY,shiftKey:ie.shiftKey,altKey:ie.altKey,ctrlKey:ie.ctrlKey,metaKey:ie.metaKey,button:ie.button,currentTarget:E.current,target:ie.target,preventDefault:()=>ie.preventDefault(),stopPropagation:()=>ie.stopPropagation()}),q=ie=>{Pe.current!==ie&&se.current(le(ie))},we=ie=>{Me.current!==ie&&Oe.current(le(ie))};return document.addEventListener("mousemove",q),document.addEventListener("mouseup",we),()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",we)}},[oe,J.isPanning]),r.jsx(D2,{ref:T,$isDragOver:H.isDragOver,onDragOver:H.handleDragOver,onDragLeave:H.handleDragLeave,onDrop:H.handleDrop,children:r.jsx(M2,{ref:E,style:{cursor:J.isPanning?"grabbing":J.isSpacebarHeld?"grab":de.resizeHandle?dc(de.resizeHandle):de.hoveredHandle?dc(de.hoveredHandle):he&&i==="select"?"copy":F2(i,n),width:$.width,height:$.height},onMouseDown:O,onMouseMove:We,onMouseUp:Fe,onTouchStart:O,onTouchMove:P,onTouchEnd:Fe,onTouchCancel:Fe,onDoubleClick:ne})})});ep.displayName="SketchCanvas";function O2(e){const t=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M4 4h18l6 6v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="${e}" fill-opacity="0.5" stroke="${e}" stroke-opacity="0.3"/><path d="M22 4v4a2 2 0 0 0 2 2h4" fill="none" stroke="${e}" stroke-opacity="0.4"/></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(t)}") 16 16, crosshair`}function F2(e,t){switch(e){case"select":return"default";case"pan":return"grab";case"pen":return"crosshair";case"text":return"text";case"sticky":return t?O2(Wn[t.stickyColor]):"crosshair";default:return"crosshair"}}function dc(e){switch(e){case"nw":case"se":return"nwse-resize";case"ne":case"sw":return"nesw-resize";case"n":case"s":return"ns-resize";case"e":case"w":return"ew-resize";case"line-start":case"line-end":return"nwse-resize";default:return"default"}}function uc(e,t,{showHandles:s=!0}={}){if(e.save(),t.type==="line"){if(e.strokeStyle="#3B82F6",e.lineWidth=2,e.setLineDash([4,4]),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.endX,t.endY),e.stroke(),e.setLineDash([]),s){e.fillStyle="#FFFFFF",e.strokeStyle="#3B82F6",e.lineWidth=1;for(const a of[{x:t.x,y:t.y},{x:t.endX,y:t.endY}])e.beginPath(),e.rect(a.x-Xt/2,a.y-Xt/2,Xt,Xt),e.fill(),e.stroke()}e.restore();return}const i=Pn(t),n=4;if(e.strokeStyle="#3B82F6",e.lineWidth=1,e.setLineDash([4,4]),e.strokeRect(i.x-n,i.y-n,i.width+n*2,i.height+n*2),e.setLineDash([]),!s){e.restore();return}const o=[{x:i.x-n,y:i.y-n},{x:i.x+i.width/2,y:i.y-n},{x:i.x+i.width+n,y:i.y-n},{x:i.x+i.width+n,y:i.y+i.height/2},{x:i.x+i.width+n,y:i.y+i.height+n},{x:i.x+i.width/2,y:i.y+i.height+n},{x:i.x-n,y:i.y+i.height+n},{x:i.x-n,y:i.y+i.height/2}];e.fillStyle="#FFFFFF",e.strokeStyle="#3B82F6",e.lineWidth=1;for(const a of o)e.beginPath(),e.rect(a.x-Xt/2,a.y-Xt/2,Xt,Xt),e.fill(),e.stroke();e.restore()}function I2(e,t,s,i,n){switch(e.save(),e.strokeStyle=n.color,e.lineWidth=n.strokeWidth,i){case"rect":{const o=Math.min(t.x,s.x),a=Math.min(t.y,s.y);e.strokeRect(o,a,Math.abs(s.x-t.x),Math.abs(s.y-t.y));break}case"ellipse":{const o=Math.min(t.x,s.x),a=Math.min(t.y,s.y),c=Math.abs(s.x-t.x),d=Math.abs(s.y-t.y);e.beginPath(),e.ellipse(o+c/2,a+d/2,c/2,d/2,0,0,Math.PI*2),e.stroke();break}case"arrow":{const o=Math.atan2(s.y-t.y,s.x-t.x),a=Math.max(12,n.strokeWidth*4);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(s.x,s.y),e.lineCap="round",e.lineJoin="round",e.stroke(),e.beginPath(),e.moveTo(s.x-a*Math.cos(o-Math.PI/6),s.y-a*Math.sin(o-Math.PI/6)),e.lineTo(s.x,s.y),e.lineTo(s.x-a*Math.cos(o+Math.PI/6),s.y-a*Math.sin(o+Math.PI/6)),e.stroke();break}}e.restore()}const tp=l.memo(({isActive:e=!1})=>{const t=l.useId();return r.jsxs("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",style:{transition:"transform 150ms ease, filter 150ms ease",transform:e?"translateX(4px) scale(1.2)":"translateX(4px) scale(1)",filter:e?"drop-shadow(0px 1px 8px rgba(0,0,0,0.2)) drop-shadow(0px 2px 2px rgba(0,0,0,0.14))":void 0},children:[e&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:`cursorLight-${t}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:.2}),r.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:0})]})}),r.jsx("path",{d:"M14 11.3505V28.0764C14 29.0295 15.2068 29.4423 15.7905 28.6889L19.7946 23.5206C20.0132 23.2384 20.3656 23.0942 20.7194 23.1421L26.967 23.9889C27.9253 24.1188 28.4916 22.9481 27.7948 22.2775L15.6935 10.63C15.0582 10.0185 14 10.4687 14 11.3505Z",style:{fill:e?"#1a1a1a":"none",stroke:e?"#ffffff":"currentColor",transform:e?"rotate(-5deg)":"rotate(0deg)",transformOrigin:"21px 20px",transition:"transform 150ms ease, fill 150ms ease, stroke 150ms ease"}}),e&&r.jsx("path",{d:"M14 11.3505V28.0764C14 29.0295 15.2068 29.4423 15.7905 28.6889L19.7946 23.5206C20.0132 23.2384 20.3656 23.0942 20.7194 23.1421L26.967 23.9889C27.9253 24.1188 28.4916 22.9481 27.7948 22.2775L15.6935 10.63C15.0582 10.0185 14 10.4687 14 11.3505Z",fill:`url(#cursorLight-${t})`,style:{transform:"rotate(-5deg)",transformOrigin:"21px 20px"}})]})});tp.displayName="CursorIcon";const np=l.memo(({isActive:e=!1})=>{const t=l.useId();return r.jsx("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",style:{transition:"transform 150ms ease, filter 150ms ease",transform:e?"scale(1.2) rotate(2deg)":"scale(1) rotate(0deg)",filter:e?"drop-shadow(0px 1px 8px rgba(0,0,0,0.2)) drop-shadow(0px 2px 2px rgba(0,0,0,0.14))":void 0,transformOrigin:"21px 20px"},children:e?r.jsxs(r.Fragment,{children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:`handLight-${t}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:.2}),r.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:0})]})}),r.jsx("path",{d:"M25.5796 30H16.0603C15.9083 29.3719 14.4471 27.8192 13.7514 25.253C13.0961 22.8364 11.1304 19.0341 12.4408 18.4863C13.7512 17.9385 14.4692 19.1651 16.0603 22.4497C15.6916 14.3006 14.6097 12.371 16.3909 11.687C18.1721 11.003 18.4287 15.2427 18.7439 19.1651C19.3411 16.1849 18.3835 10.5035 20.2082 10.0324C22.033 9.56135 21.6221 14.3006 21.5912 19.3892C22.0783 15.2427 22.2564 11.6869 23.9367 11.687C25.6171 11.687 24.7106 15.0649 24.3592 19.9535C25.1668 16.9492 25.5298 14.0991 27.3546 14.5702C29.1793 15.0413 26.5453 20.8804 26.6401 22.7801C26.735 24.6797 25.8838 27.8016 25.5796 30Z",fill:"#1a1a1a",stroke:"#ffffff",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M25.5796 30H16.0603C15.9083 29.3719 14.4471 27.8192 13.7514 25.253C13.0961 22.8364 11.1304 19.0341 12.4408 18.4863C13.7512 17.9385 14.4692 19.1651 16.0603 22.4497C15.6916 14.3006 14.6097 12.371 16.3909 11.687C18.1721 11.003 18.4287 15.2427 18.7439 19.1651C19.3411 16.1849 18.3835 10.5035 20.2082 10.0324C22.033 9.56135 21.6221 14.3006 21.5912 19.3892C22.0783 15.2427 22.2564 11.6869 23.9367 11.687C25.6171 11.687 24.7106 15.0649 24.3592 19.9535C25.1668 16.9492 25.5298 14.0991 27.3546 14.5702C29.1793 15.0413 26.5453 20.8804 26.6401 22.7801C26.735 24.6797 25.8838 27.8016 25.5796 30Z",fill:`url(#handLight-${t})`})]}):r.jsx("path",{d:"M26.0809 30H16.2102C16.0525 29.371 14.5375 27.8161 13.816 25.2463C13.1366 22.8262 11.0983 19.0186 12.4571 18.47C13.8159 17.9215 14.5604 19.1498 16.2102 22.439C15.8279 14.2783 14.026 12.346 15.873 11.6611C17.72 10.9761 18.666 15.2218 18.9928 19.1498C19.6121 16.1653 17.72 10.5044 19.6121 10.0326C21.5042 9.5609 21.9772 14.2783 21.9452 19.3742C22.4502 15.2218 21.6539 11.661 23.3963 11.6611C25.1387 11.6611 25.1797 15.0437 24.8154 19.9393C25.6528 16.9307 25.2884 13.8066 27.1805 14.2784C29.0726 14.7501 27.0822 20.8675 27.1805 22.7698C27.2788 24.6722 26.3962 27.7985 26.0809 30Z",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})})});np.displayName="HandIcon";const rp=l.memo(({color:e="#00000049",isActive:t=!1})=>{const s=l.useId();return r.jsxs("svg",{width:40,height:36,viewBox:"0 0 27 38",fill:"none",style:{overflow:"visible",color:"#d4d3cd"},children:[r.jsx("path",{d:"M0.25 22.1131V60.8136C0.25 63.5164 2.57812 65.7075 5.45 65.7075H21.05C23.9219 65.7075 26.25 63.5164 26.25 60.8136V22.1131C26.25 21.436 26.1007 20.7662 25.8115 20.1462L20.4427 8.63442C19.6132 6.85599 17.7448 5.70746 15.6811 5.70746H10.8189C8.75516 5.70746 6.88676 6.85599 6.05733 8.63442L0.688479 20.1462C0.399308 20.7662 0.25 21.436 0.25 22.1131Z",fill:`url(#pen_body_gradient-${s})`,fillOpacity:t?1:.5}),r.jsx("path",{d:"M0.25 22.1131V60.8136C0.25 63.5164 2.57812 65.7075 5.45 65.7075H21.05C23.9219 65.7075 26.25 63.5164 26.25 60.8136V22.1131C26.25 21.436 26.1007 20.7662 25.8115 20.1462L20.4427 8.63442C19.6132 6.85599 17.7448 5.70746 15.6811 5.70746H10.8189C8.75516 5.70746 6.88676 6.85599 6.05733 8.63442L0.688479 20.1462C0.399308 20.7662 0.25 21.436 0.25 22.1131Z",stroke:"currentColor",strokeWidth:"0.5"}),r.jsx("path",{d:"M13.0254 0.000615742C13.8827 -0.0174671 14.7699 0.362489 15.2529 1.17347L18.46 6.1139L18.5283 6.21937C17.6868 5.73239 16.7065 5.45765 15.6807 5.45765H10.8193C9.7975 5.45765 8.82077 5.73011 7.98145 6.21351L8.03418 6.12366L10.8594 1.26722C11.3003 0.435527 12.1682 0.0187263 13.0254 0.000615742Z",fill:e}),r.jsx("rect",{x:"0.5",y:"33.2493",width:"25.5",height:"1",fill:e}),r.jsx("rect",{x:"0.5",y:"32.2493",width:"25.5",height:"1",fill:e}),r.jsx("rect",{x:"0.5",y:"32.2493",width:"25.5",height:"1",fill:"black",fillOpacity:"0.3"}),r.jsx("rect",{x:"0.5",y:"34.2493",width:"25.5",height:"1",fill:e}),r.jsx("rect",{x:"0.5",y:"34.2493",width:"25.5",height:"1",fill:"black",fillOpacity:"0.3"}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:`pen_body_gradient-${s}`,x1:"26.25",y1:"35",x2:"0.25",y2:"35",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#E0E0E0"}),r.jsx("stop",{offset:"0.298077",stopColor:"#D9D9D9"}),r.jsx("stop",{offset:"0.673077",stopColor:"#FEFEFE"}),r.jsx("stop",{offset:"1",stopColor:"#F3F3F3"})]})})]})});rp.displayName="PenIcon";const sp=l.memo(({active:e,color:t})=>{const s=l.useId();return e?r.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",fill:t||"#CBCADB"}),r.jsx("rect",{x:"2.25",y:"2.25",width:"19.5",height:"19.5",rx:"4.75",stroke:"black",strokeOpacity:"0.1",strokeWidth:"0.5"}),r.jsx("path",{d:"M7 13.19C7 12.69 7.19 8.01 7.5 7.69C8.74 6.4 9 12.19 10.5 12.19C12 12.19 12.01 10.07 12.91 10.07C13.81 10.07 14 11.29 15.5 11.29C17 11.29 17 10.69 18 9.69",stroke:"black",strokeOpacity:"0.25",strokeWidth:"2",strokeLinecap:"round"})]}):r.jsxs("svg",{width:40,height:36,viewBox:"0 0 41 38",fill:"none",children:[r.jsxs("g",{filter:`url(#stickies_shadow_1-${s})`,children:[r.jsx("rect",{x:"18",y:"2",width:"18",height:"13",rx:"4",fill:"#BCD1CA",fillOpacity:"0.5",shapeRendering:"crispEdges"}),r.jsx("rect",{x:"18.25",y:"2.25",width:"17.5",height:"12.5",rx:"3.75",stroke:`url(#stickies_grad_1-${s})`,strokeOpacity:"0.5",strokeWidth:"0.5",shapeRendering:"crispEdges"})]}),r.jsx("line",{x1:"22",y1:"6.5",x2:"32.9231",y2:"6.5",stroke:"black",strokeOpacity:"0.2",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("line",{x1:"22",y1:"10.1667",x2:"28.3077",y2:"10.1667",stroke:"black",strokeOpacity:"0.2",strokeWidth:"2",strokeLinecap:"round"}),r.jsxs("g",{filter:`url(#stickies_shadow_2-${s})`,children:[r.jsx("rect",{x:"3",y:"11",width:"18",height:"14",rx:"4",fill:"#D0849E",fillOpacity:"0.4",shapeRendering:"crispEdges"}),r.jsx("rect",{x:"3.25",y:"11.25",width:"17.5",height:"13.5",rx:"3.75",stroke:`url(#stickies_grad_2-${s})`,strokeOpacity:"0.5",strokeWidth:"0.5",shapeRendering:"crispEdges"})]}),r.jsx("line",{x1:"7",y1:"16.5",x2:"17.9231",y2:"16.5",stroke:"black",strokeOpacity:"0.2",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("line",{x1:"7",y1:"20.1667",x2:"13.3077",y2:"20.1667",stroke:"black",strokeOpacity:"0.2",strokeWidth:"2",strokeLinecap:"round"}),r.jsxs("g",{filter:`url(#stickies_shadow_3-${s})`,children:[r.jsx("rect",{x:"16",y:"13",width:"22",height:"20",rx:"4",fill:"#CBCADB",fillOpacity:"0.8",shapeRendering:"crispEdges"}),r.jsx("rect",{x:"16.25",y:"13.25",width:"21.5",height:"19.5",rx:"3.75",stroke:`url(#stickies_grad_3-${s})`,strokeOpacity:"0.5",strokeWidth:"0.5",shapeRendering:"crispEdges"})]}),r.jsx("path",{d:"M22 25.1881C22 24.6881 22.1881 20.0136 22.5 19.6881C23.7387 18.3955 24 24.1881 25.5 24.1881C27 24.1881 27.0135 22.0685 27.9093 22.0685C28.8052 22.0685 29 23.2892 30.5 23.2892C32 23.2892 32 22.6881 33 21.6881",stroke:"black",strokeOpacity:"0.2",strokeWidth:"2",strokeLinecap:"round"}),r.jsxs("defs",{children:[r.jsxs("filter",{id:`stickies_shadow_1-${s}`,x:"14",y:"-2",width:"26",height:"22",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[r.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),r.jsx("feOffset",{dy:"2"}),r.jsx("feGaussianBlur",{stdDeviation:"1.5"}),r.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),r.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),r.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),r.jsxs("filter",{id:`stickies_shadow_2-${s}`,x:"-1",y:"7",width:"26",height:"23",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[r.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),r.jsx("feOffset",{dy:"2"}),r.jsx("feGaussianBlur",{stdDeviation:"1.5"}),r.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),r.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),r.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),r.jsxs("filter",{id:`stickies_shadow_3-${s}`,x:"12",y:"9",width:"30",height:"29",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[r.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),r.jsx("feOffset",{dy:"2"}),r.jsx("feGaussianBlur",{stdDeviation:"1.5"}),r.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),r.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),r.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),r.jsxs("linearGradient",{id:`stickies_grad_1-${s}`,x1:"18.4091",y1:"2.325",x2:"31.6154",y2:"17.732",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopOpacity:"0.2"}),r.jsx("stop",{offset:"1",stopOpacity:"0.1"})]}),r.jsxs("linearGradient",{id:`stickies_grad_2-${s}`,x1:"3.40909",y1:"11.35",x2:"17.7546",y2:"26.8906",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopOpacity:"0.2"}),r.jsx("stop",{offset:"1",stopOpacity:"0.1"})]}),r.jsxs("linearGradient",{id:`stickies_grad_3-${s}`,x1:"16.5",y1:"13.5",x2:"37",y2:"32.5",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopOpacity:"0.2"}),r.jsx("stop",{offset:"1",stopOpacity:"0.1"})]})]})]})});sp.displayName="StickiesIcon";const ip=l.memo(({color:e})=>r.jsxs("svg",{width:40,height:36,viewBox:"0 0 40 36",fill:"none",children:[r.jsx("path",{d:"M12.816 11.933C10.854 11.933 10.143 12.527 9.675 14.534H9V11.024H21.51V14.534H20.835C20.367 12.527 19.656 11.933 17.694 11.933H16.218V22.409C16.218 23.417 16.614 23.741 17.901 23.822V24.524H12.609V23.822C13.896 23.741 14.292 23.417 14.292 22.409V11.933H12.816Z",fill:e||"currentColor"}),r.jsx("path",{d:"M27.8021 21.8826V18.4421H26.9688V17.6255H27.8021V13.385C27.6283 12.9558 27.3615 12.5709 27.0499 12.2822C26.8256 12.1116 26.5732 11.9818 26.3453 11.909C26.011 11.8421 25.6692 11.8193 25.3289 11.8413L25.2753 11.0097C25.6883 10.983 26.1031 11.0107 26.5502 11.1024C26.9126 11.2145 27.2524 11.3892 27.584 11.6437C27.8239 11.8641 28.0349 12.1126 28.2129 12.3831C28.4015 12.108 28.6299 11.856 28.8966 11.6317C29.1966 11.4106 29.5272 11.2342 29.9373 11.0918C30.3401 11.0115 30.7516 10.9839 31.1616 11.0096L31.1094 11.8413C30.7715 11.8201 30.4323 11.8429 30.1596 11.8926C29.8849 11.9912 29.626 12.1293 29.4125 12.2856C29.0692 12.5752 28.8 12.9424 28.6271 13.3565V17.6255H29.4605V18.4421H28.6271V21.9024C28.8021 22.3168 29.0731 22.6833 29.4 22.9572C29.6342 23.1305 29.8927 23.2684 30.1119 23.3508C30.4408 23.4192 30.7772 23.4445 31.1126 23.4261L31.1583 24.2582C30.7507 24.2805 30.342 24.2498 29.887 24.1512C29.5355 24.0257 29.2043 23.8491 28.8851 23.612C28.6287 23.3979 28.4039 23.1506 28.216 22.8776C28.0336 23.1542 27.8134 23.4118 27.5546 23.6486C27.2527 23.8786 26.9126 24.0535 26.5091 24.1757C26.1032 24.2571 25.6883 24.2848 25.2751 24.2579L25.3291 23.4263C25.6693 23.4485 26.0109 23.4257 26.3044 23.3689C26.5734 23.286 26.8257 23.1563 27.02 23.0105C27.3609 22.6969 27.628 22.3117 27.8021 21.8826Z",fill:e||"currentColor"})]}));ip.displayName="TextIcon";const op=l.memo(({color:e})=>r.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M6 18L18 6",stroke:e||"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M18 6L11 6",stroke:e||"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18 6L18 13",stroke:e||"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}));op.displayName="ArrowIcon";const ap=l.memo(({size:e=24,color:t="#6B7280"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 17 10",fill:"none",children:r.jsx("path",{d:"M1.30005 8.69667C1.30005 8.04667 1.54458 1.96978 1.95005 1.54667C3.5604 -0.133737 3.90004 7.39665 5.85004 7.39667C7.80004 7.3967 7.8176 4.64123 8.98219 4.64123C10.1468 4.64123 10.4 6.22803 12.35 6.22803C14.3 6.22803 14.3 5.44667 15.6 4.14667",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})}));ap.displayName="ThinBrushIcon";const lp=l.memo(({size:e=24,color:t="#000000"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 17 10",fill:"none",children:r.jsx("path",{d:"M1.30005 8.69667C1.30005 8.04667 1.54458 1.96978 1.95005 1.54667C3.5604 -0.133737 3.90004 7.39665 5.85004 7.39667C7.80004 7.3967 7.8176 4.64123 8.98219 4.64123C10.1468 4.64123 10.4 6.22803 12.35 6.22803C14.3 6.22803 14.3 5.44667 15.6 4.14667",stroke:t,strokeWidth:"2.6",strokeLinecap:"round"})}));lp.displayName="ThickBrushIcon";const z2=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,pc=x.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  border: 0.5px solid rgba(15, 12, 8, 0.14);
  background: #ffffff;
  padding: 4px;
  box-shadow:
    0 1px 3px rgba(20, 20, 19, 0.06),
    0 1px 2px rgba(20, 20, 19, 0.04);
`,bi=x.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,yi=x.div`
  margin: 0 4px;
  height: 24px;
  width: 1px;
  background: rgba(15, 12, 8, 0.14);
`,N2=x.div`
  margin: 0 6px;
`,zn=x.button`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  background: ${e=>e.$active?e.$bgColor||"rgba(15, 12, 8, 0.36)":"transparent"};
  color: ${e=>e.$active?"#ffffff":"rgba(15, 12, 8, 0.64)"};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  position: relative;
  padding: 0;
  ${e=>e.$active&&!e.$bgColor?"background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);":""}
  &:hover {
    background: ${e=>e.$active?e.$bgColor||"rgba(15, 12, 8, 0.36)":"rgba(15, 12, 8, 0.04)"};
  }
`,Nn=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s;
  transform: ${e=>e.$active?"scale(1.1)":"scale(1)"};
`,fc=x.button`
  width: 24px;
  height: 24px;
  border-radius: ${e=>e.$square?"6px":"50%"};
  border: none;
  background: ${e=>e.$color};
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
  box-shadow: ${e=>e.$selected?`0 0 0 2px #ffffff, 0 0 0 4px ${e.$color}`:"none"};
  padding: 0;
`,B2=x.button`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: ${e=>e.$selected&&e.$bgColor||"transparent"};
  padding: 0;
  transition: background 0.15s;
  &:hover { background: ${e=>e.$selected?void 0:"rgba(15, 12, 8, 0.04)"}; }
`,H2=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 4px;
  padding: 4px 0;
`,U2=x.button`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${e=>e.$active?void 0:"transparent"};
  transition: background 0.15s;
  &:hover { background: ${e=>e.$active?void 0:"rgba(15, 12, 8, 0.04)"}; }
`,W2=x.div`
  position: absolute;
  bottom: 6px;
  left: 6px;
  width: 17.6px;
  height: 17.6px;
  border-radius: 3px;
  border: 1px solid ${e=>e.$active?e.$color:"rgba(15, 12, 8, 0.14)"};
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(1px);
  cursor: pointer;
  transition: transform 0.15s;
  z-index: ${e=>e.$active?10:1};
  transform: ${e=>e.$active?"scale(1.1)":"scale(1)"};
`,G2=x.div`
  position: absolute;
  right: 4px;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${e=>e.$active?e.$color:"rgba(15, 12, 8, 0.14)"};
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(1px);
  cursor: pointer;
  transition: transform 0.15s;
  z-index: ${e=>e.$active?10:1};
  transform: ${e=>e.$active?"scale(1.1)":"scale(1)"};
`,J2=x.span`
  font-size: 11px;
  font-weight: ${e=>e.$saved?500:400};
  font-family: inherit;
  color: ${e=>e.$saved?"#BF6A3A":"rgba(15, 12, 8, 0.36)"};
  width: 50px;
  text-align: center;
  white-space: nowrap;
`,cp=l.memo(({activeTool:e,toolOptions:t,isDrawing:s,dirty:i,onSave:n,onToolChange:o,onToolOptionsChange:a})=>{const[c,d]=l.useState(!0),u=l.useRef(!1);s&&!u.current&&d(!0),u.current=!!s;const p=l.useCallback(M=>{M===e?d(L=>!L):(d(!1),o(M))},[e,o]),f=l.useCallback(M=>a({color:M}),[a]),b=l.useCallback(M=>a({brushSize:M}),[a]),m=l.useCallback(M=>a({stickyColor:M}),[a]),y=e==="pen",g=e==="rect"||e==="ellipse",C=e==="arrow",v=!c&&(y||e==="text"||g||C||e==="sticky"),w=l.useRef(null),S=l.useRef(null),k=l.useRef(null),E=l.useRef(null),T=l.useRef(null),_=l.useRef(null),[R,$]=l.useState(0);return l.useLayoutEffect(()=>{if(!v||!w.current)return;const L=(y?S:e==="text"?k:e==="arrow"?T:g?E:_).current;if(!L)return;const z=w.current.getBoundingClientRect(),J=L.getBoundingClientRect();$(J.left+J.width/2-(z.left+z.width/2))},[e,v,y,g]),r.jsxs(z2,{children:[r.jsxs(pc,{ref:w,children:[r.jsxs(bi,{children:[r.jsx(zn,{$active:e==="select",onClick:()=>p("select"),title:"Select (V)",children:r.jsx(Nn,{$active:e==="select",children:r.jsx(tp,{isActive:e==="select"})})}),r.jsx(zn,{$active:e==="pan",onClick:()=>p("pan"),title:"Pan (H)",children:r.jsx(Nn,{$active:e==="pan",children:r.jsx(np,{isActive:e==="pan"})})})]}),r.jsx(yi,{}),r.jsxs(bi,{children:[r.jsx(zn,{ref:S,$active:y,$bgColor:y?`${t.color}26`:void 0,onClick:()=>p("pen"),title:"Pen (P)",style:y?{color:t.color}:void 0,children:r.jsx(Nn,{$active:y,style:{transform:y?"translateY(4px) scale(1.1)":"translateY(4px)"},children:r.jsx(rp,{color:t.color,isActive:y})})}),r.jsx("span",{ref:k,children:r.jsx(zn,{$active:e==="text",$bgColor:e==="text"?`${t.color}26`:void 0,onClick:()=>p("text"),title:"Text (T)",children:r.jsx(Nn,{$active:e==="text",children:r.jsx(ip,{color:e==="text"?t.color:void 0})})})}),r.jsxs(U2,{ref:E,$active:g,onClick:()=>p("ellipse"),title:"Shapes (R)",style:g?{background:`${t.color}26`}:void 0,children:[r.jsx(W2,{$active:e==="rect",$color:t.color,onClick:M=>{M.stopPropagation(),p("rect")}}),r.jsx(G2,{$active:e==="ellipse",$color:t.color,onClick:M=>{M.stopPropagation(),p("ellipse")}})]}),r.jsx("span",{ref:T,children:r.jsx(zn,{$active:C,$bgColor:C?`${t.color}26`:void 0,onClick:()=>p("arrow"),title:"Arrow (A)",children:r.jsx(Nn,{$active:C,children:r.jsx(op,{color:C?t.color:void 0})})})}),r.jsx("span",{ref:_,children:r.jsx(zn,{$active:e==="sticky",$bgColor:e==="sticky"?`${Wn[t.stickyColor]}80`:void 0,onClick:()=>p("sticky"),title:"Sticky Note (S)",children:r.jsx(Nn,{$active:e==="sticky",children:r.jsx(sp,{active:e==="sticky",color:Wn[t.stickyColor]})})})})]}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx(yi,{}),r.jsx(N2,{children:n?r.jsx(fe,{variant:"black",size:"xs",disabled:!i,onClick:n,children:"Save"}):r.jsx(J2,{$saved:!i,children:i?"Saving…":"Saved"})})]})]}),v&&r.jsxs(pc,{style:{transform:`translateX(${R}px)`},children:[e==="pen"&&r.jsxs(r.Fragment,{children:[r.jsx(bi,{children:mi.map(M=>r.jsx(B2,{$selected:t.brushSize===M,$bgColor:t.brushSize===M?`${t.color}26`:void 0,onClick:()=>b(M),title:M===mi[0]?"Thin brush":"Thick brush",children:M===mi[0]?r.jsx(ap,{size:24,color:t.brushSize===M?t.color:"#9CA3AF"}):r.jsx(lp,{size:24,color:t.brushSize===M?t.color:"#9CA3AF"})},M))}),r.jsx(yi,{})]}),r.jsx(H2,{children:e==="sticky"?Object.entries(Wn).map(([M,L])=>r.jsx(fc,{$color:L,$square:!0,$selected:t.stickyColor===M,onClick:()=>m(M),title:M},M)):y2.map(M=>r.jsx(fc,{$color:M,$selected:t.color===M,onClick:()=>f(M),title:M},M))})]})]})});cp.displayName="SketchToolbar";const K2=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  outline: none;
  width: 100%;
  height: 100%;
`,X2=x.div`
  position: relative;
  height: 100%;
`,q2=x.div`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;function V2(e){const t=[];for(const s of e)s.type==="text"||s.type==="sticky"?s.data.content&&t.push(s.data.content):s.type==="rect"||s.type==="ellipse"?s.data.text&&t.push(s.data.text):"data"in s&&"label"in s.data&&s.data.label&&t.push(String(s.data.label));return t.join(`
`)}function hc(e){const t=JSON.stringify({type:Yu,objects:e}),s=V2(e);try{const i=new ClipboardItem({[to]:new Blob([t],{type:to}),"text/plain":new Blob([s],{type:"text/plain"})});navigator.clipboard.write([i]).catch(()=>navigator.clipboard.writeText(t).catch(()=>{}))}catch{navigator.clipboard.writeText(t).catch(()=>{})}}const dp=l.memo(({onSubmit:e,onClose:t,onChange:s,initialObjects:i,dirty:n,onSave:o})=>{const[a,c]=l.useState("pen"),[d,u]=l.useState(w2),[p,f]=l.useState([]),[b,m]=l.useState({x:0,y:0}),[y,g]=l.useState(1),[C,v]=l.useState(null),[w,S]=l.useState(""),[k,E]=l.useState(!1),T=l.useRef(null),_="dots",{objects:R,pushState:$,replaceState:M,undo:L,redo:z}=v2(i||[]),J=l.useRef(R);J.current=R;const[I,te]=l.useState(0);l.useEffect(()=>{const D=(i||[]).filter(P=>P.type==="image");if(D.length===0)return;let O=!1;return Promise.allSettled(D.map(P=>$s(P.data.src))).then(()=>{O||te(P=>P+1)}),()=>{O=!0}},[i]);const ce=l.useRef(R);l.useEffect(()=>{R!==ce.current&&(ce.current=R,s?.(R))},[R,s]);const ue=l.useCallback(D=>$(D),[$]),me=l.useCallback(D=>M(D),[M]),de=l.useCallback(D=>{c(D),f([])},[]),De=l.useCallback(D=>u(O=>({...O,...D})),[]),Re=l.useCallback(D=>f(D),[]),je=l.useCallback(D=>m(D),[]),H=l.useCallback(D=>g(D),[]),ke=l.useCallback(()=>{p.length>0&&($(R.filter(D=>!p.includes(D.id))),f([]))},[R,p,$]),X=l.useCallback(()=>f(R.map(D=>D.id)),[R]),Se=l.useCallback(()=>{p.length!==0&&hc(R.filter(D=>p.includes(D.id)))},[R,p]),oe=l.useCallback(D=>{const O=T.current?.getBoundingClientRect(),P=O?(O.width/2-b.x)/y:100,B=O?(O.height/2-b.y)/y:100,ne={id:Yt(),type:"text",x:P,y:B,data:{content:D,fontSize:d.fontSize,color:d.color,bold:d.bold}};$([...J.current,ne]),f([ne.id]),S(D),v(ne.id)},[b,y,d,$]),he=l.useCallback(D=>{const O=D.map(B=>{const ne=structuredClone(B);return ne.id=Yt(),ne.type==="stroke"?ne.data.points=ne.data.points.map(se=>({...se,x:se.x+un,y:se.y+un})):ne.type==="line"?(ne.x+=un,ne.y+=un,ne.endX+=un,ne.endY+=un):(ne.x+=un,ne.y+=un),ne});$([...J.current,...O]),f(O.map(B=>B.id)),hc(O);const P=O.filter(B=>B.type==="image");P.length>0&&Promise.allSettled(P.map(B=>$s(B.data.src))).then(()=>{te(B=>B+1)})},[$]),pe=l.useCallback(()=>{C?v(null):p.length>0?f([]):a!=="select"&&c("select")},[C,p,a]),Le=l.useCallback(D=>{const O=J.current.find(P=>P.id===D);O?O.type==="text"||O.type==="sticky"?S(O.data.content):O.type==="rect"||O.type==="ellipse"?S(O.data.text||""):["ui-button","ui-input","ui-checkbox","ui-radio","ui-dropdown"].includes(O.type)?S(O.data.label):S(""):S(""),v(D)},[]);k2({onToolChange:de,onUndo:L,onRedo:z,onDelete:ke,onSelectAll:X,onCopy:Se,onEscape:pe,isEnabled:!C&&!k}),l.useEffect(()=>{T.current?.focus()},[]);const re=l.useCallback((D,O)=>{const P=R.map(B=>{if(B.id!==D)return B;if(B.type==="text"){const se=document.createElement("canvas").getContext("2d");if(se){se.font=`${B.data.bold?"bold ":""}${B.data.fontSize}px system-ui, sans-serif`;const Oe=B.width||150,Me=ds(se,O,Oe),Fe=B.data.fontSize*1.3,Pe=Math.max(...Me.map(We=>se.measureText(We).width),20);return{...B,width:B.width||Math.ceil(Pe),height:Math.ceil(Me.length*Fe),data:{...B.data,content:O}}}return{...B,data:{...B.data,content:O}}}return B.type==="sticky"?{...B,data:{...B.data,content:O}}:B.type==="rect"||B.type==="ellipse"?{...B,data:{...B.data,text:O}}:["ui-button","ui-input","ui-checkbox","ui-radio","ui-dropdown"].includes(B.type)?{...B,data:{...B.data,label:O}}:B});$(P),v(null)},[R,$]),U=l.useCallback(D=>{const O=R.find(B=>B.id===C),P=D??(O?.type==="text"?O.data.content:"")??"";if(O?.type==="text"&&!P.trim()){const B=R.filter(ne=>ne.id!==C);O.data.content.trim()?$(B):M(B)}v(null)},[R,C,$,M]);return r.jsx(K2,{ref:T,tabIndex:-1,onKeyDown:D=>{D.key==="Escape"&&(D.preventDefault(),pe())},children:r.jsxs(X2,{children:[r.jsx(ep,{objects:R,imageGeneration:I,selectedIds:p,activeTool:a,toolOptions:d,background:_,viewMode:"expanded",pan:b,zoom:y,editingTextId:C,editingValue:w,onObjectsChange:ue,onObjectsReplace:me,onObjectsPaste:he,onTextPaste:oe,onSelectionChange:Re,onPanChange:je,onZoomChange:H,onTextEdit:Le,onToolChange:de,onDrawingChange:E}),r.jsx(up,{objects:R,editingId:C,value:w,onValueChange:S,pan:b,zoom:y,onSave:re,onCancel:U}),r.jsx(q2,{children:r.jsx(cp,{activeTool:a,toolOptions:d,isDrawing:k,dirty:n,onSave:o,onToolChange:de,onToolOptionsChange:De})})]})})});dp.displayName="SketchWidget";const Y2=x.div`
  pointer-events: auto;
  position: absolute;
`,Z2=x.textarea`
  background: transparent;
  resize: none;
  font-family: system-ui, sans-serif;
  line-height: 1.3;
  outline: none;
  box-shadow: none;
  border: none;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  overflow: hidden;
  margin: 0;
`,up=l.memo(({objects:e,editingId:t,value:s,onValueChange:i,pan:n,zoom:o,onSave:a,onCancel:c})=>{const d=l.useRef(null),u=t?e.find(_=>_.id===t):null;l.useEffect(()=>{if(!u)return;const _=u.type==="text";setTimeout(()=>{if(d.current)if(d.current.focus(),_){const R=d.current.value.length;d.current.setSelectionRange(R,R),d.current.style.height="0",d.current.style.height=`${d.current.scrollHeight}px`}else d.current.select()},0)},[u]);const p=u?.type==="text",f=l.useCallback(_=>{(_.key==="Enter"&&!_.shiftKey||_.key==="Escape")&&(_.preventDefault(),_.key==="Escape"&&_.stopPropagation(),d.current?.blur())},[]),b=l.useCallback(()=>{t&&(s.trim()||!p)?a(t,s):c(s)},[t,s,p,a,c]),m=l.useCallback(()=>{const _=d.current;!_||!u||(u.type==="text"?(_.style.height="0",_.style.height=`${_.scrollHeight}px`):(u.type==="rect"||u.type==="ellipse")&&(_.style.height="0",_.style.height=`${Math.min(_.scrollHeight,(u.height-16)*o)}px`))},[u,o]);if(l.useLayoutEffect(()=>{m()},[s,m]),!t||!u)return null;const y=u.type==="text",g=u.type==="sticky",C=u.type==="rect"||u.type==="ellipse",v=y?u.data.fontSize:14,w=g?Wn[u.data.color]:void 0,k=(g?Math.min(16,u.width*.1,u.height*.1):0)*o,E=v*.15,T=y?{left:(u.x-2)*o+n.x,top:(u.y-E)*o+n.y,width:u.width?u.width+4:void 0,transform:`scale(${o})`,transformOrigin:"top left",outline:"1px solid rgba(106,155,204,0.4)",borderRadius:2}:{left:u.x*o+n.x,top:u.y*o+n.y,width:g||C?u.width*o:void 0,height:g||C?u.height*o:void 0,transformOrigin:"top left",minWidth:g?100*o:void 0,minHeight:g?60*o:void 0,backgroundColor:w,clipPath:g?`polygon(0 0, calc(100% - ${k}px) 0, 100% ${k}px, 100% 100%, 0 100%)`:void 0,boxShadow:g?"0 1px 3px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.12)":void 0,borderRadius:u.type==="ellipse"?"50%":void 0,display:C?"flex":void 0,alignItems:C?"center":void 0,justifyContent:C?"center":void 0};return r.jsxs(Y2,{style:T,children:[g&&r.jsx("svg",{style:{pointerEvents:"none",position:"absolute",top:0,right:0},width:k,height:k,children:r.jsx("path",{d:`M0,0 L0,${k} L${k},${k} Z`,fill:"rgba(0,0,0,0.06)",stroke:"rgba(0,0,0,0.12)",strokeWidth:"0.5"})}),r.jsx(Z2,{ref:d,value:s,onChange:_=>i(_.target.value),onKeyDown:f,onBlur:b,placeholder:g?"Jot a thought...":"",style:{fontSize:y?v:v*o,fontWeight:y&&u.data.bold?"bold":"normal",color:y?"transparent":g?"#1F2937":void 0,caretColor:y?u.data.color:void 0,textAlign:C?"center":void 0,paddingTop:g?(8-Math.round(v*.15))*o:C?8*o:0,paddingBottom:C?8*o:0,paddingLeft:g?8*o:C?12*o:2,paddingRight:g?8*o:C?12*o:2,width:"100%",height:g?"100%":void 0,minHeight:y?Math.ceil(v*1.3)+4:void 0,...g?{mixBlendMode:"luminosity"}:{}}})]})});up.displayName="TextEditor";const wi=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${h.bg.surface};
`,Q2=x.div`
  flex: 1;
  min-height: 0;
`;function e_({filePath:e}){const{projectPath:t}=vt(),s=mn(t,e),[i,n]=l.useState(null),[o,a]=l.useState(null),[c,d]=l.useState(!1),u=l.useRef([]),p=l.useRef(!1),f=l.useRef(!0),b=l.useRef(s);b.current=s;const{exportToPNG:m}=Qu(),y=l.useRef(()=>{}),g=l.useRef(Promise.resolve());l.useEffect(()=>(f.current=!0,G.readNapkin(s).then(S=>{f.current&&(S.success&&S.data?n(S.data.objects||[]):a(S.error||"Failed to load napkin file"))}).catch(S=>{f.current&&a(S instanceof Error?S.message:"Failed to load napkin file")}),()=>{f.current=!1}),[s]),l.useEffect(()=>{const S=()=>{if(p.current)return y.current(u.current)},k=()=>{document.hidden&&S()},E=()=>S(),T=Wx(S);return document.addEventListener("visibilitychange",k),window.addEventListener("beforeunload",E),()=>{T(),document.removeEventListener("visibilitychange",k),window.removeEventListener("beforeunload",E),S()}},[]);const C=l.useCallback(S=>{const E=g.current.catch(()=>{}).then(async()=>{if(await G.saveNapkin(s,S),f.current&&S.length>0)try{let _=1/0,R=1/0,$=-1/0,M=-1/0;for(const X of S){const Se=Pn(X);_=Math.min(_,Se.x),R=Math.min(R,Se.y),$=Math.max($,Se.x+Se.width),M=Math.max(M,Se.y+Se.height)}const L=Math.max($-_+80,100),z=Math.max(M-R+80,100),J=_-40,I=R-40,te=1568,ce=200;let ue=Math.min(2,te/Math.max(L,z));Math.min(L,z)*ue<ce&&(ue=Math.max(ue,ce/Math.min(L,z))),ue=Math.min(ue,te/Math.max(L,z));const me=Math.round(L),de=Math.round(z),Re=await(await m(S,me,de,"dots",{x:J,y:I,width:me,height:de,scale:ue})).arrayBuffer(),je=new Uint8Array(Re);let H="";const ke=8192;for(let X=0;X<je.length;X+=ke)H+=String.fromCharCode(...je.slice(X,X+ke));H=btoa(H),await G.saveThumbnail(s,H)}catch{}u.current===S&&(p.current=!1,f.current&&d(!1))});return g.current=E,E},[s,m]);y.current=C;const v=l.useCallback(S=>{u.current=S,p.current=!0,d(!0)},[]),w=l.useCallback(()=>{p.current&&C(u.current)},[C]);return o?r.jsx(wi,{style:{alignItems:"center",justifyContent:"center"},children:r.jsxs("span",{style:{color:h.text.tertiary,fontSize:13},children:["Failed to load: ",o]})}):i===null?r.jsx(wi,{}):r.jsx(wi,{children:r.jsx(Q2,{children:r.jsx(dp,{initialObjects:i,onChange:v,dirty:c,onSave:w},e)})})}/*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE */const{entries:pp,setPrototypeOf:gc,isFrozen:t_,getPrototypeOf:n_,getOwnPropertyDescriptor:r_}=Object;let{freeze:Pt,seal:Bt,create:us}=Object,{apply:ro,construct:so}=typeof Reflect<"u"&&Reflect;Pt||(Pt=function(t){return t});Bt||(Bt=function(t){return t});ro||(ro=function(t,s){for(var i=arguments.length,n=new Array(i>2?i-2:0),o=2;o<i;o++)n[o-2]=arguments[o];return t.apply(s,n)});so||(so=function(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];return new t(...i)});const ns=Ot(Array.prototype.forEach),s_=Ot(Array.prototype.lastIndexOf),mc=Ot(Array.prototype.pop),lr=Ot(Array.prototype.push),i_=Ot(Array.prototype.splice),ps=Ot(String.prototype.toLowerCase),vi=Ot(String.prototype.toString),ki=Ot(String.prototype.match),cr=Ot(String.prototype.replace),o_=Ot(String.prototype.indexOf),a_=Ot(String.prototype.trim),It=Ot(Object.prototype.hasOwnProperty),Mt=Ot(RegExp.prototype.test),dr=l_(TypeError);function Ot(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];return ro(e,t,i)}}function l_(e){return function(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return so(e,s)}}function et(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ps;gc&&gc(e,null);let i=t.length;for(;i--;){let n=t[i];if(typeof n=="string"){const o=s(n);o!==n&&(t_(t)||(t[i]=o),n=o)}e[n]=!0}return e}function c_(e){for(let t=0;t<e.length;t++)It(e,t)||(e[t]=null);return e}function Kt(e){const t=us(null);for(const[s,i]of pp(e))It(e,s)&&(Array.isArray(i)?t[s]=c_(i):i&&typeof i=="object"&&i.constructor===Object?t[s]=Kt(i):t[s]=i);return t}function ur(e,t){for(;e!==null;){const i=r_(e,t);if(i){if(i.get)return Ot(i.get);if(typeof i.value=="function")return Ot(i.value)}e=n_(e)}function s(){return null}return s}const xc=Pt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Si=Pt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ci=Pt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),d_=Pt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),_i=Pt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),u_=Pt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),bc=Pt(["#text"]),yc=Pt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),$i=Pt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),wc=Pt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rs=Pt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),p_=Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),f_=Bt(/<%[\w\W]*|[\w\W]*%>/gm),h_=Bt(/\$\{[\w\W]*/gm),g_=Bt(/^data-[\-\w.\u00B7-\uFFFF]+$/),m_=Bt(/^aria-[\-\w]+$/),fp=Bt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),x_=Bt(/^(?:\w+script|data):/i),b_=Bt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hp=Bt(/^html$/i),y_=Bt(/^[a-z][.\w]*(-[.\w]+)+$/i);var vc=Object.freeze({__proto__:null,ARIA_ATTR:m_,ATTR_WHITESPACE:b_,CUSTOM_ELEMENT:y_,DATA_ATTR:g_,DOCTYPE_NAME:hp,ERB_EXPR:f_,IS_ALLOWED_URI:fp,IS_SCRIPT_OR_DATA:x_,MUSTACHE_EXPR:p_,TMPLIT_EXPR:h_});const pr={element:1,text:3,progressingInstruction:7,comment:8,document:9},w_=function(){return typeof window>"u"?null:window},v_=function(t,s){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let i=null;const n="data-tt-policy-suffix";s&&s.hasAttribute(n)&&(i=s.getAttribute(n));const o="dompurify"+(i?"#"+i:"");try{return t.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}},kc=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function gp(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w_();const t=W=>gp(W);if(t.version="3.3.3",t.removed=[],!e||!e.document||e.document.nodeType!==pr.document||!e.Element)return t.isSupported=!1,t;let{document:s}=e;const i=s,n=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:a,Node:c,Element:d,NodeFilter:u,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:b,trustedTypes:m}=e,y=d.prototype,g=ur(y,"cloneNode"),C=ur(y,"remove"),v=ur(y,"nextSibling"),w=ur(y,"childNodes"),S=ur(y,"parentNode");if(typeof a=="function"){const W=s.createElement("template");W.content&&W.content.ownerDocument&&(s=W.content.ownerDocument)}let k,E="";const{implementation:T,createNodeIterator:_,createDocumentFragment:R,getElementsByTagName:$}=s,{importNode:M}=i;let L=kc();t.isSupported=typeof pp=="function"&&typeof S=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:z,ERB_EXPR:J,TMPLIT_EXPR:I,DATA_ATTR:te,ARIA_ATTR:ce,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:me,CUSTOM_ELEMENT:de}=vc;let{IS_ALLOWED_URI:De}=vc,Re=null;const je=et({},[...xc,...Si,...Ci,..._i,...bc]);let H=null;const ke=et({},[...yc,...$i,...wc,...rs]);let X=Object.seal(us(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,oe=null;const he=Object.seal(us(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let pe=!0,Le=!0,re=!1,U=!0,D=!1,O=!0,P=!1,B=!1,ne=!1,se=!1,Oe=!1,Me=!1,Fe=!0,Pe=!1;const We="user-content-";let tt=!0,Ee=!1,Je={},Ie=null;const le=et({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let q=null;const we=et({},["audio","video","img","source","image","track"]);let ie=null;const Ge=et({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ze="http://www.w3.org/1998/Math/MathML",qe="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml";let Xe=Ke,rt=!1,yt=null;const kt=et({},[ze,qe,Ke],vi);let St=et({},["mi","mo","mn","ms","mtext"]),pt=et({},["annotation-xml"]);const wt=et({},["title","style","font","a","script"]);let ft=null;const Ct=["application/xhtml+xml","text/html"],jt="text/html";let Ne=null,V=null;const ae=s.createElement("form"),ge=function(A){return A instanceof RegExp||A instanceof Function},Be=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(V&&V===A)){if((!A||typeof A!="object")&&(A={}),A=Kt(A),ft=Ct.indexOf(A.PARSER_MEDIA_TYPE)===-1?jt:A.PARSER_MEDIA_TYPE,Ne=ft==="application/xhtml+xml"?vi:ps,Re=It(A,"ALLOWED_TAGS")?et({},A.ALLOWED_TAGS,Ne):je,H=It(A,"ALLOWED_ATTR")?et({},A.ALLOWED_ATTR,Ne):ke,yt=It(A,"ALLOWED_NAMESPACES")?et({},A.ALLOWED_NAMESPACES,vi):kt,ie=It(A,"ADD_URI_SAFE_ATTR")?et(Kt(Ge),A.ADD_URI_SAFE_ATTR,Ne):Ge,q=It(A,"ADD_DATA_URI_TAGS")?et(Kt(we),A.ADD_DATA_URI_TAGS,Ne):we,Ie=It(A,"FORBID_CONTENTS")?et({},A.FORBID_CONTENTS,Ne):le,Se=It(A,"FORBID_TAGS")?et({},A.FORBID_TAGS,Ne):Kt({}),oe=It(A,"FORBID_ATTR")?et({},A.FORBID_ATTR,Ne):Kt({}),Je=It(A,"USE_PROFILES")?A.USE_PROFILES:!1,pe=A.ALLOW_ARIA_ATTR!==!1,Le=A.ALLOW_DATA_ATTR!==!1,re=A.ALLOW_UNKNOWN_PROTOCOLS||!1,U=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=A.SAFE_FOR_TEMPLATES||!1,O=A.SAFE_FOR_XML!==!1,P=A.WHOLE_DOCUMENT||!1,se=A.RETURN_DOM||!1,Oe=A.RETURN_DOM_FRAGMENT||!1,Me=A.RETURN_TRUSTED_TYPE||!1,ne=A.FORCE_BODY||!1,Fe=A.SANITIZE_DOM!==!1,Pe=A.SANITIZE_NAMED_PROPS||!1,tt=A.KEEP_CONTENT!==!1,Ee=A.IN_PLACE||!1,De=A.ALLOWED_URI_REGEXP||fp,Xe=A.NAMESPACE||Ke,St=A.MATHML_TEXT_INTEGRATION_POINTS||St,pt=A.HTML_INTEGRATION_POINTS||pt,X=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&ge(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&ge(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),D&&(Le=!1),Oe&&(se=!0),Je&&(Re=et({},bc),H=us(null),Je.html===!0&&(et(Re,xc),et(H,yc)),Je.svg===!0&&(et(Re,Si),et(H,$i),et(H,rs)),Je.svgFilters===!0&&(et(Re,Ci),et(H,$i),et(H,rs)),Je.mathMl===!0&&(et(Re,_i),et(H,wc),et(H,rs))),It(A,"ADD_TAGS")||(he.tagCheck=null),It(A,"ADD_ATTR")||(he.attributeCheck=null),A.ADD_TAGS&&(typeof A.ADD_TAGS=="function"?he.tagCheck=A.ADD_TAGS:(Re===je&&(Re=Kt(Re)),et(Re,A.ADD_TAGS,Ne))),A.ADD_ATTR&&(typeof A.ADD_ATTR=="function"?he.attributeCheck=A.ADD_ATTR:(H===ke&&(H=Kt(H)),et(H,A.ADD_ATTR,Ne))),A.ADD_URI_SAFE_ATTR&&et(ie,A.ADD_URI_SAFE_ATTR,Ne),A.FORBID_CONTENTS&&(Ie===le&&(Ie=Kt(Ie)),et(Ie,A.FORBID_CONTENTS,Ne)),A.ADD_FORBID_CONTENTS&&(Ie===le&&(Ie=Kt(Ie)),et(Ie,A.ADD_FORBID_CONTENTS,Ne)),tt&&(Re["#text"]=!0),P&&et(Re,["html","head","body"]),Re.table&&(et(Re,["tbody"]),delete Se.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw dr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw dr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=A.TRUSTED_TYPES_POLICY,E=k.createHTML("")}else k===void 0&&(k=v_(m,n)),k!==null&&typeof E=="string"&&(E=k.createHTML(""));Pt&&Pt(A),V=A}},Ae=et({},[...Si,...Ci,...d_]),nt=et({},[..._i,...u_]),Ze=function(A){let N=S(A);(!N||!N.tagName)&&(N={namespaceURI:Xe,tagName:"template"});const Y=ps(A.tagName),xe=ps(N.tagName);return yt[A.namespaceURI]?A.namespaceURI===qe?N.namespaceURI===Ke?Y==="svg":N.namespaceURI===ze?Y==="svg"&&(xe==="annotation-xml"||St[xe]):!!Ae[Y]:A.namespaceURI===ze?N.namespaceURI===Ke?Y==="math":N.namespaceURI===qe?Y==="math"&&pt[xe]:!!nt[Y]:A.namespaceURI===Ke?N.namespaceURI===qe&&!pt[xe]||N.namespaceURI===ze&&!St[xe]?!1:!nt[Y]&&(wt[Y]||!Ae[Y]):!!(ft==="application/xhtml+xml"&&yt[A.namespaceURI]):!1},st=function(A){lr(t.removed,{element:A});try{S(A).removeChild(A)}catch{C(A)}},ht=function(A,N){try{lr(t.removed,{attribute:N.getAttributeNode(A),from:N})}catch{lr(t.removed,{attribute:null,from:N})}if(N.removeAttribute(A),A==="is")if(se||Oe)try{st(N)}catch{}else try{N.setAttribute(A,"")}catch{}},Rt=function(A){let N=null,Y=null;if(ne)A="<remove></remove>"+A;else{const _e=ki(A,/^[\r\n\t ]+/);Y=_e&&_e[0]}ft==="application/xhtml+xml"&&Xe===Ke&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");const xe=k?k.createHTML(A):A;if(Xe===Ke)try{N=new b().parseFromString(xe,ft)}catch{}if(!N||!N.documentElement){N=T.createDocument(Xe,"template",null);try{N.documentElement.innerHTML=rt?E:xe}catch{}}const Ce=N.body||N.documentElement;return A&&Y&&Ce.insertBefore(s.createTextNode(Y),Ce.childNodes[0]||null),Xe===Ke?$.call(N,P?"html":"body")[0]:P?N.documentElement:Ce},Dt=function(A){return _.call(A.ownerDocument||A,A,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Z=function(A){return A instanceof f&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof p)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},be=function(A){return typeof c=="function"&&A instanceof c};function ve(W,A,N){ns(W,Y=>{Y.call(t,A,N,V)})}const ye=function(A){let N=null;if(ve(L.beforeSanitizeElements,A,null),Z(A))return st(A),!0;const Y=Ne(A.nodeName);if(ve(L.uponSanitizeElement,A,{tagName:Y,allowedTags:Re}),O&&A.hasChildNodes()&&!be(A.firstElementChild)&&Mt(/<[/\w!]/g,A.innerHTML)&&Mt(/<[/\w!]/g,A.textContent)||A.nodeType===pr.progressingInstruction||O&&A.nodeType===pr.comment&&Mt(/<[/\w]/g,A.data))return st(A),!0;if(!(he.tagCheck instanceof Function&&he.tagCheck(Y))&&(!Re[Y]||Se[Y])){if(!Se[Y]&&K(Y)&&(X.tagNameCheck instanceof RegExp&&Mt(X.tagNameCheck,Y)||X.tagNameCheck instanceof Function&&X.tagNameCheck(Y)))return!1;if(tt&&!Ie[Y]){const xe=S(A)||A.parentNode,Ce=w(A)||A.childNodes;if(Ce&&xe){const _e=Ce.length;for(let Te=_e-1;Te>=0;--Te){const He=g(Ce[Te],!0);He.__removalCount=(A.__removalCount||0)+1,xe.insertBefore(He,v(A))}}}return st(A),!0}return A instanceof d&&!Ze(A)||(Y==="noscript"||Y==="noembed"||Y==="noframes")&&Mt(/<\/no(script|embed|frames)/i,A.innerHTML)?(st(A),!0):(D&&A.nodeType===pr.text&&(N=A.textContent,ns([z,J,I],xe=>{N=cr(N,xe," ")}),A.textContent!==N&&(lr(t.removed,{element:A.cloneNode()}),A.textContent=N)),ve(L.afterSanitizeElements,A,null),!1)},j=function(A,N,Y){if(oe[N]||Fe&&(N==="id"||N==="name")&&(Y in s||Y in ae))return!1;if(!(Le&&!oe[N]&&Mt(te,N))){if(!(pe&&Mt(ce,N))){if(!(he.attributeCheck instanceof Function&&he.attributeCheck(N,A))){if(!H[N]||oe[N]){if(!(K(A)&&(X.tagNameCheck instanceof RegExp&&Mt(X.tagNameCheck,A)||X.tagNameCheck instanceof Function&&X.tagNameCheck(A))&&(X.attributeNameCheck instanceof RegExp&&Mt(X.attributeNameCheck,N)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(N,A))||N==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&Mt(X.tagNameCheck,Y)||X.tagNameCheck instanceof Function&&X.tagNameCheck(Y))))return!1}else if(!ie[N]){if(!Mt(De,cr(Y,me,""))){if(!((N==="src"||N==="xlink:href"||N==="href")&&A!=="script"&&o_(Y,"data:")===0&&q[A])){if(!(re&&!Mt(ue,cr(Y,me,"")))){if(Y)return!1}}}}}}}return!0},K=function(A){return A!=="annotation-xml"&&ki(A,de)},ee=function(A){ve(L.beforeSanitizeAttributes,A,null);const{attributes:N}=A;if(!N||Z(A))return;const Y={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let xe=N.length;for(;xe--;){const Ce=N[xe],{name:_e,namespaceURI:Te,value:He}=Ce,Qe=Ne(_e),xt=He;let Q=_e==="value"?xt:a_(xt);if(Y.attrName=Qe,Y.attrValue=Q,Y.keepAttr=!0,Y.forceKeepAttr=void 0,ve(L.uponSanitizeAttribute,A,Y),Q=Y.attrValue,Pe&&(Qe==="id"||Qe==="name")&&(ht(_e,A),Q=We+Q),O&&Mt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Q)){ht(_e,A);continue}if(Qe==="attributename"&&ki(Q,"href")){ht(_e,A);continue}if(Y.forceKeepAttr)continue;if(!Y.keepAttr){ht(_e,A);continue}if(!U&&Mt(/\/>/i,Q)){ht(_e,A);continue}D&&ns([z,J,I],ot=>{Q=cr(Q,ot," ")});const $e=Ne(A.nodeName);if(!j($e,Qe,Q)){ht(_e,A);continue}if(k&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!Te)switch(m.getAttributeType($e,Qe)){case"TrustedHTML":{Q=k.createHTML(Q);break}case"TrustedScriptURL":{Q=k.createScriptURL(Q);break}}if(Q!==xt)try{Te?A.setAttributeNS(Te,_e,Q):A.setAttribute(_e,Q),Z(A)?st(A):mc(t.removed)}catch{ht(_e,A)}}ve(L.afterSanitizeAttributes,A,null)},F=function W(A){let N=null;const Y=Dt(A);for(ve(L.beforeSanitizeShadowDOM,A,null);N=Y.nextNode();)ve(L.uponSanitizeShadowNode,N,null),ye(N),ee(N),N.content instanceof o&&W(N.content);ve(L.afterSanitizeShadowDOM,A,null)};return t.sanitize=function(W){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=null,Y=null,xe=null,Ce=null;if(rt=!W,rt&&(W="<!-->"),typeof W!="string"&&!be(W))if(typeof W.toString=="function"){if(W=W.toString(),typeof W!="string")throw dr("dirty is not a string, aborting")}else throw dr("toString is not a function");if(!t.isSupported)return W;if(B||Be(A),t.removed=[],typeof W=="string"&&(Ee=!1),Ee){if(W.nodeName){const He=Ne(W.nodeName);if(!Re[He]||Se[He])throw dr("root node is forbidden and cannot be sanitized in-place")}}else if(W instanceof c)N=Rt("<!---->"),Y=N.ownerDocument.importNode(W,!0),Y.nodeType===pr.element&&Y.nodeName==="BODY"||Y.nodeName==="HTML"?N=Y:N.appendChild(Y);else{if(!se&&!D&&!P&&W.indexOf("<")===-1)return k&&Me?k.createHTML(W):W;if(N=Rt(W),!N)return se?null:Me?E:""}N&&ne&&st(N.firstChild);const _e=Dt(Ee?W:N);for(;xe=_e.nextNode();)ye(xe),ee(xe),xe.content instanceof o&&F(xe.content);if(Ee)return W;if(se){if(Oe)for(Ce=R.call(N.ownerDocument);N.firstChild;)Ce.appendChild(N.firstChild);else Ce=N;return(H.shadowroot||H.shadowrootmode)&&(Ce=M.call(i,Ce,!0)),Ce}let Te=P?N.outerHTML:N.innerHTML;return P&&Re["!doctype"]&&N.ownerDocument&&N.ownerDocument.doctype&&N.ownerDocument.doctype.name&&Mt(hp,N.ownerDocument.doctype.name)&&(Te="<!DOCTYPE "+N.ownerDocument.doctype.name+`>
`+Te),D&&ns([z,J,I],He=>{Te=cr(Te,He," ")}),k&&Me?k.createHTML(Te):Te},t.setConfig=function(){let W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Be(W),B=!0},t.clearConfig=function(){V=null,B=!1},t.isValidAttribute=function(W,A,N){V||Be({});const Y=Ne(W),xe=Ne(A);return j(Y,xe,N)},t.addHook=function(W,A){typeof A=="function"&&lr(L[W],A)},t.removeHook=function(W,A){if(A!==void 0){const N=s_(L[W],A);return N===-1?void 0:i_(L[W],N,1)[0]}return mc(L[W])},t.removeHooks=function(W){L[W]=[]},t.removeAllHooks=function(){L=kc()},t}var k_=gp();const Sc=300*1e3,S_=x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #faf9f5;
`,C_=x.div`
  flex: 1;
  overflow-y: auto;
  padding: 32px;
`,__=x.div`
  max-width: 560px;
  margin: 0 auto;
`,$_=x.h1`
  font-family: 'Anthropic Serif', Georgia, serif;
  font-size: 22px;
  font-weight: 400;
  color: ${h.text.primary};
  margin: 0 0 24px;
`,E_=x.div`
  margin-bottom: 28px;
`,T_=x.div`
  font-size: 14px;
  font-weight: 600;
  color: ${h.text.primary};
  margin-bottom: 4px;
`,j_=x.div`
  font-size: 12px;
  color: ${h.text.tertiary};
  margin-bottom: 10px;
`,mp=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,R_=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 60px;
  overflow: hidden;
  & > svg {
    max-width: 100%;
    max-height: 100%;
  }
`,A_=134,D_=x.textarea`
  padding: 8px 12px;
  border-radius: 18px;
  border: 1px solid ${h.border.default};
  background: ${e=>e.$active?h.bg.active:h.bg.surface};
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  width: 160px;
  resize: none;
  overflow: hidden;
  outline: none;
  &:focus {
    border-color: ${h.accent.primary};
  }
`,M_=x.span`
  position: fixed;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
  white-space: pre;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
`,L_=x.input`
  width: 100%;
  accent-color: ${h.accent.primary};
`,P_=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: ${h.text.secondary};
`,O_=x.label`
  display: block;
  padding: 20px;
  border: 2px dashed ${e=>e.$has?h.accent.primary:h.border.default};
  border-radius: 8px;
  background: ${h.bg.surface};
  text-align: center;
  font-size: 12px;
  color: ${h.text.secondary};
  cursor: pointer;
  &:hover {
    border-color: ${h.accent.primary};
  }
  input {
    display: none;
  }
`,F_=x.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  background: ${h.bg.surface};
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: ${h.accent.primary};
  }
`,I_=x.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 16px;
  border-top: 1px solid ${h.border.subtle};
  background: ${h.bg.surface};
  gap: 12px;
`,z_=x.span`
  font-size: 12px;
  color: ${h.text.tertiary};
`;function N_({q:e,value:t,onChange:s}){const[i,n]=l.useState(""),o=l.useRef(null),a=l.useRef(null),c=new Set(Array.isArray(t)?t:t?[String(t)]:[]);l.useLayoutEffect(()=>{const u=o.current,p=a.current;if(!u||!p)return;const f=p.offsetWidth>A_;if(u.style.flex=f?"1 0 100%":"",u.style.height="auto",f){const b=u.offsetHeight-u.clientHeight;u.style.height=`${u.scrollHeight+b}px`}},[i]);const d=u=>{if(e.multi){const p=new Set(c);p.has(u)?p.delete(u):p.add(u),s([...p])}else s(u)};return r.jsxs(mp,{children:[(e.options??[]).map(u=>r.jsx(fe,{active:c.has(u),onClick:()=>d(u),size:"sm",style:{borderRadius:18,maxWidth:"100%",whiteSpace:"normal",overflowWrap:"break-word",textAlign:"left"},children:u},u)),r.jsx(M_,{ref:a,"aria-hidden":!0,children:i}),r.jsx(D_,{ref:o,rows:1,placeholder:"Other…",$active:!!i&&c.has(i),value:i,onPointerDown:()=>{!e.multi&&i&&s(i)},onKeyDown:u=>{u.key==="Enter"&&!u.nativeEvent.isComposing&&u.preventDefault()},onChange:u=>{const p=u.target.value.replace(/\n/g,"");if(e.multi){const f=new Set(c);i&&!e.options?.includes(i)&&f.delete(i),p&&f.add(p),s([...f])}else p&&s(p);n(p)}})]})}function B_({q:e,value:t,onChange:s}){const i=new Set(Array.isArray(t)?t.map(String):t!==void 0?[String(t)]:[]),n=l.useMemo(()=>(e.options??[]).map(a=>k_.sanitize(a,{USE_PROFILES:{svg:!0,svgFilters:!0},FORBID_TAGS:["style","image","feImage","a"],FORBID_ATTR:["style","xlink:href"]})),[e.options]),o=a=>{const c=String(a);if(e.multi){const d=new Set(i);d.has(c)?d.delete(c):d.add(c),s([...d])}else s(c)};return r.jsx(mp,{children:n.map((a,c)=>r.jsx(fe,{active:i.has(String(c)),onClick:()=>o(c),style:{width:96,height:72,padding:6,overflow:"hidden"},children:r.jsx(R_,{dangerouslySetInnerHTML:{__html:a}})},c))})}function H_({q:e,value:t,onChange:s}){const i=typeof t=="number"?t:e.default??e.min??0;return r.jsxs(P_,{children:[r.jsx("span",{children:e.min??0}),r.jsx(L_,{type:"range",min:e.min??0,max:e.max??100,step:e.step??1,value:i,onChange:n=>s(Number(n.target.value))}),r.jsx("span",{children:e.max??100}),r.jsx("strong",{style:{minWidth:40,textAlign:"right"},children:i})]})}function U_({q:e,value:t,onChange:s,projectPath:i}){const[n,o]=l.useState(!1);Nt(n);const a=async c=>{const d=c.target.files?.[0];if(d){o(!0);try{const u=d.name.split(".").pop()||"bin",p=`uploads/${e.id}-${Date.now()}.${u}`,f=await d.arrayBuffer(),b=new Uint8Array(f);let m="";const y=32768;for(let C=0;C<b.length;C+=y)m+=String.fromCharCode(...b.subarray(C,C+y));const g=btoa(m);await G.writeFile(`${i}/${p}`,g,"base64"),s(p)}finally{o(!1)}}};return r.jsxs(O_,{$has:!!t,children:[r.jsx("input",{type:"file",accept:e.accept,onChange:a}),n?"Uploading…":t?`✓ ${t}`:"Click to upload a file"]})}function W_({value:e,onChange:t,attachments:s,onAttachmentsChange:i,onUploadingChange:n,projectPath:o}){const{onPaste:a,onPick:c,uploading:d}=Tu({projectPath:o,onUploaded:u=>i(p=>[...p,...u]),onUploadingChange:n});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative"},children:[r.jsx(F_,{value:e,onChange:u=>t(u.target.value),onPaste:a,placeholder:"Your answer…",style:{paddingRight:32}}),r.jsx(_t,{icon:"Image",size:22,iconSize:13,variant:"ghost",title:"Attach image",disabled:d,onClick:c,style:{position:"absolute",right:6,bottom:6}})]}),r.jsx(Eu,{attachments:s,projectPath:o,onRemove:u=>i(p=>p.filter(f=>f.id!==u))})]})}function G_({spec:e,onSubmit:t,onTimeout:s,streaming:i,projectPath:n}){const[o,a]=l.useState({}),[c,d]=l.useState({}),[u,p]=l.useState(0),[f,b]=l.useState(!1),m=l.useRef(s);m.current=s,Nt(f),l.useEffect(()=>{if(i)return;let w=setTimeout(()=>m.current(),Sc);const S=()=>{clearTimeout(w),w=setTimeout(()=>m.current(),Sc)};return window.addEventListener("mousemove",S),window.addEventListener("keydown",S),()=>{clearTimeout(w),window.removeEventListener("mousemove",S),window.removeEventListener("keydown",S)}},[i]);const y=(w,S)=>a(k=>({...k,[w]:S})),g=(w,S)=>d(k=>({...k,[w]:S(k[w]??[])})),C=l.useCallback(()=>{b(!0);const w={};for(const[S,k]of Object.entries(o))w[S]=Array.isArray(k)?k.join(", "):String(k);t(w,Object.values(c).flat())},[o,c,t]),v=(e.questions??[]).filter(w=>w&&w.id&&w.kind&&w.title);return r.jsxs(S_,{children:[r.jsx(C_,{children:r.jsxs(__,{children:[r.jsx($_,{children:e.title||"Quick questions"}),v.map(w=>r.jsxs(E_,{children:[r.jsx(T_,{children:w.title}),w.subtitle&&r.jsx(j_,{children:w.subtitle}),w.kind==="text-options"&&r.jsx(N_,{q:w,value:o[w.id],onChange:S=>y(w.id,S)}),w.kind==="svg-options"&&r.jsx(B_,{q:w,value:o[w.id],onChange:S=>y(w.id,S)}),w.kind==="slider"&&r.jsx(H_,{q:w,value:o[w.id],onChange:S=>y(w.id,S)}),w.kind==="file"&&r.jsx(U_,{q:w,value:o[w.id],onChange:S=>y(w.id,S),projectPath:n}),w.kind==="freeform"&&r.jsx(W_,{value:typeof o[w.id]=="string"?o[w.id]:"",onChange:S=>y(w.id,S),attachments:c[w.id]??[],onAttachmentsChange:S=>g(w.id,S),onUploadingChange:S=>p(k=>k+(S?1:-1)),projectPath:n})]},w.id))]})}),r.jsxs(I_,{children:[i&&r.jsx(z_,{children:"Generating questions…"}),r.jsx(fe,{variant:"primary",size:"sm",onClick:C,disabled:f||i||u>0,children:f?"Continuing…":"Continue"})]})]})}x.div`
  position: fixed;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  z-index: ${co.popover};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 4px 6px 10px;
  border-bottom: 1px solid ${h.border.default};
  cursor: grab;
  user-select: none;
  background: ${h.bg.elevated};
  &:active {
    cursor: grabbing;
  }
`;x.div`
  font-size: 11px;
  font-weight: 600;
  color: ${h.text.primary};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;x.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;x.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;x.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
  &::after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 8px;
    height: 8px;
    border-right: 2px solid ${h.border.strong};
    border-bottom: 2px solid ${h.border.strong};
    border-bottom-right-radius: 2px;
  }
`;x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-bottom: 1px solid ${h.border.default};
  flex-shrink: 0;
`;x.input`
  flex: 1;
  min-width: 0;
  padding: 4px 8px;
  font-size: 11px;
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  background: ${h.bg.surface};
  color: ${h.text.primary};
  outline: none;
  &:focus {
    border-color: ${h.border.strong};
  }
`;x.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  font-size: 11px;
  font-weight: 600;
  background: ${h.bg.surface};
  border: 1px solid ${h.border.default};
  border-radius: 4px;
  color: ${h.text.primary};
  cursor: default;
  &:hover {
    background: ${h.bg.hover};
  }
`;x.button`
  padding: 3px 7px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid ${h.accent.primary};
  background: ${h.accent.primary};
  color: white;
  border-radius: 4px;
  cursor: default;
  &:hover {
    filter: brightness(1.05);
  }
`;x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  padding: 4px 8px;
  font-size: 10px;
  color: ${h.text.tertiary};
  border-bottom: 1px solid ${h.border.default};
  flex-shrink: 0;
`;x.span`
  font-variant-numeric: tabular-nums;
`;x.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.45;
  color: ${h.text.primary};
`;x.div`
  border-bottom: 1px solid ${h.border.subtle};
  padding-bottom: 4px;
  background: ${e=>e.$role==="user"?h.bg.panel:e.$role==="system"?h.bg.muted:h.bg.surface};
`;x.div`
  padding: 8px 12px 4px 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${h.text.tertiary};
`;x.div`
  padding: 6px 12px;
  margin: 0 6px;
  border-radius: 5px;
  cursor: ${e=>e.$clickable?"default":"auto"};
  &:hover {
    background: ${e=>e.$clickable?h.bg.hover:"transparent"};
  }
`;x.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;x.span`
  display: inline-block;
  width: 9px;
  font-size: 9px;
  line-height: 1;
  color: ${h.text.tertiary};
  text-align: center;
  transform: ${e=>e.$open?"rotate(90deg)":"rotate(0deg)"};
  transition: transform 100ms ease;
  flex-shrink: 0;
  user-select: none;
  position: relative;
  top: 1px;
`;x.span`
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${h.text.tertiary};
  flex-shrink: 0;
`;x.span`
  display: inline-block;
  font-family: var(--font-sans, sans-serif);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 1px 5px;
  margin-left: 6px;
  border-radius: 3px;
  background: #fef3c7;
  color: #92400e;
  flex-shrink: 0;
  vertical-align: middle;
  user-select: none;
`;x.span`
  color: ${h.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
  font-size: 12px;
`;x.pre`
  margin: 6px 0 0 15px;
  padding: 8px 10px;
  background: ${h.bg.muted};
  border: 1px solid ${h.border.subtle};
  border-radius: 5px;
  font-size: 11px;
  line-height: 1.5;
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    monospace;
  white-space: pre-wrap;
  word-break: break-word;
  color: ${h.text.primary};
  max-height: 320px;
  overflow-y: auto;
`;x.div`
  white-space: pre-wrap;
  word-break: break-word;
  color: ${h.text.primary};
  font-size: 12px;
  line-height: 1.5;
`;x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 6px 0 0 15px;
`;x.img`
  display: block;
  max-width: 100%;
  max-height: 280px;
  border: 1px solid ${h.border.default};
  border-radius: 5px;
  background: ${h.bg.muted};
`;x.div`
  padding: 24px 16px;
  text-align: center;
  font-size: 11px;
  color: ${h.text.tertiary};
`;const Cc=r.jsx("div",{style:{padding:"1rem",color:"#888"},children:"Chat crashed. Reload the page or switch chats."}),_c=r.jsx("div",{style:{padding:"1rem",color:"#888"},children:"Preview failed to render."}),ss=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
`,$c=x.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
`,Ei=x.div`
  position: absolute;
  inset: 0;
  display: ${e=>e.$visible?"flex":"none"};
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`,J_=x.div`
  margin: auto;
  text-align: center;
  color: ${h.text.secondary};
  padding: 20px;
`,Ec=x.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;function K_(e){return r.jsx(FS,{children:r.jsx(X_,{...e})})}function X_({projectName:e,onSetNewTabIndex:t,chatVisible:s,mobilePane:i,onMobilePaneChange:n,onShareClick:o,onExportClick:a,rightToolbarActions:c,endToolbarActions:d,onProjectsClick:u,projectsHref:p,onRenameProject:f,onPublishedChange:b,onNewFromTemplate:m}){const y=go(),{projectPath:g,data:C,loadError:v,updateComposer:w,openFile:S,closeFile:k,setActiveFileTab:E,setActiveChat:T,createChat:_,closeChat:R,reopenChat:$,deleteClosedChat:M,updateChat:L}=vt(),z=nn(),J=ho(),I=Zt(),te=pd(),[ce,ue]=l.useState(!0),[me,de]=l.useState(()=>!I),De=fw(g),[Re,je]=l.useState(0),H=l.useRef(null);Ye("autosend-attachments",Q=>{de(!1),H.current?.(Q.detail.label,Q.detail.attachments,{kind:Q.detail.kind})}),Ye("comment-created",()=>{de(!0),y&&ie(!0)});const[ke,X]=Kc("chatPaneWidth",400),[Se,oe]=l.useState(ke),[he,pe]=l.useState(!1);Ye("unified-edit-mode-changed",Q=>pe(Q.detail.active));const Le=()=>window.dispatchEvent(new CustomEvent("unified-edit-mode-exit")),[re,U]=l.useState(!1),D=l.useCallback((Q,$e)=>{oe(Q),U(!$e),$e&&X(Q)},[X]),P=Gs()?.active??!1,B=(I||te)&&(s??ce)||P,[ne,se]=l.useState(null),[Oe,Me]=l.useState(!1),Fe=C&&C.viewState.activeFileTab>0?C.viewState.openFiles[C.viewState.activeFileTab-1]??null:null,Pe=l.useRef(!1);Pe.current=C?.viewState.activeFileTab===-2&&!!C&&ka(C),l.useEffect(()=>G.onAgentShowFile(($e,ot)=>{if(ot?.target==="user"){if(Pe.current){const lt=hs(g),{barePath:At}=Sr($e);if(lt&&Zf(lt,At)){window.dispatchEvent(new CustomEvent("ds-asset-updated",{detail:{path:At}})),window.dispatchEvent(new CustomEvent("mobile-show-preview"));return}}S($e),window.dispatchEvent(new CustomEvent("mobile-show-preview"))}}),[S,g]);const We=l.useRef(null);l.useEffect(()=>()=>{We.current&&clearTimeout(We.current)},[]),l.useEffect(()=>G.onFilesChanged($e=>{$e===g&&(We.current&&clearTimeout(We.current),We.current=setTimeout(()=>{We.current=null,je(ot=>ot+1)},50))}),[g]),Ye("questions-v2-show",Q=>{se(Q.detail.spec),Me(!1)}),Ye("questions-v2-stream",Q=>{Q.detail.done?Me(!1):Q.detail.spec&&(se(Q.detail.spec),Me(!0))}),Ye("questions-v2-close",()=>{se(null),Me(!1)});const tt=z?.id;l.useEffect(()=>{se(null),Me(!1)},[tt]);const Ee=l.useCallback((Q,$e)=>{se(null),Me(!1);const ot=Object.entries(Q).filter(([,lt])=>lt.trim()).map(([lt,At])=>`- ${lt}: ${At}`).join(`
`);H.current?.(ot||$e.length?`Questions answered:
${ot}`:"Skipped all questions — proceed with your best judgment.",$e)},[]),Je=l.useCallback(()=>{se(null),Me(!1),H.current?.("Questions timed out; go with defaults",[])},[]),[Ie,le]=l.useState(!1),q=ne!==null;l.useEffect(()=>{le(q)},[q]);const[we,ie]=l.useState(!0),Ge=l.useRef(!1),ze=l.useRef(-1);l.useEffect(()=>{if(!C||Ge.current)return;Ge.current=!0;const Q=C.viewState.activeFileTab;(Q>0||Q<-1)&&ie(!1)},[C]),Ye("mobile-show-preview",()=>{y&&ie(!1)}),l.useEffect(()=>{q&&y&&ie(!1)},[q,y]);const qe=Vt()?.type,Ke=qe==="design_system"||qe==="template";l.useEffect(()=>{if(!Ke)return;sessionStorage.getItem("omelette:focus-extra-tab")===g&&(sessionStorage.removeItem("omelette:focus-extra-tab"),E(-2))},[g,Ke,E]),l.useEffect(()=>{if(!C||qe!=="template")return;const Q=`omelette:template-tab-inited:${g}`;try{if(sessionStorage.getItem(Q))return;sessionStorage.setItem(Q,"1")}catch{}C.viewState.activeFileTab===-1&&(E(-2),ie(!1))},[C,qe,g,E]);const{files:Xe}=Jo(g,{refreshDep:Re}),rt=$t.useMemo(()=>{const Q=new Map;for(const $e of Xe)$e.updatedAt&&Q.set($e.name,$e.updatedAt);return Q},[Xe]);if(!C)return v?r.jsx(ss,{children:r.jsxs("div",{style:{margin:"auto",textAlign:"center",color:h.text.tertiary},children:[r.jsx("div",{style:{fontSize:14,fontWeight:600,marginBottom:4},children:"Couldn't load project"}),r.jsx("div",{style:{fontSize:12},children:v})]})}):r.jsx(ss,{});const yt=Q=>{!z||Q.length===0||w(z.id,{attachments:[...z.composer.attachments,...Q]})},kt=C.viewState.openFiles,St=ka(C)||Vt()?.type==="design_system",pt=!St&&Vt()?.type==="template",wt=St||pt,ft=[...St?[{label:"Design System",icon:"Styles"}]:[],...pt?[{label:"Template Info",icon:"FileText"}]:[],{label:"Design Files",icon:"Folder"},...q?[{label:"Questions",icon:"MessageCircle",closable:!0,activeBackground:"#FAF9F5"}]:[],...kt.map(Q=>{const $e=rt.get(_l(Q));return{label:_l(Q),icon:void 0,closable:!0,tooltip:{primary:Q,secondary:$e?`Modified ${Fs($e)}`:void 0}}})],Ct=wt?0:-1,jt=wt?1:0,Ne=q?wt?2:1:-1,V=(wt?1:0)+(q?1:0);let ae;Ie&&q?ae=Ne:C.viewState.activeFileTab===-2?ae=wt?Ct:jt:C.viewState.activeFileTab<=0?ae=jt:ae=C.viewState.activeFileTab+V;const ge=Q=>{wt&&Q===Ct?(le(!1),E(-2)):Q===jt?(le(!1),E(-1)):q&&Q===Ne?le(!0):(le(!1),E(Q-V))},Be=Q=>{if(q&&Q===Ne)se(null),Me(!1);else{const $e=Q-(1+V);$e>=0&&$e<kt.length&&k(kt[$e])}},nt=I?{}:{disabled:!0,closable:!1,title:`You can’t chat — this project is ${I?null:te?"comment only":"view only"}. Remix it to chat.`},Ze=[...J.map(Q=>({label:Q.title.trim()?Q.title:"Chat",closable:J.length>1,onRename:$e=>L(Q.id,{title:$e,titleIsGenerated:!1}),...nt})),{label:"Comments",closable:!1,badge:De||void 0}],st=J.length,ht=me||!I?st:J.findIndex(Q=>Q.id===z?.id),Rt=(C.closedChats??[]).filter(Q=>Q.closedAt).slice(0,5).map(Q=>({id:Q.id,label:Q.title.trim()?Q.title:"Chat",turns:Q.messages.length,closedAt:Q.closedAt})),Dt=Q=>{if(Q===st){de(!0);return}de(!1),J[Q]&&(z?.id&&z.id!==J[Q].id&&Ir(z.id),T(J[Q].id))},Z=Q=>{const $e=J[Q];if($e&&J.length!==1){if($e.streaming?.isLoading&&G.interruptAgent($e.id),$e.id===z?.id){const ot=Q===0?1:Q-1;T(J[ot].id)}R($e.id)}},be=()=>{de(!1);const Q=J.find($e=>$e.messages.length===0&&!$e.streaming?.isLoading);if(Q){z?.id&&z.id!==Q.id&&Ir(z.id),T(Q.id);return}z?.id&&Ir(z.id),_()},ve=Q=>{de(!1),z?.id&&Ir(z.id),$(Q)},ye=Ie&&q,j=!ye&&C.viewState.activeFileTab===-2,K=j&&St,ee=j&&pt,F=Fe?Zw(Fe):null,W=!ye&&!j&&C.viewState.activeFileTab>0&&Fe,A=W&&F==="html",N=W&&F==="napkin",Y=W&&F==="image",xe=W&&F==="text",Ce=we?"chat":ye?"preview":C.viewState.activeFileTab===-1?"files":"preview",_e=Q=>{if(Q==="chat"){ie(!0);return}if(Q==="files"){ie(!1);const lt=C.viewState.activeFileTab;(lt>0||lt<-1)&&(ze.current=lt),E(-1);return}const $e=C.viewState.activeFileTab;if($e>0||$e<-1){ie(!1);return}const ot=ze.current;if(ot>0||ot<-1){ie(!1),E(ot);return}kt.length>0&&(ie(!1),E(kt.length))},Te=r.jsxs(r.Fragment,{children:[r.jsx("div",{style:me?{display:"contents"}:{display:"none"},children:r.jsx(En,{componentName:"CommentsPane",fallback:Cc,children:r.jsx(Jw,{isActive:me,onSent:Q=>{de(!1),T(Q)}})})}),r.jsx("div",{style:me?{display:"none"}:{display:"contents"},children:r.jsx(En,{componentName:"ChatPane",fallback:Cc,children:r.jsx(pw,{cardSubmitRef:H,hideTabs:!0})},z?.id)})]}),He=r.jsxs(r.Fragment,{children:[r.jsx(fa,{chatTabs:Ze,activeChat:ht,onChatChange:Dt,onChatClose:Z,onNewChat:I?be:void 0,closedChats:I?Rt:void 0,onReopenChat:I?ve:void 0,onDeleteClosedChat:I?M:void 0}),r.jsx(Ec,{children:Te})]}),Qe=r.jsxs(r.Fragment,{children:[ne&&r.jsx("div",{style:ye?{display:"contents"}:{display:"none"},children:r.jsx(En,{componentName:"QuestionsViewer",fallback:_c,children:r.jsx(G_,{spec:ne,onSubmit:Ee,onTimeout:Je,streaming:Oe,projectPath:g})})}),r.jsx("div",{style:ye?{display:"none"}:{display:"contents"},children:r.jsx(En,{componentName:"Viewer",tags:{file_type:F??"none"},fallback:_c,children:K?r.jsx(b1,{createHref:"/design/new",onPublishedChange:b,onFontsUploaded:Q=>{de(!1),H.current?.("",[{id:`font-upload-${crypto.randomUUID()}`,name:"Fonts uploaded",content:Q.join(","),type:"font-upload"}])},onSendFeedback:(Q,$e,ot,lt)=>{H.current?.(`Regenerate "${Q}"${ot?`: ${ot}`:"."}`,[{id:`ds-${Date.now()}`,name:Q,path:$e,content:ot,type:"ds-feedback"},...lt])}}):ee?r.jsx(j1,{projectId:g,onPublishedChange:b,onNewFromTemplate:m}):A&&Fe?r.jsx(r2,{filePath:Fe},Fe):N&&Fe?r.jsx(e_,{filePath:Fe},Fe):Y&&Fe?r.jsx(d2,{filePath:Fe},Fe):xe&&Fe?r.jsx(b2,{filePath:Fe},Fe):r.jsx(Dl,{onAttachments:yt,refreshKey:Re})},j?"assets":Fe??"project")})]}),xt=r.jsx("div",{style:{position:"absolute",pointerEvents:"none"},children:J.map(Q=>r.jsx(Ad,{viewportKey:Q.id,visible:!1},Q.id))});return y?r.jsxs(ss,{children:[r.jsx(Qf,{curTab:Ce,onTabChange:_e,onProjectsClick:u??(()=>t?.(-1)),projectsHref:p,onExportClick:a,onShareClick:o}),r.jsxs($c,{children:[xt,r.jsxs(Ei,{$visible:Ce==="chat",children:[r.jsx(fa,{chatTabs:Ze,activeChat:ht,onChatChange:Dt,onChatClose:Z,onNewChat:I?be:void 0,closedChats:I?Rt:void 0,onReopenChat:I?ve:void 0,onDeleteClosedChat:I?M:void 0}),r.jsx(Ec,{children:Te})]}),r.jsx(Ei,{$visible:Ce==="files",children:r.jsx(Dl,{onAttachments:yt,refreshKey:Re,onFileOpened:()=>ie(!1)})}),r.jsx(Ei,{$visible:Ce==="preview",children:Fe||j||ye?Qe:r.jsxs(J_,{children:[r.jsx("div",{style:{fontSize:14,fontWeight:600,marginBottom:4},children:"No preview"}),r.jsx("div",{style:{fontSize:12,color:h.text.tertiary},children:"Open a file from the Files tab to see a preview here."})]})})]}),!1]}):r.jsxs(ss,{children:[P&&Fe&&r.jsx(AC,{filePath:Fe,activeChat:z,updateComposer:w,width:Se}),r.jsx(eh,{chatWidth:B?he?th:Se:void 0,chatDragging:re,peeking:he&&B,onPeekClick:Le,fileTabs:ft,activeFile:ae,onFileChange:ge,onFileClose:Be,chatHidden:!B,onToggleChat:I||te?()=>ue(Q=>!Q):void 0,onProjectsClick:u??(()=>t?.(-1)),projectsHref:p,title:e,onRename:f,rightActions:c,endActions:d}),r.jsxs($c,{children:[xt,r.jsx(nh,{chatVisible:B,chatWidth:Se,onChatWidthChange:D,peeking:he&&B,onPeekClick:Le,mobilePane:i,onMobilePaneChange:n,left:He,right:Qe})]}),!1]})}const q_=x.div`
  width: 420px;
  max-width: calc(100vw - 32px);
  background: ${h.bg.surface};
  border-radius: 12px;
  box-shadow:
    ${h.shadow.lg},
    0 20px 40px rgba(0, 0, 0, 0.12);
  border: 1px solid ${h.border.modal};
  overflow: hidden;
`,V_=x.div`
  padding: 20px 18px;
  max-height: 70vh;
  overflow-y: auto;
`,is=x.div`
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ti=x.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: ${h.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  font-family: inherit;
`,os=x.p`
  font-size: 11px;
  color: ${h.text.tertiary};
  margin: 6px 0 0;
  font-family: inherit;
  line-height: 1.4;
`,Y_=x.h4`
  font-size: 11px;
  font-weight: 600;
  color: ${h.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
  padding-top: 8px;
  border-top: 1px solid ${h.border.subtle};
  font-family: inherit;
`,Z_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,Q_=x.span`
  font-size: 13px;
  font-weight: 500;
  color: ${h.text.primary};
  font-family: inherit;
`;function e$({open:e,onClose:t}){const[s,i]=l.useState({model:"",geminiApiKey:"",elevenlabsApiKey:"",htmlViewerZoom:1,customInstructions:""});l.useEffect(()=>{e&&G.getSettings().then(i).catch(o=>{})},[e]);const n=(o,a)=>{i(c=>({...c,[o]:a})),G.updateSettings({[o]:a})};return r.jsx(tn,{isOpen:e,onClose:t,children:r.jsxs(q_,{children:[r.jsx(Es,{title:"Settings",onClose:t}),r.jsxs(V_,{children:[r.jsxs(is,{children:[r.jsx(Ti,{children:"Gemini API Key"}),r.jsx(kr,{placeholder:"AIzaSy...",value:s.geminiApiKey??"",onChange:o=>n("geminiApiKey",o.target.value)}),r.jsx(os,{children:"Required for image generation."})]}),r.jsxs(is,{children:[r.jsx(Ti,{children:"ElevenLabs API Key"}),r.jsx(kr,{placeholder:"sk_...",value:s.elevenlabsApiKey??"",onChange:o=>n("elevenlabsApiKey",o.target.value)}),r.jsx(os,{children:"Required for sound effect and voice generation."})]}),r.jsxs(is,{children:[r.jsx(Ti,{children:"Custom Instructions"}),r.jsx(rh,{placeholder:"e.g. Always use a dark color scheme. Prefer minimal layouts...",value:s.customInstructions??"",onChange:o=>n("customInstructions",o.target.value),rows:5}),r.jsx(os,{children:"These instructions are injected into the system prompt for every agent conversation."})]}),r.jsxs(is,{children:[r.jsx(Y_,{children:"Advanced"}),r.jsxs(Z_,{children:[r.jsx(Q_,{children:"Uploads go in uploads/ folder"}),r.jsx(bo,{checked:s.uploadsInFolder!==!1,onChange:o=>n("uploadsInFolder",o)})]}),r.jsx(os,{children:"Place uploaded files in an uploads/ subfolder instead of the project root."})]})]})]})})}function t$(e){const t={name:"",path:"",folders:new Map,fileCount:0,totalCount:0};for(const s of e){if(s.type!=="blob")continue;const i=s.path.split("/");let n=t;n.totalCount++;for(let o=0;o<i.length-1;o++){const a=i[o];let c=n.folders.get(a);if(!c){const d=n.path?n.path+"/"+a:a;c={name:a,path:d,folders:new Map,fileCount:0,totalCount:0},n.folders.set(a,c)}c.totalCount++,n=c}n.fileCount++}return t}function n$(e,t){if(!t)return e.filter(i=>i.type==="blob").length;const s=t.endsWith("/")?t:t+"/";return e.filter(i=>i.type==="blob"&&i.path.startsWith(s)).length}const r$=x.div`
  font-size: 13px;
  font-family: inherit;
  user-select: none;
`,s$=x.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px 4px ${e=>8+e.$depth*16}px;
  border-radius: 6px;
  cursor: pointer;
  background: ${e=>e.$selected?h.bg.selected:"transparent"};
  color: ${h.text.primary};
  &:hover {
    background: ${e=>e.$selected?h.bg.selected:h.bg.hover};
  }
`,i$=x.span`
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${e=>e.$open?90:0}deg);
  transition: transform 0.1s ease;
  color: ${h.text.tertiary};
`,o$=x.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a$=x.span`
  font-size: 11px;
  color: ${h.text.tertiary};
  font-variant-numeric: tabular-nums;
`;function l$(e){return[...e.folders.values()].sort((t,s)=>t.name.localeCompare(s.name))}function xp({node:e,depth:t,expanded:s,selected:i,onToggle:n,onSelect:o}){const a=e.path==="",c=a||s.has(e.path),d=a?"(repository root)":e.name,u=l$(e),p=u.length>0;return r.jsxs(r.Fragment,{children:[r.jsxs(s$,{$selected:i===e.path,$depth:t,onClick:f=>{f.stopPropagation(),o(e.path)},children:[p?r.jsx(i$,{$open:c,onClick:f=>{f.stopPropagation(),a||n(e.path)},children:r.jsx(Ue,{name:"CaretRight",size:8})}):r.jsx("span",{style:{width:12}}),r.jsx(Ue,{name:"Folder",size:14}),r.jsx(o$,{title:e.path||"root",children:d}),r.jsx(a$,{children:e.totalCount})]}),c&&u.map(f=>r.jsx(xp,{node:f,depth:t+1,expanded:s,selected:i,onToggle:n,onSelect:o},f.path))]})}function c$({entries:e,selected:t,onSelect:s}){const i=l.useMemo(()=>t$(e),[e]),[n,o]=l.useState(()=>{const c=new Set,d=t.split("/").filter(Boolean);for(let u=1;u<=d.length;u++)c.add(d.slice(0,u).join("/"));return c}),a=c=>{o(d=>{const u=new Set(d);return u.has(c)?u.delete(c):u.add(c),u})};return r.jsx(r$,{children:r.jsx(xp,{node:i,depth:0,expanded:n,selected:t,onToggle:a,onSelect:s})})}new Date(Date.now()-2*36e5).toISOString(),new Date(Date.now()-26*36e5).toISOString(),new Date(Date.now()-120*36e5).toISOString(),new Date(Date.now()-960*36e5).toISOString();const d$=x.div`
  width: 640px;
  max-width: calc(100vw - 32px);
  max-height: min(640px, calc(100vh - 64px));
  background: ${h.bg.surface};
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: inherit;
`,u$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid ${h.border.subtle};
`,p$=x.span`
  font-size: 15px;
  font-weight: 600;
  color: ${h.text.primary};
`,f$=x.button`
  all: unset;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${h.text.tertiary};
  cursor: pointer;
  &:hover {
    background: ${h.bg.hover};
    color: ${h.text.primary};
  }
`,h$=x.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
`,g$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid ${h.border.subtle};
`,m$=x.span`
  font-size: 12px;
  color: ${h.text.tertiary};
`,x$=x.div`
  display: flex;
  gap: 8px;
`,b$=x.div`
  padding: 10px 12px;
  background: rgba(204, 56, 43, 0.08);
  border: 1px solid rgba(204, 56, 43, 0.2);
  border-radius: 8px;
  font-size: 13px;
  color: rgba(204, 56, 43, 0.9);
  margin-bottom: 12px;
`,y$=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 0;
  text-align: center;
`,w$=x.p`
  font-size: 13px;
  color: ${h.text.secondary};
  margin: 0;
  max-width: 340px;
`,v$=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`,k$=x.span`
  font-size: 13px;
  font-weight: 500;
  color: ${h.text.primary};
`,Tc=x.div`
  font-size: 13px;
  color: ${h.text.tertiary};
  padding: 24px 0;
  text-align: center;
`;function jc(e){const t=e.indexOf("/");return t>=0?{owner:e.slice(0,t),repo:e.slice(t+1)}:{owner:"",repo:e}}function S$({onClose:e,onPick:t,projectId:s,initialSpec:i}){const{showToast:n}=bt(),[o,a]=l.useState(()=>vr()),[c]=l.useState(()=>i?{fullName:`${i.owner}/${i.repo}`,defaultBranch:i.ref}:null),d=i?.ref??"",[u,p]=l.useState([]),[f,b]=l.useState(""),[m,y]=l.useState(i?.pathPrefix??""),[g,C]=l.useState(!1),[v,w]=l.useState(!1),[S,k]=l.useState(""),E=o.connected?"tree":"connect";l.useEffect(()=>(ao(),Ts(a)),[]),l.useEffect(()=>{if(!o.connected||!c||!d){C(!1);return}const{owner:M,repo:L}=jc(c.fullName);let z=!0;return C(!0),k(""),at().githubGetTree({owner:M,repo:L,ref:d}).then(J=>{z&&(p(J.entries),b(J.resolvedSha))}).catch(J=>{z&&k(`Failed to load tree for ${c.fullName}@${d}: ${J instanceof Error?J.message:J}`)}).finally(()=>{z&&C(!1)}),()=>{z=!1}},[o.connected,c,d]);const T=l.useMemo(()=>n$(u,m),[u,m]),_=async()=>{C(!0),k("");try{await js()}catch(M){const L=M instanceof Error?M.message:String(M);L.includes("was closed")||k(L)}finally{C(!1)}},R=async()=>{if(!c)return;const{owner:M,repo:L}=jc(c.fullName),z={owner:M,repo:L,ref:d,pathPrefix:m,resolvedSha:f||void 0};if(t){t(z),e();return}if(!s){e();return}w(!0),k("");try{const J=await at().githubImportRepo({projectId:s,owner:z.owner,repo:z.repo,ref:z.ref,pathPrefix:z.pathPrefix});n(`Imported ${J.filesImported} file${J.filesImported===1?"":"s"}`+(J.filesSkipped>0?` (${J.filesSkipped} skipped)`:""),"success"),qn(s,{source:"user-import"}),e()}catch(J){k(`Import failed: ${J instanceof Error?J.message:String(J)}`),w(!1)}},$=E==="connect"?"Connect GitHub":"Import from GitHub";return r.jsx(tn,{isOpen:!0,onClose:v?()=>{}:e,children:r.jsxs(d$,{children:[r.jsxs(u$,{children:[r.jsx(p$,{children:$}),r.jsx(f$,{onClick:v?void 0:e,"aria-label":"Close",children:r.jsx(Ue,{name:"X",size:16})})]}),r.jsxs(h$,{children:[S&&r.jsx(b$,{children:S}),E==="connect"&&r.jsxs(y$,{children:[r.jsx(Ue,{name:"Branch",size:32}),r.jsx(w$,{children:"Connect your GitHub account to import files from a repository into this project."}),r.jsx(fe,{variant:"primary",size:"sm",onClick:_,disabled:g,children:g?"Connecting…":"Connect GitHub"})]}),E==="tree"&&c&&r.jsxs(r.Fragment,{children:[r.jsx(v$,{children:r.jsx(k$,{children:c.fullName})}),g?r.jsx(Tc,{children:"Loading tree…"}):u.length===0?r.jsx(Tc,{children:"Empty tree."}):r.jsx(c$,{entries:u,selected:m,onSelect:y})]})]}),E!=="connect"&&r.jsxs(g$,{children:[r.jsx(m$,{children:E==="tree"&&u.length>0&&r.jsxs(r.Fragment,{children:[T," importable file",T===1?"":"s",m&&` under ${m}/`]})}),r.jsxs(x$,{children:[r.jsx(fe,{variant:"ghost",size:"sm",onClick:e,disabled:v,children:"Cancel"}),E==="tree"&&r.jsx(fe,{variant:"primary",size:"sm",onClick:R,disabled:g||v||u.length===0,children:v?"Importing…":t?"Select":"Import"})]})]})]})})}function C$(e){try{const t=new URL(e.includes("://")?e:"https://"+e);if(t.hostname!=="github.com"&&t.hostname!=="www.github.com")return null;const s=t.pathname.split("/").filter(Boolean);if(s.length<2)return null;const[i,n,o,a,...c]=s,d=n.replace(/\.git$/,"");if(!o)return{owner:i,repo:d,ref:"HEAD",pathPrefix:""};if(o!=="tree"&&o!=="blob"||!a)return null;let u=c.join("/");return o==="blob"&&(u=u.includes("/")?u.slice(0,u.lastIndexOf("/")):""),{owner:i,repo:d,ref:a,pathPrefix:u}}catch{return null}}const _$=15e3,$$=3;function E$(e,t){const[s,i]=l.useState({kind:"building"}),n=l.useRef(!1);return l.useEffect(()=>{if(!t)return;n.current=!1,i({kind:"building"});let o=!0,a=0;const c=async()=>{try{const u=await at().getDesignSystemBuildStatus({projectId:e});if(!o||n.current)return;a=0,u.buildStatus==="complete"?(n.current=!0,i({kind:"complete",sha:u.lastBuiltSha})):u.buildStatus==="error"&&(n.current=!0,i({kind:"error",message:u.buildError||"Build failed"}))}catch(u){if(!o||n.current)return;a++,a>=$$&&(n.current=!0,i({kind:"error",message:u instanceof Error?u.message:String(u)}))}};c();const d=setInterval(c,_$);return()=>{o=!1,clearInterval(d)}},[e,t]),s}function T$({projectId:e,projectPath:t,onClose:s,onBuildComplete:i,initialSpec:n,autoStartBuilding:o=!1}){const{showToast:a}=bt(),[c,d]=l.useState(o?"building":"url"),[u,p]=l.useState(""),[f,b]=l.useState(n??null),[m,y]=l.useState(""),g=E$(e,c==="building"),C=l.useRef(!1);l.useEffect(()=>{c==="building"?t&&hd(t):C.current=!1},[c,t]),l.useEffect(()=>{c==="building"&&(g.kind==="complete"?(qn(e),a("Your design system is ready","success"),f&&i&&i(f),s()):g.kind==="error"&&f&&t&&!C.current&&(C.current=!0,fd(t,`The background build of ${f.owner}/${f.repo}${f.pathPrefix?" · "+f.pathPrefix:""} failed: ${g.message}. Fall back to on-demand browsing via github_get_tree / github_import_files — there are no _build/ artifacts to wait for. If GitHub isn't connected yet, call connect_github first.`)))},[c,g,e,t,a,s,f,i]);const v=C$(u.trim()),w=async S=>{b(S),y("");try{await at().buildDesignSystemFromRepo({projectId:e,owner:S.owner,repo:S.repo,ref:S.ref,pathPrefix:S.pathPrefix}),d("building")}catch(k){const E=k instanceof Error?k.message:String(k);y(E),d("url")}};return c==="pick"&&v?r.jsx(S$,{initialSpec:v,onClose:()=>d("url"),onPick:w}):r.jsx(tn,{isOpen:!0,onClose:c==="building"?()=>{}:s,children:r.jsxs(j$,{children:[r.jsxs(R$,{children:[r.jsx(A$,{children:c==="building"?"Building design system…":"Build design system from repo"}),c!=="building"&&r.jsx(D$,{onClick:s,"aria-label":"Close",children:r.jsx(Ue,{name:"X",size:16})})]}),r.jsxs(M$,{children:[c==="url"&&r.jsxs(r.Fragment,{children:[r.jsxs(P$,{children:["Paste a GitHub repository URL. We'll clone it, run its build inside a container, and copy the built CSS, tokens, and docs into this project's ",r.jsx("code",{children:"_build/"})," ","folder."]}),m&&r.jsx(F$,{children:m}),r.jsx(O$,{autoFocus:!0,placeholder:"https://github.com/owner/repo/tree/main",value:u,onChange:S=>p(S.target.value),onKeyDown:S=>{S.key==="Enter"&&v&&d("pick")}}),r.jsx(ji,{children:"Link to a branch or a subfolder — we'll show you the repo tree next so you can narrow it down. Public repos work without any extra setup; private repos need the GitHub connection first."})]}),c==="building"&&r.jsx(I$,{children:g.kind==="error"?r.jsxs(r.Fragment,{children:[r.jsx(Ue,{name:"Warning",size:32}),r.jsx(Ac,{children:"Build failed"}),r.jsx(z$,{children:g.message})]}):r.jsxs(r.Fragment,{children:[r.jsx(N$,{}),r.jsxs(Ac,{children:["Building"," ",f?r.jsxs("code",{children:[f.owner,"/",f.repo,f.pathPrefix&&`:${f.pathPrefix}`]}):"…"]}),r.jsxs(ji,{children:["Running ",r.jsx("code",{children:"npm install"})," and the build script in a fresh container. This takes a few minutes — you can close this and come back; the build keeps going."]})]})})]}),r.jsxs(L$,{children:[c==="url"&&r.jsxs(r.Fragment,{children:[r.jsx(Rc,{}),r.jsx(fe,{variant:"ghost",size:"sm",onClick:s,children:"Cancel"}),r.jsx(fe,{variant:"primary",size:"sm",disabled:!v,onClick:()=>d("pick"),children:"Continue"})]}),c==="building"&&g.kind==="error"&&r.jsxs(r.Fragment,{children:[r.jsx(Rc,{}),r.jsx(fe,{variant:"ghost",size:"sm",onClick:s,children:"Close"}),r.jsx(fe,{variant:"primary",size:"sm",onClick:()=>d("url"),children:"Try again"})]}),c==="building"&&g.kind==="building"&&r.jsxs(r.Fragment,{children:[r.jsx(ji,{children:"You can close this — the build continues in the background."}),r.jsx(fe,{variant:"ghost",size:"sm",onClick:s,children:"Close"})]})]})]})})}const j$=x.div`
  width: 560px;
  max-width: calc(100vw - 32px);
  background: ${h.bg.surface};
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: inherit;
`,R$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid ${h.border.subtle};
`,A$=x.span`
  font-size: 15px;
  font-weight: 600;
  color: ${h.text.primary};
`,D$=x.button`
  all: unset;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${h.text.tertiary};
  cursor: pointer;
  &:hover {
    background: ${h.bg.hover};
    color: ${h.text.primary};
  }
`,M$=x.div`
  padding: 20px;
`,L$=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid ${h.border.subtle};
`,Rc=x.div`
  flex: 1;
`,P$=x.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${h.text.secondary};
  margin: 0 0 16px;
  code {
    background: ${h.bg.muted};
    padding: 1px 5px;
    border-radius: 4px;
    font-family: ui-monospace, 'SF Mono', monospace;
    font-size: 12px;
  }
`,ji=x.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${h.text.tertiary};
  margin: 12px 0 0;
  code {
    font-family: ui-monospace, 'SF Mono', monospace;
  }
`,O$=x.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${h.border.default};
  border-radius: 8px;
  font-size: 13px;
  font-family: ui-monospace, 'SF Mono', monospace;
  color: ${h.text.primary};
  background: ${h.bg.surface};
  &:focus {
    outline: none;
    border-color: ${h.accent.primary};
  }
`,F$=x.div`
  padding: 10px 12px;
  background: rgba(204, 56, 43, 0.08);
  border: 1px solid rgba(204, 56, 43, 0.2);
  border-radius: 8px;
  font-size: 12px;
  color: rgba(204, 56, 43, 0.9);
  margin-bottom: 12px;
`,I$=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 0;
  text-align: center;
`,Ac=x.div`
  font-size: 14px;
  font-weight: 500;
  color: ${h.text.primary};
  code {
    font-family: ui-monospace, 'SF Mono', monospace;
    font-size: 13px;
    background: ${h.bg.muted};
    padding: 2px 6px;
    border-radius: 4px;
  }
`,z$=x.div`
  font-size: 12px;
  color: ${h.accent.error};
  max-width: 400px;
  word-break: break-word;
`,N$=x.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${h.border.subtle};
  border-top-color: ${h.accent.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;async function bp(){const e=window.__omUserViewerHandle;if(!e)return null;try{const t=await e.executeJavaScript(`(() => {
        const ds = document.querySelector('deck-stage');
        if (!ds) return null;
        const fonts = new Set();
        try {
          // CSSFontFaceRule families come back quoted; strip the quotes so
          // fontSwaps.from matches what the capture script records.
          for (const f of document.fonts) fonts.add(f.family.replace(/^["']|["']$/g, ''));
        } catch {}
        return {
          width: Number(ds.getAttribute('width')) || 1920,
          height: Number(ds.getAttribute('height')) || 1080,
          // The component's own getter — filtered count that excludes
          // slotted <template>/<script>/<style>. Counting ds.children
          // directly would over-count and produce duplicate trailing
          // slides when goTo(N) clamps past the end.
          slideCount: typeof ds.length === 'number' ? ds.length : ds.children.length,
          customFonts: Array.from(fonts),
        };
      })()`,5e3);return!t||t.slideCount<1?null:t}catch{return null}}function Jn(e,t,s={}){G.trackEvent("deck_stage_fast_path_export",{kind:e,ok:t,...s})}const Dc=`<script>
(async () => {
  try { await customElements.whenDefined('deck-stage'); } catch (e) {}
  try { await document.fonts.ready; } catch (e) {}
  setTimeout(() => { try { window.print(); } catch (e) {} }, 500);
})();
<\/script>`;function B$(e){const t=e.lastIndexOf(".");return t>0?`${e.slice(0,t)}-print${e.slice(t)}`:`${e}-print.html`}async function H$(e,t,s){if(!t||!/\.html?$/i.test(t))return!1;const i=await bp();if(!i)return!1;try{const n=await sh(e,t);if(n===null||!/<deck-stage\b/i.test(n))return!1;const o=/<\/body>/i.test(n)?n.replace(/<\/body>/i,`${Dc}
</body>`):`${n}
${Dc}
`,a=B$(t);await at().writeFiles({projectId:e,files:[{path:a,data:o,mimeType:"text/html"}]}),qn(e,{source:"user-import"});const c=Ls(e,a,{urlLike:!0});if(c.startsWith("/design/")||c==="about:blank")throw new Error("sandbox preview origin unavailable");return window.open(c,"_blank","noopener,noreferrer")?(s("Opening print view — use your browser to save as PDF.","info",4e3),Jn("pdf",!0,{slides:i.slideCount}),!0):(s(l.createElement("span",null,"Your browser blocked the print window. ",l.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Open it manually"),"."),"error",1e4),Jn("pdf",!1,{slides:i.slideCount,err:"popup_blocked"}),!0)}catch(n){return Jn("pdf",!1,{err:n instanceof Error?n.message:String(n)}),!1}}function U$(e,t){const s=t==="editable"?"deck-stage > [data-deck-active]":"body";return Array.from({length:e.slideCount},(i,n)=>({showJs:`document.querySelector('deck-stage').goTo(${n})`,selector:s}))}async function W$(e,t,s,i){if(s==="google-fonts")return!1;const n=await bp();if(!n)return!1;const o=s==="screenshots"?"screenshots":"editable",a={mode:o,width:n.width,height:n.height,slides:U$(n,o),filename:t||"deck"};o==="editable"&&(a.resetTransformSelector="deck-stage",s==="safe-fonts"&&n.customFonts.length>0&&(a.fontSwaps=n.customFonts.map(d=>({from:d,to:"Arial"})))),i("Generating PPTX…","info",4e3);const c=performance.now();try{const{runGenPptx:d}=await Rs(async()=>{const{runGenPptx:b}=await import("./gen-pptx-dX2JocF9.js");return{runGenPptx:b}},__vite__mapDeps([3,1,2])),u=await d(a,e),p=u.validation.map(b=>b.kind);return p.length>0,p.some(b=>["slide_selector_miss","reset_selector_miss","duplicate_majority"].includes(b))?(Jn("pptx",!1,{mode:s,slides:n.slideCount,durationMs:Math.round(performance.now()-c),err:`validation:${p.join(",")}`}),!1):(i(`PPTX downloaded (${u.slides} slides).`,"info",4e3),Jn("pptx",!0,{mode:s,slides:n.slideCount,durationMs:Math.round(performance.now()-c),flags:p.join(",")}),!0)}catch(d){return Jn("pptx",!1,{mode:s,durationMs:Math.round(performance.now()-c),err:d instanceof Error?d.message:String(d)}),!1}}const Mc=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function G$({projectName:e,userEmail:t,displayName:s,projectId:i,sharing:n,projectType:o,publishedAt:a,isOwner:c,canEdit:d,canComment:u,onUpdateSharing:p,onUpdateType:f,onPublishedChange:b,onRename:m,ownerEmail:y,projectOrg:g,antspacePublish:C}){const v=ih(g),w=mo(),{projectPath:S,addMessage:k,createChat:E,startStreaming:T,setStreamingError:_,setActiveFileTab:R}=vt(),$=nn(),M=l.useRef($);M.current=$;const L=$?.streaming?.isLoading??!1;Mh(L),gd(L);const[z,J]=l.useState(d||u),[I,te]=l.useState("chat"),[ce,ue]=l.useState(!1),[me,de]=l.useState(!1),[De,Re]=l.useState(C),[je,H]=l.useState(!1),ke=od(),X=ld(),[Se]=cd(),oe=Se.get("org"),he=oe?`?org=${encodeURIComponent(oe)}`:"",pe=gt("omelette_ds_build_from_repo").on&&!0,Le=gt("omelette_au_jambon").on,re=gt("omelette_aux_champignons").on,U=Le&&re,D=gt("omelette_deck_stage_export_fast_path").on,[O,P]=l.useState(()=>Se.get("setup")==="design-system"),B=oh(),ne=l.useRef(!1);l.useEffect(()=>{if(ne.current)return;if(O){ne.current=!0;return}!B||(ne.current=!0,e!=="Design System")||Object.values(B.chats).some(W=>W.messages.length>0)||P(!0)},[O,B,e,i]),Nt(me||je);const{showToast:se,updateToast:Oe,hideToast:Me}=bt();l.useEffect(()=>(ha(F=>se(F,"info",2e3)),()=>ha(null)),[se]);const[Fe]=ah();Ye("cache-break-alert",F=>{if(!Fe.showCacheBreakToasts)return;const{ratio:W,cacheRead:A,inputTotal:N}=F.detail;se(`Prompt cache hit ${Math.round(W*100)}% (${A.toLocaleString()}/${N.toLocaleString()} tok) — likely cache bust`,"warning",6e3)});const Pe=l.useRef(null);l.useEffect(()=>(ma((F,W)=>{if(F!==S)return;const A=W.charAt(0).toUpperCase()+W.slice(1)+".";if(Pe.current){Oe(Pe.current,A);return}Pe.current=se(A,"error",0,{title:"Changes aren't being saved",onDismiss:()=>{Pe.current=null},action:{label:"Retry",onClick:()=>{Pe.current&&Oe(Pe.current,"Retrying…"),bh(S)}}})}),ga(F=>{F===S&&(Pe.current&&Me(Pe.current),Pe.current=null)}),xa(F=>{F===S&&se("You've hit your Claude Design usage limit — changes are queued and will save automatically once it lifts. This doesn't affect your regular Claude usage.","error")}),()=>{ma(null),ga(null),xa(null),Pe.current&&Me(Pe.current),Pe.current=null}),[se,Oe,Me,S]);const We=w?.openFiles??[],tt=w?.activeFileTab??-1,Ee=tt>0?We[tt-1]??null:null,[Je,Ie]=l.useState(()=>{const F=new URLSearchParams(window.location.search),W=F.get("file"),A=parseInt(F.get("slide")??"",10);return W&&Number.isInteger(A)&&A>=1?{filePath:W,index:A-1}:null}),le=Je?.filePath===Ee?Je.index:null;l.useEffect(()=>{const F=W=>{Ie({filePath:W.detail.filePath,index:W.detail.slideIndex})};return window.addEventListener("deck-slide-change",F),()=>window.removeEventListener("deck-slide-change",F)},[]),l.useEffect(()=>{const F=()=>ue(!0);return window.addEventListener("open-settings",F),()=>{window.removeEventListener("open-settings",F)}},[]);const q=l.useCallback(async F=>{const W=$??E();if(W.streaming?.isLoading)return;const A=W.id,N=[...W.messages],Y=W.todos,xe={id:Math.random().toString(36).substring(2,15),name:F.skillName,type:"skill",content:F.prompt};k(A,{role:"user",content:F.messageText,attachments:[xe]}),T(A);const Ce=w&&w.activeFileTab>0?w.openFiles[w.activeFileTab-1]??null:null,Te=bs(A,{projectTitle:e,viewingFile:Ce,projectKey:S})+`${F.messageText}

## ${F.section}
${F.prompt}`;try{const He=await G.getSettings();await G.sendMessage({message:Te,projectPath:S,projectName:e,chatId:A,activeSkills:W.composer.activeSkills,sessionId:W.sessionId,storedMessages:N,storedTodos:Y,model:Xn(He.model),displayMeta:{content:F.messageText,attachments:[xe]}})}catch(He){_(A,He instanceof Error?He.message:String(He)),ys(A)}},[$,E,k,T,_,S,e,w]),[we,ie]=l.useState(!1),Ge=l.useCallback(()=>{G.trackEvent("export_button_pressed",{ext:"handoff"}),G.trackEvent("handoff_button_pressed",{}),ie(!0)},[]),ze=l.useCallback(async()=>{const F=Ee||"the current design";G.trackEvent("export_button_pressed",{ext:"pdf"}),G.trackEvent("pdf_button_pressed",{}),!(D&&await H$(i,Ee,se))&&q({messageText:`Save this design as a PDF: ${F}`,skillName:"Save as PDF",prompt:lh,section:"Save as PDF Skill"})},[D,i,Ee,q,se]),qe=l.useCallback(async F=>{const W=Ee||"the current design";if(G.trackEvent("export_button_pressed",{ext:"pptx",mode:F}),G.trackEvent("pptx_button_pressed",{mode:F}),!(D&&await W$(i,e,F,se)))if(F==="screenshots")q({messageText:`Export this design as a PPTX (screenshot mode): ${W}`,skillName:"Export as PPTX (screenshots)",prompt:ch,section:"Export as PPTX Skill"});else{const A=Lh[F];q({messageText:`Export this design as an editable PPTX: ${W}`,skillName:"Export as PPTX (editable)",prompt:`${dh}

## Font strategy directive
${A}`,section:"Export as Editable PPTX Skill"})}},[D,i,e,Ee,q,se]),Ke=l.useCallback(()=>{const F=Ee||"the current design";G.trackEvent("export_button_pressed",{ext:"figma"}),G.trackEvent("figma_export_button_pressed",{}),q({messageText:`Send this design to Figma: ${F}`,skillName:"Send to Figma",prompt:uh,section:"Send to Figma Skill"})},[Ee,q]),Xe=l.useCallback(()=>{const F=Ee||"the current design";G.trackEvent("export_button_pressed",{ext:"canva"}),G.trackEvent("canva_export_button_pressed",{}),q({messageText:`Send this design to Canva: ${F}`,skillName:"Send to Canva",prompt:ph,section:"Send to Canva Skill"})},[Ee,q]),rt=l.useCallback(()=>{const F=Ee||"the current design";G.trackEvent("export_button_pressed",{ext:"html"}),G.trackEvent("inline_html_button_pressed",{}),q({messageText:`Save as standalone HTML: ${F}`,skillName:"Save as standalone HTML",prompt:fh,section:"Save as standalone HTML skill"})},[Ee,q]);l.useMemo(()=>!1,[B]);const[yt,kt]=l.useState(!1),[St,pt]=l.useState(!1),[wt,ft]=l.useState(!1),[Ct,jt]=l.useState(!1);Nt(Ct);const Ne=F=>Kn("design.export_menu_click",{attrs:{mode:F}}),V=l.useCallback(async()=>{if(!Ct){Ne("zip"),G.trackEvent("export_button_pressed",{ext:"zip"}),jt(!0);try{const F=As(),W={};F&&(W[Ds]=F);const A=await fetch(`/design/v1/design/projects/${encodeURIComponent(i)}/download`,{headers:W});if(!A.ok)throw new Error(`Download failed: ${A.status}`);const N=await A.blob(),Y=URL.createObjectURL(N),xe=document.createElement("a");xe.href=Y;const Ce=A.headers.get("content-disposition")??"",_e=Ce.match(/filename\*=UTF-8''([^;]+)/i),Te=Ce.match(/filename="?([^";]+)"?/);xe.download=(()=>{if(_e)try{return decodeURIComponent(_e[1])}catch{}return Te?.[1]||"project.zip"})(),document.body.appendChild(xe),xe.click(),xe.remove(),URL.revokeObjectURL(Y)}catch{se("ZIP download failed — please try again.","error")}finally{jt(!1)}}},[i,Ct,se]),ae=d?{}:{disabled:!0,subtitle:"Requires edit permission"},ge=[{label:Ct?"Downloading…":"Download project as .zip",icon:"Download",onClick:V,disabled:Ct},{label:"Export as PDF",icon:"File",onClick:()=>{Ne("pdf"),ze()},...ae},{label:"Export as PPTX…",icon:"File",onClick:()=>{Ne("pptx"),ft(!0)},...ae},...U?[{label:"Send to Figma…",icon:"ArrowOutSquare",onClick:()=>{Ne("figma"),Ke()},...ae}]:[],{label:"Send to Canva…",icon:"ArrowOutSquare",onClick:()=>{Ne("canva"),Xe()},...ae},{label:"Export as standalone HTML",icon:"File",onClick:()=>{Ne("standalone_html"),rt()},...ae},{label:"Handoff to Claude Code…",icon:"CommandLine",onClick:()=>{Ne("handoff"),Ge()}},...d?[]:[{separator:!0},{label:"Remix this project to edit or export",icon:"Copy",onClick:()=>{pt(!1),Ze()},...ke&&{disabled:!0,subtitle:Di}}]],[Be,Ae]=l.useState(!1),nt=l.useRef(null),Ze=async()=>{if(!me){G.trackEvent("remix_button_pressed",{}),de(!0);try{const F=await at().remixProject({projectId:i,includeChats:!1});G.trackEvent("remix_complete",{}),X(`/p/${F.projectId}${he}`)}catch{se("Failed to remix project.","error"),de(!1)}}},[st,ht]=l.useState(!1),Rt=async()=>{if(!st){ht(!0);try{const F=Vt(),W=F?.templateTitle||e||"New project",A=$h({projectId:i,templateTitle:W,description:F?.description,introText:F?.introText}),N=await G.createProject(W,[A],v.id);G.trackEvent("template_new_project",{via:"template_info_pane"}),X(`/p/${N}${he}`)}catch{se("Failed to create project from template.","error"),ht(!1)}}},Dt=async()=>{if(!je){H(!0);try{const F=await at().remixProject({projectId:i,includeChats:!0});X(`/p/${F.projectId}${he}`)}catch{se("Failed to duplicate project.","error"),H(!1)}}},[Z,be]=l.useState(!1),ve=async()=>{if(!Z){be(!0);try{const F=await at().createTemplateFromProject({projectId:i});G.trackEvent("template_created_from_project",{via:"share_popover"});try{sessionStorage.setItem("omelette:focus-extra-tab",F.projectId)}catch{}X(`/p/${F.projectId}${he}`)}catch{se("Failed to create template.","error"),be(!1)}}},ye=l.useCallback(async(F,W,A,N,Y,xe,Ce)=>{let _e=F;G.trackEvent("team_design_system_create_start",{...xe}),xh(i),qc(i,A);for(const{file:He,selectedFrames:Qe}of Y)try{await oo(i,He),Pc(i,Qe)}catch{}if(W.length>0){for(const He of W)try{const Qe=await He.arrayBuffer(),xt=new Uint8Array(Qe);let Q="";const $e=8192;for(let lt=0;lt<xt.length;lt+=$e){const At=xt.subarray(lt,lt+$e);Q+=String.fromCharCode.apply(null,Array.from(At))}const ot=btoa(Q);await at().writeFiles({projectId:i,files:[{path:`uploads/${He.name}`,data:ot,mimeType:He.type||"application/octet-stream",encoding:"base64"}],deduplicate:!1})}catch{}qn(i)}if(pe&&N.length>0){const He=N[0];try{await at().buildDesignSystemFromRepo({projectId:i,owner:He.owner,repo:He.repo,ref:He.ref,pathPrefix:He.pathPrefix}),K(He)}catch(Qe){se(`Couldn't start repo build: ${Qe instanceof Error?Qe.message:String(Qe)}`,"error"),Ce&&(_e=Ce)}}const Te=new URL(window.location.href);Te.searchParams.delete("setup"),window.history.replaceState(null,"",Te.pathname+Te.search),R(-2),P(!1),setTimeout(async()=>{const He=M.current;if(!He)return;const Qe=He.id,xt={id:crypto.randomUUID(),name:"Create design system",type:"text",content:_e},Q=[...He.messages],$e=He.todos;k(Qe,{role:"user",content:"",attachments:[xt]}),T(Qe);const ot=w&&w.activeFileTab>0?w.openFiles[w.activeFileTab-1]??null:null,lt=bs(Qe,{projectTitle:e,viewingFile:ot,projectKey:S});try{const At=await G.getSettings();await G.sendMessage({message:lt+Li([xt]),projectPath:S,projectName:e,chatId:Qe,activeSkills:He.composer.activeSkills,sessionId:He.sessionId,storedMessages:Q,model:Xn(At.model),storedTodos:$e,displayMeta:{content:"",attachments:[xt]}})}catch(At){_(Qe,At instanceof Error?At.message:String(At)),ys(Qe)}},100)},[k,pe,se,T,_,R,S,e,i,w]),[j,K]=l.useState(null);l.useEffect(()=>{const F=()=>te("preview");return window.addEventListener("mobile-show-preview",F),()=>window.removeEventListener("mobile-show-preview",F)},[]),l.useEffect(()=>{const F=new URL(window.location.href),W=F.searchParams.get("file"),A=F.searchParams.get("slide"),N=le!=null?String(le+1):null;Ee?(W!==Ee||A!==N)&&(F.searchParams.set("file",Ee),N!=null?F.searchParams.set("slide",N):F.searchParams.delete("slide"),F.hash="",window.history.replaceState(null,"",F)):(W!==null||A!==null)&&(F.searchParams.delete("file"),F.searchParams.delete("slide"),F.hash="",window.history.replaceState(null,"",F))},[Ee,le]),l.useEffect(()=>{let F=document.querySelector('meta[name="omelette-user-email"]');return F||(F=document.createElement("meta"),F.name="omelette-user-email",document.head.appendChild(F)),F.content=t,()=>{F?.remove()}},[t]);const ee=r.jsxs(r.Fragment,{children:[!c&&r.jsx(fe,{size:"xs",onClick:Ze,disabled:me||ke,title:ke?Di:void 0,children:me?"Remixing...":"Remix"}),r.jsx("div",{ref:nt,children:r.jsx(fe,{variant:"black",size:"xs",onClick:()=>Ae(!0),children:"Share"})})]});return O?r.jsx(va,{canEdit:d,canComment:u,children:r.jsx(Mc,{children:r.jsx(Jg,{onComplete:ye,onExit:()=>X(`/${he}`)})})}):r.jsxs(va,{canEdit:d,canComment:u,children:[r.jsx(Mc,{children:r.jsx(K_,{projectName:e,chatVisible:z,mobilePane:I,onMobilePaneChange:te,rightToolbarActions:ee,endToolbarActions:r.jsx(hh,{}),onExportClick:()=>pt(!0),onShareClick:()=>Ae(!0),onProjectsClick:()=>X(`/${he}`),projectsHref:`/design/${he}`,onRenameProject:c?m:void 0,onPublishedChange:b,onNewFromTemplate:o==="template"?Rt:void 0})}),r.jsx(gh,{open:Be,onClose:()=>Ae(!1),anchorEl:nt.current,modalOnMobile:!0,sharing:n,projectType:o,publishedAt:a,isOwner:c,currentFilePath:Ee,projectId:i,onUpdateSharing:p,onUpdateType:f,onDuplicate:Dt,duplicating:je,onTurnIntoTemplate:c?ve:void 0,turningIntoTemplate:Z,createDisabled:ke,exportItems:ge}),r.jsx(An,{open:St,onClose:()=>pt(!1),anchorEl:nt.current,modalOnMobile:!0,items:ge}),r.jsx(mh,{open:we,onClose:()=>ie(!1),projectId:i,projectName:e,currentFile:Ee}),!1,r.jsx(e$,{open:ce,onClose:()=>ue(!1)}),r.jsx(Vh,{isOpen:wt,onClose:()=>ft(!1),onGenerate:qe}),j&&r.jsx(T$,{projectId:i,projectPath:S,initialSpec:j,autoStartBuilding:!0,onClose:()=>K(null),onBuildComplete:F=>{fd(S,`The background build of ${F.owner}/${F.repo}${F.pathPrefix?" · "+F.pathPrefix:""} just finished. Its artifacts are now available under _build/ in the project files. Treat _build/ as the source of truth for design tokens, component docs, and CSS — Figma links (if any) represent proposed updates that may not yet be reflected in the repo.`)}})]})}const J$=x.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: transparent;
`,K$=x.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 24px;
  text-align: center;
  font-family: inherit;
`;function X$(){if(typeof window>"u")return null;const e=new URLSearchParams(window.location.search).get("file");if(e)return e;const t=window.location.hash;if(t.startsWith("#file=")){const s=decodeURIComponent(t.slice(6));if(s){const i=new URL(window.location.href);i.searchParams.set("file",s),i.hash="",window.history.replaceState(null,"",i)}return s||null}return null}function Y$({id:e,userId:t,userEmail:s,displayName:i}){const n=Jc(),o=ld(),[a]=cd(),[c,d]=l.useState(null),[u,p]=l.useState(null),[f,b]=l.useState(null),m=l.useMemo(()=>{const R=X$();if(R){const $=new URLSearchParams(window.location.search).get("slide"),M=$?parseInt($,10):NaN;Number.isInteger(M)&&M>=1&&yh(R,`#${M}`)}return R},[e]),y=l.useRef(n);y.current=n,l.useEffect(()=>{let R=!1;p(null),d(null),b(null);const $=performance.now();return G.openProject(e).then(M=>{if(R)return;d(M.data);const L=Vt();b(L),document.title=M.data.name||y.current,Kn("design.project_open_ms",{duration:performance.now()-$,attrs:{is_owner:L?.owner===t,chat_count:Object.keys(M.data.chats??{}).length}});const z=new URLSearchParams(window.location.search).get("via");G.trackEvent("project_open",{in_editor:!0,is_owner:L?.owner===t,via:z==="share"?"share_link":void 0})}).catch(M=>{R||p(M instanceof Error?M.message:String(M))}),()=>{R=!0}},[e,t]),l.useEffect(()=>G.onProjectDataChanged((R,$)=>{R===e&&(d($),document.title=$.name||y.current)}),[e]);const g=c?.name;l.useEffect(()=>{document.title=g||n},[g,n]),l.useEffect(()=>()=>{document.title=y.current},[]);const C=l.useCallback(async R=>{await G.renameProject(e,R)},[e]),v=l.useCallback(async R=>{try{await at().updateSharing({projectId:e,viewMode:R.viewMode,teamCanEdit:R.teamCanEdit,teamCanComment:R.teamCanComment}),G.trackEvent("sharing_updated",{viewMode:R.viewMode,teamCanEdit:R.teamCanEdit,teamCanComment:R.teamCanComment}),b($=>{if(!$)return $;const M={...$,sharing:{viewMode:R.viewMode,teamCanEdit:R.teamCanEdit,teamCanComment:R.teamCanComment}};return yr(M),M})}catch($){throw $}},[e]),w=l.useCallback(async R=>{await at().updateProjectType({projectId:e,type:wh(R)}),G.trackEvent("project_type_updated",{type:R}),R==="design_system"&&sessionStorage.setItem("omelette:focus-extra-tab",e),b($=>{if(!$)return $;const M={...$,type:R,publishedAt:R==="project"?null:$.publishedAt};return yr(M),M}),Cr()},[e]),S=l.useCallback(R=>{b($=>{if(!$)return $;const M={...$,publishedAt:R};return yr(M),M})},[]);if(u){const R=a.get("org"),$=R?`?org=${encodeURIComponent(R)}`:"",M=/not[_ ]found|permission[_ ]denied|forbidden/i.test(u);return r.jsxs(K$,{children:[r.jsx("span",{style:{fontSize:13,fontWeight:600,color:h.text.primary},children:M?"Project not found":"Something went wrong"}),r.jsx("span",{style:{fontSize:12,color:h.text.secondary,maxWidth:320,lineHeight:1.5},children:M?"This project may have been deleted, or you might not have access to it.":"Please try again in a moment."}),r.jsx(fe,{variant:"default",size:"sm",onClick:()=>o(`/${$}`),children:"Back to projects"})]})}if(!c||!f)return r.jsx(vh,{fixed:!0});const k=f.owner===t||f.owner===s,E=f.sharing.viewMode==="builtin",T=!E&&(k||f.sharing.teamCanEdit),_=T||!E&&(k||f.sharing.teamCanComment);return r.jsx(J$,{children:r.jsx(kh,{projectPath:e,serverPort:0,initialFile:m,canEdit:T,children:r.jsx(G$,{projectName:c.name||"Untitled",userEmail:s,displayName:i,projectId:e,sharing:f.sharing,projectType:f.type,publishedAt:f.publishedAt,isOwner:k,canEdit:T,canComment:_,onUpdateSharing:v,onUpdateType:w,onPublishedChange:S,onRename:T?C:void 0,ownerEmail:f.owner_email??f.owner,projectOrg:f.org,antspacePublish:f.antspacePublish})},e)})}export{Y$ as ProjectPage};
