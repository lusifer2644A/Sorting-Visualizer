import React from "react";
import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["header"]}>
      <h1>Sorting Visualiser</h1>
      <Navigation
        // isRuning={props.isRuning}
        onResize={props.onResize}
        onSpeed={props.onSpeed}
        onGenerate={props.onGenerateArray}
        onMergeSort={props.onMergeSort}
        onQuickSort={props.onQuickSort}
        onBubbleSort={props.onBubbleSort}
        onInsertionSort={props.onInsertionSort}
        onSelectionSort={props.onSelectionSort}
        onTSA={props.onTSA}
      />
    </header>
  );
};

export default Header;
