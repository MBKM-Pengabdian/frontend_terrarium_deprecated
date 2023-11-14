import banner1 from "./../../assets/img/banner/banner1.jpg"
import banner2 from "./../../assets/img/banner/banner2.jpg"
import about1 from "./../../assets/img/about1.jpg"
import event1 from "./../../assets/img/event1.jpg"
import event2 from "./../../assets/img/event2.jpg"
import event3 from "./../../assets/img/event3.jpg"
import event4 from "./../../assets/img/event4.jpg"
import event5 from "./../../assets/img/event5.jpg"
import event6 from "./../../assets/img/event6.jpg"
import product1 from "./../../assets/img/product1.jpg"
import product2 from "./../../assets/img/product2.jpg"
import product3 from "./../../assets/img/product3.jpg"
import product4 from "./../../assets/img/product4.jpg"
import product5 from "./../../assets/img/product5.jpg"
import product6 from "./../../assets/img/product6.jpg"
import carousel1 from "./../../assets/img/carousel1.jpg"
import imgCategori1 from "./../../assets/img/icon/icon-5.png"
import imgCategori2 from "./../../assets/img/icon/icon-4.png"
import imgCategori3 from "./../../assets/img/icon/icon-9.png"

import { FaSpa, FaBitbucket, FaMagic } from "react-icons/fa";

export const HomePage = () => {
    return (
        <>
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status" style={{ 'width': '3rem', 'height': '3rem' }}></div>
            </div> */}

            {/* Carousel Start  */}
            <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={banner1} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                                            <a href="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1>Tes</h1>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={banner2} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                            <h1 className="display-1 text-white mb-5 animated slideInDown">Be Productive, Not Busy.</h1>
                                            <a href="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End  */}

            {/* Top Feature Start  */}
            <div className="container-fluid top-feature py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ 'minHeight': '160px' }}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <FaSpa className="text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Menjual Tanaman Terrarium</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{
                                'minHeight': '160px'
                            }}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <FaBitbucket className="text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Aksesoris & Alat</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{
                                'minHeight': '160px'
                            }}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <FaMagic className="text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Custom Pesanan</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {/* Top Feature End  */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" data-wow-delay="0.1s" src={about1} />
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
            {/* About Start */}

            {/* Facts Start */}
            <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src={carousel1}>
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


            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
                            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-4" href="">Explore More</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="text-center rounded py-5 px-4" style={{ 'boxShadow': '0 0 45px rgba(0,0,0,.08)' }}>
                                                <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ 'width': '90px', 'height': '90px' }}>
                                                    <i className="fa fa-check fa-3x text-primary"></i>
                                                </div>
                                                <h4 className="mb-0">100% Satisfaction</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="text-center rounded py-5 px-4" style={{ 'boxShadow': '0 0 45px rgba(0,0,0,.08)' }}>
                                                <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ 'width': '90px', 'height': '90px' }}>
                                                    <i className="fa fa-users fa-3x text-primary"></i>
                                                </div>
                                                <h4 className="mb-0">Dedicated Team</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="text-center rounded py-5 px-4" style={{ 'boxShadow': '0 0 45px rgba(0,0,0,.08)' }}>
                                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ 'width': '90px', 'height': '90px' }}>
                                            <i className="fa fa-tools fa-3x text-primary"></i>
                                        </div>
                                        <h4 className="mb-0">Modern Equipment</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features Start */}

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <p className="fs-5 fw-bold text-primary">Our Products</p>
                        <h1 className="display-5 mb-5">Product Yang Kami Punya</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product1} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori3} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Pot Bentuk Rumah</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product2} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori1} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Preserved Moss</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product3} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori3} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Miniatur Hewan Ternak</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product4} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori2} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">COCOPEAT</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product5} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori3} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Pot Terracotta Motif Hewan</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={product6} alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={imgCategori3} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Hiasan Love Beruang</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="" className="btn btn-primary my-4 py-sm-3 px-sm-4">Selengkapnya</a>
                </div>
            </div>
            {/* Service End */}

            {/* Projects Start  */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{
                        'maxWidth': '500px'
                    }}>
                        <p className="fs-5 fw-bold text-primary">Event</p>
                        <h1 className="display-5 mb-5">Ayo Ikuti Event Kami</h1>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline rounded mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">Complete Projects</li>
                                <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event1} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Landscaping</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event1} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event2} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Pruning plants</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event2} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event3} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Irrigation & Drainage</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event3} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event4} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Garden Maintenance</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event4} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event5} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Green Technology</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event5} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={event6} alt="" />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">Urban Gardening</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href={event6} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Projects End  */}
        </>
    )
}
