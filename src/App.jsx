import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
//We also import the tasks array from tasks.js, this is going to be our "backend" to this project.
import { tasks } from "./data/tasks";

function App() {
  //Here we create the variable but with the useState hook, that will help us store all the data from the backend so we can now render it in our webpage. This will help us to pass all of the data to this component children.
  const [data, setTasks] = useState([]);

  //This will help to set "tasks" variable inside the "data" variable.
  useEffect(() => {
    setTasks(tasks);
  }, []);

  //With this function, we are copying all the arrays from data with "...data", then add some info after the comma, and it will output a new array with the newest info added. Like conts a = [1,2,3], then [...a, 4,5,6], and will return [1,2,3,4,5,6] WITHOUT altering const a. In this example, we are creating more objects inside the existing task conts inside tasks.js, so our webpage will render the existing and the added objects, our tasks.
  function createTask(task) {
    setTasks([
      ...data,
      {
        id: data.length + 1,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  //This function will handle the delete button, we call the function over in TaskCard file, and this will be excecuted, using e as the task.id, then it will iterate over the data array and check if the id is the same as the target (e), if yes, it will generate a new array WITHOUT the matching task id.
  function deleteTask(e) {
    setTasks(data.filter((n) => n.id !== e));
  }

  //And as usual, this will return our components with some props, the info that we are going to pass are going to be inherited from the father, in this case, component App(), passing info to TaskForm and TaskList.
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList data={data} deleteTask={deleteTask} />
    </>
  );
}

export default App;
