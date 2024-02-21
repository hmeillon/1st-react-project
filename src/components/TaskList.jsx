//Since this is one of the utilities of React, we are going to import a component inside this component, ins this case we are going to do that because we can REUSE the info inside that component, why? Because we can create different tasks with that.
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//This function, unlike TaskForm that is in charge of creating new tasks, it will render the in the webpage. Also passing the deleteTask function.
function TaskList() {
  const { data } = useContext(TaskContext);

  //This will help us handle in case that we dont have any data in the "backend" (our tasks.js file).
  if (data.length === 0) {
    return <h1>No tasks yet.</h1>;
  }

  //This is what is going to be rendered, it will import the TaskCard and we are going to pass the key and the data, so in that component can render the info we are rendering from App(), then we map and go over our data array, and it will generate one div per object.
  return (
    <div>
      {data.map((data) => (
        <TaskCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default TaskList;
