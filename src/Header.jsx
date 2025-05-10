import React from 'react'

export default function Header({headerinfo,cname}) {
// let {headerinfo,cname}=props;
// console.log(headerinfo,cname);

//   console.log(props.headerinfo);
  return (
    <div>
      <h2>Headerl{cname} {headerinfo.email}</h2>
    <h3>hello world</h3>
    </div>
  )
}
