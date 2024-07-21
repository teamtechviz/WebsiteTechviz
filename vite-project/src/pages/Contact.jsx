import { ContactFooter } from "../components/ContactFooter";
import { useState } from "react";
import { Helmet } from 'react-helmet';

const defaultContactFormData = {
    username: "",
    email: "",
    phone: "",
    message: "",
};

export const Contact = () => {
    
    const [contact, setContact] = useState(defaultContactFormData);
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log(contact);

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(contact),
            });
            console.log("Response Data : ", response);

            const responseData = await response.json();
            console.log("Response From server", responseData);

            if(response.ok) {
                setContact(defaultContactFormData);
                alert("Message Sent Successfully");
            } 
            else {
                console.error("API Error:", response.status, response.statusText);
                alert(responseData.extraDetails ? responseData.extraDetails : responseData.message );
            }

        } catch (error) {
            // alert("Message Not Send");
            console.log(error);
        }
    };

    const handleReset = () => {
        setContact({
          username: '',
          email: '',
          phone: '',
          message: ''
        });
    };
    
    return (
        <>
            <div>
                <Helmet>
                    <title>TechViz | Contact</title>
                    <link rel="icon" href="../images/techvizeye2.png" type="image/logo-icon" />
                </Helmet>
                <section>
                    <div className="info">
                    <h1>Contact Us</h1>
                    <div className="data">
                        <div className="contact-info-pg">
                        <p>EMAIL</p>
                        <p id="email-contact">teamtechviz@gmail.com</p>
                        </div>
                        {/* <div class="contact-info">
                            <p style="font-size: 28px; font-weight: bold;">PHONE</p>
                            <p style="font-size: 21px;"><b>-Harshit Kumar</b> <br> +91 9955165091</p>
                            <p style="font-size: 21px;"><b>-Mancharan</b> <br> +91 9915013842</p>
                        </div> */}
                        <div className="contact-info-pg" id="address-info">
                        <p>ADDRESS</p>
                        <p>MDART, SBI ATM, Block-3, University Institute of Engineering and Technology, Sector-25, Panjab University, Chandigarh, India</p>
                        </div>
                    </div>
                    </div>
                </section>
                <section>
                    <div id="cfrm">
                        <div className="contact-map">
                            <h2 style={{textAlign: 'center'}}>Our Location</h2>
                            <div id="map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.905783130917!2d76.75174789678958!3d30.74914790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feded304364c5%3A0x8d258e666d90c270!2sUIET%20Block%203!5e0!3m2!1sen!2sin!4v1720220988215!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="540" 
                                    style={{ border: "0" }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h2 style={{textAlign: 'center'}}>Get In Touch</h2>
                            <div id="form">
                            <form action method="post" onSubmit={handleSubmit}>
                                <label htmlFor="name" className="frm-txt">Name:</label>
                                <input 
                                    type="text"
                                    name="username"
                                    id="name"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput} 
                                    required  
                                />
                                <br />
                                <label htmlFor="email" className="frm-txt">Email:</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="mail"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                                <br />
                                <label htmlFor="phone" className="frm-txt">Phone:</label>
                                <input 
                                    type="number" 
                                    name="phone" 
                                    id="num" 
                                    autoComplete="off"
                                    value={contact.phone}
                                    onChange={handleInput}
                                    required
                                />
                                <br />
                                <label htmlFor="message" className="frm-txt">Message:</label>
                                <textarea 
                                name="message" 
                                id="msg" 
                                autoComplete="off"
                                value={contact.message}
                                onChange={handleInput}
                                required
                                cols={30} 
                                rows={5} 
                                />
                                <br />
                                <br />
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <button type="submit" id="sbmt">SEND MESSAGE</button>
                                    <button type="button" id="rst" onClick={handleReset}>RESET</button>
                                </div><br /><br />
                            </form>
                        </div>
                    </div>
                    </div><br />
                </section>
                {/*<section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>*/}
                <ContactFooter />
            </div>
        </>
    );
};