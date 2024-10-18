import "./Footer.css"
import {assets} from "../../assets/assets"

function Footer() {
    return (
    <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis eveniet in laborum beatae molestias voluptatibus totam quo est similique.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About-Us</li>
                <li>Delivery</li>
                <li>Privacy-Police</li>
            </ul>
        </div>

        <div className="footer-right">
        <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-987</li>
                <li>Contact@Tomato.com</li>
            </ul>
        </div>

    </div>
            <hr />
        <p className="footer-copyright">
            copyright@HAZEM MOHAMED
        </p>
    </div>
    );
}

export default Footer
