import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faTwitter} className="footerIcon" />
            <FontAwesomeIcon icon={faFacebook} className="footerIcon" />
            <FontAwesomeIcon icon={faInstagram} className="footerIcon" />
            <FontAwesomeIcon icon={faGithub} className="footerIcon" />
        </div>
    )
}