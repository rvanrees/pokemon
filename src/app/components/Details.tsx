"use client";

const Details = (props: any) => {
  const { pokemon } = props;

  return (
    <div className="flex-col p-4 m-4 border rounded-md shadow-sm w-80 mx-auto">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            key={pokemon.id}
            alt={pokemon.name}
            src={`/sprites/normal/${pokemon.id}.png`}
            className="s-16 transition-opacity duration-300 ease-in-out hover:opacity-0"
          />
          <img
            key={pokemon.id}
            alt={pokemon.name}
            src={`/sprites/shiny/${pokemon.id}.png`}
            className="s-16 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-medium text-gray-900">
              {pokemon.name}
            </h1>
            <p className="text-md font-medium text-gray-400">
              No. {pokemon.id}
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {pokemon.primaryType}
              </span>
              {pokemon.secondaryType ? (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {pokemon.secondaryType}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <h2 className="text-xs font-medium text-gray-900">
          Att
          <span className="ml-1 text-gray-400">{pokemon.attack}</span>
        </h2>
        <h2 className="text-xs font-medium text-gray-900">
          Def
          <span className="ml-1 text-gray-400">{pokemon.defense}</span>
        </h2>
        <h2 className="text-xs font-medium text-gray-900">
          Sp.Att
          <span className="ml-1 text-gray-400">{pokemon.specialAttack}</span>
        </h2>
        <h2 className="text-xs font-medium text-gray-900">
          Sp.Def
          <span className="ml-1 text-gray-400">{pokemon.specialDefense}</span>
        </h2>
        <h2 className="text-xs font-medium text-gray-900">
          Sp
          <span className="ml-1 text-gray-400">{pokemon.speed}</span>
        </h2>
      </div>
    </div>
  );
};

export default Details;