import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import PropTypes from "prop-types"; // Import PropTypes

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ProductContainer, Footer, Name, Price } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductContainer>
      <img src={imageUrl} alt={`{name}`} />
      <Footer>
        <Name as="span">{name}</Name>
        <Price as="span">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductContainer>
  );
};

// Prop validation for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
