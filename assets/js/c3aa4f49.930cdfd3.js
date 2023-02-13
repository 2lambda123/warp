"use strict";(self.webpackChunkwarp_docs=self.webpackChunkwarp_docs||[]).push([[47],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||f[m]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9990:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Transcoding Inputs for Starknet Contracts"},l=void 0,o={unversionedId:"solidity_equivalents/inputs",id:"solidity_equivalents/inputs",title:"Transcoding Inputs for Starknet Contracts",description:"StarkNet contracts, also known as zk-STARK contracts, are a type of smart contract that utilizes zero-knowledge proof technology to provide privacy and security to its users and these contracts are written in cairo language. Unlike traditional smart contracts written in Solidity, the inputs to a StarkNet contract are structurally different, making it necessary to understand how to interact with them effectively.",source:"@site/docs/solidity_equivalents/inputs.mdx",sourceDirName:"solidity_equivalents",slug:"/solidity_equivalents/inputs",permalink:"/warp/docs/solidity_equivalents/inputs",editUrl:"https://github.com/NethermindEth/warp/tree/develop/docs/docs/solidity_equivalents/inputs.mdx",tags:[],version:"current",frontMatter:{title:"Transcoding Inputs for Starknet Contracts"},sidebar:"tutorialSidebar",previous:{title:"Addresses",permalink:"/warp/docs/solidity_equivalents/addresses"},next:{title:"Contribution Guidelines",permalink:"/warp/docs/category/contribution-guidelines"}},s=[{value:"Example",id:"example",children:[],level:4},{value:"Comparision of inputs",id:"comparision-of-inputs",children:[{value:"Value types",id:"value-types",children:[{value:"Booleans",id:"booleans",children:[],level:4},{value:"Integers",id:"integers",children:[],level:4},{value:"Addresses/Contract Types/Address Literals",id:"addressescontract-typesaddress-literals",children:[],level:4},{value:"Fixed-size byte arrays",id:"fixed-size-byte-arrays",children:[],level:4},{value:"Enums",id:"enums",children:[],level:4},{value:"User Defined Value Types",id:"user-defined-value-types",children:[],level:4}],level:3},{value:"Reference types",id:"reference-types",children:[{value:"String/String Literals",id:"stringstring-literals",children:[],level:4},{value:"bytes",id:"bytes",children:[],level:4},{value:"Arrays",id:"arrays",children:[],level:4},{value:"Structs",id:"structs",children:[],level:4}],level:3},{value:"Table for reference",id:"table-for-reference",children:[],level:3}],level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"StarkNet contracts, also known as zk-STARK contracts, are a type of smart contract that utilizes zero-knowledge proof technology to provide privacy and security to its users and these contracts are written in ",(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/"},"cairo")," language. Unlike traditional smart contracts written in Solidity, the inputs to a StarkNet contract are structurally different, making it necessary to understand how to interact with them effectively."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/warp"},"Warp")," is a transpiler tool developed by Nethermind, which is capable of converting Solidity smart contracts into Starknet contracts. However, the input parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"(calldata)")," for the Solidity smart contracts may differ slightly from those required for Starknet contracts written in Cairo. This is due to the differences in the programming languages used and the specific requirements of the respective platforms."),(0,r.kt)("p",null,"This is a guide on the structural differences between inputs i.e calldata in a Starknet contract (Warped Version) compared to a Solidity smart contract:"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Consider a solidity contract (",(0,r.kt)("inlineCode",{parentName:"p"},"contract.sol"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract A {\n    function increment(uint x) public pure returns (uint) {\n        return x + 1;\n    }\n}\n")),(0,r.kt)("p",null,"The transpiled ",(0,r.kt)("inlineCode",{parentName:"p"},"i.e Warped")," version of the above contract (call it ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.cairo"),") would be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo"},"%lang starknet\n\nfrom starkware.cairo.common.uint256 import Uint256\n...\n@view\nfunc increment_7cf5dab0{syscall_ptr: felt*, range_check_ptr: felt}(__warp_0_x: Uint256) -> (\n    __warp_1: Uint256\n) {\n    alloc_locals;\n\n    warp_external_input_check_int256(__warp_0_x);\n\n    let (__warp_se_0) = warp_add256(__warp_0_x, Uint256(low=1, high=0));\n\n    return (__warp_se_0,);\n}\n...\n")),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"increment_7cf5dab0")," in the cairo contract corresponds to ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," function in solidity contract."),(0,r.kt)("p",null,'When interacting with a Solidity contract, you would typically pass an integer value, such as "45", as a single parameter "x" to the function "increment". However, when working with the equivalent function "increment_7cf5dab0" in a Cairo-based Starknet contract, you would need to pass two values "45, 0" to accurately represent the same integer value. This is because the "Uint256" data type in Starknet contracts is implemented as a pair of ',(0,r.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_cairo/intro.html#the-primitive-type-field-element-felt"},(0,r.kt)("inlineCode",{parentName:"a"},"felt")),"s, which are a type of primitive field element in Cairo. This difference in representation highlights the distinct differences between the two platforms and the impact it has on the way input parameters are passed to functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),' : Warp supports both Solidity and Cairo contract input formats through its CLI. The default is Solidity format, but Cairo format can be used by passing the "--use_cairo_abi" flag'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# for solidity type input\nwarp invoke  --function increment --inputs 45 --address `contract_address`\n\n# for cairo type input\nwarp invoke  --function increment_7cf5dab0 --inputs 45 0 --address `contract_address` --use_cairo_abi\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Warp internally calls ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/warp/blob/48498267abede1e92501f2965729db8e9ba53674/src/transcode/encode.ts#L14"},"encodeInputs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/warp/blob/48498267abede1e92501f2965729db8e9ba53674/src/transcode/decode.ts#L13"},"decodeOutputs")," to make solidity inputs compatible for Warped contracts and decode it back to solidity type output from cairo type outputs respectively."),(0,r.kt)("h2",{id:"comparision-of-inputs"},"Comparision of inputs"),(0,r.kt)("p",null,"This section provides a detailed comparison of input data types used in smart contracts, including examples to demonstrate the differences."),(0,r.kt)("p",null,"The goal is to give a comprehensive understanding of the variations in input parameters required for contract functions."),(0,r.kt)("p",null,"It shows how solidity types in solidity contracts transforms to a cairo type in Starknet contracts after ",(0,r.kt)("strong",{parentName:"p"},"warping"),"."),(0,r.kt)("h3",{id:"value-types"},"Value types"),(0,r.kt)("p",null,"The following types are also called value types because variables of these types will always be passed by value, i.e. they are always copied when they are used as function arguments or in assignments."),(0,r.kt)("h4",{id:"booleans"},"Booleans"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool"),": The possible values are constants ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", these are represented in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"felt")," in cairo.\n0 for ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and 1 for ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"integers"},"Integers"),(0,r.kt)("p",null,"Signed and unsigned integers of various sizes (from 8 bits to 256 bits). All integers are represented in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"felt")," except for 256 width integers. 256 bits integers are represented in a pair of ",(0,r.kt)("inlineCode",{parentName:"p"},"felt"),"s . Negative Integers are represented as 2-complement of negative of the number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"-1(int256)")," is represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint256(0xffffffffffffffffffffffffffffffff, 0xffffffffffffffffffffffffffffffff)")," in cairo. It should be passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"0xffffffffffffffffffffffffffffffff, 0xffffffffffffffffffffffffffffffff"),"."),(0,r.kt)("h4",{id:"addressescontract-typesaddress-literals"},"Addresses/Contract Types/Address Literals"),(0,r.kt)("p",null,"Addresses are represented in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"felt"),"."),(0,r.kt)("h4",{id:"fixed-size-byte-arrays"},"Fixed-size byte arrays"),(0,r.kt)("p",null,"The value types bytes1, bytes2, bytes3, \u2026, bytes32 hold a sequence of bytes from one to up to 32. Variables with width upto 248 bits are represented in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"felt"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," is represented in a pair of ",(0,r.kt)("inlineCode",{parentName:"p"},"felt"),"s (Uint256)."),(0,r.kt)("h4",{id:"enums"},"Enums"),(0,r.kt)("p",null,"Enum variables are converted into a single felt in accord with the position of enum definition."),(0,r.kt)("h4",{id:"user-defined-value-types"},"User Defined Value Types"),(0,r.kt)("p",null,"A user defined value type allows creating a zero cost abstraction over an elementary value type."),(0,r.kt)("p",null,"Representation is the same as the elementary value type over at which it has been abstracted."),(0,r.kt)("h3",{id:"reference-types"},"Reference types"),(0,r.kt)("h4",{id:"stringstring-literals"},"String/String Literals"),(0,r.kt)("p",null,"Strings are represented as a ",(0,r.kt)("inlineCode",{parentName:"p"},"felt")," array with the leading element representing the number of elements in the array, typically represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"(arr_len: felt, arr:felt*)")," in the cairo lang."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"'warp'")," is represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"4 119 97 114 112"),"."),(0,r.kt)("h4",{id:"bytes"},"bytes"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", use byte values in-place instead of ascii values of characters."),(0,r.kt)("h4",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays can have a compile-time fixed size, or they can have a dynamic size."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed sized arrays are represented as tuple of base types with length equals length of the array."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"uint[3][2]")," is represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"(Uint256, Uint256, Uint256), (Uint256, Uint256, Uint256))"),".\nSo, If you want to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"[[12, 13, 14], [13, 14, 15]]")," then you have to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"12, 0, 13, 0, 14, 0, 13, 0, 14, 0, 15, 0")," to interact with warped contracts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dynamic sized arrays are repsented as ",(0,r.kt)("inlineCode",{parentName:"p"},"(arr_len: felt, arr: (base type in cairo)*)"),", the first value represents number of elements in the array."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"uint[3][]")," is represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"arr_len : felt, arr : (Uint256, Uint256, Uint256)*"),".\nSo, If you want to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"[[12, 13, 14], [13, 14, 15]]")," then you've to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"2, 12, 0, 13, 0, 14, 0, 13, 0, 14, 0, 15, 0")," to interact with warped contracts."))),(0,r.kt)("h4",{id:"structs"},"Structs"),(0,r.kt)("p",null,"Solidity provides a way to define new types in the form of structs."),(0,r.kt)("p",null,"Structs are represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"structs")," in cairo after warping but with members are of corresponding cairo type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct S {\n    uint x;\n    uint y;\n}\n")),(0,r.kt)("p",null,"corresponds to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo"},"struct S_699172d7{\n    x : Uint256,\n    y : Uint256,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," ",(0,r.kt)("inlineCode",{parentName:"p"},"S_699172d7")," is the struct signature of the ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," type in Solidity."),(0,r.kt)("p",null,"So, If you want to pass an input of type ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," with values ",(0,r.kt)("inlineCode",{parentName:"p"},"S(23, 45)"),", then you have to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"23 0 45 0")," in the inputs to interact with the warped contracts."),(0,r.kt)("h3",{id:"table-for-reference"},"Table for reference"),(0,r.kt)("p",null,"The table provides an extensive list of Solidity data types with corresponding example inputs for use with Cairo contracts (Warped contracts), which are the output of transpiling Solidity contracts. The table demonstrates the type of inputs transformation required for each Solidity type to interact effectively with the Cairo contracts."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Solidity Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Cairo Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Example solc input args"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Example cairo input args"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt"),(0,r.kt)("td",{parentName:"tr",align:"right"},"true"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"intX ",(0,r.kt)("inlineCode",{parentName:"td"},"(X \u2208 [8, 16,..., 248])")),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"int/int256"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Uint256(felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"low 128 bits"),", felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"high 128 bits"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45, 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uintX ",(0,r.kt)("inlineCode",{parentName:"td"},"(X \u2208 [8, 16,..., 248])")),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uint/uint256"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Uint256(felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"low 128 bits"),", felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"high 128 bits"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45, 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address (160 bits)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt (251 bits)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x0000000000000000000000000000000000000001"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x0000000000000000000000000000000000000001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"contract"),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt(",(0,r.kt)("inlineCode",{parentName:"td"},"251 bit contract address"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x0000000000000000000000000000000000000001"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x0000000000000000000000000000000000000001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bytesX ",(0,r.kt)("inlineCode",{parentName:"td"},"(X \u2208 [1, 2,..., 31])")),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x3232 (",(0,r.kt)("inlineCode",{parentName:"td"},"bytes2"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x3232 (felt)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Uint256(felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"low 128 bits"),", felt : ",(0,r.kt)("inlineCode",{parentName:"td"},"high 128 bits"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45"),(0,r.kt)("td",{parentName:"tr",align:"right"},"45, 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer Literals"),(0,r.kt)("td",{parentName:"tr",align:"center"},"felt"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff (two's complement)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Rational Literals"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"right"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"right"},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"string/bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"arr_len : felt, arr: felt","*"),(0,r.kt)("td",{parentName:"tr",align:"right"},'"abc"'),(0,r.kt)("td",{parentName:"tr",align:"right"},"3 (length), 97, 98, 99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dynamic Arrays (",(0,r.kt)("inlineCode",{parentName:"td"},"address[]"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"arr",(0,r.kt)("em",{parentName:"td"},"len: felt, arr : (base Type)")," ",(0,r.kt)("inlineCode",{parentName:"td"},"(felt_)")),(0,r.kt)("td",{parentName:"tr",align:"right"},"[0x0, 0x1, 0x2]"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3 0 1 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed Arrays (",(0,r.kt)("inlineCode",{parentName:"td"},"uint[3]"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"tuples of base Type (",(0,r.kt)("inlineCode",{parentName:"td"},"(Uint256, Uint256, Uint256)"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"[1, 2, 3]"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1 0 2 0 3 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Structs (",(0,r.kt)("inlineCode",{parentName:"td"},"S{int x, uint y}"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cairo struct (",(0,r.kt)("inlineCode",{parentName:"td"},"S{Uint256 x, Uint256 y}"),")"),(0,r.kt)("td",{parentName:"tr",align:"right"},"S(23, 45)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"23 0 45 0")))))}d.isMDXComponent=!0}}]);