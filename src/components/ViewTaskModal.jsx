import React from 'react'

function ViewTaskModal({ task, onClose }) {
  if (!task) return null

  const priorityColor = {
    High: 'text-danger',
    Medium: 'text-warning',
    Low: 'text-success',
  }

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Task Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Title:</strong> {task.title}
            </p>
            <p>
              <strong>Description:</strong> {task.description || 'No description'}
            </p>
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Priority:</strong>{' '}
              <span className={priorityColor[task.priority]}>{task.priority}</span>
            </p>
            <p>
              <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTaskModal
