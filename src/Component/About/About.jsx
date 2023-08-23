import React from "react";
import { FaFacebook, FaTwitter,FaGithub,FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="about__images">
                <img src="./src/images/bg/user.jpg" alt="large img" />
                <div className="about__images__small">
                  <img src="./src/images/bg/user.jpg" alt="small img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="heading">Who I am?</div>
              <div className="about__info">
                <p className="about__info__text">
                  Hard-working listing programmer with a flair for creating
                  elegant solutions in the least amount of time. As a freelance
                  programmer, I have created many professional websites for
                  clients around the globe.ke love what we do and we do what our
                  clients love & work with great clients all over the world to
                  create thoughtful and purposeful websites.
                </p>
                <div className="about__info__block">
                  <span className="about__info__block__left">Name</span>
                  <span className="about__info__block__right">
                    Mohammad Sujon
                  </span>
                </div>
                <div className="about__info__block">
                  <span className="about__info__block__left">
                    Date Of Birth
                  </span>
                  <span className="about__info__block__right">16 Sep</span>
                </div>
                <div className="about__info__block">
                  <span className="about__info__block__left">Nationality</span>
                  <span className="about__info__block__right">Bangladesh</span>
                </div>
                <div className="about__info__socials">
                  <a
                    href="https://github.com/developer-sujon"
                    className="about__info__socials__circle"
                    target="_blank">
                    <FaGithub/>
                  </a>
                  <a
                    href="https://linkedin.com/in/developer-sujon"
                    className="about__info__socials__circle"
                    target="_blank">
                     <FaLinkedin/>
                  </a>
                  <a
                    href="https://twitter.com/developer_sujon"
                    className="about__info__socials__circle"
                    target="_blank">
                    <FaTwitter/>
                  </a>
                  <a
                    href="https://facebook.com/developer.sujonbd"
                    className="about__info__socials__circle"
                    target="_blank">
                    <FaFacebook/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
