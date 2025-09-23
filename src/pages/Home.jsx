import React, { useState, useEffect } from 'react'
import TaskList from '../components/TaskList'
import AddTaskModal from '../components/AddTaskModal'

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const today = new Date().toISOString().split('T')[0]
  const categories = ['Today', 'Upcoming', 'Overdue', 'Completed']

  const getTasksByCategory = (category) => {
    return tasks.filter((task) => {
      if (category === 'Today') return task.dueDate === today && !task.completed
      if (category === 'Upcoming') return task.dueDate > today && !task.completed
      if (category === 'Overdue') return task.dueDate < today && !task.completed
      if (category === 'Completed') return task.completed
      return false
    })
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My To-Do App</h1>

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Task
        </button>
      </div>

      {categories.map((category) => (
        <TaskList
          key={category}
          tasks={getTasksByCategory(category)}
          category={category}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      ))}

      {showModal && <AddTaskModal addTask={addTask} onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Home
