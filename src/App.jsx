import { Button } from "react-bootstrap";
import { useState } from "react";
import Board from "./Board";
import { wrapperClass } from "./utility";

const whiteInitital = { color: "white", position: 1 };
const blackInitital = { color: "black", position: 24 };

const App = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);

  const handleWhite = () => {
    setWhitePiece((prev) => ({ ...prev, position: prev.position + 1 }));
  };
  const handleBlack = () => {
    setBlackPiece((prev) => ({ ...prev, position: prev.position - 1 }));
  };

  return (
    <>
      <section className={wrapperClass}>
        <Board whitePiece={whitePiece} blackPiece={blackPiece} />
        <article className="button-container">
          <p className="m-3 dice">dice</p>
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
