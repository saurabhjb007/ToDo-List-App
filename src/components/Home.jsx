import React, { useState, useEffect } from "react";
import Task from "./Task";

const Home = () => {
  const initialArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, settasks] = useState(initialArr);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    settasks([...tasks, { title, description }]);
    settitle("");
    setdescription("");
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container">
      <h3>Write Your Tasks</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      <h3 className="yourTasks">Your Tasks</h3>
      {tasks.map((element, index) => {
        return (
          <Task
            key={index}
            title={element.title}
            index={index}
            tasks={tasks}
            settasks={settasks}
            description={element.description}
          />
        );
      })}

      {/* or
      {tasks.map(()=>( <Task/>
      ))} */}
    </div>
  );
};

export default Home;
