let searchform =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

if(document.readyState=="loading"){
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
}

//making function
function ready(){
  //remove items from cart
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for(var i=0; i<removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener("click", removeCartItem)
  }
  //quantity change
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i=0; i<quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //add to cart 
//   var addCart = document.getElementsByClassName('add-cart')
//   for(var i=0; i<addCart.length; i++){
//     var button = addCart[i];
//     button.addEventListener("click",addCartClicked);
//   }
 }

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updatetotal();
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

//Add to cart 
// function addCartClicked(event){
//   var button = event.target
//   var ourProducts = button.parentElement
//   var title = ourProducts.getElementsByClassName("product-title")[0].innerText;
//   var price = ourProducts.getElementsByClassName("price")[0].innerText;
//   var productImg = ourProducts.getElementsByClassName("product-img")[0].src;
//   addProductToCart(title, price, productImg)
//   updatetotal();
// }

/*function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box')
 var cartItems = document.getElementsByClassName('cart-content')[0]
 var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
 for(var i=0; i<cartItemsNames.length; i++){
  alert("You have already add this item to cart");
  return;
 }
}*/

/*var cartBoxContent = `
                    <img src="images/1.jfif" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">Watermelon</div>
                        <div class="cart-price">Rs10</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class="fas fa-trash cart-remove"></i>`;*/

/*cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem)
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged)*/

//update total
function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for(var i=0; i<cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("Rs", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);

    // if price contain some paise value
    total = math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = 'Rs' + total;
  }
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
    },
})

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
    },
})

