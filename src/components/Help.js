import React from 'react'
import { useState } from 'react'
import Textarea from './Textarea'



export default function Help() {
const mystyle={
margin:"100px 50px 50px 50px",
}
const [text,settext]=useState("")
const myuser=()=>{
  settext(<div className="alert alert-danger" role="alert">
  Please try after some time
</div>)
}
return (
<div className='text-center container ' style={mystyle}><strong>If you face any problem please Fill This form</strong>
<form>
  <div className="mb-3">
    <div>{text}</div>
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text"  required className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
 
   
  <Textarea code={"please explane your problem"}  h={"370px"} />
 <div className='text-center container mt-5'>
<button type="submit" onClick={myuser} className="btn btn-primary">Submit</button>
</div>
</form>
</div>
)
}