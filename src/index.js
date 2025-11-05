import "./styles.css";

import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";

function setupHomeButton() {
  const button = document.getElementById("home-button");
  if (button) {
    button.addEventListener("click", Home);
  }
}

function setupAboutButton() {
  const button = document.getElementById("about-button");
  if (button) {
    button.addEventListener("click", About);
  }
}

function setupContactButton() {
  const button = document.getElementById("contact-button");
  if (button) {
    button.addEventListener("click", Contact);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupHomeButton();
  setupAboutButton();
  setupContactButton();

  Home();
});
