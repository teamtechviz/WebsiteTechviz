import { NavLink } from "react-router-dom";
import "./ErrorPg.css";


export const ErrorPg = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <div>
            <h2 className="header" style={{ textAlign: 'center' }}>404</h2>
            <h4 style={{ textAlign: 'center', fontSize: 35, margin: '0 25px 20px' }}>Sorry! Page not found</h4>
            <p style={{ textAlign: 'center', fontSize: 18, margin: 30 }}>
              Oops! It seems like the page you are trying to access doesnot exist.
              If you believe there is an issue, feel free to report it, and we wll
              look into it.
            </p>
            <div className="btns" style={{ textAlign: 'center' }}>
              <NavLink to="/">Return Home</NavLink>
              <NavLink to="/contact">Report Problem</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};