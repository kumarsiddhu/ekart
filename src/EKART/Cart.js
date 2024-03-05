import React, { useState } from "react";
import Header from "./Home";
import CheckoutPage from "./CheckoutPage";
import {BrowserRouter as Link ,Routes,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Home from "./Home";
 

const Cart = ({show,setshow,fruits}) => {

 
  const [cartfruit, setCartfruit] = useState(fruits );
  const[cartshow,setcartshow]=useState(false)
  const[showhome,setshowhome]=useState(true)

  const handleDelete = (id) => {
    alert("Are you sure");
    const updatedlist = cartfruit.filter((item) => {
      return item.id !== id;
    });
    // console.log(updatedlist)

    setCartfruit(updatedlist);
    
  };
  const handleshow = ()=>{
    // navigate('cart')
    setcartshow(true) 
    setshow(false) 
    setshowhome(false)
  }
  // console.log(fruit);
  return (
    <>  
    {
        show ? <div className="cart-container">
        {cartfruit.length === 0 ? (
          cartfruit.map((item) => (
            <div className="cartcard1">
              <div className="cartimg">
                <img src={item.image} alt="" />
              </div>
              <div className="cartNames">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <div onClick={() => handleDelete(item.id)} className="delete">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="emptypage">
    
            <img className="empty-img" src="../images/empty bag.webp" alt="" />
            <p className="cart">{"Your cart is Empty"}</p>
          </div>
        )}
        <button className="proceed-btn"
          
      onClick={handleshow}>Proceed to checkout</button>
    
      </div>:""
    }
  <Home showhome={showhome} />
 
  <CheckoutPage cartshow={cartshow}/>
    </>
  );
};

export default Cart;
