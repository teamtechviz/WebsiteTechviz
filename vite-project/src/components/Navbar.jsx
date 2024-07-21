import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
        return (
            <>
                <header>
                    <div className="box">
                        <div>
                            <NavLink to="/">
                            <img 
                                src="../images/techvizeye2.png" 
                                alt="techviz" 
                                id="imglogo" 
                                height="85%" 
                                width="35%" 
                                style={{boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.459)'}} 
                            />
                            </NavLink>
                        </div>
                        <div>
                            <nav className="navbar">
                                <div className="box2">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/techviz">Techviz</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/contact">Contact&nbsp;Us</NavLink>
                                    <NavLink to="/faq">FAQ</NavLink>   
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
        );
};