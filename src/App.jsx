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

  return (
    <>
      <section className={wrapperClass}>
        <ScoreBoard
          whiteScore={whiteScore}
          blackScore={blackScore}
        />
        <GameBoard whitePiece={whitePiece} blackPiece={blackPiece} />
        <PlayButtons
          whitePiece={whitePiece}
          blackPiece={blackPiece}
          endGame={endGame}
          setBlackPiece={setBlackPiece}
          setWhitePiece={setWhitePiece}
          setEndGame={setEndGame}
          setWhiteScore={setWhiteScore}
          setBlackScore={setBlackScore}
        />
      </section>
    </>
  );
};
export default App;
