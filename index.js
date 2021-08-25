import React from 'react';
import ReactDom from 'react-dom';

// stateless functional componenent
// always return JSX

function Greetings(){
  return <h1>This Is Mark and this is my third attempt learning react </h1>
}

// const Greetings = () => {
// return React.createElement('hi', {}, 'this is a clean sweep' )
// }; 

ReactDom.render(<Greetings/>, document.getElementById('root'));