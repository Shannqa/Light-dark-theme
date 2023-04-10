import icon from "./light_mode_FILL0_wght400_GRAD0_opsz48.png";

module.exports = function setTheme() {
  const themeIcon = new Image();
  themeIcon.src = icon;
  themeIcon.classList.add("");
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
};
document.querySelector(".theme-toggle").addEventListener("click", setTheme);
