import { Footer } from "../components/Footer";
import { Helmet } from 'react-helmet';

export const About = () => {
    return (
        <>
        <div>
            <Helmet>
                <title>TechViz | About</title>
                <link rel="icon" href="../images/techvizeye2.png" type="image/logo-icon" />
            </Helmet>
            <section>
                <div className="abt-data-container">
                    <h1>About Us</h1>
                    <div className="abt-data">
                        <div>
                            <p>TechViz revolutionizes assistive technology for visually impaired individuals by integrating advanced features
                                such as distance measurement, image processing, and voice assistance. Custom datasets enhance accuracy, 
                                while a portable camera and glasses integration offer flexibility. Methodologically driven by user 
                                research, prototyping, and iterative testing, TechViz ensures usability, safety, and compliance. R&amp;D 
                                results include affordable technology, custom datasets, and AI integration, significantly enhancing independence and 
                                societal inclusion. Industrial outreach through extensive data, demos, and field tests underscores TechVizs effectiveness 
                                and accessibility.
                            </p>
                        </div>
                        <div>
                            <img src="../images/techvizeye2.png" alt="techviz" id="eyelogo" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <div className="img-abt-box">
                            <img src="../images/techviz_proj_pic.png" alt="Techviz" height="285px" width="380px" /><br /><br /><br /><br />
                            <img src="../images/project_img2NEW.png" alt="Techviz" height="150px" width="250px" /><br />
                            <img src="../images/project_img3NEW.png" alt="Techviz" height="200px" width="250px" /><br /><br /><br /><br />
                            <img src="../images/project_img4NEW.png" alt="Techviz" height="300px" width="250px" style={{transform: 'rotateZ(7.5deg)'}} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="team-list-container">
                    <div className="team-list">
                        <h1>Our Team</h1>
                        <div className="tmlst-container" id="tm-box">
                            <div className="tmlst">
                                <h2>Team Lead</h2>
                                <p>Harshit Kumar</p>
                            </div>
                        </div>
                        <div className="combine-tmlst">
                            <div className="tmlst-container">
                                <div className="tmlst">
                                    <h2>Image&nbsp;Processing&nbsp;Team</h2>
                                    <p>Harpreet Singh</p>
                                    <p>Jashanpreet Singh</p>
                                    <p>Dhruv</p>
                                    <p>Bhavini Goel</p>
                                    <p>Mancharan</p>
                                    <p style={{color:"transparent"}}>.</p>
                                </div>
                            </div>
                            <div className="tmlst-container">
                                <div className="tmlst">
                                    <h2>Embedded&nbsp;Team</h2>
                                    <p>Mohit</p>
                                    <p>Ashish</p>
                                    <p>Naman</p>
                                    <p>Priyanshi</p>
                                    <p>Mayank</p>
                                    <p>Muskan</p>
                                </div>
                            </div>
                        </div>
                        <div className="combine-tmlst">
                            <div className="tmlst-container">
                                <div className="tmlst">
                                    <h2>Website&nbsp;Development&nbsp;Team</h2>
                                    <p>Kapil</p>
                                    <p>Samriti</p>
                                </div>
                            </div>
                            <div className="tmlst-container">
                                <div className="tmlst">
                                    <h2>App&nbsp;Development&nbsp;Team</h2>
                                    <p>Ayush Mishra</p>
                                    <p style={{color:"transparent"}}>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        </>
    );
};