import React from "react";
import "./css/styles.css";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <img src="Logo/1.png" alt="Logo" />
        <a src="Login.js">Login</a>
        <a href="#Signup">Signup</a>
        <a href="#home">Home</a>
        <a href="review.html">Review</a>
      </div>

      {/* Page content */}
      <main>
        <div>
          <h1>Welcome to Our Website</h1>
          <p>This is the main content of your webpage.</p>
          <Login />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Learn more about our Website.</p>
          <a href="about.html">Read More</a>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Get in touch with our team.</p>
          <a href="contact.html">Contact Form</a>
        </div>
        <div className="footer-section">
          <h2>Review</h2>
          <p>Leave a review about your experience.</p>
          <a href="review.html">Write a Review</a>
        </div>
        <div className="footer-section">
          <h2>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7877164650213!2d-74.00597368459704!3d40.71277528374442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1606800978057!5m2!1sen!2sca"
            width="250"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Location"
          ></iframe>
        </div>
      </footer>
    </div>
  );
}

export default App;
