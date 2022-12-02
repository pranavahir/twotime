import junkylogo from '../../../img/junky-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
            <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" >
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <a  className="navbar-brand">
                            <Image
                                src={junkylogo}
                                alt="Picture of the author"
                                height={85}
                                width={100}
                            />
                        </a>
                        <a  className="navbar-brand logo-small">
                            {/* <img src="assets/img/logo-icon.png" className="img-fluid" alt="Logo" /> */}
                        </a>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <a  className="menu-logo">
                                {/* <img src="assets/img/logo.png" className="img-fluid" alt="Logo" /> */}
                            </a>
                            <a id="menu_close" className="menu-close" > <i className="fas fa-times"></i></a>
                        </div>
                        <ul className="main-nav">
                            <li className="active has-submenu">
                                <a href="#">Home <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li className="active"><a href="#">Home</a></li>
                                    <li><a href="#">Home 2</a></li>
                                    <li><a href="#">Home 3</a></li>
                                    <li><a href="#">Home 4</a></li>
                                    <li><a href="#">Home 5</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Categories</a>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Providers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Bookings</a></li>
                                    <li><a href="#">Profile Settings</a></li>
                                    <li><a href="#">Wallet</a></li>
                                    <li><a href="#">Subscription</a></li>
                                    <li><a href="#">Availability</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">Payment</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Customers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Favourites</a></li>
                                    <li><a href="#">Bookings</a></li>
                                    <li><a href="#">Profile Settings</a></li>
                                    <li><a href="#">Wallet</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">Payment</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Service Details</a></li>
                                    <li><a href="#">Add Service</a></li>
                                    <li><a href="#">Edit Service</a></li>
                                    <li><a href="#">Chat</a></li>
                                    <li><a href="#">Notifications</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/seller/login">Seller Login</Link>
                            </li>
                            <li>
                                <Link href="/buyer/login">Buyer Login</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <a className="nav-link header-login"  data-bs-toggle="modal" data-bs-target="#login_modal">Login</a>
                        </li>
                    </ul> */}
                </nav>
            </header>
    )
}