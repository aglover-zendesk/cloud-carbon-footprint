(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=o,g=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?r.a.createElement(g,l(l({ref:t},c),{},{components:n})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(116)),i={id:"deploying",title:"Deploying"},l={unversionedId:"deploying",id:"deploying",isDocsHomePage:!1,title:"Deploying",description:"Deploy to Google App Engine",source:"@site/docs/Deploying.md",slug:"/deploying",permalink:"/docs/deploying",version:"current",sidebar:"tryNowSidebar",previous:{title:"Performance Configurations",permalink:"/docs/performance-configurations"}},p=[{value:"Deploy to Google App Engine",id:"deploy-to-google-app-engine",children:[]},{value:"Deploy to other cloud providers",id:"deploy-to-other-cloud-providers",children:[]}],c={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"deploy-to-google-app-engine"},"Deploy to Google App Engine"),Object(a.b)("p",null,"Cloud Carbon Footprint is configured to be deployed to ",Object(a.b)("a",{parentName:"p",href:"https://cloud.google.com/appengine/"},"Google App Engine")," (standard environment) using Github Actions. See the ",Object(a.b)("a",{parentName:"p",href:"https://cloud.google.com/nodejs/getting-started/hello-world"},"Hello World example")," for instructions on setting up a Google Cloud Platform project and installing the Google Cloud SDK to your local machine."),Object(a.b)("p",null,"Before deploying, you'll need to build the application and create the packages/api/.env and packages/client/.env file as detailed above. There are two scripts to populate these files as part of the Github Actions pipeline: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ThoughtWorks-Cleantech/cloud-carbon-footprint/blob/trunk/packages/api/create_server_env_file.sh"},"packages/cli/create_server_env_file.sh")," and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ThoughtWorks-Cleantech/cloud-carbon-footprint/blob/trunk/packages/client/create_client_env_file.sh"},"client/create_client_env_file.sh"),"."),Object(a.b)("p",null,"Once you've set up the CGP project and have the command line tools, Cloud Carbon Footprint can be deployed with ",Object(a.b)("inlineCode",{parentName:"p"},"./appengine/deploy-staging.sh")," or ",Object(a.b)("inlineCode",{parentName:"p"},"./appengine/deploy-production.sh"),", depending on your environment."),Object(a.b)("p",null,"Or if you want to use Github Actions, you can see the configuration for this in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ThoughtWorks-Cleantech/cloud-carbon-footprint/blob/trunk/.github/ci.yml"},".github/ci.yml"),"."),Object(a.b)("p",null,"It will deploy to ",Object(a.b)("inlineCode",{parentName:"p"},"https://<something>.appspot.com"),"."),Object(a.b)("h2",{id:"deploy-to-other-cloud-providers"},"Deploy to other cloud providers"),Object(a.b)("p",null,"Cloud Carbon Footprint should be deployable to other cloud providers such as ",Object(a.b)("a",{parentName:"p",href:"https://www.heroku.com/"},"Heroku")," or ",Object(a.b)("a",{parentName:"p",href:"https://aws.amazon.com/elasticbeanstalk/"},"AWS Elastic Beanstalk"),". However only Google App Engine has been tested currently, so there may be some work involved in doing this."),Object(a.b)("p",null,"Don't forget to deploy your ",Object(a.b)("inlineCode",{parentName:"p"},".env")," files or otherwise set the environment variables in your deployment."))}u.isMDXComponent=!0}}]);