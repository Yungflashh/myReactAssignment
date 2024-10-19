
import DisneyIcon from "../assets/images/svg/disney.svg"
import DreamIcon from "../assets/images/svg/dream.svg"
import WarnerBrosIcon from "../assets/images/svg/warnerbros.jpeg"
import NetflixIcon from "../assets/images/svg/netflix.svg"
import AirbnbIcon from "../assets/images/svg/airbnb.svg"
import DropboxIcon from "../assets/images/svg/dropbox.svg"
import HasbroIcon from "../assets/images/svg/hasbro.png"
import UbisoftIcon from "../assets/images/svg/ubisoft.svg"
import EAIcon from "../assets/images/svg/EA.png"
import AppleIcon from "../assets/images/svg/apple.svg"
import WindowsIcon from "../assets/images/svg/windows.svg"
import "../styles/Sponsors.css"

const Sponsors = () => {

  return (

    <div className="mainSponsors">
    <p className='SponsorsText'>Used by 5+ million designers and by top companies</p>
    <div className='SponsorsDiv'>
        
        <img src={DisneyIcon} alt=""/>
        <img src={DreamIcon} alt="" />
        <img src={WarnerBrosIcon} alt=""  />
        <img src={NetflixIcon} alt="" />
        <img src={AirbnbIcon} alt=""  /> 
        <img src={DropboxIcon} alt="" /> 
        <img src={HasbroIcon} alt=""  /> 
        <img src={UbisoftIcon} alt=""  /> 
        <img src={EAIcon} alt=""/> 
        <img src={AppleIcon} alt=""  /> 
        <img src={WindowsIcon} alt=""  /> 

    </div>

    </div>
  )
}

export default Sponsors