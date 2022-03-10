import React from 'react'
import { Link, Route, Routes ,useParams} from 'react-router-dom'
import Prerna from '../Prerna/Prerna'
import Suraj from '../Suraj/Suraj'
import './About.css'

function About() {

  let {id} = useParams()
  let url ='';
  let name='';
  if ( id==='1'){
  url='http://www.github.com/prernathul20.png'
  name='Prerna'
}
else{
  url='http://www.github.com/surajshende247.png'
  name='Suraj'
}


  return (
    <div className="About-container">
      
     <h1>  About :{name}</h1>
     <img src ={`${url}`} alt="User Image"/>
    <br></br>
    {/*<Link to ="Prerna"><button className="btn btn-warning ">Prerna 🍀</button></Link> <br/>
    <Link to ="Suraj"><button>Suraj🧑‍💻</button></Link>*/}
    
 {/* <Routes>
<Route path = "Prerna" element={<Prerna/>}/>
<Route path = "Suraj" element={<Suraj/>}/>

  </Routes>*/}
    </div>
  )
}

export default About