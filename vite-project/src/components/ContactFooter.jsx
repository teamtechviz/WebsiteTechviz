import "./Footer.css";

export const ContactFooter = () => {
        return (
            <>
                <footer>
                    <div style={{ paddingTop: 10}}>
                        <div className="footer-content">
                        <h3>Connect with Us</h3>
                        <ul className="socials">
                            <li><a href="https://www.linkedin.com" target="_blank"><img src="../images/linkedin.png" alt="LinkedIn" /></a></li>
                            <li><a href="mailto:example@gmail.com" target="_blank"><img src="../images/email (1).png" alt="Email" /></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><img src="../images/instagram (1).png" alt="Instagram" /></a></li>
                            <li><a href="https://www.facebook.com" target="_blank"><img src="../images/facebook.png" alt="Facebook" /></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><img src="../images/twitter (1).png" alt="Twitter" /></a></li>
                        </ul>
                        </div>
                        <div className="footer-bottom">
                        <p>Copyright © 2024 TechViz. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </>
        );
};