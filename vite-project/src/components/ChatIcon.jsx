import { useState } from "react";
import './ChatIcon.css';

export const Chat = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [email, setEmail] = useState('');
    const [isEmailSet, setIsEmailSet] = useState(false);

    const questions = [
        { question: "What is TechViz?", answer: "TechViz is a device designed for visually impaired individuals to detect objects and navigate safely." },
        { question: "How does TechViz work?", answer: "TechViz uses sensors to detect obstacles and provides audio feedback to the user through a speaker." },
        { question: "Who can use TechViz?", answer: "TechViz is designed for visually impaired individuals of all ages." },
        { question: "Is TechViz easy to use?", answer: "Yes, TechViz is easy to use and can be operated with minimal training." },
        { question: "What type of sensors does TechViz use?", answer: "TechViz uses image processing, infrared, and ultrasonic sensors to detect obstacles." },
        { question: "How is TechViz worn?", answer: "TechViz is worn on the wrist like a wristband, making it portable and convenient." },
        { question: "Is TechViz affordable?", answer: "Yes, TechViz is designed to be affordable and accessible to a wide user base." },
        { question: "Can TechViz be used indoors and outdoors?", answer: "Yes, TechViz is effective for both indoor and outdoor environments." },
        { question: "How does TechViz enhance safety?", answer: "TechViz alerts the user to obstacles, helping them navigate safely and avoid collisions." },
        { question: "Is TechViz supported by any organizations?", answer: "Yes, TechViz collaborates with government initiatives and special schools to support the visually impaired community." },
        { question: "Can TechViz be integrated with other smart devices?", answer: "Future versions of TechViz aim to integrate with smart environments and devices for enhanced functionality." }
    ];      

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleQuestionClick = (answer) => {
        setMessages([...messages, { from: 'user', text: answer.question }, { from: 'bot', text: answer.answer }]);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setIsEmailSet(true);
    };

    const handleUserQuestionSubmit = (e) => {
        e.preventDefault();
        const userQuestion = e.target.elements.userQuestion.value;
        setMessages([...messages, { from: 'user', text: userQuestion }]);
        sendEmail(userQuestion);
        e.target.reset();
    };

    const sendEmail = (question) => {

        fetch("http://localhost:5000/api/chatbox/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, question }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            // Handle the response from the server
            setMessages([...messages, { from: 'bot', text: 'Your question has been sent to our team. We will get back to you shortly.' }]);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
    // console.log(`Sending email with question: ${question} from ${email}`);
    };

    return (
        <>
            <section>
                <div className="chat-container">
                    <button className="chat-button" onClick={handleToggleChat}>
                    {/*{isOpen ? 'Close Chat' : 'Chat with us'}*/}
                    {isOpen ? <img src="../images/close-icon-png-22-removebg-preview.png" alt="Close Chat" id="close-btn-img" /> : <img src="../images/vector-chat-icon-removebg-preview.png" alt="Chat with us" id="chat-on-img" />} 
                    </button>
                    {isOpen && (
                    <div className="chat-box">
                        <div className="chat-header">TechViz Support</div>
                        <div className="chat-body">
                            {messages.map((message, index) => (
                                <div key={index} className={`chat-message ${message.from}`}>
                                {message.text}
                                </div>
                            ))}
                            {!isEmailSet && (
                                <form className="chat-form" onSubmit={handleEmailSubmit}>
                                    <input type="email" id="chat-email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <button type="submit" className="chat-submit" >Start Chat</button>
                                </form>
                            )}
                            {isEmailSet && questions.map((q, index) => (
                                <button key={index} onClick={() => handleQuestionClick(q)} className="chat-question">
                                {q.question}
                                </button>
                            ))}
                            {isEmailSet && (
                                <form className="chat-form" onSubmit={handleUserQuestionSubmit}>
                                    <input type="text" id="chat-text" name="userQuestion" placeholder="Ask a question..." required />
                                    <button type="submit" className="chat-submit" >Send</button>
                                </form>
                            )}
                        </div>
                    </div>
                    )}
                </div>
            </section>
        </>
    );
};
