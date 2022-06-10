import { setupServer } from "../../app/Services/TodoApp/fakeApi";
import { Typography, Divider } from "antd";
import "./index.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { fetchTodos } from "./components/TodoList/todosSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const { Title } = Typography;


//only done during project development
if(process.env.NODE_ENV === 'development') {
    setupServer({ environment: "development" });
}

function TodoApp() {
    const dispatch = useDispatch()
    // Get data Todos in the first run
    useEffect(() => {
        dispatch(fetchTodos())
    })

    return (
            <div
                style={{
                    width: 500,
                    margin: "40px auto",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    padding: 20,
                    boxShadow: "0 0 10px 4px #bfbfbf",
                    borderRadius: 5,
                    height: "90vh",
                }}
            >
                <Title style={{ textAlign: "center" }}>
                    TODO APP with REDUX
                </Title>
                <Filters />
                <Divider />
                <TodoList />
            </div>
    );
}

export default TodoApp;
