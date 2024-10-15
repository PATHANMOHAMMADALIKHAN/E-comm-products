import './App.css';
import Navbar from './components/Navbar';
import Painting from './components/Painting';
import Shuttle from './components/Shuttle';
import Chocolate from './components/Chocolate';
import Clock from './components/Clock';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuttle" element={<Shuttle />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
