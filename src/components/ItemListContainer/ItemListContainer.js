import "../ItemListContainer/style.css"


const ItemListContainer = ({greeting}) => {
    return(
        <div className="Center">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer