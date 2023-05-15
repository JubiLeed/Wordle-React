import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  const gameReset = () => {
    document.location.reload();
  };

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly guessed"
          : "Game Finish, try again!"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <>
          <h3>You Guess in {currAttempt.attempt} attempts</h3>
          <button className="btn" onClick={gameReset}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default GameOver;
