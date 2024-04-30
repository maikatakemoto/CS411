import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and componenets
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Calculator from './pages/Calculator'
import About from './pages/About'
import Trips from './pages/Trips'
import Login from './pages/Login'
import Signup from './pages/Signup'


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
            path="/about" 
            element={<About />} 
          /> 
          <Route 
            path="/trips" 
            element={<Trips />} 
          /> 
          <Route 
            path="/calculator" 
            element={<Calculator />} 
          /> 
          <Route 
            path="/login" 
            element={<Login />} 
          /> 
          <Route 
            path="/signup" 
            element={<Signup />} 
          /> 
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
