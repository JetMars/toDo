import React from "react";

import type { ITask } from "../../types/toDo";

import styles from "./Task.module.scss";
import { IoClose } from "react-icons/io5";

const Task: React.FC<ITask> = ({ title }) => {
  return (
    <li className={styles.root}>
      <input className={styles.checkbox} type="checkbox" name="task" />
      <label className={styles.title}>{title}</label>
      <IoClose className={styles.close} />
    </li>
  );
};

export default Task;
