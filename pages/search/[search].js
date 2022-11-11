import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
export default function Search(){
    return(
        <div>
            <Header/>
		<div className="breadcrumb-bar">
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="breadcrumb-title">
							<h2>Find a Professional</h2>
						</div>
					</div>
					<div className="col-auto float-end ms-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.html">Home</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">Find a Professional</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<div className="content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 theiaStickySidebar">
						<div className="card filter-card">
							<div className="card-body">
								<h4 className="card-title mb-4">Search Filter</h4>
								<form id="search_form">
									<div className="filter-widget">
										<div className="filter-list">
											<h4 className="filter-title">Keyword</h4>
											<input type="text" className="form-control" placeholder="What are you looking for?"/>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Sort By</h4>
											<select className="form-control selectbox select form-select">
												<option>Sort By</option>
												<option>Price Low to High</option>
												<option>Price High to Low</option>
												<option>Newest</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Categories</h4>
											<select className="form-control form-control selectbox select form-select">
												<option>All Categories</option>
												<option>Computer</option>
												<option >Automobile</option>
												<option>Car Wash</option>
												<option>Cleaning</option>
												<option>Electrical</option>
												<option>Construction</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Location</h4>
											<input className="form-control" type="text" placeholder="Search Location"/>
										</div>
									</div>
									<button className="btn btn-primary pl-5 pr-5 btn-block get_services w-100" type="button">Search</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="row align-items-center mb-4">
							<div className="col-md-6 col">
								<h4><span>118</span> Services</h4>
							</div>
							<div className="col-md-6 col-auto">
								<div className="view-icons">
									<a href=";" className="grid-view active"><i className="fas fa-th-large"></i></a>
								</div>
							</div>
						</div>
						<div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="https://5.imimg.com/data5/MM/XN/WE/SELLER-535647/customized-glass-1000x1000.jpg" width="500" height="600"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-01.jpg" alt=""/>
													</a>	
													<span className="service-price">$25</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="service-details.html">Cleaning</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="service-details.html">Toughened Glass Fitting Services</a>
											</h3>
											<div className="rating">	
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>		
												<span className="d-inline-block average-rating">(4.3)</span>
											</div>
											<div className="user-info">
												<div className="row">	
													<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> 
														<span>xxxxxxxx49</span>
													</span>
													<span className="col ser-location">
														<span>Wayne, New Jersey</span> <i className="fas fa-map-marker-alt ms-1"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-02.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-02.jpg" alt=""/>
													</a>
													<span className="service-price">$50</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="service-details.html">Automobile</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="service-details.html">Car Repair Services</a>
											</h3>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<div className="user-info">
												<div className="row">
													<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx85</span></span>
													<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-03.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-03.jpg" alt=""/>
													</a>
													<span className="service-price">$45</span>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-04.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-05.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-06.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-06.jpg" alt=""/>
													</a>
													<span className="service-price">$80</span>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-07.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-08.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-08.jpg" alt=""/>
													</a>
													<span className="service-price">$75</span>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-09.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-10.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-10.jpg" alt=""/>
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
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-11.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-01.jpg" alt=""/>
													</a>
													<span className="service-price">$32</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="service-details.html">Carpentry</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="service-details.html">Wooden Carpentry Work</a>
											</h3>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<div className="user-info">
												<div className="row">
													<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx68</span></span>
													<span className="col ser-location"><span>Columbus, Alabama</span> <i className="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-12.jpg"/>
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-02.jpg" alt=""/>
													</a>
													<span className="service-price">$54</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="service-details.html">Appliance</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="service-details.html">Air Conditioner Service</a>
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
													<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx71</span></span>
													<span className="col ser-location"><span>Vancouver, Washington</span> <i className="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>﻿
            <Footer/>
        </div>
    )
}