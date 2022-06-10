import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../TodoList/todosSlice";
import { AiFillEdit } from "react-icons/ai";
const priorityColorMapping = {
    High: "red",
    Medium: "blue",
    Low: "gray",
};

export default function Todo({ name, prioriry, id, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();
    const toggleCheckbox = () => {
        setChecked(!checked);
        // dispatch(todoListSlice.actions.toggleTodoStatus(id));
        dispatch(toggleTodo(id));
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked
                    ? { opacity: 0.5, textDecoration: "line-through" }
                    : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <div>
                <Tag
                    color={priorityColorMapping[prioriry]}
                    style={{ margin: 5, padding: 5 }}
                >
                    {prioriry}
                </Tag>
                <Button type="primary">
                        <AiFillEdit />
                </Button>
            </div>
        </Row>
    );
}
