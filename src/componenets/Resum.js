import React from "react";
 

const Resum=()=>{
return (
    <div>
    <div className="cover">
        <a name="Resume"></a>
        <div className="circle"><div className="header">Resume</div> </div>
        <div className="button">
             <a href="https://drive.google.com/file/d/1a9_48Qqf0uY238D2aZDUS-eXgkNwaQWI/view?usp=sharing"  target="_blank" rel="noopener"> <button className=" large ui button ui primary basic button">Download Resume</button></a> 
                        </div>
        <div className="ui grid">
            <div className="row ">
                <div className="three wide column container"><div className="sk">Skills</div><div className="list"><div>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>HTML5/CSS3</li>
                    <li>Python</li>
                    </div></div></div>
                   
                    <div className="three wide column"><div className="sk">Tools</div><div className="Skills"><li>Sketch</li>
                    <li>PhotoShop</li>
                    <li>llustrator</li>
                    <li>Figma</li>

                    </div>
                     </div>

                     <div className="six wide column"><div className="sk">Experience</div><div className="Skills"><p style={{fontSize:"15px"}}>Capminds Technologies </p>
                    <p style={{fontSize:"13px",lineHeight:"0.5"}}>PHP Developer </p>
                    <p style={{fontSize:"13px",lineHeight:"0.5"}}>Mar-July (2021)</p>
                     <div className="ske"><p>Education</p></div> 
                     <div className="Skils"><p style={{fontSize:"15px"}}>SSN college of Engineering</p>
                     <p style={{fontSize:"13px",lineHeight:"1"}}>(2016-2020)</p>
                     </div>
                    

                    </div>
                     </div>
            </div>
        </div>
    </div>
    </div>
    
);
};

export default Resum;