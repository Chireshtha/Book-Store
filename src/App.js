import './App.css';
import Header from './Components/Header';
import BookDetails from './Components/BookDetails';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import ShippingCart from './Components/ShippingCart';
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [price, setPrice] = useState(0);
  const [books, setBooks] = useState([]);

  const fetchAvailableBooks = async ()=>{
    try{
      const response = await axios.get("http://127.0.0.1:5000/Books_Details");
      const availableBooks = response.data.filter(book => book.is_available);
      setBooks(availableBooks)
      console.log("Available book loaded", availableBooks)
    }
    catch(error){
      console.log({"message":"Failed to load available books", error})
    }
  }
  useEffect(()=>{
    fetchAvailableBooks();
  },[])

  //Extracting Book Details
  const UniqueList = books.map((currentBook) => {
    console.log(currentBook.title)
    return currentBook;
  })

  //Handle total price
  const handlePrice = () => {
    let res = 0;
    cart.map((item) => {
      return res += item.amount * item.price
    })
    setPrice(res)
  }
  useEffect(() => {
    handlePrice();
  })

  //handle AddtoCart Details
  const handleAddtoCart = (book) => {
    if (!cart.some((cartItem) => cartItem.book_id === book.book_id)) {
      setCart((prevCart) => [...prevCart, book]);
      setWarning(false)
    }
    else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000)
    }
  };

  //Removing AddtoCart Items
  const handleRemove = (book_id) => {
    setCart(cart.filter(item =>
      item.book_id !== book_id
    ))
  }




  return (
    <BrowserRouter>
      <Header size={cart.length} warning={warning} />

      <Routes>
        <Route path='/' element={<Home handleAddtoCart={handleAddtoCart} books = {books} />} />
        <Route path='/BookDetails/:book_id' element={<BookDetails Books={UniqueList} handleAddtoCart={handleAddtoCart} />} />
        <Route path='/ShoppingCart' element={<ShoppingCart cart={cart} setCart={setCart} price = {price} handleRemove = {handleRemove} />} />
        <Route path='/ShippingCart' element={<ShippingCart cart = {cart} setCart={setCart} price = {price} handleRemove= {handleRemove}/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
