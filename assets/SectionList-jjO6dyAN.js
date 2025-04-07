import{r as v,o as P,c as D,b as w,w as h,d as q,u as K,e as O,f as r,i as n,j as k,q as U,s as G,g as _,h as e,y as C,k as p,l as L,n as Q,p as R,F as S,m as M,t as x,v as I,x as J,z as W}from"./index-C4Um7Kjq.js";import{_ as X}from"./PageHeader-Czcs01bb.js";import{_ as Y}from"./ConfirmDialog-ZWlj2za-.js";import{_ as Z}from"./SectionCard-ChQxx2w3.js";import{u as ee}from"./sections-CD6ER6y4.js";import"./sections-BygJVMTa.js";const te={key:1},oe={class:"flex items-center space-x-4"},se={class:"flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1"},re={class:"mb-6 bg-white dark:bg-gray-800 shadow p-4 rounded-lg"},ne={class:"flex flex-col sm:flex-row gap-4"},le={class:"flex-1"},ie={class:"mt-1 relative rounded-md shadow-sm"},ae={class:"w-full sm:w-64"},de=["value"],ce={key:0,class:"mt-8"},ue={key:1,class:"mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},ge={key:2,class:"mt-6 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"},ve={class:"divide-y divide-gray-200 dark:divide-gray-700"},pe={class:"flex items-center justify-between"},me={class:"flex items-center space-x-3"},we={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},he={class:"text-sm font-medium text-gray-900 dark:text-white flex items-center"},ke={key:0,class:"ml-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded"},xe={key:0,class:"text-xs text-gray-500 dark:text-gray-400 truncate max-w-md"},ye={class:"flex items-center space-x-2"},fe={key:0,class:"text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"},be={class:"flex items-center space-x-1"},_e=["onClick"],Ce=["onClick"],Se=["onClick"],Le={__name:"SectionList",setup(Me){const y=K(),l=ee(),d=v("grid"),c=v(""),i=v(null),m=v(!1),a=v(null);P(async()=>{await T()});const T=async()=>{try{await l.fetchSections()}catch(s){console.error("Failed to load sections:",s)}},H=D(()=>l.sections.filter(s=>!s.parent)),f=D(()=>{let s=l.sections;if(c.value){const t=c.value.toLowerCase();s=s.filter(u=>u.title.toLowerCase().includes(t)||u.description&&u.description.toLowerCase().includes(t))}return i.value&&(i.value==="top"?s=s.filter(t=>!t.parent):s=s.filter(t=>t.parent===i.value)),s}),b=s=>l.sections.filter(t=>t.parent===s),$=()=>{console.log("Searching for:",c.value)},F=()=>{console.log("Filtering by parent:",i.value)},N=()=>{y.push("/sections/new")},j=s=>{y.push(`/sections/${s.id}/edit`)},z=s=>{y.push(`/sections/${s.id}`)},B=s=>{a.value=s,m.value=!0},E=async()=>{if(a.value)try{await l.deleteSection(a.value.id),m.value=!1,a.value=null}catch(s){console.error("Failed to delete section:",s)}},A=()=>{m.value=!1,a.value=null};return(s,t)=>{const u=O("router-link");return r(),w(q,{title:"Sections"},{default:h(()=>{var V;return[U(l).loading?(r(),w(G,{key:0})):(r(),n("div",te,[_(X,{title:"Sections"},{subtitle:h(()=>t[4]||(t[4]=[p(" Organize your content into sections and categories ")])),actions:h(()=>[e("div",oe,[e("div",se,[e("button",{onClick:t[0]||(t[0]=o=>d.value="grid"),class:C(["px-3 py-1 rounded-md text-sm font-medium",d.value==="grid"?"bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow":"text-gray-700 dark:text-gray-300"])},t[5]||(t[5]=[e("span",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})]),p(" Grid ")],-1)]),2),e("button",{onClick:t[1]||(t[1]=o=>d.value="list"),class:C(["px-3 py-1 rounded-md text-sm font-medium",d.value==="list"?"bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow":"text-gray-700 dark:text-gray-300"])},t[6]||(t[6]=[e("span",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})]),p(" List ")],-1)]),2)]),_(u,{to:"/sections/new",class:"btn-primary flex items-center"},{default:h(()=>t[7]||(t[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),p(" New Section ")])),_:1})])]),_:1}),e("div",re,[e("div",ne,[e("div",le,[t[9]||(t[9]=e("label",{for:"search-sections",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Search",-1)),e("div",ie,[L(e("input",{id:"search-sections",type:"text","onUpdate:modelValue":t[2]||(t[2]=o=>c.value=o),onKeyup:Q($,["enter"]),class:"input w-full",placeholder:"Search sections..."},null,544),[[R,c.value]]),e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-3"},[e("button",{onClick:$,class:"text-gray-400 hover:text-gray-500"},t[8]||(t[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)]))])])]),e("div",ae,[t[12]||(t[12]=e("label",{for:"filter-parent",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Filter by Parent",-1)),L(e("select",{id:"filter-parent","onUpdate:modelValue":t[3]||(t[3]=o=>i.value=o),onChange:F,class:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"},[t[10]||(t[10]=e("option",{value:null},"All Sections",-1)),t[11]||(t[11]=e("option",{value:"top"},"Top Level Only",-1)),(r(!0),n(S,null,M(H.value,o=>(r(),n("option",{key:o.id,value:o.id},x(o.title)+" (Subsections) ",9,de))),128))],544),[[I,i.value]])])])]),f.value.length===0?(r(),n("div",ce,[_(J,{title:"No sections found",message:"Start by creating a new section to organize your content.","action-text":"Create Section",onAction:N,icon:"folder-plus"})])):d.value==="grid"?(r(),n("div",ue,[(r(!0),n(S,null,M(f.value,o=>(r(),w(Z,{key:o.id,section:o,subsections:b(o.id),onEdit:g=>j(o),onDelete:g=>B(o),onView:g=>z(o)},null,8,["section","subsections","onEdit","onDelete","onView"]))),128))])):(r(),n("div",ge,[e("ul",ve,[(r(!0),n(S,null,M(f.value,o=>(r(),n("li",{key:o.id,class:"p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"},[e("div",pe,[e("div",me,[e("div",{class:"w-10 h-10 flex items-center justify-center rounded-md",style:W(`background-color: ${o.color||"#3498db"}`)},[(r(),n("svg",we,[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",class:C(o.icon||"folder")},null,2)]))],4),e("div",null,[e("h3",he,[p(x(o.title)+" ",1),o.parent?(r(),n("span",ke," Subsection ")):k("",!0)]),o.description?(r(),n("p",xe,x(o.description),1)):k("",!0)])]),e("div",ye,[b(o.id).length>0?(r(),n("span",fe,x(b(o.id).length)+" subsections ",1)):k("",!0),e("div",be,[e("button",{onClick:g=>z(o),class:"text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 p-1",title:"View section"},t[13]||(t[13]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)]),8,_e),e("button",{onClick:g=>j(o),class:"text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 p-1",title:"Edit section"},t[14]||(t[14]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)]),8,Ce),e("button",{onClick:g=>B(o),class:"text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-1",title:"Delete section"},t[15]||(t[15]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,Se)])])])]))),128))])]))])),m.value?(r(),w(Y,{key:2,title:"Delete Section",message:`Are you sure you want to delete '${(V=a.value)==null?void 0:V.title}'? This will not delete the content inside the section.`,"confirm-text":"Delete","cancel-text":"Cancel",danger:!0,onConfirm:E,onCancel:A},null,8,["message"])):k("",!0)]}),_:1})}}};export{Le as default};
