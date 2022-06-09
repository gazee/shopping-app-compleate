import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


function Footer(props) {
  return (
    <footer>


<div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Company Name © 2022</p>
        </footer>
    </div>
    </footer>
  );
}

export default Footer;
