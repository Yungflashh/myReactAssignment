import React from 'react'

const Button = ({color,bgColor,mb,height, value, fontSize,width, border = "1px solid black"}) => {
    const styles = {
        backgroundColor: bgColor,
        color: color,
        padding: '5px 10px',
        border: border,
        borderRadius: "10px",
        cursor: 'pointer',
        fontSize : fontSize,
        width: width,
        height : height,
        marginBottom : mb,
    }
  return (
    <div>
        <button style= {styles}> {value}</button>
    </div>
  )
}

export default Button