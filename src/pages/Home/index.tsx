export default function HomePage() {
  return (
    <>
      {/* <section className="bg-center bg-no-repeat bg-[url('/images/home-banner-01.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Discover IT Excellence: Your Trusted IT Service Provider
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
        </div>
      </section> */}
      <section className="bg-center bg-no-repeat sm:bg-[url('/images/home-banner-01.jpg?')] sm:bg-slate-100 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Discover IT Excellence: Your Trusted IT Service Provider
          </h1>
          <p className="text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
        </div>
      </section>
      <section className="container my-5 sm:my-14 py-10 px-5 sm:px-10">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight">
          Web development
        </h1>
        <div className="flex flex-col sm:flex-row gap-10 ">
          <div className="flex flex-col items-center justify-center gap-10 sm:w-1/3">
            <img
              className="sm:w-full sm:p-6"
              src="/images/home-illu-01.jpg"
              alt="image"
            />
            <p>
              <strong>Discovery and Planning : </strong> We begin by listening
              to your ideas, goals, and vision for your website. We want to
              understand your brand, target audience, and the unique value you
              offer.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 sm:w-1/3">
            <img
              className="sm:w-full sm:p-6"
              src="/images/home-illu-02.jpg"
              alt="image"
            />
            <p>
              <strong>Design and Development : </strong> Our creative designers
              craft visually stunning and user-friendly website layouts that
              align with your brand identity. We build websites that are fast,
              secure, and scalable.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 sm:w-1/3">
            <img
              className="sm:w-full sm:p-6"
              src="/images/home-illu-03.jpg"
              alt="image"
            />
            <p>
              <strong>Launch and Support : </strong> We celebrate the launch of
              your website, ensuring a seamless transition from development to
              the live environment. Your website is now ready to engage and
              captivate your audience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
