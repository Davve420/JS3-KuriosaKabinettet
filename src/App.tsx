import './App.css'
import ProductCard from './components/ProductCard.tsx'
import PromoBanner from './components/PromoBanner.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
      <>
      <PromoBanner message = "1000kr rabatt vid köp över 20 000kr"/>
      <header className="StoreHeader">
        <p className="StoreKicker">Magiska fynd &amp; tveksamma beslut</p>
        <h1>Kuriosakabinettet</h1>
        <p>Handplockade föremål för människor som redan har allt vanligt.</p>
      </header>
      <div className="ProductGrid">
      <ProductCard name = "Trollstav" price = {2000} inStock = " I lager" onSale = {true} /> 
      <ProductCard name = "Råtta" price = {200} inStock = " I lager" onSale = {false} />
      <ProductCard name = "Gammalsko(endast en, inte ett par)" price = {100} inStock = " I lager" onSale = {true} /> 
      <ProductCard name = "Raketgevär" price = {20000} inStock = "inte i lager" onSale = {false} />  
      </div>
      <Footer/>
      </>
  )

}

export default App
