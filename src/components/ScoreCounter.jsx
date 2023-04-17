const ScoreCounter = ( { currentScore, bestScore } ) => {
    return ( 
        <div>
            <div>Current score: {currentScore}</div>
            <div>Best score: {bestScore}</div>
        </div>
     );
}
 
export default ScoreCounter;