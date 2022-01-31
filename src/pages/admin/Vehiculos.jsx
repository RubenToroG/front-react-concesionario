import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { nanoid } from 'nanoid'
import Tooltip from '@mui/material/Tooltip'
import { Dialog } from '@mui/material'
import axios from 'axios'

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
    // const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

    // const obtenerVehiculos = async () => {
    //     const options = {method: 'GET', url: 'https://vas-waters-45728.herokuapp.com/vehiculos/' }
    //     await axios
    //         .request(options)
    //         .then(function (response) {
    //             setVehiculos(response.data)
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    //     setEjecutarConsulta(false)
    // }

    useEffect(() => {
        //Obtener lista de vehículos desde el front
        // if(ejecutarConsulta) {
        //     obtenerVehiculos()
        // }
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
        <div className='flex h-full w-full flex-col justify-start p-6'>
            <div className='flex w-full items-center justify-between'>

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
    const [busqueda, setBusqueda] = useState('')
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos)

    useEffect(() => {
        setVehiculosFiltrados(
            listaVehiculos.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase())
            })
        )
    }, [busqueda, listaVehiculos])

    return (
        <div className='flex flex-col justify-between w-full'>
            <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder='Buscar' className='border border-gray-700 px-3 py-2 self-start outline-none focus:border-teal-700 rounded-xl' />
            <h2 className='text-2xl font-extrabold text-slate-800 text-center'>Listado vehículos</h2>
            <div className='hidden md:flex w-full'>
                <table className='tabla'>
                    <thead>
                        <tr className='border'>
                            <th className='w-40'>Nombre</th>
                            <th className='w-40'>Marca</th>
                            <th className='w-40'>Modelo</th>
                            <th className='w-40'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {vehiculosFiltrados.map((vehiculo) => {
                            return (
                                <FilaVehiculo key={nanoid()} vehiculo={vehiculo} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col w-full m-2 md:hidden'>
                {vehiculosFiltrados.map((elemento) => {
                    return (
                        <div className='bg-blue-400 m-2 shadow-lg flex flex-col p-1 rounded-lg'>
                            <span>{elemento.nombre}</span>
                            <span>{elemento.marca}</span>
                            <span>{elemento.modelo}</span>

                        </div>
                    )
                })

                }

            </div>
        </div>
    )
}

const FilaVehiculo = ({ vehiculo }) => {
    const [edit, setEdit] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
        nombre: vehiculo.nombre,
        marca: vehiculo.marca,
        modelo: vehiculo.modelo
    })
    const actualizarVehiculo = () => {
        console.log(infoNuevoVehiculo)
        //Enviar la info al backend
        setEdit(false)
    }
    const eliminarVehiculo = () => {
    }

    return (
        <tr>
            {edit ?
                <>
                    <td><input className='bg-gray-50 border border-gray-600 rounded-md pl-2' type="text" value={infoNuevoVehiculo.nombre} onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, nombre: e.target.value })} /></td>
                    <td><input className='bg-gray-50 border border-gray-600 rounded-md pl-2' type="text" value={infoNuevoVehiculo.marca} onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, marca: e.target.value })} /></td>
                    <td><input className='bg-gray-50 border border-gray-600 rounded-md pl-2' type="text" value={infoNuevoVehiculo.modelo} onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, modelo: e.target.value })} /></td>
                </>
                :
                <>
                    <td>{vehiculo.nombre}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                </>
            }
            <td>
                <div className='flex w-full justify-evenly'>
                    {edit ?
                        <>
                            <Tooltip title='Conformar edición' arrow>
                                <i onClick={() => actualizarVehiculo()} className='fas fa-check text-green-500 hover:text-green-900 cursor-pointer'></i>
                            </Tooltip>
                            <Tooltip title='Cancelar' arrow>
                                <i onClick={() => setEdit(!edit)} className='fas fa-ban text-green-500 hover:text-green-900 cursor-pointer'></i>
                            </Tooltip>
                        </>
                        :
                        <>
                            <Tooltip title='Editar Vehículo' arrow>
                                <i onClick={() => setEdit(!edit)} className='fas fa-pencil-alt text-green-500 hover:text-green-900 cursor-pointer'></i>
                            </Tooltip>
                            <Tooltip title='Eliminar Vehículo' arrow>

                                <i onClick={() => setOpenDialog(true)} className='fas fa-trash text-red-600 hover:text-red-900 cursor-pointer'></i>
                            </Tooltip>
                        </>
                    }
                </div>
                <Dialog open={openDialog}>
                    <div className='p-8' flex flex-col>
                        <h1 className='text-gray-800 font-extrabold text-2xl'>¿Estás seguro de querer eliminar el Vehículo?</h1>
                        <div className='my-4 flex w-full justify-center'>
                            <button className='mx-2 px-4 py-2 bg-green-600 text-white hover:bg-green-800 rounded-lg shadow-md' onClick={() => eliminarVehiculo()}>Confirmar</button>
                            <button className='mx-2 px-4 py-2 bg-red-600 text-white hover:bg-red-800 rounded-lg shadow-md' onClick={() => setOpenDialog(false)}>Cancelar</button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>
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
        setVehiculos([...listaVehiculos, nuevoVehiculo])

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