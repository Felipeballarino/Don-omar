import json from './productos.json'
import axios from 'axios'

export const consumirJSON = () => {
    return (dispatch) => {
        try {
            axios.get('http://localhost:3000/api/hello')
                .then(response => response.data)
                .then(response => dispatch({
                    type: "CARGAR_DATOS",
                    payload: response
                }))
        } catch (error) {
            console.log(error)
        }
    }
    // try {
    //     return dispatch({
    //         type: "CARGAR_DATOS",
    //         payload: json
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    //}
}

export const addCard = (payload) => {
    return (dispatch) => {
        try {
            return dispatch({
                type: "ADD_CARD",
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteCart = (payload) => {
    return (dispatch) => {
        try {
            return dispatch({
                type: "DELETE_CART",
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProductForId = (payload) => {
    return (dispatch) => {
        try {
            return dispatch({
                type: "GET_PRODUCT_FOR_ID",
                payload: payload
            })
        } catch (error) {
            console.log(error)

        }
    }
}
// export const getCateg = () => {
//     return (dispatch) => {
//         try {
//             axios.get('http://carnesdelcentroapi.neosolutions.com.ar/categorias/list')
//                 .then(response => console.log(response))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
export const filterCateg = (categ) => {
    const payload = { categ }
    return (dispatch) => {
        try {
            return dispatch({
                type: "FILTER_CATEG",
                payload: payload
            })
        } catch (error) {
            console.log(error)

        }
    }
}


