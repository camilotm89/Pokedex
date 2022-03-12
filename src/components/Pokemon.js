import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;
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
                                <div key={idx}>{type.type.name}</div>
                                );
                                
                            })}
                        </div>
                        <div className='pokemon-favorite'> ❤️ </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;