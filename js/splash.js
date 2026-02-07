document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  if (!splash) return;

  if (sessionStorage.getItem("splashShown")) {
    splash.remove();
    return;
  }

  sessionStorage.setItem("splashShown", "true");

  setTimeout(() => {
    splash.classList.add("hide");
    setTimeout(() => {
      splash.remove();
    }, 900);
  }, 1500);
});
