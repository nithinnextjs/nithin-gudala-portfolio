(function(){"use strict";var e={802:function(e,a,t){var n=t(5130),o=t(6768);const i={class:""};function l(e,a,t,n,l,s){const c=(0,o.g2)("AppNavigation"),d=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(c),(0,o.Lk)("main",i,[(0,o.bF)(d)]),a[0]||(a[0]=(0,o.Lk)("footer",{class:"bg-gray-800 text-white p-4 text-center"},[(0,o.Lk)("p",null,"© 2024 My Vue App")],-1))])}var s=t.p+"img/nithin_logo.f5bd8e0b.jpg";const c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},d={class:"container-fluid"},r={class:"collapse navbar-collapse justify-content-center",id:"navbarNav"},p={class:"navbar-nav"},v={class:"nav-item"},u={class:"nav-item"},b={class:"nav-item"},m={class:"nav-item"},g={class:"nav-item"},f={class:"nav-item"};function k(e,a,t,n,i,l){const k=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",c,[(0,o.Lk)("div",d,[a[6]||(a[6]=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},[(0,o.Lk)("img",{src:s,alt:"Logo",class:"logo"})],-1)),a[7]||(a[7]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",r,[(0,o.Lk)("ul",p,[(0,o.Lk)("li",v,[(0,o.bF)(k,{to:"/",class:"nav-link"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",u,[(0,o.bF)(k,{to:"/about",class:"nav-link"},{default:(0,o.k6)((()=>a[1]||(a[1]=[(0,o.eW)("About")]))),_:1})]),(0,o.Lk)("li",b,[(0,o.bF)(k,{to:"/contact",class:"nav-link"},{default:(0,o.k6)((()=>a[2]||(a[2]=[(0,o.eW)("Contact")]))),_:1})]),(0,o.Lk)("li",m,[(0,o.bF)(k,{to:"/Resume",class:"nav-link"},{default:(0,o.k6)((()=>a[3]||(a[3]=[(0,o.eW)("Resume")]))),_:1})]),(0,o.Lk)("li",g,[(0,o.bF)(k,{to:"/education",class:"nav-link"},{default:(0,o.k6)((()=>a[4]||(a[4]=[(0,o.eW)("Education")]))),_:1})]),(0,o.Lk)("li",f,[(0,o.bF)(k,{to:"/experience",class:"nav-link"},{default:(0,o.k6)((()=>a[5]||(a[5]=[(0,o.eW)("Experiences")]))),_:1})])])]),a[8]||(a[8]=(0,o.Lk)("a",{href:"/download",class:"btn btn-logo ms-3"},[(0,o.Lk)("i",{class:"fas fa-file-pdf me-2"}),(0,o.eW)(" Resume Download ")],-1)),a[9]||(a[9]=(0,o.Lk)("a",{href:"https://www.linkedin.com/in/nithin-gudala/",class:"btn btn-linkedin ms-3",target:"_blank",rel:"noopener noreferrer"},[(0,o.Lk)("i",{class:"fab fa-linkedin me-2"}),(0,o.eW)(" LinkedIn ")],-1))])])}var h={name:"AppNavigation"},x=t(1241);const L=(0,x.A)(h,[["render",k],["__scopeId","data-v-42b3083f"]]);var y=L,w={name:"App",components:{AppNavigation:y}};const _=(0,x.A)(w,[["render",l],["__scopeId","data-v-2ebe208e"]]);var E=_,j=t(1387),S=t(4232);const C={id:"app"};function M(e,a,t,n,i,l){return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("section",{style:(0,S.Tr)(l.backgroundStyle),class:"my-section"},a[0]||(a[0]=[(0,o.Lk)("h1",null,"Welcome to My Vue Section",-1),(0,o.Lk)("p",null,"This is a simple section with a background image.",-1)]),4)])}var D={name:"HomeProfile",data(){return{backgroundImageUrl:t(8027)}},computed:{backgroundStyle(){return{backgroundImage:`url(${this.backgroundImageUrl})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",height:"500px",color:"white",textAlign:"center",padding:"20px"}}}};const I=(0,x.A)(D,[["render",M],["__scopeId","data-v-71117a71"]]);var F=I;const A={id:"work-experience"},H={class:"experience-list"},W={class:"card-content"},V={class:"card-text"},T={class:"job-title"},O={class:"company-name"},J={class:"employment-period"},X={class:"job-description"},G=["onClick"],P={class:"card-image"},N=["src"],R={class:"company-name"},B={class:"employment-period"},$={class:"job-description"},K=["src"];function U(e,a,t,n,i,l){const s=(0,o.g2)("Modal");return(0,o.uX)(),(0,o.CE)("section",A,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Work Experience",-1)),(0,o.Lk)("div",H,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.workExperiences,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"experience-card"},[(0,o.Lk)("div",W,[(0,o.Lk)("div",V,[(0,o.Lk)("h3",T,(0,S.v_)(e.title),1),(0,o.Lk)("p",O,(0,S.v_)(e.company),1),(0,o.Lk)("p",J,(0,S.v_)(e.period),1),(0,o.Lk)("p",X,(0,S.v_)(e.description),1),(0,o.Lk)("button",{onClick:a=>l.openModal(e),class:"read-more-btn"},"Read More",8,G)]),(0,o.Lk)("div",P,[(0,o.Lk)("img",{src:e.image,alt:"Job Image"},null,8,N)])])])))),128))]),(0,o.bF)(s,{"is-visible":i.isModalVisible,onClose:l.closeModal},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,(0,S.v_)(i.selectedExperience?.title),1),(0,o.Lk)("p",R,(0,S.v_)(i.selectedExperience?.company),1),(0,o.Lk)("p",B,(0,S.v_)(i.selectedExperience?.period),1),(0,o.Lk)("p",$,(0,S.v_)(i.selectedExperience?.description),1),(0,o.Lk)("img",{src:i.selectedExperience?.image,alt:"Job Image",class:"modal-image"},null,8,K)])])),_:1},8,["is-visible","onClose"])])}const z={key:0,class:"modal-overlay"},Q={class:"modal-content"},q={class:"modal-header"},Y={class:"modal-body"},Z={class:"modal-footer"};function ee(e,a,t,n,i,l){return t.isVisible?((0,o.uX)(),(0,o.CE)("div",z,[(0,o.Lk)("div",Q,[(0,o.Lk)("div",q,[a[2]||(a[2]=(0,o.Lk)("h3",{class:"modal-title"},"Modal Title",-1)),(0,o.Lk)("button",{class:"close-btn",onClick:a[0]||(a[0]=(...e)=>l.close&&l.close(...e))}," × ")]),(0,o.Lk)("div",Y,[(0,o.RG)(e.$slots,"default",{},void 0,!0)]),(0,o.Lk)("div",Z,[(0,o.Lk)("button",{class:"footer-btn",onClick:a[1]||(a[1]=(...e)=>l.close&&l.close(...e))},"Close")])])])):(0,o.Q3)("",!0)}var ae={props:{isVisible:Boolean},methods:{close(){this.$emit("close")}}};const te=(0,x.A)(ae,[["render",ee],["__scopeId","data-v-1245ff32"]]);var ne=te,oe={name:"AboutDetails",components:{Modal:ne},data(){return{isModalVisible:!1,selectedExperience:null,workExperiences:[{title:"Frontend Developer",company:"Tech Innovations",period:"Jan 2022 - Present",description:"Developed and maintained responsive websites using Vue.js.",image:"https://via.placeholder.com/400x250?text=Frontend+Developer+Image"},{title:"Web Developer Intern",company:"Creative Solutions",period:"Jun 2021 - Dec 2021",description:"Assisted in building dynamic web applications using HTML, CSS, JavaScript.",image:"https://via.placeholder.com/400x250?text=Web+Developer+Image"},{title:"Full Stack Developer",company:"Future Tech Ltd.",period:"Jan 2020 - May 2021",description:"Worked on developing full-stack applications with Vue.js and Node.js.",image:"https://via.placeholder.com/400x250?text=Full+Stack+Developer+Image"}]}},methods:{openModal(e){this.selectedExperience=e,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}};const ie=(0,x.A)(oe,[["render",U],["__scopeId","data-v-4968dd6b"]]);var le=ie,se=t.p+"img/education4.4c62b8b5.jpg",ce=t.p+"img/education3.6d0c89d8.jpg",de=t.p+"img/education2.73f61e04.jpg",re=t.p+"img/education1.61d651fc.jpg";const pe={class:"container py-5"};function ve(e,a,t,n,i,l){return(0,o.uX)(),(0,o.CE)("div",pe,a[0]||(a[0]=[(0,o.Fv)('<h1 class="text-center mb-4" data-v-cb35722e>My Education</h1><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+se+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+ce+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+de+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-3" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+re+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div></div></div></div>',5)]))}var ue={name:"EducationDetails"};const be=(0,x.A)(ue,[["render",ve],["__scopeId","data-v-cb35722e"]]);var me=be;const ge={id:"work-experience"},fe={class:"experience-list"},ke={class:"card-content"},he={class:"card-text"},xe={class:"job-title"},Le={class:"company-name"},ye={class:"employment-period"},we={class:"job-description"},_e=["onClick"],Ee={class:"card-image"},je=["src"],Se={class:"company-name"},Ce={class:"employment-period"},Me={class:"job-description"},De=["src"];function Ie(e,a,t,n,i,l){const s=(0,o.g2)("Modal");return(0,o.uX)(),(0,o.CE)("section",ge,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Work Experience",-1)),(0,o.Lk)("div",fe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.workExperiences,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"experience-card"},[(0,o.Lk)("div",ke,[(0,o.Lk)("div",he,[(0,o.Lk)("h3",xe,(0,S.v_)(e.title),1),(0,o.Lk)("p",Le,(0,S.v_)(e.company),1),(0,o.Lk)("p",ye,(0,S.v_)(e.period),1),(0,o.Lk)("p",we,(0,S.v_)(e.description),1),(0,o.Lk)("button",{onClick:a=>l.openModal(e),class:"read-more-btn"},"Read More",8,_e)]),(0,o.Lk)("div",Ee,[(0,o.Lk)("img",{src:e.image,alt:"Job Image"},null,8,je)])])])))),128))]),(0,o.bF)(s,{"is-visible":i.isModalVisible,onClose:l.closeModal},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,(0,S.v_)(i.selectedExperience?.title),1),(0,o.Lk)("p",Se,(0,S.v_)(i.selectedExperience?.company),1),(0,o.Lk)("p",Ce,(0,S.v_)(i.selectedExperience?.period),1),(0,o.Lk)("p",Me,(0,S.v_)(i.selectedExperience?.description),1),(0,o.Lk)("img",{src:i.selectedExperience?.image,alt:"Job Image",class:"modal-image"},null,8,De)])])),_:1},8,["is-visible","onClose"])])}var Fe={name:"ExperienceDetails",components:{Modal:ne},data(){return{isModalVisible:!1,selectedExperience:null,workExperiences:[{title:"Frontend Developer",company:"Tech Innovations",period:"Jan 2022 - Present",description:"Developed and maintained responsive websites using Vue.js.",image:"https://via.placeholder.com/400x250?text=Frontend+Developer+Image"},{title:"Web Developer Intern",company:"Creative Solutions",period:"Jun 2021 - Dec 2021",description:"Assisted in building dynamic web applications using HTML, CSS, JavaScript.",image:"https://via.placeholder.com/400x250?text=Web+Developer+Image"},{title:"Full Stack Developer",company:"Future Tech Ltd.",period:"Jan 2020 - May 2021",description:"Worked on developing full-stack applications with Vue.js and Node.js.",image:"https://via.placeholder.com/400x250?text=Full+Stack+Developer+Image"}]}},methods:{openModal(e){this.selectedExperience=e,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}};const Ae=(0,x.A)(Fe,[["render",Ie],["__scopeId","data-v-e2343068"]]);var He=Ae;const We=[{path:"/",name:"HomeProfile",component:F},{path:"/about",name:"AboutDetails",component:le},{path:"/education",name:"EducationDetails",component:me},{path:"/experience",name:"ExperienceDetails",component:He}],Ve=(0,j.aE)({history:(0,j.LA)(),routes:We});var Te=Ve;t(8077);(0,n.Ef)(E).use(Te).mount("#app")},8027:function(e,a,t){e.exports=t.p+"img/home_bg.7d02d8e9.png"}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var l=1/0;for(r=0;r<e.length;r++){n=e[r][0],o=e[r][1],i=e[r][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(r--,1);var d=o();void 0!==d&&(a=d)}}return a}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/nithin-gudala-portfolio/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,l=n[0],s=n[1],c=n[2],d=0;if(l.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var r=c(t)}for(a&&a(n);d<l.length;d++)i=l[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(r)},n=self["webpackChunknithin_gudala_portfolio"]=self["webpackChunknithin_gudala_portfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(802)}));n=t.O(n)})();
//# sourceMappingURL=app.98665df0.js.map