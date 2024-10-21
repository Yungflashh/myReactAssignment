
import './Product.css';

const Product = ({ productName, price, imageUrl, image, description }) => {
    return (
        <div className="product-card">
           <a href={imageUrl}><img src={image} alt={productName} className="product-image" /></a> 
            <h2 className="product-name">{productName}</h2>
            <p className="product-price">#{price}</p>
            <p className="product-description">{description}</p>
        </div>
    );
};

export default Product;
