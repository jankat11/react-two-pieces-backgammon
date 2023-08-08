export const wrapperClass =
  "wrapper d-flex justify-content-center align-items-center";
export const columnRange = 12;
export const upBoardCoulumnRange = Array.from({ length: columnRange }, (_, i) =>
  parseInt(Math.abs(i - columnRange))
);
export const bottomBoardCoulumnRange = Array.from(
  { length: columnRange },
  (_, i) => i + 1 + columnRange
);
export const newDice = () => {
  return Math.ceil(Math.random() * 6);
};

export const whiteInitital = { color: "white", position: 1 };
export const blackInitital = { color: "black", position: columnRange * 2 };

export const blackArrivedCoor = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
};

export const whiteArrivedCoor = {
  1: 24,
  2: 23,
  3: 22,
  4: 21,
  5: 20,
  6: 19,
};
