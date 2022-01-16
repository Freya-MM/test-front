function Modal({setModal}) {

    return (
      <div className='modal'>
          <div className="modal-content">
            <div className="modalheader">
                <p className="fw-bold">Agrega un personaje</p>
                <span className="close" onClick={() => setModal(false)}><i className="far fa-times-circle"></i></span>
            </div>
            <form action="">
                <div className="row">
                    <div className="mt-4 col-12 col-md-6">
                        <label htmlFor="name" className="form-label text-uppercase">Nombre</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mt-2 mt-md-4 col-12 col-md-6">
                        <label htmlFor="birthday" className="form-label text-uppercase">Cumpleaños</label>
                        <input type="date" className="form-control" id="birthday"/>
                    </div>
                    <div className="mt-2 col-12 col-md-6">
                        <label htmlFor="eyes_color" className="form-label text-uppercase">Color de ojos</label>
                        <input type="text" className="form-control" id="eyes_color"/>
                    </div>
                    <div className="mt-2 col-12 col-md-6">
                        <label htmlFor="hair_color" className="form-label text-uppercase">Color de cabello</label>
                        <input type="text" className="form-control" id="hair_color"/>
                    </div>
                    <div className="mt-2 col-12 col-md-6">
                        <label htmlFor="hair_color" className="form-label text-uppercase">Género</label>
                        <div className="d-flex">
                            <div className="form-check col-6">
                                <input className="form-check-input" type="radio" name="gender" id="female"/>
                                <label className="form-check-label" htmlFor="female">
                                    Mujer
                                </label>
                            </div>
                            <div className="form-check col-6">
                                <input className="form-check-input" type="radio" name="gender" id="male" />
                                <label className="form-check-label" htmlFor="male">
                                    Hombre
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 col-12 col-md-6">
                        <label htmlFor="hair_color" className="form-label text-uppercase">Posición</label>
                        <div className="d-flex">
                            <div className="form-check col-6">
                                <input className="form-check-input" type="radio" name="position" id="student"/>
                                <label className="form-check-label" htmlFor="student">
                                    Estudiante
                                </label>
                            </div>
                            <div className="form-check col-6">
                                <input className="form-check-input" type="radio" name="position" id="staff" />
                                <label className="form-check-label" htmlFor="staff">
                                    Staff
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-4 col-12">
                        <label htmlFor="photo" className="form-label text-uppercase">Fotografía</label>
                        <input className="form-control" type="file" id="photo"/>
                    </div>
                    <div className="btn-style col-12 d-flex justify-content-center mb-3 mt-2">
                        <button type="submit">Guardar</button>
                    </div>
                </div>
            </form>
          </div>
      </div>
    )
  }
  
export default Modal