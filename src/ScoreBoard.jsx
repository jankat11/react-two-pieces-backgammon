import PropTypes from "prop-types";
import { Button} from "react-bootstrap";
import { whiteInitital, blackInitital } from "./utility";

const ScoreBoard = ({
  blackScore,
  whiteScore,
  setBlackScore,
  setWhiteScore,
  setBlackPiece,
  setWhitePiece,
  setEndGame,
  setDice,
  setLastTurn
}) => {
  const total = whiteScore + blackScore;
  const whitePursent = total === 0 ? 0 : (whiteScore / total) * 100;
  const blackPursent = total === 0 ? 0 : (blackScore / total) * 100;

  const clearScores = () => {
    setEndGame(false);
    setBlackScore(0);
    setWhiteScore(0);
    setBlackPiece(blackInitital);
    setWhitePiece(whiteInitital);
    setDice("-");
    setLastTurn("")
  };

  return (
    <section className="score mt-1 mb-1 me-3 blockquote d-flex w-100 justify-content-center">
      <Button onClick={clearScores} className="me-5 m-5 btn-secondary">
        Clear All Scores
      </Button>
      <table className="border border-3 border-secondary">
        <thead>
          <tr>
            <td>white</td>
            <td>black</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{whiteScore}</td>
            <td>{blackScore}</td>
          </tr>
          <tr>
            <td>% {whitePursent.toFixed(2)}</td>
            <td>% {blackPursent.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      {/* <Button className="me-5 m-5 btn-secondary">Simulate</Button> */}
    </section>
  );
};

ScoreBoard.propTypes = {
  whiteScore: PropTypes.number,
  blackScore: PropTypes.number,
  setWhiteScore: PropTypes.func,
  setBlackScore: PropTypes.func,
  setBlackPiece: PropTypes.func,
  setWhitePiece: PropTypes.func,
  setEndGame: PropTypes.func,
  setDice: PropTypes.func,
  setLastTurn: PropTypes.func,
};

export default ScoreBoard;
