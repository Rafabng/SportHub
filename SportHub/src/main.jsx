import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import './styles/themes.css'
import './index.css'

import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)