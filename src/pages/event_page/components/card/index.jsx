import { Link } from "react-router-dom"

export const CardComponent = ({ data }) => {
    return (
        <div className="col-12 shadow-sm mt-4 p-4 wow fadeInUp" data-wow-delay="0.1s" style={{ borderRadius: '10px' }}>
            <div className="row">
                <div className="col-4 square-box" style={{ borderRadius: '20px' }}>
                    <img src={data.img_event} alt="Image" className="img-fluid" />
                </div>
                <div className="col">
                    <h4 className="mt-4">{data.title_event}</h4>
                    <div className="row">
                        <div className="col">
                            <span className="fw-bold fs-6 text-dark alert alert-primary py-1 px-4 " style={{ borderRadius: '13px' }}>{data.price_event}</span>
                        </div>
                        <div className="col">
                            <div className="text-end fw-bold">{data.status == '2' ? data.tgl_event : data.tgl_event + ' | ' + data.jam_event}</div>
                        </div>
                    </div>
                    {
                        data.detail_event.map((dataDetail, index) => (
                            <p className="my-3" key={index}>{dataDetail.keterangan_event}</p>
                        ))
                    }
                    <div className="row">
                        <div className="col">
                            {
                                data.tag_event.map((dataTag, index) => (
                                    <span key={index} className="alert-primary py-1 px-3 me-3" style={{ borderRadius: '13px' }}>{dataTag}</span>
                                ))
                            }
                        </div>
                        <div className="col mt-4 text-end">
                            <Link to={`/detail-event/${data.id}`} className="btn btn-lg bg-primary text-light fw-bold fs-6 w-50">Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
