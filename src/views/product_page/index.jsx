import { useState } from 'react';
import { CardComponent } from './components/card/card_component';

export const ProductPage = () => {
   const [currentPage, setCurrentPage] = useState(1);

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   return (
      <div className="container">
         <h2>Page Product</h2>
         <div className="row">
            {/* Display cards with pagination */}
            <div className="col-lg-3 col-md-4 col-sm-6">
               <CardComponent currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
         </div>
      </div>
   );
};
