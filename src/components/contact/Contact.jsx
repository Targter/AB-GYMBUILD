import React from "react";
import "./contact.css";
import Footer from "../footer/Footer";
import LOCATION_CYAN from "../../assets/logos/location-cyan.png";
import PHONE_CYAN from "../../assets/logos/phone-cyan.png";
import EMAIL_CYAN from "../../assets/logos/email-cyan.png";
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png";
import JOHN from "../../assets/photos/john.png";
import ANYA from "../../assets/photos/anya.png";
import GREG from "../../assets/photos/greg.png";
import CLARA from "../../assets/photos/clara.png";
import LEO from "../../assets/photos/leo.png";
import MARIANA from "../../assets/photos/mariana.png";
import CHEVRON from "../../assets/logos/chevron-up.png";
import classNames from "classnames";

const contactData = [
  {
    avatar: JOHN,
    name: "John",
    role: "manager",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "male",
  },
  {
    avatar: ANYA,
    name: "Anya",
    role: "fitness coach",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "female",
  },
  {
    avatar: GREG,
    name: "Greg",
    role: "fitness coach",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "male",
  },
  {
    avatar: CLARA,
    name: "Clara",
    role: "fitness coach",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "female",
  },
  {
    avatar: LEO,
    name: "Leo",
    role: "boxing coach",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "male",
  },
  {
    avatar: MARIANA,
    name: "Mariana",
    role: "boxing coach",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Donec vitae arcu.",
    gender: "female",
  },
];

const Contact = () => {
  return (
    <div className="container">
      <section id="contact">
        <h1 className="contact-title">Reach out to us!</h1>
        <div className="contact-container">
          <div className="contact-london">
            <h2>Ab gym</h2>
            <ul>
              <li>
                <img src={LOCATION_CYAN} alt="" />
                416 Marion Drive
              </li>
              <li>
                <img src={PHONE_CYAN} alt="" />
                +123 456 789 000
              </li>
              <li>
                <img src={EMAIL_CYAN} alt="" />
                bansalabhay00@gmail.com
              </li>
              <li>
                <img src={CLOCK_CYAN} alt="" />
                MO - SU: 0:00 - 0:00
              </li>
            </ul>
          </div>

          <form action="" onSubmit="">
            <div className="contact-form-bg">
              <div className="contact-form">
                <div className="first-row">
                  <div className="form-group">
                    <label className="input-text" htmlFor="fullName">
                      Full Name
                    </label>
                    <input type="text" id="fullName" name="fullName" required />
                  </div>

                  <div className="form-group">
                    <label className="input-text" htmlFor="email">
                      Email
                    </label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>

                <div className="second-row">
                  <label className="input-text" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="message"
                    name="message"
                    id="message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button type="submit" className="send-btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="team">
        <h1 className="team-title">Meet the team</h1>
        <div className="team-container">
          {contactData.map(
            ({ avatar, name, role, description, gender }, index) => {
              const className_name = classNames({
                john: name === "John",
                anya: name === "Anya",
                greg: name === "Greg",
                clara: name === "Clara",
                leo: name === "Leo",
                mariana: name === "Mariana",
              });

              return (
                <div
                  key={index}
                  className={`team-card ${
                    gender === "male" ? "male" : "female"
                  } ${className_name}`}
                >
                  <div class="img-box">
                    <img className="avatar" src={avatar} alt="avatar" />
                  </div>
                  <h3 className="role">{role}</h3>
                  <div class="content-box">
                    <img src={CHEVRON} className="chevron" alt="chevron"></img>
                    <h2 className="name">{name}</h2>
                    <div class="description-box">
                      <p className="description">{description}</p>
                    </div>
                    <a href="/">Book a lesson</a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
