"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { homeBrands } from "@/data/homeBrands";
export default function HomeBrands() {
  const params = {
    slidesPerView: 6,
    breakpoints: {
      1024: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
    spaceBetween: 15,
  };
  // const data = await fetch('https://api.vercel.app/blog')
  // const brands = await data.json()
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Nos Marques</h3>
          <Link href={`/shop-collection`} className="btn-line">
            Afficher Tout
          </Link>
        </div>
        <div className="flat-collection-circle wow fadeInUp">
          <div dir="ltr" className="swiper tf-sw-categories">
            <Swiper
              {...params}
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: ".spd60",
              }}
              navigation={{
                prevEl: ".snbp14",
                nextEl: ".snbn14",
              }}
            >
              {homeBrands.map((brand, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="collection-circle hover-img">
                    <Link
                      href={`/brand/${brand.name}`}
                      className="img-style radius-48"
                    >
                      <Image
                        className="lazyload"
                        data-src={brand.imgSrc}
                        alt="collection-img"
                        src={brand.imgSrc}
                        width={286}
                        height={285}
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href={`/brand/brand.title`} className="cls-title">
                        <h6 className="text">{brand.name}</h6>
                        <i className="icon icon-arrowUpRight" />
                      </Link>
                      {/* <div className="count text-secondary">
                        x produits
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-flex d-lg-none sw-pagination-categories sw-dots type-circle justify-content-center spd60" />
          </div>
          <div className="nav-prev-categories d-none d-lg-flex nav-sw style-line nav-sw-left snbp14">
            <i className="icon icon-arrLeft" />
          </div>
          <div className="nav-next-categories d-none d-lg-flex nav-sw style-line nav-sw-right snbn14">
            <i className="icon icon-arrRight" />
          </div>
        </div>
      </div>
    </section>
  );
}
