import React from 'react'
import Navbar from '../Nav_par/Navbar';
import '../Nav_par/NAVbar.css';
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";
import Img from './IMG/iron-2e.png';
import '../pages/login.css';


const Log_in = () => {
  return (
    <div>
        <Navbar/>
        
<div className="grid grid-nogutter surface-0 text-800 login">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised"/> 
            <Button label="Live Demo" type="button" className="p-button-outlined" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src={Img} alt="hero-1" className="md:ml-auto block md:h-full img-style" style={{  }} />
    </div>
</div>
    
        </div>
  )
}

export default Log_in