import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Etmana – E-commerce Platform (Manual Testing – Web & Mobile App)",
    description:
      "Led the full QA lifecycle for an online retail system — including test planning, case design, execution, bug reporting, and documentation using Jira. Ensured consistent performance and user experience across both web and mobile applications.",
    image: "/img1.jpeg",
    link: "https://drive.google.com/drive/folders/1QIXSq-nOsLLyvHOJ3iYPsChXdX0_Pb8i?usp=sharing",
  },
  {
    id: 2,
    title: "Daftra – ERP Business Management System (Manual Testing)",
    description:
      "Executed functional and UI testing for multiple ERP modules, ensuring workflow integrity, data accuracy, and consistent performance across the system.",
    image: "/img2.jpeg",
    link: "https://drive.google.com/drive/folders/1NZpB6b6vHjzrbqU9VIrMZLOP5afTkX7x?usp=sharing",
  },
  {
    id: 3,
    title:
      "ParaBank – Online Banking System (Manual, Automation & Database Testing)",
    description:
      "Executed manual, automated, and database testing for a comprehensive banking web application. Combined functional, regression, and data validation approaches using Selenium, SQL, and Jira to ensure system reliability and data integrity.",
    image: "/img3.jpeg",
    link: "https://drive.google.com/drive/folders/1fdgKpaBGFMoJ1FPodAsVXJjF_gkdZkl_?usp=sharing",
  },
  {
    id: 4,
    title: "Elagi – Healthcare & Pharmacy Platform (API Testing)",
    description: `Performed API validation and integration testing for a healthcare platform using Postman, ensuring reliability, accuracy, and secure communication between services.
Verified response structures, error handling, and authentication mechanisms to maintain data integrity and system stability.`,
    image: "/img4.jpeg",
    link: "#",
  },
  {
    id: 5,
    title: "Fajr – Prayer Times & Azan Mobile App (Functional Testing)",
    description:
      "Performed end-to-end functional testing for a mobile application designed to deliver accurate prayer schedules and smart Azan notifications. Ensured stability, usability, and consistent performance across multiple devices.",
    image: "/img5.jpeg",
    link: "#",
  },
  {
    id: 6,
    title: "Wuzzuf – Job Portal (Automation Testing – Web Application)",
    description: `Designed and implemented automated test frameworks using Selenium WebDriver to validate the platform’s core functionalities, performance, and usability.
Ensured a seamless and consistent user experience across multiple browsers by automating critical user journeys and regression scenarios.`,
    image: "/img6.jpeg",
    link: "#",
  },
  {
    id: 7,
    title: "IKEA – E-commerce Platform (Automation Testing – Web Application)",
    description: `Developed and executed automated test scripts using Selenium WebDriver to ensure the platform’s stability, functionality, and performance during regression cycles.
Focused on enhancing testing efficiency and maintaining consistent quality across browser environments.`,
    image: "/img7.jpeg",
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <section className="min-h-screen  py-16 px-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group bg-[#000]  rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-60 transition-all"></div>
              </div>

              <div className="p-6 min-h-[350px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 ">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block  w-fit px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsPage;
