import { Row, Col } from "react-bootstrap";
import Piece from "./Piece";
import PropTypes from "prop-types";
import {
  columnRange,
  upBoardCoulumnRange,
  bottomBoardCoulumnRange,
} from "./utility";

const GameBoard = ({ whitePiece, blackPiece }) => {
  const setPosition = (colIndex) => {
    return (
      <>
        {whitePiece.position === colIndex && (
          <Piece
            direction={`${colIndex < columnRange + 1 && "0px"}`}
            color={`${
              whitePiece.position === blackPiece.position
                ? "purple"
                : whitePiece.color
            }`}
          />
        )}
        {blackPiece.position === colIndex && (
          <Piece
            direction={`${colIndex < columnRange + 1 && "0px"}`}
            color={`${
              whitePiece.position === blackPiece.position
                ? "purple"
                : blackPiece.color
            }`}
          />
        )}
      </>
    );
  };

  return (
    <Row className="container ">
      <Row className="row p-0">
        {upBoardCoulumnRange.map((col) => {
          return (
            <Col
              className={`col col-up ${
                (col == columnRange / 2 || col == columnRange) &&
                "border-start border-5 border-danger"
              } ${col == 1 && "border-end border-danger border-5"}`}
              key={col}
            >
              <div
                className={`${
                  col % 2 === 0 ? "triangle-up-white" : "triangle-up"
                }`}
              ></div>
              {setPosition(col)}
            </Col>
          );
        })}
      </Row>
      <Row className="row p-0">
        {bottomBoardCoulumnRange.map((col) => {
          return (
            <Col
              className={`d-flex flex-column-reverse col col-bot ${
                (col == columnRange + 1 ||
                  col == columnRange + 1 + columnRange / 2) &&
                "border-start border-5 border-danger"
              } ${
                col == columnRange * 2 && "border-end border-danger border-5"
              }`}
              key={col}
            >
              <div
                className={`${
                  col % 2 === 0 ? "triangle-down" : "triangle-down-white"
                }`}
              ></div>
              {setPosition(col)}
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

GameBoard.propTypes = {
  whitePiece: PropTypes.object,
  blackPiece: PropTypes.object,
};

export default GameBoard;
