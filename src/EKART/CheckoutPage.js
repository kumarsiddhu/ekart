import React from "react";

const fruit = [
  {
    id: 1,
    image: "../images/almonds.jpg",
    name: "Almonds",
    price: 850,
    quantity: "1",
  },
  {
    id: 2,
    image: "../images/beans.jpg",
    name: "Beans",
    price: 850,
    quantity: "1",
  },
  {
    id: 3,
    image: "../images/beans.jpg",
    name: "Beans",
    price: 850,
    quantity: "1",
  },
];

const CheckoutPage = ({ cartshow }) => {
  const totalAmount = fruit.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="table">
      {cartshow ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {fruit.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <img src={item.image} width={"50px"} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}kg</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="promoWrapper">
            <input
              type="text"
              className="promoCode"
              placeholder="Enter promo code"
            />
            &nbsp;&nbsp;
            <button className="promoBtn">Apply</button>
            <br />
            <span className="promoInfo" style={{ color: "red" }}>
              Empty code ..!
            </span>
          </div>
          <div
            style={{
              textAlign: "right",
              width: "100%",
              marginTop: "20px",
              marginRight: "10px",
            }}
          >
            <b>No. of Items : </b>
            {/* {fruit.length} */}
            <br />
            <b>Total Amount : </b>
            <span className="totAmt">{totalAmount}</span>
            <br />
            <b>Discount : </b>
            <span className="discountPerc">0%</span>
            <br />
            <b>Total After Discount : </b>
            <span className="discountAmt">228</span>
            <br />
            <br />
            <button>Place Order</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckoutPage;

// import React from "react";

// const fruit = [
//   {
//     id: 1,
//     image: "../images/almonds.jpg",
//     name: "Almonds",
//     price: 850,
//     quantity: "1",
//   },
//   {
//     id: 2,
//     image: "../images/beans.jpg",
//     name: "Beans",
//     price: 850,
//     quantity: "1",
//   },
//   {
//     id: 3,
//     image: "../images/beans.jpg",
//     name: "Beans",
//     price: 850,
//     quantity: "1",
//   },
// ];

// const CheckoutPage = ({ cartshow }) => {
//   return (
//     <div className="table">
//       {cartshow && (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Product Image</th>
//               <th scope="col">Product Name</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Price</th>
//               <th scope="col">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {fruit.map((item, index) => (
//               <tr key={index}>
//                 <th scope="row">{item.id}</th>
//                 <td>
//                   <img src={item.image} width={"50px"} alt="" />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.quantity}kg</td>
//                 <td>{item.price}</td>
//                 <td>{item.quantity * item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <div class="promoWrapper">
//         <input type="text" class="promoCode" placeholder="Enter promo code" />
//         &nbsp;&nbsp;
//         <button class="promoBtn">Apply</button>
//         <br />
//         <span class="promoInfo" style={{ color: "red" }}>
//           Empty code ..!
//         </span>
//       </div>
//       <div
//         style={{
//           textAlign: "right",
//           width: "100%",
//           marginTop: "20px",
//           marginRight: "10px",
//         }}
//       >
//         <b>No. of Items : </b>{fruit.length}<br />
//         <b>Total Amount : </b>

//         <span class="totAmt">

//         </span>
//         <br />
//         <b>Discount : </b>
//         <span class="discountPerc">0%</span>
//         <br />
//         <b>Total After Discount : </b>
//         <span class="discountAmt">228</span>
//         <br />
//         <br />
//         <button>Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// // import React from 'react'
// // const fruit = [
// //     {
// //       id: 1,
// //       image: "../images/almonds.jpg",
// //       name: "Almonds",
// //       price: 850,
// //       quantity: "1",
// //     },
// //     {
// //       id: 2,
// //       image: "../images/beans.jpg",
// //       name: "Beans",
// //       price: 850,
// //       quantity: "1",
// //     },
// //   ];
// // const CheckoutPage = ({cartshow}) => {

// //   return (

// //     <div className='table'>
// //         <table class="table">
// //   <thead>
// //     <tr>
// //       <th scope="col">Id</th>
// //       <th scope="col">Product Image</th>
// //       <th scope="col">Product Name</th>
// //       <th scope="col">Quantity</th>
// //       <th scope="col">Price</th>
// //       <th scope="col">Total</th>
// //     </tr>
// //   </thead>

// //        {cartshow&&fruit.map((item)=>{
// //       <tbody>
// //       return(

// //     <tr key={id}>
// //       <th scope="row">1</th>
// //       <td>{item.image}</td>
// //       <td>{item.name}</td>
// //       <td>{item.quantity}kg</td>
// //       <td>{item.price}</td>
// //       <td>{item.quantity*item.price}</td>
// //     </tr>
// //     <tr>
// //       <th scope="row">2</th>
// //       <td>Jacob</td>
// //       <td>Thornton</td>
// //       <td>@fat</td>
// //     </tr>
// //     <tr>
// //       <th scope="row">3</th>
// //       <td>Larry</td>
// //       <td>the Bird</td>
// //       <td>@twitter</td>
// //     </tr>
// //   </tbody>
// // </table>
// //         )

// //        })}

// //     </div>
// //   )
// // }

// // export default CheckoutPage
