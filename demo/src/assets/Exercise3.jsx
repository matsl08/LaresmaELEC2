import React from "react";
import "./App.css";
import reactLogo from "./react.gif";

const products = [
  { desc: "Soap", price: 25 },
  { desc: "Milk", price: 105 },
  { desc: "Chicken", price: 105 },
  { desc: "Sugar", price: 50 },
  { desc: "Bread", price: 87 },
];

const App = () => {
  // Filter products with price less than 60
  const filteredProducts = products.filter((product) => product.price < 60);

  return (
    <div className="container">
      <img src={reactLogo} alt="React Logo" className="logo" />

      <div className="tables-container">
        {/* All Products Table */}
        <div className="table-wrapper">
          <h2>All Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.desc}</td>
                  <td>P{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Filtered Products Table */}
        <div className="table-wrapper">
          <h2>Products Less than P60</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;