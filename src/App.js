import './App.css';
import {Navbar} from './components/Navbar'
import ProductList from './components/ProductList';
import {Cart} from './components/Cart'
import data from './data';
import { useEffect, useState } from 'react';
function App() {
  const [products,setProducts] = useState([...data]);
  const [keyword,setKeyword] = useState("");
  const [cartItem,setCartItem] = useState([])
  useEffect(() => {
    let result = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
    setProducts(result);
  },[keyword]);
  const addCart = (id) => {
    let item = data.find(product => product.id===id)
    setCartItem((items)=> {
      console.log(items, "items");
      const findItem = items.findIndex(existItem => existItem.id === id);
      if(findItem === -1){
        return  [
          ...items,{
            ...item,
            quantity : 1 
          
          }]
      }else{
        return items.map(currentItem => currentItem.id===id ? ({
              ...item,
              quantity : parseInt(currentItem.quantity) + 1 
        }):currentItem)
        
      }
    })
  }

  const removeCart = (id) => {
    setCartItem((items)=> items.filter(item => item.id !== id));
  }

  const clearCart = () => {
    const result = window.confirm("Are you sure to clear the carts?");
    if(result===true){
      setCartItem([]);
    }
  }
  return (
    <div className="App">
      <Navbar setKeyword={setKeyword}/>
      <ProductList products = {products} keyword = {keyword} addCart={addCart} />
      <Cart cartItem={cartItem} removeCart={removeCart} clearCart={clearCart} />
    </div>
  );
}

export default App;
