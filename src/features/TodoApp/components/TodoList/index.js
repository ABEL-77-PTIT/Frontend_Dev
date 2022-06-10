import { useState, useRef } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "./todosSlice";
import { todosRemainingSelector } from "../../redux/selector";

export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todosRemainingSelector);

    const dispatch = useDispatch();
    const inputRef = useRef();

    const handleChangeTodo = (e) => {
        setTodoName(e.target.value);
    };

    const handleChangePriority = (value) => {
        setPriority(value);
    };

    const handleAddtodo = () => {
        dispatch(
            addNewTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName("");
        setPriority("Medium");
        inputRef.current.focus();
    };
    // const data = useSelector(state => state.todoList.todos)
    // console.log('[State]', data);
    
    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            prioriry={todo.priority}
                            completed={todo.completed}
                        />
                    );
                })}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        value={todoName}
                        onChange={(e) => handleChangeTodo(e)}
                        ref={inputRef}
                    />
                    <Select
                        defaultValue="Medium"
                        onChange={(value) => handleChangePriority(value)}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddtodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
