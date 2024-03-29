import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_fvr30u3`,
        `template_6k21npp`,
        form.current,
        `0c1MJs1uNsJG49e1E`
      )
      .then(
        function (response) {
          // console.log('SUCCESS!', response.status, response.text);
          toast.success("thanks for your message");
          e.target.reset();
        },
        function (error) {
          // console.log('FAILED...', error);
        }
      );
  };
  return (
    <div id="contactMe" className="mt-20 mb-10">
      <h3 className="text-md underline underline-offset-2 text-center my-4 text-accent">
        Contact Me
      </h3>
      <div className=" min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="hero-content flex-col lg:flex-row"
        >
          <div
            data-aos="fade-right"
            className="w-full max-w-xl p-5 rounded-xl "
          >
            <h3 className="text-md text-center text-primary underline underline-offset-2 py-3">
              Contact Info
            </h3>
            <div className="flex items-center justify-evenly my-8">
              <div
                onClick={() => {
                  window.open("https://github.com/jatinnarang22");
                }}
                className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-600 rounded-2xl py-4 px-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p className="underline-offset-2">GitHub</p>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.linkedin.com/in/jatinnarang22/");
                }}
                className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-600 rounded-2xl p-4 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <p className="underline-offset-2">LinkedIn</p>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/jatinnarang22/");
                }}
                className="flex flex-col items-center hover:underline  cursor-pointer bg-slate-600 rounded-2xl py-4 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
                <p className="underline-offset-2">Facebook</p>
              </div>
            </div>
            <div className="card">
              <h2 className="text-2xl">Phone</h2>
              <figure
                style={{ justifyContent: "flex-start" }}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-18 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel:+91 9416544345">+91 9416544345</a>
              </figure>
            </div>
            <div className="my-5">
              <h2 className="text-2xl">Email</h2>
              <figure
                style={{ justifyContent: "flex-start" }}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-18 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:njatin3435@gmail.com">njatin3435@gmail.com</a>
              </figure>
            </div>
            <div>
              <h2 className="text-2xl">Address</h2>
              <figure
                style={{ justifyContent: "flex-start" }}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-18 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <address>86 DC Colony sirsa , Haryana</address>
              </figure>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="card flex-shrink-0 w-full max-w-lg shadow-xl"
          >
            <div className="card-body">
              <h3 className="text-md text-center text-primary underline underline-offset-2">
                Direct Mail
              </h3>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    type="name"
                    name="user_name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    required
                    type="text"
                    name="message"
                    rows={6}
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-accent"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

/* 
<svg 
xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
</svg> 

*/
