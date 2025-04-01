import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Smartwatch", price: 200 },
  { id: 5, name: "Tablet", price: 500 },
];

const EcommerceApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        E-Commerce Store
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {product.name}
            </h2>
            <p style={{ color: "#555" }}>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Cart</h2>
        {cart.length === 0 ? (
          <p style={{ color: "#555" }}>No items in cart</p>
        ) : (
          <ul style={{ paddingLeft: "20px" }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Total: ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default EcommerceApp;
