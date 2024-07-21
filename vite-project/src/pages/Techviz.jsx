import { Link } from 'react-router-dom';
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { TechvizVideo } from "../components/TechvizVideo";
import { Helmet } from 'react-helmet';

function jumpId() {
    const secId = "#sec-tech";
    document.location = secId;
}

function myfunction(x) {
    let i,j;
     for (i=x; i<=x; i++)
     {
        document.getElementById("mode"+i+"").style.display="inline-block";
        document.getElementById("btn"+i+"").style.backgroundColor="rgba(0, 132, 255, 0.833)";
        for (j=1; j < 4; j++)
        {
            if(j!==i)
            {
                document.getElementById("mode"+j+"").style.display="none";
                document.getElementById("btn"+j+"").style.backgroundColor="rgba(0, 0, 115, 0.833)";
            }  
        }
     }
}

document.addEventListener('DOMContentLoaded', () => {
    const techInfo = document.querySelectorAll('.tech-info');
    const techAnimate = document.querySelectorAll('.techA');
    const modesA = document.querySelectorAll('.modes');
    const colMode = document.querySelectorAll('.col-modes');
    colMode.classList.remove('mode-transition');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('tech-info')) {
                    entry.target.classList.add('sec1-tech-animation');
                } else if (entry.target.classList.contains('techA')) {
                    entry.target.classList.add('tech-animation');
                } else if (entry.target.classList.contains('modes')) {
                    entry.target.classList.add('mode-animation');
                } else if (entry.target.classList.contains('col-modes')) {
                    entry.target.classList.add('mode-transition');
                }
            } else {
                if (entry.target.classList.contains('tech-info')) {
                    entry.target.classList.remove('sec1-tech-animation');
                } else if (entry.target.classList.contains('modes')) {
                    entry.target.classList.remove('mode-animation');
                // eslint-disable-next-line no-dupe-else-if
                } else if (entry.target.classList.contains('modes')) {
                    entry.target.classList.remove('mode-animation');
                } else if (entry.target.classList.contains('col-modes')) {
                    entry.target.classList.remove('mode-transition');
                }
            }
        });
    });

    observer.observe(techInfo);
    observer.observe(techAnimate);
    observer.observe(modesA);
    observer.observe(colMode);
});


// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const techAnimate = entry.target.querySelector('.techA');
//       const sec1_techAnimate = entry.target.querySelector('.tech-info');
//       techAnimate.classList.remove('tech-animation-rev');
  
//       if (entry.isIntersecting) {
//         techAnimate.classList.add('tech-animation');
//         sec1_techAnimate.classList.add('sec1-tech-animation');
//          return; // if we added the class, exit the function
//       }
//         // techAnimate.classList.remove('tech-animation');
//         techAnimate.classList.add('tech-animation-rev');
//         sec1_techAnimate.classList.remove('sec1-tech-animation');
//       }
//     );
// });
// observer.observe(document.querySelector('.sec1-th'));
// observer.observe(document.querySelector('.section-techviz'));


// // Remove the transition class
// const Mode = document.querySelector('.modes');
// Mode.classList.remove('mode-transition');
// const colMode = document.querySelector('.col-modes');
// colMode.classList.remove('mode-transition');

// const observer2 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       Mode.classList.add('mode-transition');
//       colMode.classList.add('mode-transition');
//       return;
//     }
//     Mode.classList.remove('mode-transition');
//     colMode.classList.remove('mode-transition');
//   });
// });
// observer2.observe(document.querySelector('.dev-mode'));
// observer2.observe(document.querySelector('.section-modes'));




