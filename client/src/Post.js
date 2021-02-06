import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('margarita');
  const [payment, setPayment] = useState(false);
  const [success, setSuccess] = useState(false);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/orders/', data)
      .then((response) => {
        setSuccess(true);
        console.log(response);
        // we can do sth with the data later
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        // errorhandling could be done later
      });
  };

  return (
    <>
      <div className="centered">
        {success ? (
          <h4>
            Danke für die Bestellung {data.pizza_orderer}! Wir senden dir eine{' '}
            {data.pizza_variation} Pizza in {data.pizza_order_size} an deine
            Adresse nach {data.pizza_order_address}. Du bekommst deine
            Bestellbestätigung auf deine Mail adresse {data.pizza_order_email}{' '}
            zugesandt. Bis bald!
          </h4>
        ) : (
          <>
            <h1>Bestelle eine Pizza</h1>
            <form onSubmit={submitHandler}>
              <div>
                <label>Wähle Sorte aus</label>
                <select
                  name="pizza_variation"
                  id="pizza-variation"
                  onChange={changeHandler}
                  defaultValue="margarita"
                >
                  <option value="margarita">margarita</option>
                  <option value="salami">salami</option>
                  <option value="diavolo">diavolo</option>
                </select>
                <br />
                <label>Wähle größe aus</label>
                <select
                  name="pizza_order_size"
                  id="pizza-size"
                  onChange={changeHandler}
                >
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  {selected !== 'margarita' ? (
                    <option value="large">large</option>
                  ) : null}
                </select>
                <br />
                <button type="button" onClick={() => setPayment(true)}>
                  Bezahlen
                </button>
                {payment ? (
                  <div>
                    Wie ist dein Name?
                    <br />
                    <input
                      name="pizza_orderer"
                      type="text"
                      onChange={changeHandler}
                    />
                    <br />
                    Wie ist deine Adresse?
                    <br />
                    <input
                      name="pizza_order_address"
                      type="text"
                      onChange={changeHandler}
                    />
                    <br />
                    Wie lautet deine E-Mail adresse?
                    <br />
                    <input
                      name="pizza_order_email"
                      type="email"
                      onChange={changeHandler}
                    />
                    <br />
                    <button type="submit">Order aufgeben</button>
                  </div>
                ) : null}
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
