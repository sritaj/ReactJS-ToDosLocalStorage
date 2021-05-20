import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [toDoString, setToDoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDoString === "") {
      return alert("Please fill some values");
    }
    const todo = {
      toDoString,
      id: v4(),
    };
    //TODO
    addTodos(todo);

    setToDoString("");

    addTodos(todo);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a to do string"
            value={toDoString}
            onChange={(e) => setToDoString(e.string.value)}
          ></Input>
          <InputGroupAddon addonType="prepend">
            <Button color="sucess">Add ToDo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
