"use strict";import{cart as e,deleteItem as i}from"../data/cart.js";import{products as t}from"../data/products.js";let orderSummary=document.querySelector(".order-summary"),itemsNum=document.querySelector(".return-to-home-link");itemsNum.innerHTML=`${e.length} items`;let date=new Date,currentDate=date.toLocaleDateString(),cartSummaryHTML="";e.length>0&&e.forEach((e,i)=>{let d=e.productId,a;t.forEach(e=>{d===e.id&&(a=e)}),cartSummaryHTML+=`
        <div class="cart-item-container" id="${a.id}">
        <div class="delivery-date">Delivery date: ${currentDate}</div>
        <div class="cart-item-details-grid">
            <img
            class="product-image"
            src="${a.image}"
            />
            <div class="cart-item-details">
            <div class="product-name">${a.name}</div>
            <div class="product-price">${(a.priceCents/100).toFixed(2)}</div>
            <div class="product-quantity">
                <span> Quantity: <span class="quantity-label">${e.quantity}</span> </span>
                <span class="delete-quantity-link link-primary" data-product-id="${a.id}">
                Delete
                </span>
            </div>
            </div>
            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${i+1}"
                />
                <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                checked
                class="delivery-option-input"
                name="delivery-option-${i+1}"
                />
                <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${i+1}"
                />
                <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        `}),orderSummary.innerHTML=cartSummaryHTML;let deletebtns=document.querySelectorAll(".delete-quantity-link");deletebtns.forEach(t=>{let d=t.dataset.productId;t.addEventListener("click",()=>{i(d);let t=document.getElementById(`${d}`);t.remove(),itemsNum.innerHTML=`${e.length} items`})});