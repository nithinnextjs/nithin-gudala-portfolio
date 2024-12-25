(function(){"use strict";var e={9900:function(e,a,t){var n=t(5130),o=t(6768);const i={class:"p-4"};function l(e,a,t,n,l,s){const c=(0,o.g2)("AppNavigation"),d=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(c),(0,o.Lk)("main",i,[(0,o.bF)(d)]),a[0]||(a[0]=(0,o.Lk)("footer",{class:"bg-gray-800 text-white p-4 text-center"},[(0,o.Lk)("p",null,"© 2024 My Vue App")],-1))])}var s=t.p+"img/nithin_logo.f5bd8e0b.jpg";const c={class:"navbar navbar-expand-lg navbar-dark bg-dark"};function d(e,a,t,n,i,l){return(0,o.uX)(),(0,o.CE)("nav",c,a[0]||(a[0]=[(0,o.Fv)('<div class="container-fluid" data-v-2d1153ff><a class="navbar-brand" href="#" data-v-2d1153ff><img src="'+s+'" alt="Logo" class="logo" data-v-2d1153ff></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-2d1153ff><span class="navbar-toggler-icon" data-v-2d1153ff></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarNav" data-v-2d1153ff><ul class="navbar-nav" data-v-2d1153ff><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/" data-v-2d1153ff>Home</a></li><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/About" data-v-2d1153ff>About Me</a></li><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/Contact" data-v-2d1153ff>Contact</a></li><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/Resume" data-v-2d1153ff>Resume</a></li><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/education" data-v-2d1153ff>Education</a></li><li class="nav-item" data-v-2d1153ff><a class="nav-link" href="/experience" data-v-2d1153ff>Experiences</a></li></ul></div><a href="/download" class="btn btn-logo ms-3" data-v-2d1153ff><i class="fas fa-file-pdf me-2" data-v-2d1153ff></i> Resume Download </a><a href="https://www.linkedin.com/in/nithin-gudala/" class="btn btn-linkedin ms-3" target="_blank" rel="noopener noreferrer" data-v-2d1153ff><i class="fab fa-linkedin me-2" data-v-2d1153ff></i> LinkedIn </a></div>',1)]))}var r={name:"AppNavigation"},v=t(1241);const p=(0,v.A)(r,[["render",d],["__scopeId","data-v-2d1153ff"]]);var u=p,b={name:"App",components:{AppNavigation:u}};const f=(0,v.A)(b,[["render",l],["__scopeId","data-v-689fbfab"]]);var m=f,g=t(1387);const h={class:"p-4"};function k(e,a,t,n,i,l){const s=(0,o.g2)("DownloadButtons");return(0,o.uX)(),(0,o.CE)("div",h,[a[0]||(a[0]=(0,o.Lk)("h1",{class:"text-3xl font-bold"},"Welcome to the Home Page",-1)),a[1]||(a[1]=(0,o.Lk)("div",{class:"text-xl sm:text-2xl md:text-3xl lg:text-4xl"}," This text size changes with screen size ",-1)),(0,o.bF)(s)])}const x={class:"space-x-4 mt-4"};function w(e,a,t,n,i,l){return(0,o.uX)(),(0,o.CE)("div",x,a[0]||(a[0]=[(0,o.Fv)('<a href="/path/to/file1.pdf" download="file1.pdf" data-v-41f0e878><button class="bg-blue-500 text-white px-4 py-2 rounded" data-v-41f0e878>Download PDF</button></a><a href="/path/to/file2.zip" download="file2.zip" data-v-41f0e878><button class="bg-green-500 text-white px-4 py-2 rounded" data-v-41f0e878>Download ZIP</button></a><a href="/path/to/file3.jpg" download="file3.jpg" data-v-41f0e878><button class="bg-red-500 text-white px-4 py-2 rounded" data-v-41f0e878>Download Image</button></a>',3)]))}var y={name:"DownloadButtons"};const L=(0,v.A)(y,[["render",w],["__scopeId","data-v-41f0e878"]]);var E=L,_={name:"HomeProfile",components:{DownloadButtons:E}};const j=(0,v.A)(_,[["render",k]]);var D=j,C=t(4232);const M={id:"work-experience"},S={class:"experience-list"},I={class:"card-content"},F={class:"card-text"},A={class:"job-title"},H={class:"company-name"},V={class:"employment-period"},O={class:"job-description"},T=["onClick"],J={class:"card-image"},X=["src"],P={class:"company-name"},G={class:"employment-period"},W={class:"job-description"},B=["src"];function N(e,a,t,n,i,l){const s=(0,o.g2)("Modal");return(0,o.uX)(),(0,o.CE)("section",M,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Work Experience",-1)),(0,o.Lk)("div",S,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.workExperiences,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"experience-card"},[(0,o.Lk)("div",I,[(0,o.Lk)("div",F,[(0,o.Lk)("h3",A,(0,C.v_)(e.title),1),(0,o.Lk)("p",H,(0,C.v_)(e.company),1),(0,o.Lk)("p",V,(0,C.v_)(e.period),1),(0,o.Lk)("p",O,(0,C.v_)(e.description),1),(0,o.Lk)("button",{onClick:a=>l.openModal(e),class:"read-more-btn"},"Read More",8,T)]),(0,o.Lk)("div",J,[(0,o.Lk)("img",{src:e.image,alt:"Job Image"},null,8,X)])])])))),128))]),(0,o.bF)(s,{"is-visible":i.isModalVisible,onClose:l.closeModal},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,(0,C.v_)(i.selectedExperience?.title),1),(0,o.Lk)("p",P,(0,C.v_)(i.selectedExperience?.company),1),(0,o.Lk)("p",G,(0,C.v_)(i.selectedExperience?.period),1),(0,o.Lk)("p",W,(0,C.v_)(i.selectedExperience?.description),1),(0,o.Lk)("img",{src:i.selectedExperience?.image,alt:"Job Image",class:"modal-image"},null,8,B)])])),_:1},8,["is-visible","onClose"])])}const R={key:0,class:"modal-overlay"},z={class:"modal-content"},K={class:"modal-header"},$={class:"modal-body"},Q={class:"modal-footer"};function Z(e,a,t,n,i,l){return t.isVisible?((0,o.uX)(),(0,o.CE)("div",R,[(0,o.Lk)("div",z,[(0,o.Lk)("div",K,[a[2]||(a[2]=(0,o.Lk)("h3",{class:"modal-title"},"Modal Title",-1)),(0,o.Lk)("button",{class:"close-btn",onClick:a[0]||(a[0]=(...e)=>l.close&&l.close(...e))}," × ")]),(0,o.Lk)("div",$,[(0,o.RG)(e.$slots,"default",{},void 0,!0)]),(0,o.Lk)("div",Q,[(0,o.Lk)("button",{class:"footer-btn",onClick:a[1]||(a[1]=(...e)=>l.close&&l.close(...e))},"Close")])])])):(0,o.Q3)("",!0)}var q={props:{isVisible:Boolean},methods:{close(){this.$emit("close")}}};const U=(0,v.A)(q,[["render",Z],["__scopeId","data-v-1245ff32"]]);var Y=U,ee={name:"AboutDetails",components:{Modal:Y},data(){return{isModalVisible:!1,selectedExperience:null,workExperiences:[{title:"Frontend Developer",company:"Tech Innovations",period:"Jan 2022 - Present",description:"Developed and maintained responsive websites using Vue.js.",image:"https://via.placeholder.com/400x250?text=Frontend+Developer+Image"},{title:"Web Developer Intern",company:"Creative Solutions",period:"Jun 2021 - Dec 2021",description:"Assisted in building dynamic web applications using HTML, CSS, JavaScript.",image:"https://via.placeholder.com/400x250?text=Web+Developer+Image"},{title:"Full Stack Developer",company:"Future Tech Ltd.",period:"Jan 2020 - May 2021",description:"Worked on developing full-stack applications with Vue.js and Node.js.",image:"https://via.placeholder.com/400x250?text=Full+Stack+Developer+Image"}]}},methods:{openModal(e){this.selectedExperience=e,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}};const ae=(0,v.A)(ee,[["render",N],["__scopeId","data-v-4968dd6b"]]);var te=ae,ne=t.p+"img/education4.4c62b8b5.jpg",oe=t.p+"img/education3.6d0c89d8.jpg",ie=t.p+"img/education2.73f61e04.jpg",le=t.p+"img/education1.61d651fc.jpg";const se={class:"container py-5"};function ce(e,a,t,n,i,l){return(0,o.uX)(),(0,o.CE)("div",se,a[0]||(a[0]=[(0,o.Fv)('<h1 class="text-center mb-4" data-v-cb35722e>My Education</h1><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+ne+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+oe+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-5" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+ie+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div></div></div></div><div class="row justify-content-center" data-v-cb35722e><div class="col-md-10 mb-3" data-v-cb35722e><div class="education-section d-flex flex-column flex-lg-row align-items-center" data-v-cb35722e><div class="school-details ms-lg-4" data-v-cb35722e><h5 class="fw-bold" data-v-cb35722e>Geethanjali School</h5><p class="text-muted" data-v-cb35722e>Hyderabad, India</p><p class="mb-2" data-v-cb35722e><strong data-v-cb35722e>Course:</strong> High School</p><p data-v-cb35722e><strong data-v-cb35722e>Duration:</strong> 2010 - 2015</p><p data-v-cb35722e><strong data-v-cb35722e>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p></div><div class="banner-img mb-4 mb-lg-0" data-v-cb35722e><img src="'+le+'" alt="School Banner" class="img-fluid rounded" data-v-cb35722e></div></div></div></div>',5)]))}var de={name:"EducationDetails"};const re=(0,v.A)(de,[["render",ce],["__scopeId","data-v-cb35722e"]]);var ve=re;const pe={id:"work-experience"},ue={class:"experience-list"},be={class:"card-content"},fe={class:"card-text"},me={class:"job-title"},ge={class:"company-name"},he={class:"employment-period"},ke={class:"job-description"},xe=["onClick"],we={class:"card-image"},ye=["src"],Le={class:"company-name"},Ee={class:"employment-period"},_e={class:"job-description"},je=["src"];function De(e,a,t,n,i,l){const s=(0,o.g2)("Modal");return(0,o.uX)(),(0,o.CE)("section",pe,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Work Experience",-1)),(0,o.Lk)("div",ue,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.workExperiences,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"experience-card"},[(0,o.Lk)("div",be,[(0,o.Lk)("div",fe,[(0,o.Lk)("h3",me,(0,C.v_)(e.title),1),(0,o.Lk)("p",ge,(0,C.v_)(e.company),1),(0,o.Lk)("p",he,(0,C.v_)(e.period),1),(0,o.Lk)("p",ke,(0,C.v_)(e.description),1),(0,o.Lk)("button",{onClick:a=>l.openModal(e),class:"read-more-btn"},"Read More",8,xe)]),(0,o.Lk)("div",we,[(0,o.Lk)("img",{src:e.image,alt:"Job Image"},null,8,ye)])])])))),128))]),(0,o.bF)(s,{"is-visible":i.isModalVisible,onClose:l.closeModal},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,(0,C.v_)(i.selectedExperience?.title),1),(0,o.Lk)("p",Le,(0,C.v_)(i.selectedExperience?.company),1),(0,o.Lk)("p",Ee,(0,C.v_)(i.selectedExperience?.period),1),(0,o.Lk)("p",_e,(0,C.v_)(i.selectedExperience?.description),1),(0,o.Lk)("img",{src:i.selectedExperience?.image,alt:"Job Image",class:"modal-image"},null,8,je)])])),_:1},8,["is-visible","onClose"])])}var Ce={name:"ExperienceDetails",components:{Modal:Y},data(){return{isModalVisible:!1,selectedExperience:null,workExperiences:[{title:"Frontend Developer",company:"Tech Innovations",period:"Jan 2022 - Present",description:"Developed and maintained responsive websites using Vue.js.",image:"https://via.placeholder.com/400x250?text=Frontend+Developer+Image"},{title:"Web Developer Intern",company:"Creative Solutions",period:"Jun 2021 - Dec 2021",description:"Assisted in building dynamic web applications using HTML, CSS, JavaScript.",image:"https://via.placeholder.com/400x250?text=Web+Developer+Image"},{title:"Full Stack Developer",company:"Future Tech Ltd.",period:"Jan 2020 - May 2021",description:"Worked on developing full-stack applications with Vue.js and Node.js.",image:"https://via.placeholder.com/400x250?text=Full+Stack+Developer+Image"}]}},methods:{openModal(e){this.selectedExperience=e,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}};const Me=(0,v.A)(Ce,[["render",De],["__scopeId","data-v-e2343068"]]);var Se=Me;const Ie=[{path:"/",name:"HomeProfile",component:D},{path:"/about",name:"AboutDetails",component:te},{path:"/education",name:"EducationDetails",component:ve},{path:"/experience",name:"ExperienceDetails",component:Se}],Fe=(0,g.aE)({history:(0,g.LA)(),routes:Ie});var Ae=Fe;t(8077);(0,n.Ef)(m).use(Ae).mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var l=1/0;for(r=0;r<e.length;r++){n=e[r][0],o=e[r][1],i=e[r][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(r--,1);var d=o();void 0!==d&&(a=d)}}return a}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/nithin-gudala-portfolio/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,l=n[0],s=n[1],c=n[2],d=0;if(l.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var r=c(t)}for(a&&a(n);d<l.length;d++)i=l[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(r)},n=self["webpackChunknithin_gudala_portfolio"]=self["webpackChunknithin_gudala_portfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9900)}));n=t.O(n)})();
//# sourceMappingURL=app.16b74979.js.map