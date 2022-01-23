import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({ children }) => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar />
            <main className='flex w-full overflow-y-scroll items-center justify-center'>
            {children}
            </main>
        </div>
    )
}

export default PrivateLayout
