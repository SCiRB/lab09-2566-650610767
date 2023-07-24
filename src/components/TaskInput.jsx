"use client";
import { useState } from "react";

export const TaskInput = ({ addTaskFunc }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTaskBtnOnClick = () => {
    //remove free space
    if (taskInput.trim() !== "") {
      addTaskFunc(taskInput.trim());
      setTaskInput("");
    }
  };

  const taskInputOnChange = (event) => {
    setTaskInput(event.target.value);
  };

  const taskInputOnKeyUp = (event) => {
    if (event.key === "Enter" && taskInput.trim() !== "") addTaskBtnOnClick();
  };
  const DisableBtn = taskInput.trim() === ""; //have free space cant press

  return (
    <div className="d-flex gap-1">
      <input
        className="form-control"
        placeholder="Insert a task here.."
        onChange={taskInputOnChange}
        onKeyUp={taskInputOnKeyUp}
        value={taskInput}
      />
      <button
        className="btn btn-primary"
        onClick={addTaskBtnOnClick}
        disabled={DisableBtn}
      >
        Add
      </button>
    </div>
  );
};