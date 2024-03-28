import CategoryItem from "../categeroy-item/category-item.component";
import categories from "./directory.json";
import "./directory.styles.scss";

function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
