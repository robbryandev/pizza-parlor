// Business


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