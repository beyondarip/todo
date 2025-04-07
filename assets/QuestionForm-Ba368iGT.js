import{_ as H,r as f,c as b,B as I,a as P,C as O,o as R,b as F,w as M,d as W,u as G,f as a,g as N,i,h as r,q as h,s as Y,A as J,j as v,F as x,m as k,k as c,t as u,y as Q,l as d,p as w,T as K,D as X,v as Z,z as ee,E as $}from"./index-B8Wi_BLM.js";import{_ as te}from"./PageHeader-BNyDcRJ5.js";import{u as re}from"./questions-n8wlBmud.js";import{s as se}from"./sections-D1Gc3Eyc.js";import{t as oe}from"./tags-CQAImP99.js";const ae={key:1,class:"bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"},ie={key:0,class:"bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-md"},ne={key:0},le={key:1},de={class:"border-b border-gray-200 dark:border-gray-700 pb-4"},ce={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ue={class:"mt-1"},ge={class:"mt-1"},pe={key:1},ye={class:"mt-1"},me={key:2,class:"space-y-4"},ve=["id","value"],fe={class:"flex-grow relative"},be=["onUpdate:modelValue","placeholder"],he=["onClick"],xe=["for"],ke={key:0,class:"text-amber-600 dark:text-amber-400 text-sm"},we={key:3,class:"border border-gray-200 dark:border-gray-700 rounded-lg p-4"},_e={class:"overflow-y-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-4 max-h-60"},qe={class:"markdown-body"},Ce=["innerHTML"],Me={class:"mt-1"},Qe=["value"],Ve={class:"flex flex-wrap gap-2"},Se=["onClick"],Te={class:"flex items-center space-x-6"},Fe={class:"flex items-center"},Ne={class:"flex items-center"},$e={class:"pt-4 flex justify-end space-x-3 border-t border-gray-200 dark:border-gray-700"},je=["disabled"],ze={key:0,class:"flex items-center"},Ae={key:1},Be={__name:"QuestionForm",setup(Ue){const _=G(),V=I(),p=re(),S=f(!0),l=f(null),q=f([]),T=f([]),C=b(()=>V.params.id),y=b(()=>!!C.value),m=b(()=>V.query.type),t=P({type:"question",title:"",content:"",additional_content:"",section:null,tag_ids:[],is_favorite:!1,is_archived:!1,choices:["","",""],correct_answer:""}),j=b(()=>t.additional_content?O(t.additional_content):"");R(async()=>{m.value&&(m.value==="question"||m.value==="multiple_choice")&&(t.type=m.value);try{await Promise.all([z(),A(),B()])}catch(o){console.error("Error initializing form:",o),l.value="Failed to load form data. Please try again."}finally{S.value=!1}});const z=async()=>{try{const o=await se.getSections();q.value=o.data.results.map(e=>({...e,id:Number(e.id)})),console.log("Loaded sections with normalized IDs:",q.value)}catch(o){console.error("Failed to load sections:",o)}},A=async()=>{try{const o=await oe.getTags();T.value=o.data.results}catch(o){console.error("Failed to load tags:",o)}},B=async()=>{if(y.value)try{const o=m.value||"question",e=await p.fetchQuestionById(C.value,o);t.type=o,t.title=e.title,t.content=e.content||"",t.additional_content=e.additional_content||"",e.section?typeof e.section=="object"&&e.section!==null?t.section=Number(e.section.id):t.section=Number(e.section):e.section_id?t.section=Number(e.section_id):t.section=null,console.log("Section value after conversion:",t.section,"type:",typeof t.section),t.is_favorite=e.is_favorite||!1,t.is_archived=e.is_archived||!1,o==="multiple_choice"&&e.data&&(t.choices=e.data.choices||["","",""],t.correct_answer=e.data.correct_answer||""),e.tags&&Array.isArray(e.tags)&&(t.tag_ids=e.tags.map(s=>s.id))}catch(o){console.error("Failed to load question:",o),l.value="Failed to load question details"}},U=o=>{const e=t.tag_ids.indexOf(o.id);e===-1?t.tag_ids.push(o.id):t.tag_ids.splice(e,1)},E=()=>{t.choices.push("")},L=o=>{t.choices[o]===t.correct_answer&&(t.correct_answer=""),t.choices.splice(o,1),t.choices.length<2&&t.choices.push("")},D=async()=>{var o;if(l.value=null,t.type==="multiple_choice"){const e=t.choices.filter(s=>s.trim().length>0);if(e.length<2){l.value="Multiple choice questions must have at least 2 options.";return}if(!t.correct_answer){l.value="Please select the correct answer.";return}if(!e.includes(t.correct_answer)){l.value="The correct answer must be one of the non-empty choices.";return}}try{let e={title:t.title,content:t.content,section:t.section,tag_ids:t.tag_ids,section_id:t.section,is_favorite:t.is_favorite,is_archived:t.is_archived};if(t.type==="question")e.question=t.content,e.answer=t.additional_content,e.additional_content=t.additional_content,e.type="question";else if(t.type==="multiple_choice"){const n=t.choices.filter(g=>g.trim().length>0);e.content=t.content,e.choices=n,e.correct_answer=t.correct_answer,e.type="multiple_choice",console.log("Saving multiple choice question:",{choices:n,correct_answer:t.correct_answer})}let s;y.value?s=await p.updateQuestion(C.value,e,t.type):s=await p.createQuestion(e,t.type),console.log("Successfully saved question:",s),_.push("/questions")}catch(e){console.error("Failed to save question:",e),l.value=((o=e.response)==null?void 0:o.data)||"Failed to save question. Please try again."}};return(o,e)=>(a(),F(W,{title:y.value?"Edit Question":"New Question"},{default:M(()=>[N(te,{title:y.value?"Edit Question":"New Question"},{actions:M(()=>[r("button",{onClick:e[0]||(e[0]=s=>h(_).back()),class:"btn bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"}," Cancel ")]),_:1},8,["title"]),S.value?(a(),F(Y,{key:0})):(a(),i("div",ae,[r("form",{onSubmit:J(D,["prevent"]),class:"p-6 space-y-6"},[l.value?(a(),i("div",ie,[typeof l.value=="object"?(a(),i("p",ne,[(a(!0),i(x,null,k(l.value,(s,n)=>(a(),i("span",{key:n},[c(u(n)+": "+u(Array.isArray(s)?s.join(", "):s),1),e[11]||(e[11]=r("br",null,null,-1))]))),128))])):(a(),i("p",le,u(l.value),1))])):v("",!0),r("div",de,[e[14]||(e[14]=r("h2",{class:"text-lg font-medium text-gray-900 dark:text-white mb-4"},"Question Type",-1)),r("div",ce,[r("div",{onClick:e[1]||(e[1]=s=>t.type="question"),class:Q(["cursor-pointer p-4 rounded-lg border-2 flex items-center",t.type==="question"?"border-primary-500 bg-primary-50 dark:bg-primary-900/20":"border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"])},e[12]||(e[12]=[r("div",{class:"flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),r("div",{class:"ml-4"},[r("h3",{class:"font-medium text-gray-900 dark:text-white"},"Free-form Question"),r("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"Create a question with a detailed answer")],-1)]),2),r("div",{onClick:e[2]||(e[2]=s=>t.type="multiple_choice"),class:Q(["cursor-pointer p-4 rounded-lg border-2 flex items-center",t.type==="multiple_choice"?"border-primary-500 bg-primary-50 dark:bg-primary-900/20":"border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"])},e[13]||(e[13]=[r("div",{class:"flex-shrink-0 h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})])],-1),r("div",{class:"ml-4"},[r("h3",{class:"font-medium text-gray-900 dark:text-white"},"Multiple Choice"),r("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"Create a question with selectable options")],-1)]),2)])]),r("div",null,[e[15]||(e[15]=r("label",{for:"title",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},[c(" Title "),r("span",{class:"text-red-500"},"*")],-1)),r("div",ue,[d(r("input",{id:"title","onUpdate:modelValue":e[3]||(e[3]=s=>t.title=s),type:"text",required:"",class:"input focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",placeholder:"Question title"},null,512),[[w,t.title]])])]),r("div",null,[e[16]||(e[16]=r("label",{for:"question",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},[c(" Question "),r("span",{class:"text-red-500"},"*")],-1)),r("div",ge,[d(r("textarea",{id:"question","onUpdate:modelValue":e[4]||(e[4]=s=>t.content=s),rows:"4",required:"",class:"input focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",placeholder:"Write your question here..."},null,512),[[w,t.content]])])]),t.type==="question"?(a(),i("div",pe,[e[17]||(e[17]=r("label",{for:"answer",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},[c(" Answer "),r("span",{class:"text-red-500"},"*")],-1)),r("div",ye,[d(r("textarea",{id:"answer","onUpdate:modelValue":e[5]||(e[5]=s=>t.additional_content=s),rows:"6",required:"",class:"input focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",placeholder:"Write the answer here (supports Markdown)"},null,512),[[w,t.additional_content]])]),e[18]||(e[18]=r("p",{class:"mt-1 text-xs text-gray-500 dark:text-gray-400"}," You can use Markdown for formatting. Example: **bold**, *italic*, [link](url), etc. ",-1))])):v("",!0),t.type==="multiple_choice"?(a(),i("div",me,[e[21]||(e[21]=r("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},[c(" Options "),r("span",{class:"text-red-500"},"*")],-1)),N(K,{name:"list",tag:"div",class:"space-y-3"},{default:M(()=>[(a(!0),i(x,null,k(t.choices,(s,n)=>(a(),i("div",{key:n,class:"flex items-center space-x-2"},[d(r("input",{id:`option-${n}`,type:"radio",name:"correctAnswer",value:s,"onUpdate:modelValue":e[6]||(e[6]=g=>t.correct_answer=g),class:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"},null,8,ve),[[X,t.correct_answer]]),r("div",fe,[d(r("input",{"onUpdate:modelValue":g=>t.choices[n]=g,type:"text",class:"input focus:ring-primary-500 focus:border-primary-500 pl-3 pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",placeholder:`Option ${n+1}`,required:""},null,8,be),[[w,t.choices[n]]]),r("button",{type:"button",onClick:g=>L(n),class:"absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"},e[19]||(e[19]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)]),8,he)]),r("label",{for:`option-${n}`,class:"text-sm text-gray-600 dark:text-gray-400"},u(t.correct_answer===s?"Correct":""),9,xe)]))),128))]),_:1}),r("div",{class:"flex justify-center"},[r("button",{type:"button",onClick:E,class:"inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},e[20]||(e[20]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"-ml-0.5 mr-2 h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),c(" Add Option ")]))]),!t.correct_answer&&t.choices.length>0?(a(),i("div",ke," Don't forget to select the correct answer by clicking the radio button. ")):v("",!0)])):v("",!0),t.type==="question"&&t.additional_content?(a(),i("div",we,[e[22]||(e[22]=r("div",{class:"flex items-center justify-between mb-4"},[r("h3",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"},"Answer Preview")],-1)),r("div",_e,[r("div",qe,[r("div",{innerHTML:j.value},null,8,Ce)])])])):v("",!0),r("div",null,[e[24]||(e[24]=r("label",{for:"section",class:"block text-sm font-medium text-gray-700 dark:text-gray-300"}," Section ",-1)),r("div",Me,[d(r("select",{id:"section","onUpdate:modelValue":e[7]||(e[7]=s=>t.section=s),class:"input focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"},[e[23]||(e[23]=r("option",{value:null},"None",-1)),(a(!0),i(x,null,k(q.value,s=>(a(),i("option",{key:s.id,value:Number(s.id)},u(s.title),9,Qe))),128))],512),[[Z,t.section]])])]),r("div",null,[e[25]||(e[25]=r("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Tags ",-1)),r("div",Ve,[(a(!0),i(x,null,k(T.value,s=>(a(),i("div",{key:s.id,onClick:n=>U(s),class:Q(["px-3 py-1 rounded-full text-sm cursor-pointer",t.tag_ids.includes(s.id)?"text-white":"text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"]),style:ee(t.tag_ids.includes(s.id)?{backgroundColor:s.color}:{})},u(s.name),15,Se))),128))])]),r("div",Te,[r("div",Fe,[d(r("input",{id:"is_favorite","onUpdate:modelValue":e[8]||(e[8]=s=>t.is_favorite=s),type:"checkbox",class:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"},null,512),[[$,t.is_favorite]]),e[26]||(e[26]=r("label",{for:"is_favorite",class:"ml-2 block text-sm text-gray-900 dark:text-white"}," Mark as favorite ",-1))]),r("div",Ne,[d(r("input",{id:"is_archived","onUpdate:modelValue":e[9]||(e[9]=s=>t.is_archived=s),type:"checkbox",class:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"},null,512),[[$,t.is_archived]]),e[27]||(e[27]=r("label",{for:"is_archived",class:"ml-2 block text-sm text-gray-900 dark:text-white"}," Archive question ",-1))])]),r("div",$e,[r("button",{type:"button",onClick:e[10]||(e[10]=s=>h(_).back()),class:"btn bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}," Cancel "),r("button",{type:"submit",class:"btn-primary",disabled:h(p).loading},[h(p).loading?(a(),i("span",ze,e[28]||(e[28]=[r("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[r("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),r("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),c(" Saving... ")]))):(a(),i("span",Ae,u(y.value?"Update Question":"Create Question"),1))],8,je)])],32)]))]),_:1},8,["title"]))}},Pe=H(Be,[["__scopeId","data-v-3a924de7"]]);export{Pe as default};
