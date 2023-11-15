import { FaList, FaCalendarCheck, FaPlay, FaClock } from "react-icons/fa";
import event1 from "./../../assets/img/event1.jpg"
import './index.css'

export const EventPage = () => {
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Event</h1>
                </div>
            </div>

            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-2 my-2 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row bg-light p-2 shadow m-auto">
                            <div className="col-3 m-auto">
                                <FaList className="fs-5" />
                            </div>
                            <div className="col fw-bold text-center fs-6">Semua</div>
                        </div>
                    </div>
                    <div className="col-lg-2 my-2 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row bg-light p-2 shadow m-auto">
                            <div className="col-3 m-auto">
                                <FaPlay className="fs-5" />
                            </div>
                            <div className="col fw-bold text-center fs-6">berlangsung</div>
                        </div>
                    </div>
                    <div className="col-lg-2 my-2 wow fadeIn" data-wow-delay="0.5s">
                        <div className="row bg-light p-2 shadow m-auto">
                            <div className="col-3 m-auto">
                                <FaClock className="fs-5" />
                            </div>
                            <div className="col fw-bold text-center fs-6">Akan Datang</div>
                        </div>
                    </div>
                    <div className="col-lg-2 my-2 wow fadeIn" data-wow-delay="0.7s">
                        <div className="row bg-light p-2 shadow m-auto">
                            <div className="col-3 m-auto">
                                <FaCalendarCheck className="fs-5" />
                            </div>
                            <div className="col fw-bold text-center fs-6">Selesai</div>
                        </div>
                    </div>
                </div>

                {/* EVENT SECTION */}
                <div className="row p-3 pt-0">
                    {
                        [1, 2, 3, 4, 5].map((res, index) => (

                            <div key={index} className="col-12 shadow my-3 px-4 py-4 wow fadeInUp" data-wow-delay="0.1s" style={{ borderRadius: '30px' }}>
                                <div className="row">
                                    <div className="col-4 p-0 square-box" style={{ borderRadius: '20px' }}>
                                        <img src={event1} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="col px-4">
                                        <h4 className="mt-4">Terrarium Workshop</h4>
                                        <span className="fw-bold fs-6 text-dark alert alert-primary py-1 px-4 " style={{ borderRadius: '13px' }}>Free</span>
                                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?</p>
                                        <div className="row">
                                            <div className="col">
                                                <span className="alert alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>Tumbuhan</span>
                                                <span className="alert alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>Flora</span>
                                                {/* <span className="alert alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>Alam</span> */}
                                            </div>
                                            <div className="col mt-4 text-end">
                                                <button className="btn btn-lg btn-primary fw-bold fs-6">Daftar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
