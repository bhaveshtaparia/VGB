import React from 'react'

export default function(props) {
  const mystyle={
   
   height:props.h 
  }
  return (
    <div>
        {/* <textarea style={mystyle} defaultValue={props.code}></textarea> */}
        <div className="form-floating">
  <textarea style={mystyle} className="form-control"defaultValue={props.code} id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Code</label>
</div>
    </div>
  )
}
 
  
   
