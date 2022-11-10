import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
export default function Search(){
    return(
        <div>
            <Header/>
		<header class="header">
			<nav class="navbar navbar-expand-lg header-nav">
				<div class="navbar-header">
					<a id="mobile_btn" href="javascript:void(0);">
						<span class="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<a href="index.html" class="navbar-brand logo">
						<img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
					</a>
					<a href="index.html" class="navbar-brand logo-small">
						<img src="assets/img/logo-icon.png" class="img-fluid" alt="Logo"/>
					</a>
				</div>
				<div class="main-menu-wrapper">
					<div class="menu-header">
						<a href="index.html" class="menu-logo">
							<img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
						</a>
						<a id="menu_close" class="menu-close" href="javascript:void(0);"> <i class="fas fa-times"></i></a>
					</div>
					<ul class="main-nav">
						<li class="has-submenu">
							<a href="index.html">Home <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li><a href="index.html">Home</a></li>
								<li><a href="index-two.html">Home 2</a></li>
								<li><a href="index-three.html">Home 3</a></li>
								<li><a href="index-four.html">Home 4</a></li>
								<li><a href="index-five.html">Home 5</a></li>
							</ul>
						</li>
						<li>
							<a href="categories.html">Categories</a>
						</li>
						<li class="has-submenu">
							<a href="provider-dashboard.html">Providers <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
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
						<li class="has-submenu">
							<a href="user-dashboard.html">Customers <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li><a href="user-dashboard.html">Dashboard</a></li>
								<li><a href="favourites.html">Favourites</a></li>
								<li><a href="user-bookings.html">Bookings</a></li>
								<li><a href="user-settings.html">Profile Settings</a></li>
								<li><a href="user-wallet.html">Wallet</a></li>
								<li><a href="user-reviews.html">Reviews</a></li>
								<li><a href="user-payment.html">Payment</a></li>
							</ul>
						</li>
						<li class="has-submenu active">
							<a href="#">Pages <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li class="active"><a href="search.html">Search</a></li>
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
							<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#provider-register">Become a Professional</a>
						</li>
						<li>
							<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#user-register">Become a User</a>
						</li>
					</ul>
				</div>
				<ul class="nav header-navbar-rht">
					<li class="nav-item">
						<a class="nav-link header-login" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#login_modal">Login</a>
					</li>
				</ul>
			</nav>
		</header>
		<div class="breadcrumb-bar">
			<div class="container-fluid">
				<div class="row">
					<div class="col">
						<div class="breadcrumb-title">
							<h2>Find a Professional</h2>
						</div>
					</div>
					<div class="col-auto float-end ms-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="index.html">Home</a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">Find a Professional</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<div class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-3 theiaStickySidebar">
						<div class="card filter-card">
							<div class="card-body">
								<h4 class="card-title mb-4">Search Filter</h4>
								<form id="search_form">
									<div class="filter-widget">
										<div class="filter-list">
											<h4 class="filter-title">Keyword</h4>
											<input type="text" class="form-control" placeholder="What are you looking for?"/>
										</div>
										<div class="filter-list">
											<h4 class="filter-title">Sort By</h4>
											<select class="form-control selectbox select form-select">
												<option>Sort By</option>
												<option>Price Low to High</option>
												<option>Price High to Low</option>
												<option>Newest</option>
											</select>
										</div>
										<div class="filter-list">
											<h4 class="filter-title">Categories</h4>
											<select class="form-control form-control selectbox select form-select">
												<option>All Categories</option>
												<option>Computer</option>
												<option selected="">Automobile</option>
												<option>Car Wash</option>
												<option>Cleaning</option>
												<option>Electrical</option>
												<option>Construction</option>
											</select>
										</div>
										<div class="filter-list">
											<h4 class="filter-title">Location</h4>
											<input class="form-control" type="text" placeholder="Search Location"/>
										</div>
									</div>
									<button class="btn btn-primary pl-5 pr-5 btn-block get_services w-100" type="button">Search</button>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-9">
						<div class="row align-items-center mb-4">
							<div class="col-md-6 col">
								<h4><span>118</span> Services</h4>
							</div>
							<div class="col-md-6 col-auto">
								<div class="view-icons">
									<a href="javascript:void(0);" class="grid-view active"><i class="fas fa-th-large"></i></a>
								</div>
							</div>
						</div>
						<div>
							<div class="row">
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="https://5.imimg.com/data5/MM/XN/WE/SELLER-535647/customized-glass-1000x1000.jpg" width="500" height="600"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-01.jpg" alt=""/>
													</a>	
													<span class="service-price">$25</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Cleaning</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Toughened Glass Fitting Services</a>
											</h3>
											<div class="rating">	
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>		
												<span class="d-inline-block average-rating">(4.3)</span>
											</div>
											<div class="user-info">
												<div class="row">	
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> 
														<span>xxxxxxxx49</span>
													</span>
													<span class="col ser-location">
														<span>Wayne, New Jersey</span> <i class="fas fa-map-marker-alt ms-1"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-02.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-02.jpg" alt=""/>
													</a>
													<span class="service-price">$50</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Automobile</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Car Repair Services</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="d-inline-block average-rating">(5)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx85</span></span>
													<span class="col ser-location"><span>Hanover, Maryland</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-03.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-03.jpg" alt=""/>
													</a>
													<span class="service-price">$45</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Electrical</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Electric Panel Repairing Service</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(4.5)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx30</span></span>
													<span class="col ser-location"><span>Kalispell, Montana</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-04.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-04.jpg" alt=""/>
													</a>
													<span class="service-price">$14</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Car Wash</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Steam Car Wash</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(0)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx74</span></span>
													<span class="col ser-location"><span>Electra, Texas</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-05.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-05.jpg" alt=""/>
													</a>
													<span class="service-price">$100</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Cleaning</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">House Cleaning Services</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(0)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx91</span></span>
													<span class="col ser-location"><span>Sylvester, Georgia</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-06.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-06.jpg" alt=""/>
													</a>
													<span class="service-price">$80</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Computer</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Computer & Server AMC Service</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(0)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx92</span></span>
													<span class="col ser-location"><span>Los Angeles, California</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-07.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-07.jpg" alt=""/>
													</a>
													<span class="service-price">$5</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Interior</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Interior Designing</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(4)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx28</span></span>
													<span class="col ser-location"><span>Hanover, Maryland</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-08.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-08.jpg" alt=""/>
													</a>
													<span class="service-price">$75</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Construction</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Building Construction Services</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(4)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx62</span></span>
													<span class="col ser-location"><span>Burr Ridge, Illinois</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-09.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-09.jpg" alt=""/>
													</a>
													<span class="service-price">$500</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Painting</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Commercial Painting Services</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(3)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx75</span></span>	
													<span class="col ser-location"><span>Huntsville, Alabama</span>  <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-10.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-10.jpg" alt=""/>
													</a>
													<span class="service-price">$150</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Plumbing</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Plumbing Services</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(3)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx13</span></span>
													<span class="col ser-location"><span>Richmond, Virginia</span> <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-11.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-01.jpg" alt=""/>
													</a>
													<span class="service-price">$32</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Carpentry</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Wooden Carpentry Work</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="d-inline-block average-rating">(5)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx68</span></span>
													<span class="col ser-location"><span>Columbus, Alabama</span> <i class="fas fa-map-marker-alt ms-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6">
									<div class="service-widget">
										<div class="service-img">
											<a href="service-details.html">
												<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-12.jpg"/>
											</a>
											<div class="fav-btn">
												<a href="javascript:void(0)" class="fav-icon">
													<i class="fas fa-heart"></i>
												</a>
											</div>
											<div class="item-info">
												<div class="service-user">
													<a href="#">
														<img src="assets/img/customer/user-02.jpg" alt=""/>
													</a>
													<span class="service-price">$54</span>
												</div>
												<div class="cate-list">
													<a class="bg-yellow" href="service-details.html">Appliance</a>
												</div>
											</div>
										</div>
										<div class="service-content">
											<h3 class="title">
												<a href="service-details.html">Air Conditioner Service</a>
											</h3>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">(3)</span>
											</div>
											<div class="user-info">
												<div class="row">
													<span class="col-auto ser-contact"><i class="fas fa-phone me-1"></i> <span>xxxxxxxx71</span></span>
													<span class="col ser-location"><span>Vancouver, Washington</span> <i class="fas fa-map-marker-alt ms-1"></i></span>
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