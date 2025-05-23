document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then((res) => res.text())
    .then((data) => {
      const navContainer = document.getElementById("main-nav");
      if (navContainer) {
        navContainer.innerHTML = data;
      } else {
        console.error("No element with id 'main-nav' found on the page.");
      }
    })
    .catch((err) => console.error("Failed to load nav:", err));
});
