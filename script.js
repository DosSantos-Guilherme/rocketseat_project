function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/photo.png")
    img.setAttribute("alt", "imagem de Guilherme com fundo cinza")
  } else {
    img.setAttribute("src", "./assets/photo_linkedin.jpg")
  }
}
