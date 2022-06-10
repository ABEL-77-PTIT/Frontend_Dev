import TodoApp from "./TodoAppManagement.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
const App = () => {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
};

export default App;
