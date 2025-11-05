const content = document.querySelector("#content");

export default function Contact() {
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const description = document.createElement("p");
  description.textContent =
    "Have questions or want to make a reservation? Reach out to us!";

  const email = document.createElement("p");
  email.textContent = "Email: contact@restaurant.com";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 (555) 123-4567";

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(email);
  content.appendChild(phone);
}
