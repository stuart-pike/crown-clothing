import { useDispatch, useSelector } from "react-redux";

import {
  selectCartQuantity,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import ShoppingIcon from "../../assets/shopping-bag.svg";

import { IconContainer, Icon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(selectCartQuantity);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <Icon as="img" src={ShoppingIcon} alt="Shopping Icon" />
      <ItemCount>{cartQuantity}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
