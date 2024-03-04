"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[83],{6768:function(e,t,n){n(2791);var r=n(4270),o=n(184);t.Z=function(e){var t=e.title,n=e.description,a=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(r.q,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:n})]}),a]})}},9991:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(4165),o=n(5861),a=n(4942),i=n(1413),c=n(9439),s=n(2791),l=n(4294),u=n(4708),d=n(7391),p=n(4989),h=n(4454),m=n(8870),f=n(890),v=n(7107),g=n(4507),Z=n(1243),x=n(3144),b=n(5671),y=n(136),k=n(7277),j=function(e){(0,y.Z)(n,e);var t=(0,k.Z)(n);function n(){return(0,b.Z)(this,n),t.apply(this,arguments)}return(0,x.Z)(n)}((0,n(8737).Z)(Error));function C(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(e){return decodeURIComponent(atob(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(n){return atob(t)}}j.prototype.name="InvalidTokenError";var S=n(6768),w=n(7689),I=n(184),z=(0,v.Z)();function P(){var e;function t(e){console.log("token: ",e.credential);var t=function(e,t){if("string"!==typeof e)throw new j("Invalid token specified: must be a string");t||(t={});var n,r=!0===t.header?0:1,o=e.split(".")[r];if("string"!==typeof o)throw new j("Invalid token specified: missing part #".concat(r+1));try{n=C(o)}catch(a){throw new j("Invalid token specified: invalid base64 for part #".concat(r+1," (").concat(a.message,")"))}try{return JSON.parse(n)}catch(a){throw new j("Invalid token specified: invalid json for part #".concat(r+1," (").concat(a.message,")"))}}(e.credential);console.log(t)}(0,s.useEffect)((function(){google.accounts.id.initialize({client_id:"417041141509-495v48nc29snmejlojgaj49pq8ck3ukn.apps.googleusercontent.com",callback:t}),google.accounts.id.renderButton(document.getElementById("signIn"),{theme:"outline",size:"large"})}),[]);var n=(0,w.s0)(),v=(0,s.useState)({RUN:"",password:""}),x=(0,c.Z)(v,2),b=x[0],y=x[1],k=function(e){y((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.value))}))};return(0,I.jsx)(S.Z,{title:"Coordinadores SSP-APU | Administraci\xf3n P\xfablica",description:"Sistema de pr\xe1cticas profesionales",children:(0,I.jsxs)(g.Z,{theme:z,children:[(0,I.jsx)(u.ZP,{}),(0,I.jsx)(m.Z,{sx:{backgroundImage:"url('https://i.imgur.com/NdyWLVr.jpeg')",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,I.jsxs)(m.Z,{sx:{width:"500px",height:"450px",backgroundColor:"white",border:"1px solid gray",borderRadius:"8px",padding:"30px",boxShadow:"0px 0px 10px rgba(0,0,0,0.1)"},children:[(0,I.jsx)(f.Z,{component:"h1",variant:"h5",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Coordinadore SSP-APU"}),(0,I.jsxs)(m.Z,{component:"form",onSubmit:function(t){return(e=e||(0,o.Z)((0,r.Z)().mark((function e(t){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n("/coord/practicas"),e.prev=2,e.next=5,Z.Z.post("/userver/",b);case 5:o=e.sent,console.log(o),!0===o.data.status?alert("Bienvenido "):"Usuario no existente"===o.data.message?alert("Usuario no encontrado"):"Contrase\xf1a incorrecta"===o.data.message&&alert("Contrase\xf1a incorrecta"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Error al hacer la petici\xf3n:",e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)},noValidate:!0,sx:{mt:1},children:[(0,I.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,id:"RUN",label:"Usuario",name:"RUN",autoComplete:"RUN",autoFocus:!0,onChange:k}),(0,I.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password",onChange:k}),(0,I.jsx)(p.Z,{control:(0,I.jsx)(h.Z,{value:"remember",color:"primary"}),label:"Recu\xe9rdame"}),(0,I.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:4},children:"Ingresar"}),(0,I.jsx)(m.Z,{id:"signIn",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,I.jsx)(l.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:1},children:"Ingresar con google"})})]})]})})]})})}},4454:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),c=n(3733),s=n(4419),l=n(2065),u=n(7278),d=n(9201),p=n(184),h=(0,d.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=n(4036),g=n(1402),Z=n(6934),x=n(5878),b=n(1217);function y(e){return(0,b.Z)("MuiCheckbox",e)}var k=(0,x.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,Z.ZP)(u.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,v.Z)(n.color))]]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===o.color?n.vars.palette.action.activeChannel:n.vars.palette[o.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,r.Z)(t,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:(n.vars||n).palette[o.color].main}),(0,r.Z)(t,"&.".concat(k.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),S=(0,p.jsx)(m,{}),w=(0,p.jsx)(h,{}),I=(0,p.jsx)(f,{}),z=i.forwardRef((function(e,t){var n,r,l=(0,g.Z)({props:e,name:"MuiCheckbox"}),u=l.checkedIcon,d=void 0===u?S:u,h=l.color,m=void 0===h?"primary":h,f=l.icon,Z=void 0===f?w:f,x=l.indeterminate,b=void 0!==x&&x,k=l.indeterminateIcon,z=void 0===k?I:k,P=l.inputProps,M=l.size,E=void 0===M?"medium":M,B=l.className,R=(0,o.Z)(l,j),U=b?z:Z,N=b?z:d,O=(0,a.Z)({},l,{color:m,indeterminate:b,size:E}),W=function(e){var t=e.classes,n=e.indeterminate,r=e.color,o=e.size,i={root:["root",n&&"indeterminate","color".concat((0,v.Z)(r)),"size".concat((0,v.Z)(o))]},c=(0,s.Z)(i,y,t);return(0,a.Z)({},t,c)}(O);return(0,p.jsx)(C,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},P),icon:i.cloneElement(U,{fontSize:null!=(n=U.props.fontSize)?n:E}),checkedIcon:i.cloneElement(N,{fontSize:null!=(r=N.props.fontSize)?r:E}),ownerState:O,ref:t,className:(0,c.Z)(W.root,B)},R,{classes:W}))}))},4708:function(e,t,n){var r=n(9439),o=n(7462),a=n(2791),i=n(1402),c=n(1540),s=n(184),l=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},u=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,d=t.enableColorScheme,p=void 0!==d&&d;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(c.Z,{styles:function(e){return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),i=o[0],c=o[1];a[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=c.palette)?void 0:n.mode}}));var i=(0,o.Z)({html:l(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),c=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return c&&(i=[i,c]),i}(e,p)}}),n]})}},1540:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),o=(n(2791),n(2554)),a=n(184);function i(e){var t=e.styles,n=e.defaultTheme,r=void 0===n?{}:n,i="function"===typeof t?function(e){return t(void 0===(n=e)||null===n||0===Object.keys(n).length?r:e);var n}:t;return(0,a.jsx)(o.xB,{styles:i})}var c=n(418);var s=function(e){var t=e.styles,n=e.themeId,r=e.defaultTheme,o=void 0===r?{}:r,s=(0,c.Z)(o),l="function"===typeof t?t(n&&s[n]||s):t;return(0,a.jsx)(i,{styles:l})},l=n(6482),u=n(988);var d=function(e){return(0,a.jsx)(s,(0,r.Z)({},e,{defaultTheme:l.Z,themeId:u.Z}))}},4507:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7462),o=n(3366),a=n(2791),i=n(4942);var c=a.createContext(null);function s(){return a.useContext(c)}var l="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",u=n(184);var d=function(e){var t=e.children,n=e.theme,o=s(),i=a.useMemo((function(){var e=null===o?n:function(e,t){return"function"===typeof t?t(e):(0,r.Z)({},e,t)}(o,n);return null!=e&&(e[l]=null!==o),e}),[n,o]);return(0,u.jsx)(c.Provider,{value:i,children:t})},p=n(2564),h=n(9120),m={};function f(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a.useMemo((function(){var a=e&&t[e]||t;if("function"===typeof n){var c=n(a),s=e?(0,r.Z)({},t,(0,i.Z)({},e,c)):c;return o?function(){return s}:s}return e?(0,r.Z)({},t,(0,i.Z)({},e,n)):(0,r.Z)({},t,n)}),[e,t,n,o])}var v=function(e){var t=e.children,n=e.theme,r=e.themeId,o=(0,h.Z)(m),a=s()||m,i=f(r,o,n),c=f(r,a,n,!0);return(0,u.jsx)(d,{theme:c,children:(0,u.jsx)(p.T.Provider,{value:i,children:t})})},g=n(988),Z=["theme"];function x(e){var t=e.theme,n=(0,o.Z)(e,Z),a=t[g.Z];return(0,u.jsx)(v,(0,r.Z)({},n,{themeId:a?g.Z:void 0,theme:a||t}))}}}]);
//# sourceMappingURL=83.92f39852.chunk.js.map