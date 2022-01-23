import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const vehiculosBackend = [
    {
        nombre: 'Corolla',
        marca: 'Toyota',
        modelo: 2020,
    },
    {
        nombre: 'Corolla',
        marca: 'Toyota',
        modelo: 2020,
    },
    {
        nombre: 'Corolla',
        marca: 'Toyota',
        modelo: 2020,
    },
    {
        nombre: 'Mazda 3',
        marca: 'Mazda',
        modelo: 2019,
    },
    {
        nombre: 'Mazda 3',
        marca: 'Mazda',
        modelo: 2019,
    },
    {
        nombre: 'Mazda 3',
        marca: 'Mazda',
        modelo: 2019,
    },
    {
        nombre: 'Mazda 3',
        marca: 'Mazda',
        modelo: 2019,
    },
    {
        nombre: 'Mazda 3',
        marca: 'Mazda',
        modelo: 2019,
    }
]

const Vehiculos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true)
    const [vehiculos, setVehiculos] = useState([])
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo')
    const [colorBoton, setColorBoton] = useState('indigo')

    useEffect(() => {
        //Obtener lista de vehículos desde el front
        setVehiculos(vehiculosBackend)
    }, [])

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Crear Nuevo Vehículo')
            setColorBoton('indigo')
        } else {
            setTextoBoton('Mostrar Todos')
            setColorBoton('green')
        }
    }, [mostrarTabla])

    return (
        <div className='flex h-full w-full flex-col items-center'>
            <div className='flex w-full items-center justify-between p-2'>
                <h2 className='text-3xl font-extrabold text-gray-800 m-2'>Administración de vehículos</h2>
                <button onClick={() => { setMostrarTabla(!mostrarTabla) }}
                    className={`text-white bg-${colorBoton}-400 p-4 rounded-xl hover:bg-indigo-600 m-2`}>
                    {textoBoton}</button>
            </div>
            {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioCreacionVehiculos funcionParaVolverATabla={setMostrarTabla} 
            listaVehiculos={vehiculos}
            funcionAgregarVehiculo={setVehiculos} />}
            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    )
}

const TablaVehiculos = ({ listaVehiculos }) => {
    useEffect(() => {
        console.log('Estado de listado de vehiculos', listaVehiculos)
    }, [listaVehiculos])
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

const FormularioCreacionVehiculos = ({ funcionParaVolverATabla, listaVehiculos, funcionAgregarVehiculo }) => {
    const[nombre, setNombre] = useState()
    const[marca, setMarca] = useState()
    const[modelo, setModelo] = useState()

    const enviarAlBack = () => {
        toast.success('Creado con Exito!')
        funcionParaVolverATabla(true)
        funcionAgregarVehiculo([...listaVehiculos,{nombre:nombre, marca:marca, modelo:modelo}])
    }

    return (
        <div className='flex flex-col items-center justify-center max-w-xl'>
            <h2 className='text-2xl font-extrabold text-slate-800'>Crear nuevo Vehículo</h2>
            <form className='flex flex-col'>
                <label className='flex flex-col' htmlFor="nombre">
                    Nombre del Vehículo
                    <input name='nombre' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' 
                    type="text"
                    value={nombre}
                    onChange={(e) => {setNombre(e.target.value)}}
                    />
                </label>
                <label className='flex flex-col' htmlFor="marca">
                    Marca Vehículo
                    <select value={marca} onChange={(e) => {setMarca(e.target.value)}} name='marca' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2'>
                        <option disabled>Seleccione una opción</option>
                        <option>Renault</option>
                        <option>Toyota</option>
                        <option>Ford</option>
                        <option>Mazda</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="modelo" value={modelo} onChange={(e) => {setModelo(e.target.value)}}>
                    Modelo
                    <input name='modelo' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="number" min={2000} max={2023} placeholder='2020' />
                </label>
                <button type='button' className='col-span-2 p-2 bg-green-400 rounded-full hover:bg-green-500 text-white' onClick={() => {enviarAlBack()}}>Guardar</button>
            </form>
        </div>
    )
}


export default Vehiculos
