import React from "react";
import hero from "../assets/hero.jpg";
import service1min from "../assets/service1min.png";
import service2min from "../assets/service2min.png";
import service3min from "../assets/service3min.png";
import service4min from "../assets/service4min.png";
import service5min from "../assets/service5min.png";
import service6min from "../assets/service6min.png";
import service7min from "../assets/service7min.png";

const HomePage = () => {
  return (
    <>
      <div className="">
        {/* Nav */}
        <div>
      <div className="flex max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-16 pt-12 pb-3 mx-auto w-full bg-white md:rounded-br-[4rem] shadow-[3px_0px_15px_rgba(0,0,0,0.25)] max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c02a980314fe54b1bca88401efba3c8959520b6f6fcaa91acd0dc5df37062a?apiKey=5832d9011e934559997a42b2b3992b06&"
              className="max-w-full aspect-[1.08] fill-purple-900 w-[115px]"
            />
            <div className="mt-9 text-3xl font-bold text-black whitespace-nowrap">
              <h2>It’s Your Turn</h2>
            </div>
            <div className="mt-3 text-3xl text-purple-900 whitespace-nowrap">
             <h3 className="italic text-4xl"> Social Event Specialists</h3>
            </div>
            <div className="mt-20 text-xl text-purple-900 max-md:mt-10">
              Home
            </div>
            <div className="mt-7 text-xl text-purple-900"><p>Services</p></div>
            <div className="mt-6 text-xl text-purple-900"><p>About</p></div>
            <div className="mt-7 text-xl text-purple-900"><p>Blog</p></div>
            <div className="mt-6 text-xl text-purple-900"><p>Contact</p></div>
            <div className="mt-40 h-px bg-orange-400 w-[79px] max-md:mt-10" />
            <div className="flex gap-1 items-start mt-2 text-xl font-medium text-center text-purple-900 whitespace-nowrap">
             
              <div className="flex flex-col flex-1 mt-2.5">
                <div className="self-center"><p>+91 8080332299</p></div>
                <div className="mt-1"><p>itsyourturn.in@gmail.com</p></div>
              </div>
             
            </div>
            <div className="flex gap-5 justify-between self-stretch pr-6 mt-2.5 max-md:pr-5">
              
            </div>
          </div>
        </div>
        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-start px-14 py-12 min-h-[734px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d04ee748b1d103c13ead236e4b6f335a6cd6617092fe03d4e1f0f995dce7bfeb?apiKey=5832d9011e934559997a42b2b3992b06&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-9 py-5 mt-96 max-w-full bg-white shadow-sm w-[600px] max-md:px-5 max-md:mt-10">
              <div className="text-3xl tracking-widest text-center text-purple-900 max-md:max-w-full">
              <h3 className="italic text-4xl">  Extra-ordinary Event delivered here....</h3>
                
                <h3 className="italic text-4xl">Let us create magic for you!{" "}</h3>
              </div>
              <div className="mt-5 text-2xl tracking-wide text-center text-black max-md:max-w-full">
                We are here to design your special days and create unforgettable
                memories
              </div>
              <a href="https://wa.me/8080332299/" target="blank" className=" self-center">
              <div className="justify-center self-center px-10 py-3.5 mt-2.5 text-xl font-medium text-white whitespace-nowrap bg-purple-900 shadow-sm max-md:px-5">
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
        {/* <div className="">
          <img src={hero} className="w-full h-[100vh] md:h-[70vh] object-cover" alt="" />
          <div></div>
        </div> */}
        {/* Hero End */}


        {/* Services */}
        <>
          {/* Card Blog */}
          <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 mx-auto">
            {/* Title */}
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
              <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
                Our Services
              </h2>
              <p className="mt-1 text-md md:text-xl text-gray-600 dark:text-gray-400">
                Whether you're planning a corporate gathering, a wedding, or a
                special celebration, our team of experts is here to turn your
                vision into reality.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
                    src={service1min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    WEDDING PARTIES
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
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
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
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
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
                    src={service4min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    LUXARY DECOR
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
                    src={service5min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    LUXURY & CORPORATE GIFTING
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
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
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-t-xl h-60"
                    src={service7min}
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    EVENT PLANNING
                  </h3>
                </div>
              </a>
              {/* End Card */}
              {/* End Card */}
            </div>
            {/* End Card */}
          </div>
          {/* End Card Blog */}
        </>
        {/* Service End */}

        {/* Content Start */}
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto">
          {/* Title */}
          <div className="text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              Event Orchestration
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Welcome to{" "}
              <span className="font-bold italic">It’s Your Turn,</span> where we
              transform ordinary moments into extraordinary memories. Our
              comprehensive range of services is tailored to elevate your social
              events to new heights, ensuring every detail is curated with
              precision and passion. Explore the array of offerings that make us
              your go-to partner for creating unforgettable experiences:
            </p>
            <br />
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              <span className="font-bold">1.</span> Event Planning and
              Coordination: Our expert event planners meticulously organize and
              coordinate every aspect of your social gathering, from concept to
              execution.
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
              <span className="font-bold">4.</span> Entertainment Solutions:From
              live music and DJs to engaging activities, we provide
              entertainment that captivates and leaves a lasting impression.
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              <span className="font-bold">5.</span> Photography and Videography:
              Capture the magic of your event with our skilled photographers and
              videographers. We ensure that every smile and laugh is
              immortalized, allowing you to relive the moment for years to come.
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              <span className="font-bold">6.</span> Themed Events and
              Decor:Transform your vision into a reality with our themed events
              and bespoke decor services. Whether it's a whimsical garden party
              or an elgant black-tie affair, our team brings your dreams to
              life.
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
            <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              Luxury CORPORATE Gifting
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Elevate your gifting experience with{" "}
              <span className="font-bold italic">It’s Your Turn,</span> and dive
              into luxury with us. We specialize in crafting bespoke, luxurious
              gifts tailored to your brand's essence. Our personalized touch
              ensures each gift reflects your unique identity, making a lasting
              impression on clients, partners, and employees. From exquisite
              customizations to exclusive packaging, we redefine corporate
              gifting, turning every gesture into a symbol of distinction and
              appreciation. Choose sophistication, choose distinction, choose{" "}
              <span className="font-bold italic">It’s Your Turn,</span>!
            </p>
          </div>
        </div>
        {/* Content End */}

        {/* Gallary Start*/}
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto">
          {/* Title */}
          <div className="text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-4xl font-medium md:text-7xl md:leading-tight dark:text-white">
              Gallary
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
                  Financial
                </p>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                  AnalystFounder
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
            <div className="mt-6 lg:mt-10">
              <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
                  width={16}
                  height={13}
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10 italic text-gray-800 dark:text-gray-200">
                  From the seamless coordination of our corporate event to the
                  exquisite luxury gifting solutions they provided, every aspect
                  exceeded our expectations. I highly recommend It's Your Turn
                  to anyone looking to elevate their events and impress their
                  guests.
                </span>
              </p>
            </div>
            <footer className="mt-6">
              <div className="font-semibold text-gray-800 dark:text-gray-200">
                Lara
              </div>
              <div className="text-sm text-gray-500">
                Wedding | Jaipur
              </div>
            </footer>
          </blockquote>
          {/* End Blockquote */}
        </div>
        {/* End Testimonials */}
      </>
    
      {/* Ending Form Start */}
      <>
  {/* Hero */}
  <div className="bg-slate-900">
    <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
            href="https://wa.me/8080332299/" target="blank"
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
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          IT’s Your Turn          </h1>
        </div>
        {/* End Title */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
          Events and Weddings
          </p>
        </div>
        {/* Buttons */}
        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
            href="https://wa.me/8080332299/" target="blank"
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
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 md:mx-40">
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <a
        className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="/"
        aria-label="Brand"
      >
        It's Your Turn
      </a>
      <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
      Contact us today to turn your social event into an extraordinary celebration..
        © 2024 It's Your Turn.
      </p>
    </div>
    {/* End Col */}

    <div className="md:ml-20">
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
        Quick Link
      </h4>
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
        <p>
          Contact
        </p>
      </div>
    </div>
    {/* End Col */}
    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
        Contact Us
      </h4>
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
    <div>
      <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
        Photograph
      </h4>
     
      
     
    </div>
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
                  <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
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
