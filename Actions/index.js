export const addCard = (payload) =>{
    
    return (dispatch) => {
        try {
            return dispatch({
                 type: "ADD_CARD",
                 payload:payload
                 })
        } catch (error) {
            console.log(error)
        }
    }
}