import ImagenLogo from './ImagenLogo'
import {React, useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'styles/responsive.css'
import useActiveRoute from 'hooks/useActiveRoute'

const Sidebar = () => {
    return (
        <nav className='hidden md:flex md:w-72 border border-x-gray-300 bg-cyan-700 text-white flex-col p-4'>
            <button><Link to='/admin'><ImagenLogo /></Link></button>
            <div>
                <Ruta icono='fas fa-user' ruta='/admin/user' nombre='Perfil' />
                <Ruta icono='fas fa-car' ruta='/admin/vehiculos' nombre='Vehiculos' />
                <Ruta icono='fas fa-users' ruta='/admin/clientes' nombre='Clientes' />
                <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
                <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
            </div>
            <button><Link to={'/'}>Cerrar Sesión</Link></button>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta)

    return (
        <Link to={ruta}>
            <button className={`p-1 my-2 flex w-full items-center text-white ${isActive ? 'bg-cyan-800' : 'bg-cyan.200'} hover:bg-cyan-900 rounded-md`}>
                <i className={`${icono} w-10`} ></i>
                {nombre}</button>
        </Link>
    )
}

export default Sidebar
