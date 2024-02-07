import './Footer.css'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='main-footer'>

            <div className="main-footer-2">

                <div className="inside-footer">
                    <h1 className="heading-footer">REACT</h1>

                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quis, eligendi aliquam facilis suscipit, nostrum nam,
                        ullam autem fugit iure impedit odio harum voluptate
                        corrupti nobis labore iusto reiciendis illum optio? </p>

                    <div className='footerLogo'>
                        <FaFacebookSquare className='logos' />
                        <FaInstagram className='logos' />
                        <FaTwitterSquare className='logos' />
                        <FaGithubSquare className='logos' />
                        <FaDribbbleSquare className='logos' />
                    </div>

                </div>

            </div>

            <div className='main-footer-3'> 

                <div className="inside-footer-2">

                    <h4>Solution</h4>
                    <p>Analysis</p>
                    <p>Marketting</p>
                    <p>Commerce</p>
                    <p>Insights</p>

                </div>

                <div className="inside-footer-2">
                    <h4>Support</h4>
                    <p>Pricing</p>
                    <p>Documentation</p>
                    <p>Guide </p>
                    <p>API status</p>

                </div>

                <div className="inside-footer-2">
                    <h4>Legal</h4>
                    <p>Claim</p>
                    <p>Policy</p>
                    <p>Terms</p>
                </div>

            </div>

        </div>



    );

}