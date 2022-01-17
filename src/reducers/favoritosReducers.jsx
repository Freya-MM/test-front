import { 
    AGREGAR_FAVORITO, 
    ELIMINAR_FAVORITO, 
    LISTAR_FAVORITOS_EXITO
} from '../constants/favoritosConstants'

export const favoritosReducer = ( state = { favoritos: [] }, action) => {
    switch( action.type ) {
        case AGREGAR_FAVORITO: 
    
            return {
                ...state,
                favoritos: [...state.favoritos, action.payload]
            }
        case ELIMINAR_FAVORITO: 
            return {
                ...state,
                favoritos: state.favoritos.filter( favorito => favorito.id !== action.payload)  
            }
        case LISTAR_FAVORITOS_EXITO: 
            return {
                ...state,
                favoritos: action.payload
            }
        default:
            return state
    }
}