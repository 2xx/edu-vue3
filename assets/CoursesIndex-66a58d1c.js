import{E}from"./index-454643d3.js";import{E as z}from"./el-card-80e98f78.js";import{E as I}from"./el-pagination-912f9994.js";import{E as $}from"./el-input-c28d0f82.js";/* empty css               */import{E as h,a as N}from"./el-select-a246b828.js";import"./el-popper-4f7320ad.js";import{E as S,a as U}from"./el-table-column-33d9e1db.js";import"./el-checkbox-55230050.js";import"./el-tooltip-4ed993c7.js";import{E as B}from"./el-switch-22815cd1.js";import{E as P,a as q}from"./el-form-item-47cac641.js";import{E as T}from"./users-4d3745c7.js";import{g as j,c as F}from"./courses-c195e35d.js";import{K as C,d as O,o as D,c as K,w as a,Z as M,a as e,u as l,ad as f}from"./runtime-core.esm-bundler-d5958d54.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-309dffdd.js";import"./isEqual-a9ed7f07.js";import"./_Uint8Array-d1f10f11.js";import"./scroll-3e4250e8.js";import"./index-8a559d97.js";import"./_initCloneObject-c4f14d92.js";import"./flatten-5a56c86a.js";const s=C({currentPage:1,pageSize:5,status:""}),n=C({}),g=async(b={})=>{Object.assign(s.value,b);const{data:u}=await j(s.value);if(u.code==="000000")n.value=u.data,console.log(u.data);else throw E.error("获取课程列表信息失败..."),new Error("获取课程列表信息失败..."+u.mesg)},R={class:"card-header"},Z=O({__name:"CoursesIndex",setup(b){g(),console.log(n);const u=async(r,t)=>{const i=[{msg:"下架",oldVal:1},{msg:"上架",oldVal:0}],m=()=>{throw t.status=i[r].oldVal,E.error(`${i[r].msg}失败`),new Error(`${i[r].msg}失败`)};console.log(r,t);const{data:d}=await F(t.id,r).catch(m);d.code==="000000"?E.success(`${i[r].msg}成功`):m()};return(r,t)=>{const i=$,m=P,d=h,v=N,_=T,V=q,p=S,y=B,x=U,k=I,w=z;return D(),K(w,{class:"box-card"},{header:a(()=>[M("div",R,[e(V,{inline:!0,model:l(s),class:"demo-form-inline"},{default:a(()=>[e(m,{label:"课程名称"},{default:a(()=>[e(i,{clearable:"",modelValue:l(s).courseName,"onUpdate:modelValue":t[0]||(t[0]=o=>l(s).courseName=o),placeholder:"课程名称"},null,8,["modelValue"])]),_:1}),e(m,{label:"状态"},{default:a(()=>[e(v,{modelValue:l(s).status,"onUpdate:modelValue":t[1]||(t[1]=o=>l(s).status=o),placeholder:""},{default:a(()=>[e(d,{label:"全部",value:""}),e(d,{label:"上架",value:1}),e(d,{label:"下架",value:0})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[e(_,{type:"primary",onClick:t[2]||(t[2]=()=>l(g)({currentPage:1}))},{default:a(()=>[f("查询")]),_:1})]),_:1})]),_:1},8,["model"]),e(_,{type:"primary",onClick:t[3]||(t[3]=o=>r.$router.push({name:"course-create"}))},{default:a(()=>[f("新建课程")]),_:1})])]),default:a(()=>[e(x,{data:l(n).records,border:"",style:{width:"100%"}},{default:a(()=>[e(p,{prop:"id",label:"ID",width:"180",align:"center"}),e(p,{prop:"courseName",label:"课程名称",align:"center"}),e(p,{prop:"price",label:"价格",align:"center"}),e(p,{prop:"sortNum",label:"排序",align:"center"}),e(p,{prop:"status",label:"状态",align:"center"},{default:a(({row:o})=>[e(y,{modelValue:o.status,"onUpdate:modelValue":c=>o.status=c,class:"mb-2","active-text":"上架","inactive-text":"下架","active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0,onChange:c=>u(c,o)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(p,{label:"操作",align:"center"},{default:a(({row:o})=>[e(_,{type:"default",onClick:c=>r.$router.push({name:"course-edit",params:{courseId:o.id}})},{default:a(()=>[f("编辑")]),_:2},1032,["onClick"]),e(_,{type:"default",onClick:c=>r.$router.push({name:"course-content",params:{courseId:o.id}})},{default:a(()=>[f("内容管理")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(k,{"current-page":l(n).current,"onUpdate:current-page":t[4]||(t[4]=o=>l(n).current=o),"page-size":l(n).size,"onUpdate:page-size":t[5]||(t[5]=o=>l(n).size=o),"page-sizes":[5,10,20,50],background:!0,layout:"total, sizes, prev, pager, next, jumper",total:l(n).total||0,onSizeChange:t[6]||(t[6]=o=>l(g)({pageSize:o,currentPage:1})),onCurrentChange:t[7]||(t[7]=o=>l(g)({currentPage:o}))},null,8,["current-page","page-size","total"])]),_:1})}}});const fe=Q(Z,[["__scopeId","data-v-214f4d2f"]]);export{fe as default};
