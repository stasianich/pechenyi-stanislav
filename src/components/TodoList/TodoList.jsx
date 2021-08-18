import React from 'react';
import './TodoList.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export const TodoList = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="loading">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <div className="TodoList text-center">
      <h2>
        {`Todos: ${todos.length}`}
      </h2>
      <div className="TodoList__list-container">
        <ul className="TodoList__list d-flex flex-column align-items-center">
          {todos.map(todo => (
            <li
              className={classNames(
                'TodoList__item',
                'card',
                'w-50',
              )}
              key={todo.id}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <p>
                  {todo.title}
                </p>

                User&nbsp;
                {todo.userId}
                <div className={
                  classNames('todo-card__status', {
                    'text-success': todo.completed,
                    'text-danger': !todo.completed,
                  })
                }
                >
                  {todo.completed ? 'Finished' : 'Unfinished'}
                </div>
                <button
                  type="button"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
