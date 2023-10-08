import { useState, useEffect } from "react";
import Form from "./components/Form";
// import Tasks from "./components/Tasks";
// import Tasks from "./Tasks";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      message: "read Quran",
      date: "2/4/2023",
      time: "3pm",
    },
  ]);

  const [state, setState] = useState("");
  const [addNotice, setAddNotice] = useState(false);
  const [deleteNotice, setDeleteNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasks) return;
    console.log("Form Submitted");
    const newId = Date.now(); //used as placeholder for ID
    const newTask = { id: newId, tasks };

    const updatedTasks = [...tasks, newTask];
    setState(updatedTasks);
    setAddNotice(true);
    setTasks("");
  };

  //handle removal of task

  const handleDelete = (id) => {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
    setDeleteNotice(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setAddNotice(false); //removes add notification
      setDeleteNotice(false); //remove delete notification
    }, 2000);

    return clearTimeout();
  }, [handleDelete]);

  return (
    <>
      <div className="container">
        <Form
          title="my task"
          handleSubmit={handleSubmit}
          addNotice={addNotice}
          deleteNotice={deleteNotice}
          state={state}
          setState={setState}
          tasks={tasks}
          handleDelete={handleDelete}
          setTasks={setTasks}
        />
      </div>
    </>
  );
};

export default App;
