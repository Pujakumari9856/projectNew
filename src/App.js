import './App.css';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-component">
      <Header/>
      <BrowserRouter>
      <Navbar/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
