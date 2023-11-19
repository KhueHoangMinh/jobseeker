import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { Provider } from "react-redux";
import store from "./redux";
import HomePage from "./Components/Homepage/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AllRoutes />
      </div>
    </Provider>
  );
}

export default App;
