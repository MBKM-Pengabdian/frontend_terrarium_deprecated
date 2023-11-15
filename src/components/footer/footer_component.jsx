export const FooterComponent = () => {
   return (
      <>
         {/* Footer Start */}
         <div className="container-fluid bg-secondary text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
               <div className="row g-5">
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-secondary mb-2 jakarta-sans">Our Office</h4>
                     <p className="text-primary">*logo</p>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <ul>
                        <h4 className="jakarta-sans text-secondary mb-2">Services</h4>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Landscaping</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Pruning plants</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Urban Gardening</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Garden Maintenance</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Green Technology</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <ul>
                        <h4 className="jakarta-sans text-secondary mb-2">Quick Links</h4>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">About Us</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Contact Us</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Our Services</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Terms & Condition</a></li>
                        <li className="pb-2"><a className="jakarta-sans text-secondary" href="">Support</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-white mb-4 jakarta-sans text-secondary">Newsletter</h4>
                     <p className="jakarta-sans text-secondary">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                  </div>
               </div>
            </div>
         </div>
         {/* Footer End */}
      </>
   )
}