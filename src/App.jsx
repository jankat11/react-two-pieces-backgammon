import { useState } from "react";
import GameBoard from "./GameBoard";
import PlayButtons from "./PlayButtons";
import ScoreBoard from "./ScoreBoard";
import { wrapperClass, whiteInitital, blackInitital } from "./utility";

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);
  const [endGame, setEndGame] = useState(false)

  return (
    <>
      <section className={wrapperClass}>
        <ScoreBoard />
        <GameBoard whitePiece={whitePiece} blackPiece={blackPiece} />
        <PlayButtons
          whitePiece={whitePiece}
          blackPiece={blackPiece}
          endGame={endGame}
          setBlackPiece={setBlackPiece}
          setWhitePiece={setWhitePiece}
          setEndGame={setEndGame}
        />
      </section>
    </>
  );
};
export default App;
