import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import BookStore from '../Images/slide1.avif' 

const Home = ({ handleAddtoCart, books}) => {
  


  return (
    <div>
      <div className='Image'>
    <img src={BookStore} alt='loading'/>
    <h1 className='s-1'>Book Store</h1>
    <p className='s-2'>The easy way to access your favorite book</p>
  </div>
    <div className='container' style={{ maxWidth: '100%' }}>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div className="card mb-3" style={{ maxWidth: '450px', maxHeight: '240px' }} key={book.book_id}>
            <div className="row g-0">
              <div className="col-md-5">
                <Link to={`/BookDetails/${book.book_id}`} ><img src={book.image_url} className="img-fluid rounded-start" alt="loading..." style={{ width: '150px', height: '180px' }} /></Link>
                <Link to={`/BookDetails/${book.book_id}`} className='text-decoration-none'><div className='price'>
                  <span className="card-link" style={{ fontWeight: 'bold', marginRight: '5px' }}>₹{book.price}</span>
                  <span className='original-price' style={{ textDecoration: 'line-through', color: 'red', marginRight: '5px' }}>₹{book.original_price}</span>
                  <span className='discount' style={{ color: 'green' }}>(-{book.discount_percentage}%)</span>
                </div></Link>
              </div>
              <div className="col-md-7">
                <Link to={`/BookDetails/${book.book_id}`} className='text-decoration-none' >
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                </div>
                </Link>
                <div className="card-body">
                  <button className="btn btn-danger" onClick={()=>handleAddtoCart(book)}>Add to Cart</button>
                  <Link to='/ShippingCart'><button className="btn btn-warning">Buy Now</button></Link>
                </div>

              </div>
            </div>

          </div>
        ))
      ) : (
        <p>No Books Available</p>
      )}
    </div>
    </div>
  )
}

export default Home
