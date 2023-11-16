import { useState } from "react";
import event1 from "./../../../assets/img/event1.jpg";
import './../index.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const DetailEvent = () => {

    const [activeTab, setActiveTab] = useState('timeline');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="banner-event">
                <img
                    src="https://images.unsplash.com/photo-1691239792550-eb769c1525c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3" style={{ minWidth: '250px' }}>
                        <div className="img-event" style={{ marginTop: '-90px', }}>
                            <img
                                src={event1}
                                className="img-fluid"
                                style={{ width: '100%' }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col pt-3 d-flex flex-column" style={{ minWidth: '200px' }}>
                        <div className="text-primary fs-6">20 November, 2023 | 09:00</div>
                        <h3 className="title-event text-primary fs-3">Terrarium Workshop</h3>
                        <div className="fw-bold mb-4">Share:
                            <span> <FaFacebook className="fs-5 mx-1" /></span>
                            <span> <FaInstagram className="fs-5 mx-1" /></span>
                            <span> <FaTwitter className="fs-5 mx-1" /></span>
                        </div>
                        <div className="mt-auto mb-3">
                            <button className="btn btn-lg bg-primary text-light w-100 fw-bold fs-6">Daftar Sekarang</button>
                        </div>
                    </div>

                    <div className="col m-auto text-center" style={{ minWidth: '200px' }}>
                        <div>Terbuka Hingga:</div>
                        <div className="fw-bold mb-3">20 November, 2023</div>
                        <div>Sisa Kuota:</div>
                        <div className="fw-bold">12</div>
                    </div>
                </div>
                <hr />
                <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'timeline' ? 'active' : ''}`}
                                href="#timeline"
                                onClick={() => handleTabClick('timeline')}
                            >
                                Timeline
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'speaker' ? 'active' : ''}`}
                                href="#speaker"
                                onClick={() => handleTabClick('speaker')}
                            >
                                Speaker
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'sponsor' ? 'active' : ''}`}
                                href="#sponsor"
                                onClick={() => handleTabClick('sponsor')}
                            >
                                Sponsor
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
                                href="#details"
                                onClick={() => handleTabClick('details')}
                            >
                                Details
                            </a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <h4 id="timeline">Timeline</h4>
                    <div className="timeline-event mb-5">
                        <div className="row mb-4">
                            <div className="col-1" style={{ width: '80px' }}>
                                <div className="circle-timeline p-auto alert-danger d-flex align-items-center justify-content-center text-danger fw-bold border border-danger">09:00 <br />AM</div>
                            </div>
                            <div className="col m-auto">
                                <h6 className="text-danger">Opening Ceremony</h6>
                                <label htmlFor="">09:00 AM - 10:45 AM</label>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-1" style={{ width: '80px' }}>
                                <div className="circle-timeline p-auto alert-primary d-flex align-items-center justify-content-center text-primary fw-bold border border-primary">10:45 <br />AM</div>
                            </div>
                            <div className="col m-auto">
                                <h6 className="text-primary">Main Keynote</h6>
                                <label htmlFor="">10:45 AM - 12:30 PM</label>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-1" style={{ width: '80px' }}>
                                <div className="circle-timeline p-auto alert-warning d-flex align-items-center justify-content-center text-warning fw-bold border border-warning">13:00 <br />PM</div>
                            </div>
                            <div className="col m-auto">
                                <h6 className="text-warning">Breakout Sessions</h6>
                                <label htmlFor="">01:00 PM - 03:00 PM</label>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-1" style={{ width: '80px' }}>
                                <div className="circle-timeline p-auto alert-dark d-flex align-items-center justify-content-center text-dark fw-bold border border-dark">15:30 <br />PM</div>
                            </div>
                            <div className="col m-auto">
                                <h6 className="text-dark">Closing Remarks</h6>
                                <label htmlFor="">03:30 PM - 04:30 PM</label>
                            </div>
                        </div>
                    </div>

                    <h4 id="speaker">Speaker</h4>
                    <div className="speaker-event mb-5">
                        <p>imi aperiam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>
                    </div>

                    <h4 id="sponsor">Sponsor</h4>
                    <div className="sponsor-event mb-5">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem, eius laudantium quos, aperiam voluptatibus hicam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>
                    </div>

                    <h4 id="details">Details</h4>
                    <div className="details-event mb-5">
                        <p>Hai Semuanya!</p>

                        <p>
                            Bergabunglah dengan kami dalam acara istimewa kami, Terrarium Workshop, di mana keindahan alam dan kreativitas bersatu. Kami akan membimbing Anda melalui langkah-langkah menciptakan terrarium yang menakjubkan, memberikan sentuhan hijau yang unik untuk menyegarkan ruangan Anda.
                        </p>

                        <p>
                            Detail Acara:
                        </p>

                        <ul>
                            <li>📅 Tanggal: 20 Desember 2023</li>
                            <li>🕒 Jam: 14.00 - 16.00 WIB</li>
                            <li>📍 Lokasi: Online (Zoom)</li>
                        </ul>

                        <p>
                            Apa yang Akan Anda Dapatkan:
                        </p>

                        <ul>
                            <li>Panduan langkah demi langkah dalam membuat terrarium</li>
                            <li>Tips dan trik untuk merawat terrarium dengan baik</li>
                            <li>Kesempatan untuk berbagi dan bertanya langsung kepada para ahli</li>
                        </ul>

                        <p>
                            Jangan lewatkan kesempatan ini untuk mengeksplorasi keindahan alam melalui karya seni tangan Anda sendiri. Segera daftar dan ajak teman-teman Anda untuk merasakan serunya Terrarium Workshop bersama kami. ✨
                        </p>

                        <p>
                            Terima kasih dan sampai jumpa di acara! 🌿🌟
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
};
