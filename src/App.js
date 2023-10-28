import React, { useEffect, useState } from "react";
import "./App.css";
import AddTaskMe from "./components/AddTaskMe";
import Header from "./components/Header";
import ShowTaskMe from "./components/ShowTaskMe";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))

  }, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTaskMe
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTaskMe
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
