import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Styles/BookDetails.css'

const BookDetails = ({ Books, handleAddtoCart }) => {
  const {bookId} = useParams();
  const [currentBookDetail, setCurrentBookDetail] = useState(null)

  useEffect(() => {
    if (Books && Books.length > 0) {
      const bookFound = Books.find((book) =>
        book.bookId === parseInt(bookId));

      if (bookFound) {
        setCurrentBookDetail(bookFound);
      }
    }
  }, [bookId, Books])
  return (
    <div className='book-details-container'>
      {currentBookDetail ? (
          <div>
            <div className='row' style={{marginTop:'30px', marginLeft:'30px'}}>
              <img src={currentBookDetail.ImageUrl} className='img-fluid' alt={currentBookDetail.bookTitle} />
              <div className='col-md-8'>
                <h1>{currentBookDetail.bookTitle}</h1>
                <h3>Author: {currentBookDetail.Author}</h3>
                <p>{currentBookDetail.description}</p>

                <div className='price-details'>
                  <span className="card-link" style={{ fontWeight: 'bold', marginRight: '5px' }}>₹{currentBookDetail.price}</span>
                  <span className='original-price' style={{ textDecoration: 'line-through', color: 'red', marginRight: '5px' }}>₹{currentBookDetail.originalPrice}</span>
                  <span className='discount' style={{ color: 'green' }}>(-{currentBookDetail.discountPercentage}%)</span>
                </div>
                <button className='btn btn-danger add-to-cart-btn' onClick={()=>handleAddtoCart(currentBookDetail)}>Add to Cart</button>
                <Link to='/ShippingCart'><button className='btn btn-success buy-now-btn'>Buy Now</button></Link>
              </div>
            </div>
          </div>
      ) : (
        <p className='book-not-found'>Book Details Not Found</p>
      )}

    </div>
  )
}

export default BookDetails
