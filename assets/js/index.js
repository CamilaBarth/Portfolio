/*------------- TOGGLE MENU SHOW -----------------*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav--toggle", "nav-item");

/*--------------- REMOVE MENU MOBILE --------------------*/
const navLink = document.querySelectorAll(".navbar-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//-------------------- ACTIVE LINK -----------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove a class "active" to all links
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add the class "active" to the selected item
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

//---------------- SCROLL TO THE TOP ----------------//

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

/*------------------------- SCROLL REVEAL -----------------------------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //reset: true,
});

sr.reveal(".skill-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });
sr.reveal(".skill-img", { interval: 200 });
sr.reveal(".project-card", { interval: 200 });

// ------------- CLEAR CONTACT FORM ----------------/

function ClearForm() {
  var form = document.getElementsById(".contact--input");
  for (var i = 0; i < form.length; i++) {
    form[i].value = "";
  }
}
