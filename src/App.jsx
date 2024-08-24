import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function App() {
  const [todo, setTodo] = useState([]);
  let todoVal = useRef();
  function addTodo(e) {
    e.preventDefault();
    if (!todoVal.current.value) {
      alert("Please Enter Todo");
    } else {
      todo.push(todoVal.current.value);
      setTodo([...todo]);
    }
  }
  const deleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };
  const editTodo = (index) => {
    let editVal = prompt("Enter Update Todo Value");
    if (editVal) {
      todo[index] = editVal;
      setTodo([...todo]);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="text-center mb-4 text-primary todo-heading">Todo App</h1>
      <div className="todo-div">
        <form className="todo-form" onSubmit={addTodo}>
          <InputGroup className="mb-3 todo-inp">
            <Form.Control
              placeholder="Enter Todo"
              ref={todoVal}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button type="submit" variant="primary">
              Add Todo
            </Button>{" "}
          </InputGroup>
          <ul className={todo.length > 0 ? "todo-list" : "none"}>
            {todo.map((singalTodo, index) => {
              return (
                <div className="singal-todo" key={index}>
                  <li>{singalTodo}</li>
                  <div>
                    <Button onClick={() => editTodo(index)} variant="info">
                      Edit
                    </Button>{" "}
                    <Button onClick={() => deleteTodo(index)} variant="danger">
                      Delete
                    </Button>{" "}
                  </div>
                </div>
              );
            })}
          </ul>
        </form>
      </div>
    </div>
  );
}
