(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const k=[{id:"q1",text:"Good morning - it`s time for school! What are you grabbing as you run out the door?",options:[{id:"q1a",label:"Lululemon belt bag",bg:"/images/1.png",score:{T:1}},{id:"q1b",label:"A trustworthy lip balm",bg:"/images/1.png",score:{J:1}},{id:"q1c",label:"Sunnies",bg:"/images/1.png",score:{E:1}},{id:"q1d",label:"Your favorite plushie",bg:"/images/1.png",score:{F:1}}]},{id:"q2",text:"Riiing, class just started and you need to take notes. What are you jotting everything down on?",options:[{id:"q2a",label:"Plain printer paper",bg:"/images/2.png",score:{P:1}},{id:"q2b",label:"Lined notebook paper",bg:"/images/2.png",score:{J:1}},{id:"q2c",label:"Graph paper",bg:"/images/2.png",score:{J:2}},{id:"q2d",label:"The back of a green flyer for the school play",bg:"/images/2.png",score:{P:2}}]},{id:"q3",text:"Finally, lunch is here! You get to dig into the meal you packed from:",options:[{id:"q3a",label:"Whole Foods",bg:"/images/3.png",score:{T:1}},{id:"q3b",label:"Trader Joe's",bg:"/images/3.png",score:{N:1}},{id:"q3c",label:"Costco",bg:"/images/3.png",score:{S:1}},{id:"q3d",label:"LOL. I would never pack lunch",bg:"/images/3.png",score:{E:1}}]},{id:"q4",text:"Let's play! Which is your activity of choice at recess?",options:[{id:"q4a",label:"Tetherball",bg:"/images/4.png",score:{T:1},nextPath:"camping"},{id:"q4b",label:"Sidewalk chalk",bg:"/images/4.png",score:{F:1},nextPath:"museum"},{id:"q4c",label:"Rubik's cube",bg:"/images/4.png",score:{I:1},nextPath:"aquarium"},{id:"q4d",label:"Imagination",bg:"/images/4.png",score:{E:1},nextPath:"disney"}]},{id:"q5",text:"BEST FIELD TRIP EVER - you're at the Happiest Place on Earth! Who are you in the Disneyland squad?",options:[{id:"q5a",label:"Lightning Lane pro - I'm making sure we ride every ride at least three times and you bet we're staying from rope drop until park close.",bg:"/images/5.png",score:{J:1}},{id:"q5b",label:"Backpack mule - I'm carrying everyone's jackets, water bottles and yes, of course I packed sunscreen.",bg:"/images/5.png",score:{T:1}},{id:"q5c",label:"Hype king - I will take pics, I will eat every snack put in front of me, I'm just happy to be here.",bg:"/images/5.png",score:{P:1}},{id:"q5d",label:"The burden - let’s be real, I’m just slowing the group down. I walk slow, always need to pee and am sooo bored waiting in all the lines.",bg:"/images/5.png",score:{S:1}}]},{id:"q6",text:"Which iconic Disneyland mountain are you?",options:[{id:"q6a",label:"Space Mountain",bg:"/images/6.png",score:{E:1,T:1}},{id:"q6b",label:"Splash Mountain",bg:"/images/6.png",score:{E:1,F:1}},{id:"q6c",label:"Big Thunder Mountain Railroad",bg:"/images/6.png",score:{I:1,S:1}},{id:"q6d",label:"Matterhorn Bobsleds",bg:"/images/6.png",score:{I:1,P:1}}]},{id:"q7",text:"Now, you’re in Avengers Campus. Which of these superheroes do you wish you could trade lives with?",options:[{id:"q7a",label:"The Hulk",bg:"/images/7.png",score:{S:1,P:1}},{id:"q7b",label:"Spiderman",bg:"/images/7.png",score:{E:1,F:1}},{id:"q7c",label:"Dr. Strange",bg:"/images/7.png",score:{N:1,J:1}},{id:"q7d",label:"Baby Groot",bg:"/images/7.png",score:{N:1,F:1}}]},{id:"q8",text:"No Disney day is complete without the best snack in the park, which is obviously a:",options:[{id:"q8a",label:"Churro",bg:"/images/8.png",score:{J:1}},{id:"q8b",label:"Dole whip",bg:"/images/8.png",score:{E:1}},{id:"q8c",label:"Turkey leg",bg:"/images/8.png",score:{P:1}},{id:"q8d",label:"Cosmic Cream Orb (IYKYK)",bg:"/images/8.png",score:{T:1}}]},{id:"q9",text:"BEST FIELD TRIP EVER - you’re at the aquarium! What are we most likely to find you doing?",options:[{id:"q9a",label:"Planning the route to make sure you see every exhibit",bg:"/images/9.png",score:{T:1}},{id:"q9b",label:"Chatting with the employees about your childhood dream of becoming a marine biologist",bg:"/images/9.png",score:{E:1,N:1}},{id:"q9c",label:"Watching the giant kelp tank and admiring how peaceful it is",bg:"/images/9.png",score:{I:1,F:1}},{id:"q9d",label:"Interacting with whatever you can get your hands on at the touch tank",bg:"/images/9.png",score:{S:1,P:1}}]},{id:"q10",text:"Wow, you never realized all the cool things that these animals can do. Which underwater ability would you most want to steal?",options:[{id:"q10a",label:"Razor sharp bite",bg:"/images/10.png",score:{J:1}},{id:"q10b",label:"Speed swimming",bg:"/images/10.png",score:{S:1}},{id:"q10c",label:"Echolocation",bg:"/images/10.png",score:{E:1}},{id:"q10d",label:"Camouflage",bg:"/images/10.png",score:{I:1}}]},{id:"q11",text:"If you could be reborn as a sea creature, which would it be?",options:[{id:"q11a",label:"Shark",bg:"/images/11.png",score:{E:1,S:1}},{id:"q11b",label:"Jellyfish",bg:"/images/11.png",score:{E:1,N:1}},{id:"q11c",label:"Octopus",bg:"/images/11.png",score:{I:1,T:1}},{id:"q11d",label:"Shrimp",bg:"/images/11.png",score:{I:1,F:1}}]},{id:"q12",text:"It's your turn to help run the aquarium. Which job would you excel at?",options:[{id:"q12a",label:"Testing the water quality of the tanks",bg:"/images/12.png",score:{I:1,S:1}},{id:"q12b",label:"Scuba diving during the big feeding show",bg:"/images/12.png",score:{E:1,P:1}},{id:"q12c",label:"Training the dolphins to do cool tricks",bg:"/images/12.png",score:{N:1,P:1}},{id:"q12d",label:"Educating the visitors with fun facts",bg:"/images/12.png",score:{E:1,T:1}}]},{id:"q13",text:"BEST FIELD TRIP EVER - you’re going camping! What can the group rely on you for?",options:[{id:"q13a",label:"Starting a fire",bg:"/images/13.png",score:{T:1}},{id:"q13b",label:"Packing supplies",bg:"/images/13.png",score:{J:1}},{id:"q13c",label:"Telling scary stories",bg:"/images/13.png",score:{E:1}},{id:"q13d",label:"Complaining about being outside",bg:"/images/13.png",score:{F:1}}]},{id:"q14",text:"You are now one with nature. Which element are you?",options:[{id:"q14a",label:"Fire",bg:"/images/14.png",score:{J:1}},{id:"q14b",label:"Water",bg:"/images/14.png",score:{N:1}},{id:"q14c",label:"Earth",bg:"/images/14.png",score:{S:1}},{id:"q14d",label:"Air",bg:"/images/14.png",score:{P:1}}]},{id:"q15",text:"Bear attack! How do you survive?",options:[{id:"q15a",label:"Outrun it with super speed",bg:"/images/15.png",score:{I:1,S:1}},{id:"q15b",label:"Fight it with super strength",bg:"/images/15.png",score:{F:1,J:1}},{id:"q15c",label:"Charm it with your ability to talk to animals",bg:"/images/15.png",score:{E:1,N:1}},{id:"q15d",label:"Confuse it by creating clones of yourself",bg:"/images/15.png",score:{T:1,J:1}}]},{id:"q16",text:"You lost. The bear forces you to give up one of your senses, which do you surrender?",options:[{id:"q16a",label:"Sight",bg:"/images/16.png",score:{N:1}},{id:"q16b",label:"Sound",bg:"/images/16.png",score:{I:1}},{id:"q16c",label:"Smell",bg:"/images/16.png",score:{T:1}},{id:"q16d",label:"Taste",bg:"/images/16.png",score:{J:1}},{id:"q16e",label:"Touch",bg:"/images/16.png",score:{I:1}}]},{id:"q17",text:"BEST FIELD TRIP EVER - you're at the art museum! What are we most likely to find you doing?",options:[{id:"q17a",label:"Carefully reading the plaques next to each painting",bg:"/images/17.png",score:{I:1,T:1}},{id:"q17b",label:"Asking your friends how the art speaks to their souls",bg:"/images/17.png",score:{N:1,F:1}},{id:"q17c",label:"Taking selfies with the Tiktok famous pieces",bg:"/images/17.png",score:{E:1,S:1}},{id:"q17d",label:"Speed running through the exhibits to get to the gift shop",bg:"/images/17.png",score:{S:1,T:1}}]},{id:"q18",text:"What art speaks most to you?",options:[{id:"q18a",label:"Abstract print made of geometric shapes",bg:"/images/18.png",score:{N:1}},{id:"q18b",label:"Hipster photograph in black & white",bg:"/images/18.png",score:{S:1}},{id:"q18c",label:"Romantic landscape with soft pastels",bg:"/images/18.png",score:{F:1}},{id:"q18d",label:"Still life painting utilizing earthy tones",bg:"/images/18.png",score:{S:1}}]},{id:"q19",text:"It’s your turn to contribute a piece to the museum. Which form of media would you choose?",options:[{id:"q19a",label:"Finger painting",bg:"/images/19.png",score:{N:1}},{id:"q19b",label:"Pottery",bg:"/images/19.png",score:{J:1}},{id:"q19c",label:"Interpretive dance",bg:"/images/19.png",score:{P:1}},{id:"q19d",label:"A documentary",bg:"/images/19.png",score:{T:1}}]},{id:"q20",text:"Oh no - someone is trying to pull off an art heist! Which skill are you using to stop them?",options:[{id:"q20a",label:"Time travel",bg:"/images/20.png",score:{T:1}},{id:"q20b",label:"Teleportation",bg:"/images/20.png",score:{P:1}},{id:"q20c",label:"Mind control",bg:"/images/20.png",score:{J:1}},{id:"q20d",label:"Laser vision",bg:"/images/20.png",score:{S:1}}]},{id:"q21",text:"What an insane trip! You can’t wait to debrief with everyone at Chloe & Jana’s Friendsgiving. Which cocktail are you asking the bartender for?",options:[{id:"q21a",label:"Margarita",bg:"/images/21.png",score:{E:1,P:1},nextPath:"hype"},{id:"q21b",label:"Old Fashioned",bg:"/images/21.png",score:{I:1,S:1},nextPath:"chill"},{id:"q21c",label:"Espresso martini",bg:"/images/21.png",score:{E:1,J:1},nextPath:"hype"},{id:"q21d",label:"Aperol spritz",bg:"/images/21.png",score:{I:1,F:1},nextPath:"chill"}]},{id:"q22",text:"Someone just handed you the mic - which karaoke banger are you singing?",options:[{id:"q22a",label:`"Don't Stop Believin" by Journey`,bg:"/images/22.png",score:{N:1,P:1}},{id:"q22b",label:'"Rake It Up" by Yo Gotti ft. Nicki Minaj',bg:"/images/22.png",score:{E:1,T:1}},{id:"q22c",label:'"Love Story" by Taylor Swift',bg:"/images/22.png",score:{N:1,F:1}},{id:"q22d",label:'"Locked Out of Heaven" by Bruno Mars',bg:"/images/22.png",score:{E:1,P:1}}]},{id:"q23",text:"Whoa, a really hot person just walked past you. What do they smell like?",options:[{id:"q23a",label:"Jasmine flowers",bg:"/images/23.png",score:{N:1}},{id:"q23b",label:"A dark forest",bg:"/images/23.png",score:{I:1}},{id:"q23c",label:"Clean laundry",bg:"/images/23.png",score:{J:1}},{id:"q23d",label:"Sugar cookies",bg:"/images/23.png",score:{F:1}}]},{id:"q24",text:"We’re chilling on the couch and it’s your turn to pick a board game. Which is your favorite?",options:[{id:"q24a",label:"Hues & Cues",bg:"/images/24.png",score:{N:1,F:1}},{id:"q24b",label:"Wavelength",bg:"/images/24.png",score:{N:1,T:1}},{id:"q24c",label:"Catan",bg:"/images/24.png",score:{T:1,J:1}},{id:"q24d",label:"Uno",bg:"/images/24.png",score:{S:1}}]},{id:"q25",text:"Everyone’s raving that your dish is the best at the party. What did you cook?",options:[{id:"q25a",label:"Turkey",bg:"/images/25.png",score:{E:1,J:1}},{id:"q25b",label:"Mac & cheese",bg:"/images/25.png",score:{F:1}},{id:"q25c",label:"Stuffing",bg:"/images/25.png",score:{P:1}},{id:"q25d",label:"Apple pie",bg:"/images/25.png",score:{I:1,S:1}}]}];function h(e,t,i){e.innerHTML=`
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
  `,document.getElementById("startBtn").addEventListener("click",t),document.getElementById("menuBtn").addEventListener("click",i)}function m(e){if(!e)return"";let t=e.trim();return/^(https?:)?\/\//i.test(t)?t:(t=t.replace(/^\/+/,""),t.startsWith("images/")||(t="images/"+t),"/friendsgiving/"+t)}function y(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function N(e,t,i){const o=t.options[0]?.bg||"",n=o?m(o):"";e.innerHTML=`
    <div class="card">
      <div class="q-text">${y(t.text)}</div>
      <div class="question-image-container">
        ${n?`<img src="${n}" alt="${y(t.text)}" />`:""}
      </div>
      <div class="answers" id="answers"></div>
    </div>
  `;const a=e.querySelector("#answers");t.options.forEach(s=>{const r=document.createElement("button");r.className="answer-btn",r.textContent=s.label,r.addEventListener("click",()=>i(s)),a.appendChild(r)})}const l=[{type:"INFP",flavor:"Cookies & Cream",subtitle:"Dreamy classic",description:"Soft & introspective.",image:"/images/menu/INFP.png"},{type:"ENFJ",flavor:"Strawberry Cheesecake",subtitle:"Warm & generous",description:"Bold and caring.",image:"/images/menu/ENFJ.png"},{type:"ENTJ",flavor:"Peppermint Bark",subtitle:"Forceful & crisp",description:"A strong presence.",image:"/images/menu/ENTJ.png"},{type:"ESFP",flavor:"Cotton Candy",subtitle:"Bright & sparkly",description:"Loud and playful.",image:"/images/menu/ESFP.png"},{type:"ISFP",flavor:"Honey Lavender",subtitle:"Soft & creative",description:"Gentle and artistic.",image:"/images/menu/ISFP.png"},{type:"ENFP",flavor:"Ube",subtitle:"Imaginative purple swirl",description:"Unconventional and curious.",image:"/images/menu/ENFP.png"},{type:"INFJ",flavor:"Rocky Road",subtitle:"Mysterious & complex",description:"Deep and comforting.",image:"/images/menu/INFJ.png"},{type:"INTJ",flavor:"Pistachio",subtitle:"Thoughtful & refined",description:"Earthy and wise.",image:"/images/menu/INTJ.png"},{type:"ENTP",flavor:"Mint Chip",subtitle:"Clever & zingy",description:"Playful contrarian.",image:"/images/menu/ENTP.png"},{type:"ESFJ",flavor:"Birthday Cake",subtitle:"Warm host",description:"Comforting and celebratory.",image:"/images/menu/ESFJ.png"},{type:"ISFJ",flavor:"Chocolate",subtitle:"Dependable delight",description:"Classic and reliable.",image:"/images/menu/ISFJ.png"},{type:"INTP",flavor:"Coffee",subtitle:"Curious & caffeinated",description:"Analytical and bittersweet.",image:"/images/menu/INTP.png"},{type:"ESTJ",flavor:"Salted Caramel",subtitle:"Organized & bold",description:"Structured with a bite.",image:"/images/menu/ESTJ.png"},{type:"ISTJ",flavor:"Vanilla",subtitle:"Classic & steady",description:"Simple and timeless.",image:"/images/menu/ISTJ.png"},{type:"ESTP",flavor:"Orange Creamsicle",subtitle:"Energetic & bright",description:"Bold and playful.",image:"/images/menu/ESTP.png"},{type:"ISTP",flavor:"Lemon Sorbet",subtitle:"Practical & crisp",description:"Practical and refreshing.",image:"/images/menu/ISTP.png"}];async function C(e){try{const i=await(await fetch(e,{mode:"cors"})).blob();if(navigator.clipboard&&window.ClipboardItem){const o=new window.ClipboardItem({[i.type]:i});return await navigator.clipboard.write([o]),!0}else{const o=URL.createObjectURL(i);return window.open(o,"_blank"),setTimeout(()=>URL.revokeObjectURL(o),1e4),!1}}catch(t){return console.error("copyImageToClipboard error",t),!1}}function F(e,t){const i=l.find(s=>s.type===t)||l[0],o=m(i.image);e.innerHTML=`
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
              src="${o}"
              alt="${i.flavor}"
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
  `,document.getElementById("homeBtn").addEventListener("click",()=>{location.hash="#/"});const n=document.getElementById("copyBtn"),a=document.getElementById("copyStatus");n.addEventListener("click",async()=>{n.disabled=!0,a.textContent="...",await C(o)?a.textContent="Copied!":a.textContent="Opened image (save manually)",setTimeout(()=>{a.textContent="",n.disabled=!1},1500)})}function B(e){e.innerHTML=`
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
  `;const t=e.querySelector("#menuItem"),i=e.querySelector("#leftBtn"),o=e.querySelector("#rightBtn"),n=e.querySelector("#homeBtn");let a=0;function s(r){if(!t)return;const u=l[r];t.innerHTML=`
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
          src="${m(u.image)}"
          alt="${u.flavor}"
          class="menu-image"
          style="
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
          "
        />
      </div>
    `}s(a),i&&i.addEventListener("click",()=>{a=(a-1+l.length)%l.length,s(a)}),o&&o.addEventListener("click",()=>{a=(a+1)%l.length,s(a)}),n&&n.addEventListener("click",()=>{location.hash="#/"})}const J="https://script.google.com/macros/s/AKfycbx9ut9PMrNjkpOcpU8mT6ReD5UKm3yZlryM4rY9P_xDwc_cR7e_lNQp2pDJQbXvta2gEA/exec",g=document.getElementById("app");function q(){return{E:0,I:0,N:0,S:0,F:0,T:0,J:0,P:0}}function L(e,t){if(t)for(const i of Object.keys(t))e[i]=(e[i]||0)+t[i]}let v="",b=[],p=q(),d=[],c=0;function w(){g.innerHTML=`
    <div class="card">
      <h2>What's your name?</h2>
      <div class="name-row">
        <input id="nameInput" placeholder="Your name" />
      </div>
      <div style="margin-top:12px"><button class="primary" id="startBtn">Start</button></div>
    </div>
  `,document.getElementById("startBtn").onclick=()=>{const e=document.getElementById("nameInput").value.trim();if(!e){alert("Please enter your name.");return}v=e,W()},document.getElementById("menuBtn").onclick=()=>{location.hash="#/menu"}}function W(){d=["q1","q2","q3","q4","q21"],c=0,b=[],p=q(),x()}function R(e){return k.find(t=>t.id===e)}function x(){if(c>=d.length){O();return}const e=d[c],t=R(e);N(g,t,i=>{M(e,i)})}function M(e,t){if(b.push({qid:e,optId:t.id,score:t.score,nextPath:t.nextPath}),L(p,t.score),e==="q4"&&t.nextPath){let i=[];t.nextPath==="disney"?i=["q5","q6","q7","q8"]:t.nextPath==="aquarium"?i=["q9","q10","q11","q12"]:t.nextPath==="camping"?i=["q13","q14","q15","q16"]:t.nextPath==="museum"&&(i=["q17","q18","q19","q20"]),d.splice(c+1,0,...i)}if(e==="q21"&&t.nextPath){let i=[];t.nextPath==="hype"?i=["q22","q23"]:i=["q24","q25"],d.splice(c+1,0,...i)}c++,x()}function A(e){const t=e.E||0,i=e.I||0,o=e.N||0,n=e.S||0,a=e.F||0,s=e.T||0,r=e.J||0,u=e.P||0,I=t>=i?"E":"I",E=o>n?"N":"S",T=a>s?"F":"T",P=r>=u?"J":"P";return`${I}${E}${T}${P}`}function O(){const e=A(p);j(e).catch(()=>{}),F(g,e)}async function j(e){const t={name:v,type:e,totals:p,answers:b,path:d,submittedAt:new Date().toISOString()};try{await fetch(J,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t)})}catch(i){console.error("submit error",i)}}function S(){const e=location.hash||"#/";e==="#/"||e===""?h(g,()=>f(),()=>{location.hash="#/menu"}):e==="#/menu"?B(g):e==="#/quiz"?w():h(g,()=>f(),()=>{location.hash="#/menu"})}function f(){location.hash="#/quiz",w()}window.addEventListener("hashchange",S);S();
