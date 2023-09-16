import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  const works = [
    {
      image: "/images/home-banner-01.jpg",
      title: "Main work",
    },
    {
      image: "/images/home-banner-02.jpg",
      title: "Second work",
    },
  ];

  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/images/home-banner-02.jpg')] sm:bg-slate-100 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="leading-snug mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Your{" "}
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Trusted
            </mark>{" "}
            IT Service Provider
          </h1>
          <p className="text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
          <Link to={"/contact"}>
            <button className="mt-5 inline-flex items-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">
              Get started with us
            </button>
          </Link>
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

      <section className="container my-20">
        <h1 className="mb-14 text-3xl font-extrabold text-center leading-none tracking-tight">
          Our works
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <Carousel
            swipeable
            infiniteLoop
            className="max-w-3xl"
            showArrows
            showThumbs={false}
          >
            {works.map((work) => {
              return (
                <div>
                  <img src={work.image} />
                  {work.title && <p className="legend">{work.title}</p>}
                </div>
              );
            })}
          </Carousel>
          <div className="flex justify-center flex-col p-5">
            <h2 className="mb-5 text-2xl font-extrabold leading-none tracking-tight">
              Unveiling Digital Excellence: Explore Our Portfolio
            </h2>
            Explore a curated selection of our latest projects that reflect our
            passion for creative web development. With each project, I've aimed
            to blend cutting-edge design and robust functionality, ensuring an
            exceptional user experience. From sleek and responsive website
            designs to custom web applications, each work represents a unique
            solution tailored to the client's needs. These projects not only
            demonstrate our technical expertise but also our commitment to
            delivering results that exceed expectations. Whether you're looking
            for inspiration or considering collaboration, take a closer look at
            these examples to see how I can help bring your digital vision to
            life.
          </div>
        </div>
      </section>

      <section className="container">
        <h1 className="mb-10 text-3xl font-extrabold text-center leading-none tracking-tight">
          From our clients
        </h1>
        <div className="grid mb-8 border border-gray-200 rounded-lg md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">
                Very easy this was to integrate
              </h3>
              <p className="my-4">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-mediumtext-left text-start">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500">Developer at home</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">
                Very easy this was to integrate
              </h3>
              <p className="my-4">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-mediumtext-left text-start">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500">Developer at home</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container my-5 sm:my-14 py-10 px-5 sm:px-10">
        <h1 className="mb-4 text-3xl font-extrabold text-center leading-none tracking-tight">
          Have questions ?
        </h1>
        <Link to={"/contact/#"} className="flex justify-center">
          <button className="mt-5 inline-flex items-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">
            Get in touch with us
          </button>
        </Link>
      </section>
    </>
  );
}
