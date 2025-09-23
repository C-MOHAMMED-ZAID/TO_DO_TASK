import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, category, deleteTask, toggleCompletion }) {
  const today = new Date().toISOString().split('T')[0]

  const filteredTasks = tasks.filter((task) => {
    if (category === 'Today') return task.dueDate === today && !task.completed
    if (category === 'Upcoming') return task.dueDate > today && !task.completed
    if (category === 'Overdue') return task.dueDate < today && !task.completed
    if (category === 'Completed') return task.completed
    return false
  })

  if (filteredTasks.length === 0) return null 

  return (
    <div className="mb-4">
      <h4>{category}</h4>
      <div className="list-group">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
