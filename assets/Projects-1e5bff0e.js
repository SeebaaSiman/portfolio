import{r as g,j as s,a as i,u as R,F as A,b as E}from"./index-fa604253.js";const M=150,k=.15,N=100,y=(e,c)=>`
    perspective(1000px)
    rotateY(${e*k}deg)
    translateX(${e}px)
    translateY(${c}px) 
  `;function D(e,c){return Math.floor(Math.random()*(c-e+1))+e}const I=e=>({zIndex:1e3-e,transform:`translateY(${e*10}px) scale(${1-e*.05})    rotate(${D(-15,15)}deg)`,transition:"transform 0.3s ease-out"}),P=({projects:e})=>{const[c,r]=g.useState(e),[d,u]=g.useState(null),[m,h]=g.useState(!1),o=g.useRef(null),p=g.useRef(0),l=g.useRef(0),n=g.useRef(0),S=g.useRef(0),w=a=>{p.current=a.type==="touchstart"?a.touches[0].clientX:a.clientX,n.current=a.type==="touchstart"?a.touches[0].clientY:a.clientY,h(!0)},C=a=>{if(!m)return;a.preventDefault();const b=a.type==="touchmove"?a.touches[0].clientX:a.clientX,v=a.type==="touchmove"?a.touches[0].clientY:a.clientY;l.current=b-p.current,S.current=v-n.current,o.current&&(o.current.style.transition="none",o.current.style.transform=y(l.current,S.current))},f=()=>{if(!m)return;h(!1);const a=l.current<-M,b=l.current>M,v=S.current>N;a?T():b?L():v&&x(),H()},L=()=>{r(a=>{const b=a[a.length-1],v=a.slice(0,-1);return[b,...v]})},T=()=>{r(a=>{const[b,...v]=a;return[...v,b]})},x=()=>{u(c[0])},H=()=>{o.current&&(o.current.style.transition="transform 0.5s ease-out",o.current.style.transform=y(0,0)),l.current=0,S.current=0};return{currentProjects:c,selectedProject:d,cardRef:o,handleDragStart:w,handleDragMove:C,handleDragEnd:f,closeModal:()=>{u(null)},isDragging:m}},V="/Sebastian.Siman/assets/calculator-8d6ec977.jpg",$="/Sebastian.Siman/assets/f1-add78b50.jpg",F="/Sebastian.Siman/assets/f12-ca0ff209.jpg",Y="/Sebastian.Siman/assets/f13-7bc41cb0.jpg",B="/Sebastian.Siman/assets/f14-f7bfa3d9.jpg",X="/Sebastian.Siman/assets/expenses-71906af8.jpg",Z="/Sebastian.Siman/assets/HeroesApp-d525c6f4.jpg",_="/Sebastian.Siman/assets/HeroesApp2-49512544.jpg",O="/Sebastian.Siman/assets/HeroesApp3-ea732e20.jpg",G="/Sebastian.Siman/assets/HeroesApp4-492ca3b6.jpg",J="/Sebastian.Siman/assets/HeroesApp5-959d4c0b.jpg",q="/Sebastian.Siman/assets/celestial-chronicle-5b5f5e3a.jpg",K="/Sebastian.Siman/assets/celestial-chronicle2-610a16a7.jpg",U="/Sebastian.Siman/assets/celestial-chronicle3-470d7f86.jpg",W="/Sebastian.Siman/assets/celestial-chronicle4-950a9865.jpg",Q="/Sebastian.Siman/assets/celestial-chronicle5-08db4576.jpg",z="/Sebastian.Siman/assets/Chat-non-contact-whatsapp-943599fd.jpg",j="/Sebastian.Siman/assets/journal-5e1e3189.jpg",ee="/Sebastian.Siman/assets/journal2-e512aacc.jpg",se="/Sebastian.Siman/assets/journal3-9b2b7dda.jpg",te="/Sebastian.Siman/assets/screen-386e75b9.png",ne="/Sebastian.Siman/assets/screen2-a749746a.png",ae="/Sebastian.Siman/assets/screen3-abaee36d.png",ie="/Sebastian.Siman/assets/screen4-df9ed831.png",oe="/Sebastian.Siman/assets/screen5-89c32624.png",ce="/Sebastian.Siman/assets/e-smarthy6-fd5cb589.png",re="/Sebastian.Siman/assets/e-smarthy5-9d8cd8f2.png",le="/Sebastian.Siman/assets/e-smarthy4-d35ec2fa.png",de="/Sebastian.Siman/assets/e-smarthy3-b06d81e1.png",ue="/Sebastian.Siman/assets/e-smarthy2-3f5d7cf1.png",me="/Sebastian.Siman/assets/e-smarthy-308c6723.png",he="/Sebastian.Siman/assets/celestial-283d0b0b.png",pe="/Sebastian.Siman/assets/calculator-9510e633.ico",ge="/Sebastian.Siman/assets/expenses-b2520d39.png",Se="/Sebastian.Siman/assets/f1-5ee663c2.png",Ce="/Sebastian.Siman/assets/journal-be11a546.png",fe="/Sebastian.Siman/assets/nonchat-f64d68aa.png",be="/Sebastian.Siman/assets/heroes-d63594a8.png",ve="/Sebastian.Siman/assets/cassette-7f2c1dec.svg",we="/Sebastian.Siman/assets/smiley-d6739b52.png",Me="/Sebastian.Siman/assets/html-7ff8d452.svg",ye="/Sebastian.Siman/assets/css-31afbff7.svg",Re="/Sebastian.Siman/assets/react-55ca3f6b.svg",Le="/Sebastian.Siman/assets/javascript-4e6c3bbb.svg",t={HTML:"HTML",CSS:"CSS",REACT:"REACT",JAVASCRIPT:"JAVASCRIPT"},Te={[t.HTML]:Me,[t.CSS]:ye,[t.REACT]:Re,[t.JAVASCRIPT]:Le},xe=()=>[{id:1,img:[te,ne,ae,ie,oe],title:"Screen capture X",description:"",icon:ve,tech:{icon:[t.HTML,t.CSS,t.REACT],text:"navigator.mediaDevices.getDisplayMedia, MediaRecorder and Blob"},url:"https://screen-capture-x.vercel.app/"},{id:2,img:[ce,re,le,de,ue,me],title:"E-Smarthy",icon:we,description:"",tech:{icon:[t.HTML,t.CSS,t.JAVASCRIPT],text:"firebase, react-router-dom, @reduxjs/toolkit, styled-components, sweetalert2, customHooks: useCheckAuth, useDraggable, useForm, useNoteView, useThemeMode"},url:"https://e-smarthy.netlify.app/"},{id:3,img:[z],title:"chat non contact whatsapp",description:"",icon:fe,tech:{icon:[t.HTML,t.CSS,t.REACT],text:"styled-components, CustomHook: useForm"},url:"https://seebaasiman.github.io/Chat-non-contact-whatsapp/"},{id:4,img:[Z,_,O,G,J],title:"heroes app",description:"",icon:be,tech:{icon:[t.HTML,t.CSS,t.REACT],text:"query-string, react-router-dom (private routes and public routes), API 'superheroapi', styled-components, useContext (Auth), useReducer, customHooks: useCardEffect, useForm, useGetHeroPage, useGetPublisher,useBagInvetory, useDragDice, useWindowResize"},url:"https://heroes-app-beige.vercel.app"},{id:5,img:[q,K,U,W,Q],icon:he,title:"celestial chronicle",description:"",tech:{icon:[t.HTML,t.CSS,t.REACT],text:"intersection-observer, react-router-dom, styled-components, customHooks: useCardPlanet, useCountDownTimer, useFetch, useLocalStorage"},url:"https://celestial-chronicle.vercel.app/"},{id:6,img:[$,F,Y,B],title:"f1-fan",icon:Se,description:"",tech:{icon:[t.HTML,t.CSS,t.REACT],text:"axios, react-router-dom, react-twitter-embed, Styled-components, API'ergast', customHooks: useCalendar, useCountdown, useDeviceType)"},url:"https://f1-fan.vercel.app/"},{id:7,img:[X],title:"expenses calculator",icon:ge,description:"",tech:{icon:[t.HTML,t.CSS,t.REACT],text:"Reduxjs/toolkit, animate.css, react-router-dom, sweetalert2,styled-components, boostrap, customHooks: useCostPerson, useForm"},url:"https://expenses-app-alpha-hazel.vercel.app/"},{id:8,img:[j,ee,se],title:"journal app",icon:Ce,description:"",tech:{icon:[t.HTML,t.CSS,t.REACT],text:"firebase, react-router-dom, @reduxjs/toolkit, styled-components, sweetalert2, customHooks: useCheckAuth, useDraggable, useForm, useNoteView, useThemeMode"},url:"https://journal-app-eight-pi.vercel.app/"},{id:9,img:[V],title:"calculator",icon:pe,description:"",tech:{icon:[t.HTML,t.CSS,t.REACT],text:"useReducer, styled-components"},url:"https://seebaasiman.github.io/Calculator-useReducer/"}],He=({images:e,setIsModalOpen:c,setCurrentImageIndex:r,isModalOpen:d,currentImageIndex:u,handleCursorNotSize:m,handleCursorSmall:h})=>{const o=()=>{c(!1)},p=()=>{r(n=>(n-1+e.length)%e.length)},l=()=>{r(n=>(n+1)%e.length)};return g.useEffect(()=>{const n=S=>{d&&(S.key==="ArrowLeft"?p():S.key==="ArrowRight"?l():S.key==="Escape"&&o())};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[d]),s("div",{className:`modal-overlay ${d?"open":"close"}`,children:i("div",{className:"modal-slider",children:[s("img",{src:e==null?void 0:e[u],alt:`Imagen ${u+1}`}),s("button",{onMouseEnter:m,onMouseLeave:h,className:"btn-svg left",onClick:p,children:s("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z",fill:"#fff"})})}),s("button",{onMouseEnter:m,onMouseLeave:h,className:"btn-svg right",onClick:l,children:s("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z",fill:"#fff"})})}),s("button",{onMouseEnter:m,onMouseLeave:h,className:"btn-svg top",onClick:o,children:s("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",fill:"#fff"})})})]})})},Ae=({project:e,onClose:c,handleCursorNotSize:r,handleCursorSmall:d})=>{var n,S,w;const{texts:u}=R(),[m,h]=g.useState(0),[o,p]=g.useState(!1),l=C=>{h(C),p(!0)};return g.useEffect(()=>{const C=f=>{f.key==="Escape"&&c()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[]),i("article",{className:`modal-overlay ${e?"open":"close"}`,children:[s("button",{onClick:c,className:"btn-neumorphism top-left",onMouseEnter:r,onMouseLeave:d,children:u.buttonModal}),i("div",{className:"browser-container",children:[i("div",{className:"browser-circles",children:[i("div",{className:"circles",children:[s("div",{className:"c"}),s("div",{className:"c"}),s("div",{className:"c"})]}),i("div",{className:"browser-tab",children:[i("div",{className:"chevrons",children:[s("svg",{viewBox:"0 0 20 20",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg","data-name":"20",id:"_20",children:s("path",{transform:"translate(6.25 3.75)",d:"M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z",id:"Fill"})}),s("svg",{viewBox:"0 0 20 20",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg","data-name":"20",id:"_20",children:s("path",{transform:"translate(6.625 3.75)",d:"M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z",id:"Fill"})})]}),i("div",{className:"search-bar",children:[s("img",{src:e==null?void 0:e.icon,alt:`icon project ${e==null?void 0:e.title}`,className:"modal-icon-title"}),i("a",{href:e==null?void 0:e.url,target:"_blank",onMouseEnter:r,onMouseLeave:d,children:[u.buttonVisit," ",e==null?void 0:e.title]})]})]})]}),i("div",{className:"modal-content",children:[s("h2",{children:e==null?void 0:e.title}),(e==null?void 0:e.description)&&i("span",{children:[i("p",{children:[u.modalDescription,":"]}),s("p",{children:e==null?void 0:e.description})]}),i("div",{className:"modal-tech-icons",children:[i("p",{children:[" ",u.modalTech,":"]}),s(A,{children:(S=(n=e==null?void 0:e.tech)==null?void 0:n.icon)==null?void 0:S.map((C,f)=>s("img",{src:Te[C]},f))})]}),s("p",{children:(w=e==null?void 0:e.tech)==null?void 0:w.text}),s("div",{className:"modal-img-container",children:e==null?void 0:e.img.map((C,f)=>s("img",{onMouseEnter:r,onMouseLeave:d,src:C,alt:`Imagen ${f+1}`,onClick:()=>l(f)},f))})]})]}),s(He,{images:e==null?void 0:e.img,setIsModalOpen:p,setCurrentImageIndex:h,isModalOpen:o,currentImageIndex:m,handleCursorNotSize:r,handleCursorSmall:d})]})},Ee=({currentProjects:e,selectedProject:c,cardRef:r,handleDragStart:d,handleDragMove:u,handleDragEnd:m,closeModal:h})=>{const{handleCursorNotSize:o,handleCursorSmall:p}=E();return i("div",{className:"cards-container",children:[e.map((l,n)=>s("div",{ref:n===0?r:null,className:`card ${n===0?"active":""}`,style:I(n),onMouseDown:n===0?d:void 0,onMouseEnter:o,onMouseUp:n===0?m:void 0,onMouseMove:n===0?u:void 0,onMouseLeave:p,onTouchStart:n===0?d:void 0,onTouchMove:n===0?u:void 0,onTouchEnd:n===0?m:void 0,children:s("img",{src:l.img[0],alt:l.title})},l.id)),s(Ae,{project:c,onClose:h,handleCursorNotSize:o,handleCursorSmall:p})]})},De=()=>{const{texts:e}=R(),c=xe(),{currentProjects:r,selectedProject:d,cardRef:u,handleDragStart:m,handleDragMove:h,handleDragEnd:o,closeModal:p,isDragging:l}=P({projects:c});return i("div",{className:"cards-wrapper",children:[i("aside",{className:"aside-cards-info-container",children:[s("h4",{children:e.buttonProject}),c.map(n=>i("p",{className:`aside-cards-info ${n.id===r[0].id?"active":""}`,children:["- ",n.id]},n.id))]}),s(Ee,{currentProjects:r,selectedProject:d,cardRef:u,handleDragStart:m,handleDragMove:h,handleDragEnd:o,closeModal:p}),i("aside",{className:`aside-bottom-project-info ${l?"show":"hidden"}`,children:[s("p",{children:e.modalDrag}),s("svg",{width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.78799 2H16.212C17.0305 1.99999 17.7061 1.99998 18.2561 2.04565C18.8274 2.0931 19.3523 2.19496 19.8439 2.45035C20.5745 2.82985 21.1702 3.42553 21.5497 4.1561C21.805 4.64774 21.9069 5.17258 21.9543 5.74393C22 6.29394 22 6.96949 22 7.78802V11.212C22 12.0305 22 12.7061 21.9543 13.2561C21.9069 13.8274 21.805 14.3523 21.5497 14.8439C21.1702 15.5745 20.5745 16.1702 19.8439 16.5497C19.3523 16.805 18.8274 16.9069 18.2561 16.9544C17.7061 17 17.0305 17 16.212 17H13V19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H11V17H7.78798C6.96946 17 6.29393 17 5.74393 16.9544C5.17258 16.9069 4.64774 16.805 4.1561 16.5497C3.42553 16.1702 2.82985 15.5745 2.45035 14.8439C2.19496 14.3523 2.0931 13.8274 2.04565 13.2561C1.99998 12.7061 1.99999 12.0305 2 11.212V7.78799C1.99999 6.96947 1.99998 6.29393 2.04565 5.74393C2.0931 5.17258 2.19496 4.64774 2.45035 4.1561C2.82985 3.42553 3.42553 2.82985 4.1561 2.45035C4.64774 2.19496 5.17258 2.0931 5.74393 2.04565C6.29393 1.99998 6.96947 1.99999 7.78799 2ZM16.17 15C17.041 15 17.6331 14.9992 18.0905 14.9612C18.536 14.9242 18.7634 14.8572 18.9219 14.7748C19.2872 14.5851 19.5851 14.2872 19.7748 13.9219C19.8572 13.7634 19.9242 13.536 19.9612 13.0905C19.9992 12.6331 20 12.041 20 11.17V7.83C20 6.95898 19.9992 6.36686 19.9612 5.90945C19.9242 5.46401 19.8572 5.23663 19.7748 5.07805C19.5851 4.71277 19.2872 4.41493 18.9219 4.22517C18.7634 4.1428 18.536 4.07578 18.0905 4.03879C17.6331 4.0008 17.041 4 16.17 4H7.83C6.95898 4 6.36686 4.0008 5.90945 4.03879C5.46401 4.07578 5.23663 4.1428 5.07805 4.22517C4.71277 4.41493 4.41493 4.71277 4.22517 5.07805C4.1428 5.23663 4.07578 5.46401 4.03879 5.90945C4.0008 6.36686 4 6.95898 4 7.83V11.17C4 12.041 4.0008 12.6331 4.03879 13.0905C4.07578 13.536 4.1428 13.7634 4.22517 13.9219C4.41493 14.2872 4.71277 14.5851 5.07805 14.7748C5.23663 14.8572 5.46401 14.9242 5.90945 14.9612C6.36686 14.9992 6.95898 15 7.83 15H16.17Z",fill:"#0F1729"})})]})]})};export{De as default};
