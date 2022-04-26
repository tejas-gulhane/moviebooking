import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import Form from './Form';

import { BrowserRouter  } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


const root=ReactDOM.createRoot( document.getElementById('root'));
root.render(
   <BrowserRouter>
       
        
        <Routes>
        <Route exact path='/App' element={<App />} />
        </Routes>
        <Routes>
        <Route exact path='/Form' element={<Form />} />
        </Routes>
    
  
   </BrowserRouter>
    
 ,
 
);
