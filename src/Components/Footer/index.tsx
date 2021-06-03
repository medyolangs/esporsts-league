import { MDBIcon } from "mdbreact"
import React from "react"

import "./style.css"

interface Props {
  telNo?: string
  socmed: { href: string; icon: string }[]
}

const Footer: React.FC<Props> = ({ telNo, socmed }) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="about-us">
            <span className="abt-title">About Us</span>
            <span>
              Want to watch the latest streams and tournament matches?
            </span>
            <p>
              This website creates an intuitive design that can give you the
              games you want, Pulling together your favorite games in one site
              making it easy to navigate with the games that you like
            </p>
          </div>
          <div className="more-links">
            <span>More links</span>
            <div className="links">
              <div>
                <a href="#contact">Contact</a>
              </div>
              <div>
                <a href="#out-team">Our Team</a>
              </div>
              <div>
                <a href="#faqs">FaQs</a>
              </div>
            </div>
          </div>
          <div className="contact-us">
            <span>Reach Us | Email Us</span>
            <div className="social-media-links">
              {socmed.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noreferrer">
                  <MDBIcon fab icon={link.icon} className="soc-icons" />
                </a>
              ))}
            </div>
            <div className="tel-no">
              <span>Tel No.</span>
              <span>{telNo}</span>
            </div>
            <div className="addr">
              <p>200 - 131 Bloor Street West Toronto, Ontario M5S 1R8</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Inspired by: </span>
          <a
            href="https://playerx.qodeinteractive.com/esports-home"
            target="_blank"
            rel="noreferrer"
          >
            playerx.qodeinteractive
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
