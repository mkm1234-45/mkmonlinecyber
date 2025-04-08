console.log("MKM ONLINE CYBER loaded");
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
let mouse = { x: 0, y: 0 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX / window.innerWidth - 0.5;
  mouse.y = e.clientY / window.innerHeight - 0.5;
});

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      x: 0,
      y: 0,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      flicker: Math.random() * 0.02 + 0.005
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, i) => {
    const offsetX = mouse.x * 30;
    const offsetY = mouse.y * 30;

    star.x = star.baseX + offsetX;
    star.y = star.baseY + offsetY;

    // Flickering effect
    star.alpha += star.flicker;
    if (star.alpha > 1 || star.alpha < 0.3) {
      star.flicker = -star.flicker;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  });
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

createStars(200);
animateStars();
function toggleDetails(card) {
  card.classList.toggle("active");
}
let currentSlide = 0;
const track = document.querySelector('.testimonial-track');
const totalSlides = document.querySelectorAll('.testimonial-card').length;

function moveToSlide(slideIndex) {
  currentSlide = slideIndex;
  if (currentSlide >= totalSlides) currentSlide = 0;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  moveToSlide(currentSlide + 1);
}, 4000); // Change slide every 4 seconds