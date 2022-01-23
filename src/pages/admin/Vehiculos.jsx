import React, { useEffect, useState } from 'react'

const vehiculosBackend = [
    {
        nombre:'Corolla',
        marca:'Toyota',
        modelo:2020,
    },
    {
        nombre:'Corolla',
        marca:'Toyota',
        modelo:2020,
    },
    {
        nombre:'Corolla',
        marca:'Toyota',
        modelo:2020,
    },
    {
        nombre:'Mazda 3',
        marca:'Mazda',
        modelo:2019,
    }
]

const Vehiculos = () => {

    const[mostrarTabla, setMostrarTabla] = useState(true)
    const[vehiculos, setVehiculos] = useState([])
    const[textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo')

    useEffect(() => {
        //Obtener lista de vehículos desde el front
        setVehiculos(vehiculosBackend)
    },[])

    useEffect(() => {
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo Vehículo')
        } else {
            setTextoBoton('Mostrar Todos')
        }
    }, [mostrarTabla])

    return (
        <div className='flex h-full w-full flex-col'>
            <div className='flex items-center justify-between p-2'>
                <h2 className='text-3xl font-extrabold text-gray-800 m-2'>Administración de vehículos</h2>
                <button onClick={() => {setMostrarTabla(!mostrarTabla)}} className='text-white bg-indigo-400 p-4 rounded-xl hover:bg-indigo-600 m-2'>{textoBoton}</button>
            </div>
            {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioCreacionVehiculos />}
        </div>
    )
}

const TablaVehiculos = ({ listaVehiculos }) => {
    useEffect(() => {
        console.log('Estado de listado de vehiculos', listaVehiculos)
    },[listaVehiculos])
    return (
        <div className='flex flex-col items-center justify-between'>
            <h2 className='text-2xl font-extrabold text-slate-800'>Listado vehículos</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>

                {listaVehiculos.map((vehiculo) => {
                    return (
                        <tr>
                            <td>{vehiculo.nombre}</td>
                            <td>{vehiculo.marca}</td>
                            <td>{vehiculo.modelo}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

const FormularioCreacionVehiculos = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-slate-800'>Crear nuevo Vehículo</h2>
            <form className='grid grid-cols-2'>
                <input className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="text" />
                <button type='button' className='col-span-2 p-2 bg-green-400 rounded-full hover:bg-green-500 text-white'>Guardar</button>
            </form>
        </div>

    )
}


export default Vehiculos
