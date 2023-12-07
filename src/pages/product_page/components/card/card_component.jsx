/* eslint-disable react/prop-types */
import { useState } from 'react';
import star from "./../../../../assets/img/icon/star.png";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardComponent = ({ products, onPageChange }) => {
   const [expanded] = useState({});
   return (
      <>
         {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 rounded-3">
               <div className="card card-product border-0 shadow-sm" style={{ height: "100%" }}>
                  <img
                     src={product.thumbnail}
                     className="card-img-top img-fluid"
                     alt={product.title}
                     style={{ objectFit: "cover", height: "18rem" }}
                  />
                  <div className="card-body d-flex flex-column">
                     <h6 className="card-title jakarta-sans text-secondary">{product.title}</h6>
                     <small className="card-text jakarta-sans text-secondary">
                        {expanded[product.id]
                           ? product.description
                           : `${product.description.slice(0, 25)}`}
                     </small>
                     <div className='footer d-flex align-items-center justify-content-between mt-4'>
                        <div className="rating-product">
                           <small className='jakarta-sans fw-bold'>{product.rating}</small><img src={star} style={{ width: "1rem" }} />
                        </div>
                        <div className="price-product">
                           <small className='jakarta-sans fw-bold'>Rp.{product.price}</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default CardComponent;
