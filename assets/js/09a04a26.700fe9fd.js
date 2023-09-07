"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[8258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"running-the-api",title:"Running the API",slug:"/running-the-api",sidebar_position:5},a=void 0,l={unversionedId:"GettingStarted/running-the-api",id:"GettingStarted/running-the-api",title:"Running the API",description:"Sometimes, you may want to receive raw estimates or integrate estimate data into your own dashboard or tool. For this purpose, we've made it possible to run and deploy the API on its own. It allows direct queries for estimates with custom parameters, including more granular request options to specify the exact data you're looking for, including special options for filtering.",source:"@site/docs/GettingStarted/RunningTheApi.md",sourceDirName:"GettingStarted",slug:"/running-the-api",permalink:"/docs/running-the-api",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"running-the-api",title:"Running the API",slug:"/running-the-api",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Run with Mocked Data",permalink:"/docs/run-with-mocked-data"},next:{title:"Running the CLI",permalink:"/docs/running-the-cli"}},s={},c=[{value:"Running the API Locally",id:"running-the-api-locally",level:4},{value:"Endpoints",id:"endpoints",level:2},{value:"Documentation",id:"documentation",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes, you may want to receive raw estimates or integrate estimate data into your own dashboard or tool. For this purpose, we've made it possible to run and deploy the API on its own. It allows direct queries for estimates with custom parameters, including more granular request options to specify the exact data you're looking for, including special options for ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-persistence-and-caching#filtering-estimates"},"filtering"),"."),(0,i.kt)("h4",{id:"running-the-api-locally"},"Running the API Locally"),(0,i.kt)("p",null,"From the root directory:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn start-api")),(0,i.kt)("p",null,"From the package directory:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,"The API has several endpoints you can query for emissions data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/footprint")," - Gets calculated energy and carbon estimates for a given date range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/regions/emissions-factors")," - Gets the carbon intensity (CO2e/kWh) of all cloud provider regions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/recommendations")," - Gets recommendations from cloud providers and their estimated carbon and energy impact")),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Each API endpoint and its parameters have been documented using the OpenAPI Specification language (3.0), which can be parsed or read in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api/src/api.ts")," file."),(0,i.kt)("p",null,"For better visibility of this documentation, we have implemented a Swagger UI portal to view and test each endpoint. When running the API locally, this portal is accessible via browser at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:4000/docs"),". You can also fetch a JSON version of the documentation by making a GET request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs.json")," endpoint."))}d.isMDXComponent=!0}}]);