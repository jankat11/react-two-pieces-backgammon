import { Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  newDice,
  columnRange,
  whiteArrivedCoor,
  blackArrivedCoor,
} from "./utility";

const PlayButtons = ({whitePiece, blackPiece, setBlackPiece, setWhitePiece}) => {
  const [dice, setDice] = useState("--");
  const buttonWhite = useRef();
  const buttonBlack = useRef();

  useEffect(() => {
    buttonWhite.current.click();
  }, []);

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
    <article className="button-container">
      <p className="m-3 dice blockquote">Dice: {dice}</p>
      <div className="m-3">
        <Button
          ref={buttonWhite}
          onClick={handleWhite}
          className="btn-light border"
        >
          white
        </Button>
      </div>
      <div className="m-3">
        <Button ref={buttonBlack} onClick={handleBlack} className="btn-dark">
          Black
        </Button>
      </div>
    </article>
  );
};

PlayButtons.propTypes = {
  whitePiece: PropTypes.object,
  blackPiece: PropTypes.object,
  setBlackPiece: PropTypes.function,
  setWhitePiece: PropTypes.function
};

export default PlayButtons;
