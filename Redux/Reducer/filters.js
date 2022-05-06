export const filterForCateg = (productos, categ) => {
    if(categ == "Todas"){
        return productos
    }
    const orderProduct = productos.filter(e =>  {
       return e.categoria == categ}
    
    )
    return orderProduct
}