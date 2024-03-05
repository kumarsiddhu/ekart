import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const MyComponent = () => {
  // Define table data
  const tableData = [
    { name: 'Wheat', price: 67, discountPrice: 28 },
    { name: 'Tomato', price: 37, discountPrice: 26 },
    { name: 'Strawberry', price: 23, discountPrice: 15 },
    { name: 'Rice', price: 37, discountPrice: 46 },
    { name: 'Potato', price: 34, discountPrice: 22 },
	{ name: 'W', price: 67, discountPrice: 28 },
    { name: 'T', price: 37, discountPrice: 26 },
    { name: 'S', price: 23, discountPrice: 15 },
    { name: 'R', price: 37, discountPrice: 46 },
    { name: 'P', price: 34, discountPrice: 22 },
	{ name: 'Wh', price: 67, discountPrice: 28 },
    { name: 'Tom', price: 37, discountPrice: 26 },
    { name: 'Str', price: 23, discountPrice: 15 },
    { name: 'Ric', price: 37, discountPrice: 46 },
    { name: 'Pot', price: 34, discountPrice: 22 },
	

  ];

  // State variables
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle page size change
  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value));
  };

  // Function to handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Function to handle pagination
  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  // Filter data based on search term
  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Calculate starting and ending indexes for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);

  // Generate table rows
  const tableRows = filteredData.slice(startIndex, endIndex).map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.discountPrice}</td>
    </tr>
  ));

  // Generate pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <li key={i} className={currentPage === i ? 'active' : ''}>
        <a href="#" role="button" tabIndex="0" onClick={() => handlePagination(i)}>
          {i}
        </a>
      </li>
    );
  }



  // const [day, setDay] = useState(27);
  // const [month, setMonth] = useState(2);
  // const [year, setYear] = useState(2024);
  // const [showCalendar, setShowCalendar] = useState(false);

  // const handleCancel = () => {
  //   // Reset input fields to original values
  //   setDay(27);
  //   setMonth(2);
  //   setYear(2024);
  //   setShowCalendar(false); // Hide the calendar when cancel is clicked
  // };

  // const handleInputChange = (e) => {
  //   // Update the corresponding state based on the input name
  //   switch (e.target.name) {
  //     case 'day':
  //       setDay(parseInt(e.target.value));
  //       break;
  //     case 'month':
  //       setMonth(parseInt(e.target.value));
  //       break;
  //     case 'year':
  //       setYear(parseInt(e.target.value));
  //       break;
  //     default:
  //       break;
  //   }
  // };



















  return (
    <div id="root">
      
      <header>
        <div className="container">
          <div className="brand greenLogo">
            GREEN<span className="redLogo">KART</span>
          </div>
        </div>
      </header>

      <div className="products-wrapper">
        <div className="products">
          <div className="wrapperTwo">
            <div className="tableWrapper">
              <div className="container">
                <div className="row">
                  <div className="col-xs-4">
                    <div>
                      <label htmlFor="page-menu">Page size:</label>
                      <select id="page-menu" onChange={handlePageSizeChange} value={pageSize}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="search-field">Search:</label>
                      <input
                        id="search-field"
                        type="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
               




              <div class="col-xs-8">
		     
         <ul class="pagination pull-right" aria-label="Pagination">
  <li class={currentPage === 1 ? "disabled" : ""}>
    <a
      role="button"
      href="#"
      tabIndex="0"
      aria-disabled={currentPage === 1 ? "true" : "false"}
      aria-label="First"
      onClick={() => handlePagination(1)}
    >
      First<span class="fa fa-angle-double-left" aria-hidden="true"></span>
    </a>
  </li>
  <li class={currentPage === 1 ? "disabled" : ""}>
    <a
      role="button"
      href="#"
      tabIndex="0"
      aria-disabled={currentPage === 1 ? "true" : "false"}
      aria-label="Previous"
      onClick={() => handlePagination(currentPage - 1)}
    >
      Previous<span class="fa fa-angle-left" aria-hidden="true"></span>
    </a>
  </li>
  {paginationButtons}
  <li class={currentPage === totalPages ? "disabled" : ""}>
    <a
      role="button"
      href="#"
      tabIndex="0"
      aria-disabled={currentPage === totalPages ? "true" : "false"}
      aria-label="Next"
      onClick={() => handlePagination(currentPage + 1)}
    >
      Next<span class="fa fa-angle-right" aria-hidden="true"></span>
    </a>
  </li>
  <li class={currentPage === totalPages ? "disabled" : ""}>
    <a
      role="button"
      href="#"
      tabIndex="0"
      aria-disabled={currentPage === totalPages ? "true" : "false"}
      aria-label="Last"
      onClick={() => handlePagination(totalPages)}
    >
      Last<span class="fa fa-angle-double-right" aria-hidden="true"></span>
    </a>
  </li>
</ul>

				  </div>
				  </div>

          </div>
         </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Veg/fruit name</th>
                    <th>Price</th>
                    <th>Discount price</th>
                  </tr>
                </thead>
                <tbody>{tableRows}</tbody>
              </table>
            </div>
          </div>
           
         
          </div>


    <div className="date-field-container">
      <label htmlFor="deliveryDate">Delivery Date</label>
      <div className="react-date-picker react-date-picker--closed react-date-picker--enabled">
        <div className="react-date-picker__wrapper">
          <div className="react-date-picker__inputGroup">
            {/* <input   type='date' /> */}
            <input
             
              max="275760-09-13"
              min="0001-01-01"
              name="date"
              type='date'
              value="2024-02-27"
              style={{ visibility: "hidden", position: "absolute", zIndex: -999 }}
            />
          
            <span className="react-date-picker__inputGroup__leadingZero">0</span>
            <input
              autoComplete="off"
              className="react-date-picker__inputGroup__input react-date-picker__inputGroup__month react-date-picker__inputGroup__input--hasLeadingZero"
              data-input="true"
              inputMode="numeric"
              max="12"
              min="1"
              name="month"
              placeholder="--"
              type="number"
              value="2"
              style={{ width: "9px" }}
            />
            <span className="react-date-picker__inputGroup__divider"> / </span>
            <input
              autoComplete="off"
              className="react-date-picker__inputGroup__input react-date-picker__inputGroup__day"
              data-input="true"
              inputMode="numeric"
              max="29"
              min="1"
              name="day"
              placeholder="--"
              type="number"
              value="27"
              style={{ width: "18px" }}
            />
            <span className="react-date-picker__inputGroup__divider"> / </span>
            <input
              autoComplete="off"
              className="react-date-picker__inputGroup__input react-date-picker__inputGroup__year"
              data-input="true"
              inputMode="numeric"
              max="275760"
              min="1"
              name="year"
              placeholder="----"
              step="1"
              type="number"
              value="2024"
              style={{ width: "36px" }}
            />
          </div>
          <button className="react-date-picker__clear-button react-date-picker__button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" stroke="black" strokeWidth="2" className="react-date-picker__clear-button__icon react-date-picker__button__icon">
              <line x1="4" x2="15" y1="4" y2="15"></line>
              <line x1="15" x2="4" y1="4" y2="15"></line>
            </svg>
          </button>
          <button className="react-date-picker__calendar-button react-date-picker__button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" stroke="black" strokeWidth="2" className="react-date-picker__calendar-button__icon react-date-picker__button__icon">
              <rect fill="none" height="15" width="15" x="2" y="2"></rect>
              <line x1="6" x2="6" y1="0" y2="4"></line>
              <line x1="13" x2="13" y1="0" y2="4"></line>
            </svg>
          </button>
        </div>
      </div>
    
 

     
























        </div>
     </div>
     
   












   
  );
};

export default MyComponent;

 
