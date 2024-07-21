import { ContactForm } from "../components/ContactForm";
import { Link } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { TechvizVideo } from "../components/TechvizVideo";
import { Helmet } from 'react-helmet';

function linkpg() {
    const address = "/techviz";
    window.location.href = address;
}

export const Home = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>TechViz</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="../favicon_io (1)/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="../favicon_io (1)/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="../favicon_io (1)/favicon-16x16.png" />
                    <link rel="manifest" href="../favicon_io (1)/site.webmanifest" />
                </Helmet>
                <section id="spcl">
                    <div className="detail">
                    <div id="detl">
                        <p style={{fontSize: 48, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>TECHVIZ&nbsp;&nbsp;<img src="../images/techvizeye2.png" alt height="20%" width="20%" id="frntlogo" /></p>
                        <p style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Enhancing Vision Through Technology</p>
                        <p style={{fontSize: 24}}>TechViz revolutionizes assistive technology for visually impaired individuals by integrating advanced features such as distance measurement, image processing, and voice assistance.</p>
                        <Link to="/techviz">
                            <button type="button" id="lrnbtn"><b>Learn More →</b></button>
                        </Link>
                    </div>
                    <div style={{width: 400, margin: 0}}>
                        <img src="../images/techviz_proj_pic.png" alt="techviz" id="mnpg" />
                    </div>
                    </div>
                </section>
                <section id="sec-need">
                    <div>
                    <h1 style={{textAlign: 'center', fontSize: 62, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}><a href="/" />WHY NEEDED?</h1>
                    <div className="need-data">
                        <div className="need-info" id="ndimg">
                        <div>
                            <img src="../images/techviz_proj_pic.png" alt="techviz" height="100%" width="420px" />
                        </div>
                        <div>
                            <img src="../images/project_img2NEW.png" alt="techviz" height="50%" width="250px" /><br />
                            <img src="../images/project_img3NEW.png" alt="techviz" height="50%" width="250px" />
                        </div>
                        </div>
                        <div className="need-info" id="nddata">
                        <div id="need-detail">
                            <div><p style={{textAlign: 'justify'}}>Daily tasks become intricate puzzles, from navigating busy
                                streets to reading the evening news. Blindness creates a
                                barrier to information and independence.</p></div>
                        </div><br />
                        </div>
                    </div>
                    </div><br />
                </section>
                <section id="sec-sol">
                    <h1 style={{fontSize: 62, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginLeft: 250}}>The Solution</h1>
                    <div className="sol-container">
                    <div className="sol-data" style={{width: 3000}}>
                        <p style={{textAlign: 'justify', fontSize: 23, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>Techviz developed a wristband that can scan objects/obstacles
                        ahead of the user and give information about what lies ahead
                        through audio signals.</p>
                        <p style={{textAlign: 'justify', fontSize: 22, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>The person is not only dependent on the camera sensors.
                        Techviz embedded ultrasonic sensor, Lidar Sensor,
                        Thermal sensor etc. so that user can rely on the output
                        provided by the wrist band.</p>
                        <Link>
                            <button type="button" id="solbtn" onClick={() => linkpg()}>Learn More →</button>
                        </Link>
                    </div>
                    <div className="sol-data">
                        <img src="../images/techviz_proj_pic.png" alt="techviz" id="solimg" />
                    </div>
                    </div>
                </section>
                <section style={{padding: '50px 0 0'}}>
                    <div className="video-container" style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>
                    <h1>Techviz Demo Video</h1>
                    <TechvizVideo /><br />
                    <center>
                        <Link>
                            <button type="button" style={{alignSelf: 'center'}} id="dwnld">Download App</button>
                        </Link>
                    </center>
                    <br />
                    </div>
                </section>
                <section>
                    <ContactForm />
                </section>
                <Footer />
            </div>
        </>
    );
};