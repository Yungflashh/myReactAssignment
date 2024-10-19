import HeroText from './HeroText'
import "../styles/HeroText.css"
import ColorImg from "../assets/images/jpg/colorImg.jpg"


const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <HeroText/>
        <img className='colorImg' src={ColorImg} alt="" />

    </div>
  )
}

export default HeroSection