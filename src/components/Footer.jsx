import React from "react";


const Footer=()=>{

    return(
        <div>

           <footer>
           <div className="dark">
                    <div className="follow"><p>Follow Me</p></div>
                    <div className="social"><p>Let us be social</p></div>

                    <div className="navi">
                    <nav><a href="https://www.linkedin.com/in/harivigneshg/" target="_blank" rel="noopener noreferrer">
                        <i className="big linkedin icon"></i></a>
                        </nav> 

                        <nav><a href="https://www.instagram.com/harrivignesh/" target="_blank" rel="noopener noreferrer">
                           <i className="big  instagram icon"></i></a>
                           </nav>
                       <nav>
                       <a href="https://www.facebook.com/hari.vignesh.77398" target="_blank" rel="noopener noreferrer">
                           <i className=" big facebook icon"></i></a>
                       </nav>
                           <nav><a href="https://twitter.com/harivigneshG" target="_blank" rel="noopener noreferrer">
                           <i className="big twitter icon"></i></a></nav>
                    </div> </div>
           </footer>
                  

        </div>



    );
}



export default Footer;