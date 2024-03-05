import React from "react";
 import Cart from "./Cart";
import { useState } from "react";
import {items}  from "./items" 
import Home from "./Home";
import { BrowserRouter as Link } from "react-router-dom";










const Header = ({ setshowhome, setcartshow }) => {
  const [show, setshow] = useState(false);
  const [query, setquery] = useState([]);


  const handlesearch = (e) => {
    setquery(e.target.value);
  };


  const filteritems = items.filter((item) => {
    return item.name.toLocaleLowerCase().includes(query);
  });

  console.log(filteritems);
  return (
    <>
      <div className="mainHeader">
        <div className="container">
          
            {" "}
            <div className="logo">
              <h4>
                <span className="green">
                  GREEN{" "}
                </span>
                <span className="kart">KART</span>
              </h4>
            </div>
          
          <div className="input-group  w-25">
            <input
              type="search"
              className="search"
              placeholder="Search for vegetables and fruits"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={query}
              onChange={handlesearch}
            />
            <button className="btn btn-success p-2 searchbtn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="topdeal">
            <a href="*">Top deals</a>
          </div>
          <div className="flight">
            <a href="*">Flight booking</a>
          </div>
          <div className="price">
            <div>Price:0</div>
            <div>Item:0</div>
          </div>
          <div className="shopping-bag">
            <div>
                
               
                <li>
                    <Link to='/checkout' >shopping</Link>
                </li>
               
          
        
             
            </div>
          </div>
        </div>
      </div>
       {/* <Cart show={show} setshow={setshow} /> 
       <Home filteritems={filteritems} />  */}
    </>
  );
};

export default Header;
