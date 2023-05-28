import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV.pdf';
        alink.click();
      });
    });
  };

  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 500,
    });
  }, []);

  const now = 80;
  const now1 = 75;
  const now2 = 70;
  const now3 = 70;
  const now4 = 65;
  const now5 = 70;

  return (
    <div className="about" id="About">
      <Container>
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="judul">About</h1>
            <p data-aos="zoom-in">
              Born in Jakarta on October 18, 2001, Undergraduate student majoring in Computer Science at Binus University. Front End Developer with one year experience working with HTML, CSS, JavaScript to create a good user experience for
              customers. Accustomed to working together on projects, finding solutions, and working under pressure.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="justify-content-center">
              <h2>Certificate</h2>
              <Carousel variant="dark" data-aos="fade-right">
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="sertifikat1.jpg" alt="First slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">Internship at DPR RI</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="Sertifikat2.jpg" alt="Second slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">DuniaCoding Workshop</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="Sertifikat3.jpg" alt="third slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">MySkill UI/UX Introduction</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-6">
            <div className="justify-content-center">
              <h2>Curriculum Vitae</h2>
              <button data-aos="fade-left" className="cv btn btn-outline-dark w-100" variant="outline-dark" onClick={onButtonClick}>
                Download CV
              </button>
              <div className="mt-5">
                <h2>Skills</h2>
                <div className="mt-3">
                  <span>HTML</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now} label={`${now}%`} />
                </div>
                <div className="mt-3">
                  <span>CSS</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now1} label={`${now1}%`} />
                </div>
                <div className="mt-3">
                  <span>PHP</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now2} label={`${now2}%`} />
                </div>
                <div className="mt-3">
                  <span>Laravel</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now3} label={`${now3}%`} />
                </div>
                <div className="mt-3">
                  <span>JavaScript</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now4} label={`${now4}%`} />
                </div>
                <div className="mt-3">
                  <span>Figma</span>
                  <ProgressBar data-aos="fade-right" data-aos-duration="2000" now={now5} label={`${now5}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h2>Experience</h2>
          <p>
            <li>June 2021 - August 2021 Internship at CSEAS Indonesia as an IT Support</li>
            <li>January 2022 - February 2023 Internship at Sekretariat Jenderal DPR-RI as a Web Developer (Front-End Developer)</li>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
