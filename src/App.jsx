import './assets/css/App.css';
import Wrapper from './Wrapper/Wrapper.jsx';
import {BrowserRouter} from "react-router-dom";
import Store from "./Components/redux/store.js";
import {Provider} from "react-redux";
// import TaskList1 from './TaskList1.jsx'

function App() {
  return (
    <>
        <BrowserRouter>
            <Provider store={Store}>
            <Wrapper />
            </Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
