import React from "react";

export const Todoitems = ({ todo, onDelete }) => {
  const cardStyle = {
    width: "20%",
    backgroundColor: "#c0e2e5",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
