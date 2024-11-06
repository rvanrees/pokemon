export interface Nature {
  id: number;
  name: string;
  attack: Effect;
  defense: Effect;
  specialAttack: Effect;
  specialDefense: Effect;
  speed: Effect;
}

export enum Effect {
  RisesQuickly,
  RisesSlowly,
  NoEffect,
}

// https://strategywiki.org/wiki/Pok%C3%A9mon_FireRed_and_LeafGreen/Natures
export const natures: Nature[] = [
  {
    id: 1,
    name: "Adamant",
    attack: Effect.RisesQuickly,
    defense: Effect.NoEffect,
    specialAttack: Effect.RisesSlowly,
    specialDefense: Effect.NoEffect,
    speed: Effect.NoEffect,
  },
  {
    id: 2,
    name: "Bashful",
    attack: Effect.NoEffect,
    defense: Effect.NoEffect,
    specialAttack: Effect.NoEffect,
    specialDefense: Effect.NoEffect,
    speed: Effect.NoEffect,
  },
  {
    id: 3,
    name: "Bold",
    attack: Effect.RisesSlowly,
    defense: Effect.RisesQuickly,
    specialAttack: Effect.NoEffect,
    specialDefense: Effect.NoEffect,
    speed: Effect.NoEffect,
  },
  {
    id: 4,
    name: "Brave",
    attack: Effect.RisesQuickly,
    defense: Effect.NoEffect,
    specialAttack: Effect.NoEffect,
    specialDefense: Effect.NoEffect,
    speed: Effect.RisesSlowly,
  },
];
