import "./ProductCard.css"
import SaleTag from "./SaleTag.tsx"
import { useState } from "react"

interface ProductCard {
    name:string,
    price:number,
    inStock: " I lager" | "inte i lager",
    onSale:boolean
}

function ProductCard({name, price, inStock, onSale}:ProductCard){
    const [clickCount, setClickCount] = useState(0)

    function handleAddToCart(){
        console.log(name)
        setClickCount(currentCount => currentCount + 1)
    }

    return(
        <div className="ProductCard">
        {onSale && <SaleTag />}
        <h3>{name}</h3>
        <h6>{price}kr</h6>
        <p>{inStock}</p>
        <button onClick={handleAddToCart}>Lägg i varukorg</button>
        <span className="ProductCard__clickCount">Klickad: {clickCount} gånger</span>
        </div>
    )
}

export default ProductCard