import React from 'react';
import ReactDom from 'react-dom';

// Nested Components, React Tools

function Greetings() {
  return (
      <div>
          <Person />
          <Message />
      </div>
  ); 
}
 
const Person = () =>  <h2>John Doe</h2>;
const Message = () => {
    return <p> this is my message </p>;
};  

ReactDom.render(<Greetings/>, document.getElementById('root'));