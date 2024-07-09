import pokemonList from "../assets/pokemonList.json"
import '../styles/PokemonCardGroup.css'
import PokemonCard from "./PokemonCard"

export default function PokemonCardGroup({incrementScore, endCurrentRun, isReset}) {

    // Fisher-Yates shuffle algorithm to shuffle cards
    function swap(pokemonList, i, j) {
        const temp = pokemonList[i];
        pokemonList[i] = pokemonList[j];
        pokemonList[j] = temp;
    }

    function shuffleCards() {
        const length = pokemonList.length;
        for (let i = length; i > 0; i--) {
           const randomIndex = Math.floor(Math.random() * i);
           const currIndex = i - 1;
           swap(pokemonList, currIndex, randomIndex)
        }
        console.log('about to shuffle list')
        return pokemonList;
    }



    return (
        <div className="pokemonGroupGrid">
            {pokemonList.map((pokemon) => {
                return (
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        isReset={isReset}
                        shuffleCards={shuffleCards}
                        incrementScore={incrementScore} 
                        endCurrentRun={endCurrentRun}

                    />               
                )
            })}        
        </div>
    )
}