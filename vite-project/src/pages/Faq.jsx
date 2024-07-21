import { Link } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { useMediaQuery } from 'react-responsive';

export const Faq = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 600px)',
    });

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 600px)'
    });
    
    return (
        <>
            <section>
                <div className='faq-sec-div'>
                    {isDesktopOrLaptop && <h1 style={{textAlign: 'center', fontSize: 58, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Frequently Asked Questions</h1>}
                    {isMobile && <h1 style={{textAlign: 'center', fontSize: 32, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Frequently Asked Questions</h1>}
                    <div className="faq-box">
                    <h2>What is Techviz?</h2>
                    <p>TechViz revolutionizes assistive technology for visually impaired 
                        individuals by integrating advanced features such as distance measurement, image processing, and voice assistance. 
                        Custom datasets enhance accuracy, while a portable camera and glasses integration offer flexibility.
                        TechViz ensures usability, safety, and compliance.</p>
                    <Link to="/techviz">
                        <button type="button" id="faqbtn" style={{animation: 'none'}}>Learn More →</button>
                    </Link>
                    </div>
                    <div className="faq-box">
                    <h2>How Does Techviz help Blind People?</h2>
                    <p>Techviz developed a wristband that can scan objects/obstacles 
                        ahead of the user and give information about what lies ahead through audio signals.
                        The person is not only dependent on the camera sensors. Techviz embedded ultrasonic sensor, 
                        Lidar Sensor, Thermal sensor etc. so that user can rely on the output provided by the wrist band.</p>
                    </div>
                    <div className="faq-box">
                    <h2>Why do we need this device?</h2>
                    <p>
                    </p><ul>
                        <li><p>The global market size for people with visual impairments is estimated to be around {43}(4.3 crore) million people (WHO). {295} million (30 crore) in moderate blind.</p>
                        </li>
                        <li><p>In India, the market size for people with visual impairments is approximately around 18 million(1.8 crore) individuals, according to the report published by the National Programme for Control of Blindness (NPCB).</p>
                        </li>
                        <li><p>Some are further narrowed down based on the companys resources, market penetration strategies, and competition. One million people in Chandigarh, Haryana, Punjab, Himachal Pradesh and neighbourhood states.</p>
                        </li>
                    </ul>
                    <p />
                    </div>
                    <div className="faq-box">
                    <h2>What are the features of this device?</h2>
                    <p>
                    </p><ul>
                        <li><p>Provide Integration of Chatgpt &amp; Google assistant to communicate and updated through latest happenings in the world.</p>
                        </li>
                        <li><p>Provide App- User can update distance threshold and other sensors settings. User can also update their surroundings to the portal which creates custom dataset to device.</p>
                        </li>
                        <li><p>User can remove the camera module from the device and it will put anywhere on the body at the range of 3 metres.</p>
                        </li>
                    </ul>
                    <p />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};