// Surprise message
function showMessage() {
  alert("I love you forever! 💖💜");
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.width = 10 + Math.random() * 20 + "px";
  heart.style.height = heart.style.width;
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

// Fade-in cards on scroll
const cards = document.querySelectorAll(".image-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.animation = "fadeInUp 1s forwards";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
