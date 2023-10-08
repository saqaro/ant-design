"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6522],{450888:function(p,s,n){n.d(s,{Z:function(){return S}});var _=n(487462),o=n(667294),g={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},a=g,c=n(713401),I=function(P,L){return o.createElement(c.Z,(0,_.Z)({},P,{ref:L,icon:a}))},S=o.forwardRef(I)},979331:function(p,s,n){n.d(s,{Z:function(){return w}});var _=n(97857),o=n.n(_),g=n(9783),a=n.n(g),c=n(805574),I=n.n(c),S=n(513769),T=n.n(S),P=n(667294),L=n(100628),D=n.n(L),E=n(294184),y=n.n(E),x=n(33413),j=n(189265),f=n(73287),z=n(147315),F=n(947170),X=n(510274),B=n(548073),Q=n(141035),G=n(986943),V=function(t){var i,e,l,h,v,d=t.componentCls,m=t.trackHeightSM,M=t.trackPadding,C=t.trackMinWidthSM,W=t.innerMinMarginSM,u=t.innerMaxMarginSM,O=t.handleSizeSM,A="".concat(d,"-inner");return a()({},d,a()({},"&".concat(d,"-small"),(v={minWidth:C,height:m,lineHeight:"".concat(m,"px")},a()(v,"".concat(d,"-inner"),(i={paddingInlineStart:u,paddingInlineEnd:W},a()(i,"".concat(A,"-checked"),{marginInlineStart:"calc(-100% + ".concat(O+M*2,"px - ").concat(u*2,"px)"),marginInlineEnd:"calc(100% - ".concat(O+M*2,"px + ").concat(u*2,"px)")}),a()(i,"".concat(A,"-unchecked"),{marginTop:-m,marginInlineStart:0,marginInlineEnd:0}),i)),a()(v,"".concat(d,"-handle"),{width:O,height:O}),a()(v,"".concat(d,"-loading-icon"),{top:(O-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),a()(v,"&".concat(d,"-checked"),(l={},a()(l,"".concat(d,"-inner"),(e={paddingInlineStart:W,paddingInlineEnd:u},a()(e,"".concat(A,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(A,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(O+M*2,"px + ").concat(u*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(O+M*2,"px - ").concat(u*2,"px)")}),e)),a()(l,"".concat(d,"-handle"),{insetInlineStart:"calc(100% - ".concat(O+M,"px)")}),l)),a()(v,"&:not(".concat(d,"-disabled):active"),(h={},a()(h,"&:not(".concat(d,"-checked) ").concat(A),a()({},"".concat(A,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),a()(h,"&".concat(d,"-checked ").concat(A),a()({},"".concat(A,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),h)),v)))},N=function(t){var i,e=t.componentCls,l=t.handleSize;return a()({},e,(i={},a()(i,"".concat(e,"-loading-icon").concat(t.iconCls),{position:"relative",top:(l-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),a()(i,"&".concat(e,"-checked ").concat(e,"-loading-icon"),{color:t.switchColor}),i))},H=function(t){var i,e,l=t.componentCls,h=t.motion,v=t.trackPadding,d=t.handleBg,m=t.handleShadow,M=t.handleSize,C="".concat(l,"-handle");return a()({},l,(e={},a()(e,C,{position:"absolute",top:v,insetInlineStart:v,width:M,height:M,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:d,borderRadius:M/2,boxShadow:m,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),a()(e,"&".concat(l,"-checked ").concat(C),{insetInlineStart:"calc(100% - ".concat(M+v,"px)")}),a()(e,"&:not(".concat(l,"-disabled):active"),h?(i={},a()(i,"".concat(C,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),a()(i,"&".concat(l,"-checked ").concat(C,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),i):{}),e))},b=function(t){var i,e,l,h,v=t.componentCls,d=t.trackHeight,m=t.trackPadding,M=t.innerMinMargin,C=t.innerMaxMargin,W=t.handleSize,u="".concat(v,"-inner");return a()({},v,(h={},a()(h,u,(i={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:C,paddingInlineEnd:M,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},a()(i,"".concat(u,"-checked, ").concat(u,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(i,"".concat(u,"-checked"),{marginInlineStart:"calc(-100% + ".concat(W+m*2,"px - ").concat(C*2,"px)"),marginInlineEnd:"calc(100% - ".concat(W+m*2,"px + ").concat(C*2,"px)")}),a()(i,"".concat(u,"-unchecked"),{marginTop:-d,marginInlineStart:0,marginInlineEnd:0}),i)),a()(h,"&".concat(v,"-checked ").concat(u),(e={paddingInlineStart:M,paddingInlineEnd:C},a()(e,"".concat(u,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(u,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(W+m*2,"px + ").concat(C*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(W+m*2,"px - ").concat(C*2,"px)")}),e)),a()(h,"&:not(".concat(v,"-disabled):active"),(l={},a()(l,"&:not(".concat(v,"-checked) ").concat(u),a()({},"".concat(u,"-unchecked"),{marginInlineStart:m*2,marginInlineEnd:-m*2})),a()(l,"&".concat(v,"-checked ").concat(u),a()({},"".concat(u,"-checked"),{marginInlineStart:-m*2,marginInlineEnd:m*2})),l)),h))},J=function(t){var i,e=t.componentCls,l=t.trackHeight,h=t.trackMinWidth;return a()({},e,o()(o()(o()({},(0,B.Wf)(t)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:h,height:l,lineHeight:"".concat(l,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(e,"-disabled)"),{background:t.colorTextTertiary}),(0,B.Qy)(t)),{},(i={},a()(i,"&".concat(e,"-checked"),a()({background:t.switchColor},"&:hover:not(".concat(e,"-disabled)"),{background:t.colorPrimaryHover})),a()(i,"&".concat(e,"-loading, &").concat(e,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(i,"&".concat(e,"-rtl"),{direction:"rtl"}),i)))},Y=(0,Q.Z)("Switch",function(r){var t=(0,G.TS)(r,{switchDuration:r.motionDurationMid,switchColor:r.colorPrimary,switchDisabledOpacity:r.opacityLoading,switchLoadingIconSize:r.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(r.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[J(t),b(t),H(t),N(t),V(t)]},function(r){var t=r.fontSize,i=r.lineHeight,e=r.controlHeight,l=r.colorWhite,h=t*i,v=e/2,d=2,m=h-d*2,M=v-d*2;return{trackHeight:h,trackHeightSM:v,trackMinWidth:m*2+d*4,trackMinWidthSM:M*2+d*2,trackPadding:d,handleBg:l,handleSize:m,handleSizeSM:M,handleShadow:"0 2px 4px 0 ".concat(new X.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:m/2,innerMaxMargin:m+d+d*2,innerMinMarginSM:M/2,innerMaxMarginSM:M+d+d*2}}),R=n(785893),U=["prefixCls","size","disabled","loading","className","rootClassName","style"],$=P.forwardRef(function(r,t){var i,e=r.prefixCls,l=r.size,h=r.disabled,v=r.loading,d=r.className,m=r.rootClassName,M=r.style,C=T()(r,U);if(!1)var W;var u=P.useContext(f.E_),O=u.getPrefixCls,A=u.direction,Z=u.switch,q=P.useContext(z.Z),nn=(h!=null?h:q)||v,K=O("switch",e),an=(0,R.jsx)("div",{className:"".concat(K,"-handle"),children:v&&(0,R.jsx)(D(),{className:"".concat(K,"-loading-icon")})}),tn=Y(K),k=I()(tn,2),en=k[0],cn=k[1],on=(0,F.Z)(l),ln=y()(Z==null?void 0:Z.className,(i={},a()(i,"".concat(K,"-small"),on==="small"),a()(i,"".concat(K,"-loading"),v),a()(i,"".concat(K,"-rtl"),A==="rtl"),i),d,m,cn),dn=o()(o()({},Z==null?void 0:Z.style),M);return en((0,R.jsx)(j.Z,{component:"Switch",children:(0,R.jsx)(x.Z,o()(o()({},C),{},{prefixCls:K,className:ln,style:dn,disabled:nn,ref:t,loadingIcon:an}))}))});$.__ANT_SWITCH=!0;var w=$},874767:function(p,s,n){n.r(s);var _=n(667294),o=n(819561),g=n(785893),a=function(){return(0,g.jsx)(o.Z,{})};s.default=a},539006:function(p,s,n){n.r(s);var _=n(667294),o=n(450888),g=n(819561),a=n(785893),c=(0,a.jsx)(o.Z,{style:{fontSize:24},spin:!0}),I=function(){return(0,a.jsx)(g.Z,{indicator:c})};s.default=I},183475:function(p,s,n){n.r(s);var _=n(805574),o=n.n(_),g=n(667294),a=n(11739),c=n(819561),I=n(979331),S=n(785893),T=function(){var L=(0,g.useState)(!1),D=o()(L,2),E=D[0],y=D[1],x=function(z){y(z)},j=(0,S.jsx)(a.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return(0,S.jsxs)("div",{children:[(0,S.jsx)(c.Z,{spinning:E,delay:500,children:j}),(0,S.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,S.jsx)(I.Z,{checked:E,onChange:x})]})]})};s.default=T},426667:function(p,s,n){n.r(s);var _=n(667294),o=n(819561),g=n(785893),a=function(){return(0,g.jsx)("div",{className:"example",children:(0,g.jsx)(o.Z,{})})};s.default=a},667602:function(p,s,n){n.r(s);var _=n(805574),o=n.n(_),g=n(667294),a=n(819561),c=n(11739),I=n(979331),S=n(785893),T=function(){var L=(0,g.useState)(!1),D=o()(L,2),E=D[0],y=D[1],x=function(f){y(f)};return(0,S.jsxs)("div",{children:[(0,S.jsx)(a.Z,{spinning:E,children:(0,S.jsx)(c.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})}),(0,S.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,S.jsx)(I.Z,{checked:E,onChange:x})]})]})};s.default=T},150619:function(p,s,n){n.r(s);var _=n(667294),o=n(209269),g=n(819561),a=n(785893),c=function(){return(0,a.jsxs)(o.Z,{size:"middle",children:[(0,a.jsx)(g.Z,{size:"small"}),(0,a.jsx)(g.Z,{}),(0,a.jsx)(g.Z,{size:"large"})]})};s.default=c},220742:function(p,s,n){n.r(s);var _=n(667294),o=n(209269),g=n(819561),a=n(11739),c=n(785893),I=function(){return(0,c.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(g.Z,{tip:"Loading",size:"small",children:(0,c.jsx)("div",{className:"content"})}),(0,c.jsx)(g.Z,{tip:"Loading",children:(0,c.jsx)("div",{className:"content"})}),(0,c.jsx)(g.Z,{tip:"Loading",size:"large",children:(0,c.jsx)("div",{className:"content"})})]}),(0,c.jsx)(g.Z,{tip:"Loading...",children:(0,c.jsx)(a.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})};s.default=I},33413:function(p,s,n){var _=n(487462),o=n(204942),g=n(297685),a=n(700091),c=n(667294),I=n(294184),S=n.n(I),T=n(821770),P=n(915105),L=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],D=c.forwardRef(function(E,y){var x,j=E.prefixCls,f=j===void 0?"rc-switch":j,z=E.className,F=E.checked,X=E.defaultChecked,B=E.disabled,Q=E.loadingIcon,G=E.checkedChildren,V=E.unCheckedChildren,N=E.onClick,H=E.onChange,b=E.onKeyDown,J=(0,a.Z)(E,L),Y=(0,T.default)(!1,{value:F,defaultValue:X}),R=(0,g.Z)(Y,2),U=R[0],$=R[1];function w(e,l){var h=U;return B||(h=e,$(h),H==null||H(h,l)),h}function r(e){e.which===P.Z.LEFT?w(!1,e):e.which===P.Z.RIGHT&&w(!0,e),b==null||b(e)}function t(e){var l=w(!U,e);N==null||N(l,e)}var i=S()(f,z,(x={},(0,o.Z)(x,"".concat(f,"-checked"),U),(0,o.Z)(x,"".concat(f,"-disabled"),B),x));return c.createElement("button",(0,_.Z)({},J,{type:"button",role:"switch","aria-checked":U,disabled:B,className:i,ref:y,onKeyDown:r,onClick:t}),Q,c.createElement("span",{className:"".concat(f,"-inner")},c.createElement("span",{className:"".concat(f,"-inner-checked")},G),c.createElement("span",{className:"".concat(f,"-inner-unchecked")},V)))});D.displayName="Switch",s.Z=D}}]);
