import React, { useState } from "react";

function ProductListingInterface() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Smartphone", price: 30000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-container">
      <h2>🛒 Product Listing</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h3>🧺 Cart Items</h3>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Internal CSS */}
      <style>{`
        .product-container {
          max-width: 700px;
          margin: 40px auto;
          padding: 20px;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .product-list {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .product-card {
          width: 200px;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        button {
          margin-top: 10px;
          padding: 8px 12px;
          background: #ff5722;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #e64a19;
        }

        .cart-section {
          margin-top: 25px;
          text-align: left;
        }

        ul {
          padding-left: 18px;
        }
      `}</style>
    </div>
  );
}

export default ProductListingInterface;
