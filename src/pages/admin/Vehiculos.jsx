import React, { useEffect, useState, useRef } from 'react'
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

    useEffect(() => {
        //Obtener lista de vehículos desde el front
        setVehiculos(vehiculosBackend)
    }, [])

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Crear Nuevo Vehículo')
        } else {
            setTextoBoton('Mostrar Todos')
        }
    }, [mostrarTabla])

    return (
        <div className='flex h-full w-full flex-col items-center'>
            <div className='flex w-full items-center justify-between p-2'>
                <h2 className='text-3xl font-extrabold text-gray-800 m-2'>Administración de vehículos</h2>
                <button onClick={() => { setMostrarTabla(!mostrarTabla) }}
                    className='text-white bg-indigo-400 p-4 rounded-xl hover:bg-indigo-600 mx-2'>
                    {textoBoton}</button>
            </div>
            {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioCreacionVehiculos setMostrarTabla={setMostrarTabla} 
            listaVehiculos={vehiculos}
            setVehiculos={setVehiculos} />}
            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    )
}

const TablaVehiculos = ({ listaVehiculos }) => {

    return (
        <div className='flex flex-col items-center justify-between'>
            <h2 className='text-2xl font-extrabold text-slate-800'>Listado vehículos</h2>
            <table className='table-fixed border shadow-lg'>
                <thead>
                    <tr className='border'>
                        <th className='w-40'>Nombre</th>
                        <th className='w-40'>Marca</th>
                        <th className='w-40'>Modelo</th>
                    </tr>
                </thead>
                <tbody>

                    {listaVehiculos.map((vehiculo) => {
                        return (
                            <tr className='border'>
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

const FormularioCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
    const form = useRef(null)

    const submitForm = (e) => {
        e.preventDefault()
        const fd = new FormData(form.current)

        const nuevoVehiculo = {}
        fd.forEach((value, key) => {
            nuevoVehiculo[key] = value            
        })

        toast.success('Creado con Exito!')
        setMostrarTabla(true)
        setVehiculos([...listaVehiculos,nuevoVehiculo])

    }

    return (
        <div className='flex flex-col items-center justify-center max-w-xl'>
            <h2 className='text-2xl font-extrabold text-slate-800'>Crear nuevo Vehículo</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <label className='flex flex-col' htmlFor="nombre">
                    Nombre del Vehículo
                    <input name='nombre' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' 
                    type="text"
                    required
                    />
                </label>
                <label className='flex flex-col' htmlFor="marca">
                    Marca Vehículo
                    <select name='marca' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2'
                    required defaultValue={0}>
                        <option disabled value={0}>Seleccione una opción</option>
                        <option>Renault</option>
                        <option>Toyota</option>
                        <option>Ford</option>
                        <option>Mazda</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor="modelo">
                    Modelo
                    <input name='modelo' className='bg-gray-100 border border-gray-700 p-2 rounded-lg m-2' type="number" min={2000} max={2023} placeholder='2020' required />
                </label>
                <button type='submit' className='col-span-2 p-2 bg-green-400 rounded-full hover:bg-green-500 text-white'>Guardar</button>
            </form>
        </div>
    )
}


export default Vehiculos
