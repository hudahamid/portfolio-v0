import React from 'react'
import Resume from './resume.pdf'
const Services=() =>{
  return (
    <div  className="services">
     <div className='awesome'>
    <span> My Awesome </span>
    <span>services</span>
    <spane>
    Lorem ispum is simpley dummy 
    text of printing of printing Lorem
    <br/>
    ispum is simpley dummy text of printing
    </spane>
    <a href={Resume} download >
     <button>Download My Resume</button>   
    </a>
     </div>
    </div>
  )
}

export default Services;
