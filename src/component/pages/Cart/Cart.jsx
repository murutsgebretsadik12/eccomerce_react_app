import React, { useContext } from 'react'
import { DataContext } from '../../Dataprovider/DataProvider'
import ProductCard from '../../Product/ProductCard'
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import '../../../styles/cart.css'

const Cart = () => {

      const [{basket}, user] = useContext(DataContext)

      const total1 = basket.reduce((amount, item) =>{
        return item.price * item.amount + amount
      }, 0)
      console.log(basket)

  return (
    <>
     <section className='container'>
        <div className='cart__container'>
           <h3>Your shopping basket</h3>
            <hr/>

          {
            basket?.length === 0 ? (
              <p>Oops! No item in your cart</p>
            ) : (
              basket?.map((item, index) => {
                return (
                  <ProductCard key={index} product={item} renderDesc={true} flex={true}  renderAdd={false} />
                );
              })
            )
          }



              {basket?.length !==0 && (
                <div className="subtotal">
                  <div>
                    <p>Subtotal ({basket?.length}items)</p>
                    <CurrencyFormat amount={total1} /> 
                  </div>
                  <span>
                    <input type="checkbox" />
                    <small>This order contains a gift</small>
                  </span>
                  <Link to="/payment">Continue to checkout </Link>
                </div>
              )}

        </div>
     </section>
    </>
    
  )
}

export default Cart