import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import {GetSingleProduct} from '../api/Product'
import { useEffect } from "react";
export default function Product(){
    useEffect(() => {
        GetSingleProduct().then(response => {
            console.log(response,"RESPONSE")
        }).catch(err => console.log(err,"ERRR"))
    },[])
    return(
        <div>
            <Header/>
            <div className="content">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="service-view">
							<div className="service-header">
								<div className="d-flex justify-content-between align-items-center">
									<h1>Car Repair Services</h1>
									<div className="fav-btn fav-btn-big">
										<a href="" className="fav-icon with-border">
											<i className="fas fa-heart"></i>
										</a>
									</div>
								</div>
								<address className="service-location"><i className="fas fa-location-arrow"></i> Hanover, Maryland</address>
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<span className="d-inline-block average-rating">(5)</span>
								</div>
								<div className="service-cate">
									<a href="search.html">Automobile</a>
								</div>
							</div>
							<div className="service-images service-carousel">
								<div className="images-carousel owl-carousel owl-theme">
									<div className="item">
										<img src="assets/img/services/service-02.jpg" alt="" className="img-fluid"/>
									</div>
									<div className="item">
										<img src="assets/img/services/service-02.jpg" alt="" className="img-fluid"/>
									</div>
									<div className="item">
										<img src="assets/img/services/service-02.jpg" alt="" className="img-fluid"/>
									</div>
								</div>
							</div>
							<div className="service-details">
								<ul className="nav nav-pills service-tabs" id="pills-tab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Services Offered</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Reviews</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
										<div className="card service-description">
											<div className="card-body">
												<h5 className="card-title">Service Details</h5>
												<p className="mb-0">Car wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles. Car washes can be self-serve, fully automated, or full-service with attendants who wash the vehicle.</p>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">Services Offered</h5>
												<div className="service-offer">
													<ul className="list-bullet">
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
										<div className="card review-box">
											<div className="card-body">
												<div className="review-list">
                                                    <div className="review-img">
														<img className="rounded-circle" src="assets/img/customer/user-01.jpg" alt=""/>
													</div>
                                                    <div className="review-info">
                                                        <h5>Jeffrey Akridge</h5>
                                                        <div className="review-date">August 06, 2020 20:07 pm</div>
                                                        <p className="mb-0">Good Work</p>
                                                    </div>
                                                    <div className="review-count">
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>	
                                                            <span className="d-inline-block average-rating">(5.0)</span>
                                                        </div>
                                                    </div>
                                                </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h4 className="card-title">Related Services</h4>
						<div className="service-carousel">
							<div className="popular-slider owl-carousel owl-theme">
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-03.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-03.jpg" alt=""/>
												</a>
												<span className="service-price">$2</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Electrical</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Electric Panel Repairing Service</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4.5)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx30</span></span>
												<span className="col ser-location"><span>Kalispell, Montana</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-04.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-04.jpg" alt=""/>
												</a>
												<span className="service-price">$14</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Car Wash</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Steam Car Wash</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(0)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx74</span></span>
												<span className="col ser-location"><span>Electra, Texas</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-05.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-05.jpg" alt=""/>
												</a>
												<span className="service-price">$100</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Cleaning</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">House Cleaning Services</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(0)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx91</span></span>
												<span className="col ser-location"><span>Sylvester, Georgia</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-06.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-06.jpg" alt=""/>
												</a>
												<span className="service-price">$100</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Computer</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Computer & Server AMC Service</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(0)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx92</span></span>
												<span className="col ser-location"><span>Los Angeles, California</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-07.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-07.jpg" alt=""/>
												</a>
												<span className="service-price">$5</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Interior</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Interior Designing</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx28</span></span>
												<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-08.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-08.jpg" alt=""/>
												</a>
												<span className="service-price">$100</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Construction</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Building Construction Services</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx62</span></span>
												<span className="col ser-location"><span>Burr Ridge, Illinois</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-09.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/customer/user-09.jpg" alt=""/>
												</a>
												<span className="service-price">$500</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Painting</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Commercial Painting Services</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(3)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx75</span></span>	
												<span className="col ser-location"><span>Huntsville, Alabama</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
											<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-10.jpg"/>
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src="assets/img/user.jpg" alt=""/>
												</a>
												<span className="service-price">$150</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="service-details.html">Plumbing</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="service-details.html">Plumbing Services</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(3)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx13</span></span>
												<span className="col ser-location"><span>Richmond, Virginia</span> <i className="fas fa-map-marker-alt ms-1"></i></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 theiaStickySidebar">
						<div className="sidebar-widget widget">
							<div className="service-amount">
								<span>$150</span>
							</div>
							<div className="service-book">
								<a href="book-service.html" className="btn btn-primary"> Book Service </a>
							</div>
						</div>
						<div className="card provider-widget clearfix">
							<div className="card-body">
								<h5 className="card-title">Service Provider</h5>
								<div className="about-author">
									<div className="about-provider-img">
										<div className="provider-img-wrap">
											<a href=";">
												<img className="img-fluid rounded-circle" alt="" src="assets/img/provider/provider-01.jpg"/>
											</a>
										</div>
									</div>
									<div className="provider-details">
										<a href=";" className="ser-provider-name">Thomas Herzberg</a>
										<p className="last-seen"><i className="fas fa-circle online"></i> Online</p>
										<p className="text-muted mb-1">Member Since Apr 2020</p>
									</div>
								</div>
								<hr/>
								<div className="provider-info">
									<p className="mb-1"><i className="far fa-envelope"></i> <a href="#"><span className="__cf_email__" data-cfemail="66120e090b07150e03141c0403140126031e070b160a034805090b">[email&#160;protected]</span></a></p>
									<p className="mb-0"><i className="fas fa-phone-alt"></i> xxxxxxxx33</p>
								</div>
							</div>
						</div>
						<div className="card available-widget">
							<div className="card-body">
								<h5 className="card-title">Service Availability</h5>
								<ul>
									<li><span>Monday</span>9:30 AM - 7:00 PM</li>
									<li><span>Tuesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Wednesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Thursday</span>9:30 AM - 7:00 PM</li>
									<li><span>Friday</span>9:30 AM - 7:00 PM</li>
									<li><span>Saturday</span>9:30 AM - 7:00 PM</li>
									<li><span>Sunday</span>9:30 AM - 7:00 PM</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
            <Footer/>
        </div>
    )
}