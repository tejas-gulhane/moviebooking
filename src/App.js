import './style.css';
import Card from './Card';
import axios from 'axios'
import React, { useState } from 'react';
// import Movieinfo from './Movieinfo';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import { NavLink } from 'react-router-dom';
import  './card.css'

function App() {


  const [movie, updatemovie] = useState('Search Movie Here...');
  let [responce, updateresponce] = useState([]);

  const fetchmovie = () => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`).then((element) => {
      updateresponce(element.data);
      console.log(element.data)

    })
  }

  const searchicon = () => {

    fetchmovie();

  }
  const showdetails=(e)=>{
    console.log('hi')
  }
  const bookform=()=>{
   console.log("hi")
 }
 



  return (
    <>
    
      <div className="landing-page">
        <div className="navbar">
          <div>
            <button>IMDb</button>
          </div>
          <div className='search'>
            <input type="text" value={movie} onChange={(e) => { updatemovie(e.target.value) }} />
            <i className='fas fa-search' onClick={searchicon}></i></div>
          <div>
            <i className='fas fa-bars'></i>
          </div>
        </div>
        <div className="show">
<Card />
        </div>
       

      
        <div className="main">

{
  responce.map((ele, index) => {

console.log(ele.show.type)
    return <div className="card" id={ele.show.id}>
      <img src={ele.show.image.medium} alt="" />
      <div>
        <span>Name :</span><h1>{ele.show.name}</h1>
      </div>
      <div>
        <span>Type :</span><h1>{ele.show.genres[0] + " , " + ele.show.genres[1]}</h1>
      </div>

      <div>
        <span>Release:</span><h1>{ele.show.premiered}</h1>
      </div>

      <div>
      <div class="btn">
       More Info...
            
            <p class="btntext">
              <div className='information'>
              <h3>Name :</h3><h5>{ele.show.name}</h5> <br />
              </div>


              <div className='information'>
            <h3>Genres :</h3><h5>{ele.show.genres}</h5><br />
            </div>
            <div className='information'>
            <h3>Type :</h3><h5>{ele.show.type}</h5><br />
            </div>
            <div className='information'>
            <h3>Release:</h3><h5>{ele.show.premiered} </h5> <br />
            </div> 
            <div className='information'>
            <h3>Rating:</h3><h5>{ele.show.rating.average}</h5><br />
              </div>

              <h3>Summary :</h3><h5>{ele.show.summary}</h5></p>
         </div>
      <NavLink to="/Form"><button className="btn purple" >Book Ticket...</button></NavLink>
      
      </div>
      
    </div>



  })

}

</div>
       
      </div>
    </>
  );
}

export default App;
