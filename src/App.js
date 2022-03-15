import React from "react";
import './styles.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import Pokemon from "./components/Pokemon";
import { FavoriteProvider } from "./contexts/favoritesContext";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(15, 15*page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 15))
      setNotFound(false);
    }catch(err){}
  };

  useEffect(() => {
    fetchPokemons();
  },[page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >=0){
      updated.splice(isFavorite, 1);
    } else{
      updated.push(name);
    }
    setFavorites(updated);
  }

  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true);
      setLoading(false);
      return;
    } else{
      setPokemons([result]);
    }
    setLoading(false);
  }

  return (
    <FavoriteProvider 
    value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons
      }}>
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar onSearch={onSearch} />
        {notFound ?
          <div className="text-center">No se encontró el pokemón 😭</div>
        :
          <Pokedex 
            loading={loading}
            pokemons={pokemons} 
            page={page}
            setPage={setPage}
            total={total}
          />
        }
      </div>
    </div>
    </FavoriteProvider>
  );
}