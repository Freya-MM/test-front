import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function Modal({setModal}) {
    const [selectedFile, setSelectedFile] = useState('');

    const newCharaSchema = Yup.object().shape({ 
        name: Yup.string()
                .min(3, 'El nombre es muy corto')
                .required('El nombre es obligatorio'), 
        birthday: Yup.date()
                .required('Por favor agregar la fecha de cumpleaños') , 
        eyes_color: Yup.string()
                .min(2, 'El color debe contener más de dos caracteres')
                .required('Dato obligatorio'), 
        hair_color: Yup.string()
                .min(2, 'El color debe contener más de dos caracteres')
                .required('Dato obligatorio'),  
        photo: Yup.mixed()
                .required('Por favor agregar foto')
                .test('fileType', 'Tipo de archivo inválido', function (value) {
                const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
                return !value || (value && SUPPORTED_FORMATS.includes(value.type))
                })
    })

    const handleSubmit = async (values) => {
        values.photo = 'http://hp-api.herokuapp.com/images/'+values.photo.name

        try {
            const url = 'http://localhost:4000/characters'

            const answer = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const result = await answer.json()
            console.log(result)

        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className='modal'>
          <div className="modal-content">
            <div className="modalheader">
                <p className="fw-bold">Agrega un personaje</p>
                <span className="close" onClick={() => setModal(false)}><i className="far fa-times-circle"></i></span>
            </div>

            <Formik
                initialValues={{ name: '', birthday: '', eyes_color: '', hair_color: '', photo: '', house:'Gryffindor', gender: 'Mujer', position: 'Estudiante', status: 'Vivo', favorite: false }}
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                    setModal(false)
                }}
                validationSchema={newCharaSchema}
            >

                {({errors, touched, values, handleChange, setFieldValue}) => {
                    return (
                        <Form>
                            <div className="row">
                                <div className="mt-4 col-12 col-md-6">
                                    <label htmlFor="name" className="form-label text-uppercase">Nombre</label>
                                    <Field type="text" className="form-control" id="name" name="name"/>
                                    {errors.name && touched.name ? (
                                        <div className='error-feedback'>{errors.name}</div>
                                    ) : null }
                                </div>
                                <div className="mt-2 mt-md-4 col-12 col-md-6">
                                    <label htmlFor="birthday" className="form-label text-uppercase">Cumpleaños</label>
                                    <Field type="date" className="form-control" id="birthday" name="birthday"/>
                                    {errors.birthday && touched.birthday ? (
                                        <div className='error-feedback'>{errors.birthday}</div>
                                    ) : null }
                                </div>
                                <div className="mt-2 col-12 col-md-6">
                                    <label htmlFor="eyes_color" className="form-label text-uppercase">Color de ojos</label>
                                    <Field type="text" className="form-control" id="eyes_color" name="eyes_color"/>
                                    {errors.eyes_color && touched.eyes_color ? (
                                        <div className='error-feedback'>{errors.eyes_color}</div>
                                    ) : null }
                                </div>
                                <div className="mt-2 col-12 col-md-6">
                                    <label htmlFor="hair_color" className="form-label text-uppercase">Color de cabello</label>
                                    <Field type="text" className="form-control" id="hair_color" name="hair_color"/>
                                    {errors.hair_color && touched.hair_color ? (
                                        <div className='error-feedback'>{errors.hair_color}</div>
                                    ) : null }
                                </div>
                                <div className="mt-2 col-12 col-md-6">
                                    <label htmlFor="house" className="form-label text-uppercase">Casa de Hogwarts</label>
                                    <select className="form-control" id="house" name="house" value={values.house} onChange={handleChange}>
                                        <option value="Gryffindor">Gryffindor</option>
                                        <option value="Slytherin">Slytherin</option>
                                        <option value="Ravenclaw">Ravenclaw</option>
                                        <option value="Hufflepuff">Hufflepuff</option>
                                    </select>
                                </div>
                                <div className='mt-2 col-12 col-md-6'>
                                    <label htmlFor="status" className="form-label text-uppercase">Status</label>
                                    <select className="form-control" id="status" name="status" value={values.status} onChange={handleChange}>
                                        <option value="Vivo">Vivo</option>
                                        <option value="Finado">Finado</option>
                                    </select>
                                </div>
                                <div className="mt-2 col-12 col-md-6">
                                    <label htmlFor="hair_color" className="form-label text-uppercase">Género</label>
                                    <div className="d-flex">
                                        <div className="form-check col-6">
                                            <Field className="form-check-input" type="radio" name="gender" id="female" value="Mujer" />
                                            <label className="form-check-label" htmlFor="female">
                                                Mujer
                                            </label>
                                        </div>
                                        <div className="form-check col-6">
                                            <Field className="form-check-input" type="radio" name="gender" id="male" value="Hombre"/>
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
                                            <Field className="form-check-input" type="radio" name="position" id="student" value="Estudiante" />
                                            <label className="form-check-label" htmlFor="student">
                                                Estudiante
                                            </label>
                                        </div>
                                        <div className="form-check col-6">
                                            <Field className="form-check-input" type="radio" name="position" id="staff" value="Staff"/>
                                            <label className="form-check-label" htmlFor="staff">
                                                Staff
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-4 col-12">
                                    <label htmlFor="photo" className="form-label text-uppercase">Fotografía</label>
                                    <input className="form-control" type="file" id="photo" name="photo" value={selectedFile} onChange={event => setFieldValue('photo', event.currentTarget.files[0])} />
                                    {errors.photo && touched.photo ? (
                                        <div className='error-feedback'>{errors.photo}</div>
                                    ) : null }
                                </div>
                                <div className="btn-style col-12 d-flex justify-content-center mb-3 mt-2">
                                    <button type="submit">Guardar</button>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>

          </div>
      </div>
    )
  }
  
export default Modal