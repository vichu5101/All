// import React from 'react'
// import PropsFunction from './Tasks/Props/props'


// const App = () => {
//   function Cardprop(prop) {
//     return <div>
//         <h1>{prop.name}</h1>
//         <p>{prop.phone}</p>
//         <div>
//         <img src={prop.img} id='imgId'/>
//         </div>
        
//     </div>
// }
//   return (
//     <div>
//           <Cardprop name="vishnu" phone="45454554534" img="https://www.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-water-668593321"/>
//       </div>)
//     // // <div>
//     //   {/* <h1 style={headingStyle}>My Resume</h1>
//     //   <h2 style={{ margin: '10px' }}>My Skills</h2>
//     //   <ul>
//     //     <li>HTML</li>
//     //     <li>Css</li>
//     //     <li>JavaScript</li>
//     //     <li>ReactJS</li>
//     //   </ul>
//     //   <h1 style={{ backgroundColor: colorChangeVar }}>Random number is {rand}</h1>
//     //   <button id='btn' onClick={name}>Click Me</button> */}
//     //   {/* <PropsFunction/> */}
//     // {/* </div> */}
    
// }
// // const name=()=> {
// //   var arr = ["blue", "orange", "red", "yellow", "grey"]
// //   document.body.style.backgroundColor=arr[Math.floor(Math.random()*arr.length)]
// // }

// // const headingStyle = {
// //   color: 'red',
// //   backgroundColor: getRandomColor(),
// //   textAlign: 'center',
// // }
// // let rand = Math.floor(Math.random() * 10)
// // var colorChangeVar = ''
// // if (rand > 5) {
// //   colorChangeVar = 'purple'
// // }
// // else {
// //   colorChangeVar = 'green'
// // }
// // function getRandomColor() {
// //   var letters = '0123456789ABCDEF';
// //   var color = '#';
// //   for (var i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //   return color;
// // }

// export default App
// import React from 'react'

// const App = () => {
//   var count=0
// function Increment(){
//   count++
//   document.getElementById('count').innerHTML=count
// }

//   return (
//     <div>
//       <h1 id='count'>this is number</h1>
//       <button onClick={Increment}>+</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import HoverEffects from './Tasks/HoverEffect/HoverEffects'


// const App = () => {
//   return (
//     <div>

//       <HoverEffects/>
//     </div>
//   )
// }

// export default App
// import './style.css'
// const App = () => {
//   var count=0
//   const handleMouseOver = () => {
//     count++
//     if(count==1){
//       document.getElementById('count').innerHTML='This is one'
//     }
//     if(count==2){
//       document.getElementById('count').innerHTML='This is two'
//     }
//     if(count==3){
//       document.getElementById('count').innerHTML='This is three'
//     }
//     if(count==4){
//       document.getElementById('count').innerHTML='This is four'
//     }
//     if(count==5){
//       document.getElementById('count').innerHTML='This is five'
//     }
//     if(count==6){
//       document.getElementById('count').innerHTML='hover me for google'
//     }
//     if(count==7){
//       window.location.href='https://www.google.com'
//     }
    
//   };
  

//   return (
//     <div id='container'>     
//         <button  onMouseOver={handleMouseOver}>Hover Me</button>
//           <h2 id='count'>Number</h2>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import './App.css'
import State from './Tasks/IncreaseNumber'
const App = () => {
  return (
    <div>
      <State/>
    </div>
  )
}

export default App
