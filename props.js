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
         <Book img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
         <Book title={secondbook.title} img = {secondbook.img} author={secondbook.author}/>
      </section>
  ); 
}

 const Book = (props) =>{  
   return ( 
   
   <article className="book">
    <img src={props.img} alt=''/>   
    <h2>{props.author}</h2>
    <h1>{props.title}</h1>
    <p>{props.job}</p>
   </article>
   );
 }
 
ReactDom.render(<BookList/>, document.getElementById('root'));