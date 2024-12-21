"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { GlobalStateContext } from "../../contexts/globalStateContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

export default function OpenPage() {
  const router = useRouter();

  const { pickedCards } = useContext(GlobalStateContext);

  useEffect(() => {
    if (pickedCards.length === 0) {
      router.push("/");
    }
  }, [pickedCards, router]);

  return (
    <>
      <div className="card-stack">
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={() => console.log("slideChange")}
        >
          {pickedCards.map((card: any, index: number) => (
            <SwiperSlide
              key={`${card.id}-${index}`}
            >
              <div className="card">
                <Image
                  src={card.images.large}
                  alt={card.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/sv3pt5" className="btn bg-orange-600 p-2 mt-10">See your deck</Link>
      </div>
    </>
  );
}
