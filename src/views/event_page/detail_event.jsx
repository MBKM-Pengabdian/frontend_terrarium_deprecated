import event1 from "./../../assets/img/event1.jpg";

export const DetailEvent = () => {
    return (
        <>
            <div className="banner-event">
                <img
                    src="https://images.unsplash.com/photo-1691239792550-eb769c1525c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="img-event" style={{ marginTop: '-90px' }}>
                            <img
                                src={event1}
                                className="img-fluid"
                                style={{ width: '100%' }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-primary fw-bold fs-6 mt-3">20 November, 2023 | 09:00</div>
                        <div className="title-event fw-bold fs-3">Terrarium Workshop</div>
                    </div>
                </div>
                <hr />
                <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#timeline">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Speaker">Speaker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sponsor">Sponsor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Details">Details</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                    <h4 id="timeline">Timeline</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem, eius laudantium quos, aperiam voluptatibus hic cumque error eveniet maxime dicta sapiente tempore animi molestias accusantium ad laboriosam quasi distinctio sed nihil laborum! Hic ab repellendus, quisquam voluptate doloremque, a quam nobis beatae perspiciatis distinctio provident vel animi rem fugit facere minus aut velit quo, voluptatum maxime fugiat soluta blanditiis porro. Repellendus minima quod et blanditiis fugiat! Sequi voluptatum fuga hic odio? Ipsam sint a minus sunt commodi fugiat deserunt, dolore molestiae id perspiciatis quidem nemo dolores officia illum molestias eligendi temporibus saepe fugit natus alias soluta iste magnam placeat beatae? Itaque amet expedita assumenda esse numquam dolores labore, nesciunt laboriosam quos nam optio asperiores voluptates, dolorem unde magni officiis deserunt illo harum sed soluta rerum vitae vero. Quo autem, molestiae numquam ipsam quasi vitae corporis praesentium dolorum nemo, ut maxime eveniet animi aperiam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>

                    <h4 id="Speaker">Speaker</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem, eius laudantium quos, aperiam voluptatibus hic cumque error eveniet maxime dicta sapiente tempore animi molestias accusantium ad laboriosam quasi distinctio sed nihil laborum! Hic ab repellendus, quisquam voluptate doloremque, a quam nobis beatae perspiciatis distinctio provident vel animi rem fugit facere minus aut velit quo, voluptatum maxime fugiat soluta blanditiis porro. Repellendus minima quod et blanditiis fugiat! Sequi voluptatum fuga hic odio? Ipsam sint a minus sunt commodi fugiat deserunt, dolore molestiae id perspiciatis quidem nemo dolores officia illum molestias eligendi temporibus saepe fugit natus alias soluta iste magnam placeat beatae? Itaque amet expedita assumenda esse numquam dolores labore, nesciunt laboriosam quos nam optio asperiores voluptates, dolorem unde magni officiis deserunt illo harum sed soluta rerum vitae vero. Quo autem, molestiae numquam ipsam quasi vitae corporis praesentium dolorum nemo, ut maxime eveniet animi aperiam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>

                    <h4 id="sponsor">Sponsor</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem, eius laudantium quos, aperiam voluptatibus hic cumque error eveniet maxime dicta sapiente tempore animi molestias accusantium ad laboriosam quasi distinctio sed nihil laborum! Hic ab repellendus, quisquam voluptate doloremque, a quam nobis beatae perspiciatis distinctio provident vel animi rem fugit facere minus aut velit quo, voluptatum maxime fugiat soluta blanditiis porro. Repellendus minima quod et blanditiis fugiat! Sequi voluptatum fuga hic odio? Ipsam sint a minus sunt commodi fugiat deserunt, dolore molestiae id perspiciatis quidem nemo dolores officia illum molestias eligendi temporibus saepe fugit natus alias soluta iste magnam placeat beatae? Itaque amet expedita assumenda esse numquam dolores labore, nesciunt laboriosam quos nam optio asperiores voluptates, dolorem unde magni officiis deserunt illo harum sed soluta rerum vitae vero. Quo autem, molestiae numquam ipsam quasi vitae corporis praesentium dolorum nemo, ut maxime eveniet animi aperiam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>

                    <h4 id="Details">Details</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem, eius laudantium quos, aperiam voluptatibus hic cumque error eveniet maxime dicta sapiente tempore animi molestias accusantium ad laboriosam quasi distinctio sed nihil laborum! Hic ab repellendus, quisquam voluptate doloremque, a quam nobis beatae perspiciatis distinctio provident vel animi rem fugit facere minus aut velit quo, voluptatum maxime fugiat soluta blanditiis porro. Repellendus minima quod et blanditiis fugiat! Sequi voluptatum fuga hic odio? Ipsam sint a minus sunt commodi fugiat deserunt, dolore molestiae id perspiciatis quidem nemo dolores officia illum molestias eligendi temporibus saepe fugit natus alias soluta iste magnam placeat beatae? Itaque amet expedita assumenda esse numquam dolores labore, nesciunt laboriosam quos nam optio asperiores voluptates, dolorem unde magni officiis deserunt illo harum sed soluta rerum vitae vero. Quo autem, molestiae numquam ipsam quasi vitae corporis praesentium dolorum nemo, ut maxime eveniet animi aperiam suscipit odit, modi porro aliquid! Maxime, at cum quis reprehenderit, assumenda beatae deleniti eaque nam placeat necessitatibus tenetur similique inventore molestias fugiat optio doloribus ipsam facere culpa. Itaque illum porro qui hic magnam quis, ipsam ipsa libero saepe veritatis aperiam odio, cumque ex vitae velit tempore molestiae voluptatibus inventore sit quidem accusamus. Quo enim quos amet!</p>

                </div>
            </div>
        </>
    );
};
