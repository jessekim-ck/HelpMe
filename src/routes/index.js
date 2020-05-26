import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../App.js";
import img_coffee from "../assets/coffee.jpg";


const Index = () => {

    return (
        <div>
            <div className="door" style={{"backgroundImage": `url(${img_coffee})`, "backgroundRepeat": "no-repeat", "backgroundSize": "35%"}}>
                <p>Save your time.<br/>Never hurry.</p>
            </div>

            <Carousel className="service-examples">
                <Carousel.Item className="item">
                    <img 
                        src="https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/4/18/8f48f64d7dc147f8bef5d8ce8e90d6c7_18.jpg"
                        alt="report"/>
                    <Carousel.Caption>
                        <h4>Submitting Report</h4>
                        <p>Do you have no time to submit report by the deadline?</p>
                        <button className="button-CTA" onClick={() => {window.location.href = "help_me/help_me"}}>Help Me</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="item">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCT1guAsP-Kh61Q5XtEQFWrOG2k9C6vEwz79J8rNfWqtQv-qvV&usqp=CAU"
                        alt="report"/>
                    <Carousel.Caption>
                        <h4>Pick Up a Lunch</h4>
                        <p>Do you need someone to bring you a sandwich?</p>
                        <button className="button-CTA" onClick={() => {window.location.href = "help_me/help_me"}}>Help Me</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="item">
                    <Carousel.Caption>
                        <h4>Do you need any help?</h4>
                        <p>I'm here to help you now</p>
                        <button className="button-CTA" onClick={() => {window.location.href = "help_me/help_me"}}>Help Me</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="security-guide">

                <h3>Don't worry about anything else. We'll take care.</h3>

                <div className="items">
                    <div>
                        <img 
                            src="https://lh3.googleusercontent.com/proxy/X9DTI2Dz3hP3N2KG1Ch0e2qJe9xZZW1_ZG6R34JRnZnei_h3ysd84EeohwPOoHaXb2qrSCrPBbF7CRyvLvUhhsHXRjCMk7U44fqLmMj9BcJ5ovmP_-sMsDOHzRO-0K29btMaKNTc2znM7hbZ-07imo8MzHGlNivLvp6wJhiCiew2I5r7sYfxyprf9m_T43lKn8ERn3hN8RgeAalnhM7yFP35"
                            alt="eg"
                        />
                        <p>Only verfied SNU people</p>
                    </div>
                    
                    <div>
                        <img 
                            src="https://image.flaticon.com/icons/png/512/2360/2360248.png"
                            alt="eg"
                        />
                        <p>Open review</p>
                    </div>
                    
                    <div>
                        <img 
                            src="https://itg.wfu.edu/wp-content/uploads/Cogn_mode.png"
                            alt="eg"
                        />
                        <p>Guaranteed Anonymity</p>
                    </div>
                </div>
            </div>

            <div style={{"margin": "96px"}}>
                <center><p style={{"fontSize": "24px", "marginBottom": "24px"}}>Help people and make money!</p></center>
                <center><button onClick={() => {window.location.href = "help_me/help_him"}} className="button-CTA">Help Him</button></center>
            </div>

            <div className="footer">
                <p>This business is fake. It is a part of team projects for the course Management Information Systems, Seoul National University.</p>
            </div>
        </div>
    )
};

export default Index;
