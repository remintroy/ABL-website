import { useState } from "react";

export const ContactPage = () => {
  const submitUrl =
    "https://script.google.com/macros/s/AKfycbws21sDBPcKLdzAalW7nYSMnfpXnrgzCY8N_JaNpOmI87pcSzyJQGdxdtp6wbthKA4D/exec";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [displayStatus, setDisplayStatus] = useState("");
  const [dispErr, setDispErr] = useState(false);

  const submitResponse = async () => {
    try {
      setDispErr(false);
      setDisplayStatus("");

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      if (!name) {
        setDisplayStatus("Name is required");
        throw {};
      }

      if (!email) {
        setDisplayStatus("Email is required");
        throw {};
      }

      if (!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email))) {
        setDisplayStatus("Enter a valid email");
        throw {};
      }

      if (!message) {
        setDisplayStatus("Message is requried");
        throw {};
      }

      const response = await fetch(submitUrl, {
        method: "POST",
        mode: "no-cors",
        // headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      setDisplayStatus(
        response.status < 400 ? "Form submitted" : "Oops something went wrong"
      );

      if (response.status < 400) {
        setName("");
        setEmail("");
        setMessage("");
        setDispErr(false);
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
      setDispErr(true);
      //   setDisplayStatus("Oops something went wrong");
    }
  };

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
            {displayStatus && (
              <div
                className={`p-3 rounded-md w-full ${
                  dispErr ? "bg-red-100" : "bg-green-100"
                }`}
              >
                {displayStatus}
              </div>
            )}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="email"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              cols={30}
              rows={10}
              placeholder="your message"
            ></textarea>
            <button
              onClick={() => submitResponse()}
              className="w-full justify-center mt-5 inline-flex items-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
