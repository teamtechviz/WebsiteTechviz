import "./Footer.css";

export const Footer = () => {
        return (
            <>
            <footer>
                <div>
                    <div className="info" style={{paddingTop: 10}}>
                    <h1 style={{textAlign: 'center', fontSize: 38}}>Contact Us</h1>
                    <div className="fotr">
                        <div className="contact-info">
                        <p style={{fontSize: 24, fontWeight: 'bold'}}>EMAIL</p>
                        <p>teamtechviz@gmail.com</p>
                        </div>
                        {/* <div class="contact-info">
                                <p style="font-size: 24px; font-weight: bold;">PHONE</p>
                                <p style="font-size: 18px;"><b>-Harshit Kumar</b> <br> +91 9955165091</p>
                                <p style="font-size: 18px;"><b>-Mancharan</b> <br> +91 9915013842</p>
                            </div> */}
                        <div className="contact-info" style={{width: 320}}>
                        <p style={{fontSize: 24, fontWeight: 'bold'}}>ADDRESS</p>
                        <p style={{fontSize: 19}}>MDART, SBI ATM, Block-3, University Institute of Engineering and Technology, Sector-25, Panjab University, Chandigarh, India</p>
                        </div>
                    </div>
                    </div><br /><br />
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