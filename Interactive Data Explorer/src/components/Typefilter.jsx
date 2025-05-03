import React, { useState, useEffect } from 'react';

function TypeFilter({ selectedType, setSelectedType, pokemonList }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    // Extract all unique types from the Pokémon list
    const allTypes = new Set();
    pokemonList.forEach(pokemon => {
      pokemon.types.forEach(type => allTypes.add(type));
    });
    setTypes(['all', ...Array.from(allTypes).sort()]);
  }, [pokemonList]);

  return (
    <div className="type-filter">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {types.map(type => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;