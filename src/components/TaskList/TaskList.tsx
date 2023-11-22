import React from "react";

import { useAppSelector } from "../../hooks/redux.hooks";

import styles from "./TaskList.module.scss";
import Task from "../Task/Task";

const TaskList: React.FC = () => {
  const { items } = useAppSelector((state) => state.toDoReducer);

  return (
    <ul className={styles.root}>
      {items.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
