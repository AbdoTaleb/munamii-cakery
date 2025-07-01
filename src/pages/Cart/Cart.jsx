import './Cart.css';
import { useCart } from '../../contexts/CartContext';

function Cart() {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <main className="cart">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                  <div className="actions">
                    <label>
                      Qty:
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                      />
                    </label>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
