import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../model";
import { Droppable } from "react-beautiful-dnd";

interface TodosProps {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodosProps> = ({
  todos,
  completedTodos,
  setTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="todoListContainer">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver && "dragActive"}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todosHeading">Active Todos</span>
            {todos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosListRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver && "dragRemove"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todosHeading">Completed Todos</span>

            {completedTodos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
