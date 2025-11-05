const content = document.querySelector("#content");

export default function About() {
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "About Our Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "We are committed to providing the finest dining experience, with fresh ingredients and exceptional service.";

  content.appendChild(title);
  content.appendChild(description);
}
