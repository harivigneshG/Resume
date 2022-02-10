import React from 'react';

const Project=()=>{
    return(
            <div>
                <div className="pro"><a name="Project"></a><div className="circle" style={{backgroundColor:
                "green"}}><div className="header">Project</div></div></div>
                
                <div className="kat">
                <div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">
         <p style={{textAlign:"center",fontFamily:"DM Serif Display"}}>Image Search</p>
      </div>
      <div className="description">
       <p style={{textAlign:"center",paddingBottom:"45px"}}>Searching result shows all types of related Images and Wallpaper.</p> 
       <div className="but" style={{marginLeft:"70px"}}>
            <a href="https://wallsearch.vercel.app/" target="_blank"rel="noopener noreferrer" >
                <button   className="ui button ui primary basic button">View</button>
                </a>
                </div>
      </div>
   
     
    </div>
  </div>
  <div className="card">
    <div className="content">
      <div className="header">
        <p style={{textAlign:"center",fontFamily:"DM Serif Display"}}>Video Search</p>
      </div>
      <div className="description">
        <p style={{textAlign:"center",paddingBottom:"20px"}}>Search and play any youtube video wthout having recommended videos.</p> 

        <div className="but" style={{marginLeft:"70px"}}>
         <a href="https://searchtube.vercel.app/" target="_blank" rel="noopener noreferrer">
             <button className="ui button ui primary basic button">View</button>
             </a>
         </div>
      </div>
      
         </div>
         
    
  </div>
</div>
                </div>



                <footer  >
                    <div className='dark'style={{padding:"30px 250px 70px 250px"}}>
                    <p style={{fontSize:"15px",paddingLeft:"350px",color:"white"}}>Follow Me</p>
                    <p style={{fontSize:"15px",paddingLeft:"335px",color:"rgb(156, 122, 122)"}}>Let us be social</p>


                   <nav><a href="https://www.linkedin.com/in/harivigneshg/" target="_blank" rel="noopener noreferrer">
                        <i className="big linkedin icon"></i></a>
                        </nav> 

                        <nav><a href="https://www.instagram.com/harrivignesh/" target="_blank" rel="noopener noreferrer">
                           <i className="big instagram icon"></i></a>
                           </nav>
                       <nav>
                       <a href="https://www.facebook.com/hari.vignesh.77398" target="_blank" rel="noopener noreferrer">
                           <i className=" big facebook icon"></i></a>
                       </nav>
                           <nav><a href="https://twitter.com/harivigneshG" target="_blank" rel="noopener noreferrer">
                           <i className="big twitter icon"></i></a></nav>
                            

                
                    </div>
                   
                
                
                </footer>





          
    </div>
                 
        
    );
}



export default Project;