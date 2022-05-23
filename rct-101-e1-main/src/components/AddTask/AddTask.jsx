import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <h3>To Do List</h3>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button">Add Task</button>
    </div>
  );
};

export default AddTask;
