import "./styles.css";

import { setupHomeButton } from "./modules/home.js";
import { setupAboutButton } from "./modules/about.js";
import { setupContactButton } from "./modules/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  setupHomeButton();
  setupAboutButton();
  setupContactButton();
});
