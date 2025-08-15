"use client";

import { useState } from "react";
import ProductQuantitySelect from "./ProductQuantitySelect";

export default function ProductSizeSelect({ selectedSize, setSelectedSize, quickViewItem, productSizes, setPrice, setQuantity, quantity }) {
  
  const handleChange = (value) => {
    setQuantity(1)
    // Find the price of the selected size
    const selectedProductSize = productSizes.find((size) => size.id === value);
    setSelectedSize(selectedProductSize);
    
    if (selectedProductSize) {
      setPrice(selectedProductSize.promoPrice ?? selectedProductSize.price);
    }
  };
  return (
    <div>
      <div className="variant-picker-item">
        <div className="d-flex justify-content-between mb_12">
          <div className="variant-picker-label">
            Contenance:
            <span className="text-title variant-picker-label-value">
              {selectedSize.size.name} ml {selectedSize.isDecanted ? "(Décante)" : ""}
            </span>
          </div>
          {/* <a
            href="#size-guide"
            data-bs-toggle="modal"
            className="size-guide text-title link"
          >
            Size Guide
          </a> */}
        </div>
        <div className="variant-picker-values gap12">
          {productSizes.map(( {id, price, promoPrice, quantity, isDecanted ,size} ) => (
            <div key={id} onClick={() => handleChange(id)}>
              <input
                type="radio"
                id={id}
                checked={selectedSize.id === id}
                disabled={(!isDecanted && quantity===0 ) || (isDecanted && quickViewItem.decantVolume < size.name*1)}
                readOnly
              />
              <label
                className={`style-text size-btn ${
                  (!isDecanted && quantity===0 ) || (isDecanted && quickViewItem.decantVolume < size.name*1) ? "type-disable" : ""
                }`}
                htmlFor={id}
                data-value={id}
                data-price={promoPrice ?? price}
              >
                <span className="text-title">{size?.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>



      <div className="tf-product-info-quantity">
        <div className="title mb_12">Quantité:</div>
        <ProductQuantitySelect
          
          quantity={quantity}
          setQuantity={setQuantity}
          selectedSize={selectedSize}
          product={quickViewItem}
          // setStock={
          //   quickViewItem.productSizes
          //     ? quickViewItem.productSizes[0].isDecanted
          //       ? quickViewItem.decantVolume // 🔹 Stock max pour un produit décanté
          //       : quickViewItem.productSizes[0].quantity // 🔹 Stock normal pour une taille normale
          //     : quickViewItem.quantity
          // }
        />
      </div>
    </div>
  );
}
