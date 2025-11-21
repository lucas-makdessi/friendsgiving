(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const k=[{id:"q1",text:"Good morning - it`s time for school! What are you grabbing as you run out the door?",bg:"/images/1.png",options:[{id:"q1a",label:"Lululemon belt bag",score:{T:1}},{id:"q1b",label:"A trustworthy lip balm",score:{J:1}},{id:"q1c",label:"Sunnies",score:{E:1}},{id:"q1d",label:"Your favorite plushie",score:{F:1}}]},{id:"q2",text:"Riiing, class just started and you need to take notes. What are you jotting everything down on?",bg:"/images/2.png",options:[{id:"q2a",label:"Plain printer paper",score:{P:1}},{id:"q2b",label:"Lined notebook paper",score:{J:1}},{id:"q2c",label:"Graph paper",score:{J:2}},{id:"q2d",label:"The back of a green flyer for the school play",score:{P:2}}]},{id:"q3",text:"Finally, lunch is here! You get to dig into the meal you packed from:",bg:"/images/3.png",options:[{id:"q3a",label:"Whole Foods",score:{T:1}},{id:"q3b",label:"Trader Joe's",score:{N:1}},{id:"q3c",label:"Costco",score:{S:1}},{id:"q3d",label:"LOL. I would never pack lunch",score:{E:1}}]},{id:"q4",text:"Let's play! Which is your activity of choice at recess?",bg:"/images/4.png",options:[{id:"q4a",label:"Tetherball",score:{T:1},nextPath:"camping"},{id:"q4b",label:"Sidewalk chalk",score:{F:1},nextPath:"museum"},{id:"q4c",label:"Rubik's cube",score:{I:1},nextPath:"aquarium"},{id:"q4d",label:"Imagination",score:{E:1},nextPath:"disney"}]},{id:"q5",text:"Who are you in the Disneyland squad?",bg:"/images/5.png",options:[{id:"q5a",label:"Lightning Lane pro - I'm making sure we ride every ride at least three times and you bet we're staying from rope drop until park close.",score:{J:1}},{id:"q5b",label:"Backpack mule - I'm carrying everyone's jackets, water bottles and yes, of course I packed sunscreen.",score:{T:1}},{id:"q5c",label:"Hype king - I will take pics, I will eat every snack put in front of me, I'm just happy to be here.",score:{P:1}},{id:"q5d",label:"The burden - let's be real, I'm just slowing the group down. I walk slow, always need to pee and am sooo bored waiting in all the lines.",score:{S:1}}]},{id:"q6",text:"Which iconic Disneyland mountain are you?",bg:"/images/6.png",options:[{id:"q6a",label:"Space Mountain",score:{E:1,T:1}},{id:"q6b",label:"Splash Mountain",score:{E:1,F:1}},{id:"q6c",label:"Big Thunder Mountain Railroad",score:{I:1,S:1}},{id:"q6d",label:"Matterhorn Bobsleds",score:{I:1,P:1}}]},{id:"q7",text:"Now, you’re in Avengers Campus. Which of these superheroes do you wish you could trade lives with?",bg:"/images/7.png",options:[{id:"q7a",label:"The Hulk",score:{S:1,P:1}},{id:"q7b",label:"Spiderman",score:{E:1,F:1}},{id:"q7c",label:"Dr. Strange",score:{N:1,J:1}},{id:"q7d",label:"Baby Groot",score:{N:1,F:1}}]},{id:"q8",text:"No Disney day is complete without the best snack in the park, which is obviously a:",bg:"/images/8.png",options:[{id:"q8a",label:"Churro",score:{J:1}},{id:"q8b",label:"Dole whip",score:{E:1}},{id:"q8c",label:"Turkey leg",score:{P:1}},{id:"q8d",label:"Cosmic Cream Orb (IYKYK)",score:{T:1}}]},{id:"q9",text:"What are we most likely to find you doing at the aquarium?",bg:"/images/9.png",options:[{id:"q9a",label:"Planning the route to make sure you see every exhibit",score:{T:1}},{id:"q9b",label:"Chatting with the employees about your childhood dream of becoming a marine biologist",score:{E:1,N:1}},{id:"q9c",label:"Watching the giant kelp tank and admiring how peaceful it is",score:{I:1,F:1}},{id:"q9d",label:"Interacting with whatever you can get your hands on at the touch tank",score:{S:1,P:1}}]},{id:"q10",text:"Wow, you never realized all the cool things that these animals can do. Which underwater ability would you most want to steal?",bg:"/images/10.png",options:[{id:"q10a",label:"Razor sharp bite",score:{J:1}},{id:"q10b",label:"Speed swimming",score:{S:1}},{id:"q10c",label:"Echolocation",score:{E:1}},{id:"q10d",label:"Camouflage",score:{I:1}}]},{id:"q11",text:"If you could be reborn as a sea creature, which would it be?",bg:"/images/11.png",options:[{id:"q11a",label:"Shark",score:{E:1,S:1}},{id:"q11b",label:"Jellyfish",score:{E:1,N:1}},{id:"q11c",label:"Octopus",score:{I:1,T:1}},{id:"q11d",label:"Shrimp",score:{I:1,F:1}}]},{id:"q12",text:"It's your turn to help run the aquarium. Which job would you excel at?",bg:"/images/12.png",options:[{id:"q12a",label:"Testing the water quality of the tanks",score:{I:1,S:1}},{id:"q12b",label:"Scuba diving during the big feeding show",score:{E:1,P:1}},{id:"q12c",label:"Training the dolphins to do cool tricks",score:{N:1,P:1}},{id:"q12d",label:"Educating the visitors with fun facts",score:{E:1,T:1}}]},{id:"q13",text:"What can the camping group rely on you for?",bg:"/images/13.png",options:[{id:"q13a",label:"Starting a fire",score:{T:1}},{id:"q13b",label:"Packing supplies",score:{J:1}},{id:"q13c",label:"Telling scary stories",score:{E:1}},{id:"q13d",label:"Complaining about being outside",score:{F:1}}]},{id:"q14",text:"You are now one with nature. Which element are you?",bg:"/images/14.png",options:[{id:"q14a",label:"Fire",score:{J:1}},{id:"q14b",label:"Water",score:{N:1}},{id:"q14c",label:"Earth",score:{S:1}},{id:"q14d",label:"Air",score:{P:1}}]},{id:"q15",text:"Bear attack! How do you survive?",bg:"/images/15.png",options:[{id:"q15a",label:"Outrun it with super speed",score:{I:1,S:1}},{id:"q15b",label:"Fight it with super strength",score:{F:1,J:1}},{id:"q15c",label:"Charm it with your ability to talk to animals",score:{E:1,N:1}},{id:"q15d",label:"Confuse it by creating clones of yourself",score:{T:1,J:1}}]},{id:"q16",text:"You lost. The bear forces you to give up one of your senses, which do you surrender?",bg:"/images/16.png",options:[{id:"q16a",label:"Sight",score:{N:1}},{id:"q16b",label:"Sound",score:{I:1}},{id:"q16c",label:"Smell",score:{T:1}},{id:"q16d",label:"Taste",score:{J:1}},{id:"q16e",label:"Touch",score:{I:1}}]},{id:"q17",text:"What are we most likely to find you doing at the museum?",bg:"/images/17.png",options:[{id:"q17a",label:"Carefully reading the plaques next to each painting",score:{I:1,T:1}},{id:"q17b",label:"Asking your friends how the art speaks to their souls",score:{N:1,F:1}},{id:"q17c",label:"Taking selfies with the Tiktok famous pieces",score:{E:1,S:1}},{id:"q17d",label:"Speed running through the exhibits to get to the gift shop",score:{S:1,T:1}}]},{id:"q18",text:"What art speaks most to you?",bg:"/images/18.png",options:[{id:"q18a",label:"Abstract print made of geometric shapes",score:{N:1}},{id:"q18b",label:"Hipster photograph in black & white",score:{S:1}},{id:"q18c",label:"Romantic landscape with soft pastels",score:{F:1}},{id:"q18d",label:"Still life painting utilizing earthy tones",score:{S:1}}]},{id:"q19",text:"It’s your turn to contribute a piece to the museum. Which form of media would you choose?",bg:"/images/19.png",options:[{id:"q19a",label:"Finger painting",score:{N:1}},{id:"q19b",label:"Pottery",score:{J:1}},{id:"q19c",label:"Interpretive dance",score:{P:1}},{id:"q19d",label:"A documentary",score:{T:1}}]},{id:"q20",text:"Oh no - someone is trying to pull off an art heist! Which skill are you using to stop them?",bg:"/images/20.png",options:[{id:"q20a",label:"Time travel",score:{T:1}},{id:"q20b",label:"Teleportation",score:{P:1}},{id:"q20c",label:"Mind control",score:{J:1}},{id:"q20d",label:"Laser vision",score:{S:1}}]},{id:"q21",text:"What an insane trip! You can’t wait to debrief with everyone at Chloe & Jana’s Friendsgiving. Which cocktail are you asking the bartender for?",bg:"/images/21.png",options:[{id:"q21a",label:"Margarita",score:{E:1,P:1},nextPath:"hype"},{id:"q21b",label:"Old Fashioned",score:{I:1,S:1},nextPath:"chill"},{id:"q21c",label:"Espresso martini",score:{E:1,J:1},nextPath:"hype"},{id:"q21d",label:"Aperol spritz",score:{I:1,F:1},nextPath:"chill"}]},{id:"q22",text:"Someone just handed you the mic - which karaoke banger are you singing?",bg:"/images/22.png",options:[{id:"q22a",label:`"Don't Stop Believin" by Journey`,score:{N:1,P:1}},{id:"q22b",label:'"Rake It Up" by Yo Gotti ft. Nicki Minaj',score:{E:1,T:1}},{id:"q22c",label:'"Love Story" by Taylor Swift',score:{N:1,F:1}},{id:"q22d",label:'"Locked Out of Heaven" by Bruno Mars',score:{E:1,P:1}}]},{id:"q23",text:"Whoa, a really hot person just walked past you at the bar. What do they smell like?",bg:"/images/23.png",options:[{id:"q23a",label:"Jasmine flowers",score:{N:1}},{id:"q23b",label:"A dark forest",score:{I:1}},{id:"q23c",label:"Clean laundry",score:{J:1}},{id:"q23d",label:"Sugar cookies",score:{F:1}}]},{id:"q24",text:"We’re chilling on the couch and it’s your turn to pick a board game. Which is your favorite?",bg:"/images/24.png",options:[{id:"q24a",label:"Hues & Cues",score:{N:1,F:1}},{id:"q24b",label:"Wavelength",score:{N:1,T:1}},{id:"q24c",label:"Catan",score:{T:1,J:1}},{id:"q24d",label:"Uno",score:{S:1}}]},{id:"q25",text:"Everyone’s raving that your dish is the best at the party. What did you cook?",bg:"/images/25.png",options:[{id:"q25a",label:"Turkey",score:{E:1,J:1}},{id:"q25b",label:"Mac & cheese",score:{F:1}},{id:"q25c",label:"Stuffing",score:{P:1}},{id:"q25d",label:"Apple pie",score:{I:1,S:1}}]},{id:"disney",text:"BEST FIELD TRIP EVER - you're headed to the Happiest Place on Earth!",bg:"/images/DISNEY.png",options:[{id:"next",label:"Continue",score:{}}]},{id:"aquarium",text:"BEST FIELD TRIP EVER - you’re at the aquarium!",bg:"/images/AQUARIUM.png",options:[{id:"next",label:"Continue",score:{}}]},{id:"camping",text:"BEST FIELD TRIP EVER - you're going camping!",bg:"/images/CAMPING.png",options:[{id:"next",label:"Continue",score:{}}]},{id:"museum",text:"BEST FIELD TRIP EVER - you're at the art museum!",bg:"/images/MUSEUM.png",options:[{id:"next",label:"Continue",score:{}}]}];function b(e,t,i){e.innerHTML=`
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
  `,document.getElementById("startBtn").addEventListener("click",t),document.getElementById("menuBtn").addEventListener("click",i)}function p(e){if(!e)return"";let t=e.trim();return/^(https?:)?\/\//i.test(t)?t:(t=t.replace(/^\/+/,""),t.startsWith("images/")||(t="images/"+t),"/friendsgiving/"+t)}function y(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function N(e,t,i){const s=p(t.bg);e.innerHTML=`
    <div class="card">
      <div class="q-text">${y(t.text)}</div>
      <div class="question-image-container">
        ${s?`<img src="${s}" alt="${y(t.text)}" />`:""}
      </div>
      <div class="answers" id="answers"></div>
    </div>
  `;const a=e.querySelector("#answers");t.options.forEach(o=>{const n=document.createElement("button");n.className="answer-btn",n.textContent=o.label,n.addEventListener("click",()=>i(o)),a.appendChild(n)})}const r=[{type:"INFP",flavor:"Cookies & Cream",subtitle:"Dreamy classic",description:"Soft & introspective.",image:"/images/menu/INFP.png"},{type:"ENFJ",flavor:"Strawberry Cheesecake",subtitle:"Warm & generous",description:"Bold and caring.",image:"/images/menu/ENFJ.png"},{type:"ENTJ",flavor:"Peppermint Bark",subtitle:"Forceful & crisp",description:"A strong presence.",image:"/images/menu/ENTJ.png"},{type:"ESFP",flavor:"Cotton Candy",subtitle:"Bright & sparkly",description:"Loud and playful.",image:"/images/menu/ESFP.png"},{type:"ISFP",flavor:"Honey Lavender",subtitle:"Soft & creative",description:"Gentle and artistic.",image:"/images/menu/ISFP.png"},{type:"ENFP",flavor:"Ube",subtitle:"Imaginative purple swirl",description:"Unconventional and curious.",image:"/images/menu/ENFP.png"},{type:"INFJ",flavor:"Rocky Road",subtitle:"Mysterious & complex",description:"Deep and comforting.",image:"/images/menu/INFJ.png"},{type:"INTJ",flavor:"Pistachio",subtitle:"Thoughtful & refined",description:"Earthy and wise.",image:"/images/menu/INTJ.png"},{type:"ENTP",flavor:"Mint Chip",subtitle:"Clever & zingy",description:"Playful contrarian.",image:"/images/menu/ENTP.png"},{type:"ESFJ",flavor:"Birthday Cake",subtitle:"Warm host",description:"Comforting and celebratory.",image:"/images/menu/ESFJ.png"},{type:"ISFJ",flavor:"Chocolate",subtitle:"Dependable delight",description:"Classic and reliable.",image:"/images/menu/ISFJ.png"},{type:"INTP",flavor:"Coffee",subtitle:"Curious & caffeinated",description:"Analytical and bittersweet.",image:"/images/menu/INTP.png"},{type:"ESTJ",flavor:"Salted Caramel",subtitle:"Organized & bold",description:"Structured with a bite.",image:"/images/menu/ESTJ.png"},{type:"ISTJ",flavor:"Vanilla",subtitle:"Classic & steady",description:"Simple and timeless.",image:"/images/menu/ISTJ.png"},{type:"ESTP",flavor:"Orange Creamsicle",subtitle:"Energetic & bright",description:"Bold and playful.",image:"/images/menu/ESTP.png"},{type:"ISTP",flavor:"Lemon Sorbet",subtitle:"Practical & crisp",description:"Practical and refreshing.",image:"/images/menu/ISTP.png"}];function F(e,t){const i=r.find(a=>a.type===t)||r[0],s=p(i.image);e.innerHTML=`
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
              alt="${i.flavor}"
              class="menu-image"
              style="
                width: 100%;
                height: auto;
                display: block;
                object-fit: contain;
                user-select: none;
                -webkit-user-select: none;
              "
            />
          </div>
        </div>
      </div>

      <p style="
        margin-top:14px;
        text-align:center;
        color:var(--muted);
        font-size: 0.95rem;
      ">
        Tap &amp; hold the image to copy or save on mobile
      </p>
    </div>
  `,document.getElementById("homeBtn").addEventListener("click",()=>{location.hash="#/"})}function C(e){e.innerHTML=`
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
  `;const t=e.querySelector("#menuItem"),i=e.querySelector("#leftBtn"),s=e.querySelector("#rightBtn"),a=e.querySelector("#homeBtn");let o=0;function n(m){if(!t)return;const u=r[m];t.innerHTML=`
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
          src="${p(u.image)}"
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
    `}n(o),i&&i.addEventListener("click",()=>{o=(o-1+r.length)%r.length,n(o)}),s&&s.addEventListener("click",()=>{o=(o+1)%r.length,n(o)}),a&&a.addEventListener("click",()=>{location.hash="#/"})}const J="https://script.google.com/macros/s/AKfycbx9ut9PMrNjkpOcpU8mT6ReD5UKm3yZlryM4rY9P_xDwc_cR7e_lNQp2pDJQbXvta2gEA/exec",l=document.getElementById("app");function q(){return{E:0,I:0,N:0,S:0,F:0,T:0,J:0,P:0}}function B(e,t){if(t)for(const i of Object.keys(t))e[i]=(e[i]||0)+t[i]}let v="",h=[],g=q(),d=[],c=0;function x(){l.innerHTML=`
    <div class="card">
      <h2>What's your name?</h2>
      <div class="name-row">
        <input id="nameInput" placeholder="Your name" />
      </div>
      <div style="margin-top:12px"><button class="primary" id="startBtn">Start</button></div>
    </div>
  `,document.getElementById("startBtn").onclick=()=>{const e=document.getElementById("nameInput").value.trim();if(!e){alert("Please enter your name.");return}v=e,L()},document.getElementById("menuBtn").onclick=()=>{location.hash="#/menu"}}function L(){d=["q1","q2","q3","q4","q21"],c=0,h=[],g=q(),w()}function W(e){return k.find(t=>t.id===e)}function w(){if(c>=d.length){R();return}const e=d[c],t=W(e);N(l,t,i=>{M(e,i)})}function M(e,t){if(h.push({qid:e,optId:t.id,score:t.score,nextPath:t.nextPath}),B(g,t.score),e==="q4"&&t.nextPath){let i=[];t.nextPath==="disney"?i=["disney","q5","q6","q7","q8"]:t.nextPath==="aquarium"?i=["aquarium","q9","q10","q11","q12"]:t.nextPath==="camping"?i=["camping","q13","q14","q15","q16"]:t.nextPath==="museum"&&(i=["museum","q17","q18","q19","q20"]),d.splice(c+1,0,...i)}if(e==="q21"&&t.nextPath){let i=[];t.nextPath==="hype"?i=["q22","q23"]:i=["q24","q25"],d.splice(c+1,0,...i)}c++,w()}function A(e){const t=e.E||0,i=e.I||0,s=e.N||0,a=e.S||0,o=e.F||0,n=e.T||0,m=e.J||0,u=e.P||0,I=t>=i?"E":"I",E=s>a?"N":"S",T=o>n?"F":"T",P=m>=u?"J":"P";return`${I}${E}${T}${P}`}function R(){const e=A(g);O(e).catch(()=>{}),F(l,e)}async function O(e){const t={name:v,type:e,totals:g,answers:h,path:d,submittedAt:new Date().toISOString()};try{await fetch(J,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t)})}catch(i){console.error("submit error",i)}}function S(){const e=location.hash||"#/";e==="#/"||e===""?b(l,()=>f(),()=>{location.hash="#/menu"}):e==="#/menu"?C(l):e==="#/quiz"?x():b(l,()=>f(),()=>{location.hash="#/menu"})}function f(){location.hash="#/quiz",x()}window.addEventListener("hashchange",S);S();
