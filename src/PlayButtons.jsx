import { Button, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { newDice, columnRange, whiteInitital, blackInitital } from "./utility";

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
  lastTurn,
  setLastTurn,
}) => {
  const buttonWhite = useRef();
  const buttonBlack = useRef();
  const endGameRef = useRef();
  const simulateRef = useRef();
  const counter = useRef();
  const [render, setRender] = useState(true);
  const [isSimulate, setIsSimulate] = useState(false);
  const [sleep, setSleep] = useState(1);
  

  const oneTurn = () => {
    handleWhite();
    if (endGameRef.current.value === "game over") {
      return;
    }
    handleBlack();
    if (endGameRef.current.value === "game over") {
      return;
    }
  };

  const simulate = async () => {
    await pause(sleep);
    if (endGame) {
      restartGame();
      setRender((prev) => !prev);
      return;
    } else {
      oneTurn();
      setRender((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isSimulate) {
      simulate();
    }
    //eslint-disable-next-line
  }, [render, isSimulate]);

  const handleWhite = () => {
    newDiceValue = newDice();
    setDice(newDiceValue);
    setLastTurn("white");
    if (whitePiece.position + newDiceValue > columnRange * 2) {
      setWhitePiece((prev) => ({
        ...prev,
        color: "green",
      }));
      setEndGame(true);
      setWhiteScore((prev) => prev + 1);
      endGameRef.current.value = "game over";
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
    setLastTurn("black");
    if (blackPiece.position - newDiceValue < 1) {
      setBlackPiece((prev) => ({
        ...prev,
        color: "green",
      }));
      setEndGame(true);
      setBlackScore((prev) => prev + 1);
      endGameRef.current.value = "game over";
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
    setLastTurn("")
  };

  return (
    <article className="button-container position-relative my-3 d-flex w-100 justify-content-center flex-column">
      {isSimulate && (
        <div className="position-absolute range-container w-100 text-center d-flex flex-column align-items-center">
          <Form.Label className="range-label p-0 my-0 blockquote">
            simulation speed
          </Form.Label>
          <Form.Range
            min={1}
            max={3000}
            className="w-50 range-bar"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </div>
      )}
      <div className="d-flex w-100 justify-content-center">
        <Button onClick={restartGame} className="btn-secondary m-3">
          Restart
        </Button>
        <div className="d-flex  justify-content-center">
          <div className="dice-container position-relative">
            <p className="m-3 dice blockquote p-1">Dice: {dice}</p>
            {lastTurn && (
              <p className="mx-3 lastLabel position-absolute">
                Last: {lastTurn}
              </p>
            )}
          </div>
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
          onClick={() => setIsSimulate((prev) => !prev)}
          className="btn-info m-3 simulate-btn"
        >
          {isSimulate ? "STOP" : "SIMULATE"}
        </Button>
      </div>
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
  sleep: PropTypes.bool,
  lastTurn: PropTypes.string,
  setBlackPiece: PropTypes.func,
  setWhitePiece: PropTypes.func,
  setEndGame: PropTypes.func,
  setWhiteScore: PropTypes.func,
  setBlackScore: PropTypes.func,
  setDice: PropTypes.func,
  setLastTurn: PropTypes.func,
};

export default PlayButtons;
