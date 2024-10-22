import Card from "./Card"
import avatar from "../assets/images/avatar.jpeg"
import avatar2 from "../assets/images/avatar2.avif"
import avatar3 from "../assets/images/avatar4.jpeg"


const CardDiv = () => {
  return (
    <div className="cardDiv" >
        <Card  id={"Card1"}
        profileImage={avatar} 
        name={"David"} 
        age={18} 
        location={"Lagos"}
        onclick={ ()=>{darkmode("Card1")}}
       

        />

        <Card  id={"Card2"}
                profileImage={avatar2} 
                name={"Kayode"} 
                age={12} 
                location={"Ogun"}
                onclick={ ()=>{darkmode("Card2")}}
            

                />
        <Card  id={"Card3"}
                profileImage={avatar3} 
                name={"Ayomide"} 
                age={15} 
                location={"Ekiti"}
                onclick={ ()=>{darkmode("Card3")}}
            

                />
       
    </div>
  )
}

function darkmode(idPassed){
    let dark = document.getElementById(idPassed)
 
        dark.classList.toggle ("darkMode")

}

export default CardDiv