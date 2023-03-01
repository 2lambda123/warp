"use strict";(self.webpackChunkwarp_docs=self.webpackChunkwarp_docs||[]).push([[537],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,l(l({ref:e},d),{},{components:n})):a.createElement(f,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9572:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Inputs and Outputs"},l=void 0,o={unversionedId:"getting_started/inputs-and-outputs",id:"getting_started/inputs-and-outputs",title:"Inputs and Outputs",description:"Inputs",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/getting_started/inputs-and-outputs.mdx",sourceDirName:"getting_started",slug:"/getting_started/inputs-and-outputs",permalink:"/warp/vi/docs/getting_started/inputs-and-outputs",editUrl:"https://github.com/NethermindEth/warp/tree/develop/docs/docs/getting_started/inputs-and-outputs.mdx",tags:[],version:"current",frontMatter:{title:"Inputs and Outputs"},sidebar:"tutorialSidebar",previous:{title:"Warp Command Line Interface",permalink:"/warp/vi/docs/getting_started/cli"},next:{title:"Features",permalink:"/warp/vi/docs/category/features"}},p=[{value:"Inputs",id:"inputs",children:[{value:"Using Solidity ABI",id:"using-solidity-abi",children:[],level:3},{value:"Using Cairo ABI",id:"using-cairo-abi",children:[],level:3},{value:"Passing values of different types in both ABIs",id:"passing-values-of-different-types-in-both-abis",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2},{value:"Dynamic Array as Inputs and Outputs",id:"dynamic-array-as-inputs-and-outputs",children:[],level:2}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The transpiled Cairo contracts have a different ABI than their Solidity counterparts. Warp allows the use of either\nthe Cairo ABI or the Solidity ABI for passing constructor arguments or function parameters. By default, the Solidity ABI\nis used."),(0,r.kt)("h3",{id:"using-solidity-abi"},"Using Solidity ABI"),(0,r.kt)("p",null,"The Solidity ABI lets you pass in arguments in a schema similar to what users would use on L1.\nThis is supported in Warp's ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"invoke")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," commands.\nWarp takes these inputs and transcodes them into Cairo to forward them onto the desired network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'warp invoke <Cairo Contract> --inputs \\"ExampleString\\",\\[1,2,3,4\\],-1,100.\n')),(0,r.kt)("h3",{id:"using-cairo-abi"},"Using Cairo ABI"),(0,r.kt)("p",null,"To use the Cairo ABI to pass inputs, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--use_cairo_abi")," flag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"invoke")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," command."),(0,r.kt)("p",null,"Note that there are some nuances that come with using the Cairo ABI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Starknet does not support Solidity-style strings, so Warp represents strings as dynamic arrays of bytes.\nIn Cairo ABI, each dynamic array is represented in two parts, the length of the array, and the values of the array\n",(0,r.kt)("inlineCode",{parentName:"li"},"<arr_len>,<arr[0],arr[1]...arr[n-1]>"),".\ne.g ",(0,r.kt)("inlineCode",{parentName:"li"},"ExampleString")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"13,0x45,0x78,0x61,0x6d,0x70,0x6c,0x65,0x53,0x74,0x72,0x69,0x6e,0x67")),(0,r.kt)("li",{parentName:"ul"},"Negative numbers will need to be transformed into their twos complement. e.g to pass\n",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," into a function that takes ",(0,r.kt)("inlineCode",{parentName:"li"},"int8"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," needs to be converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"255")," and then passed."),(0,r.kt)("li",{parentName:"ul"},"Data types that are more than 248 bits wide (",(0,r.kt)("inlineCode",{parentName:"li"},"int256"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"bytes32"),") will need to be split into their lower and\nupper 128 bits e.g ",(0,r.kt)("inlineCode",{parentName:"li"},"0x10000000000000000000000000000000f")," as a ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"15,1"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"warp invoke <Cario Contract> --use_cairo_abi --inputs 13,0x45,0x78,0x61,0x6d,0x70,0x6c,0x65,0x53,0x74,0x72,0x69,0x6e,0x67,4,1,2,3,4,255,100.\n")),(0,r.kt)("h3",{id:"passing-values-of-different-types-in-both-abis"},"Passing values of different types in both ABIs"),(0,r.kt)("p",null,"The following table represents the ABI for each type in both Solidity and Cairo."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Solidity ABI"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Cairo ABI"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signed ints (positive)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7,56"),(0,r.kt)("td",{parentName:"tr",align:"center"},"7,56")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signed ints (negative <8bits, 16bits>)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-1,-8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"255,65528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned ints"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8,7,56"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8,7,56")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Strings"),(0,r.kt)("td",{parentName:"tr",align:"center"},'\\"test\\"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"4,0x74,0x65,0x73,0x74")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0,1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0,1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x000..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x000...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint256 (above 128 bits)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x10000000000000000000000000000000f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15,1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint256 (below 128 bits)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10,0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int256"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-257"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0xfffffffffffffffffffffffffffffeff,0xffffffffffffffffffffffffffffffff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fixed Size Array (ex: uint8","[6]",")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[","0,1,2,3,4,5","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0,1,2,3,4,5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic Array (ex: uint8[])"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[","1,2,3,4","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4,1,2,3,4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Struct (ex: {uint, uint})"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[","1,2","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1,2")))),(0,r.kt)("p",null,"Note: In both Solidity and Cairo ABI, numbers can also be passed as hex values"),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The outputs will always be in Cairo ABI."),(0,r.kt)("p",null,"The following Solidity contract named example.sol will be used to illustrate the feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pragma solidity ^0.8;\n\ncontract foo {\n  uint256 public x;\n\n  string public y;\n\n  constructor(uint256 _x, string memory _y) {\n    x = _x;\n    y = _y;\n  }\n}\n")),(0,r.kt)("p",null,"Transpile the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"warp transpile example.sol\n")),(0,r.kt)("p",null,"Deploy the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'warp deploy warp_output/example__WC__foo.cairo --inputs 5,\\"test\\"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call")," the contract to get the outputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$: warp call warp_output/example__WC__foo.cairo --function x --address 0x01563072fb9a5ce43c5610d205dd815051714d9949104db009a0bbd3ff71c75f\n5 0\n\n$: warp call warp_output/example__WC__foo.cairo --function y --address 0x01563072fb9a5ce43c5610d205dd815051714d9949104db009a0bbd3ff71c75f\n4 116 101 115 116\n")),(0,r.kt)("h2",{id:"dynamic-array-as-inputs-and-outputs"},"Dynamic Array as Inputs and Outputs"),(0,r.kt)("p",null,"Dynamic arrays are fully supported as inputs and outputs to transpiled contracts.\nThe only limitation on using this data type as an input or output is that dynamic\narrays cannot be used in another reference type. e.g A struct where a member is a\ndynamic array or an array of dynamic arrays."))}d.isMDXComponent=!0}}]);