
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const changeQty = (id, delta) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: { id, delta }
    });
  };

  return (
    <div className="cart-page">
      <div className="cart-box">
        <h2 className="cart-title">🛒 Panier</h2>

        {items.length === 0 && (
          <p className="empty-cart">Votre panier est vide</p>
        )}

        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-info">
              <strong>{item.title || item.name}</strong>
              <span className="price">        {item.price} DH</span>

              <div className="qty">
                <button onClick={() => changeQty(item.id, -1)}> -  </button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQty(item.id, 1)}> +   </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id
                })
              }
            >
              Supprimer
            </button>
          </div>
        ))}

        {items.length > 0 && (
          <div className="total">
            <span>  </span><p>Total :<span>{total.toFixed(2)} DH</span></p> 
          </div>
        )}
      </div>
    </div>
  );
}