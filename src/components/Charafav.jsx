function Favmenu({favorito}) {

    return (
        <div className='favcontent'>
            <div className='favcontainer'>
            <div style={{ backgroundImage: `url(${favorito.photo})` }} className='favimage'></div>
            <p>{favorito.name}</p>
            </div>
            <i onClick={ () => dispatch(eliminarFavorito(favorito.id)) } className="btn-trash far fa-trash-alt fa-lg"></i>
        </div> 
    )
  } 
  
export default Favmenu