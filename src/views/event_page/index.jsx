import { FaList, FaCalendarCheck, FaPlay, FaClock } from "react-icons/fa";
import './index.css'
import { CardComponent } from "./components";

import { useState } from "react";

export const EventPage = () => {
    const [dataEvent, setDataEvent] = useState([
        {
            img: '',
            title: 'Terrarium Workshop',
            price: 'Free',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: '20 November, 2023',
            jamEvent: '09:00',
            tag: 'Tumbuhan,flora',
            status: '1' //berlangsung
        },
        {
            img: '',
            title: 'Terrarium Workshop',
            price: '30.000',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: 'Coming Soon!',
            jamEvent: '',
            tag: 'Tumbuhan,flora',
            status: '2' //akan datang
        },
        {
            img: '',
            title: 'Terrarium Workshop',
            price: '60.000',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: '20 November, 2023',
            jamEvent: '09:00',
            tag: 'Tumbuhan,flora',
            status: '3' //selesai
        },
        {
            img: '',
            title: 'Terrarium Workshop',
            price: 'Free',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: '20 November, 2023',
            jamEvent: '09:00',
            tag: 'Tumbuhan,flora',
            status: '1' //berlangsung
        },
        {
            img: '',
            title: 'Terrarium Workshop',
            price: 'Free',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: 'Coming Soon!',
            jamEvent: '',
            tag: 'Tumbuhan,flora',
            status: '2' //akan datang
        },
        {
            img: '',
            title: 'Terrarium Workshop',
            price: '20.000',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, suscipit omnis reiciendis veniam, aut atque dolor iure est ex a ipsa excepturi! Animi voluptatum adipisci, mollitia a odit fugit ipsum?',
            tglEvent: '20 November, 2023',
            jamEvent: '09:00',
            tag: 'Tumbuhan,flora',
            status: '3' //selesai
        },

    ])
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
                                : dataEvent.filter(data => data.status === selectStatus).map((res, index) => (
                                    <CardComponent key={index} data={res} />
                                ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
