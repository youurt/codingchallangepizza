import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';

const Orders = () => {
  const [data, getData] = useState([]);
  const [query, updateQuery] = useState('');

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get('http://localhost:8000/api/orders/')
      .then((response) => {
        const allData = response.data;
        getData(allData);
      })
      .catch((error) => console.log(error));
  };

  const fuse = new Fuse(data, {
    keys: ['pizza_order_address', 'pizza_order_email', 'pizza_orderer'],
    includeScore: true,
  });

  const result = fuse.search(query);

  const dataResult =
    query.length > 0
      ? result.filter((el) => el.score < 0.01).map((elem) => elem.item)
      : data;

  const onSearch = ({ currentTarget }) => {
    updateQuery(currentTarget.value);
  };
  return (
    <>
      <div className="centered">
        <h1>Orders</h1>Suche:{' '}
        <input
          className="input-box"
          type="text"
          value={query}
          onChange={onSearch}
        />
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Order Adress</th>
            <th>Email Adress</th>
            <th>Pizza</th>
            <th>Size</th>
          </tr>
        </table>
        {dataResult.map((el, index) => {
          const {
            id,
            pizza_order_address,
            pizza_order_email,
            pizza_order_size,
            pizza_orderer,
            pizza_variation,
          } = el;

          return (
            <>
              <div key={id}>
                <table>
                  <tr>
                    <td>{pizza_orderer}</td>
                    <td>{pizza_order_address}</td>
                    <td>{pizza_order_email}</td>
                    <td>{pizza_variation}</td>
                    <td>{pizza_order_size}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
