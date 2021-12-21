import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
