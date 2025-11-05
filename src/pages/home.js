import restaurantImage from "../images/restaurant.jpg";

const content = document.querySelector("#content");

export default function Home() {
  content.innerHTML = "";

  const imgElement = document.createElement("img");
  imgElement.src = restaurantImage;
  imgElement.alt = "Restaurant Image";

  const title = document.createElement("h1");
  title.textContent = "Welcome to Our Restaurant";

  const description = document.createElement("p");
  description.textContent = "Experience the finest dining with us.";

  content.appendChild(imgElement);
  content.appendChild(title);
  content.appendChild(description);
}
