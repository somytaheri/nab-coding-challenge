(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=a(166),u=a(104),i=a(152),m=a(153),s=a(57),d=a.n(s),p=Object(u.a)({root:{flexGrow:1,marginBottom:"30px"},appbar:{background:"#000"}}),E=function(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{position:"static",color:"default",className:e.appbar},r.a.createElement(m.a,null,r.a.createElement("img",{src:d.a,alt:"logo"}))))},b=a(46),h=a.n(b),A=a(59),w=a(32),g=a(27),G=a(65),f=a(165),v=a(164),B=a(62),y=a(60),I=a.n(y),Q=a(4),j=a(156),N=a(158),S=a(154),R=a(157),W=a(155),x=function(e){e=e.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3");return(e=new Date(e)).getDate()+"-"+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+"-"+e.getFullYear()},Z=function(e){var t=e.match(/.{1,2}/g),a=+t[0],n=+t[1],r=a>=12?"pm":"am";return(a=(a%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r},U=function(e){var t=Object(u.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",boxShadow:"none"},table:{width:"100%"}}})(),a=Object(Q.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(S.a),n=Object(Q.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(W.a),l=e.data.map(function(e){return e.quotes.map(function(t){return r.a.createElement(n,{key:t.time},r.a.createElement(S.a,null," ",e.currency),r.a.createElement(S.a,null,x(e.date)),r.a.createElement(S.a,null,Z(t.time)),r.a.createElement(S.a,null,t.price))})});return r.a.createElement(j.a,{className:t.table,size:"small"},r.a.createElement(R.a,null,r.a.createElement(W.a,null,r.a.createElement(a,null,"Currency"),r.a.createElement(a,null,"Date"),r.a.createElement(a,null,"Time"),r.a.createElement(a,null,"Price"))),r.a.createElement(N.a,null,l))},Y=a(159),M=a(170),k=a(162),C=a(160),O=a(41),T=a(161),D=Object(u.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",boxShadow:"none"},card:{marginBottom:"10px"},avatar:{backgroundColor:O.a[500]},CardContent:{display:"flex",justifyContent:"space-between"},divider:{marginTop:"5px",marginBottom:"10px"},title:{fontWeight:"bold",fontSize:"16px"}}}),F=function(e){var t=D(),a=e.result.map(function(e){return r.a.createElement(Y.a,{className:t.card,key:e.currency,mb:2},r.a.createElement(M.a,{classes:{title:t.title},avatar:r.a.createElement(C.a,{"aria-label":"recipe",className:t.avatar},e.currency),title:"Profit: $".concat(e.lowest?(e.highest.price-e.lowest.price).toFixed(2):0),subheader:x(e.date)}),r.a.createElement(T.a,null),r.a.createElement(k.a,null,r.a.createElement("div",{variant:"body2",color:"textSecondary"},e.lowest?r.a.createElement("div",null,r.a.createElement("div",{className:t.CardContent},r.a.createElement("span",null,r.a.createElement("b",null,"Buy")),r.a.createElement("span",null,Z(e.lowest.time)),r.a.createElement("span",null,"$",e.lowest.price)),r.a.createElement(T.a,{light:!0,className:t.divider}),r.a.createElement("div",{className:t.CardContent},r.a.createElement("span",null,r.a.createElement("b",null,"Sell")),r.a.createElement("span",null,Z(e.highest.time)),r.a.createElement("span",null,"$",e.highest.price))):r.a.createElement("p",null,"Ohh no! There is no profit for today.",r.a.createElement("br",null),"But tomorow is another day. Stay positive."))))});return r.a.createElement(r.a.Fragment,null,a)},J=a(31),z=function(e){return e.map(function(e){return e}).map(function(e){var t,a=e.currency,n=e.date,r=Object(J.a)(e.quotes).sort(function(e,t){return e.price>t.price?1:-1}),l=0;return(r=function a(n){var r=n.length;if(t=n[r-1],e.quotes.findIndex(function(e){return e.price===t.price})!==l)return n;var c=n.length-1,o=n.filter(function(e,t){return t!==c});return t=o[o.length-1],n=Object(J.a)(o),r<=1?n:(l++,a(n))}(r)).length>0?{date:n,currency:a,lowest:r.filter(function(e){return e.time<t.time}).sort(function(e,t){return e.price>t.price?1:-1})[0],highest:t}:{date:n,currency:a}})},V=a(61),P=a(169),H=a(168),L=a(163),X=a(167),q=Object(u.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},select:{minWidth:"200px"}}}),K=function(e){var t=Object(n.useState)({currency:""}),a=Object(w.a)(t,2),l=a[0],c=a[1];var o=q(),u=e.data.map(function(e){return r.a.createElement(H.a,{value:e.currency,key:e.currency},e.currency)});return r.a.createElement(L.a,{className:o.formControl},r.a.createElement(P.a,{htmlFor:"currency"},"Select a currency"),r.a.createElement(X.a,{value:l.currency,className:o.select,onChange:function(t){c(function(e){return Object(V.a)({},e,Object(g.a)({},t.target.name,t.target.value))}),e.handleProfitCalculate(t.target.value)},inputProps:{name:"currency",id:"currency"}},r.a.createElement(H.a,{value:"All Currencies"},"All Currencies"),u))},$=function(){var e=Object(B.a)(),t=Object(u.a)({DataTable:Object(g.a)({},e.breakpoints.down("xs"),{order:3})})(),a=Object(n.useState)([]),l=Object(w.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)([]),m=Object(w.a)(i,2),s=m[0],d=m[1];return Object(n.useEffect)(function(){function e(){return(e=Object(A.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("data.json");case 2:t=e.sent,a=t.data,o(a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement(v.a,{maxWidth:"xl"},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(K,{data:c,handleProfitCalculate:function(e){var t;t="All Currencies"!==e?c.filter(function(t){return t.currency===e}):c;var a=z(t);d(a)}})),r.a.createElement(f.a,{item:!0,xs:12,sm:8,md:6,className:t.DataTable},r.a.createElement(G.a,null,r.a.createElement(U,{data:c}))),r.a.createElement(f.a,{item:!0,xs:12,sm:4,md:3},r.a.createElement(G.a,null,r.a.createElement(F,{result:s})))))};var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(E,null),r.a.createElement($,null))},ee=document.getElementById("root");c.a.render(r.a.createElement(_,null),ee)},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAIAAAAlV+npAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MENFM0ZFRkQ0RDI3MTFFNUEwQjhEMkE1RjlENjY3RDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MENFM0ZFRkU0RDI3MTFFNUEwQjhEMkE1RjlENjY3RDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQ0UzRkVGQjREMjcxMUU1QTBCOEQyQTVGOUQ2NjdENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQ0UzRkVGQzREMjcxMUU1QTBCOEQyQTVGOUQ2NjdENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg8DOGIAAAvjSURBVHja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"},69:function(e,t,a){e.exports=a(103)}},[[69,1,2]]]);
//# sourceMappingURL=main.da914ef9.chunk.js.map