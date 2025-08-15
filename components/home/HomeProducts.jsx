"use client";
// import ProductCard1 from "@/components/productCards/ProductCard1";
// import { products18 } from "@/data/products";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeProductCard from "../HomeProductCard";
// const tabItems = ["Original", "Run", "Tennis", "Train", "Sale"];
const tabItems = ["Original", "Print"];
export default function HomeProducts({ products = [] }) {
  const [activeItem, setActiveItem] = useState(tabItems[0]); // Default the first item as active
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    document.getElementById("Original").classList.remove("filtered");
    setTimeout(() => {
        if(activeItem == "Original"){
          setSelectedItems(
            products.filter((elm) =>
              //  elm.decantVolume == null && 
            elm.type == 'original'
          )
          );
        }
        else if(activeItem == "Print"){
          setSelectedItems(
            products.filter((elm) => elm.type == 'print')
          );
        }

      document.getElementById("Original").classList.add("filtered");
    }, 300);
  }, [activeItem]);

  return (
    <section className="flat-spacing-3 pt-0">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3>Meilleurs choix du jour</h3>
          <p className="subheading text-secondary">
            Des tableaux d'exception sélectionnés pour vous.
          </p>
          <ul
            className="tab-product-v2 justify-content-sm-center"
            role="tablist"
          >
            {tabItems.map((item, i) => (
              <li key={i} className="nav-tab-item" role="presentation">
                <a
                  className={activeItem === item ? "active" : ""}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setActiveItem(item);
                  }}
                >

                  {item == "Original" && (
                    "Original"
                  )}
                  {item == "Print" && (
                    "Prints"
                  )}
                  
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flat-animate-tab">
          <div className="tab-content">
            <div
              className="tab-pane active show tabFilter filtered"
              id="Original"
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {selectedItems.map((product, index) => (
                  <HomeProductCard key={index} product={product} activeItem={activeItem} />
                ))}
              </div>
              <div className="sec-btn text-center">
                <Link href={`/shop-default-list`} className="btn-line">
                  Voir Tous Les Produits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
