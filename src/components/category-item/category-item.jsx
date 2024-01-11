import "./category-styles.scss";

const CategoryItem = ({ category }) => {
 const { imageUrl, title } = category;
 return (
  <div className="category">
   <div className="bg-img" style={{ backgroundImage: `url(${imageUrl})` }} />
   <div className="category-detail">
    <h2>{title}</h2>
    <p>Shop Now</p>
   </div>
  </div>
 );
};

export default CategoryItem;
