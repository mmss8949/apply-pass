(function(){"use strict";var e={95:function(e,t,a){var s=a(144),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",{staticClass:"pa-3"},[a("v-overlay",{attrs:{value:e.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),a("v-stepper",{attrs:{"alt-labels":""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{step:"1",complete:e.step>1}},[e._v(" 可申請車輛 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"2",complete:e.step>2}},[e._v(" 同意書 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3",complete:e.step>3}},[e._v(" 申請項目 ")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"4",complete:e.step>4}},[e._v(" 填寫資料 ")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},[a("v-spacer"),e.passData.button&&1==e.passData.button.restrict_btn.rules.vshow?a("v-btn",{staticClass:"mr-2",attrs:{color:"error",outlined:"",disabled:e.passData.button&&1==e.passData.button.restrict_btn.rules.disabled},on:{click:function(t){return e.controllDialog(!0,1,"","")}}},[e._v(" 違規紀錄 ")]):e._e(),e.passData.button&&1==e.passData.button.test_btn.rules.vshow?a("v-btn",{attrs:{color:"primary",disabled:e.passData.button&&1==e.passData.button.test_btn.rules.disabled},on:{click:function(t){return e.nextStep(1)}}},[e._v(" 交通安全測驗 ")]):e._e()],1),e._l(e.passData.vehicle_license_list,(function(t,s){return a("v-hover",{key:s,scopedSlots:e._u([{key:"default",fn:function(r){var n=r.hover;return[a("v-row",{staticClass:"row-border hover-bd-l-color py-lg-4 pr-lg-0 py-md-2 pr-md-0 py-5 pr-2 pl-2 mr-3",attrs:{"no-gutters":""}},[a("v-col",{attrs:{lg:"3",md:"3",cols:"12"}},[a("div",{style:{"font-size":"30px","line-height":"40px","font-weight":n?"bold":"normal"}},[e._v(" "+e._s(t.info.plate_number)+" ")])]),a("v-col",{attrs:{lg:"2",md:"2",cols:"4"}},[a("div",{staticClass:"d-flex pa-0 pr-3",staticStyle:{"font-size":"23px","line-height":"40px"}},[e._v(" "+e._s(t.info.brand))])]),a("v-col",{attrs:{lg:"1",md:"1",cols:"4"}},[a("div",{staticClass:"d-flex pa-0 pr-3",staticStyle:{"font-size":"23px","line-height":"40px"}},[e._v(" "+e._s(t.info.color))])]),a("v-col",{attrs:{lg:"1",md:"1",cols:"4"}},[a("div",{staticClass:"d-flex pa-0 pr-3",staticStyle:{"font-size":"23px","line-height":"40px"}},[e._v(" "+e._s(e.changeCategoryToString(t.info.vehicle_category)))])]),a("v-col",{staticClass:"d-flex justify-end",attrs:{lg:"5",md:"5",cols:"12"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-7",style:"1"==t.app_restrictions.driver_license_pass?"cursor:pointer":"cursor:not-allowed",attrs:{size:"35",color:n&&"1"==t.app_restrictions.driver_license_pass?"black":"grey"},on:{click:function(a){return e.applyPassData(s,t)}}},"v-icon",l,!1),o),[e._v("mdi-clipboard-edit-outline ")])]}}],null,!0)},[a("span",[e._v("申請")])])],1)],1)]}}],null,!0)})})),e.passData&&e.passData.vehicle_license_list&&0==e.passData.vehicle_license_list.length?a("v-alert",{attrs:{type:"info",text:""}},[e._v(" 無資料 ")]):e._e()],2),a("v-stepper-content",{attrs:{step:"2"}},[e.passData.vehicle_license_list&&0!=e.passData.vehicle_license_list.length?a("div",e._l(e.passData.vehicle_license_list[e.currentPassDataIndex].app_step,(function(t,s){return a("div",{key:s},[s==e.currentPDFIndex?a("div",{staticClass:"mb-12"},[a("v-card-title",{staticClass:"text-h5"},[e._v(" "+e._s(t.title)+" ")]),a("v-card-text",[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("embed",{attrs:{width:"100%",height:"800",src:e.testMode?"https://drive.google.com/viewerng/viewer?embedded=true&url=https://dev.dyu.edu.tw/dyupass/main/"+t.src:t.src}})])],1)],1):e._e()])})),0):e._e(),a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.nextStep(1)}}},[e._v(" 上一步 ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.nextPDF(e.currentPDFIndex)}}},[e._v(" 我已詳閱，並且同意 ")])],1)],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-row",{staticClass:"mt-2",attrs:{"no-gutters":"",justify:"space-between",align:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"5",sm:"5"}},[a("v-select",{attrs:{items:e.years,"item-text":"canapp_smye","item-value":"canapp_smye",label:"申請學年",outlined:""},model:{value:e.form.app_smye,callback:function(t){e.$set(e.form,"app_smye",t)},expression:"form.app_smye"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"5",sm:"5"}},[a("v-select",{attrs:{items:e.passes,"item-text":"text","item-value":"value",label:"通行證類別",outlined:"",disabled:0==e.form.app_smye.length},model:{value:e.form.app_pass_type,callback:function(t){e.$set(e.form,"app_pass_type",t)},expression:"form.app_pass_type"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.prePDF()}}},[e._v(" 上一步 ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.nextForm()}}},[e._v(" 下一步 ")])],1)],1),a("v-stepper-content",{attrs:{step:"4"}},[a("v-row",{staticClass:"text-h6 mb-2",attrs:{"no-gutters":""}},[e._v("請確認申請項目")]),e.passData.vehicle_license_list&&0!=e.passData.vehicle_license_list.length?a("v-form",{staticClass:"mt-2",attrs:{"lazy-validation":"",readonly:""}},[a("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-text-field",{staticClass:"readonly-field",attrs:{label:"車號",outlined:""},model:{value:e.form.plate_number,callback:function(t){e.$set(e.form,"plate_number",t)},expression:"form.plate_number"}})],1),a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-select",{staticClass:"readonly-field",attrs:{items:e.info.vehicle_category,"item-text":"code_value","item-value":"code_no",label:"車子類別",outlined:""},model:{value:e.passData.vehicle_license_list[e.currentPassDataIndex].info.vehicle_category,callback:function(t){e.$set(e.passData.vehicle_license_list[e.currentPassDataIndex].info,"vehicle_category",t)},expression:"passData.vehicle_license_list[currentPassDataIndex].info.vehicle_category"}})],1)],1),a("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-select",{staticClass:"readonly-field",attrs:{items:e.years,"item-text":"canapp_smye","item-value":"canapp_smye",label:"申請學年",outlined:""},model:{value:e.form.app_smye,callback:function(t){e.$set(e.form,"app_smye",t)},expression:"form.app_smye"}})],1),a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-select",{staticClass:"readonly-field",attrs:{items:e.passes,"item-text":"text","item-value":"value",label:"通行證類別",outlined:""},model:{value:e.form.app_pass_type,callback:function(t){e.$set(e.form,"app_pass_type",t)},expression:"form.app_pass_type"}})],1)],1)],1):e._e(),a("v-row",{staticClass:"text-h6 mb-2",attrs:{"no-gutters":""}},[e._v("請填寫聯絡人資料")]),a("v-form",{attrs:{"lazy-validation":""}},[a("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-text-field",{attrs:{label:"*聯絡人姓名",outlined:"",rules:[e.form.rules.required]},model:{value:e.form.app_uname,callback:function(t){e.$set(e.form,"app_uname",t)},expression:"form.app_uname"}})],1),a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-text-field",{attrs:{label:"*聯絡人mail",outlined:"",rules:[e.form.rules.required,e.form.rules.email]},model:{value:e.form.app_umail,callback:function(t){e.$set(e.form,"app_umail",t)},expression:"form.app_umail"}})],1)],1),a("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{attrs:{lg:"5",cols:"12"}},[a("v-text-field",{attrs:{label:"*聯絡人手機",outlined:"",rules:[e.form.rules.required],maxlength:"10"},model:{value:e.form.app_cellphone,callback:function(t){e.$set(e.form,"app_cellphone",t)},expression:"form.app_cellphone"}})],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.nextStep(3)}}},[e._v(" 上一步 ")]),a("v-btn",{attrs:{color:"primary"},on:{click:e.postPassData}},[e._v(" 送出 ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"400"},model:{value:e.dialog.show,callback:function(t){e.$set(e.dialog,"show",t)},expression:"dialog.show"}},[0==e.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" "+e._s(e.dialog.title)+" ")]),a("v-card-text",{staticClass:"text-h6"},[e._v(" "+e._s(e.dialog.msg)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog.show=!1}}},[e._v(" close ")])],1)],1):1==e.dialog.index?a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" 違規紀錄 ")]),a("v-card-text",e._l(e.passData.button.restrict_btn.vr_data,(function(t,s){return a("v-list-item",{key:t+s,staticClass:"px-0",attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.vr_smye)+e._s(t.vr_smty)+" - "+e._s(t.vr_penalty))]),a("v-list-item-subtitle",[e._v(" "+e._s(t.vr_date)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(t.vr_note)+" ")])],1)],1)})),1),a("v-card-actions",[a("v-row",{attrs:{"no-gutters":""}},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.controllDialog(!1,0,"","")}}},[e._v(" close ")])],1)],1)],1):e._e()],1)],1)],1)},n=[],o=(a(1703),a(9669)),l=a.n(o),i={name:"App",components:{},data:()=>({testMode:!1,target:`gGroups_i=${gGroups}&gSys_s=${gSys_s}&gFunc_s=${gFunc_s}`,themeColor:"",overlay:!1,step:1,valid:!0,passData:[],currentPassDataIndex:0,currentPDFIndex:0,completedData:[],notCompletedData:[],form:{app_smye:"",app_pass_type:"",plate_number:"",vehicle_category:"",app_uname:"",app_umail:"",app_cellphone:"",rules:{required:e=>!!e||"Required.",symbol:e=>!/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(e)||"請不要輸入符號",upAndNumber:e=>/^[A-Z\d]*$/.test(e)||"請輸入大寫與數字",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}}},info:{app_pass_type:[],vr_data:[],vehicle_category:[],approval_status:[],violation_msg:[],alert_msg:[],driver_license_pass_msg:[]},dialog:{index:0,show:!1,title:"",msg:""}}),created(){const e=this;-1!=location.href.indexOf("localhost")||-1!=location.href.indexOf("mmss8949")?e.testMode=!0:e.testMode=!1},mounted(){const e=this;var t=()=>{var t=function(e){var t;switch(e){case"blue":t="#3b5998";break;case"green":t="#098c6e";break;case"red":t="#b72e4a";break;case"highway":t="#c60";break;case"violet":t="#8b00ff";break}return t};window.localStorage.getItem("_client_color")?e.themeColor=t(window.localStorage.getItem("_client_color")):e.themeColor=t(window.localStorage.getItem("_default_color"))};t(),window.addEventListener("storage",(()=>{t()})),e.mainProcess()},updated(){const e=this;e.updateHeight()},computed:{years:function(){const e=this;var t=[],a=Date.now();if(e.passData.vehicle_license_list&&0!=e.passData.vehicle_license_list.length){var s=e.passData.vehicle_license_list[e.currentPassDataIndex].app_restrictions;s.rules.forEach((e=>{var s=Date.parse(e.canapp_date_b),r=Date.parse(e.canapp_date_e);s<=a&&r>=a&&t.push(e)}))}return t},passes:function(){const e=this;var t=[],a=Date.now();return e.passData.vehicle_license_list&&0!=e.passData.vehicle_license_list.length&&0!=e.form.app_smye.length&&e.years.forEach((s=>{var r=Date.parse(s.canapp_date_b),n=Date.parse(s.canapp_date_e);if(r<=a&&n>=a&&s.canapp_smye==e.form.app_smye){var o={};o.value=s.canapp_pass_type;var l=e.changePassTypeToString(s.canapp_pass_type);o.text=l.code_value,t.push(o)}})),t}},methods:{mainProcess:async function(){const e=this;try{var t,a;e.overlay=!0,a=e.checkURL(),t=await e.getPassInfo(),e.setPassInfo(t);var s,r=await e.getPassData();if(1==r.result?e.passData=r.data:e.testMode?e.passData=r:parent.sysDisplayMessage("",-1,"","",null,r.msg),!e.testMode&&a.state)e.changeMenu(),s=e.passData.vehicle_license_list.findIndex((e=>e.info.plate_number==a.value)),-1!=s?e.applyPassData(s,e.passData.vehicle_license_list[s]):parent.sysDisplayMessage("",-1,"","",null,"無相符車牌號碼");e.overlay=!1}catch(n){throw new Error(n)}},nextStep:function(e){const t=this;t.step=e},prePDF:function(){const e=this;e.currentPDFIndex=0,e.nextStep(2)},nextPDF:function(e){const t=this;e<t.passData.vehicle_license_list[t.currentPassDataIndex].app_step.length-1?t.currentPDFIndex+=1:t.nextStep(3)},nextForm:function(){const e=this;var t=!1;t=e.checkApplyItem(),t?(e.setForm(),e.nextStep(4)):e.controllDialog(!0,0,"Message","請選擇申請項目")},controllDialog:function(e,t,a,s){const r=this;r.dialog.show=e,r.dialog.index=t,r.dialog.title=a,r.dialog.msg=s},getFullURL:function(e){var t="",a="https://drive.google.com/viewerng/viewer?embedded=true&url=",s=window.location.href,r=s.split("/").pop(),n="";return n=s.replace(r,""),t=a+n+e,t},checkURL:function(){var e=new URL(location.href),t=e.searchParams,a=t.has("plate_number"),s="";return a&&(s=t.get("plate_number")),{state:a,value:s}},changeMenu:function(){var e="通行證 > 我要申請",t=parent.document.getElementsByClassName("locationText")[0];t.innerText=e},changeCategoryToString:function(e){const t=this;var a,s="";return a=t.info.vehicle_category.findIndex((t=>t.code_no==parseInt(e))),s=t.info.vehicle_category[a].code_value,s},changePassTypeToString:function(e){const t=this;var a="";return a=t.info.app_pass_type.find((t=>e==t.code_no)),a},getForm:function(){const e=this;var t=e.form,a={};return a.plate_number=t.plate_number,a.vehicle_category=t.vehicle_category,a.app_smye=t.app_smye,a.app_pass_type=t.app_pass_type,a.app_uname=t.app_uname,a.app_umail=t.app_umail,a.app_cellphone=t.app_cellphone,a},setForm:function(){const e=this;var t=e.form,a=e.passData.vehicle_license_list[this.currentPassDataIndex];t.plate_number=a.info.plate_number,t.vehicle_category=a.info.vehicle_category,t.app_uname=a.info.app_uname,t.app_umail=a.info.app_umail,t.app_cellphone=a.info.app_cellphone},clearForm:function(){const e=this;var t=e.form;t.app_smye="",t.app_pass_type="",t.plate_number="",t.vehicle_category="",t.app_uname="",t.app_umail="",t.app_cellphone=""},checkApplyItem:function(){const e=this;var t=!1;return t=0!=e.form.app_smye.length&&0!=e.form.app_pass_type.length,t},checkForm:function(){const e=this;var t=e.form,a=!1,s=!1,r=!1,n=e.form.rules;return a=1==n.required(t.app_smye)&&1==n.required(t.app_pass_type)&&1==n.required(t.app_uname)&&1==n.required(t.app_umail)&&1==n.required(t.app_cellphone),s=1==n.symbol(t.app_smye)&&1==n.symbol(t.app_pass_type)&&1==n.symbol(t.app_uname)&&1==n.symbol(t.app_cellphone),r=1==n.email(t.app_umail),console.log(a,s,r),a&&s&&r},getPassData:function(){const e=this;return new Promise(((t,a)=>{e.testMode?l().get("./dyupass_app/tools/json/dyupass_list_oci.json?"+Math.random()).then((e=>{t(e.data.data)})).catch((e=>{parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-102"),a(e)})):l().get("../kernel/dyupass_app_list_oci.php?"+e.target).then((e=>{t(e.data)})).catch((e=>{parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-102"),a(e)}))}))},postPassData:function(){const e=this;var t;e.overlay=!0;var a=e.checkForm();t=e.getForm(),e.testMode?(a?console.log(t):alert("field can't be empty or symbol"),e.overlay=!1):a?l().post("../kernel/dyupass_appfrom_save.php?"+e.target,t).then((async t=>{1==t.data.result?(parent.sysDisplayMessage("",0,"","",null,"新增成功"),location.href="./dyupass_apped_list.php?"+e.target):parent.sysDisplayMessage("",-1,"","",null,"新增失敗: "+t.data.msg),e.overlay=!1})).catch((e=>console.log(e))):(parent.sysDisplayMessage("",-1,"","",null,"欄位有誤"),e.overlay=!1)},getPassInfo:function(){const e=this;return new Promise(((t,a)=>{e.testMode?l().get("./dyupass_app/tools/json/dyupass_tw.json?"+Math.random()).then((e=>{t(e.data)})).catch((e=>{parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-101"),a(e)})):l().get("../json/tw/dyupass_tw.json?"+Math.random()).then((e=>{t(e.data)})).catch((e=>{parent.sysDisplayMessage("",-1,"","",null,"取得資訊失敗:-101"),a(e)}))}))},setPassInfo:function(e){const t=this;t.info.app_pass_type=e.app_pass_type,t.info.vr_data=e.vr_data,t.info.vehicle_category=e.vehicle_category,t.info.approval_status=e.approval_status,t.info.violation_msg=e.violation_msg,t.info.alert_msg=e.alert_msg,t.info.driver_license_pass_msg=e.driver_license_pass_msg},applyPassData:function(e,t){const a=this;if("1"==t.app_restrictions.driver_license_pass)a.currentPassDataIndex=e,a.nextStep(2);else if(t.app_restrictions.driver_license_pass_msg){var s="",r="";r=a.info.driver_license_pass_msg.find((e=>parseInt(t.app_restrictions.driver_license_pass_msg)==e.code_no)),s=r.code_value,a.controllDialog(!0,0,"Message",s)}},updateHeight:function(){const e=this;e.$nextTick((()=>{setTimeout((()=>{if(document.getElementById("app").scrollHeight>900){var e=document.body.scrollHeight+1;window.parent.postMessage('{"event": "changeHeight", "value": '+e+"}","*")}}),1e3)}))}}},p=i,c=a(1001),u=a(3453),_=a.n(u),v=a(9602),d=a(303),m=a(9787),f=a(2026),h=a(5255),g=a(7024),y=a(9257),b=a(5596),x=a(3240),D=a(9657),w=a(4456),k=a(907),C=a(7108),P=a(927),S=a(8913),I=a(3297),Z=a(7894),V=a(6180),M=a(6946),F=a(2577),j=a(34),T=a(2280),$=a(2976),O=a(2660),q=a(127),z=(0,c.Z)(p,r,n,!1,null,"01e4fe23",null),A=z.exports;_()(z,{VAlert:v.Z,VApp:d.Z,VBtn:m.Z,VCard:f.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VCol:g.Z,VDialog:y.Z,VDivider:b.Z,VForm:x.Z,VHover:D.Z,VIcon:w.Z,VListItem:k.Z,VListItemContent:C.km,VListItemSubtitle:C.oZ,VListItemTitle:C.V9,VMain:P.Z,VOverlay:S.Z,VProgressCircular:I.Z,VRow:Z.Z,VSelect:V.Z,VSpacer:M.Z,VStepper:F.Z,VStepperContent:j.Z,VStepperHeader:T.Rp,VStepperItems:T.gd,VStepperStep:$.Z,VTextField:O.Z,VTooltip:q.Z});var E=a(5121);s.Z.use(E.Z);var L=new E.Z({});s.Z.config.productionTip=!1,new s.Z({vuetify:L,render:e=>e(A)}).$mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,n){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var p=r();void 0!==p&&(t=p)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,o=s[0],l=s[1],i=s[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var c=i(a)}for(t&&t(s);p<o.length;p++)n=o[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},s=self["webpackChunkdyupass_app"]=self["webpackChunkdyupass_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(95)}));s=a.O(s)})();
//# sourceMappingURL=app.1f14aa61.js.map