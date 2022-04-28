var products = JSON.parse(localStorage.getItem("prodDatabase")) || [];
var cart = JSON.parse(localStorage.getItem("cartItem")) || [];

document.querySelector(".total").textContent = total();
document.querySelector("button").textContent = cart.length;

document.querySelector("button").addEventListener("click", function () {
  window.location.href = "cart.html";
});
displayProd(products);

function sortPrice() {
  var selected = document.querySelector("#priceSort").value;
  if (selected == "high") {
    products.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    products.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }
  displayProd(products);
}

function sortName() {
  var selected = document.querySelector("#nameSort").value;
  if (selected == "asc") {
    products.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (selected == "dsc") {
    products.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  displayProd(products);
}

function displayProd(products) {
  document.querySelector("#contain").textContent = "";
  products.map(function (ele) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", ele.image);

    var h2 = document.createElement("p");
    h2.textContent = ele.name;

    var price = document.createElement("h2");
    price.textContent = "Rs. " + ele.price;

    var button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.addEventListener("click", function () {
      addToCart(ele);
    });
    div.append(img, price, h2, button);
    document.querySelector("#contain").append(div);
  });
}

function addToCart(ele) {
  cart.push(ele);
  localStorage.setItem("cartItem", JSON.stringify(cart));
  window.location.reload();
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += Number(cart[i].price);
  }
  return sum;
}
