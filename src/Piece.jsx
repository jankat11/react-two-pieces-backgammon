import { useEffect } from "react";
import PropTypes from "prop-types";

const Piece = ({ color, direction }) => {
  useEffect(() => {}, [color]);

  return (
    <article
      style={{ backgroundColor: color, top: direction, left: "4px" }}
      className={`piece`}
    ></article>
  );
};

Piece.propTypes = {
  color: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default Piece;
