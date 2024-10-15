import "../../public/styles/HomePage.css"
import iconArrow from  "../assets/images/icon-arrow-down.svg"


function NavLinks(){
    return (
        <div className="Navlinks">
            <a href="">Features <img src= {iconArrow} alt="" /></a>
            <a href="">Company <img src= {iconArrow} alt="" /> </a>
            <a href="">Careers</a>
            <a href="">About</a>
        </div>
    )
}

export default NavLinks