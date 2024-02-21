//This component will create different tasks everytime we add info into our inputs, the data will travel from App(), through TaskList to here, so now that data (tasks.js info) can be placed and then it will be exported and render the info as cards in our homepage. { data } will import the info from TaskList, also passing deleteTask function via TaskList.
function TaskCard({ data, deleteTask }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {/*This button will execute, once clicked the deleteTask function and pass as an argument the task id*/}
      <button onClick={() => deleteTask(data.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
