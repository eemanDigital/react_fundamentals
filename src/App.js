import { useState, useEffect } from "react";
import Form from "./components/Form";
// import Tasks from "./components/Tasks";
// import Tasks from "./Tasks";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "read Quran",
      date: "2/4/2023",
      time: "3pm",
    },
  ]);

  // // const [state, setState] = useState("");
  // const [addNotice, setAddNotice] = useState(false);
  // const [deleteNotice, setDeleteNotice] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAddNotice(false); //removes add notification
  //     setDeleteNotice(false); //remove delete notification
  //   }, 2000);

  //   return clearTimeout();
  // }, [handleDelete]);

  return (
    <>
      <div className="container">
        <Form
          title="plan your day"
          // handleSubmit={handleSubmit}
          // addNotice={addNotice}
          // deleteNotice={deleteNotice}
          // state={state}
          // setState={setState}
          tasks={tasks}
          // handleDelete={handleDelete}
          setTasks={setTasks}
        />
      </div>
      {/* <Tasks tasks={tasks} /> */}
    </>
  );
};

export default App;
