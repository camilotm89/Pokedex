import React from "react";
import './styles.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from "./api";
import Pokemon from "./components/Pokemon";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

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
    }catch(err){}
  };

  useEffect(() => {
    fetchPokemons();
  },[page]);

  return (
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar />
        {
          loading ? <div>Cargando... </div>
          :
          <Pokedex 
          pokemons={pokemons} 
          page={page}
          setPage={setPage}
          total={total}
          />
}
      </div>
    </div>
  );
}