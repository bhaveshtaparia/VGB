import React from 'react'

export default function About() {
  const mystyle={
    margin:"100px 50px 50px 50px"
  }
  return (
    <div style={mystyle}className='container'>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Contant
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>There are content avalable for begineer to start there journey.</strong> In this plateform we shall cover App development ,Web development and competitive coding. There are avalable some basic project that help begineer to understand basic concept of App development,web development.we will give our best to make this plateform friendly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Project
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Project make your journey enjoyful.</strong> 
        <ul>
          <li>Calculator-(simple calculation done easily)-App development</li>
          <li>Games-(Rock-paper-sizzer)-App development</li>
          <li>Website-(Frontend website-using only html,css,javscript)-Web development</li>
          <li>React-app-(Texutils-React-app)-Web development</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Data Structure and algorithm
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>we will try to cover up data Structure and algorithm all topic</strong>
        <p>Language
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </p>
        
      </div>
    </div>
  </div>
</div>
<h3 style={mystyle}>Our Goals</h3>
<p>Make journey easy  of coder which dream to get job in Tech companey</p>
    </div>
  )
}
