import React from "react";

function Task({ task, handleDelete }) {
  return (
    <div className="ul_container">
      <ul>
        <li>
          {task.message}
          <li>
            Date:
            {task.date}
            <li>Time:{task.time}</li>
          </li>
        </li>
      </ul>
      <button className="btn2" onClick={() => handleDelete(task.id)}>
        x
      </button>
    </div>
  );
}

export default Task;
