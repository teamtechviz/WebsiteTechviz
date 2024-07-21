import "./ContactForm.css";
import { useState } from "react";

const defaultContactFormData = {
    username: "",
    email: "",
    phone: "",
    message: "",
};

export const ContactForm = () => {
        
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
                <section id="contact-section-component">
                    <div id="cfrm-component">
                        <div className="contact-form-component">
                            <h2>Are you interested in our device?</h2>
                            <br />
                            <div id="form-component">
                                <form action method="post" onSubmit={handleSubmit}>
                                    <label htmlFor="name" className="frm-txt-component">Name:</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        id="name-component"
                                        autoComplete="off"
                                        value={contact.username}
                                        onChange={handleInput} 
                                        required  
                                    />
                                    <br />
                                    <label htmlFor="email" className="frm-txt-component">Email:</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        id="mail-component"
                                        autoComplete="off"
                                        value={contact.email}
                                        onChange={handleInput}
                                        required
                                    />
                                    <br />
                                    <label htmlFor="phone" className="frm-txt-component">Phone:</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        id="num-component" 
                                        autoComplete="off"
                                        value={contact.phone}
                                        onChange={handleInput}
                                        required
                                    />
                                    <br />
                                    <label htmlFor="message" className="frm-txt-component">Message:</label>
                                    <textarea 
                                    name="message" 
                                    id="msg-component" 
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
                                        <button type="submit" id="sbmt-component">SEND MESSAGE</button>
                                        <button type="button" id="rst-component" onClick={handleReset}>RESET</button>
                                    </div><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                </section>
            </>
        );
};