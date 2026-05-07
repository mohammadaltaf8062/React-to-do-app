function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  return (
    <div className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        <span className={task.completed ? 'completed' : ''}>
          {task.text}
        </span>
      </div>

      <div className="buttons">
        <button
          className="edit-btn"
          onClick={() => editTask(task.id, task.text)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
