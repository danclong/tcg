const getPackType = () => {
  const packChance = Math.random().toFixed(3);
  if (packChance <= 0.995) {
    return "rp";
  } else if (packChance <= 1) {
    return "gp";
  }
};

const getRarityTypes = [
  { name: "Common", chance: 50 },
  { name: "Uncommon", chance: 35 },
  { name: "Rare", chance: 10 },
  { name: "Ultra Rare", chance: 1.5 },
  { name: "Illustration Rare", chance: 1 },
  { name: "Double Rare", chance: 1 },
  { name: "Special Illustration Rare", chance: 1 },
  { name: "Hyper Rare", chance: 0.5 },
];

const getGodPackTypes = [
  { name: "Ultra Rare", chance: 5 },
  { name: "Illustration Rare", chance: 2 },
  { name: "Double Rare", chance: 1 },
  { name: "Special Illustration Rare", chance: 1 },
  { name: "Hyper Rare", chance: 1 },
];

export { getPackType, getRarityTypes, getGodPackTypes };
