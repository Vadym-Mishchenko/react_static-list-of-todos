import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../types';

type Props = {
  todos: Todo[],
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="app__todo-list">
    {todos.map((todo) => (
      <li className="todo-list__card card" key={todo.id}>
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
