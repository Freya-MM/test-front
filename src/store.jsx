import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { favoritosReducer } from './reducers/favoritosReducers'

const reducer = combineReducers({
    favoritos: favoritosReducer
})

const middleware = [thunk]

const favoritosStorage = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : []

const initialState = {
    favoritos: favoritosStorage
}

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store 