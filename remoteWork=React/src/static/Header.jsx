import Logo from "../assets/images/logo.svg"
import NavLinks from "../components/Navlinks.jsx"
import "../../public/styles/HomePage.css"
function Header () {
    return (
        <>
         
        <nav className="Navigation">
       

            <div className="logoLinks flex width">
            <img className="Logo" src= {Logo}/>
           

            <NavLinks/>

            </div>


            <div className="btn">
            <button>Login </button>
            <button>Register </button>
            </div>
           

        </nav>

        </>
    )
    
}

export default Header