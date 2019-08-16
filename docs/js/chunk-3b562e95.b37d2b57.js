(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b562e95"],{"4ca9":function(e,t,a){"use strict";var r=a("6096"),i=a.n(r);i.a},6096:function(e,t,a){},"965d":function(e,t,a){},b0b4:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("85f2"),i=a.n(r);function l(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function n(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}},cac8:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-form"},[a("mis-page-title",{attrs:{title:"基础表单",description:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。"}}),a("div",{staticClass:"basic-form-content"},[a("Card",[a("Row",[a("Col",{attrs:{span:"8",offset:"8"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"Name",prop:"name"}},[a("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),a("FormItem",{attrs:{label:"E-mail",prop:"mail"}},[a("Input",{attrs:{placeholder:"Enter your e-mail"},model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1),a("FormItem",{attrs:{label:"City",prop:"city"}},[a("Select",{attrs:{placeholder:"Select your city"},model:{value:e.formValidate.city,callback:function(t){e.$set(e.formValidate,"city",t)},expression:"formValidate.city"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1),a("FormItem",{attrs:{label:"Date"}},[a("Row",[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{prop:"date"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:e.formValidate.date,callback:function(t){e.$set(e.formValidate,"date",t)},expression:"formValidate.date"}})],1)],1),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{prop:"time"}},[a("TimePicker",{attrs:{type:"time",placeholder:"Select time"},model:{value:e.formValidate.time,callback:function(t){e.$set(e.formValidate,"time",t)},expression:"formValidate.time"}})],1)],1)],1)],1),a("FormItem",{attrs:{label:"Gender",prop:"gender"}},[a("RadioGroup",{model:{value:e.formValidate.gender,callback:function(t){e.$set(e.formValidate,"gender",t)},expression:"formValidate.gender"}},[a("Radio",{attrs:{label:"male"}},[e._v("Male")]),a("Radio",{attrs:{label:"female"}},[e._v("Female")])],1)],1),a("FormItem",{attrs:{label:"Hobby",prop:"interest"}},[a("CheckboxGroup",{model:{value:e.formValidate.interest,callback:function(t){e.$set(e.formValidate,"interest",t)},expression:"formValidate.interest"}},[a("Checkbox",{attrs:{label:"Eat"}}),a("Checkbox",{attrs:{label:"Sleep"}}),a("Checkbox",{attrs:{label:"Run"}}),a("Checkbox",{attrs:{label:"Movie"}})],1)],1),a("FormItem",{attrs:{label:"Desc",prop:"desc"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:e.formValidate.desc,callback:function(t){e.$set(e.formValidate,"desc",t)},expression:"formValidate.desc"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("Submit")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("Reset")])],1)],1)],1)],1)],1)],1)],1)},i=[],l=a("d225"),n=a("b0b4"),o=a("308d"),s=a("6bb5"),c=a("4e2b"),m=a("9ab4"),d=a("60a3"),u=a("f058"),p=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.formValidate={name:"",mail:"",city:"",gender:"",interest:[],date:"",time:"",desc:""},e.ruleValidate={name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],city:[{required:!0,message:"Please select the city",trigger:"change"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Choose at least one hobby",trigger:"change"},{type:"array",max:2,message:"Choose two hobbies at best",trigger:"change"}],date:[{required:!0,type:"date",message:"Please select the date",trigger:"change"}],time:[{required:!0,type:"string",message:"Please select time",trigger:"change"}],desc:[{required:!0,message:"Please enter a personal introduction",trigger:"blur"},{type:"string",min:20,message:"Introduce no less than 20 words",trigger:"blur"}]},e}return Object(c["a"])(t,e),Object(n["a"])(t,[{key:"handleSubmit",value:function(e){}},{key:"handleReset",value:function(e){}}]),t}(d["c"]);p=m["a"]([Object(d["a"])({name:"BasicForm",components:{MisPageTitle:u["a"]}})],p);var b=p,f=b,g=(a("4ca9"),a("2877")),y=Object(g["a"])(f,r,i,!1,null,"5a27fd3c",null);t["default"]=y.exports},f058:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mis-page-title"},["empty"!==e.title?a("div",{staticClass:"page-title"},[a("b",[e._v(e._s(e.title))])]):e._e(),e._t("title"),"empty"!==e.description?a("p",[e._v(e._s(e.description))]):e._e(),e._t("content")],2)},i=[],l=a("d225"),n=a("308d"),o=a("6bb5"),s=a("4e2b"),c=a("9ab4"),m=a("60a3"),d=function(e){function t(){return Object(l["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(m["c"]);c["a"]([Object(m["b"])({type:String,default:"empty"})],d.prototype,"title",void 0),c["a"]([Object(m["b"])({type:String,default:"empty"})],d.prototype,"description",void 0),d=c["a"]([m["a"]],d);var u=d,p=u,b=(a("f5ca"),a("2877")),f=Object(b["a"])(p,r,i,!1,null,"dfa7d5a4",null),g=f.exports;t["a"]=g},f5ca:function(e,t,a){"use strict";var r=a("965d"),i=a.n(r);i.a}}]);
//# sourceMappingURL=chunk-3b562e95.b37d2b57.js.map