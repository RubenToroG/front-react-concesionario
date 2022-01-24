import { useDarkMode } from 'context/darkMode'
import React from 'react'

const Index = () => {
    const {darkMode} = useDarkMode()
    return <div className={`flex h-full ${darkMode ? "bg-gray-50" : "bg-gray-800/95"}`}>
            Contenido Landing concesionario
        </div>
    
}

export {Index}
