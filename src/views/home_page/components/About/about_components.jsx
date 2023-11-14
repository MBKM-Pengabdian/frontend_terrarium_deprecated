import { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationComponent from './../pagination/pagination_component';

// eslint-disable-next-line react/prop-types
export const CardComponent = ({ currentPage, onPageChange }) => {
   const [products, setProducts] = useState([]);
   const [totalPages, setTotalPages] = useState(1);

   const fetchProducts = async (page) => {
      const itemsPerPage = 20;
      const skip = (page - 1) * itemsPerPage;

      try {
         const response = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`);
         setProducts(response.data.products);
         setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   useEffect(() => {
      fetchProducts(currentPage);
   }, [currentPage]);

   return (
      <div>
         {products.map(product => (
            <div key={product.id} className="card mt-4">
               <img src={product.thumbnail} className="card-img-top" alt={product.title} />
               <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
         ))}

         {/* Pagination controls */}
         <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
      </div>
   );
};
