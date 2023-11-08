import { useState } from "react"

const Card = () => {
    const [color,setColor] = useState('white')
    const divStyle = {
        width: '20rem',
        height:'15rem',
        border: '1px solid #999',
        backgroundColor : color
    }
  return <>
    <div style={divStyle}>
    </div>
    <input type="text" onChange= {(e) => setColor(e.target.value)} />
  </>
}

export default Card
