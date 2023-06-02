import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home.js';
import  edit  from './pages/edit.js';




function App() {
  return (
    

    
     <BrowserRouter>
       <Routes>
          <Route path="/"  Component={Home} />
          
          <Route path="/edit/:id" Component={edit } />
       </Routes>
     </BrowserRouter>
    
    
 

    
  )
}





export default App;