const initialState = {
    carrito :[]
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CARD":
            return {
                ...state,
                carrito:[...state.carrito, payload]
            }
            
        case "DELETE_CART":
            return {
                ...state,
                carrito: state.carrito.filter(d  =>{
                    return d.id != payload
                } )
            }
            
        default:
            return state
    }
}

export default Reducer;