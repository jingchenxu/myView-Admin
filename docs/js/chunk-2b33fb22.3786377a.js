(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b33fb22"],{2891:function(e,t,a){"use strict";var s=a("acb0"),n=a.n(s);n.a},"4c91":function(e,t,a){"use strict";var s=a("eb69"),n=a.n(s);n.a},"75f9":function(e,t,a){},acb0:function(e,t,a){},b1dc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mis-tab",{attrs:{activeTab:e.position}},[a("div",{attrs:{slot:"list"},slot:"list"},[a("div",{staticClass:"search-items-container"},[a("Form",{ref:"searchParams",attrs:{model:e.searchParams,inline:""}},[a("FormItem",{attrs:{prop:"name"}},[a("Input",{attrs:{clearable:"",type:"text",placeholder:"请输入姓名"},on:{"on-enter":e.handleSearch},model:{value:e.searchParams.name,callback:function(t){e.$set(e.searchParams,"name",t)},expression:"searchParams.name"}})],1),a("FormItem",{attrs:{prop:"address"}},[a("Input",{attrs:{clearable:"",placeholder:"请输入地址"},on:{"on-enter":e.handleSearch},model:{value:e.searchParams.address,callback:function(t){e.$set(e.searchParams,"address",t)},expression:"searchParams.address"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary",loading:e.searching,icon:"ios-search"},on:{click:function(t){return e.handleSearch("searchParams")}}},[e._v("查询")])],1),a("FormItem",[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){return e.handleAdd("searchParams")}}},[e._v("新增")])],1),a("FormItem",[a("Button",{attrs:{disabled:1!==e.selection.length,type:"primary",icon:"ios-create"},on:{click:function(t){return e.handleEdit("searchParams")}}},[e._v("修改")])],1),a("FormItem",[a("Button",{attrs:{disabled:e.selection.length<1,type:"error",icon:"ios-trash"},on:{click:function(t){return e.handleDelete("searchParams")}}},[e._v("删除")])],1),a("FormItem",[a("Button",{attrs:{type:"primary",icon:"ios-redo"},on:{click:function(t){return e.handleAdd("searchParams")}}},[e._v("导出")])],1)],1)],1),a("mis-table",{attrs:{tabledata:e.data,columns:e.columns,loading:e.searching},on:{handleDbclick:e.handleDbclick,handleSelect:e.handleSelect}}),a("white-space"),a("Page",{attrs:{"show-total":"",total:e.total,"show-sizer":""},on:{"on-change":e.handlePageChange}})],1),a("detail",{ref:e.detailRef,attrs:{slot:"detail"},slot:"detail"})],1)],1)},n=[],i=(a("96cf"),a("3b8d")),r=(a("bc3a"),a("cb39")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mis-tab"},[a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"list"===e.activeTab,expression:"activeTab === 'list'"}],staticClass:"list-container"},[e._t("list")],2)]),a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"detail"===e.activeTab,expression:"activeTab === 'detail'"}],staticClass:"detail-container"},[e._t("detail")],2)])],1)},o=[],l=a("d225"),d=a("308d"),h=a("6bb5"),u=a("4e2b"),m=a("9ab4"),f=a("60a3"),p=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(d["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.activeTab="list",e}return Object(u["a"])(t,e),t}(f["c"]);m["a"]([Object(f["b"])()],p.prototype,"activeTab",void 0),p=m["a"]([Object(f["a"])({})],p);var b=p,v=b,g=(a("ed67"),a("2891"),a("2877")),k=Object(g["a"])(v,c,o,!1,null,"4b88660e",null),y=k.exports,w=y,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sys-page1-detail"},[a("div",{staticClass:"action-items-container"},[a("Form",{attrs:{inline:""}},[a("FormItem",[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){return e.handleAdd("searchParams")}}},[e._v("新增")])],1),a("FormItem",[a("Button",{attrs:{disabled:!e.disabled,type:"primary",icon:"ios-create"},on:{click:function(t){return e.handleEdit()}}},[e._v("修改")])],1),a("FormItem",[a("Button",{attrs:{icon:"md-checkmark",disabled:e.disabled,type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")])],1),a("FormItem",[a("Button",{attrs:{icon:"ios-arrow-back",type:"primary"},on:{click:e.handleBack}},[e._v("返回列表")])],1)],1)],1),a("white-space"),a("Form",{ref:e.formRef,attrs:{model:e.form,rules:e.rule,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"日期",prop:"date"}},[a("DatePicker",{attrs:{type:"date",disabled:e.disabled,placeholder:"请选择日期"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"姓名",prop:"name"}},[a("Input",{attrs:{disabled:e.disabled,placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"地址",prop:"address"}},[a("Input",{attrs:{disabled:e.disabled,placeholder:"请输入地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1)],1)],1)],1)},$=[],I=function e(){Object(l["a"])(this,e),this.userid="",this.date=new Date,this.name="",this.address=""};a("fdeb");function F(){var e={address:[{required:!0,message:"用户地址不能为空",trigger:"blur"}],name:[{required:!0,message:"用户姓名不能为空",trigger:"blur"}],date:[{required:!0,message:"创建日期不能为空",trigger:"change",type:"date"}]};return e}var S="SysPage1Detail",x={name:S,data:function(){return{form:{},disabled:!1,formRef:"".concat(S,"-formRef"),rule:F(),saveUrl:"/api/savesysuser",formInit:function(){return new I}}},mounted:function(){},methods:{handleBack:function(){var e=this;this.$Modal.confirm({title:"确认返回列表页",content:"<p>表单页内容尚未保存，请确认是否返回列表页！</p>",onOk:function(){e.$parent.$parent.position="list",e.$parent.$parent.handleSearch()}})},handleAdd:function(){this.disabled=!1,this.$refs[this.formRef].resetFields(),this.form=this.formInit()},handleEdit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.form;console.dir(e),this.form=e,this.disabled=!1},handleDbclick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.form;this.disabled=!0,this.form=e},handleSubmit:function(){var e=this;this.$axios.post("".concat(this.saveUrl),this.form).then(function(t){t.success&&(e.$Message.success(t.msg),e.disabled=!0)})}}},_=x,R=(a("4c91"),Object(g["a"])(_,P,$,!1,null,"2a8bbf77",null)),C=R.exports,O="syspage1",j={name:O,components:{MisTable:r["a"],MisTab:w,detail:C},data:function(){return{position:"list",searchParams:{},searchUrl:"/api/searchuserlist",deleteUrl:"/api/deletesysuser",columnUrl:"/api/getcolumns",columnid:"syspage",searching:!1,currentPage:1,pageSize:10,total:0,columns:[],data:[],detailRef:"".concat(O,"-detailRef"),selection:[]}},mounted:function(){this.initList()},methods:{initList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.getColumns(),e.next=3,this.handleSearch();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleDbclick:function(e,t,a){this.position="detail",this.$refs[this.detailRef].handleDbclick(e)},handleSelect:function(e,t){this.selection=e},getColumns:function(){var e=this,t=new URLSearchParams;t.append("columnid",this.columnid),this.$axios.get("".concat(this.columnUrl,"?columnid=").concat(this.columnid)).then(function(t){t.success&&(e.columns=t.data)})},handleSearch:function(){var e=this;this.searching=!0;var t=Object.assign(this.searchParams,{});t["pagenumber"]=this.currentPage,t["limit"]=this.pageSize;var a=new URLSearchParams;for(var s in t)t[s]&&a.append(s,t[s]);this.$axios.get("".concat(this.searchUrl),{params:a}).then(function(t){e.searching=!1,t.success&&(e.data=t.data.list,e.total=t.data.total)})},handleAdd:function(){this.position="detail",this.$refs[this.detailRef].handleAdd()},handleEdit:function(){this.position="detail",this.$refs[this.detailRef].handleEdit(this.selection[0])},handleDelete:function(){var e=this;this.$axios.delete("".concat(this.deleteUrl),{data:this.selection}).then(function(t){t.success&&(e.$Message.success(t.msg),e.handleSearch())})},handleBack:function(){},handlePageChange:function(e){this.currentPage=e,this.handleSearch()}}},B=j,D=Object(g["a"])(B,s,n,!1,null,null,null);t["default"]=D.exports},eb69:function(e,t,a){},ed67:function(e,t,a){"use strict";var s=a("75f9"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-2b33fb22.3786377a.js.map