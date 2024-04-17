import DirectoryItem from "../directory-item/directory-item.component";
import categories from "./directory.json";
import "./directory.styles.scss";

function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
