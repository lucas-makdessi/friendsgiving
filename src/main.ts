const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoKQj_aeScbbpyj5-hjhdlQ-PklxcbG_fFIWMesxRoSxupdN4-ARLLScVM4hCx8kuimw/exec";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <form id="questionForm" style="display:flex;flex-direction:column;gap:1rem;width:320px;margin:5rem auto;padding:2rem;border-radius:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.1);background:white;font-family:sans-serif;">
    <h2>Submit a Question</h2>
    <label>
      Question:
      <textarea name="question" rows="3" required style="width:100%;"></textarea>
    </label>
    <label>
      Rank (1-5):
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
`;

const style = document.createElement("style");
style.textContent = `
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
document.head.appendChild(style);

const form = document.getElementById("questionForm") as HTMLFormElement;
const statusDiv = document.getElementById("status")!;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const question = ((form.elements.namedItem("question") as HTMLTextAreaElement)?.value || "").trim();
  const rank = Number((form.elements.namedItem("rank") as HTMLInputElement)?.value);

  if (!question || isNaN(rank) || rank < 1 || rank > 5) {
    statusDiv.textContent = "❌ Please enter a valid question and a rank between 1 and 5";
    return;
  }

  statusDiv.textContent = "Submitting...";

  try {
    // CORS-safe fetch for Apps Script
    await fetch(SCRIPT_URL, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ question, rank }),
    });

    // Cannot read response due to CORS, but assume success
    statusDiv.textContent = "✅ Submitted successfully!";
    form.reset();
  } catch (err) {
    console.error("Error submitting form:", err);
    statusDiv.textContent = "❌ Error submitting the form.";
  }
});
