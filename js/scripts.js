// Business

//Toppings Object constructur function
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

// FlavorList Object constructur function
function FlavorList() {
  this.flavors = {};
}

// FlavorList method to add a new Flavor
FlavorList.prototype.addFlavor = function(flavorVar) {
  this.flavors[flavorVar.name] = {};
  this.flavors[flavorVar.name].toppings = flavorVar.toppings;
};

// Flavor Object constructur function
function Flavor(name) {
  this.name = name;
  let tmpTop = new Toppings();
  this.toppings = [...tmpTop.list];
  this.validToppings = tmpTop.validToppings;
}

// Flavor method to add a new topping
Flavor.prototype.addTopping = function(topping) {
  let refTop = this.toppings;
  const newTopping = String(topping).trim().toLocaleLowerCase().replaceAll(" ", "_");
  if (this.validToppings.includes(newTopping)) {
    refTop.push(newTopping);
  }
};

// Pizza Object constructur function
function Pizza(flavor, toppings, size) {
  this.name = flavor.name;
  this.toppings = [...toppings];
  this.size = size;
  let pSize;
  switch (size.trim()) {
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
      break;
  }
  this.price = (parseFloat(pSize) + toppings.length).toFixed(2);
}

// Creates all basic Flavors and puts them in a FlavorList
function getFlavorList() {
  let fList = new FlavorList();
  let validTops = new Toppings().validToppings;

  const cheeseFlavor = new Flavor("Cheese");
  cheeseFlavor.validToppings = validTops;
  cheeseFlavor.addTopping("parmesan");

  const pepperoniFlavor = new Flavor("Pepperoni");
  pepperoniFlavor.validToppings = validTops;
  pepperoniFlavor.addTopping("parmesan");
  pepperoniFlavor.addTopping("pepperoni");

  const sausageFlavor = new Flavor("Sausage");
  sausageFlavor.validToppings = validTops;
  sausageFlavor.addTopping("parmesan");
  sausageFlavor.addTopping("pepperoni");
  sausageFlavor.addTopping("Sausage");

  const hawaiianFlavor = new Flavor("Hawaiian");
  hawaiianFlavor.validToppings = validTops;
  hawaiianFlavor.addTopping("parmesan");
  hawaiianFlavor.addTopping("pineapple");
  hawaiianFlavor.addTopping("canadian bacon");

  const buffaloFlavor = new Flavor("Buffalo Chicken");
  buffaloFlavor.validToppings = validTops;
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

// Controls the scrolling for the navbar links
function navbarLinks() {
  this.document.getElementById("flavor-link").addEventListener("click", function() {
    document.getElementById("flavor-div").scrollIntoView();
  });
  this.document.getElementById("order-link").addEventListener("click", function() {
    document.getElementById("order-div").scrollIntoView();
  });
}

// Adds event listeners to form input groups to change display value of disabled input box
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

// sends input form ids to formClickChange
function formClicks() {
  formClickChange("flavor-dropdown", "flavor-display-box");
  formClickChange("size-dropdown", "size-display-box");
}

// Changes color of pizza cards on mouse hover
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

// Changes color of order button on mouse hover
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

// Creates a pizza from the order inputs and sends it to the receipt render method
function handleOrders() {
  const standardFlavors = getFlavorList();
  const fName = document.getElementById("flavor-display-box").value;
  const fSize = document.getElementById("size-display-box").value;
  let pFlavor = new Flavor(fName, standardFlavors.flavors[fName].list);
  const extras = document.querySelectorAll("input.form-check-input:checked");
  let extraArray = [];
  for (let e = 0; e < extras.length; e++) {
    extraArray.push(extras.item(e));
  }
  extraArray.forEach(function(ex) {
    pFlavor.addTopping(ex.value);
  });
  const pToppings = [...pFlavor.toppings];
  const newPizza = new Pizza(pFlavor, pToppings, fSize);
  document.getElementById("end-div").createReceipts(newPizza);
  setTimeout(function() {
    document.getElementById("order").scrollIntoView();
  }, 100);
}

// Adds event listener to submit orders
function submitOrders() {
  document.getElementById("order-btn").addEventListener("click", handleOrders);
}

// HTMLDivElement method to create receipts when orders are submitted
HTMLDivElement.prototype.createReceipts = function(pizzaVar) {
  while (this.lastChild) {
    this.removeChild(this.lastChild);
  }

  let pizzaName = pizzaVar.name;
  let pizzaToppings = pizzaVar.toppings;
  let receiptElements = [];
  const ref = this;

//   <h1 class="text-center" id="order">Here's your receipt!</h1>
  let rHeader = document.createElement("h1");
  rHeader.setAttribute("class", "text-center");
  rHeader.setAttribute("id", "order");
  rHeader.innerText = "Here's your receipt!";
  receiptElements.push(rHeader);
//   <hr class="w-75">
  let hr = document.createElement("hr");
  hr.setAttribute("class", "w-75");
  receiptElements.push(hr);

//   <h2 class="pb-2">Pizza: Pepperoni</h2>
  let pizzaHeader = document.createElement("h2");
  pizzaHeader.setAttribute("class", "pb-2");
  pizzaHeader.innerText = `Pizza: ${pizzaName}`;
  receiptElements.push(pizzaHeader);

//   <h3 class="pb-2">Toppings</h3>
  let toppingHeader = document.createElement("h3");
  toppingHeader.setAttribute("class", "pb-2");
  toppingHeader.innerText = "Toppings";
  receiptElements.push(toppingHeader);
  //   <ul class="list-group w-25 m-auto">
  let topList = document.createElement("ul");
  topList.setAttribute("class", "list-group w-25 m-auto");
//     <li class="list-group-item">
//       Parmesan
//     </li>
//     <li class="list-group-item">
//       Pepperoni
//     </li>
//   </ul>
  for (let p = 0; p < pizzaToppings.length; p++) {
    let newTopping = document.createElement("li");
    newTopping.setAttribute("class", "list-group-item");
    let toppingName = pizzaToppings[p];
    let toppingNameArray = toppingName.split("_");
    let toppingWordOne = toppingNameArray[0].split("");
    toppingWordOne[0] = toppingWordOne[0].toUpperCase();
    toppingNameArray[0] = toppingWordOne.join("");
    if (toppingNameArray.length === 2) {
      let toppingWordTwo = toppingNameArray[1].split("");
      toppingWordTwo[0] = toppingWordTwo[0].toUpperCase();
      toppingNameArray[1] = toppingWordTwo.join("");
    }
    newTopping.innerText = toppingNameArray.join(" ");
    topList.appendChild(newTopping);
  }
  
  receiptElements.push(topList);
  //   <br>
  const br = document.createElement("br");
  receiptElements.push(br);
//   <h3>Size: Medium</h3>
  let pizzaSize = document.createElement("h3");
  pizzaSize.innerText = pizzaVar.size;
  receiptElements.push(pizzaSize);
//   <h3>Price: $17.00</h3>
  let pizzaPrice = document.createElement("h3");
  pizzaPrice.innerText = pizzaVar.price;
  receiptElements.push(pizzaPrice);
//
  receiptElements.forEach(function(rec) {
    ref.appendChild(rec);
  });
};

// On page load
addEventListener("load", function() {
  navbarLinks();
  cardHoverColor();
  orderHoverColor();
  formClicks();
  submitOrders();
});