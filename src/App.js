import './App.css';
import { useState, useEffect } from "react";
import {BsArrowBarRight} from 'react-icons/bs'
import {BsCartDashFill} from 'react-icons/bs'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        const finalData=result.products.map((each)=>({
          brand:each.brand,
          category:each.category,
          description:each.description,
          discountPercentage:each.discountPercentage,
          id:each.id,
          images:each.images,
          price:each.price,
          rating:each.rating,
          stock:each.stock,
          thumbnail:each.thumbnail,
          title:each.title,
      }))
        setData(finalData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
    <div>
      <nav className="navbar">
        <h1>E-Buy</h1>
        <div className="navbar-center">
          <button className="nav-item">Home</button>
          <button className="nav-item">Products</button>
          <button className="nav-item">Contact</button>
        </div>
        <div className="navbar-center">
          <button className="nav-item">Login  <BsArrowBarRight className='navicon'/></button>
          <button className="nav-item">Cart  <BsCartDashFill className='navicon'/></button>
        </div>
      </nav>
      <div>
        <img src="/img1.png" alt="img" />
      </div>
      <div className='bottom-section1'>
        <h1>Products</h1>
      </div>
      <div className='bottomsection2'>
          <div>
          {data.map((each, index) => (
            <div key={index} className='bottomsection3'>
              <div >
                    <img src={each.thumbnail} alt={`image${index}`} className='bottomimage' />
              </div>
              <div className='sec'>
                    <p>{each.title}</p>
                    <p>${each.price}</p>
                    <button className='bottomcontainerbutton'>View</button>            
              </div>            
            </div>
            
          ))}
          </div>
        
        </div>
    </div>
    </Router>
  )
}
  

export default App;