(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(10),c=a.n(s),r=(a(16),a(17),a(3)),o=a(4),l=a(2),d=a(6),h=a(5),u=a(0),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("nav",{className:"light-blue darken-4",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"nav-wrapper brand-logo",children:"CV"})})})}}]),a}(i.Component),j=p,b={name:"John Doe",title:"Developer",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",address:"Toronto, ON, Canada",email:"John.Doe@example.com",phone:"(123) 456-7890",career:[{id:0,date:"June 2020 - Sept 2021",company:"Company ABZ",title:"Position Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:1,date:"June 2019 - Sept 2019",company:"Company 123",title:"Position Title 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],education:[{id:0,date:"Sept 2016 - April 2020",school:"University of Universities",program:"Bachelors of Bachelors",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={name:b.name,title:b.title,address:b.address,email:b.email,phone:b.phone},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:this.state.name}),Object(u.jsxs)("p",{children:[this.state.title,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fas fa-map"})," ",this.state.address,Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fas fa-envelope"})," ",this.state.email,Object(u.jsx)("br",{}),Object(u.jsx)("i",{className:"fas fa-phone"})," ",this.state.phone,Object(u.jsx)("span",{className:"right",style:{cursor:"pointer"},onClick:this.props.toggle,children:Object(u.jsx)("i",{className:"fas fa-pen-to-square",children:"edit"})})]})]})})})}}]),a}(i.Component),x=a(7);function O(e){var t=e.buttonName,a=e.buttonEvent,i=e.classAppend,n=void 0===i?"":i;return Object(u.jsx)("button",{onClick:a,className:"waves-effect waves-light btn-small "+n,children:t})}var g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={name:b.name,title:b.title,address:b.address,email:b.email,phone:b.phone},i.confirmChange=i.confirmChange.bind(Object(l.a)(i)),i.handleChange=i.handleChange.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"confirmChange",value:function(e){b.name=this.state.name.trim(),b.title=this.state.title.trim(),b.address=this.state.address.trim(),b.email=this.state.email.trim(),b.phone=this.state.phone.trim(),this.props.toggle()}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:Object(u.jsx)("form",{className:"grey-text",children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("input",{placeholder:"Full Name",id:"name",type:"text",value:this.state.name,onChange:this.handleChange})})})}),Object(u.jsx)("form",{className:"grey-text",children:Object(u.jsxs)("span",{className:"input-field",children:[Object(u.jsx)("input",{placeholder:"Title",id:"title",type:"text",value:this.state.title,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Location",id:"address",type:"text",value:this.state.address,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Email",id:"email",type:"text",value:this.state.email,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Phone Number",id:"phone",type:"text",value:this.state.phone,onChange:this.handleChange})]})}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.confirmChange}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]})]})})})}}]),a}(i.Component),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={about:b.about},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("h6",{children:Object(u.jsx)("strong",{children:"ABOUT ME"})}),Object(u.jsx)("p",{className:"grey-text",children:this.state.about}),Object(u.jsx)("p",{style:{height:"22px"},children:Object(u.jsx)("span",{className:"right",style:{cursor:"pointer"},onClick:this.props.toggle,children:Object(u.jsx)("i",{className:"fas fa-pen-to-square",children:"edit"})})})]})})})}}]),a}(i.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={about:b.about},i.confirmChange=i.confirmChange.bind(Object(l.a)(i)),i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.aboutFieldRef=n.a.createRef(),i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoad(this.aboutFieldRef.current)}},{key:"confirmChange",value:function(e){b.about=this.state.about.trim(),this.props.toggle()}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("h6",{children:Object(u.jsx)("strong",{children:"ABOUT ME"})}),Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("textarea",{placeholder:"Write something about yourself.",id:"about",type:"text",className:"materialize-textarea",value:this.state.about,onChange:this.handleChange,ref:this.aboutFieldRef})}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.confirmChange}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]})]})})})}}]),a}(i.Component),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={date:b.career[i.props.id].date,title:b.career[i.props.id].title,company:b.career[i.props.id].company,description:b.career[i.props.id].description},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("p",{className:"light-blue darken-4 year_exp white-text",children:this.state.date})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsx)("span",{className:"right",style:{cursor:"pointer"},onClick:this.props.toggle,children:Object(u.jsx)("i",{className:"fas fa-pen-to-square",children:"edit"})}),Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsxs)("h6",{className:"mt-bottom",children:[Object(u.jsx)("strong",{children:this.state.company}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:this.state.title})})]}),Object(u.jsx)("p",{children:this.state.description})]})]})]})}}]),a}(i.Component),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={date:b.career[i.props.id].date,title:b.career[i.props.id].title,company:b.career[i.props.id].company,description:b.career[i.props.id].description},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.confirmChange=i.confirmChange.bind(Object(l.a)(i)),i.descriptionFieldRef=n.a.createRef(),i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoad(this.descriptionFieldRef.current)}},{key:"confirmChange",value:function(){b.career[this.props.id].date=this.state.date.trim(),b.career[this.props.id].title=this.state.title.trim(),b.career[this.props.id].company=this.state.company.trim(),b.career[this.props.id].description=this.state.description.trim(),this.props.toggle()}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("input",{placeholder:"Employment Dates",id:"date",type:"text",value:this.state.date,onChange:this.handleChange})})})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsx)("h6",{className:"no-pad mt-bottom",children:Object(u.jsx)("form",{children:Object(u.jsxs)("span",{className:"input-field",children:[Object(u.jsx)("input",{placeholder:"Company Name",id:"company",type:"text",value:this.state.company,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Position Title",id:"title",type:"text",value:this.state.title,onChange:this.handleChange})]})})}),Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("textarea",{ref:this.descriptionFieldRef,placeholder:"Job Description",id:"description",type:"text",className:"materialize-textarea",value:this.state.description,onChange:this.handleChange})})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.confirmChange}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]}),Object(u.jsx)("span",{className:"right material-icons",style:{cursor:"pointer"},onClick:this.props.deleteCareer,"data-key":this.props.id,children:"delete"})]})]})}}]),a}(i.Component),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={id:b.career.length,date:"",company:"",title:"",description:""},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.saveWorkExperience=i.saveWorkExperience.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"saveWorkExperience",value:function(){var e={id:this.state.id,date:this.state.date.trim(),company:this.state.company.trim(),title:this.state.title.trim(),description:this.state.description.trim()};b.career.push(e),this.props.toggle()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[console.log(b.career.length),Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("input",{placeholder:"Employment Dates",id:"date",type:"text",value:this.state.date,onChange:this.handleChange})})})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsx)("h6",{className:"no-pad mt-bottom",children:Object(u.jsx)("form",{children:Object(u.jsxs)("span",{className:"input-field",children:[Object(u.jsx)("input",{placeholder:"Company",id:"company",type:"text",value:this.state.company,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Position Title",id:"title",type:"text",value:this.state.title,onChange:this.handleChange})]})})}),Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("textarea",{ref:this.descriptionFieldRef,placeholder:"Job Description",id:"description",type:"text",className:"materialize-textarea",value:this.state.description,onChange:this.handleChange})})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.saveWorkExperience}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]})]})]})}}]),a}(i.Component),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={experienceInput:!1},i.experienceEdit=i.experienceEdit.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"experienceEdit",value:function(){this.setState({experienceInput:!this.state.experienceInput})}},{key:"render",value:function(){return this.state.experienceInput?Object(u.jsx)(N,{id:this.props.id,toggle:this.experienceEdit,deleteCareer:this.props.deleteCareer,onLoad:this.props.onLoad}):Object(u.jsx)(C,{id:this.props.id,toggle:this.experienceEdit})}}]),a}(i.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={career:b.career,experienceAdd:!1},i.deleteCareer=i.deleteCareer.bind(Object(l.a)(i)),i.experienceAdd=i.experienceAdd.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"experienceAdd",value:function(){this.setState({experienceAdd:!this.state.experienceAdd})}},{key:"deleteCareer",value:function(e){delete b.career[e.target.dataset.key],this.setState({career:b.career})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("h6",{children:Object(u.jsx)("strong",{children:"EXPERIENCE"})}),this.state.career.map((function(t){return Object(u.jsx)(k,{id:t.id,deleteCareer:e.deleteCareer,onLoad:e.props.onLoad},t.id)})),this.state.experienceAdd?Object(u.jsx)(y,{toggle:this.experienceAdd}):Object(u.jsx)("p",{style:{height:"22px"},children:Object(u.jsx)("span",{className:"right material-icons",style:{cursor:"pointer"},onClick:this.experienceAdd,children:"add"})})]})})}}]),a}(i.Component),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={date:b.education[i.props.id].date,school:b.education[i.props.id].school,program:b.education[i.props.id].program,description:b.education[i.props.id].description},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("p",{className:"light-blue darken-4 year_exp white-text",children:this.state.date})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsx)("span",{className:"right",style:{cursor:"pointer"},onClick:this.props.toggle,children:Object(u.jsx)("i",{className:"fas fa-pen-to-square",children:"edit"})}),Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsxs)("h6",{className:"mt-bottom",children:[Object(u.jsx)("strong",{children:this.state.school}),Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:this.state.program})})]}),Object(u.jsx)("p",{children:this.state.description})]})]})]})}}]),a}(i.Component),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={date:b.education[i.props.id].date,school:b.education[i.props.id].school,program:b.education[i.props.id].program,description:b.education[i.props.id].description},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.confirmChange=i.confirmChange.bind(Object(l.a)(i)),i.descriptionFieldRef=n.a.createRef(),i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoad(this.descriptionFieldRef.current)}},{key:"confirmChange",value:function(){b.education[this.props.id].date=this.state.date.trim(),b.education[this.props.id].school=this.state.school.trim(),b.education[this.props.id].program=this.state.program.trim(),b.education[this.props.id].description=this.state.description.trim(),this.props.toggle()}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("input",{placeholder:"Education Dates",id:"date",type:"text",value:this.state.date,onChange:this.handleChange})})})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsx)("h6",{className:"no-pad mt-bottom",children:Object(u.jsx)("form",{children:Object(u.jsxs)("span",{className:"input-field",children:[Object(u.jsx)("input",{placeholder:"School Name",id:"school",type:"text",value:this.state.school,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Program Name",id:"program",type:"text",value:this.state.program,onChange:this.handleChange})]})})}),Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("textarea",{ref:this.descriptionFieldRef,placeholder:"Description",id:"description",type:"text",className:"materialize-textarea",value:this.state.description,onChange:this.handleChange})})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.confirmChange}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]}),Object(u.jsx)("span",{className:"right material-icons",style:{cursor:"pointer"},onClick:this.props.deleteEducation,"data-key":this.props.id,children:"delete"})]})]})}}]),a}(i.Component),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={id:b.education.length,date:"",school:"",program:"",description:""},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.saveEducation=i.saveEducation.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.id,e.target.value))}},{key:"saveEducation",value:function(){var e={id:this.state.id,date:this.state.date.trim(),school:this.state.school.trim(),program:this.state.program.trim(),description:this.state.description.trim()};b.education.push(e),this.props.toggle()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"row mt-top",children:[console.log(b.career.length),Object(u.jsx)("div",{className:"col xl4 l4 m6 s12",children:Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("input",{placeholder:"Education Dates",id:"date",type:"text",value:this.state.date,onChange:this.handleChange})})})}),Object(u.jsxs)("div",{className:"col xl8 l8 m6 s12",children:[Object(u.jsxs)("blockquote",{className:"no-pad",children:[Object(u.jsx)("h6",{className:"no-pad mt-bottom",children:Object(u.jsx)("form",{children:Object(u.jsxs)("span",{className:"input-field",children:[Object(u.jsx)("input",{placeholder:"School Name",id:"school",type:"text",value:this.state.school,onChange:this.handleChange}),Object(u.jsx)("input",{placeholder:"Program Name",id:"program",type:"text",value:this.state.program,onChange:this.handleChange})]})})}),Object(u.jsx)("form",{children:Object(u.jsx)("span",{className:"input-field",children:Object(u.jsx)("textarea",{ref:this.descriptionFieldRef,placeholder:"Description",id:"description",type:"text",className:"materialize-textarea",value:this.state.description,onChange:this.handleChange})})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(O,{buttonName:"Submit",buttonEvent:this.saveEducation}),Object(u.jsx)(O,{buttonName:"Cancel",buttonEvent:this.props.toggle,classAppend:"red"})]})]})]})}}]),a}(i.Component),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={educationInput:!1},i.educationEdit=i.educationEdit.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"educationEdit",value:function(){this.setState({educationInput:!this.state.educationInput})}},{key:"render",value:function(){return this.state.educationInput?Object(u.jsx)(q,{id:this.props.id,toggle:this.educationEdit,deleteEducation:this.props.deleteEducation,onLoad:this.props.onLoad}):Object(u.jsx)(A,{id:this.props.id,toggle:this.educationEdit})}}]),a}(i.Component),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={education:b.education,educationAdd:!1},i.deleteEducation=i.deleteEducation.bind(Object(l.a)(i)),i.educationAdd=i.educationAdd.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"educationAdd",value:function(){this.setState({educationAdd:!this.state.educationAdd})}},{key:"deleteEducation",value:function(e){delete b.education[e.target.dataset.key],this.setState({education:b.education})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("h6",{children:Object(u.jsx)("strong",{children:"EDUCATION"})}),this.state.education.map((function(t){return Object(u.jsx)(R,{id:t.id,deleteEducation:e.deleteEducation,onLoad:e.props.onLoad},t.id)})),this.state.educationAdd?Object(u.jsx)(S,{toggle:this.educationAdd}):Object(u.jsx)("p",{style:{height:"22px"},children:Object(u.jsx)("span",{className:"right material-icons",style:{cursor:"pointer"},onClick:this.educationAdd,children:"add"})})]})})}}]),a}(i.Component),I=a(11),L=a.n(I),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={profileInput:!1,aboutInput:!1},i.profileEdit=i.profileEdit.bind(Object(l.a)(i)),i.aboutEdit=i.aboutEdit.bind(Object(l.a)(i)),i}return Object(o.a)(a,[{key:"profileEdit",value:function(){this.setState({profileInput:!this.state.profileInput})}},{key:"aboutEdit",value:function(){this.setState({aboutInput:!this.state.aboutInput})}},{key:"textareaAutoResize",value:function(e){L.a.textareaAutoResize(e)}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"col s12 m8 l9",children:[this.state.profileInput?Object(u.jsx)(g,{toggle:this.profileEdit}):Object(u.jsx)(m,{toggle:this.profileEdit}),this.state.aboutInput?Object(u.jsx)(f,{toggle:this.aboutEdit,onLoad:this.textareaAutoResize}):Object(u.jsx)(v,{toggle:this.aboutEdit}),Object(u.jsx)(D,{onLoad:this.textareaAutoResize}),Object(u.jsx)(E,{onLoad:this.textareaAutoResize})]})})]})})}}]),a}(i.Component);var F=function(){return Object(u.jsx)(w,{})};a(19);c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a9203c09.chunk.js.map