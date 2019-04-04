// import React from "react";
// // import { MDBContainer, MDBRow, MDBCol, MDBTestimonial, MDBAvatar,  MDBIcon } from "mdbreact";

// const Company = () => {
//   return (
//     // <MDBContainer>
//     //   <section className="team-section text-center my-5">
//     //       <h2 className="h1-responsive font-weight-bold my-5">
//     //         Testimonials v.3
//     //       </h2>
//     //       <p className="dark-grey-text w-responsive mx-auto mb-5">
//     //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//     //         error amet numquam iure provident voluptate esse quasi, veritatis
//     //         totam voluptas nostrum quisquam eum porro a pariatur veniam.
//     //       </p>

//     //       <MDBRow className="text-center">
//     //         <MDBCol md="4" className="mb-md-0 mb-5">
//     //           <MDBTestimonial>
//     //             <MDBAvatar className="mx-auto">
//     //               <img
//     //                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
//     //                 alt=""
//     //                 className="rounded-circle z-depth-1 img-fluid"
//     //               />
//     //             </MDBAvatar>
//     //             <h4 className="font-weight-bold dark-grey-text mt-4">
//     //               Anna Deynah
//     //             </h4>
//     //             <h6 className="font-weight-bold blue-text my-3">
//     //               Web Designer
//     //             </h6>
//     //             <p className="font-weight-normal dark-grey-text">
//     //               <MDBIcon className="fa fa-quote-left pr-2" />
//     //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//     //               eos id officiis hic tenetur quae quaerat ad velit ab hic
//     //               tenetur.
//     //             </p>
//     //             <div className="orange-text">
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon far icon="star-half" />
//     //             </div>
//     //           </MDBTestimonial>
//     //         </MDBCol>
//     //         <MDBCol md="4" className="mb-md-0 mb-5">
//     //           <MDBTestimonial>
//     //             <MDBAvatar className="mx-auto">
//     //               <img
//     //                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
//     //                 alt=""
//     //                 className="rounded-circle z-depth-1 img-fluid"
//     //               />
//     //             </MDBAvatar>
//     //             <h4 className="font-weight-bold dark-grey-text mt-4">
//     //               John Doe
//     //             </h4>
//     //             <h6 className="font-weight-bold blue-text my-3">
//     //               Web Developer
//     //             </h6>
//     //             <p className="font-weight-normal dark-grey-text">
//     //               <MDBIcon className="fa fa-quote-left pr-2" />
//     //               Ut enim ad minima veniam, quis nostrum exercitationem ullam
//     //               corporis suscipit laboriosam, nisi ut aliquid commodi.
//     //             </p>
//     //             <div className="orange-text">
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //             </div>
//     //           </MDBTestimonial>
//     //         </MDBCol>
//     //         <MDBCol md="4">
//     //           <MDBTestimonial>
//     //             <MDBAvatar className="mx-auto">
//     //               <img
//     //                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
//     //                 alt=""
//     //                 className="rounded-circle z-depth-1 img-fluid"
//     //               />
//     //             </MDBAvatar>
//     //             <h4 className="font-weight-bold dark-grey-text mt-4">
//     //               Maria Kate
//     //             </h4>
//     //             <h6 className="font-weight-bold blue-text my-3">
//     //               Photographer
//     //             </h6>
//     //             <p className="font-weight-normal dark-grey-text">
//     //               <MDBIcon className="fa fa-quote-left pr-2" />
//     //               At vero eos et accusamus et iusto odio dignissimos ducimus qui
//     //               blanditiis praesentium voluptatum deleniti atque corrupti.
//     //             </p>
//     //             <div className="orange-text">
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon icon="star" />
//     //               <MDBIcon far icon="star" />
//     //             </div>
//     //           </MDBTestimonial>
//     //         </MDBCol>
//     //       </MDBRow>
//     //     </section>
//     // </MDBContainer>
//     <h1>porfoloio company</h1>
//   );
// }

// export default Company;


import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const Company = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">Managing Director</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="text-uppercase blue-text">Marketing & Sales Executive</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Operations Manager</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Marketing & Sales Executive</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Company;