import Details from "./components/Details";
import { pokemons } from "./model/pokemon";

export default function Home() {
  return (
    <div className="">
      <Details pokemon={pokemons.at(5)} />
    </div>
  );
}
