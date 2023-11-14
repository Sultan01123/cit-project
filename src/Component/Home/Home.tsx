import React from 'react';
import './Home.css';
//import logo from './giphy.gif';
const Home: React.FC = () => {

    // return (
    //     <>
    //         <h1 classNameName="Home">This is Home.</h1>
    //         <img classNameName='Home-Image'src={logo} alt="" />
    //     </>
    // );

    return (
        
        <div className="center">
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>


    );
}

export default Home