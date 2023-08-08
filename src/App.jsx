import { useState } from "react";
import GameBoard from "./GameBoard";
import PlayButtons from "./PlayButtons";
import { wrapperClass, whiteInitital, blackInitital } from "./utility";

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);

  return (
    <>
      <section className={wrapperClass}>

        <GameBoard whitePiece={whitePiece} blackPiece={blackPiece} />
        <PlayButtons
          whitePiece={whitePiece}
          blackPiece={blackPiece}
          setBlackPiece={setBlackPiece}
          setWhitePiece={setWhitePiece}
        />
      </section>
    </>
  );
};
export default App;
