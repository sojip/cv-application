(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(12),c=n.n(s),r=(n(17),n(18),n(11)),o=n(9),j=n(1),p=n(3),d=n(4),l=n(7),b=n(6),u=n(5),h=(n(19),n(20),n(0)),O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{children:Object(h.jsx)("h1",{className:"title",children:"CV - Maker"})})})}}]),n}(i.Component),x=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.fileInput;return Object(h.jsxs)("div",{className:"personalInfos",children:[Object(h.jsx)("h2",{children:"Personal Informations"}),Object(h.jsx)("input",{type:"text",placeholder:"First name",name:"firstName",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Last name",name:"lastName",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Title",name:"title",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Address",name:"address",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"tel",placeholder:"Phone number",name:"phoneNumber",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{rows:"4",placeholder:"Description",name:"description",onChange:t}),Object(h.jsxs)("label",{htmlFor:"photo",children:["Photo",Object(h.jsx)("input",{id:"photo",type:"file",placeholder:"Photo",name:"photo",required:!0,ref:n})," ",Object(h.jsx)("br",{})]})]})}}]),n}(i.Component),m=(n(22),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.id;return Object(h.jsxs)("div",{className:"educationInfos",id:n,children:[Object(h.jsx)("input",{type:"text",placeholder:"University name",name:"university",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"City",name:"city",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Degree",name:"degree",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Subject",name:"subject",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"number",placeholder:"From",name:"from",min:"1900",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"number",placeholder:"To",name:"to",min:"1900",onChange:t})," ",Object(h.jsx)("br",{})]})}}]),n}(i.Component)),f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.id;return Object(h.jsxs)("div",{className:"experienceInfos",id:n,children:[Object(h.jsx)("input",{type:"text",placeholder:"Position",name:"position",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Company",name:"company",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"City",name:"city",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"number",placeholder:"From",name:"from",min:"1900",onChange:t})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"number",placeholder:"To",name:"to",min:"1900",onChange:t})," ",Object(h.jsx)("br",{})]})}}]),n}(i.Component),y=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.experiences.map((function(t){return Object(h.jsx)(f,{handleChange:e.props.handleChange,id:t.id},t.id)})),n=this.props.educations.map((function(t){return Object(h.jsx)(m,{handleChange:e.props.handleChange,id:t.id},t.id)}));return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"form",children:Object(h.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(h.jsx)(x,{handleChange:this.props.handleChange,fileInput:this.props.fileInput}),Object(h.jsx)("h2",{children:"Experience"}),t,Object(h.jsx)("input",{onClick:this.props.addExperience,type:"button",value:"+"}),Object(h.jsx)("input",{onClick:this.props.removeExperience,type:"button",value:"-"}),Object(h.jsx)("h2",{children:"Education"}),n,Object(h.jsx)("input",{onClick:this.props.addEducation,type:"button",value:"+"}),Object(h.jsx)("input",{onClick:this.props.removeEducation,type:"button",value:"-"}),Object(h.jsx)("input",{type:"submit",value:"Submit"}),Object(h.jsx)("input",{onClick:this.props.reset,type:"button",value:"Reset"})]})})})}}]),n}(i.Component),v=n(8),g=n.n(v),C=(n(24),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.from,n=e.to,i=e.university,a=e.city,s=e.degree,c=e.subject;return Object(h.jsxs)("div",{style:{display:"flex",gap:"5px",margin:"5px 0px"},children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("span",{children:"-"}),Object(h.jsx)("span",{children:n}),Object(h.jsxs)("div",{style:{paddingLeft:"50px",width:"100%"},children:[Object(h.jsxs)("p",{children:[i,", ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{fontFamily:"Montserrat, sans-serif"},children:"Degree:"})," ",s]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{fontFamily:"Montserrat, sans-serif"},children:"Subject:"})," ",c]})]})]})}}]),n}(i.Component)),N=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.from,n=e.to,i=e.position,a=e.company;return Object(h.jsxs)("div",{style:{display:"flex",gap:"5px",margin:"5px 0px"},children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("span",{children:"-"}),Object(h.jsx)("span",{children:n}),Object(h.jsxs)("div",{style:{paddingLeft:"50px",width:"100%"},children:[Object(h.jsx)("p",{children:i}),Object(h.jsx)("p",{children:a})]})]})}}]),n}(i.Component),E=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.datas,t=e.experiences,n=e.educations,i=t.map((function(e){return Object(h.jsx)(N,{from:e.from,to:e.to,position:e.position,company:e.company},e.id)})),a=n.map((function(e){return Object(h.jsx)(C,{from:e.from,to:e.to,university:e.university,city:e.city,degree:e.degree,subject:e.subject},e.id)}));return Object(h.jsxs)("div",{className:"curriculum",children:[Object(h.jsxs)("div",{className:"infos",children:[Object(h.jsxs)("h1",{className:"name",children:[e.personal.firstName," ",e.personal.lastName," "]}),Object(h.jsx)("h2",{className:"title",children:e.personal.title})]}),Object(h.jsxs)("div",{className:"progress",style:{display:"flex",gap:"10px"},children:[Object(h.jsxs)("div",{className:"path",children:[Object(h.jsxs)("div",{className:"description",children:[Object(h.jsx)("h3",{children:"Description"}),Object(h.jsx)("p",{children:e.personal.description})]}),Object(h.jsxs)("div",{className:"experience",children:[Object(h.jsx)("h3",{children:"Experience"}),i]}),Object(h.jsxs)("div",{className:"education",children:[Object(h.jsx)("h3",{children:"Education"}),a]})]}),Object(h.jsxs)("div",{className:"personal",children:[Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:Object(h.jsx)("img",{src:e.personal.photo,style:{width:"100px",height:"100px"},alt:""})}),Object(h.jsx)("h3",{children:"Personal Details"}),Object(h.jsx)("h4",{children:"Address"}),Object(h.jsx)("p",{children:e.personal.address}),Object(h.jsx)("h4",{children:"Phone number"}),Object(h.jsx)("p",{children:e.personal.phoneNumber}),Object(h.jsx)("h4",{children:"Email"}),Object(h.jsx)("p",{children:e.personal.email})]})]})]})}}]),n}(i.Component),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={personal:{firstName:"",lastName:"",title:"",photo:"",address:"",phoneNumber:"",email:"",description:""},experience:{id:g()(),position:"",company:"",city:"",from:"",to:""},education:{id:g()(),university:"",city:"",degree:"",subject:"",from:"",to:""},experiences:[],educations:[],isSubmited:!1},i.handleSubmit=i.handleSubmit.bind(Object(l.a)(i)),i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.addExperience=i.addExperience.bind(Object(l.a)(i)),i.removeExperience=i.removeExperience.bind(Object(l.a)(i)),i.addEducation=i.addEducation.bind(Object(l.a)(i)),i.removeEducation=i.removeEducation.bind(Object(l.a)(i)),i.fileInput=a.a.createRef(),i.reset=i.reset.bind(Object(l.a)(i)),i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({experiences:[this.state.experience],educations:[this.state.education]})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmited:!0,personal:Object(j.a)(Object(j.a)({},this.state.personal),{},{photo:URL.createObjectURL(this.fileInput.current.files[0])})})}},{key:"handleChange",value:function(e){var t=this,n=e.target,i=n.name,a=n.value;"personalInfos"===e.target.parentNode.className?this.setState(Object(j.a)(Object(j.a)({},this.state),{},{personal:Object(j.a)(Object(j.a)({},this.state.personal),{},Object(o.a)({},i,a))})):"experienceInfos"===e.target.parentNode.className?this.setState(Object(j.a)(Object(j.a)({},this.state),{},{experience:Object(o.a)({id:e.target.parentNode.id},i,a)}),(function(){var n=t.state.experience;t.setState({experiences:t.state.experiences.map((function(t){return t.id===e.target.parentNode.id?Object(j.a)(Object(j.a)({},t),n):t}))},(function(){return console.log(t.state)}))})):"educationInfos"===e.target.parentNode.className&&this.setState(Object(j.a)(Object(j.a)({},this.state),{},{education:Object(o.a)({id:e.target.parentNode.id},i,a)}),(function(){var n=t.state.education;t.setState({educations:t.state.educations.map((function(t){return t.id===e.target.parentNode.id?Object(j.a)(Object(j.a)({},t),n):t}))},(function(){return console.log(t.state)}))}))}},{key:"addExperience",value:function(e){var t=this;this.setState(Object(j.a)(Object(j.a)({},this.state),{},{experience:{id:g()(),position:"",company:"",city:"",from:"",to:""}}),(function(){t.setState(Object(j.a)(Object(j.a)({},t.state),{},{experiences:[].concat(Object(r.a)(t.state.experiences),[t.state.experience])}))}))}},{key:"removeExperience",value:function(e){var t=this;this.setState(Object(j.a)(Object(j.a)({},this.state),{},{experiences:this.state.experiences.filter((function(e){return t.state.experiences.indexOf(e)+1!==t.state.experiences.length}))}))}},{key:"addEducation",value:function(e){var t=this;this.setState(Object(j.a)(Object(j.a)({},this.state),{},{education:{id:g()(),university:"",city:"",degree:"",subject:"",from:"",to:""}}),(function(){t.setState(Object(j.a)(Object(j.a)({},t.state),{},{educations:[].concat(Object(r.a)(t.state.educations),[t.state.education])}))}))}},{key:"removeEducation",value:function(e){var t=this;this.setState(Object(j.a)(Object(j.a)({},this.state),{},{educations:this.state.educations.filter((function(e){return t.state.educations.indexOf(e)+1!==t.state.educations.length}))}))}},{key:"reset",value:function(e){var t=this;document.querySelector("form").reset(),this.setState({personal:{firstName:"",lastName:"",title:"",photo:"",address:"",phoneNumber:"",email:"",description:""},experience:{id:g()(),position:"",company:"",city:"",from:"",to:""},education:{id:g()(),university:"",city:"",degree:"",subject:"",from:"",to:""},experiences:[],educations:[],isSubmited:!1},(function(){t.setState({experiences:[t.state.experience],educations:[t.state.education]})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(O,{}),Object(h.jsx)(y,{experiences:this.state.experiences,educations:this.state.educations,handleChange:this.handleChange,handleSubmit:this.handleSubmit,fileInput:this.fileInput,addEducation:this.addEducation,addExperience:this.addExperience,removeEducation:this.removeEducation,removeExperience:this.removeExperience,reset:this.reset}),!0===this.state.isSubmited&&Object(h.jsx)(E,{datas:this.state})]})}}]),n}(i.Component);c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c06e2e47.chunk.js.map