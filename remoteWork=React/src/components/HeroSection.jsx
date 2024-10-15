import Audiophile from "../assets/images/client-audiophile.svg"
import databiz from "../assets/images/client-databiz.svg"
import maker from "../assets/images/client-maker.svg"
import meet from "../assets/images/client-meet.svg"
import HeroImage from "../assets/images/image-hero-desktop.png"
import "../../public/styles/HomePage.css"




export const HeroSection = () => {
  return (
    <div className="HeroSection flex">
        <div className="HeroText">
        <h2>Make 
        remote work</h2>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>

        <button className="learnBtn">Learn more</button>

        <div className="icons">
        <img src= {databiz}/>
        <img src= {Audiophile}/>
        <img src= {meet}/>
        <img src= {maker}/>
      

        </div>


       
        </div>

        <img className="HeroImage" src={HeroImage} alt=""/>




      
      

       





    </div>
  )

}
