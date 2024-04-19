import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ProductContainer, Footer, Name, Price } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext); // Accessing addItemToCart from CartContext

  const addProductToCart = () => addItemToCart(product);

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
