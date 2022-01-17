import Charafav from './Charafav'

function Favmenu() {
  const resultfav = JSON.parse(localStorage.getItem('favoritos')) ?? [];
  const resultfav2 = resultfav.favoritos
  console.log(resultfav2)

    return (
      <div className="menu-fav">
        {resultfav2.map( favorito => (
          <Charafav
            key={favorito.id}
            favorito={favorito}
          />
        ))}
      </div>
    )
  } 
  
export default Favmenu