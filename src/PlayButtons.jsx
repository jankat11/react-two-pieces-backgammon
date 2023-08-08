import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  newDice,
  columnRange,
  whiteArrivedCoor,
  blackArrivedCoor,
  whiteInitital,
  blackInitital,
} from "./utility";

let newDiceValue;

const pause = (time) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

const PlayButtons = ({
  whitePiece,
  blackPiece,
  endGame,
  dice,
  setBlackPiece,
  setWhitePiece,
  setEndGame,
  setBlackScore,
  setWhiteScore,
  setDice,
}) => {
  const buttonWhite = useRef();
  const buttonBlack = useRef();
  const endGameRef = useRef();
  const simulateRef = useRef();
  const counter = useRef();
  const [render, setRender] = useState(true);
  const [isSimulate, setIsSimulate] = useState(false);
  const [sleep, setSleep] = useState(1)

  const oneTurn = () => {
    handleBlack();
    if (endGameRef.current.value === "game over") {
      // await pause(sleep);
      restartGame();
      return;
    }
    handleWhite();
    if (endGameRef.current.value === "game over") {
      // await pause(sleep);
      restartGame();
      return;
    }
  };

  const simulate = async () => {
    await pause(sleep);
    await oneTurn();
    setRender((prev) => !prev);
  };

  useEffect(() => {
    if (isSimulate) {
      simulate();
    }
  }, [render, isSimulate]);

  const handleWhite = () => {
    newDiceValue = newDice();
    setDice(newDiceValue);
    if (whitePiece.position > (columnRange * 3) / 2) {
      if (whiteArrivedCoor[newDiceValue] === whitePiece.position) {
        setWhitePiece((prev) => ({
          ...prev,
          color: "green",
        }));
        setEndGame(true);
        setWhiteScore((prev) => prev + 1);

        endGameRef.current.value = "game over";
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
        endGameRef.current.value = "game over";
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
        Restart
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
      <Button
        ref={simulateRef}
        onClick={simulate} // () => setIsSimulate(prev => !prev)
        className="btn-info m-3"
      >
        {isSimulate ? "STOP" : "SIMULATE"}
      </Button>
      <input type="hidden" ref={endGameRef} value="continue" />
      <input type="hidden" value={render} ref={counter} />
    </article>
  );
};

PlayButtons.propTypes = {
  dice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  whitePiece: PropTypes.object,
  blackPiece: PropTypes.object,
  endGame: PropTypes.bool,
  setBlackPiece: PropTypes.func,
  setWhitePiece: PropTypes.func,
  setEndGame: PropTypes.func,
  setWhiteScore: PropTypes.func,
  setBlackScore: PropTypes.func,
  setDice: PropTypes.func,
};

export default PlayButtons;
