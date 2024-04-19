/* eslint-disable react/prop-types */
import {
  CartContainer,
  ItemImage,
  ItemDetails,
  Detail,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartContainer>
      <ItemImage src={imageUrl} alt={`{name}`} />
      <ItemDetails>
        <Detail>{name}</Detail>
        <Detail>
          {quantity} x ${price}
        </Detail>
      </ItemDetails>
    </CartContainer>
  );
};

export default CartItem;
