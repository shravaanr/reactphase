import React from 'react'

export default function Test({myname,children}) {
  return (
    <>
    <div>Test{myname.last}</div>
    {children}
  </>)
}
