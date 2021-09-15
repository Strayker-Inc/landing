const sectionStyle: React.CSSProperties = {
  scrollSnapAlign: "start",
  height: '100vh',
}

const ServicesCards = (props: any) =>
  <section className="border-b bg-gray-100 pt-8 " style={sectionStyle}>
    <div className="text-center pb-14">
      <h2 className="w-full mt-20 mb-4 text-5xl font-black text-center text-gray-800">
        {props.t('servicesCards.title')}
      </h2>
      <p className="text-2xl mb-8 text-gray-600 sm:max-w-lg sm:mx-auto ">
        {props.t('servicesCards.text')}
      </p>

    </div>

    {/* <div className="grid grid-cols-1 gap-10 mx-8 mt-20 mb-40 sm:mx-24  2xl:grid-cols-3"> */}

      <div className="mx-auto max-w-6xl mb-20	">
        <div className="md:flex">
          <div className="py-8 pr-4 mt-10 mr-10">
            <div className="text-lg text-green uppercase font-semibold">{props.t('servicesCards.firstCard.label')}</div>
            <h3 className="block mt-1 text-4xl font-extrabold text-gray-800">{props.t('servicesCards.firstCard.title')}</h3>
            <p className="mt-2 text-2xl text-gray-600 max-w-lg">
              {props.t('servicesCards.firstCard.text')}
            </p>
          </div>
          <div className="md:flex-shrink-0">
            <img className="h-96 object-fit rounded-lg shadow-lg" src="/assets/images/test.jpg" alt="Man looking at item at a store"/>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl	mb-20">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-96 object-fit rounded-lg shadow-lg" src="/assets/images/education.jpg" alt="Man looking at item at a store"/>
          </div>
          <div className="py-8 ml-16 pr-4 mt-10">
            <div className="text-lg text-green uppercase font-semibold">{props.t('servicesCards.secondCard.label')}</div>
            <h3 className="block text-4xl font-extrabold text-gray-800">{props.t('servicesCards.secondCard.title')}</h3>
            <p className="mt-2 text-2xl text-gray-600 max-w-lg">
              {props.t('servicesCards.secondCard.text')}
            </p>
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="md:flex">
          <div className="py-8  pr-4 mr-10">
            <div className="text-lg text-green uppercase font-semibold"> {props.t('servicesCards.thirdCard.label')} </div>
            <h3 className="block mt-1 text-4xl font-extrabold text-gray-800">{props.t('servicesCards.thirdCard.title')}</h3>
            <p className="mt-2 text-2xl text-gray-600 max-w-lg">
              {props.t('servicesCards.thirdCard.text')}
            </p>
          </div>
          <div className="md:flex-shrink-0">
            <img className="h-96 object-fit rounded-lg shadow-lg" src="/assets/images/test.jpg" alt="Man looking at item at a store"/>
          </div>
        </div>
      </div>

    {/* </div> */}
  </section>

export default ServicesCards;
