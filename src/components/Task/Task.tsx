import React from "react";

import type { ITask } from "../../types/toDo";

import { useAppDispatch } from "../../hooks/redux.hooks";
import { removeItem } from "../../redux/slices/toDoSlice";

import { IoClose } from "react-icons/io5";
import styles from "./Task.module.scss";

const Task: React.FC<ITask> = ({ id, title }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <li className={styles.root}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="task"
        onChange={() => setActive(!active)}
      />
      <label
        className={`${styles.title} ${active ? styles["title-active"] : ""}`}
      >
        {title}
      </label>
      <IoClose
        onClick={() => dispatch(removeItem(id))}
        className={styles.close}
      />
    </li>
  );
};

export default Task;
