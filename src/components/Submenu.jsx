import Favmenu from './Favmenu'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Submenu({setModal}) {
  const [favorites, setfavorites] = useState(false)

  const favoritos = useSelector(state => state.favoritos)
  console.log(favoritos)

    return (
      <div className="sub-menu">
          <div className='sub-menu-btn' onClick={() => favorites ? setfavorites(false) : setfavorites(true)}><p>Favoritos <i className="fas fa-bookmark"></i></p></div>
          <div className='sub-menu-btn' onClick={() => setModal(true)}><p>Agregar <i className="fas fa-user-plus"></i></p></div>
          {favorites && <Favmenu>
            <div className='favcontent'>
              <div className='favimage'></div>
              <p>Harry Potter</p>
              <i class="far fa-trash-alt"></i>
            </div>  
          </Favmenu>}
      </div>
    )
  } 
  
export default Submenu