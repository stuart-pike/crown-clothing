/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { removeCartItem, adjustQuantity } from "../../store/cart/cart.action";

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
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const decreaseQuantityHandler = () => {
    dispatch(adjustQuantity(cartItems, id, quantity - 1));
  };

  const increaseQuantityHandler = () => {
    dispatch(adjustQuantity(cartItems, id, quantity + 1));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeCartItem(cartItems, id));
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
