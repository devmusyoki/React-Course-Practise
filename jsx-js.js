import React from 'react';
import ReactDom from 'react-dom';
import './books.css'

// Nested Components, React Tools

function BookList() {
  return (
      <section className='booklist'>
         <Book />
      </section>
  ); 
}
const author = 'Ann Paul'
 const Book = () =>{
     const title = 'If Animals Kissed Good Night'
   return <article className="book">
         
          <img src="https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" 
          alt="a cover of an elephant and it's calf"
           />   
          <h2>{author}</h2>
          <h1>{title}</h1>
   </article>
 }
 
//  const Author = () => {
//    return <h1 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Ann Paul</h1>
//  }
//  const Description = () => {
//    return <p>What if animals did what YOU do? This bestselling story imagines how animals would kiss their loved ones good night!</p>
//  }
 

ReactDom.render(<BookList/>, document.getElementById('root'));