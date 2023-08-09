export const wrapperClass =
  "wrapper d-flex justify-content-center align-items-center flex-column";
export const columnRange = 12;
export const upBoardCoulumnRange = Array.from({ length: columnRange }, (_, i) =>
  parseInt(Math.abs(i - columnRange))
);
export const bottomBoardCoulumnRange = Array.from(
  { length: columnRange },
  (_, i) => i + 1 + columnRange
);
export const newDice = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export const whiteInitital = { color: "white", position: 1 };
export const blackInitital = { color: "black", position: columnRange * 2 };
