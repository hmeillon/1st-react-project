import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  //And as usual, this will return our components with some props, the info that we are going to pass are going to be inherited from the father, in this case, component App(), passing info to TaskForm and TaskList.
  return (
    <main className="bg-cyan-950 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
