const sectionStyle: React.CSSProperties = {
  scrollSnapAlign: "start",
}

const ServicesCards = (props: any) =>
  <section className="border-b bg-gray-100 md:pt-8" style={sectionStyle}>
    <div className="text-center md:pb-14">
      <h2 className="w-full mt-20 mb-4 text-4xl md:text-5xl font-black text-center text-gray-800">
        {props.t('servicesCards.title')}
      </h2>
      <p className="text-xl md:text-2xl mb-8 mx-6 text-gray-600 md:max-w-lg md:mx-auto ">
        {props.t('servicesCards.text')}
      </p>

    </div>

    {/* <div className="grid grid-cols-1 gap-10 mx-8 mt-20 mb-40 sm:mx-24  2xl:grid-cols-3"> */}

      <div className="mx-2 md:mx-auto max-w-6xl mb-6 md:mb-20	">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="order-2 md:order-1 md:mt-10 md:mr-10 md:py-8 text-center md:text-left">
            <div className="text-md md:text-lg text-green uppercase font-semibold">{props.t('servicesCards.firstCard.label')}</div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">{props.t('servicesCards.firstCard.title')}</h3>
            <p className="mt-2 text-xl mx-6 md:mx-0 md:text-2xl text-gray-600 md:max-w-lg">
              {props.t('servicesCards.firstCard.text')}
            </p>
          </div>
          <div className="order-1 md:order-2 w-4/5 md:w-3/5 mt-2 mx-auto mb-10 md:mb-0">
            <img className="object-fit rounded-lg shadow-lg" src="/assets/images/soaps.jpg" alt="Man looking at item at a store"/>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-auto max-w-6xl	md:mb-20">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-4/5 md:w-3/5 mt-2 mx-auto mb-10 md:mb-0">
            <img className="object-fit rounded-lg shadow-lg" src="/assets/images/education.jpg" alt="Man looking at item at a store"/>
          </div>
          <div className="md:mt-10 md:mr-10 md:py-8 text-center md:text-left md:ml-20 mb-6 md:mb-0">
            <div className="text-md md:text-lg text-green uppercase font-semibold">{props.t('servicesCards.secondCard.label')}</div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">{props.t('servicesCards.secondCard.title')}</h3>
            <p className="mt-2 text-xl mx-6 md:mx-0 md:text-2xl text-gray-600 md:max-w-lg">
              {props.t('servicesCards.secondCard.text')}
            </p>
          </div>

        </div>
      </div>

      <div className="mx-2 md:mx-auto max-w-6xl mb-6 md:mb-20	">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="order-2 md:order-1 md:mt-10 md:mr-10 md:py-8 text-center md:text-left">
            <div className="text-md md:text-lg text-green uppercase font-semibold">{props.t('servicesCards.thirdCard.label')}</div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">{props.t('servicesCards.thirdCard.title')}</h3>
            <p className="mt-2 text-xl mx-6 md:mx-0 md:text-2xl text-gray-600 md:max-w-lg">
              {props.t('servicesCards.thirdCard.text')}
            </p>
          </div>
          <div className="order-1 md:order-2 w-4/5 md:w-3/5 mt-2 mx-auto mb-10 md:mb-0">
            <img className="object-fit rounded-lg shadow-lg" src="/assets/images/comunity.jpg" alt="Man looking at item at a store"/>
          </div>
        </div>
      </div>

    {/* </div> */}
  </section>

export default ServicesCards;
