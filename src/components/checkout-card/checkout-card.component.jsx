/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-card.styles.scss";

const CheckoutCard = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { adjustQuantity, setIsCartOpen, removeCartItem } =
    useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, [setIsCartOpen]);

  const decreaseQuantityHandler = () => {
    adjustQuantity(id, quantity - 1);
  };

  const increaseQuantityHandler = () => {
    adjustQuantity(id, quantity + 1);
  };

  const removeItemFromCartHandler = () => {
    removeCartItem(id);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutCard;
