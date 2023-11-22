import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

import "./assets/scss/app.scss";

function App() {
  return (
    <div className="container">
      <h1 className="title">TASK</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
