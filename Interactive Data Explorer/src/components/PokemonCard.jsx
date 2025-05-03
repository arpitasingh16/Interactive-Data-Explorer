import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img 
        src={pokemon.image || 'https://via.placeholder.com/96'} 
        alt={pokemon.name} 
        className="pokemon-image"
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</p>
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type} className={`type-badge type-${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;