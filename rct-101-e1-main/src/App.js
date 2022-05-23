import React from "react";
import AddTask from "./components/AddTask/AddTask"
import Counter from "./components/Counter/Counter"
import Task from "./components/Task/Task"
import TaskHeader from "./components/TaskHeader/TaskHeader";
import { Tasks } from "./components/Tasks";

function App() {
  return <div>
    <AddTask />
    <Counter />
    <Task />
    <TaskHeader />
    <Tasks />
    </div>;
}

export default App;
