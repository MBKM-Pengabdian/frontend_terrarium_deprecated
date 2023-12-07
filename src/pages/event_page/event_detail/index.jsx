import { useEffect, useState } from "react";
import event1 from "./../../../assets/img/event1.jpg";
import '../index.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from "axios";

export const DetailEvent = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('timeline');
    const [detailEvent, setdetailEvent] = useState()

    useEffect(() => {
        getDetailEvent()
    }, [])

    const getDetailEvent = () => {
        axios.get(`https://server-testing-terrarium.vercel.app/listEvent/${id}`).then((data) => {
            setdetailEvent(data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

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
                                src={detailEvent && detailEvent.img_event}
                                className="img-fluid"
                                style={{ width: '100%' }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col pt-3 d-flex flex-column" style={{ minWidth: '200px' }}>
                        <div className="text-primary fs-6">{detailEvent && detailEvent.tgl_event} | {detailEvent && detailEvent.jam_event}</div>
                        <h3 className="title-event text-primary fs-3">{detailEvent && detailEvent.title_event}</h3>
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
                        <div className="fw-bold mb-3">{detailEvent && detailEvent.batasdaftar_event}</div>
                        <div>Sisa Kuota:</div>
                        <div className="fw-bold">{detailEvent && detailEvent.sisakuota_event}</div>
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

                        {
                            detailEvent && detailEvent.detail_event.map((resDetail, index) => (
                                resDetail.timeline_event.map((resTimeline, index) => (
                                    <div className="row mb-4" key={index}>
                                        <div className="col-1" style={{ width: '80px' }}>
                                            <div className="circle-timeline p-auto alert-danger d-flex align-items-center justify-content-center text-danger fw-bold border border-danger">{resTimeline.waktu}</div>
                                        </div>
                                        <div className="col m-auto">
                                            <h6 className="text-danger">{resTimeline.title}</h6>
                                            <label htmlFor="">{resTimeline.waktu}</label>
                                        </div>
                                    </div>
                                ))

                            ))
                        }
                    </div>

                    <h4 id="speaker">Speaker</h4>
                    <div className="speaker-event mb-5">
                        {
                            detailEvent && detailEvent.detail_event.map((resDetail, index) => (
                                <p key={index}>{resDetail.speaker_event}</p>
                            ))
                        }
                    </div>

                    <h4 id="sponsor">Sponsor</h4>
                    <div className="sponsor-event mb-5">
                        {
                            detailEvent && detailEvent.detail_event.map((resDetail, index) => (
                                <p key={index}>{resDetail.sponsor_event}</p>
                            ))
                        }
                    </div>

                    <h4 id="details">Details</h4>
                    <div className="details-event mb-5">
                        {
                            detailEvent && detailEvent.detail_event.map((resDetail, index) => (
                                <p key={index}>{resDetail.details_event}</p>
                            ))
                        }
                    </div>


                </div>
            </div>
        </>
    );
};
