import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Cria um novo root do React no elemento com id "root" no HTML
ReactDOM.createRoot(document.getElementById('root')).render(

    // Inicia o StrictMode para ativar verificações adicionais no React
    <React.StrictMode>

        {/* Renderiza o componente App */}
        <App />
    </React.StrictMode>,
)
