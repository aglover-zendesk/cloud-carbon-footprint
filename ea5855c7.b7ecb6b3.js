(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(122)),i={id:"aws",title:"AWS"},s={unversionedId:"aws",id:"aws",isDocsHomePage:!1,title:"AWS",description:"Your AWS account needs to be configured to generate Cost and Usage reports and save those reports in S3, and the application needs to authenticate with AWS and run queries on that data using Amazon Athena.",source:"@site/docs/AWS.md",slug:"/aws",permalink:"/docs/aws",version:"current",sidebar:"tryNowSidebar",previous:{title:"Run with Mocked Data",permalink:"/docs/run-with-mocked-data"},next:{title:"GCP",permalink:"/docs/gcp"}},c=[{value:"Unsupported Usage Types",id:"unsupported-usage-types",children:[]},{value:"Options for AWS Authentication",id:"options-for-aws-authentication",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Your AWS account needs to be configured to generate Cost and Usage reports and save those reports in S3, and the application needs to authenticate with AWS and run queries on that data using Amazon Athena."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Ensure your aws account has the correct permissions"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You will need an ",Object(r.b)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/"},"IAM")," user that can create access-keys and modify your billing settings."),Object(r.b)("li",{parentName:"ul"},"You can use the CloudFormation template file ",Object(r.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/cloudformation/ccf-athena.yaml"},"ccf-athena.yaml"),' to automate the creation of a role that allows the Cloud Carbon Footprint application to read Cost and Usage Reports via AWS Athena. Note: the section that asks you to specify the "AssumeRolePolicyDocument" is where you define the user or role that will have permissions to assume the "ccf-athena" role.'),Object(r.b)("li",{parentName:"ul"},"This role name will be used for the value in the environment variable: ",Object(r.b)("inlineCode",{parentName:"li"},"AWS_TARGET_ACCOUNT_ROLE_NAME")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable the Cost and Usage Billing AWS feature."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'This feature needs to be enabled so your account can start generating cost and usage reports. To enable, navigate to your account\'s billing section, and click on the "Cost and Usage Reports" tab. Make sure to select \u201cAmazon Athena\u201d for report data integration. Reference Cost and Usage Reports documentation ',Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html"},"here.")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setup Athena DB to save the Cost and Usage Reports."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In addition to generating reports, we use Athena DB to save the details of those reports in a DB, so we can run queries on them. This is a standard AWS integration, outlined ",Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-query-athena.html"},"here.")," There is a lot of helpful detail in the guides that goes beyond the specific needs for our app, but once you are able to succesfully query the Cost and Usage Reports from Athena, you should be set up sufficiently."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure aws credentials locally, using awscli."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint#optional-prerequisites"},"installing awscli"),", run ",Object(r.b)("inlineCode",{parentName:"p"},"aws configure")," and provide your access key and secret access key. Also make sure you select the same region as the one you created your cost and usage reports in.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We optionally support alternative methods of authenticating with AWS, which you can read about ",Object(r.b)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/aws#options-for-aws-authentication"},"here."))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure environmental variables for the api and client."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After configuring your credentials, we need to set a number of environmental variables in the app, so it can authenticate with AWS. We use .env files to manage this. Reference ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"packages/api/.env.template")," for a template .env file. Rename this file as .env, optionally remove the comments and then set the environment variables for the \u201cBilling Data\u201d approach. If you are only using one of these cloud providers, you can remove the environment variables associated with the other cloud provider in your ",Object(r.b)("inlineCode",{parentName:"p"},"packgages/api/.env")," file.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There is also a ",Object(r.b)("inlineCode",{parentName:"p"},"packages/client/.env")," file that allows you to set some configuration for the data range the application requests data for. See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/.env.template"},"client/.env.template")," for a template. Rename this file as .env, optionally remove the comments and then set the environment variables.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"By default, the client uses AWS, GCP and Azure. If you are only using one of these cloud providers, please update the appConfig object in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/src/Config.ts"},"client Config file")," to only include your provider in the CURRENT_PROVIDERS array.")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finally, after performing a ",Object(r.b)("inlineCode",{parentName:"p"},"yarn install"),", start up the application"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"yarn start\n")))),Object(r.b)("p",null,"\u26a0\ufe0f This will incur some cost. Use this sparingly if you wish to test with live data."),Object(r.b)("p",null,"DISCLAIMER: If your editor of choice is VS Code, we recommend to use either your native or custom terminal of choice (i.e. iterm) instead. Unexpected authentication issues have occured when starting up the server in VS Code terminals."),Object(r.b)("h3",{id:"unsupported-usage-types"},"Unsupported Usage Types"),Object(r.b)("p",null,"The application has a file containing supported usage types located ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/aws/src/lib/CostAndUsageTypes.ts"},"here"),". The current lists consist of types the application has faced, so there are likely to be some types not yet handled. When querying your data, you may come across unsupported types with a warning like this:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"2021-03-31T09:48:38.815Z [CostAndUsageReports] warn: Unexpected usage type for storage service: EU-WarmStorage-ByteHrs-EFS")),Object(r.b)("p",null,"If you come across a similar warning message, congratulations! You have found a usage type that the app currently isn\u2019t aware of - this is a great opportunity for you to improve Cloud Carbon Footprint!"),Object(r.b)("p",null,"The steps to resolve are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Determine the type in question based on the warning message"),Object(r.b)("li",{parentName:"ol"},"Add the type to the respective list in the ",Object(r.b)("inlineCode",{parentName:"li"},"CostAndUsageTypes.ts")," file"),Object(r.b)("li",{parentName:"ol"},"Delete ",Object(r.b)("inlineCode",{parentName:"li"},"estimates.cache.json")," file and restart the application server"),Object(r.b)("li",{parentName:"ol"},"Submit an issue or pull request with the update")),Object(r.b)("h3",{id:"options-for-aws-authentication"},"Options for AWS Authentication"),Object(r.b)("p",null,"We currently support three modes of authentication with AWS, that you can see in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/aws/src/application/AWSCredentialsProvider.ts"},"packages/aws/src/application/AWSCredentialsProvider.ts:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'"default" - this uses the AWS credentials that exist in the environment the application is running in, for example if you configure your local environment.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'"AWS" - this is used to authenticate via an AWS role that has the necessary permissions to query the CloudWatch and Cost Explorer APIs.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'"GCP" - this is used by GCP Service Accounts that authenticate via a temporary AWS STS token. This method is used by the application when deployed to Google App Engine.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'"EC2-METADATA" - this uses the AWS credentials that are automatically provided via an Instance Profile when you run the application on an EC2 instance. In order for this to work, you need to make sure that the appropriate IAM role is already created (as specified in step 1 of this document), and associated with the EC2 instance. See more information ',Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html"},"here"),"."))),Object(r.b)("p",null,"The authentication mode is set inside ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/common/src/Config.ts"},"packages/common/src/Config.ts.")),Object(r.b)("p",null,'api/.env is where you configure the options for the "GCP" mode, and set the AWS Accounts you want to run the application against. You can read more about this mode of authentication in ',Object(r.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/.adr/adr_5_aws_authentication.txt"},".adr/adr_5_aws_authentication.txt"),", as well as this article: ",Object(r.b)("a",{parentName:"p",href:"https://cevo.com.au/post/2019-07-29-using-gcp-service-accounts-to-access-aws/"},"https://cevo.com.au/post/2019-07-29-using-gcp-service-accounts-to-access-aws/")))}p.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||r;return a?o.a.createElement(d,s(s({ref:t},l),{},{components:a})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);