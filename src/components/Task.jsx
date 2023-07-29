import React from "react";

const Task = ({ title, description, index, tasks, settasks }) => {
  const deleteHandler = (index) => {
    const filteredArr = tasks.filter((element, i) => {
      return i !== index;
    });
    settasks(filteredArr);
  };
  return (
    <div className="task">
      <div>
        <p>{title} </p>
        <span>{description} </span>
      </div>
      <button
        onClick={() => {
          deleteHandler(index);
        }}
      >
        x
      </button>
    </div>
  );
};

export default Task;
