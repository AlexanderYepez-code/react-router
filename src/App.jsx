import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/chi-siamo' element={<ChiSiamo/>}/>
            <Route path='/prodotti' element={<Prodotti/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
