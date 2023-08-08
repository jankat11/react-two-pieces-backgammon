import { Button } from "react-bootstrap";
import { useState } from "react";
import Board from "./Board";
import {
  newDice,
  wrapperClass,
  columnRange,
  whiteArrivedCoor,
  blackArrivedCoor,
} from "./utility";

const whiteInitital = { color: "white", position: 1 };
const blackInitital = { color: "black", position: columnRange * 2 };

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);
  const [dice, setDice] = useState("--");

  const handleWhite = () => {
    let newDiceValue = newDice();
    setDice(newDiceValue);
    if (whitePiece.position > (columnRange * 3) / 2) {
      if (whiteArrivedCoor[newDiceValue] === whitePiece.position) {
        setWhitePiece((prev) => ({
          ...prev,
          color: "green",
        }));
        return;
      }
      return;
    }
    setWhitePiece((prev) => ({
      ...prev,
      position: prev.position + newDiceValue,
    }));
  };

  const handleBlack = () => {
    let newDiceValue = newDice();
    setDice(newDiceValue);
    if (blackPiece.position < columnRange / 2 + 1) {
      if (blackArrivedCoor[newDiceValue] === blackPiece.position) {
        setBlackPiece((prev) => ({
          ...prev,
          color: "green",
        }));
        return;
      }
      return;
    }
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
          <p className="m-3 dice blockquote">Dice: {dice}</p>
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
