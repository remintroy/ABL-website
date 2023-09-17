export const ContactPage = () => {
  return (
    <>
      <section className="container my-10 flex flex-col sm:flex-row gap-10 mx:gap-0">
        <div className="hidden sm:block sm:w-1/2 p-4">
          <img
            className="w-full max-w-xl"
            src="/images/banner-03.jpg"
            alt="Contact banner image"
          />
        </div>
        <div className="sm:w-1/2 p-4">
          <h1 className="mb-5 text-3xl font-extrabold leading-none tracking-tight">
            Contact
          </h1>
          <p>
            You can use the following form and details to contact me anytime.
          </p>
          <div className="py-10 flex flex-col justify-center items-center gap-2">
            <input
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="name"
            />
            <input
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="email"
            />
            <textarea
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              cols={30}
              rows={10}
              placeholder="your message"
            ></textarea>
            <button className="w-full justify-center mt-5 inline-flex items-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
