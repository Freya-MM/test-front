function Filter() {

    return (
      <div className="card-character col-6 mb-4 mt-lg-4">
          <div className="card-image gryffindor">
              <div className="character-img"></div>
          </div>
          <div className="card-description">
              <div className="card-text">
                <p className="text-center fw-bold character-name">Harry Potter</p>
                <div className="character-desc">
                    <p><b>Cumpleaños:</b> 31-07-1980</p>
                    <p><b>Género:</b> Male</p>
                    <p><b>Color de ojos:</b> Green</p>
                    <p><b>Color de cabello:</b> Black</p>
                </div>
              </div>
              <div className="character-status">
                  <p>Vivo / Estudiante</p>
                  <i class="far fa-bookmark fa-lg"></i>
              </div>
          </div>
      </div>
    )
  }
  
export default Filter