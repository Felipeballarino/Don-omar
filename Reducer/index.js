const initialState = []

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CARD":
            return (
                [...state, payload]
            )
        default:
            return state
    }
}

export default Reducer;