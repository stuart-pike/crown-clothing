import PropTypes from "prop-types";
import "./directory-item.styles.scss";

function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

DirectoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add more PropTypes as per the structure of your 'monster' object
  }).isRequired,
};

export default DirectoryItem;
