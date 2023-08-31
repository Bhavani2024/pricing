import React from 'react'

function Dummy({simple}) {
    console.log(simple)
  return (
    <div>{
        simple.course}
        {
        simple.duration
}</div>
  )
}

export default Dummy