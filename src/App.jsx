import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  // Add Task
  const addTask = () => {
    if (input.trim() === '') return;

    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: input } : task
        )
      );

      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setInput('');
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id, text) => {
    setInput(text);
    setEditId(id);
  };

  return (
    <div className="container">
      <Header />

      <div className="todo-box">
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTask}>
            {editId !== null ?  'Update' : 'Add'}
          </button>
        </div>

        <ToDoList
          tasks={tasks}
          deleteTask= {deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
