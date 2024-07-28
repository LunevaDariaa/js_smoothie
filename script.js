// scripts.js

document.getElementById("orderButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const ingredients = Array.from(
    document.querySelectorAll('input[name="ingredients"]:checked')
  ).map((el) => el.value);

  const smoothie = new Smoothie(name, size, base, ingredients);
  displayOrder(smoothie);
});

class Smoothie {
  constructor(name, size, base, ingredients) {
    this.name = name;
    this.size = size;
    this.base = base;
    this.ingredients = ingredients;
  }

  getDescription() {
    return `${this.name} ordered a ${this.size} smoothie with ${
      this.base
    } base and the following ingredients: ${this.ingredients.join(", ")}`;
  }
}

function displayOrder(smoothie) {
  const orderSummary = document.getElementById("orderSummary");
  orderSummary.innerHTML = `<p>${smoothie.getDescription()}</p>`;
  updateSmoothieGlass(smoothie);
}

function updateSmoothieGlass(smoothie) {
  const smoothieContent = document.getElementById("smoothieContent");
  let height = 0;

  if (smoothie.size === "small") height = 30;
  if (smoothie.size === "medium") height = 60;
  if (smoothie.size === "large") height = 90;

  smoothie.ingredients.forEach((ingredient) => {
    if (ingredient === "watermelon")
      smoothieContent.style.backgroundColor = "pink";
    if (ingredient === "blueberry")
      smoothieContent.style.backgroundColor = "blue";
    if (ingredient === "strawberry")
      smoothieContent.style.backgroundColor = "red";
    if (ingredient === "banana")
      smoothieContent.style.backgroundColor = "yellow";
    if (ingredient === "mango")
      smoothieContent.style.backgroundColor = "orange";
    // Add more colors for different ingredients as needed
  });

  smoothieContent.style.height = `${height}%`;
}
