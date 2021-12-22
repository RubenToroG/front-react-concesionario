import 'styles/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Registro } from 'pages/Registro'
import { Admin } from 'pages/Admin'
import { Index } from 'pages/Index'
import PublicLayout from 'layouts/PublicLayout'
import PrivateLayout from 'layouts/PrivateLayout'
import AuthLayout from 'layouts/AuthLayout'
import Vehiculos from 'pages/admin/Vehiculos'
import Clientes from 'pages/admin/Clientes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin' element={<PrivateLayout><Admin /></PrivateLayout>} />
        <Route path='/admin/vehiculos' element={<PrivateLayout><Vehiculos /></PrivateLayout>} />
        <Route path='/admin/clientes' element={<PrivateLayout><Clientes /></PrivateLayout>} />
        <Route path='/login' element={<AuthLayout><Login /></AuthLayout>} />
        <Route path='/registro' element={<AuthLayout><Registro /></AuthLayout>} />
        <Route path='/' element={<PublicLayout><Index /></PublicLayout>} exact />
      </Routes>
    </Router>
  );
}

export default App;
