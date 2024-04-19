/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  ImageContainer,
  ProductImage,
  Description,
  QuantityContainer,
  ItemQuantity,
  Arrow,
  Price,
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
        <ProductImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Description>{name}</Description>
      <QuantityContainer>
        <Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
        <ItemQuantity>{quantity}</ItemQuantity>
        <Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
      </QuantityContainer>
      <Price>{price}</Price>
      <RemoveBtn onClick={removeItemFromCartHandler}>&#10005;</RemoveBtn>
    </CheckoutContainer>
  );
};

export default CheckoutCard;
