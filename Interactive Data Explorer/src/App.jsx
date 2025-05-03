import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/Typefilter';
import Loading from './components/Loading';
import Error from './components/Error';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch the first 150 Pokémon
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
              id: details.data.id,
              name: details.data.name,
              image: details.data.sprites.front_default,
              types: details.data.types.map(type => type.type.name),
            };
          })
        );
        setPokemonList(pokemonData);
        setFilteredPokemon(pokemonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    let filtered = pokemonList;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(pokemon =>
        pokemon.types.includes(selectedType)
      );
    }
    
    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="app">
      <header className="header">
        <h1>Pokemon Explorer</h1>
      </header>
      
      <div className="filters">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter 
          selectedType={selectedType} 
          setSelectedType={setSelectedType} 
          pokemonList={pokemonList}
        />
      </div>
      
      <div className="pokemon-grid">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div className="no-results">
            <p>No Pokémon found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;