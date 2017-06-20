import React from 'react';
import Todo from './Todo';

const List = ({ todos, updateTodo, deleteTodo }) => (
  <div className="row">
    { todos.map( todo =>
      <Todo
      key={todo.id}
      {...todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      />
  )
}
  </div>
)

export default List;
