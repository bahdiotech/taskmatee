import React, { useState } from "react";
import "./showTaskMe.css";
// import { Children } from "react";

export default function ShowTask({ taskList, setTaskList, task, setTask }) {
  const [toggle, setToggle] = useState(false);

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    const date = new Date();
    const updateTask = taskList.map((todo) =>
      todo.id === task.id
        ? {
            id: task.id,
            name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
          }
        : { id: todo.id, name: todo.name, time: todo.time }
    );
    setTaskList(updateTask);
    setTask({});
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    setTask({ ...task, name: newName });
  };

  let form = (
    <div className="formdiv">
      <form className="form" onSubmit={handleSubmit}>
        <span className="xx" onClick={() => setToggle(!toggle)}>
          <i class="bi bi-x-lg"></i>
        </span>
        <input
          className="f"
          type="text"
          value={task.name || ""}
          onChange={handleChange}
        />
        <br />
        <button className="x" onClick={() => setToggle(!toggle)} type="button">
          cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );

  // const setForm = (id) => {
  //   const taskInput = taskList.find((todo) => {
  //     if (!todo.id === id) {
  //       form = "";
  //     }
  //     return form;
  //   });
  //   return taskInput;
  // };

  const handleEdit = (id) => {
    setToggle(!toggle);

    const selectedTask = taskList.find((todo) => todo.id === id);

    setTask(selectedTask);
  };

  return (
    <div>
      <section className="showTask">
        <div className="head">
          {toggle && form}
          <div>
            <span className="title">Todo</span>
            <span className="count">{taskList.length}</span>
          </div>
          <button className="clearAll" onClick={() => setTaskList([])}>
            Clear All
          </button>
        </div>

        <ul>
          {taskList.map((todo) => (
            <li key={todo.id}>
              <p>
                {" "}
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>

              <i
                onClick={() => handleEdit(todo.id)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => handleDelete(todo.id)}
                className="bi bi-trash"
              ></i>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
