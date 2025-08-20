// hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});
// SignUp Login section
function openModal(type) {
  document.getElementById(type + "Modal").style.display = "flex";
}
function closeModal(type) {
  document.getElementById(type + "Modal").style.display = "none";
}

// Signup Form
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let contact = document.getElementById("signupContact").value;
  let password = document.getElementById("signupPassword").value;

  localStorage.setItem(
    "user",
    JSON.stringify({ name, email, contact, password })
  );
  alert("Signup Successful! Please Login.");
  closeModal("signup");
  openModal("login");
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login Successful! Welcome " + user.name);
    closeModal("login");
  } else {
    alert("Invalid email or password!");
  }
});

// RIDE SECTION
// ScrollReveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Reveal animations for Experience section
ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

// Reveal animations for Download section
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});
