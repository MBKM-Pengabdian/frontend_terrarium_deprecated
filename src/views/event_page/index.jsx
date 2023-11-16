import { FaList, FaCalendarCheck, FaPlay, FaClock } from "react-icons/fa";
import './index.css'
import { CardComponent } from "./components";

import { useEffect, useState } from "react";
import axios from "axios";

export const EventPage = () => {

    useEffect(() => {
        getListEvent()
    }, [])


    const getListEvent = () => {
        axios.get('https://server-testing-terrarium.vercel.app/listEvent').then((data) => {
            console.log(data.data);
            setDataEvent(data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const [dataEvent, setDataEvent] = useState()
    const [selectStatus, setSelectStatus] = useState('')

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Event</h1>
                </div>
            </div>

            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-2 mt-2 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '195px' }}>
                        <div className="row p-2 shadow-sm m-auto">
                            <div className="col-3 m-auto" style={{ maxWidth: '30px' }}>
                                <FaList className="fs-6 text-primary" />
                            </div>
                            <div className="col fs-6 text-primary" style={{ cursor: 'pointer' }} onClick={() => setSelectStatus('')}>Semua</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '195px' }}>
                        <div className="row p-2 shadow-sm m-auto">
                            <div className="col-3 m-auto" style={{ maxWidth: '30px' }}>
                                <FaPlay className="fs-6 text-primary" />
                            </div>
                            <div className="col fs-6 text-primary" style={{ cursor: 'pointer' }} onClick={() => setSelectStatus('1')}>Berlangsung</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '195px' }}>
                        <div className="row p-2 shadow-sm m-auto">
                            <div className="col-3 m-auto" style={{ maxWidth: '30px' }}>
                                <FaClock className="fs-6 text-primary" />
                            </div>
                            <div className="col fs-6 text-primary" style={{ cursor: 'pointer' }} onClick={() => setSelectStatus('2')}>Akan Datang</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-2 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '195px' }}>
                        <div className="row p-2 shadow-sm m-auto">
                            <div className="col-3 m-auto" style={{ maxWidth: '30px' }}>
                                <FaCalendarCheck className="fs-6 text-primary" />
                            </div>
                            <div className="col fs-6 text-primary" style={{ cursor: 'pointer' }} onClick={() => setSelectStatus('3')}>Selesai</div>
                        </div>
                    </div >

                </div>

                {/* EVENT SECTION */}
                <div className="row p-3 pt-0" >
                    {
                        dataEvent && (
                            selectStatus == ""
                                ? dataEvent.map((res, index) => (
                                    <CardComponent key={index} data={res} />
                                ))
                                : dataEvent.filter(data => data.status_event === selectStatus).map((res, index) => (
                                    <CardComponent key={index} data={res} />
                                ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
