import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';

export default function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* slider */}

        <p className="exploreCategoryHeading">Categories</p>
        <p className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategoryImage} alt="Rent Category" className="exploreCategoryImg" />
            <span className="exploreCategoryName">Places for Rent</span>
          </Link>
          <Link to="/category/sell">
            <img src={sellCategoryImage} alt="Sell Category" className="exploreCategoryImg" />
            <span className="exploreCategoryName">Places for Sell</span>
          </Link>
        </p>
      </main>
    </div>
  );
}
