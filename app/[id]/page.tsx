"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";

import { GlobalStateContext } from "../../contexts/globalStateContext";

import { Card } from "../../components/Card";

import {
  getPackType,
  getRarityTypes,
  getGodPackTypes,
} from "../../utils/packHelpers";

import testCards from "../../public/datasets/sv3pt5.json";

export default function CollectionPage() {
  const { setPickedCards } = useContext(GlobalStateContext);

  const [packHistory, setPackHistory] = useState<
    Array<{ id: string; picked: number }>
  >([]);
  const [canOpen, setCanOpen] = useState(false);
  const [lastOpenTime, setLastOpenTime] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState("");

  // rarity types from card data
  const setId = "sv3pt5";
  const rarityTypes = getRarityTypes;
  const godPackTypes = getGodPackTypes;

  // separate cards by rarity
  const cardGroups: { [key: string]: any[] } = {};
  rarityTypes.forEach((rarity) => {
    cardGroups[rarity.name] = [];
    testCards.data.forEach((card) => {
      if (card.rarity === rarity.name) {
        cardGroups[rarity.name].push(card);
      }
    });
  });

  const pickCard = (rarity: string) => {
    const card = cardGroups[rarity][Math.floor(Math.random() * cardGroups[rarity].length)];

    // check for existing id in packHistory
    const found = packHistory.find((item: { id: string }) => item.id === card.id);
    if (found) {
      // update picked count
      found.picked += 1;
    } else {
      // add new item to packHistory
      packHistory.push({ id: card.id, picked: 1 });
    }

    // save packHistory to local storage
    localStorage.setItem(setId, JSON.stringify(packHistory));

    return card;
  };

  // get random rarity type based on chance out of 100
  const randomPick = (arr: { name: string; chance: number }[]) => {
    const totalChance = arr.reduce((sum, item) => sum + item.chance, 0);
    const randomNum = Math.random() * totalChance;
    let currentSum = 0;

    for (const item of arr) {
      currentSum += item.chance;
      if (randomNum <= currentSum) {
        return item;
      }
    }
    return arr[arr.length - 1]; // fallback
  };

  // Update pickCards function to use a single pick instead of array
  const noOfCards = 5;
  const pickCards = () => {
    const pack = getPackType();

    // set timedate of pick
    localStorage.setItem(`${setId}-opened`, new Date().toISOString());

    const cards = [];

    if (pack === "rp") {
      for (let i = 0; i < noOfCards; i++) {
        const rarity = randomPick(rarityTypes);
        cards.push(pickCard(rarity.name));
      }
    } else if (pack === "gp") {
      for (let i = 0; i < noOfCards; i++) {
        const rarity = randomPick(godPackTypes);
        cards.push(pickCard(rarity.name));
      }
    }

    setPickedCards(cards);
  };

  const canOpenPack = () => {
    const lastOpened = localStorage.getItem(`${setId}-opened`);
    if (!lastOpened) return true;

    const lastOpenedDate = new Date(lastOpened);
    const currentDate = new Date();
    const hoursDiff =
      (currentDate.getTime() - lastOpenedDate.getTime()) / (1000 * 60 * 60);

    return hoursDiff >= 1;
  };

  useEffect(() => {
    // Initialize localStorage
    if (!localStorage.getItem(setId)) {
      localStorage.setItem(setId, JSON.stringify([]));
    }

    setPackHistory(JSON.parse(localStorage.getItem(setId) || "[]"));
    setCanOpen(canOpenPack());
    setLastOpenTime(localStorage.getItem(`${setId}-opened`));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!canOpen) {
        const lastOpened = new Date(
          localStorage.getItem(`${setId}-opened`) || ""
        );
        const now = new Date();
        // const diff = 3600000 - (now.getTime() - lastOpened.getTime()); // 3600000 ms = 1 hour

        const diff = 60000 - (now.getTime() - lastOpened.getTime()); // 60000 ms = 1 minute


        if (diff > 0) {
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor((diff % 3600000) / 60000);
          const seconds = Math.floor((diff % 60000) / 1000);
          setTimeRemaining(
            `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
          );
        } else {
          setTimeRemaining("");
          clearInterval(timer);
          setCanOpen(true);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lastOpenTime]);

  const handlePickCards = () => {
    pickCards();
    setLastOpenTime(new Date().toISOString());
    setCanOpen(false);
  };

  return (
    <>
      <div className="header mt-5 mb-5 text-center">
        {canOpen ? (
          <Link className="btn bg-orange-500 p-2 rounded-md" href="/open" onClick={handlePickCards}>Open a pack</Link>
        ) : (
          <p className="text-center text-sm">Please wait {timeRemaining} before opening next pack</p>
        )}
      </div>

      <div className="pl-4 pr-4">
        <p className="text-lg mb-5 text-center">Cards collected: <span className="font-bold">{packHistory.length} / {testCards.data.length}</span></p>
        <div className="card-grid grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-3">
        {testCards.data.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              cardPicked={packHistory.find(item => item.id === card.id)}
            />
          )
        })}
      </div>
      </div>
    </>
  );
}
