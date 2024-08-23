// Cuenta regresiva
const countdown = () => {
  const eventDate = new Date("September 12, 2024 15:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (difference < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
  }
};

const countdownTimer = setInterval(countdown, 1000);

// Barra de Progreso y Scroll
window.onscroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Mostrar imágenes al hacer scroll
  document.querySelectorAll(".hidden-image").forEach(image => {
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (imagePosition < screenPosition) {
      image.classList.add("visible-image");
    }
  });
};

// Redirigir a WhatsApp
function confirmAttendance() {
  const phoneNumber = "+524921316264"; // Número de teléfono con código internacional
  const message = "¡Hola! Confirmo mi asistencia a la fiesta de Lupita.";
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// Redirigir a Google Maps
function openMap() {
  window.open("https://maps.app.goo.gl/TzDpyVAEHYCpreH86?g_st=aw", "_blank");
}
// Función para controlar el sonido
function toggleSound() {
  const audio = document.getElementById('background-audio');
  const soundIcon = document.getElementById('sound-icon');

  if (audio.paused) {
    audio.play();
    soundIcon.classList.remove('fa-volume-mute');
    soundIcon.classList.add('fa-volume-up');
  } else {
    audio.pause();
    soundIcon.classList.remove('fa-volume-up');
    soundIcon.classList.add('fa-volume-mute');
  }
}


