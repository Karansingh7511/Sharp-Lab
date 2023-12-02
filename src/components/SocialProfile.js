import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../constant";

const SocialProfile = () => {
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={Twitter_Link} className="icon-button twitter" target="_blank">
          <i>
            <SiTwitter />
          </i>
        </a>
        <a href={Github_Link} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href={Email_Link} className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
}

export default SocialProfile;