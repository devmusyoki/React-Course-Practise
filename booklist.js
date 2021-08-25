import React from 'react';
import ReactDom from 'react-dom';
import './books.css'

// Nested Components, React Tools

function BookList() {
  return (
      <section className='booklist'>
         <Book />
         <Book />
         <Book />
      </section>
  ); 
}
 const Book = () =>{
   return <article className="book">
         <Title/>
          <Image />
          <Author />
          {/* <Description/> */}
   </article>
 }
 const Image= () =>{
   return <img src="https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" 
     alt="a cover of an elephant and it's calf"/>
 }
const Title = () => {
   return <h1>If Animals Kissed Good Night</h1>
 }
 const Author = () => {
   return <h1 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Ann Paul</h1>
 }
//  const Description = () => {
//    return <p>What if animals did what YOU do? This bestselling story imagines how animals would kiss their loved ones good night!</p>
//  }
 

ReactDom.render(<BookList/>, document.getElementById('root'));