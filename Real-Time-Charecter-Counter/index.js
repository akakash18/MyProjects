const textareaEl = document.getElementById("textArea");
const totalcounterEl = document.getElementById("total-counter");
const remainingcounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})

function updateCounter() {
    totalcounterEl.innerHTML = textareaEl.value.length;

    remainingcounterEl.innerHTML = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}