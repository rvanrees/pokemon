"use client";

import { useState } from "react";
import { Pokemon, pokemons } from "./model/pokemon";
import Details from "./components/Details";

export default function Home() {
  const [selected, setSelected] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(parseInt(event.target.value));
  };

  return (
    <div>
      <select
        id="pokemon"
        name="pokemon"
        value={selected}
        onChange={handleChange}
      >
        {pokemons.map((p: Pokemon, index: number) => (
          <option key={index} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <Details selected={selected} />
    </div>
  );
}
