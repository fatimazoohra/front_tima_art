"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SizeSelect from "../productDetails/SizeSelect";
import ColorSelect from "../productDetails/ColorSelect";
import Grid5 from "../productDetails/grids/Grid5";
import { useContextElement } from "@/context/Context";
import QuantitySelect from "../productDetails/QuantitySelect";
import QuickViewImages from "../productDetails/grids/QuickViewImages";
import ProductSizeSelect from "../productDetails/ProductSizeSelect";
export default function QuickView() {
  // const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1
  const [itemPrice, setPrice] = useState(0); 
  
  const {
    quickViewItem,
    addProductToCart,
    addProductToCart_,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    cartProducts,
    updateQuantity,
  } = useContextElement();
console.log("quickViewItem__")
console.log(quickViewItem)
  const [selectedSize, setSelectedSize] = useState(
    quickViewItem.productSizes?.length > 0 ? quickViewItem.productSizes[0] : null
  );
  
  useEffect(() => {
    if (quickViewItem.productSizes?.length > 0) {
      setPrice(quickViewItem.productSizes[0].price);
    }
  }, [quickViewItem]);
  // const openModalSizeChoice = () => {
  //   const bootstrap = require("bootstrap"); // dynamically import bootstrap
  //   var myModal = new bootstrap.Modal(document.getElementById("size-guide"), {
  //     keyboard: false,
  //   });

  //   myModal.show();
  //   document
  //     .getElementById("size-guide")
  //     .addEventListener("hidden.bs.modal", () => {
  //       myModal.hide();
  //     });
  //   const backdrops = document.querySelectorAll(".modal-backdrop");
  //   if (backdrops.length > 1) {
  //     // Apply z-index to the last backdrop
  //     const lastBackdrop = backdrops[backdrops.length - 1];
  //     lastBackdrop.style.zIndex = "1057";
  //   }
  // };
  return (
    <div className="modal fullRight fade modal-quick-view" id="quickView">
      <div className="modal-dialog">
        <div className="modal-content">
        {quickViewItem.medias ? (
          <QuickViewImages
            images={quickViewItem.medias}
          />
        ): ""}
          {/* <Grid5
            firstItem={quickViewItem.imgSrc}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          /> */}
          <div className="wrap mw-100p-hidden">
            <div className="header">
              <h5 className="title">{quickViewItem.name}</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-product-info-list">
              <div className="tf-product-info-heading">
                <div className="tf-product-info-name">
                  <div className="text text-btn-uppercase">{quickViewItem?.brand?.name}</div>
                  {/* <h3 className="name">{quickViewItem.name}</h3> */}
                  
                </div>
                <div className="tf-product-info-desc">
                  <div className="tf-product-info-price">
                    {quickViewItem.price ? (
                      quickViewItem.promoPrice ? (
                        <div>
                          <h5 className="price-on-sale font-2">
                            ${quickViewItem.price.toFixed(2)}
                          </h5>
                          <div className="compare-at-price font-2">
                            ${quickViewItem.promoPrice.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <span>{quickViewItem.price.toFixed(2)} DH</span>
                      )
                    ) : (
                      <h5 className="price-on-sale font-2">
                        {quickViewItem.minPrice.toFixed(2)} DH - {quickViewItem.maxPrice.toFixed(2)} DH
                      </h5>
                    )}
                  </div>
                  <p>
                    {quickViewItem.description}
                  </p>
                  {/* <div className="tf-product-info-liveview">
                    <i className="icon icon-eye" />
                    <p className="text-caption-1">
                      <span className="liveview-count">28</span> people are
                      viewing this right now
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="tf-product-info-choose-option">
                {/* <ColorSelect
                  activeColor={activeColor}
                  setActiveColor={setActiveColor}
                /> */}
                {quickViewItem.productSizes ? (
                  <ProductSizeSelect
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    quickViewItem={quickViewItem}
                    productSizes={quickViewItem.productSizes} 
                    setPrice={setPrice} 
                    quantity={
                      isAddedToCartProducts(quickViewItem.id)
                        ? cartProducts.filter(
                            (elm) => elm.id == quickViewItem.id
                          )[0].quantity
                        : quantity
                    }
                    setQuantity={(qty) => {
                      if (isAddedToCartProducts(quickViewItem.id)) {
                        updateQuantity(quickViewItem.id, qty);
                      } else {
                        setQuantity(qty);
                      }
                    }}
                  />
                ): ""}

                {/* <div className="tf-product-info-quantity">
                  <div className="title mb_12">Quantité:</div>
                  <QuantitySelect
                    quantity={
                      isAddedToCartProducts(quickViewItem.id)
                        ? cartProducts.filter(
                            (elm) => elm.id == quickViewItem.id
                          )[0].quantity
                        : quantity
                    }
                    setQuantity={(qty) => {
                      if (isAddedToCartProducts(quickViewItem.id)) {
                        updateQuantity(quickViewItem.id, qty);
                      } else {
                        setQuantity(qty);
                      }
                    }}
                    // setStock={
                    //   quickViewItem.productSizes
                    //     ? quickViewItem.productSizes[0].isDecanted
                    //       ? quickViewItem.decantVolume // 🔹 Stock max pour un produit décanté
                    //       : quickViewItem.productSizes[0].quantity // 🔹 Stock normal pour une taille normale
                    //     : quickViewItem.quantity
                    // }
                  />
                </div> */}
                <div>
                  <div className="tf-product-info-by-btn mb_10">
                    <a
                      className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 show-shopping-cart"
                      onClick={() =>
                        addProductToCart_(quickViewItem, quantity, selectedSize)
                      }
                    >
                      <span>
                        {isAddedToCartProducts(quickViewItem.id)
                          ? "Déjâ ajouté "
                          : "+ au panier "} &nbsp;
                      </span>
                      <span className="tf-qty-price total-price">
                        
                        {isAddedToCartProducts(quickViewItem.id)
                          ? (
                              itemPrice *
                              cartProducts.filter(
                                (elm) => elm.id == quickViewItem.id
                              )[0].quantity
                            ).toFixed(2)
                          : (itemPrice * quantity).toFixed(2)} DH
                      </span>
                    </a>
                    <a
                      href="#compare"
                      onClick={() => addToCompareItem(quickViewItem.id)}
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon hover-tooltip compare btn-icon-action show-compare"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip text-caption-2">
                        {" "}
                        {isAddedtoCompareItem(quickViewItem.id)
                          ? "Already compared"
                          : "Compare"}
                      </span>
                    </a>
                    <a
                      onClick={() => addToWishlist(quickViewItem.id)}
                      className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip text-caption-2">
                        {isAddedtoWishlist(quickViewItem.id)
                          ? "Already Wishlished"
                          : "Wishlist"}
                      </span>
                    </a>
                  </div>
                  <a href="#" className="btn-style-3 text-btn-uppercase">
                    Commandez-le maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
