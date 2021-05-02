import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:zarrar@live.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="Hire Me!">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/zarrarpalekar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  title="Let's connect on LinkedIn"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/ZarrarPalekar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My Other Hustles">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.instagram.com/palekarzarrar/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-warning" title="My Other Passion">
                  <i class="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="tel:+919867363215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="Ring Me">
                  <i class="fas fa-phone-alt"></i> Give me a call
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a
                href="tel:+919867363215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-success" title="Ring Me">
                  <i class="fab fa-whatsapp"></i> WhatsApp me
                </Button>
              </a>
            </div> */}
            <a
              href="https://api.whatsapp.com/send?phone=+9867363215&text=Hi%20Zarrar%21%20I%20came%20here%20from%20your%20portfolio%20website."
              class="float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-whatsapp my-float"></i>
            </a>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
