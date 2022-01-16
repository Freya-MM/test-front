function Submenu({setModal}) {

    return (
      <div className="sub-menu">
          <div><p>Favoritos <i className="fas fa-bookmark"></i></p></div>
          <div onClick={() => setModal(true)}><p>Agregar <i className="fas fa-user-plus"></i></p></div>
      </div>
    )
  }
  
export default Submenu