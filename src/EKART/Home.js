

// import React, {  useState } from "react";
// import Cart from "./Cart";
// import { fruitsData } from "./fruitsData";


// function DisplayData() {
//   const [count, setCount] = useState(fruitsData.map(() => 1));
//   const[fruits,setFruits]=useState([])
//   const [cart, setCart] = useState(fruitsData.map(() => false));

  
 

 
//   const handleincrement = (index) => {
//     setCount((prevcount)=>{
//       const newcount=[...prevcount]
//       newcount[index]+= 1;
     
//       return newcount
//     })
   
//   };

 

 
//   const handleDecrement = (index) => {
//     setCount((prevcount)=>{
//       const newcount=[...prevcount]
//     newcount[index]=Math.max(1,newcount[index]-1) 
//       return newcount;
//     })
//   };

// // add to cart function

  

//   const handleCart=(id,index)=>{
// const filterdata=fruitsData.filter((item)=>{
//   // setCartdata(true)
// return item.id===id

// })
// setFruits([...fruits,filterdata])
// console.log(fruits)
// //cart items setup
// setCart((previtems)=>{
//   const newcart=[...previtems]
//   newcart[index]=true
//   return newcart
// })
// // console.log(eachItem)
//   }

//   return (
//     <div className="display">
//       {fruitsData.map((eachItem, index) => {
//         return (
//           <div>
//             <div key={eachItem.id} className="card">
//               <img src={eachItem.image} alt={eachItem.product} />
//               <div className="card-body">
//                 <h6>{eachItem.product} - 1 Kg</h6>
//                 <h5>&#8377; {eachItem.price}</h5>
//                 <div className="quantityChange">
//                   <button className="decbtn" onClick={()=>handleDecrement(index)}>
//                     -
//                   </button>
//                   <button className="mx-2 quntity">{count[index]}</button>
//                   <button className="incbtn" onClick={()=>handleincrement(index)}>
//                     +
//                   </button>
//                 </div>
//                 <button className="cartbutton" onClick={()=>handleCart(eachItem.id,index) }  > {cart[index] ? "Added" : "Add to cart"}</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     <Cart fruits={fruits}/>
//     </div>
//   );
// }

// export default DisplayData;




import React, { useState } from "react";

// import CheckoutPage from "./CheckoutPage";
import Cart from "./Cart";
import { items } from "./items";

// import Header from "./Header";

const Home = ({setshow,showhome,filteritems}) => {
  const [count, setCount] = useState(items.map(() => 1));
  const [cartItem, setcartItem] = useState([]);
  const [addtocart, setAddedToCart] = useState(items.map(() => false));


  const handleDecrement = (index) => {
    setCount((prevcount) => {
      const newCount = [...prevcount];
      newCount[index] = Math.max(0, newCount[index] - 1);
      return newCount;
    });
  };

  const handleIncrement = (index) => {
    setCount((prevcount) => {
      const newCount = [...prevcount];
      newCount[index] += 1;
      return newCount;
    });
    // setCount(count + 1);
  };
  const handleCart = (id,index) => {
    const filterdata = items.filter((item) => {
     
      return item.id === id;
    });
    setcartItem([...cartItem, filterdata]);

    setAddedToCart((prevAddedToCart) => {
      const newAddedToCart = [...prevAddedToCart];
      newAddedToCart[index] = true;
      return newAddedToCart;
    });
  };
console.log(cartItem)
console.log(setshow)
  return (
    <>
      <div className="wrapper">
        { showhome&&items.map((item, index) => (
          <div className="card" key={index}>
            <img className="cardimg" src={item.image} alt="" />

            <h6>
              {item.name}-{item.quantity}
            </h6>

            <h6> &#8377;{item.price}</h6>
            <div className="amount">
              <button
                className="decrease"
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <button className="count">{count[index]}</button>

              <button
                className="increase"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-success addbtn"
              onClick={() => handleCart(item.id,index)}
            >
             {addtocart[index] ? <p className="addedbtn">{"added"}</p>  :"Add to cart"}
            </button>
          </div>
        ))}
      </div>
       <Cart cartItem={cartItem}/>  
    </>
  );
};

export default Home;
