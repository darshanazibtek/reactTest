import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Middle from './Components/Middle';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPly from './Components/VideoPly';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import ucrclogo from './Images/ucrc-logo.png'
import Routing from './Components/Routing';

function App() {
  return (
    <BrowserRouter>
        
       <Routing/>
      </BrowserRouter>
  );
}

export default App;
