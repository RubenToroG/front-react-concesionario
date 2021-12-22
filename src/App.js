import 'styles/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Registro } from 'pages/Registro'
import { Admin } from 'pages/Admin'
import { Index } from 'pages/Index'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Index />} />

      </Routes>
    </Router>
    
  );
}

export default App;
