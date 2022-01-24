import { useDarkMode } from 'context/darkMode'
import React from 'react'

const Admin = () => {
    const { darkMode } = useDarkMode()
    return (
        <div className={`flex w-full h-full ${darkMode ? "bg-gray-50" : "bg-gray-800/95"}`}>
            Index del panel de administración
        </div>
    )
}

export { Admin }
