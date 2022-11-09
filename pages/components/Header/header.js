import junkylogo from '../../../img/junky-logo.jpg'
import Image from 'next/image'

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
                        <a href="index.html" className="navbar-brand">
                            <Image
                                src={junkylogo}
                                alt="Picture of the author"
                                height={85}
                                width={100}
                            />
                        </a>
                        <a href="index.html" className="navbar-brand logo-small">
                            <img src="assets/img/logo-icon.png" className="img-fluid" alt="Logo" />
                        </a>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <a href="index.html" className="menu-logo">
                                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                            </a>
                            <a id="menu_close" className="menu-close" > <i className="fas fa-times"></i></a>
                        </div>
                        <ul className="main-nav">
                            <li className="active has-submenu">
                                <a href="index.html">Home <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="index-two.html">Home 2</a></li>
                                    <li><a href="index-three.html">Home 3</a></li>
                                    <li><a href="index-four.html">Home 4</a></li>
                                    <li><a href="index-five.html">Home 5</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="categories.html">Categories</a>
                            </li>
                            <li className="has-submenu">
                                <a href="provider-dashboard.html">Providers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="provider-dashboard.html">Dashboard</a></li>
                                    <li><a href="my-services.html">Services</a></li>
                                    <li><a href="provider-bookings.html">Bookings</a></li>
                                    <li><a href="provider-settings.html">Profile Settings</a></li>
                                    <li><a href="provider-wallet.html">Wallet</a></li>
                                    <li><a href="provider-subscription.html">Subscription</a></li>
                                    <li><a href="provider-availability.html">Availability</a></li>
                                    <li><a href="provider-reviews.html">Reviews</a></li>
                                    <li><a href="provider-payment.html">Payment</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="user-dashboard.html">Customers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="user-dashboard.html">Dashboard</a></li>
                                    <li><a href="favourites.html">Favourites</a></li>
                                    <li><a href="user-bookings.html">Bookings</a></li>
                                    <li><a href="user-settings.html">Profile Settings</a></li>
                                    <li><a href="user-wallet.html">Wallet</a></li>
                                    <li><a href="user-reviews.html">Reviews</a></li>
                                    <li><a href="user-payment.html">Payment</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="search.html">Search</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="add-service.html">Add Service</a></li>
                                    <li><a href="edit-service.html">Edit Service</a></li>
                                    <li><a href="chat.html">Chat</a></li>
                                    <li><a href="notifications.html">Notifications</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="admin/index.html" target="_blank">Admin</a>
                            </li>
                            <li>
                                <a  data-bs-toggle="modal" data-bs-target="#provider-register">Become a Professional</a>
                            </li>
                            <li>
                                <a  data-bs-toggle="modal" data-bs-target="#user-register">Become a User</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <a className="nav-link header-login"  data-bs-toggle="modal" data-bs-target="#login_modal">Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}