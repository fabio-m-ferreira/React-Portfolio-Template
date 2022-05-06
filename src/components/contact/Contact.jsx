import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5z5yvei",
        "template_ph0wd2h",
        form.current,
        "23DIf_2hTb5TfNtdB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        {/* Contact Options */}
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>john.doe@gmail.com</h5>
            <a
              href="mailto:john.doe@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>John Doe</h5>
            <a href="https://m.me/john_doe" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+123456789"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        {/*Contact Form*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* End of Contact Form */}
      </div>
    </section>
  );
};

export default Contact;
