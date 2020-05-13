export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  Array.from(Array(STAGE_HEIGHT), () => {
    //for each row create a new array with our cells and fill them with another array that shows they are empty
    new Array(STAGE_WIDTH).fill([0, "clear"]);
  });
};
