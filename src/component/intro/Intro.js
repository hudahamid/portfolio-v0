import React from "react"; 
// import Github from "../../img/github.png"
// import LinkedIn from '../../img/linkedin.png'

const Intro = ()=>{
    return (
        <div className="intro px-10 py-4">
          <div className="i-left">
           <div  className="i-name flex flex-col py-3">
            <span> Hy ! I am  </span>
            <span> Huda Hamid</span>
            <span className=" py-3"> 
                Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
           </div>
           <button className="i-button"> Hire me</button>
           <div className="flex  py-3">
           <img src={Github} alt="" />
           <img src={LinkedIn} alt="" />
           </div>
          </div>
          <div className="i-right">
          </div> 



        </div>
    )
}

export default Intro ;