import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UglyThingContextProvider } from './Contexts/UglyThingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UglyThingContextProvider>
      <App />
    </UglyThingContextProvider>
  </React.StrictMode>,
)
