/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  ImageContainer,
  BaseSpan,
  QuantityContainer,
  Quantity,
  Arrow,
  RemoveBtn,
} from "./checkout-card.styles";

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
    <CheckoutContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <QuantityContainer>
        <Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
      </QuantityContainer>
      <BaseSpan>{price}</BaseSpan>
      <RemoveBtn onClick={removeItemFromCartHandler}>&#10005;</RemoveBtn>
    </CheckoutContainer>
  );
};

export default CheckoutCard;
