import * as helpers from "./helpers";

const SECONDARY_COLOR_1 = "#ffb703"; //yellow
const SECONDARY_COLOR_2 = "#6A4C93"; //yellow
const EQUALITY_COLOR = "rgb(138, 201, 38)"; //green
const SECONDARY_EQUALITY_COLOR = "#508991"; //primary-color
// const PRIMARY_COLOR = "#508991"; //steel green
// const UNEQUALITY_COLOR = "#ff595e"; // red
// const PIVOT_COLOR = "#fff"; //white
// const SWAP_COLOR = "#6A4C93"; //purple

let SPEED;

async function merge(array, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await helpers.sleep(SPEED);
    // color
    array[low + i].style.background = SECONDARY_COLOR_1;
    left[i] = array[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await helpers.sleep(SPEED);
    // color
    array[mid + 1 + i].style.background = SECONDARY_COLOR_2;
    right[i] = array[mid + 1 + i].style.height;
  }
  await helpers.sleep(SPEED);

  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await helpers.sleep(SPEED);
    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === array.length) {
        array[k].style.background = EQUALITY_COLOR;
      } else {
        array[k].style.background = SECONDARY_EQUALITY_COLOR;
      }

      array[k].style.height = left[i];
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === array.length) {
        array[k].style.background = EQUALITY_COLOR;
      } else {
        array[k].style.background = SECONDARY_EQUALITY_COLOR;
      }
      array[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await helpers.sleep(SPEED);
    // color
    if (n1 + n2 === array.length) {
      array[k].style.background = EQUALITY_COLOR;
    } else {
      array[k].style.background = SECONDARY_EQUALITY_COLOR;
    }
    array[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await helpers.sleep(SPEED);
    // color
    if (n1 + n2 === array.length) {
      array[k].style.background = EQUALITY_COLOR;
    } else {
      array[k].style.background = SECONDARY_EQUALITY_COLOR;
    }
    array[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(array, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await mergeSort(array, l, m);
  await mergeSort(array, m + 1, r);
  await merge(array, l, m, r);
}

export default async function getMergeSort(ANIMATION_SPEED) {
  SPEED = ANIMATION_SPEED;
  let array = document.getElementsByClassName("array-bar");
  let l = 0;
  let r = parseInt(array.length) - 1;
  helpers.disableSortingBtn();
  helpers.disableSizeSlider();
  helpers.disableNewArrayBtn();
  await mergeSort(array, l, r);
  helpers.enableSortingBtn();
  helpers.enableSizeSlider();
  helpers.enableNewArrayBtn();
}
