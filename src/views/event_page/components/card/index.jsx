import { Link } from "react-router-dom"
import event1 from "../../../../assets/img/event1.jpg"

export const CardComponent = ({ data }) => {
    return (
        <div className="col-12 shadow my-3 px-4 py-4 wow fadeInUp" data-wow-delay="0.1s" style={{ borderRadius: '30px' }}>
            <div className="row">
                <div className="col-4 p-0 square-box" style={{ borderRadius: '20px' }}>
                    <img src={event1} alt="Image" className="img-fluid" />
                </div>
                <div className="col px-4">
                    <h4 className="mt-4">Terrarium Workshop</h4>
                    <div className="row">
                        <div className="col">
                            <span className="fw-bold fs-6 text-dark alert alert-primary py-1 px-4 " style={{ borderRadius: '13px' }}>{data.price != 'Free' ? 'Rp ' + data.price : data.price}</span>
                        </div>
                        <div className="col">
                            <div className="text-end fw-bold">{data.status == '2' ? data.tglEvent : data.tglEvent + ' | ' + data.jamEvent}</div>
                        </div>
                    </div>
                    <p className="my-3">{data.ket}</p>
                    <div className="row">
                        <div className="col">
                            <span className="alert alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>Tumbuhan</span>
                            <span className="alert alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>Flora</span>
                        </div>
                        <div className="col mt-4 text-end">
                            <Link to='/detail-event' className="btn btn-lg btn-primary fw-bold fs-6 w-50">Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
