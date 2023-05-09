// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open Cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
//Close Cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//Cart Working with JS
if(document == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{  
    ready();
}

//Making functions / realizando fucncoes
function ready(){
    //Reomove Itemns from CARTS
    var reomoveCartButtons = document.getElementsByClassName('cart-remove');
    console.log(reomoveCartButtons)
    for(var i = 0; i < reomoveCartButtons.length; i++){
        var button = reomoveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

//Quantity Changes
var quantityInputs = document.getElementsByClassName("cart-quartity");
for(var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
}
//Remove Itemns from CARTS
  function removeCartItem(event){
      var buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updatetotal();
  }
 //Quantity Changes 2
 function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//Add to Cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src; // como e uma imagem deve ter o seu respectivo endereco
    console.log(title, price, productImg); //imprime no 'Console'
    addProductToCart(title, price, productImg); 
    updatetotal(); 
}

  //  Function Update 'Total':
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');       
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
        //If price contain some Cents value 
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}