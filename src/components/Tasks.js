import React from "react";
import Task from "./Task";

function Tasks({ tasks, handleDelete }) {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} handleDelete={handleDelete} />;
      })}

      <div className="task_number">
        {" "}
        {tasks.length <= 0 ? (
          <h3>No Task</h3>
        ) : (
          <h3>You have {tasks.length} task left</h3>
        )}
      </div>
    </>
  );
}

export default Tasks;
