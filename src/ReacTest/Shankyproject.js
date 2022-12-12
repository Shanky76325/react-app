import React from "react";
import screen from "./screen.svg";
import ss from "./ss.svg";
import rect from "./rect.svg";
import home from "./Frame 32.svg";
import jobs from "./Jobs.svg";
import profile from "./Group.svg";
import bars from "./bars.svg";
import mask from "./mask.svg";

function Shankyproject() {

    return (
        <>

            <div className="container">
<span><img src={screen}/></span>
<span><input type="text"  id="insearch" placeholder="city" /></span>
<span><img src={ss} className="pic" /></span>
<span><img src={rect} className="pic2" /></span>

<span><i className="fa fa-search"></i>
                    </span>
                    </div>



                    <div>
                    <ul id='navli'>
                        <li>
                            <img src={profile} /><br />
                            Home
                        </li>
                        &nbsp;
                        &nbsp;
                    
                        <li><img src={jobs} /><br />
                            Jobs
                        </li>
                        &nbsp;
                        &nbsp;
                    
                        &nbsp;
                    

                        <li>
                            <img style={{ height: "30px" }} src={home} /><br />
                            Login</li>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    
                    
                        <li><img src={bars} id="bars" /></li>
                    </ul>

        
</div>

                
                
                
                
                <div id="nav2">
                <ul id="cli">
                    <li>Categories</li>
                    <li>Advertise with us</li>
                    <li>Customer Care</li>
                    <li>Feedback</li>
                    <li>Help</li>
                </ul>
                <ul id="cli2">
                    <li>English-USD
                     <img src={ss} />              
                        
                     </li>
                </ul>

                
                
        
            </div>

            
        <br/>
<div id="img">
    <span><img src={mask} className="mask1 "/></span>
   {/* <p className="word">Search your Dream Job with NowCalls24.</p>  */}
</div>

       
<div className="m2"> 
   hj
</div>  

            
               


 






                {/* <span>



<img src={screen} />
                </span>



                <div className="container2">

                    <input type="text" className="form-group" id="insearch" placeholder="city" />
                    <span><img src={ss} className="pic" /></span>
                    <span><img src={rect} className="pic2" />

                    </span>
                    <span><i className="fa fa-search"></i>
                    </span>
                    <ul id='navli'>
                        <li>
                            <img src={profile} /><br />
                            Home
                        </li>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <li><img src={jobs} /><br />
                            Jobs
                        </li>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;

                        <li>
                            <img style={{ height: "30px" }} src={home} /><br />
                            Login</li>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <li><img src={bars} id="bars" /></li>
                    </ul>

        


                </div>

            </div>
            <div id="nav2">
                <ul id="cli">
                    <li>Categories</li>
                    <li>Advertise with us</li>
                    <li>Customer Care</li>
                    <li>Feedback</li>
                    <li>Help</li>
                </ul>
                <ul id="cli2">
                    <li>English-USD
                        &nbsp; <img src={ss} />                   </li>
                </ul>
            </div>

            
            <div className="img">
                <span><img src={mask} className="mask" />

                    <p className="Text">Search your Dream Job with NowCalls24.</p>
<div className="txt">
                
            </div>

                </span>
            
             */}
            
            

            
            
        </>
    )
}

export default Shankyproject


