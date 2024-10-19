
import Button from './Button'
import BadgeIcon from "../assets/images/svg/badge.svg"
import "../styles/HeroText.css"

const HeroText = () => {
  return (
    <div className='HeroTextDiv'>
        <h1>The super fast color palettes generator!</h1>
        <p>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>

        <Button bgColor="#0066FF" value="Start the generator" color="white" border ="none"/>
        <Button bgColor= "transparent" value= "Explore trending palettes" color="black" />
        <img src={BadgeIcon} alt=""/>

    </div>
  )
}           

export default HeroText