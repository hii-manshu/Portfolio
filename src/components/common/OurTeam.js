// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MainTitle } from "./typography.component";
// import { useTranslation } from "react-i18next";
// import SecondaryButton from "./SecondaryButton";

// const teamData = [
//   {
//     name: "Himanshu Sharma",
//     img: "/public/assets/images/our-team/himanshusharma.jpg",
//     role: "Front-end Developer",
//   },
//   {
//     name: "Rakesh Kumar",
//     img: "/public/assets/images/our-team/rakesh-kumar.jpg",
//     role: "Sr. Front-end Developer",
//   },
//   {
//     name: "sandeep Kushwaha",
//     img: "/public/assets/images/our-team/sandeep-kushwaha.jpg",
//     role: "Sr. Software Engineer",
//   },
//   {
//     name: "Krishna Tiwari",
//     img: "/public/assets/images/our-team/krishna-tiwari.jpg",
//     role: "Front-end Developer",
//   },
//   {
//     name: "Tirth Raj",
//     img: "/public/assets/images/our-team/tirth-raj.png",
//     role: "Wordpress Developer",
//   },
//   {
//     name: "J.K Tyagi",
//     img: "/public/assets/images/our-team/jk-tyagi.png",
//     role: "Node JS Developer",
//   },
// ];

// function OurTeam() {
//   const { t } = useTranslation();
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="our-team md:py-20 py-10">
//       <div className="container m-auto">
//         <div className="flex lg:items-center items-start justify-between">
//           <div className="flex gap-3 items-center mb-10">
//             <MainTitle text={t("Our Team")} className="font-semibold" />
//             <hr className="h-1 w-20 bg-black mt-2" />
//           </div>
//           <SecondaryButton
//             text={t("Know More")}
//             url="/our-team"
//             className="max-w-[150px] py-2 px-3 our-team-know-more-btn capitalize"
//           />
//         </div>
//         <Slider {...settings}>
//           {teamData &&
//             teamData.map((team, key) => (
//               <div key={key}>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={team?.img}
//                     className="max-h-[200px] max-w-[300px] object-cover"
//                   />
//                   <h6>{t(team?.name)}</h6>
//                   <p className="text-[14px]">({t(team?.role)})</p>
//                 </div>
//               </div>
//             ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default OurTeam;
