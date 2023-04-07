import React from 'react'

function Navbar() {
  return (
    <div className="n-wrapper flex px-8  lg:px-20  py-6 bg-[#EAF8F9] justify-between items-center ">
    <div className="n-left justify-between flex md:justify-start ">
        <div className="n-name px-3"> HUDA </div>
        <span> toggle</span>
    </div>

    <div className="n-right flex">
        <div className="n-list ">
            <ul className="n-list flex ">
                <li className="p-4 hover:text-[#2DD3E3] " >Home</li>
                <li className="p-4 hover:text-[#2DD3E3] ">Services</li>
                <li className="p-4 hover:text-[#2DD3E3] ">Experince</li>
                <li className="p-4 hover:text-[#2DD3E3] ">Portofolio</li>
                <li className="p-4 hover:text-[#2DD3E3] ">Testimonials</li>
            </ul>
        </div>
        <button className="button">contact us</button>
    </div>
   </div>
  )
}

export default Navbar;
