import React from 'react'
import Textarea from './Textarea'
export default function WebDev() {
  const mystyle={
    margin:"74px 0px 20px 0px"
  }
  const sizec={
    // margin:"50px 50px 50px ,50px",
    // width:"1300px",
    height:"500px",
    border:"solid black 7px",
    borderRadius:"300px"
  }
  return (
    <div style={mystyle}>
     <h4 className='text-center'>Frontend-Web development</h4>

<div id="carouselExampleFade" className="carousel slide carousel-fade mt-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="image/c.png" className="d-block w-100 " style={sizec} alt="This is the pic. of website"/>
    </div>
    
    <div className="carousel-item  ">
      <img src="image/b.png" className="d-block w-100 " style={sizec} alt="This is the pic. of website"/>
    </div>
    <div className="carousel-item   ">
      <img src="image/a.png" className="d-block w-100  " style={sizec} alt="This is the pic of website"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div  className='text-center container mt-5'>
<h3 >HOW TO MAKE THIS WEBSITE</h3>
<p>For make this type of website we need to learn  basic of html and css. some basic html tag and  fltoat and grid property of css make easily that type of website. <strong>AT last main part is javascript.</strong>By the help of simple programming idea like:-if-else,loop, help you to complete this website </p>
<strong>javascript code part  ( use in website)</strong>
<div className='text-center container mt-5'>
<Textarea  h={"500px"}code={`  let a = Math.round(1 + 100 * Math.random(2))
    let c = 0;

    alert("let start the entertaining game")
    do {
        b = prompt("i gussess a number between 1 to 100 so please gussess the number");
        if (b == a) {
           
            alert("you are winner")
        } else if (b >= a) {
            
            alert("please enter small value")

        } else {
            
            alert("please enter large value")
        }
        c++;
    } while (b != a)
    alert("you gussess in " + c + " attempt");
    alert("I hope you enjoy the game");
    document.getElementById("score").innerHTML = "Score: " + (101 - c);`}/>
</div>
</div>
</div>
  )
}
