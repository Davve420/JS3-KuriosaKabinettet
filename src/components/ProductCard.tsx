import "./ProductCard.css"
import SaleTag from "./SaleTag.tsx"

interface ProductCard {
    name:string,
    price:number,
    inStock: " I lager" | "inte i lager",
    onSale:boolean
}

function ProductCard({name, price, inStock, onSale}:ProductCard){
    return(
        <div className="ProductCard">
        {onSale && <SaleTag />}
        <h3>{name}</h3>
        <h6>{price}kr</h6>
        <p>{inStock}</p>
        </div>
    )
}

export default ProductCard