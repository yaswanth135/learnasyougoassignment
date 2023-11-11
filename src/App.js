import './App.css';
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h1>E-Buy</h1>
        <div className="navbar-center">
          <div className="nav-item">Home</div>
          <div className="nav-item">Products</div>
          <div className="nav-item">Contact</div>
        </div>
        <div className="navbar-right">
          <p>Login</p>
          <p>Cart</p>
        </div>
      </nav>
      <div>
        <img src="/img1.png" alt="img" />
      </div>
      <div className='bottom-section1'>
        <h1>Products</h1>
      </div>
        {
          <div className='main-container'>
            <div className='main'>
              <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>iPhone 9</p>
              <p className='para'>$549</p>
              <button className='button'>View</button>
            </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>iPhone X</p>
              <p className='para'>$899</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/3/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Samsung Univ</p>
              <p className='para'>$1249</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/4/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>OPPOF19</p>
              <p className='para'>$280</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Huawei P30</p>
              <p className='para'>$499</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/6/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>MacBook Pro</p>
              <p className='para'>$1749</p>
              <button className='button'>View</button>
              </div>


              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/7/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Samsung Gala</p>
              <p className='para'>$1499</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/8/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Microsoft Su</p>
              <p className='para'>$1499</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/9/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Infinix INBO</p>
              <p className='para'>$1099</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/10/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>HP Pavilion</p>
              <p className='para'>$1099</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/11/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>perfume Oil</p>
              <p className='para'>$13</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/12/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Brown Perfum</p>
              <p className='para'>$40</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/13/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Fog Scent Xp</p>
              <p className='para'>$13</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/14/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Non-Alcoholi</p>
              <p className='para'>$120</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/15/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Eau De Perfu</p>
              <p className='para'>$30</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/16/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Hyaluronic A</p>
              <p className='para'>$19</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/17/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Tree Oil 30m</p>
              <p className='para'>$12</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/18/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Oil Free Moi</p>
              <p className='para'>$40</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/19/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Skin Beauty</p>
              <p className='para'>$46</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/20/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Freckle Trea</p>
              <p className='para'>$70</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/21/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Daal Masoo</p>
              <p className='para'>$20</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/22/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Elbow Macaro</p>
              <p className='para'>$14</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/23/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Orange Essen</p>
              <p className='para'>$14</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/24/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>cereals mues</p>
              <p className='para'>$46</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/25/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Gulab Powder</p>
              <p className='para'>$70</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/26/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Plant Hanger</p>
              <p className='para'>$41</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/27/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Flying Woode</p>
              <p className='para'>$51</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/28/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>3D Embellish</p>
              <p className='para'>$20</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/29/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Handcraft Ch</p>
              <p className='para'>$60</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/30/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Key Holder</p>
              <p className='para'>$30</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/31/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>iPhone 9</p>
              <p className='para'>$549</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/32/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>iPhone X</p>
              <p className='para'>$549</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/33/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>iPhone 9</p>
              <p className='para'>$899</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/34/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Samsung Univ</p>
              <p className='para'>$1249</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/35/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>OPPOF19</p>
              <p className='para'>$280</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/36/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Huawei P30</p>
              <p className='para'>$499</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/37/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>MacBook Pro</p>
              <p className='para'>$1749</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/38/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Samsung Gala</p>
              <p className='para'>$1449</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/39/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Microsoft Su</p>
              <p className='para'>$1249</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/40/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Infinix INBO</p>
              <p className='para'>$1049</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/41/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>HP Pavilion</p>
              <p className='para'>$1249</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/42/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>perfume Oil</p>
              <p className='para'>$40</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/43/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Fog Scent Xp</p>
              <p className='para'>$13</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/44/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Non-Alcoholi</p>
              <p className='para'>$120</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/45/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Eau De Perfu</p>
              <p className='para'>$30</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/46/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Hyaluronic A</p>
              <p className='para'>$19</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/47/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Tree Oil 30m</p>
              <p className='para'>$12</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/48/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Oil Free Moi</p>
              <p className='para'>$40</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/49/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Skin Beauty</p>
              <p className='para'>$46</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/50/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Freckle Trea</p>
              <p className='para'>$70</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/51/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Daal Masoo</p>
              <p className='para'>$20</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/52/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Elbow Macaro</p>
              <p className='para'>$14</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/53/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Orange Essen</p>
              <p className='para'>$14</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/54/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>cereals mues</p>
              <p className='para'>$46</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/55/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Gulab Powder</p>
              <p className='para'>$70</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/56/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Plant Hanger</p>
              <p className='para'>$41</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/57/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Flying Woode</p>
              <p className='para'>$51</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/58/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>3D Embellish</p>
              <p className='para'>$20</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/59/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Handcraft Ch</p>
              <p className='para'>$60</p>
              <button className='button'>View</button>
              </div>

              <div className='main'>
              <img src="https://i.dummyjson.com/data/products/60/1.jpg" alt="thumbnail" className='img'></img>
              <p className='para'>Key Holder</p>
              <p className='para'>$30</p>
              <button className='button'>View</button>
              </div>
              </div>
        }
    </div>
  );
};

export default App;
