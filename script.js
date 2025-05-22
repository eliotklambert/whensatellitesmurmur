document.addEventListener("DOMContentLoaded", () => {
  fetch("/whensatellitesmurmur/nav.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("main-nav").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load nav:", err));
});
