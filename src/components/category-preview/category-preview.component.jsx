/* eslint-disable react/prop-types */
import ProductCard from "../product-card/product-card.component";

import { PreviewContainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default CategoryPreview;
