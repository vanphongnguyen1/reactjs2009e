import React from 'react'
import { Pokemons } from './InfoPokemont'

const ListPokemon = () => {
  return (
    <div>
      <ul>
      <img src="/assets/abra.png" alt="pokemom" />
        {
          Pokemons.map(pokemon => {
            return (
              <li key={pokemon.id} id={pokemon.id}>
                <img src='../assets/abra.png' alt="pokemom" />
                adasdasd
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListPokemon
