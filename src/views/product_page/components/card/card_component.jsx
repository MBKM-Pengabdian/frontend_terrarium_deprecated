/* eslint-disable react/prop-types */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardComponent = ({ products, onPageChange }) => {
   const [expanded, setExpanded] = useState({});

   const toggleDescription = (productId) => {
      setExpanded((prevExpanded) => ({
         ...prevExpanded,
         [productId]: !prevExpanded[productId],
      }));
   };

   return (
      <>
         {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
               <div className="card border-0" style={{ height: "100%" }}>
                  <img
                     src={product.thumbnail}
                     className="card-img-top img-fluid"
                     alt={product.title}
                     style={{ objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                     <h6 className="card-title jakarta-sans text-secondary">{product.title}</h6>
                     <p className="card-text jakarta-sans text-secondary">
                        {expanded[product.id]
                           ? product.description
                           : `${product.description.slice(0, 25)}...`}
                     </p>
                     <a
                        className="btn bg-primary mt-auto jakarta-sans text-light"
                        onClick={() => toggleDescription(product.id)}
                     >
                        {expanded[product.id] ? 'Read less' : 'Read more'}
                     </a>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default CardComponent;
