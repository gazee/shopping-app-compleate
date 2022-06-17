import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


function Footer(props) {
  return (
    <footer>


<div className="footer-basic">
        <footer>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2022</p>
        </footer>
    </div>
    </footer>
  );
}

export default Footer;
