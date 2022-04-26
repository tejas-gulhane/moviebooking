import React ,{useState,useEffect} from 'react'
import './form.css'
import { NavLink } from 'react-router-dom';

function Form() {
    let [fname,setfname]=useState('');
    let [lname,setlname]=useState('');
    let [email,setemail]=useState('');
    let [number,setnumber]=useState('');
    let [tnumber,settnumber]=useState('');

    const win=window.localStorage;

    useEffect(() => {
    if(win.getItem('fname'))
    setfname(win.getItem('fname'));
    if(win.getItem('lname'))
    setlname(win.getItem('lname')); 
    if(win.getItem('email'))
    setemail(win.getItem('email')); 
    if(win.getItem('number'))
    setnumber(win.getItem('number'));
    if(win.getItem('tnumber'))
    settnumber(win.getItem('tnumber'));
    }, [])

    useEffect(() => {
        win.setItem('fname',fname);
        win.setItem('lname',lname);
        win.setItem('email',email);
        win.setItem('number',number);
        win.setItem('tnumber',tnumber);
    }, [fname,lname,email,number,tnumber])
    
    

  return (
    <> 
        <div className="form-container">
            <h1>Flash</h1>
            <input type="text" placeholder="First Name" value={fname} onChange={(e)=>{setfname(e.target.value)}}/>
            <input type="text" placeholder="Last Name" value={lname} onChange={(e)=>{setlname(e.target.value)}}/>
            <input type="email" placeholder="E-Mail" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="number" placeholder="Phone No." value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
            <input type="number" placeholder="No. of Tickets" value={tnumber} onChange={(e)=>{settnumber(e.target.value)}}/>
            <button>Book</button>
            <NavLink to="/App"><button className="home" id='home' >Home</button></NavLink>
        </div>
</>
  )
}

export default Form;