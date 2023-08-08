import PropTypes from "prop-types";

const ScoreBoard = ({ blackScore, whiteScore }) => {
  const total = whiteScore + blackScore;
  const whitePursent = total === 0 ? 0 : (whiteScore / total) * 100;
  const blackPursent = total === 0 ? 0 : (blackScore / total) * 100;

  return (
    <section className="score my-3 blockquote">
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
    </section>
  );
};

ScoreBoard.propTypes = {
  whiteScore: PropTypes.number,
  blackScore: PropTypes.number,
};

export default ScoreBoard;
