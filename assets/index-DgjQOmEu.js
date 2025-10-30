(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://script.google.com/macros/s/AKfycbxoKQj_aeScbbpyj5-hjhdlQ-PklxcbG_fFIWMesxRoSxupdN4-ARLLScVM4hCx8kuimw/exec",l=document.querySelector("#app");l.innerHTML=`
  <form id="questionForm" style="display:flex;flex-direction:column;gap:1rem;width:320px;margin:5rem auto;padding:2rem;border-radius:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.1);background:white;font-family:sans-serif;">
    <h2>Submit a Question</h2>
    <label>
      Question:
      <textarea name="question" rows="3" required style="width:100%;"></textarea>
    </label>
    <label>
      Importance (1-5):
      <input 
        type="number" 
        name="rank" 
        min="1" 
        max="5" 
        required 
        style="-moz-appearance: textfield; width:100%;" 
      />
    </label>
    <button type="submit" style="padding:0.5rem;border:none;border-radius:0.5rem;background:#2563eb;color:white;cursor:pointer;">
      Submit
    </button>
    <div id="status" style="text-align:center;font-size:0.9rem;"></div>
  </form>
`;const c=document.createElement("style");c.textContent=`
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;document.head.appendChild(c);const i=document.getElementById("questionForm"),s=document.getElementById("status");i.addEventListener("submit",async u=>{u.preventDefault();const r=(i.elements.namedItem("question")?.value||"").trim(),n=Number(i.elements.namedItem("rank")?.value);if(!r||isNaN(n)||n<1||n>5){s.textContent="❌ Please enter a valid question and a rank between 1 and 5";return}s.textContent="Submitting...";try{await fetch(d,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({question:r,rank:n})}),s.textContent="✅ Submitted successfully!",i.reset()}catch(o){console.error("Error submitting form:",o),s.textContent="❌ Error submitting the form."}});
