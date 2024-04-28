hljs.highlightAll();

const copyBtn = document.querySelector(".copy-button");
const code = document.querySelector(".code");
const inp = document.querySelector(".inv-inp");

inp.value = code.textContent;
console.log(inp.value);

copyBtn.addEventListener("click", async () => {
  navigator.clipboard.writeText(inp.value);
  alert("Copied!")
});


