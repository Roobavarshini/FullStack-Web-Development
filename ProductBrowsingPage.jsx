import React, { useState } from "react";

function ProductBrowsingPage() {
  const [category, setCategory] = useState("Electronics");

  const products = {
    Electronics: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Headphones" },
    ],
    Clothing: [
      { id: 4, name: "T-Shirt" },
      { id: 5, name: "Jeans" },
      { id: 6, name: "Jacket" },
    ],
    Books: [
      { id: 7, name: "React Guide" },
      { id: 8, name: "JavaScript Basics" },
      { id: 9, name: "Web Development" },
    ],
  };

  return (
    <div className="browse-container">
      <h2>🛍️ Product Browsing Page</h2>

      {/* Category Navigation */}
      <div className="nav">
        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>
        <button onClick={() => setCategory("Clothing")}>
          Clothing
        </button>
        <button onClick={() => setCategory("Books")}>
          Books
        </button>
      </div>

      {/* Product Display */}
      <div className="products">
        <h3>📦 {category}</h3>
        <ul>
          {products[category].map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      {/* Internal CSS */}
      <style>{`
        .browse-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 25px;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .nav button {
          padding: 10px 15px;
          background: #009688;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .nav button:hover {
          background: #00796b;
        }

        .products {
          text-align: left;
          background: #ffffff;
          padding: 15px;
          border-radius: 8px;
        }

        ul {
          padding-left: 18px;
        }

        li {
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}

export default ProductBrowsingPage;
