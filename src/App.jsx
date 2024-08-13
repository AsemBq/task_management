import './assets/css/App.css';
import Wrapper from './Wrapper/Wrapper.jsx';
import {BrowserRouter} from "react-router-dom";
// import TaskList1 from './TaskList1.jsx'

function App() {
  return (
    <>
        <BrowserRouter>
            <Wrapper />
        </BrowserRouter>
    </>
  );
}

export default App;
