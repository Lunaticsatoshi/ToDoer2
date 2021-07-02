import React, { FC } from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
};

const Form: FC<Props> = ({ todo, updateTodo }) => {
  return (
    <div className="card">
      <div className="card-text">
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="title" name="title" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="textarea"
            className="form-control"
            placeholder="description"
            name="description"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            name="status"
          />
          <label className="form-check-label">Status</label>
        </div>
      </div>

      <div className="card-button">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Form;
