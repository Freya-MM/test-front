function Filter({character, setPositionChara}) {

  const { name, birthday, eyes_color, hair_color, photo, house, gender, position, status, favorite, id} = character
  let color, cardcolor

  

  const houseColor = () => {
    if(house==='Gryffindor'){
      color = 'card-image gryffindor'
      return color
    } else if(house==='Slytherin'){
      color = 'card-image slytherin'
      return color
    } else if(house==='Ravenclaw'){
      color = 'card-image ravenclaw'
      return color
    } else if(house==='Hufflepuff'){
      color = 'card-image hufflepuff'
      return color
    }
  }

  const favoriteCharacter = () => {
    if(favorite){
      return <i class="fas fa-bookmark fa-lg"></i>
    } else {
      return <i className="far fa-bookmark fa-lg"></i>
    }
  } 

  const validatecard = () => {
    if(status==='Finado') {
      return cardcolor = 'card-description card2'
    } else {
      return cardcolor = 'card-description'
    }
  }

  houseColor()
  validatecard()

    return (
      <div className="card-character col-6 mb-4 mt-lg-4">
          <div className={color}>
              <div className="character-img"></div>
          </div>
          <div className={cardcolor}>
              <div className="card-text">
                <p className="text-center fw-bold character-name">{name}</p>
                <div className="character-desc">
                    <p><b>Cumpleaños:</b> {birthday}</p>
                    <p><b>Género:</b> {gender}</p>
                    <p><b>Color de ojos:</b> {eyes_color}</p>
                    <p><b>Color de cabello:</b> {hair_color}</p>
                </div>
              </div>
              <div className="character-status">
                  <p>{status} / {position}</p>
                  {favoriteCharacter()}
              </div>
          </div>
      </div>
    )
  }
  
export default Filter