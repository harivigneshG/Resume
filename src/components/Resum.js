import React from "react";
 

const Resum=()=>{
    const url="https://drive.google.com/file/d/17qcm13TjIfrfdlYaQJsxvBdT9IeUKnM8/view?usp=sharing"
return (
    <div>
    <div className="cover">
        <a name="Resume"></a>
        <div className="circle"><div className="heade">Resume</div> </div>
        <div className="button" id="but">
             <a href={url} target="_blank" rel="noopener"> <button className="large  ui button ui green basic button">Download Resume</button></a> 
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
                   
                    <div className="four wide column"><div className="sk">Tools</div><div className="Skills"><li>Sketch</li>
                    <li>PhotoShop</li>
                    <li>llustrator</li>
                    <li>Figma</li>

                    </div>
                     </div>

                     <div className="six wide column">
                         <div className="view"><div className="sk">Experience</div><div className="Skills">
                         <div className="sub">
                         <p>Capminds Technologies </p>
                          <p >PHP Developer </p>
                    <p>Mar-July (2021)</p></div>
                     <div className="ske"><p>Education</p></div> 
                     <div className="sub"><p >SSN college of Engineering</p>
                     <p>(2016-2020)</p>
                     </div>
                    

                    </div></div>
                     </div>
            </div>
        </div>
    </div>
    </div>
    
);
};

export default Resum;