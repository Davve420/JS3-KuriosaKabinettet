import "./PromoBanner.css"

interface PromoMessage {
    message:string
}

function PromoBanner({message}:PromoMessage){
    return (
    <div className="PromoBanner">
        <h3>{message}</h3>
    </div>
    )
}

export default PromoBanner