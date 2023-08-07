export const wrapperClass = "wrapper d-flex justify-content-center align-items-center"
export const columnRange = 12;
export const upBoardCoulumnRange = Array.from({ length: columnRange }, (_, i) =>
  parseInt(Math.abs(i - columnRange))
);
export const bottomBoardCoulumnRange = Array.from(
  { length: columnRange },
  (_, i) => i + 1 + columnRange
);


