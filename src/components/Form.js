import { useEffect, useRef } from "react";
import Tasks from "./Tasks";

const Form = ({
  title,
  handleSubmit,
  addNotice,
  tasks,
  handleDelete,
  deleteNotice,
  state,
  setTasks,
}) => {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <>
      <div className="form-container">
        <h1>{title.toUpperCase()}</h1>
        <form onSubmit={handleSubmit} action="">
          {" "}
          {/* Use 'onSubmit' instead of 'onClick' */}
          <input
            ref={myRef}
            type="text"
            value={tasks.message}
            onChange={(e) => setTasks(e.target.value)}
            placeholder="Enter your task...."
          />
          <label htmlFor="date" value={tasks.date}>
            Date
          </label>
          <input
            type="date"
            value={tasks.date}
            onChange={(e) => setTasks(e.target.value)}
          />
          <label htmlFor="time">Time</label>
          <input
            type="time"
            value={tasks.time}
            onChange={(e) => setTasks(e.target.value)}
          />
          <button className="btn1" type="submit">
            Submit
          </button>
        </form>

        {/* give notice of added task */}
        {addNotice && (
          <div className="notice">
            <p>task added</p>
          </div>
        )}

        {deleteNotice && (
          <div className="notice">
            <p>task deleted</p>
          </div>
        )}

        <Tasks tasks={tasks} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Form;
