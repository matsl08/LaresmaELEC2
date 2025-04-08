import {useState, useEffect} from 'react'
import { getData } from '../UTILS'
import './GetData.css';

export const GetData = () => {
  const [MyData, setMyData] = useState([]);
  const [fanoData, setFanoData] = useState([]);
  const [davidData, setDavidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getData();

        setMyData(allData.slice(0, allData.length/3));
        setFanoData(allData.slice(allData.length/3, 2*allData.length/3));
        setDavidData(allData.slice(2*allData.length/3));
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="data-container">
      <section className="api-section client-api">
        <h1>My API Data</h1>
        <div className="data-grid">
          {MyData.map((item, index) => (
            <div key={index} className="data-card">
                   <h2>{item.name}</h2>
              <img src={item.avatar} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="api-section fano-api">
        <h1>Fano API Data</h1>
        <div className="data-grid">
          {fanoData.map((item, index) => (
            <div key={index} className="data-card">
                <h2>{item.name}</h2>
                <p><strong>ID </strong>: {item.id}</p>
                <img src={item.avatar} alt="" />
                <p><strong>Item Description</strong>: {item.description}</p>
                <p><strong>Item Price</strong>: {item.price}</p>
                


            </div>
          ))}
        </div>
      </section>

      <section className="api-section david-api">
        <h1>David API Data</h1>
        <div className="data-grid">
          {davidData.map((item, index) => (
            <div key={index} className="data-card">
                <h2>{item.product}</h2>
                <p><strong>ID </strong>: {item.id}</p>
                <img src={item.avatar} alt="" />
                <p><strong>Price</strong>: {item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

