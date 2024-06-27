var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
  window.scrollTo(0,0);
});

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
}


document.querySelectorAll('.btn-card').forEach(button => {
  button.addEventListener('click', event => {
      const itemId = event.target.getAttribute('data-id');
      const itemPrice = parseFloat(event.target.getAttribute('data-price'));
      let quantity = parseInt(prompt("Quantas unidades você deseja adicionar?"), 10);

      if (!isNaN(quantity) && quantity > 0) {
          const totalPrice = itemPrice * quantity;
          document.querySelector(`.span-price[data-id="${itemId}"]`).innerText = `R$${totalPrice.toFixed(2)}`;
          
    Swal.fire({
      title: "Perfeito",
      text: "Seu pedido foi confirmado",
      icon: "success"
});

      } else {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "Por favor, insira um número válido de unidades."
        });
      }

     
  });
});
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', event => {
      const itemId = event.target.getAttribute('data-id');
      const itemPrice = parseFloat(event.target.getAttribute('data-price'));
      let quantity = parseInt(prompt("Quantas unidades você deseja adicionar?"), 10);

      if (!isNaN(quantity) && quantity > 0) {
          const totalPrice = itemPrice * quantity;
          document.querySelector(`.preco[data-id="${itemId}"]`).innerText = `R$${totalPrice.toFixed(2)}`;
          
    Swal.fire({
      title: "Perfeito",
      text: "Seu pedido foi confirmado",
      icon: "success"
});

      } else {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "Por favor, insira um número válido de unidades."
        });
      }

     
  });
});

window.effect = ScrollReveal({reset:true})
effect.reveal('.efect-reveal', 
  {
    duration: 3000, 
    distance:'60px'
  })




