
import LogoComponent from '../../components/Logo'
import Button from '../../components/Button'
import Ham from "../../assets/images/svg/hamburger.svg"
import Cancel from "../../assets/images/svg/cancel.svg"
import "./Header.css"



const Header = () => {
  return (
    <div className='navItems'>
      <img id='Ham'onClick={()=> Hide("Ham")} src={Ham} alt=""  />
      <img id='cancel'onClick={Hide2} src={Cancel} alt=""  />


        <LogoComponent/>

        <div className='links' id='navPage'>
        <a href="">Tools</a>
        <a href="">Go Pro</a>
        <a href="">Sign In</a>
        <Button bgColor="#0066FF" value="Sign up" color="white" fontSize="14px" border ="none"/>
        </div>

    </div>
  )
}

function Hide(theId){
  let idgiven = document.getElementById(theId)
  let navPage = document.getElementById("navPage")
  let cancel = document.getElementById("cancel")

  idgiven.style.display = "none"
  navPage.classList.add("SideBar", "open")
  cancel.style.display = "block"
  updateIconDisplay()

}

function Hide2(){
  let cancel = document.getElementById("cancel")
  let Ham = document.getElementById("Ham")
  let navPage = document.getElementById("navPage")
  cancel.style.display = "none"
  navPage.classList.remove("SideBar")
  Ham.style.display = "block"
  updateIconDisplay()
  
}


function updateIconDisplay() {
  let cancel = document.getElementById("cancel")
  let Ham = document.getElementById("Ham")
  if (window.innerWidth > 800) {
      Ham.style.display = 'none';
      cancel.style.display = 'none';
      
  } 
}

export default Header