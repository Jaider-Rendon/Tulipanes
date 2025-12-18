const envelope = document.querySelector(".envelope");
const button = document.getElementById("goToFlowers");



button.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "index1.html";
});

// 🌸 Función para lluvia de corazones
function rainHearts(duration) {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    // posición aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    // eliminar después de caer
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 200);

  // detener después de "duration"
  setTimeout(() => clearInterval(interval), duration);
}
