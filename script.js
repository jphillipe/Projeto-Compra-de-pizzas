let modalqt = 0;

const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);

//Listagem das Pizzas
//teste

pizzaJson.map((item, index) => {
  let pizzaItem = q(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".pizza-item").getAttribute("data-key");

    modalqt = 1;

    q(".pizzaBig img").src = pizzaJson[key].img;
    q(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    q(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    q(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(
      2
    )}`;

    q(".pizzaInfo--size.selected").classList.remove("selected");
    qa(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    q(".pizzaInfo--qt").innerHTML = modalqt;

    q(".pizzaWindowArea").style.opacity = 0;
    q(".pizzaWindowArea").style.display = "flex";

    setTimeout(() => {
      q(".pizzaWindowArea").style.opacity = 1;
    }, 50);
  });

  q(".pizza-area").append(pizzaItem);
});

//Eventos do Modal
function closeModal() {
  q(".pizzaWindowArea").style.opacity = 0;

  setTimeout(() => {
    q(".pizzaWindowArea").style.display = "none";
  }, 200);
}

qa(".pizzaInfo--cancelButton, pizzaInfo--cancelMobileButton ").forEach(
  (item) => {
    item.addEventListener("click", closeModal);
  }
);

q(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalqt > 1) {
    modalqt--;
    q(".pizzaInfo--qt").innerHTML = modalqt;
  }
});

q(".pizzaInfo--qtmais").addEventListener("click", () => {
  modalqt++;
  q(".pizzaInfo--qt").innerHTML = modalqt;
});

qa(".pizzaInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    q(".pizzaInfo--size.selected").classList.remove("selected");
    size.classList.add("selected");
  });
});
