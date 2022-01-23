import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center py-2 px-4 bg-gray-200'>
            Autenticacion
            <div className='flex w-full'>
            {children}
            </div>
        </div>
    )
}

export default AuthLayout
