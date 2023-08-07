import { Row, Col } from "react-bootstrap";
import Piece from "./Piece";
import { useState } from "react";
import {
  columnRange,
  upBoardCoulumnRange,
  bottomBoardCoulumnRange,
} from "./utility";

const whiteInitital = { color: "white", position: 1 };
const blackInitital = { color: "black", position: 24 };

const Board = () => {
  const [whitePiece, setWhitePiece] = useState(whiteInitital);
  const [blackPiece, setBlackPiece] = useState(blackInitital);

  const setPosition = (colIndex) => {
    return (
      <>
        {whitePiece.position === colIndex && (
          <Piece direction="0px" color="white" />
        )}
        {blackPiece.position === colIndex && (
          <Piece color="black" />
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
export default Board;
