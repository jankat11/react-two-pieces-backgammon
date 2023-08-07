import { Button } from "react-bootstrap";
import { useState } from "react";
import Board from "./Board";
import { newDice, wrapperClass } from "./utility";

const whiteInitital = { color: "white", position: 1 };
const blackInitital = { color: "black", position: 24 };

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);
  const [dice, setDice] = useState("--");

  const handleWhite = () => {
    if (whitePiece.position > 18) return
    let newDiceValue = newDice();
    setDice(newDiceValue);
    setWhitePiece((prev) => ({
      ...prev,
      position: prev.position + newDiceValue,
    }));
  };

  const handleBlack = () => {
    let newDiceValue = newDice();
    setDice(newDiceValue);
    setBlackPiece((prev) => ({
      ...prev,
      position: prev.position - newDiceValue,
    }));
  };

  return (
    <>
      <section className={wrapperClass}>
        <Board whitePiece={whitePiece} blackPiece={blackPiece} />
        <article className="button-container">
          <p className="m-3 dice">dice: {dice}</p>
          <div className="m-3">
            <Button onClick={handleWhite} className="btn-light border">
              white
            </Button>
          </div>
          <div className="m-3">
            <Button onClick={handleBlack} className="btn-dark">
              Black
            </Button>
          </div>
        </article>
      </section>
    </>
  );
};
export default App;
