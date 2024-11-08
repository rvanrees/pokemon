import { Item } from "./item";
import { Nature } from "./nature";

export interface Pokemon {
  id: number;
  name: string;
  primaryType: string;
  secondaryType: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  nature?: Nature;
  item?: Item;
}

export const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 2,
    name: "Ivysaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 60,
    attack: 62,
    defense: 63,
    specialAttack: 80,
    specialDefense: 80,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 3,
    name: "Venusaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 80,
    attack: 82,
    defense: 83,
    specialAttack: 100,
    specialDefense: 100,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 4,
    name: "Charmander",
    primaryType: "Fire",
    secondaryType: "",
    hp: 39,
    attack: 52,
    defense: 43,
    specialAttack: 60,
    specialDefense: 50,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 5,
    name: "Charmeleon",
    primaryType: "Fire",
    secondaryType: "",
    hp: 58,
    attack: 64,
    defense: 58,
    specialAttack: 80,
    specialDefense: 65,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 6,
    name: "Charizard",
    primaryType: "Fire",
    secondaryType: "Flying",
    hp: 78,
    attack: 84,
    defense: 78,
    specialAttack: 109,
    specialDefense: 85,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 7,
    name: "Squirtle",
    primaryType: "Water",
    secondaryType: "",
    hp: 44,
    attack: 48,
    defense: 65,
    specialAttack: 50,
    specialDefense: 64,
    speed: 43,
    nature: undefined,
    item: undefined,
  },
  {
    id: 8,
    name: "Wartortle",
    primaryType: "Water",
    secondaryType: "",
    hp: 59,
    attack: 63,
    defense: 80,
    specialAttack: 65,
    specialDefense: 80,
    speed: 58,
    nature: undefined,
    item: undefined,
  },
  {
    id: 9,
    name: "Blastoise",
    primaryType: "Water",
    secondaryType: "",
    hp: 79,
    attack: 83,
    defense: 100,
    specialAttack: 85,
    specialDefense: 105,
    speed: 78,
    nature: undefined,
    item: undefined,
  },
  {
    id: 10,
    name: "Caterpie",
    primaryType: "Bug",
    secondaryType: "",
    hp: 45,
    attack: 30,
    defense: 35,
    specialAttack: 20,
    specialDefense: 20,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 11,
    name: "Metapod",
    primaryType: "Bug",
    secondaryType: "",
    hp: 50,
    attack: 20,
    defense: 55,
    specialAttack: 25,
    specialDefense: 25,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 12,
    name: "Butterfree",
    primaryType: "Bug",
    secondaryType: "Flying",
    hp: 60,
    attack: 45,
    defense: 50,
    specialAttack: 90,
    specialDefense: 80,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 13,
    name: "Weedle",
    primaryType: "Bug",
    secondaryType: "Poison",
    hp: 40,
    attack: 35,
    defense: 30,
    specialAttack: 20,
    specialDefense: 20,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 14,
    name: "Kakuna",
    primaryType: "Bug",
    secondaryType: "Poison",
    hp: 45,
    attack: 25,
    defense: 50,
    specialAttack: 25,
    specialDefense: 25,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 15,
    name: "Beedrill",
    primaryType: "Bug",
    secondaryType: "Poison",
    hp: 65,
    attack: 90,
    defense: 40,
    specialAttack: 45,
    specialDefense: 80,
    speed: 75,
    nature: undefined,
    item: undefined,
  },
  {
    id: 16,
    name: "Pidgey",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 40,
    attack: 45,
    defense: 40,
    specialAttack: 35,
    specialDefense: 35,
    speed: 56,
    nature: undefined,
    item: undefined,
  },
  {
    id: 17,
    name: "Pidgeotto",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 63,
    attack: 60,
    defense: 55,
    specialAttack: 50,
    specialDefense: 50,
    speed: 71,
    nature: undefined,
    item: undefined,
  },
  {
    id: 18,
    name: "Pidgeot",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 83,
    attack: 80,
    defense: 75,
    specialAttack: 70,
    specialDefense: 70,
    speed: 101,
    nature: undefined,
    item: undefined,
  },
  {
    id: 19,
    name: "Rattata",
    primaryType: "Normal",
    secondaryType: "",
    hp: 30,
    attack: 56,
    defense: 35,
    specialAttack: 25,
    specialDefense: 35,
    speed: 72,
    nature: undefined,
    item: undefined,
  },
  {
    id: 20,
    name: "Raticate",
    primaryType: "Normal",
    secondaryType: "",
    hp: 55,
    attack: 81,
    defense: 60,
    specialAttack: 50,
    specialDefense: 70,
    speed: 97,
    nature: undefined,
    item: undefined,
  },
  {
    id: 21,
    name: "Spearow",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 40,
    attack: 60,
    defense: 30,
    specialAttack: 31,
    specialDefense: 31,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 22,
    name: "Fearow",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 65,
    attack: 90,
    defense: 65,
    specialAttack: 61,
    specialDefense: 61,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 23,
    name: "Ekans",
    primaryType: "Poison",
    secondaryType: "",
    hp: 35,
    attack: 60,
    defense: 44,
    specialAttack: 40,
    specialDefense: 54,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 24,
    name: "Arbok",
    primaryType: "Poison",
    secondaryType: "",
    hp: 60,
    attack: 95,
    defense: 69,
    specialAttack: 65,
    specialDefense: 79,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 25,
    name: "Pikachu",
    primaryType: "Electric",
    secondaryType: "",
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 26,
    name: "Raichu",
    primaryType: "Electric",
    secondaryType: "",
    hp: 60,
    attack: 90,
    defense: 55,
    specialAttack: 90,
    specialDefense: 80,
    speed: 110,
    nature: undefined,
    item: undefined,
  },
  {
    id: 27,
    name: "Sandshrew",
    primaryType: "Ground",
    secondaryType: "",
    hp: 50,
    attack: 75,
    defense: 85,
    specialAttack: 20,
    specialDefense: 30,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 28,
    name: "Sandslash",
    primaryType: "Ground",
    secondaryType: "",
    hp: 75,
    attack: 100,
    defense: 110,
    specialAttack: 45,
    specialDefense: 55,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 29,
    name: "Nidoran♀",
    primaryType: "Poison",
    secondaryType: "",
    hp: 55,
    attack: 47,
    defense: 52,
    specialAttack: 40,
    specialDefense: 40,
    speed: 41,
    nature: undefined,
    item: undefined,
  },
  {
    id: 30,
    name: "Nidorina",
    primaryType: "Poison",
    secondaryType: "",
    hp: 70,
    attack: 62,
    defense: 67,
    specialAttack: 55,
    specialDefense: 55,
    speed: 56,
    nature: undefined,
    item: undefined,
  },
  {
    id: 31,
    name: "Nidoqueen",
    primaryType: "Poison",
    secondaryType: "Ground",
    hp: 90,
    attack: 92,
    defense: 87,
    specialAttack: 75,
    specialDefense: 85,
    speed: 76,
    nature: undefined,
    item: undefined,
  },
  {
    id: 32,
    name: "Nidoran♂",
    primaryType: "Poison",
    secondaryType: "",
    hp: 46,
    attack: 57,
    defense: 40,
    specialAttack: 40,
    specialDefense: 40,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 33,
    name: "Nidorino",
    primaryType: "Poison",
    secondaryType: "",
    hp: 61,
    attack: 72,
    defense: 57,
    specialAttack: 55,
    specialDefense: 55,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 34,
    name: "Nidoking",
    primaryType: "Poison",
    secondaryType: "Ground",
    hp: 81,
    attack: 102,
    defense: 77,
    specialAttack: 85,
    specialDefense: 75,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 35,
    name: "Clefairy",
    primaryType: "Fairy",
    secondaryType: "",
    hp: 70,
    attack: 45,
    defense: 48,
    specialAttack: 60,
    specialDefense: 65,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 36,
    name: "Clefable",
    primaryType: "Fairy",
    secondaryType: "",
    hp: 95,
    attack: 70,
    defense: 73,
    specialAttack: 95,
    specialDefense: 90,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 37,
    name: "Vulpix",
    primaryType: "Fire",
    secondaryType: "",
    hp: 38,
    attack: 41,
    defense: 40,
    specialAttack: 50,
    specialDefense: 65,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 38,
    name: "Ninetales",
    primaryType: "Fire",
    secondaryType: "",
    hp: 73,
    attack: 76,
    defense: 75,
    specialAttack: 81,
    specialDefense: 100,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 39,
    name: "Jigglypuff",
    primaryType: "Normal",
    secondaryType: "Fairy",
    hp: 115,
    attack: 45,
    defense: 20,
    specialAttack: 45,
    specialDefense: 25,
    speed: 20,
    nature: undefined,
    item: undefined,
  },
  {
    id: 40,
    name: "Wigglytuff",
    primaryType: "Normal",
    secondaryType: "Fairy",
    hp: 140,
    attack: 70,
    defense: 45,
    specialAttack: 85,
    specialDefense: 50,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 41,
    name: "Zubat",
    primaryType: "Poison",
    secondaryType: "Flying",
    hp: 40,
    attack: 45,
    defense: 35,
    specialAttack: 30,
    specialDefense: 40,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 42,
    name: "Golbat",
    primaryType: "Poison",
    secondaryType: "Flying",
    hp: 75,
    attack: 80,
    defense: 70,
    specialAttack: 65,
    specialDefense: 75,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 43,
    name: "Oddish",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 45,
    attack: 50,
    defense: 55,
    specialAttack: 75,
    specialDefense: 65,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 44,
    name: "Gloom",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 60,
    attack: 65,
    defense: 70,
    specialAttack: 85,
    specialDefense: 75,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 45,
    name: "Vileplume",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 75,
    attack: 80,
    defense: 85,
    specialAttack: 110,
    specialDefense: 90,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 46,
    name: "Paras",
    primaryType: "Bug",
    secondaryType: "Grass",
    hp: 35,
    attack: 70,
    defense: 55,
    specialAttack: 45,
    specialDefense: 55,
    speed: 25,
    nature: undefined,
    item: undefined,
  },
  {
    id: 47,
    name: "Parasect",
    primaryType: "Bug",
    secondaryType: "Grass",
    hp: 60,
    attack: 95,
    defense: 80,
    specialAttack: 60,
    specialDefense: 80,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 48,
    name: "Venonat",
    primaryType: "Bug",
    secondaryType: "Poison",
    hp: 60,
    attack: 55,
    defense: 50,
    specialAttack: 40,
    specialDefense: 55,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 49,
    name: "Venomoth",
    primaryType: "Bug",
    secondaryType: "Poison",
    hp: 70,
    attack: 65,
    defense: 60,
    specialAttack: 90,
    specialDefense: 75,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 50,
    name: "Diglett",
    primaryType: "Ground",
    secondaryType: "",
    hp: 10,
    attack: 55,
    defense: 25,
    specialAttack: 35,
    specialDefense: 45,
    speed: 95,
    nature: undefined,
    item: undefined,
  },
  {
    id: 51,
    name: "Dugtrio",
    primaryType: "Ground",
    secondaryType: "",
    hp: 35,
    attack: 100,
    defense: 50,
    specialAttack: 50,
    specialDefense: 70,
    speed: 120,
    nature: undefined,
    item: undefined,
  },
  {
    id: 52,
    name: "Meowth",
    primaryType: "Normal",
    secondaryType: "",
    hp: 40,
    attack: 45,
    defense: 35,
    specialAttack: 40,
    specialDefense: 40,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 53,
    name: "Persian",
    primaryType: "Normal",
    secondaryType: "",
    hp: 65,
    attack: 70,
    defense: 60,
    specialAttack: 65,
    specialDefense: 65,
    speed: 115,
    nature: undefined,
    item: undefined,
  },
  {
    id: 54,
    name: "Psyduck",
    primaryType: "Water",
    secondaryType: "",
    hp: 50,
    attack: 52,
    defense: 48,
    specialAttack: 65,
    specialDefense: 50,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 55,
    name: "Golduck",
    primaryType: "Water",
    secondaryType: "",
    hp: 80,
    attack: 82,
    defense: 78,
    specialAttack: 95,
    specialDefense: 80,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 56,
    name: "Mankey",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 40,
    attack: 80,
    defense: 35,
    specialAttack: 35,
    specialDefense: 45,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 57,
    name: "Primeape",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 65,
    attack: 105,
    defense: 60,
    specialAttack: 60,
    specialDefense: 70,
    speed: 95,
    nature: undefined,
    item: undefined,
  },
  {
    id: 58,
    name: "Growlithe",
    primaryType: "Fire",
    secondaryType: "",
    hp: 55,
    attack: 70,
    defense: 45,
    specialAttack: 70,
    specialDefense: 50,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 59,
    name: "Arcanine",
    primaryType: "Fire",
    secondaryType: "",
    hp: 90,
    attack: 110,
    defense: 80,
    specialAttack: 100,
    specialDefense: 80,
    speed: 95,
    nature: undefined,
    item: undefined,
  },
  {
    id: 60,
    name: "Poliwag",
    primaryType: "Water",
    secondaryType: "",
    hp: 40,
    attack: 50,
    defense: 40,
    specialAttack: 40,
    specialDefense: 40,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 61,
    name: "Poliwhirl",
    primaryType: "Water",
    secondaryType: "",
    hp: 65,
    attack: 65,
    defense: 65,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 62,
    name: "Poliwrath",
    primaryType: "Water",
    secondaryType: "Fighting",
    hp: 90,
    attack: 95,
    defense: 95,
    specialAttack: 70,
    specialDefense: 90,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 63,
    name: "Abra",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 25,
    attack: 20,
    defense: 15,
    specialAttack: 105,
    specialDefense: 55,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 64,
    name: "Kadabra",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 40,
    attack: 35,
    defense: 30,
    specialAttack: 120,
    specialDefense: 70,
    speed: 105,
    nature: undefined,
    item: undefined,
  },
  {
    id: 65,
    name: "Alakazam",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 55,
    attack: 50,
    defense: 45,
    specialAttack: 135,
    specialDefense: 95,
    speed: 120,
    nature: undefined,
    item: undefined,
  },
  {
    id: 66,
    name: "Machop",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 70,
    attack: 80,
    defense: 50,
    specialAttack: 35,
    specialDefense: 35,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 67,
    name: "Machoke",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 80,
    attack: 100,
    defense: 70,
    specialAttack: 50,
    specialDefense: 60,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 68,
    name: "Machamp",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 90,
    attack: 130,
    defense: 80,
    specialAttack: 65,
    specialDefense: 85,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 69,
    name: "Bellsprout",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 50,
    attack: 75,
    defense: 35,
    specialAttack: 70,
    specialDefense: 30,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 70,
    name: "Weepinbell",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 65,
    attack: 90,
    defense: 50,
    specialAttack: 85,
    specialDefense: 45,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 71,
    name: "Victreebel",
    primaryType: "Grass",
    secondaryType: "Poison",
    hp: 80,
    attack: 105,
    defense: 65,
    specialAttack: 100,
    specialDefense: 70,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 72,
    name: "Tentacool",
    primaryType: "Water",
    secondaryType: "Poison",
    hp: 40,
    attack: 40,
    defense: 35,
    specialAttack: 50,
    specialDefense: 100,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 73,
    name: "Tentacruel",
    primaryType: "Water",
    secondaryType: "Poison",
    hp: 80,
    attack: 70,
    defense: 65,
    specialAttack: 80,
    specialDefense: 120,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 74,
    name: "Geodude",
    primaryType: "Rock",
    secondaryType: "Ground",
    hp: 40,
    attack: 80,
    defense: 100,
    specialAttack: 30,
    specialDefense: 30,
    speed: 20,
    nature: undefined,
    item: undefined,
  },
  {
    id: 75,
    name: "Graveler",
    primaryType: "Rock",
    secondaryType: "Ground",
    hp: 55,
    attack: 95,
    defense: 115,
    specialAttack: 45,
    specialDefense: 45,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 76,
    name: "Golem",
    primaryType: "Rock",
    secondaryType: "Ground",
    hp: 80,
    attack: 120,
    defense: 130,
    specialAttack: 55,
    specialDefense: 65,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 77,
    name: "Ponyta",
    primaryType: "Fire",
    secondaryType: "",
    hp: 50,
    attack: 85,
    defense: 55,
    specialAttack: 65,
    specialDefense: 65,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 78,
    name: "Rapidash",
    primaryType: "Fire",
    secondaryType: "",
    hp: 65,
    attack: 100,
    defense: 70,
    specialAttack: 80,
    specialDefense: 80,
    speed: 105,
    nature: undefined,
    item: undefined,
  },
  {
    id: 79,
    name: "Slowpoke",
    primaryType: "Water",
    secondaryType: "Psychic",
    hp: 90,
    attack: 65,
    defense: 65,
    specialAttack: 40,
    specialDefense: 40,
    speed: 15,
    nature: undefined,
    item: undefined,
  },
  {
    id: 80,
    name: "Slowbro",
    primaryType: "Water",
    secondaryType: "Psychic",
    hp: 95,
    attack: 75,
    defense: 110,
    specialAttack: 100,
    specialDefense: 80,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 81,
    name: "Magnemite",
    primaryType: "Electric",
    secondaryType: "Steel",
    hp: 25,
    attack: 35,
    defense: 70,
    specialAttack: 95,
    specialDefense: 55,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 82,
    name: "Magneton",
    primaryType: "Electric",
    secondaryType: "Steel",
    hp: 50,
    attack: 60,
    defense: 95,
    specialAttack: 120,
    specialDefense: 70,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 83,
    name: "Farfetch'd",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 52,
    attack: 90,
    defense: 55,
    specialAttack: 58,
    specialDefense: 62,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 84,
    name: "Doduo",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 35,
    attack: 85,
    defense: 45,
    specialAttack: 35,
    specialDefense: 35,
    speed: 75,
    nature: undefined,
    item: undefined,
  },
  {
    id: 85,
    name: "Dodrio",
    primaryType: "Normal",
    secondaryType: "Flying",
    hp: 60,
    attack: 110,
    defense: 70,
    specialAttack: 60,
    specialDefense: 60,
    speed: 110,
    nature: undefined,
    item: undefined,
  },
  {
    id: 86,
    name: "Seel",
    primaryType: "Water",
    secondaryType: "",
    hp: 65,
    attack: 45,
    defense: 55,
    specialAttack: 45,
    specialDefense: 70,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 87,
    name: "Dewgong",
    primaryType: "Water",
    secondaryType: "Ice",
    hp: 90,
    attack: 70,
    defense: 80,
    specialAttack: 70,
    specialDefense: 95,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 88,
    name: "Grimer",
    primaryType: "Poison",
    secondaryType: "",
    hp: 80,
    attack: 80,
    defense: 50,
    specialAttack: 40,
    specialDefense: 50,
    speed: 25,
    nature: undefined,
    item: undefined,
  },
  {
    id: 89,
    name: "Muk",
    primaryType: "Poison",
    secondaryType: "",
    hp: 105,
    attack: 105,
    defense: 75,
    specialAttack: 65,
    specialDefense: 100,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 90,
    name: "Shellder",
    primaryType: "Water",
    secondaryType: "",
    hp: 30,
    attack: 65,
    defense: 100,
    specialAttack: 45,
    specialDefense: 25,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 91,
    name: "Cloyster",
    primaryType: "Water",
    secondaryType: "Ice",
    hp: 50,
    attack: 95,
    defense: 180,
    specialAttack: 85,
    specialDefense: 45,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 92,
    name: "Gastly",
    primaryType: "Ghost",
    secondaryType: "Poison",
    hp: 30,
    attack: 35,
    defense: 30,
    specialAttack: 100,
    specialDefense: 35,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 93,
    name: "Haunter",
    primaryType: "Ghost",
    secondaryType: "Poison",
    hp: 45,
    attack: 50,
    defense: 45,
    specialAttack: 115,
    specialDefense: 55,
    speed: 95,
    nature: undefined,
    item: undefined,
  },
  {
    id: 94,
    name: "Gengar",
    primaryType: "Ghost",
    secondaryType: "Poison",
    hp: 60,
    attack: 65,
    defense: 60,
    specialAttack: 130,
    specialDefense: 75,
    speed: 110,
    nature: undefined,
    item: undefined,
  },
  {
    id: 95,
    name: "Onix",
    primaryType: "Rock",
    secondaryType: "Ground",
    hp: 35,
    attack: 45,
    defense: 160,
    specialAttack: 30,
    specialDefense: 45,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 96,
    name: "Drowzee",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 60,
    attack: 48,
    defense: 45,
    specialAttack: 43,
    specialDefense: 90,
    speed: 42,
    nature: undefined,
    item: undefined,
  },
  {
    id: 97,
    name: "Hypno",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 85,
    attack: 73,
    defense: 70,
    specialAttack: 73,
    specialDefense: 115,
    speed: 67,
    nature: undefined,
    item: undefined,
  },
  {
    id: 98,
    name: "Krabby",
    primaryType: "Water",
    secondaryType: "",
    hp: 30,
    attack: 105,
    defense: 90,
    specialAttack: 25,
    specialDefense: 25,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 99,
    name: "Kingler",
    primaryType: "Water",
    secondaryType: "",
    hp: 55,
    attack: 130,
    defense: 115,
    specialAttack: 50,
    specialDefense: 50,
    speed: 75,
    nature: undefined,
    item: undefined,
  },
  {
    id: 100,
    name: "Voltorb",
    primaryType: "Electric",
    secondaryType: "",
    hp: 40,
    attack: 30,
    defense: 50,
    specialAttack: 55,
    specialDefense: 55,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 101,
    name: "Electrode",
    primaryType: "Electric",
    secondaryType: "",
    hp: 60,
    attack: 50,
    defense: 70,
    specialAttack: 80,
    specialDefense: 80,
    speed: 150,
    nature: undefined,
    item: undefined,
  },
  {
    id: 102,
    name: "Exeggcute",
    primaryType: "Grass",
    secondaryType: "Psychic",
    hp: 60,
    attack: 40,
    defense: 80,
    specialAttack: 60,
    specialDefense: 45,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 103,
    name: "Exeggutor",
    primaryType: "Grass",
    secondaryType: "Psychic",
    hp: 95,
    attack: 95,
    defense: 85,
    specialAttack: 125,
    specialDefense: 75,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 104,
    name: "Cubone",
    primaryType: "Ground",
    secondaryType: "",
    hp: 50,
    attack: 50,
    defense: 95,
    specialAttack: 40,
    specialDefense: 50,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 105,
    name: "Marowak",
    primaryType: "Ground",
    secondaryType: "",
    hp: 60,
    attack: 80,
    defense: 110,
    specialAttack: 50,
    specialDefense: 80,
    speed: 45,
    nature: undefined,
    item: undefined,
  },
  {
    id: 106,
    name: "Hitmonlee",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 50,
    attack: 120,
    defense: 53,
    specialAttack: 35,
    specialDefense: 110,
    speed: 87,
    nature: undefined,
    item: undefined,
  },
  {
    id: 107,
    name: "Hitmonchan",
    primaryType: "Fighting",
    secondaryType: "",
    hp: 50,
    attack: 105,
    defense: 79,
    specialAttack: 35,
    specialDefense: 110,
    speed: 76,
    nature: undefined,
    item: undefined,
  },
  {
    id: 108,
    name: "Lickitung",
    primaryType: "Normal",
    secondaryType: "",
    hp: 90,
    attack: 55,
    defense: 75,
    specialAttack: 60,
    specialDefense: 75,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 109,
    name: "Koffing",
    primaryType: "Poison",
    secondaryType: "",
    hp: 40,
    attack: 65,
    defense: 95,
    specialAttack: 60,
    specialDefense: 45,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 110,
    name: "Weezing",
    primaryType: "Poison",
    secondaryType: "",
    hp: 65,
    attack: 90,
    defense: 120,
    specialAttack: 85,
    specialDefense: 70,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 111,
    name: "Rhyhorn",
    primaryType: "Ground",
    secondaryType: "Rock",
    hp: 80,
    attack: 85,
    defense: 95,
    specialAttack: 30,
    specialDefense: 30,
    speed: 25,
    nature: undefined,
    item: undefined,
  },
  {
    id: 112,
    name: "Rhydon",
    primaryType: "Ground",
    secondaryType: "Rock",
    hp: 105,
    attack: 130,
    defense: 120,
    specialAttack: 45,
    specialDefense: 45,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 113,
    name: "Chansey",
    primaryType: "Normal",
    secondaryType: "",
    hp: 250,
    attack: 5,
    defense: 5,
    specialAttack: 35,
    specialDefense: 105,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 114,
    name: "Tangela",
    primaryType: "Grass",
    secondaryType: "",
    hp: 65,
    attack: 55,
    defense: 115,
    specialAttack: 100,
    specialDefense: 40,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 115,
    name: "Kangaskhan",
    primaryType: "Normal",
    secondaryType: "",
    hp: 105,
    attack: 95,
    defense: 80,
    specialAttack: 40,
    specialDefense: 80,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 116,
    name: "Horsea",
    primaryType: "Water",
    secondaryType: "",
    hp: 30,
    attack: 40,
    defense: 70,
    specialAttack: 70,
    specialDefense: 25,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 117,
    name: "Seadra",
    primaryType: "Water",
    secondaryType: "",
    hp: 55,
    attack: 65,
    defense: 95,
    specialAttack: 95,
    specialDefense: 45,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 118,
    name: "Goldeen",
    primaryType: "Water",
    secondaryType: "",
    hp: 45,
    attack: 67,
    defense: 60,
    specialAttack: 35,
    specialDefense: 50,
    speed: 63,
    nature: undefined,
    item: undefined,
  },
  {
    id: 119,
    name: "Seaking",
    primaryType: "Water",
    secondaryType: "",
    hp: 80,
    attack: 92,
    defense: 65,
    specialAttack: 65,
    specialDefense: 80,
    speed: 68,
    nature: undefined,
    item: undefined,
  },
  {
    id: 120,
    name: "Staryu",
    primaryType: "Water",
    secondaryType: "",
    hp: 30,
    attack: 45,
    defense: 55,
    specialAttack: 70,
    specialDefense: 55,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 121,
    name: "Starmie",
    primaryType: "Water",
    secondaryType: "Psychic",
    hp: 60,
    attack: 75,
    defense: 85,
    specialAttack: 100,
    specialDefense: 85,
    speed: 115,
    nature: undefined,
    item: undefined,
  },
  {
    id: 122,
    name: "Mr. Mime",
    primaryType: "Psychic",
    secondaryType: "Fairy",
    hp: 40,
    attack: 45,
    defense: 65,
    specialAttack: 100,
    specialDefense: 120,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 123,
    name: "Scyther",
    primaryType: "Bug",
    secondaryType: "Flying",
    hp: 70,
    attack: 110,
    defense: 80,
    specialAttack: 55,
    specialDefense: 80,
    speed: 105,
    nature: undefined,
    item: undefined,
  },
  {
    id: 124,
    name: "Jynx",
    primaryType: "Ice",
    secondaryType: "Psychic",
    hp: 65,
    attack: 50,
    defense: 35,
    specialAttack: 115,
    specialDefense: 95,
    speed: 95,
    nature: undefined,
    item: undefined,
  },
  {
    id: 125,
    name: "Electabuzz",
    primaryType: "Electric",
    secondaryType: "",
    hp: 65,
    attack: 83,
    defense: 57,
    specialAttack: 95,
    specialDefense: 85,
    speed: 105,
    nature: undefined,
    item: undefined,
  },
  {
    id: 126,
    name: "Magmar",
    primaryType: "Fire",
    secondaryType: "",
    hp: 65,
    attack: 95,
    defense: 57,
    specialAttack: 100,
    specialDefense: 85,
    speed: 93,
    nature: undefined,
    item: undefined,
  },
  {
    id: 127,
    name: "Pinsir",
    primaryType: "Bug",
    secondaryType: "",
    hp: 65,
    attack: 125,
    defense: 100,
    specialAttack: 55,
    specialDefense: 70,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 128,
    name: "Tauros",
    primaryType: "Normal",
    secondaryType: "",
    hp: 75,
    attack: 100,
    defense: 95,
    specialAttack: 40,
    specialDefense: 70,
    speed: 110,
    nature: undefined,
    item: undefined,
  },
  {
    id: 129,
    name: "Magikarp",
    primaryType: "Water",
    secondaryType: "",
    hp: 20,
    attack: 10,
    defense: 55,
    specialAttack: 15,
    specialDefense: 20,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 130,
    name: "Gyarados",
    primaryType: "Water",
    secondaryType: "Flying",
    hp: 95,
    attack: 125,
    defense: 79,
    specialAttack: 60,
    specialDefense: 100,
    speed: 81,
    nature: undefined,
    item: undefined,
  },
  {
    id: 131,
    name: "Lapras",
    primaryType: "Water",
    secondaryType: "Ice",
    hp: 130,
    attack: 85,
    defense: 80,
    specialAttack: 85,
    specialDefense: 95,
    speed: 60,
    nature: undefined,
    item: undefined,
  },
  {
    id: 132,
    name: "Ditto",
    primaryType: "Normal",
    secondaryType: "",
    hp: 48,
    attack: 48,
    defense: 48,
    specialAttack: 48,
    specialDefense: 48,
    speed: 48,
    nature: undefined,
    item: undefined,
  },
  {
    id: 133,
    name: "Eevee",
    primaryType: "Normal",
    secondaryType: "",
    hp: 55,
    attack: 55,
    defense: 50,
    specialAttack: 45,
    specialDefense: 65,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 134,
    name: "Vaporeon",
    primaryType: "Water",
    secondaryType: "",
    hp: 130,
    attack: 65,
    defense: 60,
    specialAttack: 110,
    specialDefense: 95,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 135,
    name: "Jolteon",
    primaryType: "Electric",
    secondaryType: "",
    hp: 65,
    attack: 65,
    defense: 60,
    specialAttack: 110,
    specialDefense: 95,
    speed: 130,
    nature: undefined,
    item: undefined,
  },
  {
    id: 136,
    name: "Flareon",
    primaryType: "Fire",
    secondaryType: "",
    hp: 65,
    attack: 130,
    defense: 60,
    specialAttack: 95,
    specialDefense: 110,
    speed: 65,
    nature: undefined,
    item: undefined,
  },
  {
    id: 137,
    name: "Porygon",
    primaryType: "Normal",
    secondaryType: "",
    hp: 65,
    attack: 60,
    defense: 70,
    specialAttack: 85,
    specialDefense: 75,
    speed: 40,
    nature: undefined,
    item: undefined,
  },
  {
    id: 138,
    name: "Omanyte",
    primaryType: "Rock",
    secondaryType: "Water",
    hp: 35,
    attack: 40,
    defense: 100,
    specialAttack: 90,
    specialDefense: 55,
    speed: 35,
    nature: undefined,
    item: undefined,
  },
  {
    id: 139,
    name: "Omastar",
    primaryType: "Rock",
    secondaryType: "Water",
    hp: 70,
    attack: 60,
    defense: 125,
    specialAttack: 115,
    specialDefense: 70,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 140,
    name: "Kabuto",
    primaryType: "Rock",
    secondaryType: "Water",
    hp: 30,
    attack: 80,
    defense: 90,
    specialAttack: 55,
    specialDefense: 45,
    speed: 55,
    nature: undefined,
    item: undefined,
  },
  {
    id: 141,
    name: "Kabutops",
    primaryType: "Rock",
    secondaryType: "Water",
    hp: 60,
    attack: 115,
    defense: 105,
    specialAttack: 65,
    specialDefense: 70,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 142,
    name: "Aerodactyl",
    primaryType: "Rock",
    secondaryType: "Flying",
    hp: 80,
    attack: 105,
    defense: 65,
    specialAttack: 60,
    specialDefense: 75,
    speed: 130,
    nature: undefined,
    item: undefined,
  },
  {
    id: 143,
    name: "Snorlax",
    primaryType: "Normal",
    secondaryType: "",
    hp: 160,
    attack: 110,
    defense: 65,
    specialAttack: 65,
    specialDefense: 110,
    speed: 30,
    nature: undefined,
    item: undefined,
  },
  {
    id: 144,
    name: "Articuno",
    primaryType: "Ice",
    secondaryType: "Flying",
    hp: 90,
    attack: 85,
    defense: 100,
    specialAttack: 95,
    specialDefense: 125,
    speed: 85,
    nature: undefined,
    item: undefined,
  },
  {
    id: 145,
    name: "Zapdos",
    primaryType: "Electric",
    secondaryType: "Flying",
    hp: 90,
    attack: 90,
    defense: 85,
    specialAttack: 125,
    specialDefense: 90,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
  {
    id: 146,
    name: "Moltres",
    primaryType: "Fire",
    secondaryType: "Flying",
    hp: 90,
    attack: 100,
    defense: 90,
    specialAttack: 125,
    specialDefense: 85,
    speed: 90,
    nature: undefined,
    item: undefined,
  },
  {
    id: 147,
    name: "Dratini",
    primaryType: "Dragon",
    secondaryType: "",
    hp: 41,
    attack: 64,
    defense: 45,
    specialAttack: 50,
    specialDefense: 50,
    speed: 50,
    nature: undefined,
    item: undefined,
  },
  {
    id: 148,
    name: "Dragonair",
    primaryType: "Dragon",
    secondaryType: "",
    hp: 61,
    attack: 84,
    defense: 65,
    specialAttack: 70,
    specialDefense: 70,
    speed: 70,
    nature: undefined,
    item: undefined,
  },
  {
    id: 149,
    name: "Dragonite",
    primaryType: "Dragon",
    secondaryType: "Flying",
    hp: 91,
    attack: 134,
    defense: 95,
    specialAttack: 100,
    specialDefense: 100,
    speed: 80,
    nature: undefined,
    item: undefined,
  },
  {
    id: 150,
    name: "Mewtwo",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 106,
    attack: 110,
    defense: 90,
    specialAttack: 154,
    specialDefense: 90,
    speed: 130,
    nature: undefined,
    item: undefined,
  },
  {
    id: 151,
    name: "Mew",
    primaryType: "Psychic",
    secondaryType: "",
    hp: 100,
    attack: 100,
    defense: 100,
    specialAttack: 100,
    specialDefense: 100,
    speed: 100,
    nature: undefined,
    item: undefined,
  },
];
