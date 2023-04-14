import React from 'react'
import ReactDOM from 'react-dom/client'
import { BroswerRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BroswerRouter>
     <Routes>
      <Route path='/*' element={<App/>}/>
     </Routes>
    </BroswerRouter>
  </React.StrictMode>,
)
