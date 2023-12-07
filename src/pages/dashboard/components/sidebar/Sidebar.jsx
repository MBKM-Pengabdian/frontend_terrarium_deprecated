export const Sidebar = () => {
   return (
      <>
         <div id="kt_app_sidebar" className="app-sidebar flex-column mt-lg-4 ps-2 pe-2 ps-lg-7 pe-lg-4" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            <div className="app-sidebar-logo flex-shrink-0 d-none d-md-flex flex-center align-items-center" id="kt_app_sidebar_logo">

               <a href="{#}">
                  <img alt="Logo" src="{}" className="h-25px d-none d-sm-inline app-sidebar-logo-default theme-light-show" />
                  <img alt="Logo" src="{}" className="h-25px theme-dark-show" />
               </a>


               <div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                  <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_aside_mobile_toggle">
                     <i className="ki-outline ki-abstract-14 fs-1"></i>
                  </div>
               </div>

            </div>

            <div className="app-sidebar-menu flex-column-fluid">

               <div id="kt_app_sidebar_menu_wrapper" className="hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px">

                  <div className="menu menu-column menu-rounded menu-sub-indention fw-bold px-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">

                     <div data-kt-menu-trigger="click" className="menu-item menu-accordion">

                        <span className="menu-link">
                           <span className="menu-icon">
                              <i className="ki-outline ki-category fs-2"></i>
                           </span>
                           <span className="menu-title">Dashboards</span>
                           <span className="menu-arrow"></span>
                        </span>


                        <div className="menu-sub menu-sub-accordion">

                           <div className="menu-item">

                              <a className="menu-link" href="../../demo55/dist/index.html">
                                 <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                 </span>
                                 <span className="menu-title">Default</span>
                              </a>

                           </div>


                           <div className="menu-item">

                              <a className="menu-link" href="../../demo55/dist/dashboards/ecommerce.html">
                                 <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                 </span>
                                 <span className="menu-title">eCommerce</span>
                              </a>

                           </div>


                           <div className="menu-item">

                              <a className="menu-link" href="../../demo55/dist/dashboards/projects.html">
                                 <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                 </span>
                                 <span className="menu-title">Projects</span>
                              </a>

                           </div>


                           <div className="menu-item">

                              <a className="menu-link" href="../../demo55/dist/dashboards/online-courses.html">
                                 <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                 </span>
                                 <span className="menu-title">Online Courses</span>
                              </a>

                           </div>


                           <div className="menu-item">

                              <a className="menu-link" href="../../demo55/dist/dashboards/marketing.html">
                                 <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                 </span>
                                 <span className="menu-title">Marketing</span>
                              </a>

                           </div>

                           <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">

                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/bidding.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Bidding</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/pos.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">POS System</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/call-center.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Call Center</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/logistics.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Logistics</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/website-analytics.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Website Analytics</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/finance-performance.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Finance Performance</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/store-analytics.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Store Analytics</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/social.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Social</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/delivery.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Delivery</span>
                                 </a>

                              </div>


                              <div className="menu-item">

                                 <a className="menu-link" href="../../demo55/dist/dashboards/crypto.html">
                                    <span className="menu-bullet">
                                       <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Crypto</span>
                                 </a>

                              </div>

                           </div>
                        </div>

                     </div>
                  </div>

               </div>

            </div>
         </div >
      </>
   )
}