import './index.css'
import Footer from './components/Footer';
import Nav from './components/Nav'
import Home from './pages/Home';
import Books from "./pages/Books";
import BookInfo from './pages/BookInfo';
import { books } from "./data"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [cart, setCart ] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity:1 }])
   
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
       item.id === book.id 
      ? {
          ...item, 
          quantity: +quantity,
        }
        : item
      )
    )
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    console.log('remove item', item)
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item .quantity
    })
    return counter
  }

  useEffect (() => {
    console.log(cart)
   
  }, [cart])


 return (

    <Router>
      <div className="App">
        <Nav  numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
         </Routes>
         <Footer />
      </div>
      </Router>
    
  );
}

export default App;