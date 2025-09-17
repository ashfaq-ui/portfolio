import './Footer.css'

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

                <ul className="socialmedia-footer">
                    <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
                    <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                    <li><a href="#"><i className='bx bxl-instagram'></i></a></li>
                    <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
                    <li><a href="#"><i className='bx bxl-tiktok'></i></a></li>
                </ul>


            </footer>
        </>
    )
}