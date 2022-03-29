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


export const deleteCart = (payload) =>{
    return (dispatch) =>{
        try {
            return dispatch ({
                type:"DELETE_CART",
                payload:payload
            })      
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProductForId = (payload)=>{
    return (dispatch)=>{
        try{
            return dispatch ({
                type:"GET_PRODUCT_FOR_ID",
                payload:payload
            }) 
        }catch(error){
            console.log(error)
            
        }
    }

}