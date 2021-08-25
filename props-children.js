import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './books.css'
//  setup vars
const firstbook = {
author : 'Ann Paul',
title : 'If Animals Kissed Good Night',
img : "https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
}
const secondbook = {
author : ' Margaret Wise Brown ',
title : 'Goodnight Moon',
img : "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
}


function BookList() {
  return (
      <section className='booklist'>
         <Book img={firstbook.img} title={firstbook.title} author={firstbook.author}>
         <p>Lorem ipsum dolor sit amet, consectetur</p>    
         </Book>
         <Book title={secondbook.title} img = {secondbook.img} author={secondbook.author}></Book>
      </section>
  ); 
}
// 1st way to deconstruct props
 const Book = ({img, title, author,children}) =>{  
    //  second way to deconstruct props
    // const {img, title, author} = props
   return ( 
   <article className="book">
    <img src={img} alt=''/>   
    <h2>{author}</h2>
    <h1>{title}</h1>
    {children}
   
   </article>
   );
 }
 
ReactDom.render(<BookList/>, document.getElementById('root'));