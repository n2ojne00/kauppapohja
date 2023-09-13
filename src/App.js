
import './App.css';
import {FaShoppingCart} from 'react-icons/fa'
import {useState} from 'react';



function App() {
  const [cart,setCart] = useState([])

  const [products, setProducts] = useState([
    {name: "Jacket", price: 100},
    {name: "Pänts", price: 140}, 
    {name: "Hattu", price: 90} 
  ])

  const buy = (e, index) => {
    e.preventDefault()
    const product = products[index]
    setCart([...cart,product])
  }

  return (
   <div id="container">
    <h2>TOSI ÄIÄN VAATEKAUPPA</h2>
    <p><FaShoppingCart/>{cart.length} tuote</p>
   
   {
    products.map((product,index) =>(
      <div key={index}>
        <form onSubmit={(e)=> buy(e,index)}>        
        <h3>{product.name}</h3>
        <p>{product.price} €</p>
        <button>BUY</button>
        </form>
      </div>
    ))
   }
   
   </div>



  );
}

export default App;
