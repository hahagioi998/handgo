webpackJsonp([1],{0:function(e,t){},"9os9":function(e,t){},C3ys:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={name:"Welcome",data:function(){return{tt:"asdf"}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},l={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},r=n("VU/8")(i,l,!1,null,null,null).exports,o=(n("sfy8"),{name:"SideBar",data:function(){return{index:0,title:"你好"}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}}),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"padding-top":"60px"},attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",[e._v("商城管理")])]),e._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("\n   产品\n")]),e._v(" "),n("router-link",{attrs:{to:"/product",tag:"li"}},[n("el-menu-item",{attrs:{index:"1-1"}},[e._v("产品")])],1),e._v(" "),n("router-link",{attrs:{to:"/category",tag:"li"}},[n("el-menu-item",{attrs:{index:"1-2"}},[e._v("分类")])],1),e._v(" "),n("router-link",{attrs:{to:"/kill",tag:"li"}},[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("秒杀")])],1),e._v(" "),n("router-link",{attrs:{to:"/commend",tag:"li"}},[n("el-menu-item",{attrs:{index:"1-4"}},[e._v("推荐商品")])],1)],2),e._v(" "),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),e._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[e._v("\n   选项4\n")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],2)],2),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])]),e._v(" "),n("el-menu-item",{attrs:{index:"0"}},[n("i",{staticClass:"el-icon-setting"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.title))])])],1)},staticRenderFns:[]};var c=n("VU/8")(o,s,!1,function(e){n("PWZZ")},"data-v-71f2d0b6",null).exports,d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header_container"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),e._l(e.titleItemtest,function(t){return n("el-breadcrumb-item",[e._v(e._s(t.title))])})],2)],1)])},staticRenderFns:[]};var u=n("VU/8")({name:"HeadTop",props:["titleItemtest"]},d,!1,function(e){n("cScE")},null,null).exports,m=n("woOf"),p=n.n(m),f={name:"Child",props:["msg"],data:function(){return{msg:""}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]},b=n("VU/8")(f,v,!1,null,null,null).exports,_={name:"productList",components:{HeadTop:u,Child:b},data:function(){return{prices:1.2,item:[{title:"产品",path:"/product"}],name:"",originalPrice:"",currentPrice:"",description:"",editForm:{},tableData:[],dialogTableVisible:!1,editData:[{date:"10-10-10",name:"asdf",address:"asdf"}],rulet:{name:[{required:!0,message:"required"}],currentPrice:[{required:!0,message:"required"}]}}},methods:{handleEdit:function(e,t){this.dialogTableVisible=!0,console.log(this.$refs.editForm),this.editForm=p()({},t)},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},handleDelete:function(e,t,n){var a=this;console.log(n),this.$confirm("是否要删除？","删除询问",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.delete("/v1/product/"+t.id).then(function(t){200==t.data.code&&(n.splice(e,1),a.$message({type:"success",message:"删除成功"}))}).catch(function(e){a.$message({type:"error",message:"网络错误"})})}).catch(function(){a.$message({type:"info",message:"已取消"})})}},created:function(){},mounted:function(){var e=this;this.$http.get("/v1/product?page=1&limit=10").then(function(t){console.log(t),e.tableData=t.body.data})},filters:{priceFilter:function(e){}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:""}},[n("div",[e._v(e._s(e._f("priceFilter")(e.currentPrice)))]),e._v(" "),n("head-top",{attrs:{titleItemtest:e.item}}),e._v(" "),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"商品名称"}},[n("span",[e._v(e._s(t.row.name))])]),e._v(" "),n("el-form-item",{attrs:{label:"库存"}},[n("span",[e._v(e._s(t.row.stock))])]),e._v(" "),n("el-form-item",{attrs:{label:"已售数量"}},[n("span",[e._v(e._s(t.row.saleAmount))])]),e._v(" "),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(t.row.createTime))])]),e._v(" "),n("el-form-item",{attrs:{label:"更新时间"}},[n("span",[e._v(e._s(t.row.updateTime))])]),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("span",[e._v(e._s(t.row.status))])]),e._v(" "),n("el-form-item",{attrs:{label:"商品描述"}},[n("span",[e._v(e._s(t.row.desc))])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e._v(" "),n("el-table-column",{attrs:{label:"现价",prop:"currentPrice"}}),e._v(" "),n("el-table-column",{attrs:{label:"原价",prop:"originalPrice"}}),e._v(" "),n("el-table-column",{attrs:{label:"描述",prop:"description"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("\n        编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},nativeOn:{click:function(n){n.preventDefault(),e.handleDelete(t.$index,t.row,e.tableData)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{"close-on-press-escape":!0,"close-on-click-modal":!1,title:"编辑",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[n("el-form",{ref:"editForm",staticStyle:{width:"400px"},attrs:{rules:e.rulet,model:e.editForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"产品名",prop:"name"}},[n("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"现价",prop:"currentPrice"}},[n("el-input",{model:{value:e.editForm.currentPrice,callback:function(t){e.$set(e.editForm,"currentPrice",t)},expression:"editForm.currentPrice"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"原价",prop:"originalPrice"}},[n("el-input",{model:{value:e.editForm.originalPrice,callback:function(t){e.$set(e.editForm,"originalPrice",t)},expression:"editForm.originalPrice"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"描述",prop:"description"}},[n("el-input",{model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"产品名",prop:"name"}},[n("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态",prop:"delivery"}},[n("el-switch",{model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("editForm")}}},[e._v("提交修改")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("editForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(_,h,!1,function(e){n("9os9")},"data-v-ce9b3d6a",null).exports,x={componenets:{productList:g},data:function(){return{editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}},methods:{handleTabsEdit:function(e,t){if("add"===t){var n=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:n,content:"New Tab content"}),this.editableTabsValue=n}if("remove"===t){var a=this.editableTabs,i=this.editableTabsValue;i===e&&a.forEach(function(t,n){if(t.name===e){var l=a[n+1]||a[n-1];l&&(i=l.name)}}),this.editableTabsValue=i,this.editableTabs=a.filter(function(t){return t.name!==e})}}}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tabs",{attrs:{type:"card",editable:""},on:{edit:e.handleTabsEdit},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,function(e,t){return n("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}})}))],1)},staticRenderFns:[]},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("我的工作台\n")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[e._v("订单管理")])])],1)],1)},staticRenderFns:[]},k={name:"App",components:{Welcome:r,SideBar:c,HeadTop:u,Tabs:n("VU/8")(x,F,!1,null,null,null).exports,HeadNav:n("VU/8")(null,T,!1,null,null,null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-row",[t("side-bar",{attrs:{id:"sideBar"}}),this._v(" "),t("div",{staticStyle:{"padding-left":"300px"}},[t("head-nav"),this._v(" "),t("tabs"),this._v(" "),t("welcome"),this._v(" "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var y=n("VU/8")(k,w,!1,function(e){n("iSEs")},null,null).exports,$=n("/ocq"),E=n("zL8q"),V=n.n(E),C=(n("tvR6"),{components:{HeadTop:u,Child:b},data:function(){return{item:[{title:"分类",path:"/category"}]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}}),P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("head-top",{attrs:{titleItemtest:this.item}}),this._v(" "),t("div",{attrs:{id:"content"}})],1)},staticRenderFns:[]};var R=n("VU/8")(C,P,!1,function(e){n("C3ys")},"data-v-64bff000",null).exports,S={components:{HeadTop:u},data:function(){return{item:[{title:"秒杀",path:"/kill"}]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"kill"}},[t("head-top",{attrs:{titleItemtest:this.item}})],1)},staticRenderFns:[]};var D=n("VU/8")(S,U,!1,function(e){n("UEvw")},"data-v-1c7d4f4c",null).exports;a.default.use(V.a),a.default.use($.a);var O=new $.a({routes:[{path:"/",name:"Category",component:R},{path:"/category",name:"Category",component:R},{path:"/product",name:"product",component:g},{path:"/kill",name:"kill",component:D}]}),H=n("8+8L");a.default.use(H.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:O,components:{App:y},template:"<App/>"})},PWZZ:function(e,t){},UEvw:function(e,t){},cScE:function(e,t){},iSEs:function(e,t){},sfy8:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4802b8c784fd62c0b9f1.js.map