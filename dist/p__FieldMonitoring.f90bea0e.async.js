"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[670],{78745:function(C,P,a){a.r(P);var I=a(15009),c=a.n(I),j=a(97857),o=a.n(j),h=a(99289),O=a.n(h),x=a(67294),i=a(2453),t=a(8232),u=a(55102),f=a(33833),Y=a(14726),d=a(45433),b=a(27484),s=a.n(b),v=a(10285),A=a.n(v),e=a(85893);s().extend(A());var y=d.default.RangePicker,_="YYYY/MM/DD",g="MM/DD",Z="YYYY/MM",R=null,W=function(l){return"custom format: ".concat(l.format(_))},B=function(l){return"".concat(dayjs(l).startOf("week").format(g)," ~ ").concat(dayjs(l).endOf("week").format(g))},F={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},T=function(){var m=O()(c()().mark(function l(n){var D,p,E,M;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(D=o()(o()({},n),{},{expected_date_of_harvest:n.expected_date_of_harvest?s()(n.expected_date_of_harvest).format("YYYY-MM-DD"):void 0,date_of_weeding:n.date_of_weeding?s()(n.date_of_weeding).format("YYYY-MM-DD"):void 0,date_of_spraying:n.date_of_spraying?s()(n.date_of_spraying).format("YYYY-MM-DD"):void 0,date_of_planting:n.date_of_planting?s()(n.date_of_planting).format("YYYY-MM-DD"):void 0}),console.log(D),r.prev=2,p=localStorage.getItem("awesomeleadstoken"),p){r.next=7;break}return i.ZP.error("No token found, please login again"),r.abrupt("return");case 7:return r.next=9,fetch("http://52.206.183.121:8000/fieldofficer/fieldmonitoring",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(p)},body:JSON.stringify(D)});case 9:if(E=r.sent,!E.ok){r.next=14;break}i.ZP.success("Form submitted successfully"),r.next=19;break;case 14:return r.next=16,E.json();case 16:M=r.sent,console.error("API Error:",M),i.ZP.error(M.message||"Failed to submit the form");case 19:r.next=25;break;case 21:r.prev=21,r.t0=r.catch(2),console.error("Submission error:",r.t0),i.ZP.error("An error occurred while submitting the form");case 25:case"end":return r.stop()}},l,null,[[2,21]])}));return function(n){return m.apply(this,arguments)}}(),K=[{value:"male",label:"Male"},{value:"female",label:"Female"}],L=function(){return(0,e.jsxs)(t.Z,o()(o()({},F),{},{onFinish:T,style:{maxWidth:600},children:[(0,e.jsx)(t.Z.Item,{label:"Farmer ID",name:"farmer_id",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(u.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"Date Of Planting",name:"date_of_planting",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(d.default,{defaultValue:s()("2024/01/01",_),format:_})}),(0,e.jsx)(t.Z.Item,{label:"% Germination ",name:"germination_percentage",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(u.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"Intercropping",name:"intercropping",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(f.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"InterCropping Details",name:"intercrop_details",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(f.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"Date Of weeding",name:"date_of_weeding",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(d.default,{defaultValue:s()("2024/01/01",_),format:_})}),(0,e.jsx)(t.Z.Item,{label:"Disease Incidence",name:"disease_incidence",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(f.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"Pest Incidence",name:"pest_incidence",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(u.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"Date Of spraying",name:"date_of_spraying",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(d.default,{defaultValue:s()("2024/01/01",_),format:_})}),(0,e.jsx)(t.Z.Item,{label:"Harvest Date",name:"expected_date_of_harvest",rules:[{required:!0,message:"Please input!"}],children:(0,e.jsx)(d.default,{defaultValue:s()("2024/01/01",_),format:_})}),(0,e.jsx)(t.Z.Item,{wrapperCol:{offset:6,span:16},children:(0,e.jsx)(Y.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})]}))};P.default=L}}]);
