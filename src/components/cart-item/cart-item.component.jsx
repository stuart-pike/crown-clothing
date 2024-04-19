/* eslint-disable react/prop-types */
import { CartContainer, ItemImage, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartContainer>
      <ItemImage as="img" src={imageUrl} alt={`{name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartContainer>
  );
};

export default CartItem;
