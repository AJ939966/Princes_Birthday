const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const wishBtn = document.getElementById("wishBtn");
const wishText = document.getElementById("wishText");
const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

openBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  openBtn.textContent = "Your surprise is open ❤️";
  openBtn.disabled = true;

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  createHearts(20);
});

function createHearts(count) {
  const symbols = ["♥️", "♡", "💗", "❤️"];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = 18 + Math.random() * 18 + "px";
    heart.style.color = "#ff9ec5";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation =
      floatHeart ${4 + Math.random() * 3}s linear forwards;

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
  }
}

wishBtn.addEventListener("click", () => {
  wishText.textContent =
    "Priyal, may every beautiful dream of yours come true. Happy Birthday! ❤️";

  wishBtn.textContent = "Wish made, my love 💗";
  wishBtn.disabled = true;

  createHearts(30);
});

finalBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  finalBtn.textContent = "All my love is with you ❤️";
  finalBtn.disabled = true;

  createHearts(25);

  finalMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

const heartStyle = document.createElement("style");

heartStyle.textContent = `
  @keyframes floatHeart {
    from {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translateY(-110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;

document.head.appendChild(heartStyle);
