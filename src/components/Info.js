import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return (
        <div className="info">
            <div className="imageContainer">
            </div>
            <div className="infoContainer">
                <h1 className="name">Cem Karakus</h1>
                <h1 className="job">Frontend Developer</h1>
                <h1 className="website">www.notrealwebsite.com</h1>
            </div>
            <div className="buttonContainer">
                <button className="buttons" id="email"><FontAwesomeIcon icon={faEnvelopeCircleCheck} className="buttonIcon"/> Email</button>
                <button className="buttons" id="linkedin"><FontAwesomeIcon icon= {faLinkedin} className="buttonIcon"/> LinkedIn</button>
            </div>
        </div>
    )
}