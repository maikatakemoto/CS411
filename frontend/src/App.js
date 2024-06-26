import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages and componenets
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Calculator from './pages/Calculator'
import About from './pages/About'
import Trips from './pages/Trips'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
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
            element={!user ? <Login /> : <Navigate to="/" />} 
          /> 
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : <Navigate to="/" />} 
          /> 
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
