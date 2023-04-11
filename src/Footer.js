import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function Footer(){
    return(
    <div className="Home">
        <div className="footer">
            <div className="footer-content">
                <h3>Contact me</h3>
                <p><i>Email :</i> evanskosgei090@gmail.com</p>
                <p><i>Tel - </i>+25471234567</p>
                <p><i>P.O BOX </i>193 - 20103</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>© 2023 Evanskosgei. All rights reserved. 3rd Floor Baba-Dogo Street Nairobi Kenya  </p>
                </div>
                <div class="footer-menu">
                    <ul class="f-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Portofolio</a></li>
                    </ul>
                    </div>
            </div>   
        </div>
    </div>
    );
}
export default Footer;