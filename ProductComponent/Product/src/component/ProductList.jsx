import Product from './Product';
import Laptop from "../assets/images/laptop.webp"
import headphone from "../assets/images/headphone.webp"
import smartphone from "../assets/images/smartphone.webp"

const ProductList = () => {
  

    return (
        <div className="product-list">
           
                <Product 
                   
                    productName={"Laptop"} 
                    price={ "450,000"} 
                    image={Laptop} 
                    imageUrl={"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjcqf-j-p2JAxXNj1AGHfe9JkAYABAEGgJkZw&ae=2&aspm=1&co=1&ase=2&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUObOwTb4kkxcdXlkHXuIrR4io1kcUfooahs7fbHJcEX06NaELrT__RoCWuMQAvD_BwE&ohost=www.google.com&cid=CAESV-D2ZlOL0m-Wplwfb-Y9X06-jZHeA5v4qjba308OzngIHRB_xfXEKwPenJrF-v1UXXUO-jd-FyTSFdc5kkoTgCDZEhas7kc76INuxkwx_f7FAgJ4wRo6wg&sig=AOD64_0Bu7HLkF3rowQ0bfbbtZ40Ln-_uA&ctype=5&q=&nis=4&ved=2ahUKEwjToPuj-p2JAxXVT0EAHdlBENYQ9aACKAB6BAgDEBk&adurl="}
                    description={"A machine built for programming,gaming and graphics designs"} 
                />


            
                <Product 
                   
                    productName={"Smartphone"} 
                    price={ "700,000"} 
                    image={smartphone}
                    imageUrl={"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjTsrT0-p2JAxX3BgYAHQRxPUkYABAHGgJ3cw&ae=2&aspm=1&co=1&ase=2&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUKpVGwTfHV1DRKURcUgcf4WLn_1CS-XZgJ2Dha-6Fec2Q2L_QkMVoxoC6ccQAvD_BwE&ohost=www.google.com&cid=CAESV-D2DmQjDmmY-po0wPJwfWSS9eh9idBmlw144MDT1MBBtN3G-9o4mmKixSiMvBukvXyV6DbWMogYic23skmiNLUCRUXLSBPhi8-O91owOVjfWE3FPh8Plg&sig=AOD64_32Xqri2DbblDnX0tMbFvDh-F830A&ctype=5&q=&nis=4&ved=2ahUKEwih5LD0-p2JAxW4caQEHc_SDokQ9aACKAB6BAgFECQ&adurl="} 
                    description={"A powerful smartphone with amazing features."} 
                />
                <Product 
                   
                    productName={"Headphones"} 
                    price={ "180,000"} 
                    image={headphone}
                    imageUrl={"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwic6vn9-p2JAxXTm1AGHeRJEsUYABACGgJkZw&ae=2&aspm=1&co=1&ase=2&gclid=CjwKCAjw1NK4BhAwEiwAVUHPUN0tgyLifUMqcr47d7OQfBzsk3IjxdstiX0ne7-m7ikj62A5CL0kHBoCN8wQAvD_BwE&ohost=www.google.com&cid=CAESV-D2c1kuThP2rzTCUBs7zXY-BYKC6CyRxUkehAMQ7d6rX-CGkPdxwFAOkC8gUF8CQg590moOCPwZrNZIv_TCn8wp6ZTy1tpUp7qQ-FTCHJRCzMbXV93JEw&sig=AOD64_1_mOkda9hv5GSflQFGedhuhHpwoA&ctype=5&q=&nis=4&ved=2ahUKEwjqx_X9-p2JAxVRWUEAHS5uMREQ8w4oAXoECAMQBw&adurl="} 
                    description={"A high-performance Headset for all your needs."} 
                />
        </div>
    );
};

export default ProductList;
