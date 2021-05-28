import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {/* <li className={classes.slider}>
          <label>Size of Array and Speed</label>
          <input
            type="range"
            min="1"
            max="100"
            // disabled={props.isRuning}
            onChange={props.onResize}
          />
        </li> */}
        <li className={classes.slider}>
          <label>Size of Array</label>
          <input
            id="arr_sz"
            type="range"
            min="6"
            max="100"
            onChange={props.onResize}
          />
        </li>
        <li className={classes.slider}>
          <label>Animation Speed</label>
          <input
            id="speed_input"
            type="range"
            min="20"
            max="300"
            stepDown="10"
            onChange={props.onSpeed}
          />
        </li>
        <div className={classes.breaker}></div>
        <li>
          <button href="/" onClick={props.onMergeSort} className="mergeSort">
            Merge Sort
          </button>
        </li>

        <li>
          <button href="/" className="quickSort" onClick={props.onQuickSort}>
            Quick Sort
          </button>
        </li>
        <li>
          <button href="/" className="bubbleSort" onClick={props.onBubbleSort}>
            Bubble Sort
          </button>
        </li>
        <li>
          <button
            href="/"
            className="insertionSort"
            onClick={props.onInsertionSort}
          >
            Insertion Sort
          </button>
        </li>
        <li>
          <button
            href="/"
            className="insertionSort"
            onClick={props.onSelectionSort}
          >
            Selection Sort
          </button>
        </li>
        <div className={classes.breaker}></div>
        <li>
          <button href="/" onClick={props.onGenerate} className="new-array">
            Generate New Array!
          </button>
        </li>
        {/* <div className={classes.breaker}></div>
        <li>
          <button href="/" onClick={props.onTSA}>
            T.S.A.
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
