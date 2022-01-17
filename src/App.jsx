import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Filter from "./components/Filter"
import Character from "./components/Character"
import Submenu from "./components/Submenu"
import Modal from "./components/Modal"


function App() {
  const [modal, setModal] = useState(false)
  const [characters, setCharacters] = useState([])
  const [positionChara, setPositionChara] = useState('')
  const [filterBtn, setFilterBtn] = useState([])
  

  useEffect(() => {
    const characterAPI = async () => {
      try {
        const url = 'http://localhost:4000/characters'
        const answer = await fetch(url)
        const results = await answer.json()

        setCharacters(results)
        
      } catch (error) {
        console.log(error)
      }
    }

    characterAPI()
  }, [characters])

  useEffect(() => {
    const checkPosition = () => {
      if(positionChara==='Estudiante'){
        setFilterBtn(characters.filter( character => character.position === 'Estudiante' ))
      } else if(positionChara==='Staff') {
        setFilterBtn(characters.filter( character => character.position === 'Staff' ))
      }
    }
    
    checkPosition()
  }, [positionChara])

  return (
    <div className='mb-5'>
      <div className='container mb-5'>
        <div className='row'>
          <Header/>
          <Filter
            setPositionChara={setPositionChara}
          />
          <div className='col-12 mt-5'>
            <div className='row'>
              {filterBtn.map( character => (
                <Character
                  key={character.id}
                  character={character}
                  setPositionChara={setPositionChara}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Submenu
        setModal={setModal}
      />
      {modal && <Modal setModal={setModal}/>} 
    </div>
  )
}

export default App
