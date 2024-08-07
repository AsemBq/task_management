import './assets/css/App.css';

import Wrapper from './Wrapper/Wrapper.jsx';

import { BrowserRouter } from 'react-router-dom';

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
