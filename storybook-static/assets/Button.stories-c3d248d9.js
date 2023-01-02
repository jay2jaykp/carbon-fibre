var T=Object.defineProperty;var i=(e,n)=>T(e,"name",{value:n,configurable:!0});import{j as f}from"./jsx-runtime-920531fb.js";import"./index-d282687f.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const b=i(e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,"falsyToString"),B=i(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.flat(1/0).filter(Boolean).join(" ")},"cx"),z=i((e,n)=>t=>{var l;if((n==null?void 0:n.variants)==null)return B(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:y,defaultVariants:s}=n,h=Object.keys(y).map(o=>{const r=t==null?void 0:t[o],d=s==null?void 0:s[o];if(r===null)return null;const a=b(r)||b(d);return y[o][a]}),g=t&&Object.entries(t).reduce((o,r)=>{let[d,a]=r;return a===void 0||(o[d]=a),o},{}),v=n==null||(l=n.compoundVariants)===null||l===void 0?void 0:l.reduce((o,r)=>{let{class:d,className:a,...x}=r;return Object.entries(x).every(S=>{let[p,m]=S;return Array.isArray(m)?m.includes({...s,...g}[p]):{...s,...g}[p]===m})?[...o,d,a]:o},[]);return B(e,h,v,t==null?void 0:t.class,t==null?void 0:t.className)},"cva"),C=z("text-white pl-4 pr-16 font-ibm-sans text-sm inline-flex items-center",{variants:{intent:{primary:"bg-blue-600 hover:bg-blue-700",secondary:"bg-neutral-900",tertiary:"border border-blue-600",danger:"bg-red-600",ghost:"","danger-ghost":"","danger-tertiary":"border border-red-600"},size:{small:"h-8",medium:"h-10",large:"h-12",xl:"h-16","2xl":"h-20"},skeleton:{true:"animate-pulse bg-gray-400 text-gray-400"}},compoundVariants:[{intent:["ghost","tertiary"],class:"bg-white text-blue-600"},{intent:["danger-ghost","danger-tertiary"],class:"bg-white text-red-600"},{size:["xl","2xl"],class:"pt-4 items-baseline"}],defaultVariants:{intent:"primary",size:"large",skeleton:!1}}),c=i(({intent:e,size:n,skeleton:t,...l})=>f("button",{className:C({intent:e,size:n,skeleton:t}),...l}),"Button");try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | "danger" | "ghost" | "danger-ghost" | "danger-tertiary" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large" | "xl" | "2xl" | null'}},skeleton:{defaultValue:null,description:"",name:"skeleton",required:!1,type:{name:"boolean | null"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:c.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch{}const E={title:"Button",component:c,parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  size: "medium",
};
export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  size: "medium",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  intent: "tertiary",
  size: "medium",
};
export const Ghost = Template.bind({});
Ghost.args = {
  intent: "ghost",
  size: "medium",
};
export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
  size: "medium",
};
`,locationsMap:{primary:{startLoc:{col:48,line:13},endLoc:{col:1,line:15},startBody:{col:48,line:13},endBody:{col:1,line:15}},secondary:{startLoc:{col:48,line:13},endLoc:{col:1,line:15},startBody:{col:48,line:13},endBody:{col:1,line:15}},tertiary:{startLoc:{col:48,line:13},endLoc:{col:1,line:15},startBody:{col:48,line:13},endBody:{col:1,line:15}},ghost:{startLoc:{col:48,line:13},endLoc:{col:1,line:15},startBody:{col:48,line:13},endBody:{col:1,line:15}},danger:{startLoc:{col:48,line:13},endLoc:{col:1,line:15},startBody:{col:48,line:13},endBody:{col:1,line:15}}}},layout:"centered"}},u=i(e=>f(c,{...e,children:"Button"}),"Template"),_=u.bind({});_.args={intent:"primary",size:"medium"};const L=u.bind({});L.args={intent:"secondary",size:"medium"};const O=u.bind({});O.args={intent:"tertiary",size:"medium"};const V=u.bind({});V.args={intent:"ghost",size:"medium"};const N=u.bind({});N.args={intent:"danger",size:"medium"};const w=["Primary","Secondary","Tertiary","Ghost","Danger"];export{N as Danger,V as Ghost,_ as Primary,L as Secondary,O as Tertiary,w as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories-c3d248d9.js.map
