import React from 'react';
import './Footer.css';
import logo from './giphy.gif';
const Footer:React.FC =() =>{
   
    //return (
    //    <>
    //        <h1 className='Footer'><img className='Footer-Image'src={logo} alt="Dolphin" />This is Footer.</h1>
    //    </>
    //);
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Fixed bottom</a>
            </div>
        </nav>
    );
}

export default Footer