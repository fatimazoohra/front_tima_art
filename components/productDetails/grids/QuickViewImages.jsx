"use client";

import { useEffect, useRef, useState } from "react";

import { items } from "@/data/singleProductSliders";
import Image from "next/image";
import { products } from "@/data/products";
export default function QuickViewImages({
  images 
}) {  
  const api_url = process.env.NEXT_PUBLIC_API_URL
  const finalItems = images;
  // items[0].src = firstItem ?? items[0].src;

  // itemsFinal2[0].src = products[0].imgSrc;

  const observerRef = useRef(null);

  // const scrollToTarget = () => {
  //   // Find the element with the specific data-value attribute
  //   const heightScroll = window.scrollY;
  //   const targetElement = document.querySelector(
  //     `[data-scroll='${activeColor}']`
  //   );

  //   // Check if the element exists
  //   if (targetElement) {
  //     // Get the element's bounding rectangle
  //     setTimeout(() => {
  //       if (window.scrollY == heightScroll) {
  //         targetElement?.scrollIntoView({
  //           behavior: "smooth", // Smooth scrolling animation
  //           block: "center", // Center the element in the viewport
  //         });
  //       }
  //     }, 200);

  //     // Scroll only if the element is not already in view
  //   }
  // };

  // useEffect(() => {
  //   scrollToTarget();
  // }, [activeColor]);

  useEffect(() => {
    const options = {
      rootMargin: "-50% 0px",
    };

    // Create the observer
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const scrollValue = entry.target.getAttribute("data-scroll");
    //       setActiveColor(scrollValue);
    //     }
    //   });
    // }, options);

    // Observe all items
    // const elements = document.querySelectorAll(".item-scroll-quickview");
    // elements.forEach((el) => observer.observe(el));
    // observerRef.current = observer;

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="tf-quick-view-image">
      <div className="wrap-quick-view wrapper-scroll-quickview">
        {finalItems.map((link, index) => (
          <a
            href={api_url + "/" + link.path}
            target="_blank"
            className="quickView-item item-scroll-quickview"
            // data-scroll={link.scroll}
            data-pswp-width="600px"
            data-pswp-height="800px"
            key={index}
          >
            <Image
              className="lazyload"
              data-zoom={api_url + "/" + link.path}
              data-src={api_url + "/" + link.path}
              alt={link.fileName}
              src={api_url + "/" + link.path}
              width="600"
              height="800"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
