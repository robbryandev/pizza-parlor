// Business

function Toppings(topArray) {
  this.validToppings = ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"];
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
  this.price = (parseFloat(this.size) + this.toppings.length).toFixed(2);
}

function getFlavorList() {
  let fList = new FlavorList();

  const cheeseFlavor = new Flavor("Cheese");
  cheeseFlavor.toppings = new Toppings([]);
  cheeseFlavor.addTopping("parmesan");

  const pepperoniFlavor = new Flavor("Pepperoni");
  pepperoniFlavor.toppings = new Toppings([]);
  pepperoniFlavor.addTopping("parmesan");
  pepperoniFlavor.addTopping("pepperoni");

  const sausageFlavor = new Flavor("Sausage");
  sausageFlavor.toppings = new Toppings([]);
  sausageFlavor.addTopping("parmesan");
  sausageFlavor.addTopping("pepperoni");
  sausageFlavor.addTopping("Sausage");

  const hawaiianFlavor = new Flavor("Hawaiian");
  hawaiianFlavor.toppings = new Toppings([]);
  hawaiianFlavor.addTopping("parmesan");
  hawaiianFlavor.addTopping("pineapple");
  hawaiianFlavor.addTopping("canadian bacon");

  const buffaloFlavor = new Flavor("Buffalo Chicken");
  buffaloFlavor.toppings = new Toppings([]);
  buffaloFlavor.addTopping("parmesan");
  buffaloFlavor.addTopping("chicken");
  buffaloFlavor.addTopping("peppers");

  const flavors = [cheeseFlavor, pepperoniFlavor, sausageFlavor, hawaiianFlavor, buffaloFlavor];
  flavors.forEach(function(flav) {
    pList.addFlavor(flav);
  });

  return fList;
}

// Ui

function navbarLinks() {
  this.document.getElementById("flavor-link").addEventListener("click", function() {
    document.getElementById("flavor-div").scrollIntoView();
  });
  this.document.getElementById("order-link").addEventListener("click", function() {
    document.getElementById("order-div").scrollIntoView();
  });
}

function cardHoverColor() {
  document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("click", function() {
      document.getElementById("flavor-display-box").value = card.childNodes[1].childNodes[1].innerText;
      document.getElementById("order-btn").scrollIntoView();
    });
    card.addEventListener("mouseenter", function(event) {
      setTimeout(function() {
        event.target.classList.remove("bg-my-light");
        event.target.classList.add("bg-danger");
        event.target.classList.add("text-light");
      }, 50);
    });
    card.addEventListener("mouseleave", function(event) {
      setTimeout(function() {
        event.target.classList.remove("bg-danger");
        event.target.classList.remove("text-light");
        event.target.classList.add("bg-my-light");
      }, 50);
    })
  });
}

function orderHoverColor() {
  document.getElementById("order-btn").addEventListener("mouseenter", function(event) {
    event.target.classList.remove("bg-my-light");
    event.target.classList.add("bg-danger");
    event.target.classList.add("text-light");
  });
  document.getElementById("order-btn").addEventListener("mouseleave", function(event) {
    event.target.classList.remove("bg-danger");
    event.target.classList.remove("text-light");
    event.target.classList.add("bg-my-light");
  });
}

addEventListener("load", function() {
  navbarLinks();
  cardHoverColor();
  orderHoverColor();
});