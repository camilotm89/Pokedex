import React from 'react';
import FavoriteConext from '../contexts/favoritesContext';

const {useContext} = React;

const Navbar = () =>  {
    const {favoritePokemons} = useContext(FavoriteConext);

    return (
    <nav>
        <div>
        </div>
        <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
            alt="pokeapi-logo"
            className="navbar-image"
        />
        </div>
        <div> ❤️ { favoritePokemons.length} </div>
    </nav>
    );
};

export default Navbar;
