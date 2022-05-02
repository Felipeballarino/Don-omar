import style from './paginado.module.css'

const Paginado = ({productPerPage, allProduct, paginado, current}) =>{
    const pageNumber = [];

    for(let i =0; i< Math.ceil(allProduct/productPerPage); i++){
        pageNumber.push(i+1)

    }
 

    return (
        <div >
            <ul className={style.contenedor}>
                {pageNumber &&
                pageNumber.map(number =>(
                    <div className={number == current ? style.activo : style.paginado} key={number}>
                        <a  onClick={()=>paginado(number)} key={number}>{number}</a>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Paginado;