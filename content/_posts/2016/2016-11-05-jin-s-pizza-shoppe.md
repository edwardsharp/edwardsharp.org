---
kind: "code"
title: "jin's pizza shoppe"
date: "2016-11-05T08:29:44.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/a89kj27c/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-05-jin-s-pizza-shoppe-demo.html' | relative_url }}" title="jin's pizza shoppe" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

from [https://github.com/jinjin8/pizza-shop](https://github.com/jinjin8/pizza-shop)

## html

```html
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<link
  rel="stylesheet"
  href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
/>
<div class="container">
  <div class="jumbotron">
    <h1>P i z z a</h1>
  </div>

  <div class="pizza-receipt">
    <h1><span id="total-text"></span><span id="cost"></span></h1>
    <!-- <h3><span class="toppings"></span></h3> -->
    <!-- ...i guess the form elements already list these thingz -->
  </div>

  <div class="order-form">
    <form id="pizza-order">
      <select class="form-control" id="sizes">
        <option value="small">small</option>
        <option value="medium" selected>medium</option>
        <option value="large">large</option>
      </select>

      <select class="form-control" id="meats">
        <option>Meat Topping</option>
        <option value="pepperoni">pepperoni</option>
        <option value="sausage">sausage</option>
        <option value="canadian bacon">canadian bacon</option>
      </select>

      <select class="form-control" id="veggies">
        <option>Veggie Topping</option>
        <option value="olives">olives</option>
        <option value="pepperoncini">pepperoncini</option>
        <option value="pineapple">pineapple</option>
      </select>

      <button type="submit" class="btn btn outline center-block">
        O R D E R
      </button>
    </form>
  </div>
</div>
```

## css

```css
@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css");
html,
body {
  margin: 0;
  padding: 0;
}
```

## javascript

```javascript
/*
function Pizza(size, meat, veggie) {
  this.size = [];
  this.meat = [];
  this.veggie = [];
  this.order = [];
};
*/
// so go ahead and make these global variables, also functions, generally, don't start with a capitol letter. also, let's wrap each one of these arrays up in a single object.
// so something like this:
/*
var size = []
  , meat = []
  , veggie = []
  , order = []
  ; 
*/
// i'm going to suggest that we try to create an object with as much constant data that we can think of. also let's put the order arrays from above (BUT * let's use a integer value since you are using <select> elements that only allow a user to pick one thing. if you used <input type="checkbox"> then an array would make sense since multiple things can be selected). so:
var pizza = {
  order: {
    sizes: 8, //since this field is 'required' and 'medium' selected by default using medium's price
    meats: 0,
    veggies: 0,
  },
  sizes: {
    small: 8,
    medium: 12,
    large: 16,
  },
  meats: {
    pepperoni: 2,
    sausage: 3,
    "canadian bacon": 4,
  },
  veggies: {
    olives: 2,
    pepperoncini: 1,
    pineapple: 3,
  },
};

/*
this.hotPizza = function() {
  return this.order === size + meat + veggie;
};
*/
// not quite sure what's going on here or why you'd want to use 'this'. also '===' is a comparison, so this function returns true or false.

/*
Pizza.prototype.size = function() {
  var total = 0;
  if (this.size === "small") {
    total += 8;
  } else if (this.size === "medium") {
    total += 12;
  } else if (this.size === "large") {
    total += 16;
  };
  return total;
};

Pizza.prototype.meat = function() {
  var total = 0;
  if (this.meat === "pepperoni") {
    total += 2;
  } else if (this.meat === "sausage") {
    total += 3;
  } else if (this.meat === "canadian bacon") {
    total += 4;
  };
  return total;
};

Pizza.prototype.veggie = function() {
  var total = 0;
  if (this.veggie === "olives") {
    total += 2;
  } else if (this.veggie === "pepperoncini") {
    total += 1;
  } else if (this.veggie === "pineapple") {
    total += 3;
  };
  return total;
};
*/
// okay, let's rework a total function:
var pizzaTotal = function () {
  $("#total-text").html("Order Total: ");
  $("#cost").html(
    "$" +
      (pizza.order.sizes + pizza.order.meats + pizza.order.veggies).toFixed(2),
  );
};

/*var sizePrice = [];
  sizePrice["Small"] = 8;
  sizePrice["Medium"] = 12;
  sizePrice["Large"] = 16;
  var meatTopping = [];
  meatTopping["Pepperoni"] = 3;
  meatTopping["Sausage"] = 4;
  meatTopping["Canadian Bacon"] = 5;
  var veggieTopping = [];
  veggieTopping["Olives"] = 2;
  veggieTopping["Pepperoncini"] = 1;
  veggieTopping["Pineapple"] = 3;
  var total = sizePrice[this.pizzaSize] + veggieTopping[this.veggieTopping] + meatTopping[this.meatTopping];
  return total;
}
*/
function resetFields() {
  $("#sizes").val("medium");
  $("#meats").val("Meat Topping");
  $("#veggies").val("Veggie Topping");
}

//user logic
$(document).ready(function () {
  /*
  $("form#pizza-order").submit(function() {
    event.preventDefault();

    var size = $("select#pizza-size").val();
    var meat = $("select#meat-toppings").val();
    var veggie = $("select#veggie-toppings").val();

    var newPizza = new Pizza(size, meat, veggie);
    var order = hotPizza.order();

    $(".cost").fadeIn().empty().text(pizzaSize + " pizza $ " + order);
    $(".toppings").fadeIn().empty().text("Toppings: " + meat + " " + veggie);

    //$("#show-receipt").show();
    //$(".final-pizza-size").text(newPizza.pizzaSize);
    //$(".final-pizza-meat").text(newPizza.pizzaMeat);
    //$(".final-pizza-veggies").text(newPizza.pizzaVeggies);
    //$(".final-pizza-price").text(newPizza.price());

    resetFields();
  });
  */
  // okay, so instead of doing things on the order submit button let's just re-calc the order total when the select elements change, like so:
  $("select").change(function () {
    // jQuery gives us a bunch of useful functions bound to this function. this.id is the id attribute from the <select>, so for example if we have <select class="form-control" id="veggies"> then this.id === 'veggies'. the value is from the value attribute on the <option> tag.
    //console.log(this.id, this.value);
    //we can now use attributes from the form elements to look up a prices from our pizza data object model.
    //for example: pizza.sizes
    //  is the same as: pizza['sizes']
    //  is the same as: var s = 'sizes'; pizza[s];
    if (pizza[this.id][this.value]) {
      pizza.order[this.id] = pizza[this.id][this.value];
    } else {
      //an option either without a value="" attribute or is not in our pizza model object. so we reset the cost to 0.
      pizza.order[this.id] = 0;
    }
    //and now call our function to update the price:
    pizzaTotal();
  });

  $("form#pizza-order").submit(function () {
    event.preventDefault();
    $("#total-text").html("");
    $("#cost").html("THX!");
    resetFields();
  });
});

/*var pizzaSize = $("select#pizza-size").val();
    var meat = $("select#meat-toppings").val();
    var veggies = $("select#veggie-toppings").val();
    var freshPizza = new Pizza(pizzaSize, meat, veggies);
    var order = newPizza.order();
    $(".cost").fadeIn().empty().text(pizzaSize + " pizza $ " + order);
    $(".toppings").fadeIn().empty().text("Toppings: " + meat + " " + veggies);
  });*/
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/a89kj27c/)
