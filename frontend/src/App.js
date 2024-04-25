import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and componenets
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Calculator from './pages/Calculator'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/calculator" 
            element={<Calculator />} 
          /> 
          <Route 
            path="/about" 
            element={<About />} 
          /> 
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
