import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './books.css'
//  setup vars

const books = [

{id:1,
author : 'Ann Paul',
title : 'If Animals Kissed Good Night',
img : "https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
},
{
id:2 , 
author : ' Margaret Wise Brown ',
title : 'Goodnight Moon',
img : "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
},
{
id:3,
author : ' Don Freeman ',
title : 'Corduroy',
img : "https://images-na.ssl-images-amazon.com/images/I/51g9OQDCVKL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
},
];
// //  An example
// const names = ['john', 'mark', 'luke'];
// const newNames = names.map((name) => {
//  console.log(name);
// })


function BookList() {
  return (
      <section className='booklist'>
        {books.map((book) => {
          return  <Book key={book.id} book={book}></Book>;
      })}
      </section>
  ); 
}

//  const Book = ({img, title, author}) =>{  
 const Book = (props) =>{  
    const {img, title, author } = props.book;
    // attribute, eventHandler
    // onClick, onMouseOver

    const clickHandler = () => {
        alert('hello world')

    }
   return ( 
   <article className="book">
    <img src={img} alt=''/>   
    <h2>{author}</h2>
    <h1>{title}</h1>
    <button type="button" onClick={clickHandler}> reference example</button>
   
   
   </article>
   );
 }
 
ReactDom.render(<BookList/>, document.getElementById('root'));