"use client";

import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
import ProductCard1 from "../productCards/ProductCard1";
import Pagination from "../common/Pagination";
import Link from "next/link";
import HomeProductCard from "../HomeProductCard";
// import { allProducts } from "@/data/products";

export default function Wishlist() {
  const { removeFromWishlist, wishList } = useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
      if (wishList.length > 0) {
        const fetchWishlistProducts = async () => {
          try {
            const api_url = process.env.NEXT_PUBLIC_API_URL
            const response = await fetch(`${api_url}/product/wishlist?ids=${wishList.join(",")}`);
            const data = await response.json();
            setItems(data.data.products);
          } catch (error) {
            console.error("Error fetching wishlist products:", error);
          }
        };
  
        fetchWishlistProducts();
      } else {
        setItems([]);
      }
    }, [wishList]);
  return (
    <section className="flat-spacing">
      <div className="container">
        {items.length ? (
          <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
            {/* card product 1 */}
            {items.map((product, i) => (
              <HomeProductCard key={i} product={product} />
            ))}

            {/* pagination */}
            <ul className="wg-pagination justify-content-center">
              <Pagination />
              {/* <Pagination
                totalPages={Math.ceil(totalItems / itemsPerPage)}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              /> */}
            </ul>
          </div>
        ) : (
          <div className="p-5">
            Your wishlist is empty. Start adding your favorite products to save
            them for later!{" "}
            <Link className="btn-line" href="/shop-default-grid">
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
