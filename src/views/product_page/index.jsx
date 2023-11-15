import axios from 'axios';
import { useState, useEffect } from 'react';
import CardComponent from './components/card/card_component';
import PaginationComponent from './components/pagination/pagination_component';
import SidebarComponent from './components/sidebar/sidebar_component';

export const ProductPage = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [products, setProducts] = useState([]);
   const [totalPages, setTotalPages] = useState(1);

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   const fetchProducts = async (page) => {
      const itemsPerPage = 4;
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
      <div className="container mt-4">
         <div className="wrapper d-flex">
            <div className="sidebar me-4">
               <SidebarComponent />
            </div>
            <div className="product">
               <div className="row">
                  <CardComponent products={products} onPageChange={handlePageChange} />
               </div>
               <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
         </div>
      </div>
   );
};
