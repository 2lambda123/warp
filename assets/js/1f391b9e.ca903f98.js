"use strict";(self.webpackChunkwarp_docs=self.webpackChunkwarp_docs||[]).push([[85],{6416:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var l=t(7294),n=t(6010),s=t(2434),c=t(3905),i=t(4689),m=t(1575),r=t(5773);const o="mdxPageWrapper_zHyg";const d=function(e){const{content:a}=e,{metadata:{title:t,description:d,permalink:v,frontMatter:u}}=a,{wrapperClassName:N,hide_table_of_contents:g}=u;return l.createElement(s.Z,{title:t,description:d,permalink:v,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",o)},l.createElement("div",{className:(0,n.Z)("col",!g&&"col--8")},l.createElement(c.Zo,{components:i.Z},l.createElement(a,null))),!g&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(m.Z,{toc:a.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})))))}},1575:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(7462),n=t(7294),s=t(6010),c=t(5002);const i="tableOfContents_cNA8";const m=function(e){let{className:a,...t}=e;return n.createElement("div",{className:(0,s.Z)(i,"thin-scrollbar",a)},n.createElement(c.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(7462),n=t(7294),s=t(5773);function c(e){let{toc:a,className:t,linkClassName:l,isChild:s}=e;return a.length?n.createElement("ul",{className:s?void 0:t},a.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function i(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const v=(0,s.LU)(),u=null!=r?r:v.tableOfContents.minHeadingLevel,N=null!=o?o:v.tableOfContents.maxHeadingLevel,g=(0,s.DA)({toc:a,minHeadingLevel:u,maxHeadingLevel:N}),_=(0,n.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:N}}),[i,m,u,N]);return(0,s.Si)(_),n.createElement(c,(0,l.Z)({toc:g,className:t,linkClassName:i},d))}}}]);