export const Techviz = () => {
    return (
        <>
        <div>
            <Helmet>
                <title>TechViz</title>
                <link rel="icon" href="../images/techvizeye2.png" type="image/logo-icon" />
            </Helmet>
            <section id="sec-1" className="sec1-th">
                <div className="tech-info sec1-tech-animation">
                    <div>
                        <img src="../images/techviz_proj_pic.png" alt="techviz" id="techimg" />
                    </div>
                    <div id="techD">
                        <h1 style={{marginLeft: 28, fontSize: 78, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginBottom: 40}}>Techviz</h1>
                        <p style={{color: 'rgb(0, 0, 119)', textAlign: 'justify', fontSize: 26, fontWeight: 500, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', marginTop: 0}}>The Worlds Most Powerful Device to Ehnance Vision through Technology</p>
                        <Link>
                            <button type="button" id="techbtn" onClick={() => jumpId()}>Learn More ↓</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="sec-tech" className="section-techviz">
                <div className="techA tech-animation">
                <div>
                    <h1 style={{fontSize: 72, textAlign: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Why Techviz?</h1>
                    <div style={{margin: '0 380px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>
                    <p style={{color: 'rgb(0, 0, 119)', fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Revolutionizes assistive technology for visually impaired individuals by integrating advanced features.</p>
                    <p style={{color: 'rgb(35, 35, 35)', fontSize: 18, textAlign: 'center'}}>Ensures usability, safety, and compliance, significantly improving the independence and quality of life for visually impaired individuals.</p>
                    <p style={{color: 'rgb(35, 35, 35)', fontSize: 18, textAlign: 'center'}}>Aims to further advaninclusivity and empowerment through advanced features and expanded partnerships.</p>
                    </div><br />
                    <img src="../images/project_img2NEW2-1.png" alt height="500px" width="100%" id="tech-main-img" />
                </div>
                </div>
            </section>
            <section className="section-modes">
                <div className="col-modes mode-transition">
                <div style={{marginTop: 90}}>
                    <h2 style={{fontSize: 48, textAlign: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Device Modes</h2>
                    <div className="dev-mode">
                    <div className="mode-device" style={{padding: '10px 0'}}>
                        <button type="button" onMouseOver={() => myfunction(1)} className="modbtn" id="btn1" style={{backgroundColor: 'rgba(0, 132, 255, 0.833)'}}>MODE 1</button><br />
                        <button type="button" onMouseOver={() => myfunction(2)} className="modbtn" id="btn2">MODE 2</button><br />
                        <button type="button" onMouseOver={() => myfunction(3)} className="modbtn" id="btn3">MODE 3</button>
                    </div>
                    <div className="mode-device" style={{width: 1000}}>
                        <div id="mode1" className="modes mode-transition mode-animation" style={{display: 'block'}}>
                        <h1 style={{fontSize: 28}}>Mode {1} (Distance)</h1>
                        <p style={{fontSize: 24}}>Utilizes ultrasonic and infrared sensors to measure distances to nearby obstacles, providing immediate haptic feedback to alert users.</p>
                        </div>
                        <div id="mode2" className="modes mode-transition mode-animation">
                        <h1 style={{fontSize: 28}}>Mode {2} (Camera)</h1>
                        <p style={{fontSize: 24}}>Employs a portable camera to capture images and process them for object recognition, delivering auditory feedback to describe the surroundings.</p>
                        </div>
                        <div id="mode3" className="modes mode-transition mode-animation">
                        <h1 style={{fontSize: 28}}>Mode {3} (Distance + Camera)</h1>
                        <p style={{fontSize: 24}}>Combines both distance measurement and image processing to offer a comprehensive perception of the environment, enhancing safety and awareness.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{marginTop: 90}}>
                    <h1 style={{fontSize: 48, textAlign: 'center', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>Features</h1>
                    <div className="dev-fetr">
                    <div className="feature">
                        <p>Provide Integration of Chatgpt &amp; Google assistant to communicate and updated through latest happenings in the world.</p>
                    </div>
                    <div className="feature">
                        <p>Provide App- User can update distance threshold and other sensors settings. User can also update their surroundings to the portal which creates custom dataset to device.</p>
                    </div>
                    <div className="feature">
                        <p>User can remove the camera module from the device and it will put anywhere on the body at the range of 3 metres.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="ftr-data">
                <div className="feature-info">
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Custom Datasets</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Development and Usage: Curate and update custom datasets specific to the needs of visually impaired users, improving the accuracy of object recognition and environmental feedback.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Personalization: Allow users to create and upload their own datasets via the companion app, tailoring the system to their unique preferences and needs.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Portable Camera</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Design: Develop a lightweight, high-resolution portable camera that seamlessly integrates with the TechViz system.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Functionality: Ensure the camera can be attached to different accessories, such as wristbands or glasses, providing flexibility and convenience.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Integration with ChatGPT and Google Assistant</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>ChatGPT: Enable AI-driven conversational support for answering questions, providing information, and assisting with device use.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Google Assistant: Implement voice command functionality for hands-free operation, enhancing accessibility and ease of use.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Battery Integration</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Power Management: Design a high-capacity, rechargeable battery with efficient power management to ensure long-lasting device operation.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Charging Solutions: Offer convenient charging options, such as wireless charging or fast charging capabilities, to minimize downtime.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Glasses with Portable Camera</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Design: Create comfortable and stylish glasses that can house the portable camera, providing an alternative option for users with weak eyesight.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Utility: Enhance user experience by offering a heads-up, unobtrusive method to capture and process visual information.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Compaction of TechViz Band</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Miniaturization: Focus on reducing the size and weight of the wristband without compromising functionality, making it more comfortable for daily use.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Durability: Use high-quality, flexible materials to ensure durability and resilience against everyday wear and tear.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>App Integration</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Help &amp; Support: Develop a companion app that offers tutorials, troubleshooting guides, and direct customer support to assist users.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Personalized Dataset Creation: Enable users to create, manage, and upload personalized datasets, enhancing the device’s adaptability and performance.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Switches for Local Server and Internet</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Toggle Switch: Implement easy-to-use switches that allow users to alternate between local processing and internet-based services like Google Assistant.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>User Control: Provide clear indicators and intuitive controls to manage connectivity preferences seamlessly.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Integration of Thermal Sensors</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Thermal Imaging: Incorporate thermal sensors to detect heat signatures, improving obstacle detection in low-visibility conditions.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Sensor Fusion: Combine thermal data with inputs from other sensors for a comprehensive understanding of the environment.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Feedback through Vibration and Neckband</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Vibration Alerts: Provide haptic feedback through the wristband to offer immediate, intuitive alerts.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Neckband with Bluetooth: Develop a Bluetooth-connected neckband for auditory feedback, offering a comfortable alternative to in-ear devices.</p></li>
                    </ul>
                    </div>
                    <div>
                    <h1 style={{color: 'rgb(0, 0, 119)'}}>Heat Reduction</h1>
                    <ul type="circle">
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Thermal Management: Implement advanced heat dissipation techniques such as passive cooling, heat sinks, and efficient circuit design to minimize heat buildup.</p></li>
                        <li><p style={{color: 'rgb(35, 35, 35)'}}>Material Choices: Use materials with good thermal conductivity to enhance comfort by reducing heat retention.</p></li>
                    </ul>
                    </div>
                </div>
                <div style={{margin: '80px 40px'}}>
                    <img src="../images/techviz_proj_pic.png" alt="Techviz" height="385px" width="440px" /><br /><br /><br /><br />
                    <img src="../images/project_img2NEW.png" alt="Techviz" height="350px" width="450px" /><br />
                    <img src="../images/project_img3NEW.png" alt="Techviz" height="400px" width="450px" /><br /><br /><br /><br />
                    <img src="../images/project_img4NEW.png" alt="Techviz" height="500px" width="450px" style={{transform: 'rotateZ(7.5deg)'}} />
                </div>
                </div>
            </section>
            <section>
                <ContactForm />
            </section>
            <section style={{backgroundColor: 'rgb(51, 51, 51)', paddingTop: 120}}>
            <TechvizVideo />
            </section>
            <Footer />
        </div>
        </>
    );
};