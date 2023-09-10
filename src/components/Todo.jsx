import { useState } from "react";

const Todo = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = useState(
    new Array(tasks.length).fill(false),
  );

  const handleCheck = (index, isChecked) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = isChecked;
    setCheckedTasks(updatedCheckedTasks);
  };

  return (
    <>
      <form className="todo" id="todo">
        <div className="todo-title">
          <h2>Todo list:</h2>
        </div>

        {tasks.map((task, index) => (
          <label key={index} className={checkedTasks[index] ? "completed" : ""}>
            <input
              type="checkbox"
              value={task}
              checked={checkedTasks[index]}
              onChange={(e) => handleCheck(index, e.target.checked)}
            />
            {task}
          </label>
        ))}
      </form>
    </>
  );
};

export default Todo;
