import { filterForCateg } from "./filters.js"


const initialState = {
  carrito: [],
  productos: [],
  detalles: [],
  filtrado: [],
  // categorias: []
}

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CARGAR_DATOS":
      return {
        ...state,
        productos: payload,
        filtrado: payload
      }
    // case "GET_CATEG":
    //   return {
    //     ...state,
    //     categorias: payload
    //   }

    case "ADD_CARD":
      payload.addCard = true
      return {
        ...state,
        carrito: [...state.carrito, payload]
      }

    case "DELETE_CART":
      return {
        ...state,
        carrito: state.carrito.filter(d => {
          return d.id != payload
        })
      }
    case "GET_PRODUCT_FOR_ID":
      return {
        ...state,
        detalles: state.productos.filter(e => e.id == (+payload))
      }

    case "FILTER_CATEG":
      return {
        ...state,
        filtrado: filterForCateg(state.productos, payload.categ)
      }

    default:
      return state
  }
}

export default Reducer;