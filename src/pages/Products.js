import React, { useState, useEffect } from 'react';

function Products() {
  const [proList, setPro] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then(response => response.json())
      .then(json => setPro(json.products));
  }, []);

  const openDetails = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(product => {
        const newTab = window.open('', '_blank');
        newTab.document.write(
          `<div>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>
            <img src=${product.thumbnail} alt="Product Thumbnail" />

          </div>`
        );
      })
  };

  return (
    <>
      <h3>Products List</h3>
      <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Brand</th>
        </tr>
      </thead>
      <tbody>
        {proList.map(({ id, title, price, brand }) => (
          <tr key={id} onClick={() => openDetails(id)}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{brand}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
  );
}

export default Products;
