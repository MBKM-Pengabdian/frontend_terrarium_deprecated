// eslint-disable-next-line react/prop-types
const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
   return (
      <div className="col-12 mt-4">
         <nav aria-label="Page navigation example">
            <ul className="pagination">
               {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                     <button className="page-link" onClick={() => onPageChange(index + 1)}>
                        {index + 1}
                     </button>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

export default PaginationComponent;
