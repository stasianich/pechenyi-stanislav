import React, { useState } from 'react';
import './AddTodoForm.scss';
import PropTypes from 'prop-types';

export const AddTodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState('0');

  const clearForm = () => {
    setTitle('');
    setCompleted(false);
    setUserId('0');
  };

  return (
    <div className="add-todo">
      <form
        className="add-todo-form form-group"
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(userId, title, completed);
          clearForm();
        }}
      >
        <div className="form-group">
          <label className="add-todo-form__title col-form-label col-sm-10">
            Enter title:
            <input
              type="text"
              name="title"
              className="add-todo-form__title form-control"
              value={title}
              onChange={event => setTitle(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="add-todo-form__completed form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="completed"
                checked={completed}
                onChange={() => setCompleted(true)}
              />
              Completed
            </label>
          </div>
          <div className="form-check">
            <label className="add-todo-form__completed form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="completed"
                checked={!completed}
                onChange={() => setCompleted(false)}
              />
              Uncompleted
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="add-todo-form__user-id col-form-label col-sm-10">
            Select user:
            <select
              name="userId"
              className="form-control"
              value={userId}
              onChange={event => setUserId(event.target.value)}
            >
              <option value="0" disabled>Select user</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          <button
            type="submit"
            className="add-todo-form__submit-button btn btn-primary"
          >
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};

AddTodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
