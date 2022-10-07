import React from 'react'
import './props.css'
// import picture from './images.jpg'
const PropsFunction = () => {
    function Cardprop(prop) {
        return <div>
            <h1>{prop.name}</h1>
            <p>{prop.phone}</p>
            <div>
            <img src={prop.img} id='imgId'/>
            </div>
            
        </div>
    }
    return (
        <div>
            <Cardprop name="vishnu" phone="45454554534" img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fcategory%2Fnature&psig=AOvVaw2ojcd_02qimd5SNKiLsGwN&ust=1665143060298000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJit9LbDy_oCFQAAAAAdAAAAABAf"/>
        </div>
    )

}

export default PropsFunction