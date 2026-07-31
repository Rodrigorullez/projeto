function toggleMode() {
  const html = document.documentElement;

  const img = document.querySelector("#profile img")

  html.classList.toggle("light");

  img.setAttribute("src", html.classList.contains("light") ? "./assets/avatar-light.png" : "./assets/avatar.png");
  
}
