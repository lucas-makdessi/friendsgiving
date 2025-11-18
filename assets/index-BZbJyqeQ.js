(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const k=[{id:"q1",text:"Good morning — it’s time for school! What are you grabbing as you run out the door?",options:[{id:"q1a",label:"Lululemon belt bag",bg:"/images/1.png",score:{T:1}},{id:"q1b",label:"A trustworthy lip balm",bg:"/images/1.png",score:{J:1}},{id:"q1c",label:"Sunnies",bg:"/images/1.png",score:{E:1}},{id:"q1d",label:"My favorite plushie",bg:"/images/1.png",score:{F:1}}]},{id:"q2",text:"Class just started and you need to take notes. What are you jotting everything down on?",options:[{id:"q2a",label:"Plain printer paper",bg:"/images/2.png",score:{P:1}},{id:"q2b",label:"Lined notebook paper",bg:"/images/2.png",score:{J:1}},{id:"q2c",label:"Graph paper",bg:"/images/2.png",score:{J:2}},{id:"q2d",label:"Back of green flyer",bg:"/images/2.png",score:{P:2}}]},{id:"q3",text:"Finally, lunch is here! You get to dig into the meal you packed from:",options:[{id:"q3a",label:"Whole Foods",bg:"/images/3.png",score:{T:1}},{id:"q3b",label:"Trader Joe's",bg:"/images/3.png",score:{N:1}},{id:"q3c",label:"Costco",bg:"/images/3.png",score:{S:1}},{id:"q3d",label:"I would never pack lunch",bg:"/images/3.png",score:{E:1}}]},{id:"q4",text:"Which activity at recess?",options:[{id:"q4a",label:"Tetherball",bg:"/images/4.png",score:{T:1},nextPath:"camping"},{id:"q4b",label:"Sidewalk chalk",bg:"/images/4.png",score:{F:1},nextPath:"museum"},{id:"q4c",label:"Rubik's cube",bg:"/images/4.png",score:{I:1},nextPath:"aquarium"},{id:"q4d",label:"Imagination",bg:"/images/4.png",score:{E:1},nextPath:"disney"}]},{id:"q5",text:"Disneyland squad — who are you?",options:[{id:"q5a",label:"Lightning Lane pro",bg:"/images/5.png",score:{J:1}},{id:"q5b",label:"Backpack mule",bg:"/images/5.png",score:{T:1}},{id:"q5c",label:"Hype king",bg:"/images/5.png",score:{P:1}},{id:"q5d",label:"The burden",bg:"/images/5.png",score:{S:1}}]},{id:"q6",text:"Which iconic Disneyland mountain are you?",options:[{id:"q6a",label:"Space Mountain",bg:"/images/6.png",score:{E:1,T:1}},{id:"q6b",label:"Splash Mountain",bg:"/images/6.png",score:{E:1,F:1}},{id:"q6c",label:"Big Thunder",bg:"/images/6.png",score:{I:1,S:1}},{id:"q6d",label:"Matterhorn",bg:"/images/6.png",score:{I:1,P:1}}]},{id:"q7",text:"Avengers Campus — which hero would you trade lives with?",options:[{id:"q7a",label:"Hulk",bg:"/images/7.png",score:{S:1,P:1}},{id:"q7b",label:"Spiderman",bg:"/images/7.png",score:{E:1,F:1}},{id:"q7c",label:"Dr. Strange",bg:"/images/7.png",score:{N:1,J:1}},{id:"q7d",label:"Baby Groot",bg:"/images/7.png",score:{N:1,F:1}}]},{id:"q8",text:"Best snack in the park?",options:[{id:"q8a",label:"Churro",bg:"/images/8.png",score:{J:1}},{id:"q8b",label:"Dole whip",bg:"/images/8.png",score:{E:1}},{id:"q8c",label:"Turkey leg",bg:"/images/8.png",score:{P:1}},{id:"q8d",label:"Cosmic cream orb",bg:"/images/8.png",score:{T:1}}]},{id:"q9",text:"At the aquarium you are most likely:",options:[{id:"q9a",label:"Planning route",bg:"/images/9.png",score:{T:1}},{id:"q9b",label:"Chatting with employees",bg:"/images/9.png",score:{E:1,N:1}},{id:"q9c",label:"Watching giant kelp",bg:"/images/9.png",score:{I:1,F:1}},{id:"q9d",label:"Touch tank pro",bg:"/images/9.png",score:{S:1,P:1}}]},{id:"q10",text:"Which underwater ability would you most want?",options:[{id:"q10a",label:"Razor sharp bite",bg:"/images/10.png",score:{J:1}},{id:"q10b",label:"Speed swimming",bg:"/images/10.png",score:{S:1}},{id:"q10c",label:"Echolocation",bg:"/images/10.png",score:{E:1}},{id:"q10d",label:"Camouflage",bg:"/images/10.png",score:{I:1}}]},{id:"q11",text:"If reborn as a sea creature, which would it be?",options:[{id:"q11a",label:"Shark",bg:"/images/11.png",score:{E:1,S:1}},{id:"q11b",label:"Jellyfish",bg:"/images/11.png",score:{E:1,N:1}},{id:"q11c",label:"Octopus",bg:"/images/11.png",score:{I:1,T:1}},{id:"q11d",label:"Shrimp",bg:"/images/11.png",score:{I:1,F:1}}]},{id:"q12",text:"It’s your turn to help run the aquarium. Which job?",options:[{id:"q12a",label:"Testing water quality",bg:"/images/12.png",score:{I:1,S:1}},{id:"q12b",label:"Scuba diving show",bg:"/images/12.png",score:{E:1,P:1}},{id:"q12c",label:"Training dolphins",bg:"/images/12.png",score:{N:1,P:1}},{id:"q12d",label:"Educating visitors",bg:"/images/12.png",score:{E:1,T:1}}]},{id:"q13",text:"At camping, what can the group rely on you for?",options:[{id:"q13a",label:"Starting a fire",bg:"/images/13.png",score:{T:1}},{id:"q13b",label:"Packing supplies",bg:"/images/13.png",score:{J:1}},{id:"q13c",label:"Telling scary stories",bg:"/images/13.png",score:{E:1}},{id:"q13d",label:"Complaining",bg:"/images/13.png",score:{F:1}}]},{id:"q14",text:"Which element are you?",options:[{id:"q14a",label:"Fire",bg:"/images/14.png",score:{J:1}},{id:"q14b",label:"Water",bg:"/images/14.png",score:{N:1}},{id:"q14c",label:"Earth",bg:"/images/14.png",score:{S:1}},{id:"q14d",label:"Air",bg:"/images/14.png",score:{P:1}}]},{id:"q15",text:"Bear attack! How do you survive?",options:[{id:"q15a",label:"Outrun it",bg:"/images/15.png",score:{I:1,S:1}},{id:"q15b",label:"Fight it",bg:"/images/15.png",score:{F:1,J:1}},{id:"q15c",label:"Charm it",bg:"/images/15.png",score:{E:1,N:1}},{id:"q15d",label:"Create clones",bg:"/images/15.png",score:{T:1,J:1}}]},{id:"q16",text:"You lost — the bear forces you to give up one sense. Which?",options:[{id:"q16a",label:"Sight",bg:"/images/16.png",score:{N:1}},{id:"q16b",label:"Sound",bg:"/images/16.png",score:{I:1}},{id:"q16c",label:"Smell",bg:"/images/16.png",score:{T:1}},{id:"q16d",label:"Taste",bg:"/images/16.png",score:{J:1}},{id:"q16e",label:"Touch",bg:"/images/16.png",score:{I:1}}]},{id:"q17",text:"Museum — what are you doing?",options:[{id:"q17a",label:"Reading plaques",bg:"/images/17.png",score:{I:1,T:1}},{id:"q17b",label:"Asking friends",bg:"/images/17.png",score:{N:1,F:1}},{id:"q17c",label:"Taking selfies",bg:"/images/17.png",score:{E:1,S:1}},{id:"q17d",label:"Speed run to gift shop",bg:"/images/17.png",score:{S:1,T:1}}]},{id:"q18",text:"Which art speaks to you?",options:[{id:"q18a",label:"Abstract geometric",bg:"/images/18.png",score:{N:1}},{id:"q18b",label:"Hipster B&W photo",bg:"/images/18.png",score:{S:1}},{id:"q18c",label:"Romantic landscape",bg:"/images/18.png",score:{F:1}},{id:"q18d",label:"Still life earthy",bg:"/images/18.png",score:{S:1}}]},{id:"q19",text:"You contribute a piece — which medium?",options:[{id:"q19a",label:"Finger painting",bg:"/images/19.png",score:{N:1}},{id:"q19b",label:"Pottery",bg:"/images/19.png",score:{J:1}},{id:"q19c",label:"Interpretive dance",bg:"/images/19.png",score:{P:1}},{id:"q19d",label:"Documentary",bg:"/images/19.png",score:{T:1}}]},{id:"q20",text:"Stop an art heist — which skill?",options:[{id:"q20a",label:"Time travel",bg:"/images/20.png",score:{T:1}},{id:"q20b",label:"Teleportation",bg:"/images/20.png",score:{P:1}},{id:"q20c",label:"Mind control",bg:"/images/20.png",score:{J:1}},{id:"q20d",label:"Laser vision",bg:"/images/20.png",score:{S:1}}]},{id:"q21",text:"Which cocktail are you asking the bartender for (at debrief)?",options:[{id:"q21a",label:"Margarita",bg:"/images/21.png",score:{E:1,P:1},nextPath:"hype"},{id:"q21b",label:"Old Fashioned",bg:"/images/21.png",score:{I:1,S:1},nextPath:"chill"},{id:"q21c",label:"Espresso martini",bg:"/images/21.png",score:{E:1,J:1},nextPath:"hype"},{id:"q21d",label:"Aperol spritz",bg:"/images/21.png",score:{I:1,F:1},nextPath:"chill"}]},{id:"q22",text:"Karaoke — which banger do you sing?",options:[{id:"q22a",label:"Don't Stop Believin'",bg:"/images/22.png",score:{N:1,P:1}},{id:"q22b",label:"Rake It Up",bg:"/images/22.png",score:{E:1,T:1}},{id:"q22c",label:"Love Story",bg:"/images/22.png",score:{N:1,F:1}},{id:"q22d",label:"Locked Out of Heaven",bg:"/images/22.png",score:{E:1,P:1}}]},{id:"q23",text:"Whoa — a hot person passed. What do they smell like?",options:[{id:"q23a",label:"Jasmine flowers",bg:"/images/23.png",score:{N:1}},{id:"q23b",label:"Dark forest",bg:"/images/23.png",score:{I:1}},{id:"q23c",label:"Clean laundry",bg:"/images/23.png",score:{J:1}},{id:"q23d",label:"Sugar cookies",bg:"/images/23.png",score:{F:1}}]},{id:"q24",text:"Pick a board game:",options:[{id:"q24a",label:"Hues & Cues",bg:"/images/24.png",score:{N:1,F:1}},{id:"q24b",label:"Wavelength",bg:"/images/24.png",score:{N:1,T:1}},{id:"q24c",label:"Catan",bg:"/images/24.png",score:{T:1,J:1}},{id:"q24d",label:"Uno",bg:"/images/24.png",score:{S:1}}]},{id:"q25",text:"Everyone says your dish was the best — what did you cook?",options:[{id:"q25a",label:"Turkey",bg:"/images/25.png",score:{E:1,J:1}},{id:"q25b",label:"Mac & cheese",bg:"/images/25.png",score:{F:1}},{id:"q25c",label:"Stuffing",bg:"/images/25.png",score:{P:1}},{id:"q25d",label:"Apple pie",bg:"/images/25.png",score:{I:1,S:1}}]}];function h(e,i,t){e.innerHTML=`
    <div class="card" style="text-align:center;">
      <header>
        <h1>Which Ice Cream Are You?</h1>
      </header>

      <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:16px;
        margin-top:12px;
      ">
        <img 
          src="/friendsgiving/images/LANDING.png" 
          alt="landing"
          style="
            width:260px;
            height:auto;
            border-radius:12px;
            box-shadow:0 6px 18px rgba(0,0,0,0.08);
          "
        />

        <div style="display:flex; flex-direction:column; gap:10px; width:100%; max-width:240px;">
          <button class="primary" id="startBtn">Start Quiz</button>
          <button class="small" id="menuBtn">View Menu</button>
        </div>
      </div>
    </div>
  `,document.getElementById("startBtn").addEventListener("click",i),document.getElementById("menuBtn").addEventListener("click",t)}function b(e){if(!e)return"";let i=e.trim();return/^(https?:)?\/\//i.test(i)?i:(i=i.replace(/^\/+/,""),i.startsWith("images/")||(i="images/"+i),"/friendsgiving/"+i)}function q(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function C(e,i,t){const s=i.options[0]?.bg||"",n=s?b(s):"";e.innerHTML=`
    <div class="card">
      <div class="q-text">${q(i.text)}</div>
      <div class="question-image-container">
        ${n?`<img src="${n}" alt="${q(i.text)}" />`:""}
      </div>
      <div class="answers" id="answers"></div>
    </div>
  `;const a=e.querySelector("#answers");i.options.forEach(o=>{const r=document.createElement("button");r.className="answer-btn",r.textContent=o.label,r.addEventListener("click",()=>t(o)),a.appendChild(r)})}const l=[{type:"INFP",flavor:"Cookies & Cream",subtitle:"Dreamy classic",description:"Soft & introspective.",image:"/images/menu/INFP.png"},{type:"ENFJ",flavor:"Strawberry Cheesecake",subtitle:"Warm & generous",description:"Bold and caring.",image:"/images/menu/ENFJ.png"},{type:"ENTJ",flavor:"Peppermint Bark",subtitle:"Forceful & crisp",description:"A strong presence.",image:"/images/menu/ENTJ.png"},{type:"ESFP",flavor:"Cotton Candy",subtitle:"Bright & sparkly",description:"Loud and playful.",image:"/images/menu/ESFP.png"},{type:"ISFP",flavor:"Honey Lavender",subtitle:"Soft & creative",description:"Gentle and artistic.",image:"/images/menu/ISFP.png"},{type:"ENFP",flavor:"Ube",subtitle:"Imaginative purple swirl",description:"Unconventional and curious.",image:"/images/menu/ENFP.png"},{type:"INFJ",flavor:"Rocky Road",subtitle:"Mysterious & complex",description:"Deep and comforting.",image:"/images/menu/INFJ.png"},{type:"INTJ",flavor:"Pistachio",subtitle:"Thoughtful & refined",description:"Earthy and wise.",image:"/images/menu/INTJ.png"},{type:"ENTP",flavor:"Mint Chip",subtitle:"Clever & zingy",description:"Playful contrarian.",image:"/images/menu/ENTP.png"},{type:"ESFJ",flavor:"Birthday Cake",subtitle:"Warm host",description:"Comforting and celebratory.",image:"/images/menu/ESFJ.png"},{type:"ISFJ",flavor:"Chocolate",subtitle:"Dependable delight",description:"Classic and reliable.",image:"/images/menu/ISFJ.png"},{type:"INTP",flavor:"Coffee",subtitle:"Curious & caffeinated",description:"Analytical and bittersweet.",image:"/images/menu/INTP.png"},{type:"ESTJ",flavor:"Salted Caramel",subtitle:"Organized & bold",description:"Structured with a bite.",image:"/images/menu/ESTJ.png"},{type:"ISTJ",flavor:"Vanilla",subtitle:"Classic & steady",description:"Simple and timeless.",image:"/images/menu/ISTJ.png"},{type:"ESTP",flavor:"Orange Creamsicle",subtitle:"Energetic & bright",description:"Bold and playful.",image:"/images/menu/ESTP.png"},{type:"ISTP",flavor:"Lemon Sorbet",subtitle:"Practical & crisp",description:"Practical and refreshing.",image:"/images/menu/ISTP.png"}];async function N(e){try{const t=await(await fetch(e,{mode:"cors"})).blob();if(navigator.clipboard&&window.ClipboardItem){const s=new window.ClipboardItem({[t.type]:t});return await navigator.clipboard.write([s]),!0}else{const s=URL.createObjectURL(t);return window.open(s,"_blank"),setTimeout(()=>URL.revokeObjectURL(s),1e4),!1}}catch(i){return console.error("copyImageToClipboard error",i),!1}}function F(e,i){const t=l.find(o=>o.type===i)||l[0],s=b(t.image);e.innerHTML=`
    <div class="card result-wrap">
      <div style="display:flex;justify-content:center;">
        <button class="small" id="homeBtn">Home</button>
      </div>
      <div style="margin-top:12px; max-width:640px; margin-left:auto; margin-right:auto;">
        <div class="menu-item" id="menuItem">
          <div 
          class="menu-image-container" 
          style="
            width: 100%;
            max-width: 540px;
            margin: 0 auto;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          "
          >
            <img 
              src="${s}"
              alt="${t.flavor}"
              class="menu-image"
              style="
                width: 100%;
                height: auto;
                display: block;
                object-fit: contain;
              "
            />
          </div>
        </div>
      </div>
       <div style="margin-top:12px; display:flex; gap:10px; justify-content:center; align-items:center;">
        <button class="small" id="copyBtn">Copy Image</button>
        <span id="copyStatus" style="color:var(--muted); font-size:0.95rem"></span>
      </div>
    </div>
  `,document.getElementById("homeBtn").addEventListener("click",()=>{location.hash="#/"});const n=document.getElementById("copyBtn"),a=document.getElementById("copyStatus");n.addEventListener("click",async()=>{n.disabled=!0,a.textContent="...",await N(s)?a.textContent="Copied!":a.textContent="Opened image (save manually)",setTimeout(()=>{a.textContent="",n.disabled=!1},1500)})}function B(e){e.innerHTML=`
    <div class="card">
      <h2>Ice Cream Menu</h2>

      <div class="menu-container">
        <button class="nav-button" id="leftBtn">←</button>

        <div class="menu-item" id="menuItem">
          <!-- dynamic image goes here -->
        </div>

        <button class="nav-button" id="rightBtn">→</button>
      </div>

      <div style="margin-top:14px">
        <button class="small" id="homeBtn">Home</button>
      </div>
    </div>
  `;const i=e.querySelector("#menuItem"),t=e.querySelector("#leftBtn"),s=e.querySelector("#rightBtn"),n=e.querySelector("#homeBtn");let a=0;function o(r){if(!i)return;const p=l[r];i.innerHTML=`
      <div 
        class="menu-image-container" 
        style="
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        "
      >
        <img 
          src="${b(p.image)}"
          alt="${p.flavor}"
          class="menu-image"
          style="
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
          "
        />
      </div>
    `}o(a),t&&t.addEventListener("click",()=>{a=(a-1+l.length)%l.length,o(a)}),s&&s.addEventListener("click",()=>{a=(a+1)%l.length,o(a)}),n&&n.addEventListener("click",()=>{location.hash="#/"})}const J="https://script.google.com/macros/s/AKfycbx9ut9PMrNjkpOcpU8mT6ReD5UKm3yZlryM4rY9P_xDwc_cR7e_lNQp2pDJQbXvta2gEA/exec",g=document.getElementById("app");function f(){return{E:0,I:0,N:0,S:0,F:0,T:0,J:0,P:0}}function L(e,i){if(i)for(const t of Object.keys(i))e[t]=(e[t]||0)+i[t]}let v="",u=[],m=f(),d=[],c=0;function x(){g.innerHTML=`
    <div class="card">
      <h2>What's your name?</h2>
      <div class="name-row">
        <input id="nameInput" placeholder="Your name" />
      </div>
      <div style="margin-top:12px"><button class="primary" id="startBtn">Start</button></div>
    </div>
  `,document.getElementById("startBtn").onclick=()=>{const e=document.getElementById("nameInput").value.trim();if(!e){alert("Please enter your name.");return}v=e,M()},document.getElementById("menuBtn").onclick=()=>{location.hash="#/menu"}}function M(){d=["q1","q2","q3","q4","q21"],c=0,u=[],m=f(),S()}function A(e){return k.find(i=>i.id===e)}function S(){if(c>=d.length){R();return}const e=d[c],i=A(e);C(g,i,t=>{W(e,t)})}function W(e,i){if(u.push({qid:e,optId:i.id,score:i.score,nextPath:i.nextPath}),L(m,i.score),e==="q4"&&i.nextPath){let t=[];i.nextPath==="disney"?t=["q5","q6","q7","q8"]:i.nextPath==="aquarium"?t=["q9","q10","q11","q12"]:i.nextPath==="camping"?t=["q13","q14","q15","q16"]:i.nextPath==="museum"&&(t=["q17","q18","q19","q20"]),d.splice(c+1,0,...t)}if(e==="q21"&&i.nextPath){let t=[];i.nextPath==="hype"?t=["q22","q23"]:t=["q24","q25"],d.splice(c+1,0,...t)}c++,S()}function O(e){const i=e.E||0,t=e.I||0,s=e.N||0,n=e.S||0,a=e.F||0,o=e.T||0,r=e.J||0,p=e.P||0,P=i>=t?"E":"I",I=s>n?"N":"S",T=a>o?"F":"T",E=r>=p?"J":"P";return`${P}${I}${T}${E}`}function R(){const e=O(m);H(e).catch(()=>{}),F(g,e)}async function H(e){const i={name:v,type:e,totals:m,answers:u,path:d,submittedAt:new Date().toISOString()};try{await fetch(J,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i)})}catch(t){console.error("submit error",t)}}function w(){const e=location.hash||"#/";e==="#/"||e===""?h(g,()=>y(),()=>{location.hash="#/menu"}):e==="#/menu"?B(g):e==="#/quiz"?x():h(g,()=>y(),()=>{location.hash="#/menu"})}function y(){location.hash="#/quiz",x()}window.addEventListener("hashchange",w);w();
