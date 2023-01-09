import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");
  const [isAcending, setIsacending] = useState(true);

  const titleChangeHandler = useCallback(() => {
    setListTitle("My Title");
  }, []);

  const setListOrder = useCallback(() => {
    setIsacending((prev) => !prev);
  }, []);

  const listItem = useMemo(() => [5, 4, 3, 2, 1, 6, 7], [])

  return (
    <div className="app">
      <DemoList title={listTitle} order={isAcending} items={listItem} />
      <Button onClick={titleChangeHandler}>Change List Title</Button>
      <Button onClick={setListOrder}>
        {isAcending
          ? "change to descending order"
          : "Change to Ascending Order"}
      </Button>
    </div>
  );
};

export default App;
