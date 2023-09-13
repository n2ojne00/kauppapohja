
import './App.css';
import {FaShoppingCart} from 'react-icons/fa'
import {useEffect, useState} from 'react';



function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {
    const shoppingList = Array();
    shoppingList.push(new Item('Coffee',1));
    shoppingList.push(new Item('Cookies',2));
    shoppingList.push(new Item('Chocolate',4));
    setItems(shoppingList);
  }, [])


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

<div id="shoplist">
    <h2>Lista</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>

   </div>


   </div>
   
  );
}

export default App;
