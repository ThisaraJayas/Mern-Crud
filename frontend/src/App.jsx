import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'
import User from './component/User'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
