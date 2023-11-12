import { Link } from "react-router-dom"

export const AboutPage = () => {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark text-light px-0 py-2">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"></span>
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"></span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Gardener</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/service" className="nav-item nav-link">Services</Link>
                        <Link to="/project" className="nav-item nav-link">Projects</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <a href="" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            {/* Navbar End */}


            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}


            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" data-wow-delay="0.1s" src="img/about.jpg" />
                        </div>
                        <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 className="display-1 text-primary mb-0">25</h1>
                            <p className="text-primary mb-4">Year of Experience</p>
                            <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-4" href="">Explore More</a>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-5">
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-award fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">Award Winning</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-users fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">Dedicated Team</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}


            {/* Facts Start */}
            <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}


            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <p className="fs-5 fw-bold text-primary">Our Team</p>
                        <h1 className="display-5 mb-5">Dedicated & Experienced Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Doris Jordan</h4>
                                    <p className="text-primary">Landscape Designer</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Johnny Ramirez</h4>
                                    <p className="text-primary">Garden Designer</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Diana Wagner</h4>
                                    <p className="text-primary">Senior Gardener</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}


            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Services</h4>
                            <a className="btn btn-link" href="">Landscaping</a>
                            <a className="btn btn-link" href="">Pruning plants</a>
                            <a className="btn btn-link" href="">Urban Gardening</a>
                            <a className="btn btn-link" href="">Garden Maintenance</a>
                            <a className="btn btn-link" href="">Green Technology</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}


            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/* *** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** */}
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
        </>
    )
}
