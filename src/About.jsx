import React from 'react'

export default function About(props) {
  console.log(props.name);
  
  return (
    <div>About {props.name}</div>
  )
}
