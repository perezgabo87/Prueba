function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVh();
window.addEventListener('resize', setVh);

const input = document.getElementById("chatInput");
const btn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = text;
    messages.appendChild(msg);
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});

input.addEventListener("focus", () => {
  setTimeout(() => {
    input.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 300);
});
