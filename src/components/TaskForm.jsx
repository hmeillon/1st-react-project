//We are going to use useState since we need to store info inside a variable and that variable will change over time.
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//As usual, we create the component as a function, and using createTask function as a prop so NOW we can CREATE tasks.
function TaskForm() {
  //We use these useState to store the info we write inside these consts.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //We are going to need these event handler function, since this will help us with 3 things, the first to prevent the auto refresh of the page when hitting the save button, this because we are not storing this info inside the tasks.js array, if we do not have this preventDefault, it will refresh and the info we added will disappear. Then it will execute the function "createTask" that will have as arguments the title and description,pass that data to our App.js so App.js will work with TaskList to render them inside the webpage, and finally, it will set the info inside the constants title and description as empty.
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      {/*//As above, this form will execute the handleSubmit function on submit.*/}
      <form onSubmit={handleSubmit} className="bg-slate-800 p-5 mb-5">
        {/*This input will help us to create the title, it has the onChange function that will set the title of what we are writing inside it.*/}
        <h1 className="text-2xl font-bold text-emerald-200 mb-3">
          Create your task
        </h1>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="p-1 w-full mb-2"
          required
        />
        {/*As the title input, this text are will also function as well, it has the same functionality.*/}
        <textarea
          placeholder="Write your description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
          cols="30"
          rows="2"
          className="p-1 w-full mb-2"
        ></textarea>
        <button className="bg-cyan-800 text-emerald-200 mt-1 px-3 py-1 rounded-md hover:bg-cyan-700">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
