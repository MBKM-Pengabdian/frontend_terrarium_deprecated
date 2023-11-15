const SidebarComponent = () => {
   return (
      <>
         <div className="flex-shrink-0 p-3 bg-white shadow-sm rounded-3" style={{ width: "250px" }}>
            <ul className="list-unstyled ps-0">
               <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed jakarta-sans text-primary" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                     Home
                  </button>
                  <div className="collapse show" id="home-collapse">
                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-3 small">
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Overview</a></li>
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Updates</a></li>
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Reports</a></li>
                     </ul>
                  </div>
               </li>
               <li className="mb-1">
                  <button className="btn btn-toggle align-items-center rounded collapsed jakarta-sans text-primary" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="false">
                     Product
                  </button>
                  <div className="collapse" id="product-collapse">
                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-3 small">
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Overview</a></li>
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Updates</a></li>
                        <li className="p-1"><a href="#" className="text-primary jakarta-sans rounded">Reports</a></li>
                     </ul>
                  </div>
               </li>
            </ul>
         </div>
      </>
   )
}

export default SidebarComponent