import{r as C,c as L,o as te,B as oe,J as Q,b as c,w,q as u,d as ne,u as se,e as re,f as t,i as r,s as ie,g as l,x as b,h as o,j as g,z as le,k as h,y as V,t as $,F as _,m as S}from"./index-B8Wi_BLM.js";import{_ as ae}from"./PageHeader-BNyDcRJ5.js";import{_ as de}from"./ConfirmDialog-EJzi4o8r.js";import{_ as T}from"./ElementCard-B29Y8Z90.js";import{_ as ce}from"./SectionCard-WPEZMZnN.js";import{u as ue}from"./sections-CbQILjQp.js";import"./sections-D1Gc3Eyc.js";const he={key:1},ve={key:2},me={class:"bg-white dark:bg-gray-800 shadow rounded-lg mb-8 overflow-hidden"},we={class:"flex justify-between items-start"},ge={class:"text-2xl font-bold text-white flex items-center"},pe={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ke={key:0,class:"mt-2 text-white/80"},ye={key:1,class:"mt-3"},fe={class:"flex items-center space-x-2"},xe={key:0,class:"mb-8"},_e={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"},Se={class:"bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"},Ce={class:"border-b border-gray-200 dark:border-gray-700"},be={class:"flex -mb-px"},Me=["onClick"],$e={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Te={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Be={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},je={key:3,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ne={key:4,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},He={class:"p-6"},De={key:0,class:"space-y-6"},ze={key:0},Ve={key:1},qe={key:1,class:"space-y-6"},Ee={key:0},Fe={key:1},Ae={key:2,class:"space-y-6"},Le={key:0},Qe={key:1},Ie={key:3,class:"space-y-6"},Re={key:0},Je={key:1},Ge={key:4,class:"space-y-6"},Ke={key:0},Oe={key:1},Pe={class:"fixed bottom-6 right-6"},Ue={class:"relative"},We={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Xe={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ye={key:0,class:"absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-48"},lt={__name:"SectionDetail",setup(Ze){const j=oe(),p=se(),i=ue(),N=C(!0),k=C([]),v=C("all"),M=C(!1),B=C(!1),y=C(null),I=[{id:"all",name:"All"},{id:"flashcards",name:"Flashcards"},{id:"notes",name:"Notes"},{id:"questions",name:"Questions"},{id:"todos",name:"Todos"}],H=L(()=>!i.currentSection||!i.currentSection.parent?null:i.sections.find(n=>n.id===i.currentSection.parent)),q=L(()=>i.currentSection?i.sections.filter(n=>n.parent===i.currentSection.id):[]);te(async()=>{await E()});const E=async()=>{N.value=!0;try{i.sections.length===0&&await i.fetchSections(),await i.fetchSection(j.params.id),await R()}catch(n){console.error("Failed to load section:",n)}finally{N.value=!1}},R=async()=>{try{const n=await Q.get(`sections/${j.params.id}/elements/`);k.value=n.data}catch(n){console.error("Failed to load section elements:",n),k.value=[]}},d=n=>k.value.filter(e=>e.type===n),D=()=>k.value.filter(n=>n.type==="question"||n.type==="multiple_choice"),F=n=>n==="all"?k.value.length:n==="flashcards"?d("flashcard").length:n==="notes"?d("note").length:n==="questions"?D().length:n==="todos"?d("todo").length:0,A=async n=>{try{const e=n.is_completed?"incomplete":"complete";await Q.post(`todos/${n.id}/${e}/`),n.is_completed=!n.is_completed}catch(e){console.error("Failed to toggle completion:",e)}},J=n=>i.sections.filter(e=>e.parent===n),G=n=>{p.push(`/sections/${n.id}`)},K=n=>{p.push(`/sections/${n.id}/edit`)},O=n=>{y.value=n,B.value=!0},P=async()=>{if(y.value)try{await i.deleteSection(y.value.id),B.value=!1,y.value=null,y.value.parent===j.params.id?await E():p.push("/sections")}catch(n){console.error("Failed to delete section:",n)}},U=()=>{B.value=!1,y.value=null},W=()=>{m(),p.push("/flashcards/new")},X=()=>{m(),p.push("/notes/new")},Y=()=>{m(),p.push("/questions/new")},Z=()=>{m(),p.push("/todos/new")},m=()=>{i.currentSection&&localStorage.setItem("newElementSectionId",i.currentSection.id)},ee=(n,e)=>{let a=parseInt(n.slice(1,3),16),f=parseInt(n.slice(3,5),16),x=parseInt(n.slice(5,7),16);return a=Math.max(0,Math.min(255,a+a*e/100)),f=Math.max(0,Math.min(255,f+f*e/100)),x=Math.max(0,Math.min(255,x+x*e/100)),`#${Math.round(a).toString(16).padStart(2,"0")}${Math.round(f).toString(16).padStart(2,"0")}${Math.round(x).toString(16).padStart(2,"0")}`};return(n,e)=>{var f;const a=re("router-link");return t(),c(ne,{title:((f=u(i).currentSection)==null?void 0:f.title)||"Section Detail"},{default:w(()=>{var x;return[N.value?(t(),c(ie,{key:0})):u(i).currentSection?(t(),r("div",ve,[o("div",me,[o("div",{class:"px-6 py-8 sm:p-10",style:le(`background: linear-gradient(135deg, ${u(i).currentSection.color||"#3498db"} 0%, ${ee(u(i).currentSection.color||"#3498db",-20)} 100%)`)},[o("div",we,[o("div",null,[o("h2",ge,[(t(),r("svg",pe,[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",class:V(u(i).currentSection.icon||"folder")},null,2)])),h(" "+$(u(i).currentSection.title),1)]),u(i).currentSection.description?(t(),r("p",ke,$(u(i).currentSection.description),1)):g("",!0),H.value?(t(),r("div",ye,[l(a,{to:`/sections/${H.value.id}`,class:"inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 text-white hover:bg-white/30 transition"},{default:w(()=>[e[3]||(e[3]=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})],-1)),h(" "+$(H.value.title),1)]),_:1},8,["to"])])):g("",!0)]),o("div",fe,[l(a,{to:`/sections/${u(i).currentSection.id}/edit`,class:"bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md flex items-center transition"},{default:w(()=>e[4]||(e[4]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),h(" Edit ")])),_:1},8,["to"]),l(a,{to:"/sections/new",class:"bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md flex items-center transition"},{default:w(()=>e[5]||(e[5]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),h(" New Section ")])),_:1})])])],4)]),q.value.length>0?(t(),r("div",xe,[l(ae,{title:"Subsections"}),o("div",_e,[(t(!0),r(_,null,S(q.value,s=>(t(),c(ce,{key:s.id,section:s,subsections:J(s.id),onEdit:z=>K(s),onDelete:z=>O(s),onView:z=>G(s)},null,8,["section","subsections","onEdit","onDelete","onView"]))),128))])])):g("",!0),o("div",Se,[o("div",Ce,[o("nav",be,[(t(),r(_,null,S(I,s=>o("button",{key:s.id,onClick:z=>v.value=s.id,class:V([v.value===s.id?"border-primary-500 text-primary-600 dark:text-primary-400":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300","group inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm"])},[s.id==="all"?(t(),r("svg",$e,e[6]||(e[6]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"},null,-1)]))):s.id==="flashcards"?(t(),r("svg",Te,e[7]||(e[7]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},null,-1)]))):s.id==="notes"?(t(),r("svg",Be,e[8]||(e[8]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)]))):s.id==="questions"?(t(),r("svg",je,e[9]||(e[9]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):s.id==="todos"?(t(),r("svg",Ne,e[10]||(e[10]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},null,-1)]))):g("",!0),h(" "+$(s.name)+" ",1),F(s.id)>0?(t(),r("span",{key:5,class:V([v.value===s.id?"bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300":"bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400","ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium"])},$(F(s.id)),3)):g("",!0)],10,Me)),64))])]),o("div",He,[v.value==="all"?(t(),r("div",De,[k.value.length===0?(t(),r("div",ze,[l(b,{title:"No content yet",message:"This section doesn't have any content yet.","action-text":"Create Content",onAction:e[1]||(e[1]=s=>M.value=!0)})])):(t(),r("div",Ve,[(t(!0),r(_,null,S(k.value,s=>(t(),c(T,{key:s.id,element:s,onToggleComplete:A},null,8,["element"]))),128))]))])):v.value==="flashcards"?(t(),r("div",qe,[d("flashcard").length===0?(t(),r("div",Ee,[l(b,{title:"No flashcards",message:"This section doesn't have any flashcards yet.","action-text":"Create Flashcard",onAction:W})])):(t(),r("div",Fe,[(t(!0),r(_,null,S(d("flashcard"),s=>(t(),c(T,{key:s.id,element:s},null,8,["element"]))),128))]))])):v.value==="notes"?(t(),r("div",Ae,[d("note").length===0?(t(),r("div",Le,[l(b,{title:"No notes",message:"This section doesn't have any notes yet.","action-text":"Create Note",onAction:X})])):(t(),r("div",Qe,[(t(!0),r(_,null,S(d("note"),s=>(t(),c(T,{key:s.id,element:s},null,8,["element"]))),128))]))])):v.value==="questions"?(t(),r("div",Ie,[D().length===0?(t(),r("div",Re,[l(b,{title:"No questions",message:"This section doesn't have any questions yet.","action-text":"Create Question",onAction:Y})])):(t(),r("div",Je,[(t(!0),r(_,null,S(D(),s=>(t(),c(T,{key:s.id,element:s},null,8,["element"]))),128))]))])):v.value==="todos"?(t(),r("div",Ge,[d("todo").length===0?(t(),r("div",Ke,[l(b,{title:"No todos",message:"This section doesn't have any todos yet.","action-text":"Create Todo",onAction:Z})])):(t(),r("div",Oe,[(t(!0),r(_,null,S(d("todo"),s=>(t(),c(T,{key:s.id,element:s,onToggleComplete:A},null,8,["element"]))),128))]))])):g("",!0)])]),o("div",Pe,[o("div",Ue,[o("button",{onClick:e[2]||(e[2]=s=>M.value=!M.value),class:"btn-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"},[M.value?(t(),r("svg",Xe,e[12]||(e[12]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),r("svg",We,e[11]||(e[11]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"},null,-1)])))]),M.value?(t(),r("div",Ye,[o("ul",null,[o("li",null,[l(a,{to:"/flashcards/new",onClick:m,class:"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"},{default:w(()=>e[13]||(e[13]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2 text-primary-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})],-1),h(" New Flashcard ")])),_:1})]),o("li",null,[l(a,{to:"/notes/new",onClick:m,class:"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"},{default:w(()=>e[14]||(e[14]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2 text-primary-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),h(" New Note ")])),_:1})]),o("li",null,[l(a,{to:"/questions/new",onClick:m,class:"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"},{default:w(()=>e[15]||(e[15]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2 text-primary-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),h(" New Question ")])),_:1})]),o("li",null,[l(a,{to:"/todos/new",onClick:m,class:"flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"},{default:w(()=>e[16]||(e[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2 text-primary-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})],-1),h(" New Todo ")])),_:1})])])])):g("",!0)])]),B.value?(t(),c(de,{key:1,title:"Delete Section",message:`Are you sure you want to delete '${(x=y.value)==null?void 0:x.title}'? This will not delete the content inside the section.`,"confirm-text":"Delete","cancel-text":"Cancel",danger:!0,onConfirm:P,onCancel:U},null,8,["message"])):g("",!0)])):(t(),r("div",he,[l(b,{title:"Section not found",message:"The section you're looking for doesn't exist or has been removed.","action-text":"Back to Sections",onAction:e[0]||(e[0]=s=>n.$router.push("/sections"))})]))]}),_:1},8,["title"])}}};export{lt as default};
