(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1285:function(e,t,n){"use strict";function a(e){return function(){return null}}n.d(t,"a",function(){return a})},1341:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0);function r(e){var t=a.useState(e),n=t[0],r=t[1],o=e||n;return a.useEffect(function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))},[n]),o}},1342:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},1343:function(e,t,n){var a=n(1349).default;function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=i?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},1344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(1360)},1345:function(e,t,n){"use strict";function a(e,t,n,a,r){return null}n.d(t,"a",function(){return a})},1349:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},1360:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(113),o=n(110),i=n(202);function l(e,t){return function(){return null}}var c=n(203),u=n(49),s=n(204),d=n(1285),m=n(112),p=n(1345),f=n(201),b=n(59),v=n(29),y=n(1341),g=n(342);n.d(t,"capitalize",function(){return a.a}),n.d(t,"createChainedFunction",function(){return r.a}),n.d(t,"createSvgIcon",function(){return o.a}),n.d(t,"debounce",function(){return i.a}),n.d(t,"deprecatedPropType",function(){return l}),n.d(t,"isMuiElement",function(){return c.a}),n.d(t,"ownerDocument",function(){return u.a}),n.d(t,"ownerWindow",function(){return s.a}),n.d(t,"requirePropFactory",function(){return d.a}),n.d(t,"setRef",function(){return m.a}),n.d(t,"unsupportedProp",function(){return p.a}),n.d(t,"useControlled",function(){return f.a}),n.d(t,"useEventCallback",function(){return b.a}),n.d(t,"useForkRef",function(){return v.a}),n.d(t,"unstable_useId",function(){return y.a}),n.d(t,"useIsFocusVisible",function(){return g.a})},1439:function(e,t,n){"use strict";var a=n(1),r=n(6),o=n(0),i=(n(4),n(8)),l=n(10),c=n(567),u=n(203),s=n(29),d=n(344),m=n(31),p="undefined"===typeof window?o.useEffect:o.useLayoutEffect,f=o.forwardRef(function(e,t){var n=e.alignItems,l=void 0===n?"center":n,f=e.autoFocus,b=void 0!==f&&f,v=e.button,y=void 0!==v&&v,g=e.children,h=e.classes,E=e.className,x=e.component,O=e.ContainerComponent,j=void 0===O?"li":O,C=e.ContainerProps,M=(C=void 0===C?{}:C).className,k=Object(r.a)(C,["className"]),w=e.dense,I=void 0!==w&&w,S=e.disabled,N=void 0!==S&&S,P=e.disableGutters,_=void 0!==P&&P,T=e.divider,L=void 0!==T&&T,z=e.focusVisibleClassName,H=e.selected,B=void 0!==H&&H,D=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(d.a),V={dense:I||F.dense||!1,alignItems:l},R=o.useRef(null);p(function(){b&&R.current&&R.current.focus()},[b]);var W=o.Children.toArray(g),A=W.length&&Object(u.a)(W[W.length-1],["ListItemSecondaryAction"]),G=o.useCallback(function(e){R.current=m.findDOMNode(e)},[]),$=Object(s.a)(G,t),J=Object(a.a)({className:Object(i.a)(h.root,E,V.dense&&h.dense,!_&&h.gutters,L&&h.divider,N&&h.disabled,y&&h.button,"center"!==l&&h.alignItemsFlexStart,A&&h.secondaryAction,B&&h.selected),disabled:N},D),U=x||"li";return y&&(J.component=x||"div",J.focusVisibleClassName=Object(i.a)(h.focusVisible,z),U=c.a),A?(U=J.component||x?U:"div","li"===j&&("li"===U?U="div":"li"===J.component&&(J.component="div")),o.createElement(d.a.Provider,{value:V},o.createElement(j,Object(a.a)({className:Object(i.a)(h.container,M),ref:$},k),o.createElement(U,J,W),W.pop()))):o.createElement(d.a.Provider,{value:V},o.createElement(U,Object(a.a)({ref:$},J),W))});t.a=Object(l.a)(function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}},{name:"MuiListItem"})(f)},1440:function(e,t,n){"use strict";var a=n(6),r=n(33),o=n(1),i=n(0),l=(n(4),n(8)),c=n(10),u=n(1439),s=i.forwardRef(function(e,t){var n,r=e.classes,c=e.className,s=e.component,d=void 0===s?"li":s,m=e.disableGutters,p=void 0!==m&&m,f=e.ListItemClasses,b=e.role,v=void 0===b?"menuitem":b,y=e.selected,g=e.tabIndex,h=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==g?g:-1),i.createElement(u.a,Object(o.a)({button:!0,role:v,tabIndex:n,component:d,selected:y,disableGutters:p,classes:Object(o.a)({dense:r.dense},f),className:Object(l.a)(r.root,c,y&&r.selected,!p&&r.gutters),ref:t},h))});t.a=Object(c.a)(function(e){return{root:Object(o.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(o.a)({},e.typography.body2,{minHeight:"auto"})}},{name:"MuiMenuItem"})(s)},1741:function(e,t,n){"use strict";var a=n(1),r=n(6),o=n(0),i=(n(4),n(8)),l=n(10),c=n(1274),u=n(344),s=o.forwardRef(function(e,t){var n=e.children,l=e.classes,s=e.className,d=e.disableTypography,m=void 0!==d&&d,p=e.inset,f=void 0!==p&&p,b=e.primary,v=e.primaryTypographyProps,y=e.secondary,g=e.secondaryTypographyProps,h=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=o.useContext(u.a).dense,x=null!=b?b:n;null==x||x.type===c.a||m||(x=o.createElement(c.a,Object(a.a)({variant:E?"body2":"body1",className:l.primary,component:"span",display:"block"},v),x));var O=y;return null==O||O.type===c.a||m||(O=o.createElement(c.a,Object(a.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},g),O)),o.createElement("div",Object(a.a)({className:Object(i.a)(l.root,s,E&&l.dense,f&&l.inset,x&&O&&l.multiline),ref:t},h),x,O)});t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(s)},1787:function(e,t,n){"use strict";var a=n(1342),r=n(1343);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1344)).default)(o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=i},1788:function(e,t,n){"use strict";var a=n(1342),r=n(1343);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1344)).default)(o.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.default=i},1789:function(e,t,n){"use strict";var a=n(1342),r=n(1343);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),i=(0,a(n(1344)).default)(o.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");t.default=i},1960:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152),i=n(1330),l=n(560),c=n(1440);var u=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1];function u(){a(null)}return r.a.createElement("div",null,r.a.createElement(i.a,{variant:"outlined","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},"Open Menu"),r.a.createElement(l.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:u},r.a.createElement(c.a,{onClick:u},"Profile"),r.a.createElement(c.a,{onClick:u},"My account"),r.a.createElement(c.a,{onClick:u},"Logout")))},s=n(1305),d=n(1326),m=n(1439),p=n(1741),f=Object(s.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}),b=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function v(){var e=f(),t=r.a.useState(null),n=Object(o.a)(t,2),a=n[0],i=n[1],u=r.a.useState(1),s=Object(o.a)(u,2),v=s[0],y=s[1];return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{component:"nav","aria-label":"Device settings"},r.a.createElement(m.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:function(e){i(e.currentTarget)}},r.a.createElement(p.a,{primary:"When device is locked",secondary:b[v]}))),r.a.createElement(l.a,{id:"lock-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)}},b.map(function(e,t){return r.a.createElement(c.a,{key:e,disabled:0===t,selected:t===v,onClick:function(e){return function(e,t){y(t),i(null)}(0,t)}},e)})))}var y=n(10),g=n(1),h=n(6),E=(n(4),n(8)),x=n(344),O=a.forwardRef(function(e,t){var n=e.classes,r=e.className,o=Object(h.a)(e,["classes","className"]),i=a.useContext(x.a);return a.createElement("div",Object(g.a)({className:Object(E.a)(n.root,r,"flex-start"===i.alignItems&&n.alignItemsFlexStart),ref:t},o))}),j=Object(y.a)(function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}},{name:"MuiListItemIcon"})(O),C=n(1789),M=n.n(C),k=n(1788),w=n.n(k),I=n(1787),S=n.n(I),N=Object(y.a)({paper:{border:"1px solid #d3d4d5"}})(function(e){return r.a.createElement(l.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))}),P=Object(y.a)(function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}})(c.a);var _=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement(i.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){a(e.currentTarget)}},"Open Menu"),r.a.createElement(N,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:function(){a(null)}},r.a.createElement(P,null,r.a.createElement(j,null,r.a.createElement(S.a,null)),r.a.createElement(p.a,{primary:"Sent mail"})),r.a.createElement(P,null,r.a.createElement(j,null,r.a.createElement(w.a,null)),r.a.createElement(p.a,{primary:"Drafts"})),r.a.createElement(P,null,r.a.createElement(j,null,r.a.createElement(M.a,null)),r.a.createElement(p.a,{primary:"Inbox"}))))},T=n(1272),L=n(1321),z=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],H=48;var B=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Boolean(n);function u(){a(null)}return r.a.createElement("div",null,r.a.createElement(T.a,{"aria-label":"More","aria-owns":i?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},r.a.createElement(L.a,null,"more_vert")),r.a.createElement(l.a,{id:"long-menu",anchorEl:n,open:i,onClose:u,PaperProps:{style:{maxHeight:4.5*H,width:200}}},z.map(function(e){return r.a.createElement(c.a,{key:e,selected:"Pyxis"===e,onClick:u},e)})))},D=n(25);t.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(D.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Menu"}]})),r.a.createElement(D.g,{title:"simple menu"},r.a.createElement(u,null)),r.a.createElement("div",{className:"py-12"}),r.a.createElement(D.g,{title:"selected menu"},r.a.createElement(v,null)),r.a.createElement("div",{className:"py-12"}),r.a.createElement(D.g,{title:"customized menu"},r.a.createElement(_,null)),r.a.createElement("div",{className:"py-12"}),r.a.createElement(D.g,{title:"max height menu"},r.a.createElement(B,null)))}}}]);
//# sourceMappingURL=12.ac051b14.chunk.js.map