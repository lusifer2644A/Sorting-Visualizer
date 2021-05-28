import * as helpers from "./helpers";

let SPEED;
const PRIMARY_COLOR = "#508991"; //steel green
const SECONDARY_COLOR = "#ffb703"; //yellow
const EQUALITY_COLOR = "rgb(138, 201, 38)"; //green
const PIVOT_COLOR = "#fff"; //white
// const UNEQUALITY_COLOR = "#ff595e"; // red
// const SWAP_COLOR = "#6A4C93"; //purple

async function selection() {
  const array = document.getElementsByClassName("array-bar");
  for (let i = 0; i < array.length; i++) {
    let min_index = i;
    // Change color of the position to swap with the next min
    array[i].style.background = PIVOT_COLOR;
    for (let j = i + 1; j < array.length; j++) {
      array[j].style.background = SECONDARY_COLOR;

      await helpers.sleep(SPEED);
      if (
        parseInt(array[j].style.height) <
        parseInt(array[min_index].style.height)
      ) {
        if (min_index !== i) {
          // new min_index is found so change prev min_index color back to normal
          array[min_index].style.background = PRIMARY_COLOR;
        }
        min_index = j;
        array[min_index].style.background = EQUALITY_COLOR;
      } else {
        // if the currnent comparision is more than min_index change is back to normal
        array[j].style.background = PRIMARY_COLOR;
      }
    }
    await helpers.sleep(SPEED);
    helpers.swap(array[min_index], array[i]);
    // change the min arrayment index back to normal as it is swapped
    array[min_index].style.background = PRIMARY_COLOR;
    // change the sorted arrayments color to green
    array[i].style.background = EQUALITY_COLOR;
  }
}

export default async function getSelectionSort(ANIMATION_SPEED) {
  SPEED = ANIMATION_SPEED;
  helpers.disableSortingBtn();
  helpers.disableSizeSlider();
  helpers.disableNewArrayBtn();
  await selection();
  helpers.enableSortingBtn();
  helpers.enableSizeSlider();
  helpers.enableNewArrayBtn();
}
