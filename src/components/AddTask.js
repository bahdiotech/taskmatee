import React, { useState } from "react";

export default function AddTask({ taskList, setTaskList, task, setTask }) {
  // const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
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
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  //    const handleInputChange = (e) => {
  //         setInputValue(e.target.value);
  //     }
  const handleChange = (e) => {
    const newName = e.target.value;
    setTask({ ...task, name: newName });
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add Task"
          minLength="5"
        />
        <button type="submit">{task.id? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
}
