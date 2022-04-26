import React from 'react'

function Movieinfo(props) {

   const closepopup =()=>{

   }

    
  return (
   <>
    <div className="popup">
<img src="./21945.jpg" alt=""/>
</div>
<div className="info">
<span>Name :</span><span>Spiderman</span><br/>
<span>Name :</span><span>Spiderman</span><br/>
<span>Name :</span><span>Spiderman</span><br/>
<span>Name :</span><span>Spiderman</span><br/>
<span>Name :</span><span>Spiderman</span><br/>
<button onclick={closepopup}>X</button>

</div></>
  )
}

export default Movieinfo;