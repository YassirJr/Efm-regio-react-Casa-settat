import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Q3 from './components/Q3';
import Q4 from './components/Q4';
import Q5 from './components/Q5';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='pays' element={<Q3 />} />
        <Route path='anneeIndependance' element={<Q4 />} />
        <Route path='pays/:anneeIndependance' element={<Q3 />} />
        <Route path='/:paysCode/ajouter-ville/*' element={<Q5 />} />
        <Route path='/:paysCode/modifier-ville/*' element={<Q5 />} />
      </Routes>
    </div>
  );
}

export default App;
