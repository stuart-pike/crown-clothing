import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        //$imageurl={imageurl} Does not render images
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

DirectoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    // Add more PropTypes as per the structure of your 'monster' object
  }).isRequired,
};

export default DirectoryItem;
