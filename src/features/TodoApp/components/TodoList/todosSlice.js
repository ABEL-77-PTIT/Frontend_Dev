import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        status: "idle",
        todos: [],
    },
    reducers: {
        // IMMER
        // addTodo: (state, action) => {
        //     state.push(action.payload);
        // }, // action creators
        // toggleTodoStatus: (state, action) => {
        //     const currentTodo = state.find(
        //         (todo) => todo.id === action.payload
        //     );
        //     if (currentTodo) currentTodo.completed = !currentTodo.completed;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = "idle";
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                console.log("Request rejected");
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const currentTodo = state.todoList.todos?.find(
                    (todo) => todo.id === action.payload
                );
                if (currentTodo) currentTodo.completed = !currentTodo.completed;
            });
    },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    console.log({ data });
    return data.todos;
});

export const addNewTodo = createAsyncThunk(
    "todos/addNewTodo",
    async (newTodo) => {
        //gui du lieu ve db
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        //dua du lieu vao store(luu trong state)
        const data = await res.json();
        // console.log({ data });
        return data.todos;
    }
);

export const toggleTodo = createAsyncThunk(
    "todos/toggleTodo",
    async (updateTodo) => {
        const res = await fetch("/api/updateToggleTodo", {
            method: "POST",
            body: JSON.stringify(updateTodo),
        });

        const data = await res.json();
        console.log("[updateTodo]", { data });
        return data.todos;
    }
);

//make feature updateTodo

export default todoSlice;
