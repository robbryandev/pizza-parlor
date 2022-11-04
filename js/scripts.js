// Business

function Toppings(topArray) {
  let topList = [];
  this.validToppings = ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"];
  if (topArray) {
    if (Array(topArray).length > 0) {
      let validRef = this.validToppings;
      topArray.forEach(function(top) {
      const filterTop = String(top).trim().toLocaleLowerCase().replaceAll(" ", "_");
        if (validRef.includes(filterTop)) {
          topList.push(filterTop);
        };
      });
    }
  }
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
  this.toppings = [];
  this.validToppings = [];
  if (toppings) {
    this.toppings = [...toppings.list]
    this.validToppings = toppings.validToppings;
  } else {
    let tmpTop = new Toppings();
    this.toppings = [...tmpTop.list];
    this.validToppings = tmpTop.validToppings;
  }
}

Flavor.prototype.addTopping = function(topping) {
  const newTopping = String(topping).trim().toLocaleLowerCase().replaceAll(" ", "_");
  if (this.validToppings.includes(newTopping)) {
    this.toppings.list.push(newTopping);
  }
};

function addPizzaTopping(flavorVar, topping) {
  let newFlavorVar = flavorVar;
  const newTopping = String(topping).trim().toLocaleLowerCase().replaceAll(" ", "_");
  if (newFlavorVar.toppings.validToppings.includes(newTopping)) {
    newFlavorVar.toppings.list.push(newTopping);
  }
  return newFlavorVar;
};

function Pizza(flavor, toppings, size) {
  this.name = flavor.name;
  this.toppings = [...toppings];
  this.size = size;
  let pSize;
  switch (size) {
    case "Small":
      pSize = "12";
      break;
    case "Medium":
      pSize = "15";
      break;
    case "Large":
      pSize = "18";
      break;
    default:
      pSize = "15";
  }
  this.price = (parseFloat(pSize) + this.toppings.length).toFixed(2);
}

function getFlavorList() {
  let fList = new FlavorList();

  const cheeseFlavor = new Flavor("Cheese");
  cheeseFlavor.toppings = new Toppings();
  cheeseFlavor.addTopping("parmesan");

  const pepperoniFlavor = new Flavor("Pepperoni");
  pepperoniFlavor.toppings = new Toppings();
  pepperoniFlavor.addTopping("parmesan");
  pepperoniFlavor.addTopping("pepperoni");

  const sausageFlavor = new Flavor("Sausage");
  sausageFlavor.toppings = new Toppings();
  sausageFlavor.addTopping("parmesan");
  sausageFlavor.addTopping("pepperoni");
  sausageFlavor.addTopping("Sausage");

  const hawaiianFlavor = new Flavor("Hawaiian");
  hawaiianFlavor.toppings = new Toppings();
  hawaiianFlavor.addTopping("parmesan");
  hawaiianFlavor.addTopping("pineapple");
  hawaiianFlavor.addTopping("canadian bacon");

  const buffaloFlavor = new Flavor("Buffalo Chicken");
  buffaloFlavor.toppings = new Toppings();
  buffaloFlavor.addTopping("parmesan");
  buffaloFlavor.addTopping("chicken");
  buffaloFlavor.addTopping("peppers");

  const flavors = [cheeseFlavor, pepperoniFlavor, sausageFlavor, hawaiianFlavor, buffaloFlavor];
  flavors.forEach(function(flav) {
    fList.addFlavor(flav);
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

function formClickChange(drop, display) {
  const dropElements = document.getElementById(drop).children;
  let dropArray = [];
  for (let i = 0; i < dropElements.length; i++) {
    dropArray.push(dropElements.item(i));
  }
  dropArray.forEach(function(child) {
    child.addEventListener("click", function(event) {
      document.getElementById(display).value = event.target.innerText;
    });
  });
}

function formClicks() {
  formClickChange("flavor-dropdown", "flavor-display-box");
  formClickChange("size-dropdown", "size-display-box");
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
  document.getElementById("order-btn").addEventListener("mouseleave", function(event) {
    event.target.classList.remove("bg-my-light");
    event.target.classList.add("btn-danger");
    event.target.classList.add("text-light");
  });
  document.getElementById("order-btn").addEventListener("mouseenter", function(event) {
    event.target.classList.remove("btn-danger");
    event.target.classList.remove("text-light");
    event.target.classList.add("bg-my-light");
  });
}

function handleOrders() {
  const standardFlavors = getFlavorList(); 
  document.getElementById("order-btn").addEventListener("click", function() {
    const fName = document.getElementById("flavor-display-box").value;
    const fSize = document.getElementById("size-display-box").value;
    let pFlavor = standardFlavors.flavors[fName];
    const extras = document.querySelectorAll("input.form-check-input:checked");
    let extraArray = [];
    for (let e = 0; e < extras.length; e++) {
      extraArray.push(extras.item(e));
    }
    extraArray.forEach(function(ex) {
      pFlavor = addPizzaTopping(pFlavor, ex.value);
    });
    const pToppings = [...pFlavor.toppings.list];
    const newPizza = new Pizza(pFlavor, pToppings, fSize);
  });
}

addEventListener("load", function() {
  navbarLinks();
  cardHoverColor();
  orderHoverColor();
  formClicks();
  handleOrders();
});