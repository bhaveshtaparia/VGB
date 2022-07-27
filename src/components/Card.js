import React from 'react'

export default function card(props) {
  return (
    <>
   <div className="card" style={{width: 90 + '%'}}>
    <img src={`${props.show}`}className="card-img-top" alt=" is visible soon"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.des}</p>
      <a href={`${props.apk}`} className="btn btn-primary">{props.set}</a>
    </div>
 </div>
  </>
  )
}
