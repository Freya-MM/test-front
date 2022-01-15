import { useState } from 'react'
import Header from "./components/Header"
import Filter from "./components/Filter"
import Character from "./components/Character"
import Submenu from "./components/Submenu"

function App() {

  return (
    <div className='mb-5'>
      <div className='container mb-5'>
        <div className='row'>
          <Header/>
          <Filter/>
          <div className='col-12 mt-5'>
            <div className='row'>
              <Character/>
              <Character/>
              <Character/>
              <Character/>
              <Character/>
              <Character/>
            </div>
          </div>
        </div>
      </div>
      <Submenu/>
    </div>
  )
}

export default App
