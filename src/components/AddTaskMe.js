import React from "react";

export default function AddTask({ taskList, setTaskList, task, setTask }) {
  // const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
      e.target.task.value = ""
  };

  //    const handleInputChange = (e) => {
  //         setInputValue(e.target.value);
  //     }
//   const handleChange = (e) => {
//     const newName = e.target.value;
//     setTask({ ...task, name: newName });
//   };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
        //   onChange={handleChange}
          type="text"
          name="task"
        //   value={task.name || ""}
          autoComplete="on"
          autoCorrect="on"
          placeholder="Add Task"
          minLength="1"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
