webpackJsonp([3],{"+HY0":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("woOf"),n=a.n(l),r=a("/VxO"),c={data:function(){return{data:[],select_cate:"",select_word:"",formatter:""}},watch:{data:{handler:function(){r.a.save(this.data)},deep:!0}},computed:{filterData:function(t){}},methods:{handleSelectionChange:function(){},handleCurrentChange:function(){},handleDelete:function(t,e){this.data.splice(t,1)},handleEdit:function(t,e){router.push({name:"form",query:n()({},e,{index:t})})},search:function(){},delAll:function(){this.data=[]},add:function(){router.push("form")}},filters:{DateFormat:function(t){return(new Date).setTime(t).toLocaleDateString()}},created:function(){this.data=r.a.get()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-location"}),t._v(" 基础表格")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("h2",[t._v("深圳住房署配租提请列表")]),t._v(" "),a("el-button",{staticClass:"handle-del mr10",attrs:{type:"danger",icon:"delete"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),a("el-button",{staticClass:"handle-del mr10",attrs:{type:"success"},on:{click:function(e){return t.add()}}},[t._v("添加")]),t._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选区域"},model:{value:t.select_cate,callback:function(e){t.select_cate=e},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"罗湖区",value:"罗湖区"}}),t._v(" "),a("el-option",{key:"2",attrs:{label:"龙岗区",value:"龙岗区"}}),t._v(" "),a("el-option",{key:"3",attrs:{label:"宝安区",value:"宝安区"}}),t._v(" "),a("el-option",{key:"4",attrs:{label:"盐田区",value:"盐田区"}}),t._v(" "),a("el-option",{key:"5",attrs:{label:"福田区",value:"福田区"}})],1),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:""},on:{"selection-change":function(e){return t.handleSelectionChange()}}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dateStart",label:"认租时间",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"配租名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"region",label:"配租区域",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"districtRestrict",label:"配租权限",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"配租房型"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.data.length},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(c,o,!1,function(t){a("h0J5")},"data-v-738b3cc8",null);e.default=s.exports},h0J5:function(t,e){}});
//# sourceMappingURL=3.aa8c9b9869d7869b1bf7.js.map