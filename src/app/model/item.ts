export interface Item {
  id: number;
  name: string;
  description: string;
}

// https://www.serebii.net/fireredleafgreen/items.shtml
export const items: Item[] = [
  {
    id: 1,
    name: "Amulet Coin",
    description:
      "An item to be held by a Pokémon. It doubles the battle money if the holding Pokémon takes part.",
  },
  {
    id: 2,
    name: "Black Belt",
    description:
      "An item to be held by a Pokémon. A belt that boosts determination and FIGHTING-type moves.",
  },
  {
    id: 3,
    name: "Black Glasses",
    description:
      "An item to be held by a Pokémon. A shady-looking pair of glasses that boosts DARK-type moves.",
  },
  {
    id: 4,
    name: "Blue Scarf",
    description:
      "An item to be held by a Pokémon. It boosts the holding Pokémon's BEAUTY condition in CONTESTS.",
  },
  {
    id: 5,
    name: "Bright Powder",
    description:
      "An item to be held by a Pokémon. It casts a tricky glare that lowers the opponent's accuracy.",
  },
  {
    id: 6,
    name: "Charcoal",
    description:
      "An item to be held by a Pokémon. A combustible fuel that boosts the power of FIRE-type moves.",
  },
];
