"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { GlobalStateContext } from "../../contexts/globalStateContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

export default function OpenPage() {
  const [loading, setLoading] = useState(true); // start on loading screen

  const router = useRouter();

  const { pickedCards, newCards } = useContext(GlobalStateContext);

  useEffect(() => {
    if (pickedCards.length === 0) {
      router.push("/");
    }
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  // console.log(pickedCards);
  // console.log(newCards);

  // TODO:
  // Change background UI depending on card.types[0]
  // Add a 'new' badge to the card if it wasn't already in the user's collection
  // Add card style based on card.rarity
  // Add Pokemon name to background in text that fills screen width? (abstract)

  return (
    <div className="card-stack-container">
      <div className={`card-stack ${loading ? 'opacity-0' : ''}`}>
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={(swiper) => {
            const slide = swiper.activeIndex;
            const card = pickedCards[slide];
            // console.log(card);
          }}
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
      </div>
    </div>
  );
}

