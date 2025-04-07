import{_ as O,r as F,a as j,o as R,b as M,w as v,d as Z,u as E,e as G,f as o,g as S,h as e,i as l,j as x,k as u,l as h,F as f,m as p,t as d,v as z,n as I,p as J,z as B,q as i,s as W,x as X,y as Y,A as ee,C as te}from"./index-B8Wi_BLM.js";import{_ as re}from"./PageHeader-BNyDcRJ5.js";import{u as se}from"./flashcards-CQH5aUie.js";import{s as oe}from"./sections-D1Gc3Eyc.js";import{t as ae}from"./tags-CQAImP99.js";const le={class:"mb-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"},ne={class:"p-4"},de={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},ie={class:"relative"},ue=["value"],ge={class:"relative"},ce=["value"],ye={class:"relative"},ve={class:"relative"},xe={key:0,class:"mb-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"},fe={class:"p-5"},pe={class:"flex flex-col md:flex-row md:items-center md:justify-between"},me={class:"flex flex-wrap gap-2 mt-4 md:mt-0"},we=["onClick"],he={class:"mt-4 border-t border-gray-200/70 dark:border-gray-700/70 pt-4"},be={class:"flex flex-wrap gap-2"},ke=["onClick"],_e={class:"flex items-center"},Ce={key:3,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Fe=["onClick"],Me={class:"flashcard-face flashcard-front bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 flex flex-col"},Se={class:"mb-4 flex items-center justify-between"},ze={key:0,class:"text-xs text-gray-500 dark:text-gray-400 flex items-center"},Be={class:"text-base font-medium text-gray-800 dark:text-white flex-grow mb-3"},Ve={class:"mt-auto text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3"},Ae={class:"flashcard-face flashcard-back bg-gradient-to-br from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-xl shadow-sm p-5 flex flex-col"},He={class:"flex-grow overflow-auto"},je={class:"markdown-body text-white"},Te=["innerHTML"],$e={class:"absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"},Le=["onClick"],Ne={key:4,class:"mt-6 flex justify-between items-center"},Qe={class:"text-xs text-gray-500 dark:text-gray-400"},Pe={class:"flex space-x-2"},Ue={__name:"FlashcardList",setup(qe,{expose:T}){const b=E(),n=se(),c=F([]),k=F([]),g=F(1),_=j({}),a=j({section:null,tag:null,searchQuery:"",sort:"-updated_at"}),$=async()=>{loading.value=!0;try{await Promise.all([V(),A(),y()])}catch(s){console.error("Failed to reload flashcard data:",s)}finally{loading.value=!1}},L=s=>{b.push({path:"/flashcards/study",query:{tag:s}})};T({reload:$});const N=s=>{b.push({path:"/flashcards/study",query:{section:s}})};R(async()=>{await Promise.all([V(),A(),y()])});const V=async()=>{try{const s=await oe.getSections();c.value=s.data.results}catch(s){console.error("Failed to load sections:",s)}},A=async()=>{try{const s=await ae.getTags();k.value=s.data.results}catch(s){console.error("Failed to load tags:",s)}},y=async()=>{try{await n.fetchFlashcards(g.value)}catch(s){console.error("Failed to fetch flashcards:",s)}},H=async s=>{g.value=s,await y()},m=async()=>{n.setFilters({section:a.section,tag:a.tag,searchQuery:a.searchQuery,sort:a.sort}),g.value=1,await y()},Q=async()=>{a.section=null,a.tag=null,a.searchQuery="",a.sort="-updated_at",n.resetFilters(),g.value=1,await y()},P=()=>{b.push("/flashcards/new")},U=s=>{const t=c.value.find(w=>w.id===s);return t?t.title:""},q=s=>{_[s]=!_[s]},D=async s=>{if(confirm(`Are you sure you want to delete "${s.title}"?`))try{await n.deleteFlashcard(s.id)}catch(t){console.error("Failed to delete flashcard:",t)}},K=s=>s?te(s):"";return(s,t)=>{const w=G("router-link");return o(),M(Z,{title:"Flashcards"},{default:v(()=>[S(re,{title:"Flashcards"},{actions:v(()=>[S(w,{to:"/flashcards/new",class:"btn-primary"},{default:v(()=>t[6]||(t[6]=[u(" New Flashcard ")])),_:1})]),_:1}),e("div",le,[e("div",ne,[e("div",de,[e("div",null,[t[9]||(t[9]=e("label",{for:"filter-section",class:"block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5"},"Section",-1)),e("div",ie,[h(e("select",{id:"filter-section","onUpdate:modelValue":t[0]||(t[0]=r=>a.section=r),onChange:m,class:"w-full px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-700/50 dark:text-white appearance-none"},[t[7]||(t[7]=e("option",{value:null},"All Sections",-1)),(o(!0),l(f,null,p(c.value,r=>(o(),l("option",{key:r.id,value:r.id},d(r.title),9,ue))),128))],544),[[z,a.section]]),t[8]||(t[8]=e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1))])]),e("div",null,[t[12]||(t[12]=e("label",{for:"filter-tag",class:"block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5"},"Tag",-1)),e("div",ge,[h(e("select",{id:"filter-tag","onUpdate:modelValue":t[1]||(t[1]=r=>a.tag=r),onChange:m,class:"w-full px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-700/50 dark:text-white appearance-none"},[t[10]||(t[10]=e("option",{value:null},"All Tags",-1)),(o(!0),l(f,null,p(k.value,r=>(o(),l("option",{key:r.id,value:r.id},d(r.name),9,ce))),128))],544),[[z,a.tag]]),t[11]||(t[11]=e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1))])]),e("div",null,[t[15]||(t[15]=e("label",{for:"filter-sort",class:"block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5"},"Sort By",-1)),e("div",ye,[h(e("select",{id:"filter-sort","onUpdate:modelValue":t[2]||(t[2]=r=>a.sort=r),onChange:m,class:"w-full px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-700/50 dark:text-white appearance-none"},t[13]||(t[13]=[e("option",{value:"-updated_at"},"Last Updated",-1),e("option",{value:"-created_at"},"Newest First",-1),e("option",{value:"created_at"},"Oldest First",-1),e("option",{value:"title"},"Title (A-Z)",-1),e("option",{value:"-title"},"Title (Z-A)",-1)]),544),[[z,a.sort]]),t[14]||(t[14]=e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1))])]),e("div",null,[t[17]||(t[17]=e("label",{for:"filter-search",class:"block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5"},"Search",-1)),e("div",ve,[t[16]||(t[16]=e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1)),h(e("input",{id:"filter-search",type:"text","onUpdate:modelValue":t[3]||(t[3]=r=>a.searchQuery=r),onKeyup:I(m,["enter"]),class:"block w-full pl-10 pr-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-700/50 dark:text-white",placeholder:"Search flashcards..."},null,544),[[J,a.searchQuery]])])])]),e("div",{class:"mt-4 flex justify-end"},[e("button",{onClick:Q,class:"text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"},t[18]||(t[18]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})],-1),u(" Reset Filters ")]))])])]),c.value.length>0?(o(),l("div",xe,[e("div",fe,[e("div",pe,[t[19]||(t[19]=e("div",null,[e("h3",{class:"text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center"},[e("span",{class:"inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"}),u(" Study by Section ")]),e("p",{class:"text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4 md:mb-0"},"Focus your study session on a specific subject")],-1)),e("div",me,[(o(!0),l(f,null,p(c.value,r=>(o(),l("button",{key:r.id,onClick:C=>N(r.id),class:"px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:shadow-sm",style:B({backgroundColor:r.color+"10",color:r.color,borderColor:r.color+"30"})},d(r.title),13,we))),128))])]),e("div",he,[t[20]||(t[20]=e("h4",{class:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"},"Or study by tag:",-1)),e("div",be,[(o(!0),l(f,null,p(k.value,r=>(o(),l("button",{key:r.id,onClick:C=>L(r.id),class:"px-2.5 py-1 rounded-full text-xs font-medium transition-colors duration-200 border",style:B({backgroundColor:r.color+"10",color:r.color,borderColor:r.color+"30"})},[e("span",_e,[e("span",{class:"w-1.5 h-1.5 rounded-full mr-1",style:B({backgroundColor:r.color})},null,4),u(" "+d(r.name),1)])],12,ke))),128))])])])])):x("",!0),i(n).loading?(o(),M(W,{key:1})):i(n).flashcards.length===0?(o(),M(X,{key:2,title:"No flashcards found",message:"Get started by creating your first flashcard, or adjust your filters.","action-text":"Create a Flashcard",onAction:P},{icon:v(()=>t[21]||(t[21]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})],-1)])),_:1})):(o(),l("div",Ce,[(o(!0),l(f,null,p(i(n).flashcards,r=>(o(),l("div",{key:r.id,class:"relative group perspective"},[e("div",{class:Y(["flashcard",{flipped:_[r.id]}]),onClick:C=>q(r.id)},[e("div",Me,[e("div",Se,[t[23]||(t[23]=e("span",{class:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"}," Flashcard ",-1)),r.section?(o(),l("div",ze,[t[22]||(t[22]=e("span",{class:"w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-400 dark:bg-gray-500"},null,-1)),u(" "+d(U(r.section)),1)])):x("",!0)]),e("h3",Be,d(r.title),1),e("div",Ve,d(r.content),1),t[24]||(t[24]=e("div",{class:"absolute bottom-4 right-4 text-gray-400 dark:text-gray-500"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})])],-1))]),e("div",Ae,[t[25]||(t[25]=e("div",{class:"flex items-center justify-between mb-3"},[e("span",{class:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white"}," Answer ")],-1)),e("div",He,[e("div",je,[e("div",{innerHTML:K(r.additional_content)},null,8,Te)])]),t[26]||(t[26]=e("div",{class:"absolute bottom-4 right-4 text-white/70"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M16 2a1 1 0 00-1 1v2.101a7.002 7.002 0 00-11.601 2.566 1 1 0 101.885.666A5.002 5.002 0 0114.001 7H11a1 1 0 100 2h5a1 1 0 001-1V3a1 1 0 00-1-1zm-.008 9.057a1 1 0 00-1.276.61A5.002 5.002 0 015.999 13H9a1 1 0 100-2H4a1 1 0 00-1 1v5a1 1 0 102 0v-2.101a7.002 7.002 0 0111.601-2.566 1 1 0 00.61-1.276z","clip-rule":"evenodd"})])],-1))])],10,Fe),e("div",$e,[S(w,{to:`/flashcards/${r.id}/edit`,class:"p-1.5 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"},{default:v(()=>t[27]||(t[27]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1)])),_:2},1032,["to"]),e("button",{onClick:ee(C=>D(r),["stop"]),class:"p-1.5 rounded-full bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shadow-sm"},t[28]||(t[28]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)]),8,Le)])]))),128))])),i(n).pagination.count>0?(o(),l("div",Ne,[e("div",Qe," Showing "+d(i(n).flashcards.length)+" of "+d(i(n).pagination.count)+" flashcards ",1),e("div",Pe,[i(n).pagination.previous?(o(),l("button",{key:0,onClick:t[4]||(t[4]=r=>H(g.value-1)),class:"px-3.5 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-colors"},t[29]||(t[29]=[e("span",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})]),u(" Previous ")],-1)]))):x("",!0),i(n).pagination.next?(o(),l("button",{key:1,onClick:t[5]||(t[5]=r=>H(g.value+1)),class:"px-3.5 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition-colors"},t[30]||(t[30]=[e("span",{class:"flex items-center"},[u(" Next "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5 ml-1",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])],-1)]))):x("",!0)])])):x("",!0)]),_:1})}}},Ee=O(Ue,[["__scopeId","data-v-f334c645"]]);export{Ee as default};
