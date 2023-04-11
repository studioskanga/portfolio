import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
import image from './images/background.jpeg'

function Home (){
    return(
        <div className="Home">
            <div className="body">
                <div className="container col-lg-6">
                    <h1 className="head">Hello</h1>
                    <h2>I`M Evans Kosgei</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                
                <div className="Aboutme">
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et do sunt explicabo.
                    </p>
                    <div className="readmore">
                        <a href="" className="readmoreContent">Read More...</a>
                    </div>
                </div>
                <div className="whychooseme">
                    <h1>SKILLS</h1>
                    <div class="responsive container text-center">
                        <div class="row">
                            <div class="col-lg-4 col-centered">
                                <div className="whychoosemetext">
                                    <p>
                                        <h1><img src="" className="rounded"/></h1>
                                        <h3>Team Work</h3>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et do sunt explicabo.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-centered">
                                <div className="whychoosemetext">
                                    <p>
                                        <h1><img src="" className="rounded"/></h1>
                                        <h3>Team Work</h3>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et do sunt explicabo.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-centered">
                                <div className="whychoosemetext">
                                    <p>
                                        <h1><img src="" className="rounded"/></h1>
                                        <h3>Team Work</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et do sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Home;