import axios from "axios";
import * as fs from "fs";

async function getPokemon(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(url);
    return {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchPokemonList() {
  const pokemonList = [];

  for (let index = 1; index < 13; index++) {
    const pokemon = await getPokemon(index);
    pokemonList.push(pokemon);
  }

  // Save results to a JSON file
  fs.writeFileSync("pokemonList.json", JSON.stringify(pokemonList, null, 2));
  console.log("Pokemon data has been saved to pokemonList.json");
}

fetchPokemonList();
