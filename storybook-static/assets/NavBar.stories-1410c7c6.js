var E=Object.defineProperty;var c=(e,r)=>E(e,"name",{value:r,configurable:!0});import{a as p,j as o}from"./jsx-runtime-920531fb.js";import{p as l}from"./index-50ee27ec.js";import{R as w}from"./index-d282687f.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const _=c(({children:e,prefix:r})=>p("a",{className:"flex items-center text-[#161616] tracking-[0.1px] px-4 text-sm h-full font-ibm-sans border-[2px] border-transparent font-semibold",children:[o("span",{className:"font-normal",children:r})," [",e,"]"]}),"HeaderName");try{_.displayName="HeaderName",_.__docgenInfo={description:"",displayName:"HeaderName",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/headername/HeaderName.tsx#HeaderName"]={docgenInfo:_.__docgenInfo,name:"HeaderName",path:"src/components/headername/HeaderName.tsx#HeaderName"})}catch{}function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}c(S,"ownKeys$1");function N(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?S(Object(t),!0).forEach(function(n){T(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}c(N,"_objectSpread2$1");function T(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}c(T,"_defineProperty$1");function z(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}c(z,"_objectWithoutPropertiesLoose$1");function H(e,r){if(e==null)return{};var t=z(e,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}c(H,"_objectWithoutProperties$1");var L=["width","height","viewBox"],M=["tabindex"],V={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function G(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.width,t=e.height,n=e.viewBox,i=n===void 0?"0 0 ".concat(r," ").concat(t):n,a=H(e,L),d=a.tabindex,v=H(a,M),s=N(N(N({},V),v),{},{width:r,height:t,viewBox:i});return s["aria-label"]||s["aria-labelledby"]||s.title?(s.role="img",d!=null&&(s.focusable="true",s.tabindex=d)):s["aria-hidden"]=!0,s}c(G,"getAttributes");function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}c(B,"ownKeys");function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?B(Object(t),!0).forEach(function(n){K(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}c(m,"_objectSpread2");function K(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}c(K,"_defineProperty");function Y(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}c(Y,"_objectWithoutPropertiesLoose");function g(e,r){if(e==null)return{};var t=Y(e,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}c(g,"_objectWithoutProperties");var $=["className","children","tabIndex"],k=["tabindex"],f=w.forwardRef(c(function(r,t){var n=r.className,i=r.children,a=r.tabIndex,d=g(r,$),v=G(m(m({},d),{},{tabindex:a})),s=v.tabindex,b=g(v,k);return n&&(b.className=n),s!=null&&(b.tabIndex=s),t&&(b.ref=t),o("svg",{...b,children:i})},"Icon"));f.displayName="Icon";f.propTypes={"aria-hidden":l.string,"aria-label":l.string,"aria-labelledby":l.string,children:l.node,className:l.string,height:l.oneOfType([l.number,l.string]),preserveAspectRatio:l.string,tabIndex:l.string,viewBox:l.string,width:l.oneOfType([l.number,l.string]),xmlns:l.string};f.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};l.oneOfType([l.number,l.string]);var A,C,D=["children","size"],Z=w.forwardRef(c(function(r,t){var n=r.children,i=r.size,a=i===void 0?16:i,d=g(r,D);return a===16||a==="16"||a==="16px"?p(f,{...m({width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor"},d),children:[A||(A=o("path",{d:"M14.4,10.1L13,8.8V6.5c0-2.6-1.9-4.7-4.5-5v-1h-1v1C5,1.8,3,3.9,3,6.5v2.3l-1.4,1.3c-0.1,0.1-0.2,0.2-0.1,0.4V12 c0,0.3,0.2,0.5,0.4,0.5c0,0,0,0,0.1,0h3.5C5.5,13.9,6.6,15,8,15s2.5-1.1,2.5-2.5H14c0.3,0,0.5-0.2,0.5-0.4c0,0,0,0,0-0.1v-1.5 C14.5,10.4,14.4,10.2,14.4,10.1z M8,14c-0.8,0-1.5-0.7-1.5-1.5h3C9.5,13.3,8.8,14,8,14z M13.5,11.5h-11v-0.8l1.3-1.4 C3.9,9.3,4,9.1,4,9V6.5c0-2.2,1.8-4,4-4s4,1.8,4,4V9c0,0.1,0.1,0.3,0.1,0.4l1.4,1.3V11.5z"})),n]}):p(f,{...m({width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d),children:[C||(C=o("path",{d:"M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"})),n]})},"Notification")),I,P,W=["children","size"],q=w.forwardRef(c(function(r,t){var n=r.children,i=r.size,a=i===void 0?16:i,d=g(r,W);return a===16||a==="16"||a==="16px"?p(f,{...m({width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor"},d),children:[I||(I=o("path",{d:"M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5 C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"})),n]}):p(f,{...m({width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d),children:[P||(P=o("path",{d:"M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"})),n]})},"Search")),j,F=["children","size"],J=w.forwardRef(c(function(r,t){var n=r.children,i=r.size,a=i===void 0?16:i,d=g(r,F);return p(f,{...m({width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d),children:[j||(j=o("path",{d:"M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"})),n]})},"Switcher"));const u=c(({children:e,...r})=>o("span",{className:"inline-block",...r,children:o("button",{className:"flex justify-center items-center hover:bg-stone-200 h-12 w-12",children:e})}),"HeaderGlobalAction");try{u.displayName="HeaderGlobalAction",u.__docgenInfo={description:"",displayName:"HeaderGlobalAction",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/header-global-action/HeaderGlobalAction.tsx#HeaderGlobalAction"]={docgenInfo:u.__docgenInfo,name:"HeaderGlobalAction",path:"src/components/header-global-action/HeaderGlobalAction.tsx#HeaderGlobalAction"})}catch{}const O=c(({children:e})=>o("div",{className:"flex grow justify-end",children:e}),"HeaderGlobalBar");try{O.displayName="HeaderGlobalBar",O.__docgenInfo={description:"",displayName:"HeaderGlobalBar",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/header-global-bar/HeaderGlobalBar.tsx#HeaderGlobalBar"]={docgenInfo:O.__docgenInfo,name:"HeaderGlobalBar",path:"src/components/header-global-bar/HeaderGlobalBar.tsx#HeaderGlobalBar"})}catch{}const h=c(({children:e})=>o("li",{children:o("a",{className:"h-full flex items-center px-4 border-[2px] border-transparent text-sm cursor-pointer hover:bg-stone-200",children:e})}),"HeaderNavigationItem");try{h.displayName="HeaderNavigationItem",h.__docgenInfo={description:"",displayName:"HeaderNavigationItem",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/header-navigation-item/HeaderNavigationItem.tsx#HeaderNavigationItem"]={docgenInfo:h.__docgenInfo,name:"HeaderNavigationItem",path:"src/components/header-navigation-item/HeaderNavigationItem.tsx#HeaderNavigationItem"})}catch{}const y=c(({children:e})=>o("nav",{className:"h-full border-l",children:o("ul",{className:"flex list-none h-full",children:e})}),"HeaderNavigation");try{y.displayName="HeaderNavigation",y.__docgenInfo={description:"",displayName:"HeaderNavigation",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/header-navigation/HeaderNavigation.tsx#HeaderNavigation"]={docgenInfo:y.__docgenInfo,name:"HeaderNavigation",path:"src/components/header-navigation/HeaderNavigation.tsx#HeaderNavigation"})}catch{}const x=c(({...e})=>p("header",{className:"flex items-center border-b h-12 w-full font-ibm-sans",children:[o(_,{prefix:"IBM",children:"Platform"}),p(y,{children:[o(h,{children:"Link 1"}),o(h,{children:"Link 2"}),o(h,{children:"Link 3"}),o(h,{children:"Link 4"})]}),p(O,{children:[o(u,{children:o(q,{size:20})}),o(u,{children:o(Z,{size:20})}),o(u,{children:o(J,{size:20})})]})]}),"NavBar"),R=x;try{x.displayName="NavBar",x.__docgenInfo={description:"",displayName:"NavBar",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/navbar/NavBar.tsx#NavBar"]={docgenInfo:x.__docgenInfo,name:"NavBar",path:"src/components/navbar/NavBar.tsx#NavBar"})}catch{}const ae={title:"NavBar",component:R,parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:48,line:12},endLoc:{col:78,line:12},startBody:{col:48,line:12},endBody:{col:78,line:12}}}},layout:"fullscreen"}},Q=c(e=>o(R,{...e}),"Template"),U=Q.bind({});U.args={};const ie=["Primary"];export{U as Primary,ie as __namedExportsOrder,ae as default};
//# sourceMappingURL=NavBar.stories-1410c7c6.js.map