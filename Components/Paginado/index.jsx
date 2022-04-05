import style from './paginado.module.css'

const Paginado = ({productPerPage, allProduct, paginado}) =>{
    const pageNumber = [];

    for(let i =0; i< Math.ceil(allProduct/productPerPage); i++){
        pageNumber.push(i+1)

    }
 

    return (
        <div >
            <ul className={style.contenedor}>
                {pageNumber &&
                pageNumber.map(number =>(
                            <a className={style.paginado} onClick={()=>paginado(number)} key={number}>{number}</a>
                ))}
            </ul>
        </div>
    )
}

export default Paginado;