import React, { useState, useEffect } from 'react';

const Board = ( {cards, setCards, toggleChosen} ) => {
    
    
    const allCards = cards.map(item => {
        return <img src={item.image} key={item.id} 
            onClick={e => toggleChosen(item.id)} />
       })

    useEffect(() => {
        setCards((prevCards) => prevCards.sort(() => Math.random() -0.5));
    }, [cards]);

    return ( 
       <div className="board">{allCards}</div>
     );
}
 
export default Board;