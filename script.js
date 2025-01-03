gsap.from(".hero-content", { duration: 2, y: -50, opacity: 0, ease: "power3.out" });

// Countdown Timer
const weddingDate = new Date("2025-06-15T00:00:00");
const timer = setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "The Big Day is Here!";
  }
}, 1000);

// Swiper.js Photo Carousel
const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Leaflet.js Map
const map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
L.marker([51.505, -0.09]).addTo(map).bindPopup("Sunshine Banquet Hall").openPopup();