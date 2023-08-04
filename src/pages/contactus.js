import React, { useEffect } from 'react';
import '../styles/contactus.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  useEffect(() => {
    loadFooter();
  }, []);

  function load(url, targetId) {
    const req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    document.getElementById(targetId).innerHTML = req.responseText;
  }

  function loadFooter() {
    load('footer.html', 'footer');
  }

  return (
    <div>
      <div className="container2">
        <section>
          <h1 align="center">Contact Us</h1>
          <p align="center">We'd love to hear from you! If you have any questions, feedback, or inquiries, please feel free to get in touch with us using the contact form below or through the provided contact details.</p>
        </section>
      </div>
      <div className="container12">
        <form>
          <h1>Opinion Form</h1>
          <input type="text" id="firstName" placeholder="First Name" required />
          <input type="text" id="lastName" placeholder="Last Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="mobile" placeholder="Mobile" required />
          <h4>Type Your Message Here...</h4>
          <textarea required></textarea>
          <input type="submit" value="Send" id="button" />
        </form>
      </div>
      <section className="contact-us">
        <div className="contact-col">
          <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.877868332033!2d77.1929019586914!3d28.61660407423769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sRashtrapati%20Bhavan!5e0!3m2!1sen!2sin!4v1690561727916!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </div>
      </section>
      <div id="footer"></div>
    </div>
  );
}

export default ContactUs;
