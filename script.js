// Ajuste de altura para iframe
function sendHeight() {
  const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  window.parent.postMessage({ type: "setHeight", height: h }, "*")
}

window.addEventListener("load", sendHeight)
window.addEventListener("resize", sendHeight)

// Actualizar altura periódicamente
const heightInterval = setInterval(sendHeight, 800)

// Botón de WhatsApp con evento Pixel
const whatsappBtn = document.getElementById("btn-whatsapp")
const whatsappUrl = "https://wa.link/x4vdpr"

// Declare the fbq variable before using it
let fbq

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault()

    // Dispara el evento en Meta Pixel
    if (typeof fbq !== "undefined") {
      fbq("track", "Contact")
    }

    // Redirige después de un breve delay para asegurar el tracking
    setTimeout(() => {
      window.location.href = whatsappUrl
    }, 300)
  })
}

// Limpiar intervalo cuando se abandona la página
window.addEventListener("beforeunload", () => {
  clearInterval(heightInterval)
})
