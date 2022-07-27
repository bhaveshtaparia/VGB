
import React from 'react'
import Card from './Card'


export default function Home() {
  const mystyle={
  marginTop:"150px"
  }
return (
<>
  <div className='position-absolute  start-50 translate-middle '>
    <p className=" text-dark" style={{fontSize: "25px"}}>Android Single-page-App</p>
  </div>




  <div style={mystyle} className='container'>
  <div className="row " style={{marginTop: 5 + 'em'}}>
    <div  className="col-md-4 mt-5" >
    <Card apk={"VGB/android/Rock.apk"} set={"Download"} show={"VGB/image/Rock.jpeg"} title={"Rock-paper"} des={"This is the mini project of App development,in this there are cute Rock paper sizzer game "}/>
    </div>
    
    <div className="col-md-4 offset-md-4 mt-5"  >
    <Card apk={"VGB/android/Calculator.apk"} set={"Download"}  show={"VGB/image/Calculator.jpeg"} title={"Calculator"} des={"This is the mini project of App development,in this there are simple calculator "}/>
    </div>
  </div>
  </div>
  <div className="container" style={{marginTop: 5 + 'em'}}>
    
  </div>




  <div className='position-absolute  start-50 translate-middle '>
    <p className=" text-dark" style={{fontSize: "25px"}}>Front-end Website</p>
  </div>


  <div style={mystyle} className='container'>
  <div className="row " style={{marginTop: 5 + 'em'}}>
    <div  className="col-md-4" >
    <Card apk={"https://bhaveshtaparia.github.io/bhanucoding/"} set={"click here"} show={"VGB/image/website1.jpeg"} title={"Website (Frontend)"} des={"This is The front-end-website"}/>
    </div>
    <div className="col-md-4 offset-md-4"  >
    <Card apk={""}  show={"VGB/image/Text.png"} set={"comming soon"} title={"Texutils"} des={"front-end React js website"}/>
    </div>
  </div>
  </div>
  <div className="container" style={{marginTop: 5 + 'em'}}>
    
  </div>
</>

)
}