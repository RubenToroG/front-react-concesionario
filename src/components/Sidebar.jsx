import React from 'react'
import TriggerDarkMode from './TriggerDarkMode'

const Sidebar = () => {
    return (
        <nav className='w-72 bg-slate-600 text-white'>
            <TriggerDarkMode />
        </nav>
    )
}

export default Sidebar
