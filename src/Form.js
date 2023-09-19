import { useState } from "react";

const Form = () => {
  const [state, setState] = useState("");
  const [tasks, setTasks] = useState([]);
  const [add, setAdd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state) return;
    console.log("Form Submitted");
    const newId = Date.now();
    const newTask = { id: newId, message: state }; // Use 'message' instead of 'state'

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setAdd(true);
    setState(""); // Clear the input field after submitting
  };

  setTimeout(() => {
    setAdd(false);
  }, 1000);

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} action="">
            {" "}
            {/* Use 'onSubmit' instead of 'onClick' */}
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your schedule"
            />
            <button type="submit">Submit</button>{" "}
            {/* Specify 'type' as 'submit' */}
          </form>

          {/* give notice of added task */}
          {add && (
            <div className="notice">
              <p>task added</p>
            </div>
          )}

          {tasks.map((task) => {
            return (
              <ul key={task.id}>
                {" "}
                {/* Use 'ul' instead of 'ol' for an unordered list */}
                <li>{task.message}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
