import { 
    AGREGAR_FAVORITO, 
    ELIMINAR_FAVORITO,
    LISTAR_FAVORITOS_EXITO
} from '../constants/favoritosConstants'

export const agregarFavorito = ( favorito ) => (dispatch, getState) => {
    dispatch({
        type: AGREGAR_FAVORITO,
        payload: favorito
    })

    localStorage.setItem('favoritos', JSON.stringify(getState().favoritos))
}

export const eliminarFavorito = (id) => (dispatch, getState) => {
    dispatch({
        type: ELIMINAR_FAVORITO,
        payload: id
    })
    localStorage.setItem('favoritos', JSON.stringify(getState().favoritos))


}
export const obtenerFavoritos = () => (dispatch, getState) => {
    dispatch({
        type: LISTAR_FAVORITOS_EXITO,
        payload: getState().favoritos
    })

}