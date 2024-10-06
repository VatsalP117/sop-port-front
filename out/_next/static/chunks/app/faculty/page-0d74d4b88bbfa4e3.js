(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488],{9491:function(e,t,a){Promise.resolve().then(a.bind(a,7919))},7919:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var s=a(7437),r=a(7815);a(5578);var l=a(1795);a(1342);var n=a(1478),i=a(5754),o=a(9160),c=a(9269),d=a(8792),u=a(585);let h=[{accessorKey:"project_name",header:e=>{let{column:t}=e;return(0,s.jsxs)(i.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Project Name",(0,s.jsx)(u.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)(d.default,{className:"max-w-[500px] truncate font-medium",children:t.getValue("project_name")})})}},{accessorKey:"tags",header:"Project Tags",cell:e=>{let{row:t}=e;return(0,s.jsx)("div",{className:"flex space-x-2",children:(0,s.jsx)("span",{className:"max-w-[500px] truncate  flex flex-row gap-2 flex-wrap",children:t.getValue("tags").map(e=>(0,s.jsx)(n.C,{variant:"secondary",children:e.length>40?e.slice(0,40)+"...":e}))})})}},{accessorKey:"status",header:"Status"}];var m=a(1006),f=a(3280),x=a(2265),p=a(5179),j=a(7907);function g(e){var t,a,r;let{columns:l,data:n}=e,c=(0,j.useRouter)(),[u,h]=(0,x.useState)([]),[g,w]=(0,x.useState)([]),v=(0,m.b7)({data:n,columns:l,getCoreRowModel:(0,f.sC)(),getPaginationRowModel:(0,f.G_)(),onColumnFiltersChange:w,getFilteredRowModel:(0,f.vL)(),onSortingChange:h,getSortedRowModel:(0,f.tj)(),state:{columnFilters:g,sorting:u}});return(0,x.useEffect)(()=>{v.setPageSize(5)},[]),(0,s.jsxs)("div",{className:"flex flex-col pt-4",children:[(0,s.jsx)("div",{className:"flex flex-row items-center py-4 gap-10",children:(0,s.jsx)(p.I,{placeholder:"Search by Projects...",value:null!==(r=null===(t=v.getColumn("project_name"))||void 0===t?void 0:t.getFilterValue())&&void 0!==r?r:"",onChange:e=>{var t;console.log(e.target.value),null===(t=v.getColumn("project_name"))||void 0===t||t.setFilterValue(e.target.value)},className:"max-w-sm"})}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(o.iA,{children:[(0,s.jsx)(o.xD,{children:v.getHeaderGroups().map(e=>(0,s.jsx)(o.SC,{children:e.headers.map(e=>(0,s.jsx)(o.ss,{children:e.isPlaceholder?null:(0,m.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(o.RM,{children:(null===(a=v.getRowModel().rows)||void 0===a?void 0:a.length)?v.getRowModel().rows.map(e=>(0,s.jsxs)(o.SC,{"data-state":e.getIsSelected()&&"selected",children:[e.getVisibleCells().map(e=>(0,s.jsx)(o.pj,{children:(0,m.ie)(e.column.columnDef.cell,e.getContext())},e.id)),(0,s.jsx)(o.pj,{onClick:()=>console.log(e.original),children:(0,s.jsx)(i.z,{asChild:!0,children:(0,s.jsx)(d.default,{href:"/project?projectId=".concat(e.original.id),children:"Edit"})})}),(0,s.jsx)(o.pj,{onClick:()=>c.push("/applications?projectId=".concat(e.original.id)),children:(0,s.jsx)(i.z,{variant:"secondary",children:"View Applications"})})]},e.id)):(0,s.jsx)(o.SC,{children:(0,s.jsx)(o.pj,{colSpan:l.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,s.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>v.previousPage(),disabled:!v.getCanPreviousPage(),children:"Previous"}),(0,s.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>v.nextPage(),disabled:!v.getCanNextPage(),children:"Next"})]})]})}var w=a(553),v=a(9259),N=a(4830),b=a(1657),y=a(6874),C=a(5216);let Z=N.Z.map(e=>({value:e,label:e}));function k(e){let t=0;for(;t<e.tags.length;){if("Open"==e.status)return!0;t++}return!1}async function S(e){let t=await fetch("".concat("","/api/faculty/getprojects"),{method:"GET",headers:{"Content-Type":"application/json"}});return 200!==t.status?(console.log("Failed to fetch data"),!1):(e(await t.json()),!0)}function R(){let[e,t]=(0,x.useState)([]),[a,r]=(0,x.useState)([]),[l,n]=(0,x.useState)([]),[o,c]=(0,x.useState)("indeterminate"),[d,u]=(0,x.useState)(!1),[m,f]=(0,x.useState)(!1),[p,j]=(0,x.useState)("All Tags");return(0,x.useEffect)(()=>{S(r)},[]),(0,x.useEffect)(()=>{console.log("mai hi hu bhai bahar se"),a.length>0&&(console.log("mai hi hu bhai andar se"),function(e,t,a,s,r){if("All Tags"===s){e(a);return}e(a.filter(e=>{for(let t of e.tags)if(t===s&&(!r||"Open"===e.status))return!0;return!1}))}(t,0,a,p,m))},[a,p]),(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-4 md:gap-8",children:[(0,s.jsx)(i.z,{onClick:()=>{f(!0),t(e.filter(k))},children:"Show Open Projects"}),(0,s.jsxs)(C.J2,{open:d,onOpenChange:u,children:[(0,s.jsx)(C.xo,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",role:"combobox","aria-expanded":d,className:"w-[200px] justify-between",children:["Filter by Domains",(0,s.jsx)(w.Z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),(0,s.jsx)(C.yk,{className:"w-[80vw] p-8",children:(0,s.jsxs)(y.mY,{children:[(0,s.jsx)(y.sZ,{placeholder:"Search Domains"}),(0,s.jsx)(y.rb,{children:"No tag found."}),(0,s.jsx)(y.e8,{children:Z.map(e=>(0,s.jsxs)(y.di,{value:e.value,onSelect:e=>{j(e===p?"":e),u(!1)},children:[(0,s.jsx)(v.Z,{className:(0,b.cn)("mr-2 h-4 w-4",p===e.value?"opacity-100":"opacity-0")}),e.label]},e.value))})]})})]}),(0,s.jsx)(i.z,{variant:"secondary",onClick:()=>{f(!1),t(a),j("All Tags")},children:"Reset Filters"})]}),(0,s.jsx)(g,{columns:h,data:e})]})}var z=(0,a(7390).Z)(e=>(0,s.jsxs)("div",{className:"container flex h-[90vh] w-screen flex-row py-8 md:gap-4 lg:gap-6",children:[(0,s.jsxs)("div",{className:"student-data-section basis-1/4  flex flex-col gap-10",children:[(0,s.jsxs)(r.Zb,{className:"student-card flex flex-row items-center justify-center",children:[(0,s.jsxs)(l.qE,{className:"ml-6",children:[(0,s.jsx)(l.F$,{src:e.user.image,alt:"@shadcn"}),(0,s.jsx)(l.Q5,{children:"CN"})]}),(0,s.jsxs)(r.Ol,{className:"m-auto mr-4",children:[(0,s.jsx)(r.ll,{children:e.user.name}),(0,s.jsx)(r.SZ,{className:"font-bold",children:e.user.email}),(0,s.jsx)(c.Z,{})]})]}),(0,s.jsx)(i.z,{asChild:!0,children:(0,s.jsx)(d.default,{href:"/project?projectId=new",children:"Add Project"})})]}),(0,s.jsx)("div",{className:"projects-section basis-3/4 ",children:(0,s.jsx)(R,{})})]}),"faculty")},5578:function(e,t,a){"use strict";a.d(t,{P:function(){return S}});var s=a(7437),r=a(4200),l=a(2235),n=a(9580),i=a(9108),o=a(7805),c=a(6806),d=a(9475),u=a(3428),h=a(5561),m=a(9910),f=a(527),x=a(9039),p=a(94),j=a(9724),g=a(1213),w=a(8025),v=a(7252),N=a(7197),b=a(1203),y=a(2891),C=a(5227),Z=a(2364),k=a(9259);let S={logo:r.Z,close:l.Z,spinner:n.Z,chevronLeft:i.Z,chevronRight:o.Z,trash:c.Z,post:d.Z,page:u.Z,media:h.Z,settings:m.Z,billing:f.Z,ellipsis:x.Z,add:p.Z,warning:j.Z,user:g.Z,arrowRight:w.Z,help:v.Z,pizza:N.Z,sun:b.Z,moon:y.Z,laptop:C.Z,upload:Z.Z,gitHub:e=>{let{...t}=e;return(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,s.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},check:k.Z}},9269:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437),r=a(5754);function l(){return(0,s.jsxs)(r.z,{variant:"destructive",size:"sm",onClick:()=>fetch("".concat("","/api/auth/logout"),{method:"GET",credentials:"same-origin",withCredentials:!0}).then(e=>e.json()).then(e=>{e.redirectUrl?window.location.href=e.redirectUrl:window.location.href="/"}),children:["Logout",(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-log-out mx-1",children:[(0,s.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,s.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,s.jsx)("line",{x1:"21",x2:"9",y1:"12",y2:"12"})]})]})}},1342:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(7437);a(2265);var r=a(4848),l=a(5754),n=a(3930),i=a(5578);function o(){let{setTheme:e}=(0,r.F)();return(0,s.jsxs)(n.h_,{children:[(0,s.jsx)(n.$F,{asChild:!0,children:(0,s.jsxs)(l.z,{variant:"ghost",size:"sm",className:"h-8 w-8 px-0",children:[(0,s.jsx)(i.P.sun,{className:"rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(i.P.moon,{className:"absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(n.AW,{align:"end",children:[(0,s.jsxs)(n.Xi,{onClick:()=>e("light"),children:[(0,s.jsx)(i.P.sun,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Light"})]}),(0,s.jsxs)(n.Xi,{onClick:()=>e("dark"),children:[(0,s.jsx)(i.P.moon,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Dark"})]}),(0,s.jsxs)(n.Xi,{onClick:()=>e("system"),children:[(0,s.jsx)(i.P.laptop,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"System"})]})]})]})}},1795:function(e,t,a){"use strict";a.d(t,{qE:function(){return w},Q5:function(){return N},F$:function(){return v}});var s=a(7437),r=a(2265),l=a(2110),n=a(4104),i=a(9830),o=a(2618),c=a(9586);let d="Avatar",[u,h]=(0,n.b)(d),[m,f]=u(d),x=(0,r.forwardRef)((e,t)=>{let{__scopeAvatar:a,...s}=e,[n,i]=(0,r.useState)("idle");return(0,r.createElement)(m,{scope:a,imageLoadingStatus:n,onImageLoadingStatusChange:i},(0,r.createElement)(c.WV.span,(0,l.Z)({},s,{ref:t})))}),p=(0,r.forwardRef)((e,t)=>{let{__scopeAvatar:a,src:s,onLoadingStatusChange:n=()=>{},...d}=e,u=f("AvatarImage",a),h=function(e){let[t,a]=(0,r.useState)("idle");return(0,o.b)(()=>{if(!e){a("error");return}let t=!0,s=new window.Image,r=e=>()=>{t&&a(e)};return a("loading"),s.onload=r("loaded"),s.onerror=r("error"),s.src=e,()=>{t=!1}},[e]),t}(s),m=(0,i.W)(e=>{n(e),u.onImageLoadingStatusChange(e)});return(0,o.b)(()=>{"idle"!==h&&m(h)},[h,m]),"loaded"===h?(0,r.createElement)(c.WV.img,(0,l.Z)({},d,{ref:t,src:s})):null}),j=(0,r.forwardRef)((e,t)=>{let{__scopeAvatar:a,delayMs:s,...n}=e,i=f("AvatarFallback",a),[o,d]=(0,r.useState)(void 0===s);return(0,r.useEffect)(()=>{if(void 0!==s){let e=window.setTimeout(()=>d(!0),s);return()=>window.clearTimeout(e)}},[s]),o&&"loaded"!==i.imageLoadingStatus?(0,r.createElement)(c.WV.span,(0,l.Z)({},n,{ref:t})):null});var g=a(1657);let w=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(x,{ref:t,className:(0,g.cn)("relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full",a),...r})});w.displayName=x.displayName;let v=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(p,{ref:t,className:(0,g.cn)("aspect-square h-full w-full",a),...r})});v.displayName=p.displayName;let N=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(j,{ref:t,className:(0,g.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r})});N.displayName=j.displayName},9160:function(e,t,a){"use strict";a.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return n},pj:function(){return u},ss:function(){return d},xD:function(){return i}});var s=a(7437),r=a(2265),l=a(1657);let n=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",a),...r})})});n.displayName="Table";let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",a),...r})});i.displayName="TableHeader";let o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",a),...r})});o.displayName="TableBody",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...r})}).displayName="TableFooter";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r})});c.displayName="TableRow";let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...r})});d.displayName="TableHead";let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...r})});u.displayName="TableCell",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",a),...r})}).displayName="TableCaption"},585:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a(843).Z)("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]])}},function(e){e.O(0,[363,49,794,831,830,6,873,137,241,971,69,744],function(){return e(e.s=9491)}),_N_E=e.O()}]);