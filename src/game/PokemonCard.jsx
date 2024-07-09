import '../styles/PokemonCard.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';


export default function PokemonCard({name, image, isReset, shuffleCards, incrementScore, endCurrentRun}) {

    const [isClicked, setIsClicked] = useState(false)
    useEffect(()=> {
        if (isReset) {
            setIsClicked(false)
    }}, [isReset])

    function handleCardClick() {
        console.log(name)
        console.log(isClicked)
        setIsClicked(!isClicked)
        if (isClicked) {
            endCurrentRun()
        } else{
            incrementScore()
        }
        shuffleCards()
    }


    return (
        <div className='pokeCard'>
            <Card 
                onClick={handleCardClick} 
                name={name}
                sx={{
                    border: '4px solid black',
                    borderRadius: '16px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',

                }}            
            >
                <CardMedia
                    component="img"
                    alt={name}
                    height="120"
                    image={image}
                    sx={{
                        backgroundColor: "blueviolet"
                    }}
                />
                <CardContent>
                <Typography 
                    gutterBottom  
                    component="div" 
                    sx={{ 
                        fontFamily: 'gameBoyPokemon, Arial, Helvetica, sans-serif', 
                        fontSize: '12px' 
                    }} 
                >
                    {name}
                </Typography>
                </CardContent>
            </Card>
        </div>
      );


}

