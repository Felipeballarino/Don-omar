const initialState = {
  carrito: [],
  productos: [{
    id: 1,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  },
  {
    id: 2,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  },
  {
    id: 3,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  },
  {
    id: 4,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  },
  {
    id: 5,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  },
  {
    id: 6,
    img: "/media/Photo.jpg",
    nombre: "NOMBRE DEL CORTE",
    precio: '1500',
    count: 1,
    addCard: false
  }],
  detalles: []
}

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CARD":
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
        detalles: state.productos.filter(e =>e.id  ==(+payload))
      }

    default:
      return state
  }
}

export default Reducer;