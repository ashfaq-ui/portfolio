import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer(){

    return(
        <>
            <footer>
                
                <h1>Mohamed Ashfaq</h1>

                <ul className="footer-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="flex gap-4 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <p>© 2025 Mohamed Ashfaq. All rights reserved.</p>


            </footer>
        </>
    )
}