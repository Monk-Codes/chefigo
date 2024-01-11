import "./component.scss";
import CategoryItem from "../components/category-item/category-item";

const Directory = ({ categories }) => {
 return (
  <div className="container">
   {categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
   ))}
  </div>
 );
};
export default Directory;
