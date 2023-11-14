import { FaList, FaCalendarCheck, FaPlay, FaClock } from "react-icons/fa";
import './index.css'
import { CardComponent } from "./components";

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
                            <div className="col fw-bold text-center fs-6">Berlangsung</div>
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
                            <CardComponent key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
