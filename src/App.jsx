import 'styles/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Registro } from 'pages/Registro'
import { Admin } from 'pages/admin/Index'
import { Index } from 'pages/Index'
import PublicLayout from 'layouts/PublicLayout'
import PrivateLayout from 'layouts/PrivateLayout'
import AuthLayout from 'layouts/AuthLayout'
import Vehiculos from 'pages/admin/Vehiculos'
import Clientes from 'pages/admin/Clientes'
import { DarkModeContext } from 'context/darkMode'
import { useEffect, useState } from 'react/cjs/react.development'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    console.log('Dark Mode', darkMode)
  }, [darkMode])

  return (
    <div className='App'>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <Router>
          <Routes>
            <Route path='/admin' element={<PrivateLayout><Admin /></PrivateLayout>} />
            <Route path='/admin/user' element={<PrivateLayout><Admin /></PrivateLayout>} />
            <Route path='/admin/vehiculos' element={<PrivateLayout><Vehiculos /></PrivateLayout>} />
            <Route path='/admin/clientes' element={<PrivateLayout><Clientes /></PrivateLayout>} />
            <Route path='/admin/ventas' element={<PrivateLayout><Admin /></PrivateLayout>} />
            <Route path='/admin/usuarios' element={<PrivateLayout><Admin /></PrivateLayout>} />

            <Route path='/login' element={<AuthLayout><Login /></AuthLayout>} />
            <Route path='/registro' element={<AuthLayout><Registro /></AuthLayout>} />
            <Route path='/' element={<PublicLayout><Index /></PublicLayout>} exact />
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
