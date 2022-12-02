import React from 'react'
import ReactDOM from 'react-dom/client'
import Frame from './Frame' 
import Info from './Info'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Info />
    <Frame timeout={10*1_000} />
  </React.StrictMode>
)
