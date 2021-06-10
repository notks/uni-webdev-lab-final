var ime = document.getElementById("ime");
var email = document.getElementById("email");
var telefon = document.getElementById("telefon");
var poruka = document.getElementById("poruka");
var form = document.getElementById("form");
var cartBtn = document.getElementById("addToCart");
var a = (e) => {
  console.log(localStorage.getItem("cart"));
  let storageCart = JSON.parse(localStorage.getItem("cart"));
  let cart = storageCart ? storageCart : [];
  let cartItem = {
    item: e.path[2].accessKey,
    img: e.path[2].childNodes[1].href,
  };

  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));
};

try {
  cartBtn.addEventListener("click", () => {
    console.log("click");
  });
} catch (error) {}

try {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("aaaaaaaaaa");
    if (ime.value && email.value && telefon.value && poruka.value) {
      if (isNaN(telefon.value)) {
        alert("Niste ispravno popunili sva polja");
      } else {
        alert("Uspjesno ste poslali poruku");
        window.location.reload(true);
      }
    }
  });
} catch (error) {}
var loadCart = () => {
  let totalPrice = 0;
  let main = document.getElementById("main_cart");
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((item) => {
    let proizvod = document.createElement("div");
    proizvod.classList.add("proizvod_cart");
    let img_link = document.createElement("a");
    img_link.href = item.img;
    let img = document.createElement("img");
    img.src = item.img;
    img_link.appendChild(img);
    proizvod.appendChild(img_link);

    let title = document.createElement("span");
    title.textContent = item.item;
    proizvod.appendChild(title);
    let price = document.createElement("div");
    price.classList.add("price_cart");
    let amount = document.createElement("span");
    amount.textContent = "20";
    price.appendChild(amount);
    let currency = document.createElement("p");
    currency.textContent = "KM";
    price.appendChild(currency);
    proizvod.appendChild(price);
    main.appendChild(proizvod);
    console.log(main);
    totalPrice = totalPrice + 20;
  });
  let price = document.createElement("div");
  price.classList.add("price_cart");
  let amount = document.createElement("span");
  amount.textContent = totalPrice;
  price.appendChild(amount);
  let currency = document.createElement("p");
  currency.textContent = "KM";
  price.appendChild(currency);
  main.appendChild(price);
};
var buy = () => {
  localStorage.removeItem("cart");
  alert("Uspjesno ste izvrsili kupovinu");
  window.location.reload(true);
};
let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  clear();
});
var clear = () => {
  localStorage.removeItem("cart");
  window.location.reload(true);
};
