import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesión en tu cuenta</h2>
            <form className='mt-8 max-w-md'>
                <div>
                    <input className='appearance-none rounded-none relative block px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10' type='email' placeholder='Email' required />
                    <input className='appearance-none rounded-none relative block px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10' type='password' required />
                </div>
                <div className='flex justify-between'>
                <div>
                    <label htmlFor='recuerdame'>
                        <input type="checkbox" name='recuerdame' />
                        Recuerdame
                    </label>
                </div>
                <div>
                    <Link to='/'>¿Olvidaste tu contraseña?</Link>
                </div>
                </div>
                <div>
                    <Link to='/admin'>
                        <button type='submit'>Iniciar Sesión</button>
                    </Link>
                </div>
                <div>o</div>
                <div>
                    <button>Continúa con Google</button>
                </div>
            </form>
        </div>
    )
}

export { Login }
