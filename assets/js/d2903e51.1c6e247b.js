"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[3820],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,v=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,a[1]=m;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],m={sidebar_position:4},l="/move",c={unversionedId:"commands/moderation/move",id:"commands/moderation/move",isDocsHomePage:!1,title:"/move",description:"Description",source:"@site/docs/commands/moderation/move.md",sourceDirName:"commands/moderation",slug:"/commands/moderation/move",permalink:"/docs/commands/moderation/move",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/moderation/move.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"/modlogs",permalink:"/docs/commands/moderation/modlogs"},next:{title:"/mute",permalink:"/docs/commands/moderation/mute"}},s=[{value:"Description",id:"description",children:[]},{value:"Sub-commands",id:"sub-commands",children:[{value:"Member",id:"member",children:[]},{value:"All",id:"all",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member-1",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"move"},"/move"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Moves (a) member(s) between voice channels"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports ephemeral response"),(0,i.kt)("li",{parentName:"ul"},"3 seconds cooldown"),(0,i.kt)("li",{parentName:"ul"},"Can be used by members having the ",(0,i.kt)("a",{parentName:"li",href:"/docs/setup/modroles"},"moderator role"))),(0,i.kt)("h2",{id:"sub-commands"},"Sub-commands"),(0,i.kt)("h3",{id:"member"},"Member"),(0,i.kt)("p",null,"Moves a member between voice channels."),(0,i.kt)("h3",{id:"all"},"All"),(0,i.kt)("p",null,"Moves all the members connected to a voice channel to another voice channel."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"bot"},"Bot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EMBED LINKS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MOVE MEMBERS"))),(0,i.kt)("h3",{id:"member-1"},"Member"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the command caller has a moderator role, they do not need the permission(s) listed below."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MOVE MEMBERS"))))}p.isMDXComponent=!0}}]);