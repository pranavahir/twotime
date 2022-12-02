import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/dist/client/link";
import {
	faFacebook,
    faInstagram,
    faTwitter,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <footer className="footer">
		
        <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-menu">
                            <h2 className="footer-title">Quick Links  </h2>
                            <ul>
                                <li>
                                    <Link href="https://www.junkyscrap.com">About Us</Link>
                                </li>
                                <li>
                                    <Link href="https://www.junkyscrap.com">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Faq</Link>
                                </li>
                                <li>
                                    <Link href="#">Help</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-menu">
                            <h2 className="footer-title">Categories</h2>
                            <ul>
                                <li>
                                    <Link href="/products/categories?&category=Aluminum">Aluminum</Link>
                                </li>
                                <li>
                                    <Link href="/products/categories?&category=Copper">Copper</Link>
                                </li>
                                <li>
                                    <Link href="/products/categories?&category=Steel">Steel</Link>
                                </li>
                                <li>
                                    <Link href="/products/categories?&category=Iron">Iron</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-contact">
                            <h2 className="footer-title">Contact Us</h2>
                            <div className="footer-contact-info">
                                <div className="footer-address">
                                    <span><i className="far fa-building"></i></span>
                                    <p>JunkyScrap, Mumbai, India</p>
                                </div>
                                <p><i className="fas fa-headphones"></i> +91 79770 38084</p>
                                <p className="mb-0"><i className="fas fa-envelope"></i> <Link href="https://html.truelysell.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5f2b2d2a3a33262c3a33331f3a273e322f333a713c3032">sahilshah@widski.com</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2 className="footer-title">Follow Us</h2>
                            <div className="social-icon">
                                <ul>
                                    <li>
                                        <Link href="#" target="_blank">
                                                    <FontAwesomeIcon
													icon={faFacebook}
													style={{ fontSize: 40,color:"#00008B" }}
												/> </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                        <FontAwesomeIcon
													icon={faTwitter}
													style={{ fontSize: 40 ,color:"#1DA1F2"}}
												/>  </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                        <FontAwesomeIcon
													icon={faInstagram}
													style={{ fontSize: 40,color:"#AA336A" }}
												/> 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                        <FontAwesomeIcon
													icon={faWhatsapp}
													style={{ fontSize: 40 ,color:"green"}}
												/> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="subscribe-form">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                                <button type="submit" className="btn footer-btn">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0">&copy; 2022 <Link href="index.html">JunkyScrap</Link>. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-menu">
                                <ul className="policy-menu">
                                    <li>
                                        <Link href="term-condition.html">Terms and Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="privacy-policy.html">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
    )
}