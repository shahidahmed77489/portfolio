import {  FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa"

const SocialLinkd = () => {
  return (
    <>
         <a href="https://github.com/shahidahmed77489" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/shahid-ahmed-a54747299/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn/>
            </span>
          </a>
          <a href="https://www.facebook.com/shahidahmed.khan.18" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
    </>
  )
}

export default SocialLinkd
