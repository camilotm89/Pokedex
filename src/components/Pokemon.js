import React from 'react';
//import { useContext } from 'react/cjs/react.development';
import { useContext } from 'react';
import FavoriteConext from '../contexts/favoritesContext';

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteConext);

    const redHeart = "❤️";
    const blackHeart = "🖤"
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
    
    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
    return(
        <div className='container'>
            <div className='shadow p-3 mb-5 bg-body rounded'>
                <div className='pokemon-img-container d-flex align-items-center justify-content-center'>
                    <img 
                        src= {pokemon.sprites.front_default} 
                        alt= {pokemon.name} 
                        className='card-img-top pokemon-img '
                    />
                </div>
                <div className='card-body'>
                    <div className='card-top'>
                        <h3>{pokemon.name}</h3>
                        <div>#{pokemon.id}</div>
                    </div>
                    <div className='card-bottom'>
                        <div className='pokemon-type'>
                            {pokemon.types.map((type, idx) => {
                                return (
                                <div className='type-item' key={idx}>{type.type.name}</div>
                                
                                );
                                //{pokemon.types[0].type.name}
                            })}
                        </div>
                        <button onClick={clickHeart} className='btn favorite-btn'>
                            <div className='pokemon-favorite'> {heart} </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;