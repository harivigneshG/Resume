import React from 'react';
import './name.css';
import Resum from './Resum';
import Project from './Project';
import Header from  './Header';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"

    const App=()=>{
        return ( <div>
            <Header />
                 
                 <div className="wrap"><div className='fir'><a name="home"></a><div className="title">Hi, I'm Harivignesh,</div>
                 <div className="desc"><p style={{paddingBottom:"10px"}}>A <strong>Front-End Web Developer </strong>passionate about creating
                        Interactive applications and experiences on the web.</p>
                        <p>Love learning about new technology in the front-end space. 
                      My goal is to always build scalable products and performant experiences.</p></div>
                      </div></div>
                   <div className='icon' >
                       <nav>
                       <a href="https://www.linkedin.com/in/harivigneshg/" target="_blank" rel="noopener noreferrer">
                           <i className="big linkedin icon"></i></a>
                       </nav>

                       <nav> <a href="https://www.instagram.com/harrivignesh/?hl=en" target="_blank" rel="noopener noreferrer">
                           <i className="big instagram icon"></i></a></nav>
                       <nav> <a href="https://twitter.com/harivigneshG" target="_blank" rel="noopener noreferrer">
                           <i className="big twitter icon"></i></a></nav>
                       
                      
                      
                   
                   
                   </div>
                  <Resum />
                  <Project />
                  <Footer/>


                  
                 </div>
        );
    }
export default App;