let countdown = 5
const countdownElement = document.getElementById("countdown")

// Actualizar el contador cada segundo
const countdownInterval = setInterval(() => {
  countdown--
  if (countdownElement) {
    countdownElement.textContent = countdown
  }

  if (countdown <= 0) {
    clearInterval(countdownInterval)
  }
}, 1000)

// Limpiar intervalo cuando se abandona la página
window.addEventListener("beforeunload", () => {
  clearInterval(heightInterval)
})
