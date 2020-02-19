import e from"lodash.flow";function s(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}function o(e,s){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),o.push.apply(o,r)}return o}const r=(e,s)=>{let o;o=s?e=>e.loader&&e.loader.includes("babel")&&e.exclude:e=>e.loader&&e.loader.includes("babel")&&e.include;let r=e.module.rules.find(e=>Array.isArray(e.oneOf)).oneOf,t=r.find(o);return t||(r=r.reduce((e,s)=>e.concat(s.use||[]),[]),t=r.find(o)),t},t=e=>s=>{const{message:o,dest:r}=e||{},t=[];if(o&&t.push(o),t.push(JSON.stringify(s,null,2)),r){require("fs").appendFile(r,`${t.join("\n")}\n`)}return t.forEach(e=>console.log(e)),s},n=(e={},s=!1)=>o=>{const r=require("webpack-bundle-analyzer").BundleAnalyzerPlugin;return s&&!process.argv.includes("--analyze")||o.plugins.push(new r(Object.assign({analyzerMode:"static",reportFilename:"report.html"},e))),o},i=()=>e=>(e.module.rules.filter(e=>e.use&&e.use.some(e=>e.options&&void 0!==e.options.useEslintrc)).forEach(s=>{e.module.rules=e.module.rules.filter(e=>e!==s)}),e),l=e=>s=>(s.resolve||(s.resolve={}),s.resolve.alias||(s.resolve.alias={}),Object.assign(s.resolve.alias,e),s),u=e=>s=>(s.resolve||(s.resolve={}),Object.assign(s.resolve,e),s),a=e=>s=>(s.plugins.push(e),s),p=e=>s=>(s.plugins.forEach(s=>{"GenerateSW"===s.constructor.name&&e(s.config)}),s),c=e=>s=>{const o="prod"===("production"===process.env.NODE_ENV?"prod":"dev")?"css-extract-plugin":"style-loader";return s.module.rules.find(e=>Array.isArray(e.oneOf)).oneOf.filter(({use:e})=>e&&e[0]&&(e[0].loader||e[0]).includes(o)).forEach(s=>e(s)),s},d=e=>s=>{const o=s.module.rules.filter(e=>e.use&&e.use.some(e=>e.options&&void 0!==e.options.useEslintrc))[0];o.use[0].options.useEslintrc=!0,o.use[0].options.ignore=!0,o.use[0].options.configFile=e,delete o.use[0].options.baseConfig;const r=s.module.rules.map(e=>e.use&&e.use.some(e=>e.options&&void 0!==e.options.useEslintrc)?o:e);return s.module.rules=r,s},f=()=>e=>{const s=e.module.rules.filter(e=>e.use&&e.use.some(e=>e.options&&void 0!==e.options.useEslintrc))[0];s.test=/\.([j,t]sx?|mjs)$/;const o=e.module.rules.map(e=>e.use&&e.use.some(e=>e.options&&void 0!==e.options.useEslintrc)?s:e);return e.module.rules=o,e},m=(e={})=>s=>{const o="development"===process.env.NODE_ENV?"dev":"prod",r="./"===require("react-scripts/config/paths").servedPath,t="prod"===o&&"false"!==process.env.GENERATE_SOURCEMAP,n=/\.module\.less$/,i=e.localIdentName||"[path][name]__[local]--[hash:base64:5]",l=s=>["dev"===o?require.resolve("style-loader"):{loader:require("mini-css-extract-plugin").loader,options:Object.assign({},r?{publicPath:"../../"}:void 0)},{loader:require.resolve("css-loader"),options:s},{loader:require.resolve("postcss-loader"),options:{ident:"postcss",plugins:()=>[require("postcss-flexbugs-fixes"),require("postcss-preset-env")({autoprefixer:{flexbox:"no-2009"},stage:3})],sourceMap:t}},{loader:require.resolve("less-loader"),options:Object.assign(e,{source:t})}],u=s.module.rules.find(e=>Array.isArray(e.oneOf)).oneOf;return u.splice(u.length-1,0,{test:/\.less$/,exclude:n,use:l({importLoaders:2}),sideEffects:"prod"===o},{test:n,use:l({importLoaders:2,modules:{localIdentName:i}})}),s},g=()=>e=>(process.argv.includes("--watch-all")&&delete e.watchOptions,e),b=()=>e=>(e.optimization.splitChunks={cacheGroups:{default:!1}},e.optimization.runtimeChunk=!1,e),h=e=>r=>{let t=r.externals;return t?Array.isArray(e)?t=e.concat(t):Array.isArray(t)||e.constructor===Function||e.constructor===RegExp?t=[e].concat(t):e instanceof Object&&t instanceof Object&&(t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(o){s(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}({},t,{},e)):t=e,r.externals=t,r},O=e=>s=>(s.module.rules.find(e=>Array.isArray(e.oneOf)).oneOf.forEach(s=>s.use&&s.use.forEach(s=>{if(s.options&&"postcss"===s.options.ident&&(s.options.plugins||(s.options.plugins=()=>[...e]),s.options.plugins)){const o=s.options.plugins;s.options.plugins=()=>[...o(),...e]}})),s),v=()=>e=>(e.resolve.plugins=e.resolve.plugins.filter(e=>"ModuleScopePlugin"!==e.constructor.name),e),y=e=>s=>{for(let o of s.module.rules)if(o.oneOf){o.oneOf.unshift(e);break}return s},j=e=>s=>(s.module.rules.unshift({test:/\.(ts|tsx)$/,loader:"tslint-loader",options:e,enforce:"pre"}),s),E=e=>s=>(s.target=e,s),x=e=>s=>(e&&(e.startsWith("http")||e.startsWith("https")||e.startsWith("/")||(e="/"+e),e.endsWith("/")||(e+="/"),s.output.publicPath=e),s),A=e=>s=>(e&&"object"==typeof e&&(s.optimization.splitChunks=e),s),P=e=>s=>(s.stats=e,s),w=e=>s=>(r(s).options.plugins.push(e),s),q=e=>s=>{const o=r(s,!0).options;return o.plugins||(o.plugins=[]),o.plugins.push(e),s},N=e=>s=>(r(s).options.presets.push(e),s),z=()=>e=>w(["@babel/plugin-proposal-decorators",{legacy:!0}])(e),k=()=>e=>(r(e).options.babelrc=!0,e),D=e=>s=>(r(s).include=e,s),S=e=>s=>(r(s).exclude=e,s),$=(...e)=>e.map(e=>w(e)),C=(...e)=>e.map(e=>q(e)),W=(...e)=>e.map(e=>N(e)),_=(e,s)=>w(["import",Object.assign({},{libraryName:e},s),`fix-${e}-imports`]),F=e=>s=>(s.plugins=s.plugins.filter(s=>s.constructor.name!==e),s),M=(...s)=>e(...s.filter(e=>e)),G=(...e)=>s=>(o,r)=>{const t=s(o,r);return M(...e)(t)};export{w as addBabelPlugin,$ as addBabelPlugins,N as addBabelPreset,W as addBabelPresets,n as addBundleVisualizer,z as addDecoratorsLegacy,q as addExternalBabelPlugin,C as addExternalBabelPlugins,m as addLessLoader,O as addPostcssPlugins,j as addTslintLoader,l as addWebpackAlias,h as addWebpackExternals,y as addWebpackModuleRule,a as addWebpackPlugin,u as addWebpackResolve,c as adjustStyleLoaders,p as adjustWorkbox,S as babelExclude,D as babelInclude,b as disableChunk,i as disableEsLint,f as enableEslintTypescript,_ as fixBabelImports,r as getBabelLoader,M as override,G as overrideDevServer,F as removeInternalBabelPlugin,v as removeModuleScopePlugin,A as setWebpackOptimizationSplitChunks,x as setWebpackPublicPath,P as setWebpackStats,E as setWebpackTarget,t as tap,k as useBabelRc,d as useEslintRc,g as watchAll};
//# sourceMappingURL=index.esm.js.map
