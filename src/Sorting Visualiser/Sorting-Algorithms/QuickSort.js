import * as helpers from "./helpers";

const PRIMARY_COLOR = "#508991"; //steel green
const SECONDARY_COLOR = "#ffb703"; //yellow
const SWAP_COLOR = "#6A4C93"; //purple
const EQUALITY_COLOR = "rgb(138, 201, 38)"; //green
const UNEQUALITY_COLOR = "#ff595e"; // red
const PIVOT_COLOR = "#fff"; //white

let SPEED;

async function partitionLomuto(array, l, r) {
  let i = l - 1;
  array[r].style.background = PIVOT_COLOR;

  for (let j = l; j <= r - 1; j++) {
    array[j].style.background = SECONDARY_COLOR;
    await helpers.sleep(SPEED);

    if (parseInt(array[j].style.height) < parseInt(array[r].style.height)) {
      i++;
      helpers.swap(array[i], array[j]);
      // color
      array[i].style.background = SWAP_COLOR;
      if (i !== j) array[j].style.background = SWAP_COLOR;
      // pauseChamp
      await helpers.sleep(SPEED);
    } else {
      // color if not less than pivot
      array[j].style.background = UNEQUALITY_COLOR;
    }
  }
  i++;
  // pauseChamp
  await helpers.sleep(SPEED);
  helpers.swap(array[i], array[r]); // pivot height one

  // color
  array[r].style.background = UNEQUALITY_COLOR;
  array[i].style.background = EQUALITY_COLOR;

  // pauseChamp
  await helpers.sleep(SPEED);

  // color
  for (let k = 0; k < array.length; k++) {
    if (array[k].style.background !== EQUALITY_COLOR)
      array[k].style.background = PRIMARY_COLOR;
  }

  return i;
}

async function quickSort(array, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(array, l, r);
    await quickSort(array, l, pivot_index - 1);
    await quickSort(array, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < array.length && r < array.length) {
      array[r].style.background = EQUALITY_COLOR;
      array[l].style.background = EQUALITY_COLOR;
    }
  }
}

async function getQuickSort(ANIMATION_SPEED) {
  SPEED = ANIMATION_SPEED;
  let array = document.getElementsByClassName("array-bar");
  let l = 0;
  let r = array.length - 1;
  helpers.disableSortingBtn();
  helpers.disableSizeSlider();
  helpers.disableNewArrayBtn();
  await quickSort(array, l, r);
  helpers.enableSortingBtn();
  helpers.enableSizeSlider();
  helpers.enableNewArrayBtn();
}

export default getQuickSort;
