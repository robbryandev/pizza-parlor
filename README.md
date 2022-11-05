# [Pizza-Parlor](https://robbryandev.github.io/pizza-parlor)

## Contributors

* Robert Bryan

## Description

A local pizza parlor site to help users order their favorite pizza online!!!

## Technologies Used

* HTML
* CSS
* JS
* BOOTSTRAP

## Setup

Just download this repo and open up index.html in your browser of choice.

## Known bugs

* None

## Tests

#### Describe: Toppings()
```
Test: It should return an empty array and an array of valid toppings
Code: const toppingVar = new Toppings();
Expected Output: Toppings {list: [], validToppings: ["parmesan","pepperoni","pineapple","chicken","sausage","canadian_bacon","peppers","chicken"]}
```

```
Test: It should return a filtered array and an array of valid toppings
Code: const toppingVar = new Toppings(["a", "Pepperoni", "b", "Canadian Bacon", "c"]);
Expected Output: Toppings {list: ["pepperoni", "canadian_bacon"], validToppings: ["parmesan","pepperoni","pineapple","chicken","sausage","canadian_bacon","peppers","chicken"]}
```

#### Describe: FlavorList()
```
Test: It should return an empty object to store flavors in
Code: const fList = new FlavorList();
Expected Output: FlavorList { flavors: {} }
```

#### Describe: FlavorList.prototype.addFlavor()
```
Test: It should return a FlavorList with A Flavor without toppings
Code:
  const fList = new FlavorList();
  const cheeseFlavor = new Flavor("Cheese");
  fList.addFlavor(cheeseFlavor);
Expected Output: FlavorList { flavors: { Flavor { name: "Cheese", toppings: [], validToppings: ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"]}} }
```

```
Test: It should return a FlavorList with A Flavor with only valid toppings
Code:
  const fList = new FlavorList();
  const chickenFlavor = new Flavor("Chicken");
  chickenFlavor.addTopping("chicken");
  chickenFlavor.addTopping("a");
  chickenFlavor.addTopping("b");
  chickenFlavor.addTopping("c");
  chickenFlavor.addTopping("Parmesan");
  fList.addFlavor(chickenFlavor);
Expected Output: FlavorList { flavors: { Flavor { name: "Chicken", toppings: ["chicken", "parmesan"], validToppings: ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"]}} }
```

#### Describe: Flavor()
```
Test: It should return a Flavor object
Code: const nFlavor = new Flavor("NFlavor");
Expected Output: Flavor { name: "NFlavor", toppings: [], validToppings: ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"]}
```

## Describe: Flavor.prototype.addTopping()
```
Test: It should return a Flavor with only valid toppings
Code:
  const chickenFlavor = new Flavor("Chicken");
  chickenFlavor.addTopping("chicken");
  chickenFlavor.addTopping("a");
  chickenFlavor.addTopping("b");
  chickenFlavor.addTopping("c");
  chickenFlavor.addTopping("Parmesan");
Expected Output: Flavor { name: "Chicken", toppings: ["chicken", "parmesan"], validToppings: ["parmesan", "pepperoni", "pineapple", "chicken", "sausage", "canadian_bacon", "peppers", "chicken"]}
```
## Describe: getFlavorList()
```
Test: It should return a FlavorList with every available flavor
Code: getFlavorList()
Expected Output: FlavorList {flavors:{Cheese:{toppings:["parmesan"]},Pepperoni:{toppings:["parmesan","pepperoni"]},Sausage:{toppings:["parmesan","pepperoni","sausage"]},Hawaiian:{toppings:["parmesan","pineapple","canadian_bacon"]},Buffalo Chicken:{toppings:["parmesan","chicken","peppers"]}}}
```

## Describe: Pizza()
```
Test: It should return a Pizza object
Code: 
  const topps = new Toppings(["chicken"]);
  const size = "Large";
  const nFlavor = new Flavor("test");
  const nPizza = new Pizza(nFlavor, topps.list, size);
Expected Output: Pizza {name: 'Test', toppings: ["chicken"], size: 'Large', price: '19.00'}
```

## License info

MIT License

Copyright (c) 2022 Robert Bryan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.