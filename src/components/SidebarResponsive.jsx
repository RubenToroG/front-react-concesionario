import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {
    const[mostrarNavegacion, setMostrarNavegacion] = useState(false)
    return (
        <div className='md:hidden' onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion)
        }}>
            <i className={`mx-2 fas fa-${mostrarNavegacion ? 'times' : 'bars'}`}></i>
            {mostrarNavegacion && 
            <ul className='bg-sky-700'>
                <ResponsiveRoutes icono='fas fa-user' ruta='/admin/user' nombre='Profile' />
                <ResponsiveRoutes icono='fas fa-car' ruta='/admin/vehiculos' nombre='Vehiculos'/>
                <ResponsiveRoutes icono='fas fa-user' ruta='/admin/user' nombre='Profile'/>
                <ResponsiveRoutes icono='fas fa-user' ruta='/admin/user' nombre='Profile'/>
                </ul>}
        </div>
    )
};

const ResponsiveRoutes = ({icono, ruta, nombre}) => {
    return (
        <Link to={ruta}>
        <li className='text-gray-200 border border-gray-300 p-2'><i className={icono}></i> {nombre}</li></Link>
    )
}

export default SidebarResponsive;
