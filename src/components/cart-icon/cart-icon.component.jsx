import { useContext } from "react";
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from "../../contexts/cart.context";
import ShoppingIcon from "../../assets/shopping-bag.svg";

import { IconContainer, Icon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <Icon as="img" src={ShoppingIcon} alt="Shopping Icon" />
      <ItemCount>{cartQuantity}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
