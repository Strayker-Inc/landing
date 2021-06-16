const ServicesCards = () =>
  <section className="border-b bg-gray-100 py-8">
    <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
      Our Services
    </h2>

    <div className="grid grid-cols-1 gap-10 mx-8 2xl:grid-cols-3 my-10 2xl:mx-32">

      <div className="px-4 py-4 transform transition duration-500 hover:scale-110 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-fit md:h-full md:w-48" src="/assets/images/staff.svg" alt="Man looking at item at a store"/>
          </div>
          <div className="py-8 pl-8 pr-4">
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Staff Augmentation</h2>
            <p className="mt-2 text-gray-500">
              Expert software engineers work together with your internal team on your projects. These engineers join your existing
              staff, often working remote until project completion.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 transform transition duration-500 hover:scale-110 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-fit md:h-full md:w-48" src="/assets/images/team.svg" alt="Man looking at item at a store"/>
          </div>
          <div className="py-8 pl-8 pr-4">
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Dedicated Teams</h2>
            <p className="mt-2 text-gray-500">
              Presents talent which directly oversees the whole development project. This option provides a management structure with
              hands-on supervision of the workflow and tasks.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 transform transition duration-500 hover:scale-110 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-fit md:h-full md:w-48" src="/assets/images/product.svg" alt="Man looking at item at a store"/>
          </div>
          <div className="py-8 pl-8 pr-4">
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Project-Based Model</h2>
            <p className="mt-2 text-gray-500">
              Your partner company oversees the entire development process: from establishing the specs, to allocating workflow,
              setting timescales and quality testing.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

export default ServicesCards;
