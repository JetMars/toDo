import styles from "./addTask.module.scss";

import React from "react";

import { useAppDispatch } from "../../hooks/redux.hooks";
import { addItem } from "../../redux/slices/toDoSlice";

import nextId from "react-id-generator";

const AddTask: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addTask = () => {
    if (title !== "") {
      dispatch(addItem({ id: nextId(), title: title }));
      setTitle("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        maxLength={25}
        type="text"
        name="task"
        className={styles.input}
        placeholder="add task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={() => addTask()}>
        sent
      </button>
    </div>
  );
};

export default AddTask;
