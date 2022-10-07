

function button() {
  return (  
    <div>
      <h1 style={headingStyle}>My Resume</h1>
      <h2 style={{margin:'10px'}}>My Skills</h2>
      <ul>
        <li>HTML</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
      </ul>
      <h1 style={{backgroundColor : colorChangeVar}}>Random number is {rand}</h1>
      <button onClick={random()}>Button</button>
    </div>
  );
}


export default taskOne;



