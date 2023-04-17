import ScoreCounter from "./components/ScoreCounter"
import Board from "./components/Board"
import { useState, useEffect } from "react";
import bard from './assets/bard.jpg'
import cleric from './assets/cleric.jpg'
import dragon from './assets/dragon.jpg'
import eye from './assets/eye.jpg'
import helmet from './assets/helmet.jpg'
import magic from './assets/magic.jpg'
import monk from './assets/monk.jpg'
import paladin from './assets/paladin.jpg'
import ranger from './assets/ranger.jpg'
import rogue from './assets/rogue.jpg'
import sickle from './assets/sickle.jpg'
import wizard from './assets/wizard.jpg'

function App() {
  const [ gameOver, setGameOver ] = useState(false);
  const [ bestScore, setBestScore ] = useState(0);
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ cards, setCards ] = useState([
    {
        id: 1,
        image: bard,
        chosen: false
    },
    {
        id: 2,
        image: cleric,
        chosen: false
    },
    {
        id: 3,
        image: dragon,
        chosen: false
    },
    {
        id: 4,
        image: eye,
        chosen: false
    },
    {
        id: 5,
        image: helmet,
        chosen: false
    },
    {
        id: 6,
        image: magic,
        chosen: false
    },
    {
        id: 7,
        image: monk,
        chosen: false
    },
    {
        id: 8,
        image: paladin,
        chosen: false
    },
    {
        id: 9,
        image: ranger,
        chosen: false
    },
    {
        id: 10,
        image: rogue,
        chosen: false
    },
    {
        id: 11,
        image: sickle,
        chosen: false
    },
    {
        id: 12,
        image: wizard,
        chosen: false
    }
]);


function resetChosen() {
  const updatedChosen = cards.map(item => {
    return { ...item, chosen: false};
  })
  setCards(updatedChosen);
}

  function toggleChosen(id) {
    setCards(currentCards => {
      return currentCards.map(card => {
        if (card.id === id && card.chosen == false) {
          setCurrentScore(currentScore + 1);
          return { ...card, chosen: true};
        } else if (card.id === id && card.chosen == true) {
          if (currentScore > bestScore) {
            setBestScore(currentScore);
          }
          setCurrentScore(0);
          if (gameOver === false ){
            setGameOver(true);
          } else {
            setGameOver(false);
          }
          
        }
        return card;
      } 
      )})
        }
  

  useEffect(() => {
    resetChosen();
   }, [gameOver]);

  return (
    <div className="App">
      <div className="header">
        <div className="header-title">
          <h1>Memory Card</h1>
          <p>Click each image only once!</p>
        </div>
        <ScoreCounter currentScore={currentScore} bestScore={bestScore} />
      </div>
      <Board toggleChosen={toggleChosen} cards={cards} setCards={setCards} />
    </div>
  )
}

export default App