"use strict";import{products as t}from"../data/products.js";import{cart as r,addToCart as a}from"../data/cart.js";let productsGrid=document.querySelector(".products-grid"),productHMTL="";export function displayProducts(){t.forEach(t=>{productHMTL+=`
    <div class="product-container">
        <div class="product-image-container">
            <img
            class="product-image"
            src="${t.image}"
            />
        </div>
        <div class="product-name limit-text-to-2-lines">
            ${t.name}
        </div>
        <div class="product-rating-container">
            <img
            class="product-rating-stars"
            src="images/ratings/rating-${10*t.rating.stars}.png"
            />
            <div class="product-rating-count link-primary"> ${t.rating.count} </div>
        </div>
        <div class="product-price">${(t.priceCents/100).toFixed(2)}</div>
        <div class="product-spacer"></div>
        <button class="add-to-cart-button button-primary"
        data-product-id="${t.id}" >Add to Cart</button>
    </div>`}),productsGrid.innerHTML=productHMTL}displayProducts();let addToCartBtns=document.querySelectorAll(".add-to-cart-button"),cartQuantityDiv=document.querySelector(".cart-quantity");function updateCartQuantity(){let t=0;r.forEach(r=>{t+=r.quantity}),cartQuantityDiv.innerHTML=t}0===r.length?cartQuantityDiv.innerHTML=0:updateCartQuantity(),addToCartBtns.forEach(t=>{t.addEventListener("click",()=>{a(t),updateCartQuantity()})});