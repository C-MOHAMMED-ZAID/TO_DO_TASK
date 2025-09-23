import React, { useState } from 'react'
import ViewTaskModal from './ViewTaskModal'

function TaskItem({ task, deleteTask, toggleCompletion }) {
  const [showViewModal, setShowViewModal] = useState(false)

  const priorityColor = {
    High: 'text-danger',
    Medium: 'text-warning',
    Low: 'text-success',
  }

  return (
    <>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task.id)}
          />
          <label className={`form-check-label ms-2 ${priorityColor[task.priority]}`}>
            {task.title} - {task.dueDate} ({task.priority})
          </label>
        </div>
        <div>
          <button
            className="btn btn-sm btn-info me-2"
            onClick={() => setShowViewModal(true)}
          >
            View
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {showViewModal && (
        <ViewTaskModal task={task} onClose={() => setShowViewModal(false)} />
      )}
    </>
  )
}

export default TaskItem
