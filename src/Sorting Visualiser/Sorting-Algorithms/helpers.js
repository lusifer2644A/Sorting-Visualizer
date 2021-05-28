// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
export function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableSortingBtn() {
  document.getElementsByClassName("bubbleSort").disabled = true;
  document.getElementsByClassName("mergeSort").disabled = true;
  document.getElementsByClassName("quickSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
export function enableSortingBtn() {
  document.getElementsByClassName("bubbleSort").disabled = false;
  document.getElementsByClassName("mergeSort").disabled = false;
  document.getElementsByClassName("quickSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableSizeSlider() {
  document.getElementById("arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
export function enableSizeSlider() {
  document.getElementById("arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableNewArrayBtn() {
  document.getElementsByClassName("newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
export function enableNewArrayBtn() {
  document.getElementsByClassName("newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
export function sleep(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// // Selecting size slider from DOM
// let arraySize = document.querySelector("#arr_sz");

// // Event listener to update the bars on the UI
// arraySize.addEventListener("input", function () {
//   console.log(arraySize.value, typeof arraySize.value);
//   createNewArray(parseInt(arraySize.value));
// });

// // Default input for waitforme function (260ms)
// export let delay = 260;

// // Selecting speed slider from DOM
// let delayElement = document.getElementById("speed_input");

// // Event listener to update delay time
// delayElement.addEventListener("input", function () {
//   delay = 320 - parseInt(delayElement.value);
// });

// // Creating array to store randomly generated numbers
// let array = [];

// // Call to display bars right when you visit the site
// createNewArray();

// // To create new array input size of array
// function createNewArray(noOfBars = 60) {
//   // calling helper function to delete old bars from dom
//   deleteChild();

//   // creating an array of random numbers
//   array = [];
//   for (let i = 0; i < noOfBars; i++) {
//     array.push(Math.floor(Math.random() * 250) + 1);
//   }
//   console.log(array);

//   // select the div #bars element
//   const bars = document.querySelector("#bars");

//   // create multiple element div using loop and adding class 'bar col'
//   for (let i = 0; i < noOfBars; i++) {
//     const bar = document.createElement("div");
//     bar.style.height = `${array[i] * 2}px`;
//     bar.classList.add("bar");
//     bar.classList.add("flex-item");
//     bar.classList.add(`barNo${i}`);
//     bars.appendChild(bar);
//   }
// }

// // Helper function to delete all the previous bars so that new can be added
// function deleteChild() {
//   const bar = document.querySelector("#bars");
//   bar.innerHTML = "";
// }

// // Selecting newarray button from DOM and adding eventlistener
// const newArray = document.querySelector(".newArray");
// newArray.addEventListener("click", function () {
//   console.log("From newArray " + arraySize.value);
//   console.log("From newArray " + delay);
//   enableSortingBtn();
//   enableSizeSlider();
//   createNewArray(arraySize.value);
// });
