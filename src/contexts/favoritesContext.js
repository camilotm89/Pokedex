import React from "react";

const FavoriteConext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemosn: (id) => null
});

export const FavoriteProvider = FavoriteConext.Provider;

export default FavoriteConext;