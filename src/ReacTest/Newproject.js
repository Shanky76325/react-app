import React from "react";
import screen from "./screen.svg";
import ss from "./ss.svg";
import rect from "./rect.svg";
import home from "./Frame 32.svg";
import jobs from "./Jobs.svg";
import profile from "./Group.svg";
import bars from "./bars.svg";
import mask from "./mask.svg";
import Vect from "./Vect.svg";
import libar from "./libar.svg";
import person from "./person.svg";
import contact from "./contact.svg";

import headphone from "./headphone.svg";
import data from "./data.svg";
import sales from "./sales.svg";
import front from "./front.svg";
import signal from "./signal.svg";
import cook from "./cook.svg";
import chair from "./chair.svg";
import trim from "./trim.svg";
import key from "./key.svg";
import computer from "./computer.svg";
import picker from "./picker.svg";
import circle from "./circle.svg";
import grey from "./grey.svg";
import swiggy from "./swiggy.svg";
import paytm from "./paytm.svg";
import google from "./google.svg";
import tvtv from "./tvtv.svg";
import whtasapp from "./whtaspp.svg";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import  layer from "./layer.svg";
import  mess from "./mess.png";
import Oval from "./Oval.svg";





















function Newproject() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        initialSlide: 0,

        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (


        <div className="col-lg-12  ab">

            <img src={screen} className="sc1 " />

            <div>

                {/* <span><input type="text" id="insearch" placeholder="city" /></span> */}

                <div className="col-lg-4 has-feedback srch ">
                    <i className="	glyphicon glyphicon-chevron-down form-control-feedback ddown "></i>
                    <i className="form-control-feedback ddown1 "><img src={Vect} /></i>
                    <a><i className="glyphicon glyphicon-search form-control-feedback srch1 "></i></a>

                    <input type="text" className="form col-lg-4" placeholder="city" name="email" required />
                </div>

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
                        <img style={{ height: "30px",marginRight:40 }} src={home} /><br />
                        Login</li>
                    &nbsp;
                    &nbsp;
                    &nbsp;


                    <li><img src={bars} id="bars" /></li>
                </ul>


            
            </div>

            <div className="col-lg-12 sh">
                <ul id="cli">
                    <li>Categories</li>
                    <li>Advertise with us</li>
                    <li>Customer Care</li>
                    <li>Feedback</li>
                    <li>Help</li>
                </ul>
                <ul id="cli2">
                    <li>English-USD
                        &nbsp; <img src={ss} />

                    </li>
                </ul>




            </div>

            <div className="myimg">
            <p className="p">Search your Dream Job with NowCalls24.</p>
                {/* <img src={mask} className=" mask1" /> */}
                {/* <div>
                     */}



                    <center>
                        <div className="c2 row" >
                            <div className="col-lg-4 inpt">
                                <label for="Select" >Select Job Role</label>
                                <select type="select" className="form-control" placeholder="Select" name="select" required />

                            </div>

                            <div className="col-lg-4 inpt has-feedback">
                                <label for="email" ><b>Location</b></label>
                                <i className="glyphicon glyphicon-search form-control-feedback search"></i>

                                <input type="text" className="form-control" placeholder="Search Location" name="email" required />
                            </div>
                            <div className="col-lg-3 button">
                                <button className="btn" ><p className="t1">Search</p></button>
                            </div>

                            
                        </div>


                    </center> 


                {/* </div> */}

                
                 <div className="col-lg-12 top1">
                    <div>


                        <p className="w1">Top Job Roles</p>
                        <p className="w1"> Learning Seminars</p>


<div>
<img src={libar}  className="libar"/> 
                        <ul style={{display:'flex',float:'right'}} >
                            <li className="slc">
                            <b className="sb form-label">Sortby:</b>
                             <select type="select" className="form-group pull-right " placeholder="Select" name="select" required /> 
                            </li>
                           
                            <li className="bt">
                                <button className="btn1" ><p className="t1">Near Me</p></button>&nbsp;

                            </li>
                            <li className="bt">
                            <button className="btn2   " ><p className="t1">Post Free Job</p></button>

                            </li>
                        </ul>
                        <div>
                       

                        </div>
</div>

                    </div >

                </div> 


               

            </div>

            <div className=" BBox">






<div className=" BBox1  ">
    <img src={person} className="p1" />
    <p className="q1">Work from Home</p>
    <p className="q2">1223 Active Jobs</p >

</div>
<div className=" BBox1  ">
    <img src={contact} className="p1" />
    <p className="q3">Accountant</p>
    <p className="q4">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">

    <img src={headphone} className="p1" />
    <p className="q5">BPO / Customer<br />
        Care</p>
    <p className="q6">1139 Active Jobs</p >

</div>
<div className=" BBox1  ">
    <img src={data} className="p1" />
    <p className="q5">Data Entry / Back <br />
        Office</p>
    <p className="q7">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">
    <img src={sales} className="p1" />

    <p className="q5">Sales / Marketing</p>
    <p className="q8">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">
    <img src={front} className="p1" />

    <p className="p5">Receptionist / Front <br />
        Office</p>
    <p className="q9">1139 Active Jobs</p >


</div>

{/* next box parts */}






<div className=" BBox1  ">
    <img src={signal} className="p1" />
    <p className="q10">Hospitality<br />
        Executives</p>
    <p className="q2">1223 Active Jobs</p >

</div>
<div className=" BBox1  ">
    <img src={contact} className="p1" />
    <p className="q3">Accountant</p>
    <p className="q4">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">

    <img src={cook} className="p1" />
    <p className="q11">Cook / Chef
    </p>
    <p className="q6">1139 Active Jobs</p >

</div>
<div className=" BBox1  ">
    <img src={chair} className="p1" />
    <p className="q12">Driver</p>
    <p className="pp6">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">
    <img src={trim} className="p1" />

    <p className="q5">Beauticians / Spa</p>
    <p className="q8">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">
    <img src={key} className="p1" />

    <p className="q5">Mechanic</p>
    <p className="qq9">1139 Active Jobs</p >


</div>





{/* next 3parts */}




<div className=" BBox1  ">
    <img src={computer} className="p1" />
    <p className="q13">IT Software Engineer</p>
    <p className="q2">1223 Active Jobs</p >

</div>
<div className=" BBox1  ">
    <img src={picker} className="p1" />
    <p className="q15">Retail / Store <br />
        Executive</p>
    <p className="q16">1139 Active Jobs</p >


</div>
<div className=" BBox1  ">

    <img src={circle} className="p1" />
    <p className="q18">View All
    </p>


</div>
<br />

<div className="col-lg-12 better">
    <p className="nia" >Are you an employer?</p>
    <p className="nia1" >Hire In 30 Mins</p>
    <center><button className="text-center">Post Free Job</button></center>

    <br /><br />
    <div className="col-lg-5 col-md-4 col-sm-4 col-xs-4 took pull-right">
        <p className="plus"><b>50,00,000+</b></p>
        <p className="plus12" >Active Job Seekers</p>


    </div>
    <img src={grey} style={{ marginLeft: 70 }} />
    <div className="col-lg-5 col-md-4 col-sm-4 col-xs-4 took">

        <b className="plus0">1,50,000+</b>

        <p className="plus11">Registration Per month</p>
    </div>



</div>

{/* <div className=" col-lg-12  caro">

    <div>
    <p className="test">Testimonials</p>
   <center><img src={Oval} /></center>
   <p className="will">William Smith<br/>
-TeamNowCalls24 Associate</p>
<p className="will1">“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/> been the industry's standard dummy text ever since the 1500s.”</p>
        
        
        </div>
 */}
        

    
{/* </div>  */}



    
    
<div className="col-lg-12 bye">
    <ul style={{ display: 'flex' }}>

        <li>
            <img src={swiggy} style={{ paddingRight: '50px' }} />

        </li>
        <li>
            <img src={paytm} style={{ paddingRight: '50px' }} />

        </li>

        <li>
            <img src={google} style={{ paddingRight: '50px' }} />

        </li>
        <li>
            <img src={tvtv} style={{ paddingRight: '50px' }} />

        </li>
        <li>

            <img src={whtasapp} style={{ paddingRight: '50px' }} />

        </li>

    </ul>

</div>
<div className="col-lg-12 footer">
    <div className="col-lg-3">
<p style={{marginTop:60}}><img src={layer}/></p>
<li style={{color:"#FFFFFF"}}>NowCalls24 is an Indian internet 
technology company that provides local 
search for different services in India over 
the phone, website and mobile apps.</li>
</div>
<div className="col-lg-4 ">
<h3 className="te">Company</h3>
<li className="te1">About Us</li>
<li className="te1">Investors Section</li>
<li className="te1">Success</li>
<li className="te1">Customer Support</li>
<li className="te1">Advertise with Us</li>
<li className="te1">Customer Support</li>
<li className="te1">Press Sections



</li>





</div>

<div className="col-lg-2">
<h5 className="te3" style={{marginTop:60}}>Support</h5>
<li className="te3">Careers</li>
<li className="te3">Privacy Policy</li>
<li className="te3">Term & Condition</li>




</div>
<div className="col-lg-3">
<h5 className="te2">Contact Info</h5>
</div>

</div> 

<div  className="col-lg-12 fox">

<p style={{color:"#FCFCFC",paddingLeft:30, paddingTop:30}}>Copyright ©2021 NowCalls24. All rights reserved</p>
</div>





</div>
            
          

        </div>
        


    )
}

export default Newproject



