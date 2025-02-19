import { FaTrash } from 'react-icons/fa'
import '../Styles/ShoppingCart.css'
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cart, setCart, price, handleRemove }) => {
  

  const incrementCount = (book_id) => {
    setCart(cart.map(item =>
      item.book_id === book_id ? { ...item, amount: item.amount + 1 } : item

    ))
  }
  const decrementCount = (book_id) =>
    setCart(cart.map(item =>
      item.book_id === book_id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
    ))





  return (
    <article>
      <h1 className='heading'>Shopping Cart Details</h1>
      {
        cart?.map((item) => (
          <div className='cart-items' key={item.book_id}>
            <div className='cart-item'>
              <span className='book-id'> {item.book_id} </span>
              <img src={item.image_url} alt='Loading' />
              <span className='book-title'>{item.title}</span>
            </div>

            <div className='addsub_item'>
              <button className='btn btn-success' onClick={() => { incrementCount(item.book_id) }}> + </button>
              <button className='btn btn-warning'> {item.amount} </button>
              <button className='btn btn-danger' onClick={() => { decrementCount(item.book_id) }}> - </button>
            </div>

            <div className='price'>
              <span> {item.price} </span>
              <button className='fa fa-trash' onClick={() => { handleRemove(item.book_id) }}> <i><FaTrash /></i> </button>
            </div>
          </div>
        ))
      }
      <br /><hr />
      <div className='total'>
        <span className='total-price'> Total Price of Your Cart: INR ₹{price}</span><br/>
        <Link to='/ShippingCart'>
        <button className='btn btn-warning'>Buy Now</button>
        </Link>
      </div>
      
    </article>
  )
}

export default ShoppingCart
