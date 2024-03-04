const TodoStack = ({ todo, delTodo, editTodo }) => {
  return (
    <div>
      <div className="stack">
        <div>{todo}</div>
        <div>
          <button onClick={delTodo}>Delete</button>
          <button onClick={editTodo}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoStack;  
