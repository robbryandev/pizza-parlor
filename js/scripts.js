// Business

function Toppings(topArray) {
  this.validToppings = ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "refried_beans", "pickles"];
  let topList = [];
  topArray.forEach(function(top) {
    const filterTop = String(top).trim().toLocaleLowerCase().replaceAll(" ", "_");
    if (this.validToppings.includes(filterTop)) {
      topList.push(filterTop);
    };
  });
  this.list = topList;
}

function FlavorList() {
  this.flavors = {};
}

FlavorList.prototype.addFlavor = function(flavorVar) {
  this.flavors[flavorVar.name] = {};
  this.flavors[flavorVar.name].toppings = flavorVar.toppings;
};

function Flavor(name, toppings) {
  this.name = name;
  this.toppings = [...toppings.list]
  this.validToppings = toppings.valid;
}

Flavor.prototype.addTopping = function(topping) {
  const newTopping = String(topping).trim().toLocaleLowerCase().replaceAll(" ", "_");
  if (this.validToppings.includes(newTopping)) {
    this.toppings.push(newTopping);
  }
};

function Pizza(flavor, toppings, size) {
  this.name = flavor.name;
  this.toppings = [...flavor.toppings].concat([...toppings.list]);
  this.size = size;
}

function getPizzas() {
  const pList = new FlavorList();

  const pepperoniFlavor = new Flavor("Pepperoni");
  pepperoniFlavor.addTopping("pepperoni");
  pepperoniFlavor.addTopping("parmesan");

  const flavors = [pepperoniFlavor];
  flavors.forEach(function(flav) {
    pList.addFlavor(flav);
  })
}

// Ui

function cardHoverColor() {
  document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("mouseenter", function(event) {
      setTimeout(function() {
        event.target.classList.remove("bg-my-light");
        event.target.classList.add("bg-danger");
      }, 50);
    });
    card.addEventListener("mouseleave", function(event) {
      setTimeout(function() {
        event.target.classList.remove("bg-danger");
        event.target.classList.add("bg-my-light");
      }, 50);
    })
  });
}

addEventListener("load", function() {
  cardHoverColor();
  this.document.getElementById("flavor-link").addEventListener("click", function() {
    document.getElementById("flavor-div").scrollIntoView();
  });
  this.document.getElementById("order-link").addEventListener("click", function() {
    document.getElementById("order-div").scrollIntoView();
  });
});