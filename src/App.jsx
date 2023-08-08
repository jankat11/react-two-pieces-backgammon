import { useState } from "react";
import GameBoard from "./GameBoard";
import PlayButtons from "./PlayButtons";
import ScoreBoard from "./ScoreBoard";
import { wrapperClass, whiteInitital, blackInitital } from "./utility";

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);
  const [whiteScore, setWhiteScore] = useState(0);
  const [blackScore, setBlackScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [dice, setDice] = useState("-");

  const commonProps = {
    setWhiteScore,
    setBlackScore,
    setBlackPiece,
    setWhitePiece,
    setEndGame,
    setDice,
  };

  return (
    <>
      <section className={wrapperClass}>
        <ScoreBoard
          {...commonProps}
          whiteScore={whiteScore}
          blackScore={blackScore}
        />
        <GameBoard whitePiece={whitePiece} blackPiece={blackPiece} />
        <PlayButtons
          {...commonProps}
          whitePiece={whitePiece}
          blackPiece={blackPiece}
          endGame={endGame}
          dice={dice}
        />
      </section>
    </>
  );
};
export default App;
