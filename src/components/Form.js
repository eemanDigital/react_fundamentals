import { useEffect, useRef, useState } from "react";
import Tasks from "./Tasks";

const Form = ({
  title,
  // addNotice,
  tasks,
  setTasks,
  // deleteNotice,
}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const myRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    console.log("Form Submitted");
    const newId = Date.now(); //used as placeholder for ID
    const newTask = { id: newId, text, day, time };
    // console.log(newTask);

    const updatedTasks = [...tasks, newTask];
    console.log(updatedTasks);
    setTasks(updatedTasks);
    // setAddNotice(true);
    // setTasks("");
    setText("");
    setDay("");
    setTime("");
  };

  //handle removal of task

  const handleDelete = (id) => {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
    // setDeleteNotice(true);
  };

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
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task...."
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <label htmlFor="time">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button className="btn1" type="submit">
            Submit
          </button>
        </form>

        {/* give notice of added task */}
        {/* {addNotice && (
          <div className="notice">
            <p>task added</p>
          </div>
        )}

        {deleteNotice && (
          <div className="notice">
            <p>task deleted</p>
          </div>
        )} */}

        <Tasks tasks={tasks} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Form;
