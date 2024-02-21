import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//This component will create different tasks everytime we add info into our inputs, the data will travel from App(), through TaskList to here, so now that data (tasks.js info) can be placed and then it will be exported and render the info as cards in our homepage. { data } will import the info from TaskList, also passing deleteTask function via TaskList.
function TaskCard({ data }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-cyan-800 text-emerald-200 p-3 rounded-md">
      <h2 className="text-xl font-bold capitalize ">{data.title}</h2>
      <p className="text-emerald-100">{data.description}</p>
      {/*This button will execute, once clicked the deleteTask function and pass as an argument the task*/}
      <button
        className="bg-red-600 text-white px-2 p-1 mt-5 mb-1 rounded-md hover:bg-red-500"
        onClick={() => deleteTask(data.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
