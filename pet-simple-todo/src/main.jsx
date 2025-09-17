import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import StateProvider from "./context/StateProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <StateProvider>
        <App />
      </StateProvider>
    </StrictMode>

)
