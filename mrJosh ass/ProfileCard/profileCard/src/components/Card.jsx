import "./Card.css"

const Card = ({name,age,location,profileImage,id, onclick}) => {
  return (
    <div id={id} className="card" >
        
        <img src={profileImage} alt="profileImage" />
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{location}</p>
        <input type="checkbox" onClick={onclick}  />

    </div>
  )
}

export default Card