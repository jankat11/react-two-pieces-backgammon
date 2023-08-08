import { Button } from "react-bootstrap";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  newDice,
  columnRange,
  whiteArrivedCoor,
  blackArrivedCoor,
  whiteInitital,
  blackInitital,
} from "./utility";

const PlayButtons = ({
  whitePiece,
  blackPiece,
  endGame,
  setBlackPiece,
  setWhitePiece,
  setEndGame,
  setBlackScore,
  setWhiteScore,
}) => {
  const [dice, setDice] = useState("-");
  const buttonWhite = useRef();
  const buttonBlack = useRef();

  /*   useEffect(() => {
    buttonWhite.current.click();
  }, []); */

  const handleWhite = () => {
    let newDiceValue = newDice();
    setDice(newDiceValue);
    if (whitePiece.position > (columnRange * 3) / 2) {
      if (whiteArrivedCoor[newDiceValue] === whitePiece.position) {
        setWhitePiece((prev) => ({
          ...prev,
          color: "green",
        }));
        setEndGame(true);
        setWhiteScore((prev) => prev + 1);
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
        setEndGame(true);
        setBlackScore((prev) => prev + 1);
        return;
      }
      return;
    }
    setBlackPiece((prev) => ({
      ...prev,
      position: prev.position - newDiceValue,
    }));
  };

  const restartGame = () => {
    setEndGame(false);
    setBlackPiece(blackInitital);
    setWhitePiece(whiteInitital);
    setDice("-");
  };

  return (
    <article className="button-container my-3 d-flex w-100 justify-content-center">
      <Button onClick={restartGame} className="btn-secondary m-3">
        restart
      </Button>
      <div className="d-flex  justify-content-center">
        <p className="m-3 dice blockquote p-1">Dice: {dice}</p>
        <div className="m-3">
          <Button
            disabled={endGame}
            ref={buttonWhite}
            onClick={handleWhite}
            className="btn-light border"
          >
            White
          </Button>
        </div>
        <div className="m-3">
          <Button
            disabled={endGame}
            ref={buttonBlack}
            onClick={handleBlack}
            className="btn-dark"
          >
            Black
          </Button>
        </div>
      </div>
    </article>
  );
};

PlayButtons.propTypes = {
  whitePiece: PropTypes.object,
  blackPiece: PropTypes.object,
  endGame: PropTypes.bool,
  setBlackPiece: PropTypes.func,
  setWhitePiece: PropTypes.func,
  setEndGame: PropTypes.func,
  setWhiteScore: PropTypes.func,
  setBlackScore: PropTypes.func,
};

export default PlayButtons;
