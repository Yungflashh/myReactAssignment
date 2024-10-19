
import "../styles/Card.css"
import Card from './Card'
import AppleIcon from "../assets/images/svg/apple.svg"
import AndroidIcon from "../assets/images/svg/android.svg"
import FigmaIcon from "../assets/images/svg/figma.svg"  
import ChromeIcon from "../assets/images/svg/chrome.svg"  
import AdobeIcon from "../assets/images/svg/adobe.svg"  

const CardContainer = () => {
  return (
    <div className='cardDiv'>

      {/* {onMouseEnter={()=> run("apple","appStore")}}  */}
        <Card id={"apple"} icon ={AppleIcon} introText={"iOS App"} descText={"Create, browse, and save palettes on the go"} />
        {/* <Card id={"appStore"} onMouseLeave={()=> run2("appStore", "apple")} icon={AppleIcon} introText={"Download Now"} descText={"View on the App Store"} /> */}
        <Card id={"android"} icon ={AndroidIcon} introText={"Android App"} descText={"Thousands of palettes in your pocket"}/>
        <Card id={"figma"} icon ={FigmaIcon} introText={"Figma Plugin"} descText={"All palettes right in your workspace at a go"}/>
        <Card id={"chrome"} icon ={ChromeIcon} introText={"Chrome extension"} descText={"Get and edit a palette every new tab"}/>
        <Card id={"adobe"} icon ={AdobeIcon} introText={"Adobe Extension"} descText={"Use Coolors with your favourite tools and favourite Apps"}/>

    </div>

 
  )
}

// function run(idgiven1,idgiven2){
//     let theId1 = document.getElementById(idgiven1)
//     let theId2 = document.getElementById(idgiven2)
//     theId1.style.visibility = "hidden"
//     theId2.style.visibility = "visible"
// }

// function run2(idgiven1,idgiven2){
//   let theId1 = document.getElementById(idgiven1)
//     theId1.style.visibility = "hidden"
//   let theId2 = document.getElementById(idgiven2)
//     theId2.style.visibility = "visible"

// }
export default CardContainer