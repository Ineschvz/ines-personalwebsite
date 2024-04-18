//here we will mount and render the main react components on to the "root" element 
import React from 'react';
import {render} from 'react-dom';
// import App from './App.js'
import {createRoot} from 'react-dom/client'
// import styles from './styles/style.css'

const domNode = document.getElementById('root');
const root = createRoot (domNode);

root.render(
    <div> This is my personal website </div>
  );
  