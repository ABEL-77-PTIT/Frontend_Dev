import { configureStore } from '@reduxjs/toolkit';
// import filtersSlice from '../components/Filters/filtersSlice';
import todosSlice from '../components/TodoList/todosSlice';
import filtersSlice from "../components/Filters/filterSlice"
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
