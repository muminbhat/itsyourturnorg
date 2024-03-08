import React, { useState, useEffect } from "react";
import hero from "../assets/hero.jpg";
import service1min from "../assets/service1min.png";
import service2min from "../assets/service2min.png";
import service3min from "../assets/service3min.png";
import service4min from "../assets/service4min.png";
import service5min from "../assets/service5min.png";
import service6min from "../assets/service6min.png";
import service7min from "../assets/service7min.png";
import phonecall from "../assets/phonecall.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.JPG";
import hero3 from "../assets/hero3.JPG";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

import lgo from "../assets/lgo.png";

// Swiper
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFlip } from "swiper/modules";

import { Link, animateScroll as scroll } from "react-scroll";
import testimonialSlider from "../data/testimonialSlider";

const imageList = [hero1, hero2, hero3, hero4, hero5, hero6];

const HomePage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="overflow-x-hidden ">
        {/* Nav */}
        <div>
          <div className="md:hidden absolute z-20 top-1 left-1/2 transform -translate-x-1/2">
            <img src={lgo} alt="" className="w-20" />
          </div>
          <div className={`max-md:flex-col max-md:gap-0 md:flex`}>
            <a href="https://wa.me/8080332299/">
              <div className="md:hidden absolute top-4 right-5 z-20 ">
                <img src={phonecall} alt="" className="h-7 w-full" />
              </div>
            </a>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex absolute z-50 border top-2 left-1 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden "
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNav}
            >
              <span className="sr-only ">Open main menu</span>
              {!navOpen ? (
                <svg
                  className="w-5 h-5 z-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 z-50"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              )}
            </button>
            <div
              className={`flex absolute z-40 md:relative flex-col md:w-5/12 lg:w-3/12 xl:w-2/12 max-md:ml-0 max-md:w-full md:flex ${
                !navOpen ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col grow items-center px-12 pt-12 pb-3 mx-auto w-full bg-white md:rounded-br-[4rem] shadow-[3px_0px_15px_rgba(0,0,0,0.25)] max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&"
                  className="max-w-full aspect-[1.08] fill-purple-900 w-[115px]"
                />
                <div className="mt-9 text-2xl  font-bold text-black whitespace-nowrap">
                  <h2>It’s Your Turn</h2>
                </div>
                <div className="mt-3 text-3xl text-purple-900 whitespace-nowrap">
                  <h4 className="italic text-2xl">Social Event Specialists</h4>
                </div>
                <a href="/">
                  <div className="mt-20 cursor-pointer text-xl text-purple-900 max-md:mt-10">
                    Home
                  </div>
                </a>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="mt-7 cursor-pointer text-xl text-purple-900">
                    <p>Services</p>
                  </div>
                </Link>
                <Link
                  to="event-orchestration"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="mt-6 cursor-pointer text-xl text-center text-purple-900">
                    <p>Event Orchestration</p>
                  </div>
                </Link>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="mt-7 cursor-pointer text-xl text-purple-900">
                    <p>Gallery</p>
                  </div>
                </Link>

                <a href="https://wa.me/+918080332299/" target="blank">
                  <div className="mt-6 text-xl cursor-pointer  text-purple-900">
                    <p>Contact</p>
                  </div>
                </a>
                <div className="mt-40 h-px bg-orange-400 w-[79px] max-md:mt-10" />
                <div className="flex gap-1 items-start mt-2 text-xl font-medium text-center text-purple-900 whitespace-nowrap">
                  <div className="flex flex-col flex-1 mt-2.5">
                    <div className="self-center">
                      <p>+91 8080332299</p>
                    </div>
                    <div className="mt-1">
                      <p>itsyourturn.in@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col w-10/12 max-md:ml-0 max-md:w-full hidden md:flex">
              <div className="flex hero-container overflow-hidden relative flex-col justify-center items-start px-14 py-12 min-h-[734px] max-md:px-5 max-md:max-w-full">
                {imageList.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`hero-${index + 1}`}
                    className={
                      index === currentImageIndex
                        ? "active object-cover opacity-transition absolute inset-0 size-full"
                        : "object-cover absolute opacity-transition inset-0 size-full"
                    }
                  />
                ))}
                <div className="absolute inset-0 bg-black opacity-60" />
                <div className="flex relative flex-col px-9 py-5 left-0 lg:left-16 xl:left-60 max-w-full rounded-br-3xl">
                  <div className="text-1xl tracking-widest text-center text-white max-md:max-w-full">
                    <h4 className="italic text-5xl font-bold">
                      {" "}
                      Extra-ordinary events delivered here....
                    </h4>

                    <h4 className="italic text-5xl font-bold">
                      Let us create magic for you!{" "}
                    </h4>
                  </div>
                  <div className="mt-5 text-1xl tracking-wide font-bold text-center text-white max-md:max-w-full">
                    We are here to design your special days and create
                    unforgettable memories
                  </div>
                  <a
                    href="https://wa.me/+918080332299/"
                    target="blank"
                    className=" self-center"
                  >
                    <div className="justify-center self-center px-10 py-2.5 mt-2.5 text-md font-medium text-white whitespace-nowrap bg-purple-600 shadow-sm max-md:px-5">
                      Book Now
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nav */}
        {/* Hero Start */}
        <div className="md:hidden">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex absolute top-2 left-1 z-10 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            {!navOpen && (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          {/* Phone Version Start*/}
          <div className="hero-container">
            {imageList.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`hero-${index + 1}`}
                className={
                  index === currentImageIndex
                    ? "active w-full h-[100vh] md:h-[70vh] object-cover opacity-transition"
                    : "object-cover w-full h-[100vh] md:h-[70vh] opacity-transition"
                }
              />
            ))}
          </div>
          {/* Phone Version End */}
          <div>
            <h3 className="absolute z-10 top-40 mx-5 text-center text-white text-4xl">
              SWEET MEMORIES OF MARRIAGE PLANNER
            </h3>
          </div>
          <div className="absolute top-96 z-30 left-1/2 transform -translate-x-1/2 md:hidden">
            <a href="https://wa.me/8080332299/">
              <button className="text-white border-2 rounded-xl pt-4 pb-4 pl-6 pr-6 hover:bg-white hover:text-black">
                Book Now
              </button>
            </a>
          </div>
          <div className="absolute inset-0 bg-black h-[100vh] opacity-40"></div>
        </div>
        {/* Hero End */}

        {/* Services */}
        <>
          {/* Card Blog */}
          <div
            className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 mt-[100vh] md:mt-2 mx-auto"
            id="services"
          >
            {/* Title */}
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
              <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
                Our Services
              </h2>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14 ">
              {/* Card */}
              <a
                className="group flex flex-col  bg-white border shadow-sm  hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 "
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service1min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    WEDDINGS
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 "
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service2min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    MILESTONE EVENTS
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 "
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service3min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    PHOTOGRAPHY & VIDEOGRAPHY
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service4min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    LUXURY DECOR
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service5min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    LUXURY GIFTING
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service6min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    VENUE SOURCING
                  </h3>
                </div>
              </a>
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={service7min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5 ">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    EVENT PLANNING
                  </h3>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover  h-60"
                    src={hero2}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    Sangeet Choreography
                  </h3>
                </div>
              </a>
            </div>
            {/* End Card */}
            {/* End Card */}
          </div>
          {/* End Card */}
          {/* End Card Blog */}
        </>
        {/* Service End */}

        {/* Content Start */}
        <div
          className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto"
          id="event-orchestration"
        >
          {/* Title */}
          <div className="text-center mx-auto mb-10 lg:mb-14">
            <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              Event Orchestration
            </h2>
            <div className="text-start">
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Welcome to{" "}
                <span className="font-bold italic">It’s Your Turn,</span> where
                we transform ordinary moments into extraordinary memories. Our
                comprehensive range of services is tailored to elevate your
                social events to new heights, ensuring every detail is curated
                with precision and passion. Explore the array of offerings that
                make us your go-to partner for creating unforgettable
                experiences:
              </p>
              <br />
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">1.</span> Event Planning and
                Coordination: Our expert event planners meticulously organize
                and coordinate every aspect of your social gathering, from
                concept to execution.
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">2.</span> Venue Selection and
                Decoration:Discover unique venues that set the perfect backdrop
                for your event. Our team not only assists in selecting the ideal
                space for your big day.
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">3.</span> Catering Excellence: Our
                catering services offer a diverse array of culinary delights,
                crafted with flair and presented with elegance to delight the
                palates of your attendees.
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">4.</span> Entertainment
                Solutions:From live music and DJs to engaging activities, we
                provide entertainment that captivates and leaves a lasting
                impression.
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">5.</span> Photography and
                Videography: Capture the magic of your event with our skilled
                photographers and videographers. We ensure that every smile and
                laugh is immortalized, allowing you to relive the moment for
                years to come.
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-bold">6.</span> Themed Events and
                Decor:Transform your vision into a reality with our themed
                events and bespoke decor services. Whether it's a whimsical
                garden party or an elgant black-tie affair, our team brings your
                dreams to life.
              </p>
              <br />
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                At It’s Your Turn, we understand that every event is a unique
                celebration. Let us be your partner in crafting moments that
                linger in the hearts of your guests!{" "}
              </p>

              <br />
              <br />
              <br />
              <div className="text-center">
                <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
                  Luxury CORPORATE Gifting
                </h2>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Elevate your gifting experience with{" "}
                <span className="font-bold italic">It’s Your Turn,</span> and
                dive into luxury with us. We specialize in crafting bespoke,
                luxurious gifts tailored to your brand's essence. Our
                personalized touch ensures each gift reflects your unique
                identity, making a lasting impression on clients, partners, and
                employees. From exquisite customizations to exclusive packaging,
                we redefine corporate gifting, turning every gesture into a
                symbol of distinction and appreciation. Choose sophistication,
                choose distinction, choose{" "}
                <span className="font-bold italic">It’s Your Turn</span>!
              </p>
            </div>
          </div>
        </div>
        {/* Content End */}

        {/* Gallary Start*/}
        <div
          className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto"
          id="gallery"
        >
          {/* Title */}
          <div className="text-center mx-auto mb-10 lg:mb-14">
            <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              Gallery
            </h2>
            <div
              class="elfsight-app-55b57f34-0050-4996-a52c-ca25d79553a1"
              data-elfsight-app-lazy
            />
          </div>
        </div>

        {/* Gallary End */}
        {/* Team Start */}
        {/* Team End */}
      </div>
      <>
        {/* Team */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              MEET THE TEAM
            </h2>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="md:flex md:items-center md:justify-center md:gap-20">
            {/* End Col */}
            {/* End Col */}
            <div className="text-center border-2 p-10 ">
              <img
                className="rounded-full sm:size-48 lg:size-60 mx-auto"
                src="https://res.cloudinary.com/dxlzb8s4y/image/upload/v1708873074/teamOne_vwfpgl.png"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-lg font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Muskaan Shah
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Event Specialist
                </p>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Founder
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center border-2 p-10">
              <img
                className="rounded-full sm:size-48 lg:size-60 mx-auto"
                src="https://res.cloudinary.com/dxlzb8s4y/image/upload/v1708873074/teamTwo_rpkffk.png"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-lg font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                  Nihar Shah
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Financial Analyst
                </p>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  Founder
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Team */}
      </>
      {/* Team End */}
      <>
        {/* Testimonials */}
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Blockquote */}
          <blockquote className="text-center lg:mx-auto lg:w-3/5">
            <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              TESTIMONIALS
            </h2>

            <section className="bg-white">
              <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 cursor-grab">
              <Swiper
      effect="flip"
      modules={[Navigation, Pagination, Autoplay, EffectFlip]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        740: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
    >
                <div className="mt-8 grid grid-cols-1 md:gap-8">
                  {testimonialSlider.map((review, index)=> (
                    <div key={index}> 
                    <SwiperSlide>
                  <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="mt-4 text-gray-700 text-xl">
                      {review.content}
                    </p>
                  </blockquote>
                  </SwiperSlide>
                  </div>
                  ))}
                </div>
                </Swiper>
              </div>
            </section>
          </blockquote>
          {/* End Blockquote */}
        </div>
        {/* End Testimonials */}
      </>

      {/* Ending Form Start */}
      <>
        {/* Hero */}
        <div className="bg-black">
          <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              {/* Announcement Banner */}
              <div className="flex justify-center">
                <a
                  className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                  href="https://wa.me/+918080332299/"
                  target="blank"
                >
                  <p className="me-2 inline-block text-white text-sm">
                    Connect With Us
                  </p>
                  <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                    <svg
                      className="flex-shrink-0 size-4"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              {/* End Announcement Banner */}
              {/* Title */}
              <div className="max-w-3xl text-center mx-auto">
                <h3 className="block font-bold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  IT’s Your Turn{" "}
                </h3>
              </div>
              {/* End Title */}
              <div className="max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-400">Events and Weddings</p>
              </div>
              {/* Buttons */}
              <div className="text-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                  href="https://wa.me/+918080332299/"
                  target="blank"
                >
                  Let's Get in Touch
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>

      {/* Ending Form End */}

      {/* Start Footer */}
      <footer className="w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#EFE8D9]">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mx-40">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
              aria-label="Brand"
            >
              <h3>It's Your Turn</h3>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Contact us today to turn your social event into an extraordinary
              celebration.. © 2024 It's Your Turn.
            </p>
          </div>
          {/* End Col */}

          <div className="md:ml-20">
            <h3 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Quick Link
            </h3>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Project
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Latest Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Blog
                </a>
              </p>
              <p>Contact</p>
            </div>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Contact Us
            </h3>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Kandivali (West), Mumbai, India
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  +91 8080332299
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  itsyourturn.in@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex items-center gap-x-3">
              {/* Language Dropdown */}
              <div className="hs-dropdown relative inline-flex [--placement:top-left]">
                <button
                  id="footer-language-dropdown"
                  type="button"
                  className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="size-3 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us1"
                    viewBox="0 0 512 512"
                  >
                    <g fillRule="evenodd">
                      <g strokeWidth="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                      </g>
                      <path
                        fill="#192f5d"
                        d="M0 0h98.8v70H0z"
                        transform="scale(3.9385)"
                      />
                      <path
                        fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)"
                      />
                    </g>
                  </svg>
                  English (US)
                  <svg
                    className="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                  aria-labelledby="footer-language-dropdown"
                >
                  <a
                    className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                  </a>
                  <a
                    className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    <svg
                      className="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    Deutsch
                  </a>
                  <a
                    className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    <svg
                      className="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-dk"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                      <path fill="#fff" d="M144 0h73.1v512H144z" />
                      <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                    </svg>
                    Dansk
                  </a>
                  <a
                    className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    <svg
                      className="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    Italiano
                  </a>
                  <a
                    className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/"
                  >
                    <svg
                      className="size-3 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs>
                        <path
                          id="a"
                          fill="#ffde00"
                          d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                        />
                      </defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width={30}
                        height={20}
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlinkHref="#a"
                      />
                      <use
                        width={30}
                        height={20}
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlinkHref="#a"
                      />
                      <use
                        width={30}
                        height={20}
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlinkHref="#a"
                      />
                      <use
                        width={30}
                        height={20}
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlinkHref="#a"
                      />
                      <use
                        width={30}
                        height={20}
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlinkHref="#a"
                      />
                    </svg>
                    中文 (繁體)
                  </a>
                </div>
              </div>
              {/* End Language Dropdown */}
              <div className="space-x-4 text-sm ms-4">
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Terms
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/"
                >
                  Status
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none text-xl font-semibold dark:text-white"
                  href="/"
                  aria-label="Brand"
                >
                  Brand
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  © 2022 Preline.
                </p>
              </div>
              {/* Social Brands */}
              <div className="space-x-4">
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                  </svg>
                </a>
              </div>
              {/* End Social Brands */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </footer>

      {/* End Footer */}
    </>
  );
};

export default HomePage;
