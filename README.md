# Title

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



## Tests

#### Describe: FlavorList()
```
Test: It should return an empty object to store flavors in
Code: const fList = new FlavorList();
Expected Output: FlavorList { flavors: {} }
```

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

#### Describe: Flavor()
```
Test: It should return an empty object to store flavors in
Code: const nFlavor = new Flavor();
Expected Output: FlavorList { flavors: {} }
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