import '../styles/Header.css'

export default function Header({score, maxScore}) {

    return (
        <div className="header">
            <div className='titles'>
                <h1>Pokemon Memory Game</h1>
                <h2>Get points by clicking on a Pokemon! ...but do not click on any more than once!</h2>
            </div>
            
            <div className='scoreBoard'>
                <span>Score: {score}</span>
                <span>Max Score: {maxScore}</span>
            </div>
        </div>
    )
}