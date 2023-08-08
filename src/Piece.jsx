import { useEffect } from "react";
import PropTypes from "prop-types";

const Piece = ({ color, direction }) => {
  useEffect(() => {}, [color]);

  return (
    <article
      style={{ backgroundColor: color, top: direction, left: "4px" }}
      className={`piece piece-${color}`}
    >
      <div className="shadow-sm inside-piece position-relative d-flex justify-content-center align-items-center">
        <div className="dot shadow-lg"></div>
      </div>
    </article>
  );
};

Piece.propTypes = {
  color: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default Piece;
