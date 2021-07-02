import React, { FC } from "react";
import { handleForm } from "../hooks/handleForm";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
};

const Form: FC<Props> = ({ todo, updateTodo }) => {
  const { formData, handleInputChange } = handleForm(todo);
  return (
    <div className="card">
      <div className="card-text">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            name="title"
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="textarea"
            className="form-control"
            placeholder="description"
            name="description"
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            name="status"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleInputChange(e)}
          />
          <label className="form-check-label">Status</label>
        </div>
      </div>

      <div className="card-button">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `btn` : "btn btn-success"}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Form;
