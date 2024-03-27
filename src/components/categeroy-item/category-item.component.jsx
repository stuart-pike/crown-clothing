import PropTypes from "prop-types";
import "./category-item.styles.scss";

function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add more PropTypes as per the structure of your 'monster' object
  }).isRequired,
};

export default CategoryItem;
