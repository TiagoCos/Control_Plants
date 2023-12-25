import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Plants from './pages/Plants.jsx' 
import Cadastro from './pages/Cadastro.jsx'
import Estoque from './pages/Estoque.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='plants/:id' element={<Plants/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='cadastro' element={<Cadastro/>}/>
            <Route path='estoque' element={<Estoque/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
