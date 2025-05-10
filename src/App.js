import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';



function App() {
  // let name="shravan"
  // let status=true
  return (
//     <div className="App">
//   <h1>{name}</h1>
//   {(status)?
//   <div style={{color:"red"}}>welcome to the js</div>
// :"it is false"}
//   </div>
<div className="main">hello
{/* <Header/> */}

{/* <About className="card-items"/> */}

<div className='card'>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

</div>
</div>
);
}

export default App;


function Card(){
  return(
    <div className='carditem'>hello world</div>
  )
}