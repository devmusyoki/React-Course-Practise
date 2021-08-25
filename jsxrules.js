import { directive } from '@babel/types';
import { element } from 'prop-types';
import React from 'react';
import ReactDom from 'react-dom';


// JSX Rules
// Return single element
// div/ section/ fragment or article / 
// use camelcase for html attribute
// className instead of class
// close every element
// formatting

function Letsee() {
    return (
        <div>
            <h1>hello people </h1>
            <li>
                <a href='#'>Hello World</a>
            </li>
        </div>
    )
}
export default Letsee;

  