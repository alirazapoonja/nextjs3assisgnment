import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section
        id="about"
        className="p-8 md:p-16 bg-gradient-to-r from-blue-500 via-purple-50 to-indigo-100 text-yellow-800"
      >
        <div className="container mx-auto text-center bg-yellow-400 p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Hi, I&apos;m Ali Raza, Student of GIAIC learning Typescript, HTML, CSS, NEXT JS.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="p-8 md:p-16 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-50 text-gray-900"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            I have completed 45 assignments of Sir Ashraib Ali.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                Typescript
              </h3>
              <p>
                TypeScript is a superset of JavaScript that adds static typing to the language. This means that in TypeScript, you can specify types (such as numbers, strings, objects, etc.) for variables, function parameters, and return values, which helps catch errors at compile time rather than at runtime.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                HTML
              </h3>
              <p>
                HTML (HyperText Markup Language) is the standard language used to create and structure the content on the web. It defines the structure of a webpage by using a series of elements (tags) that describe the various components like text, images, links, and multimedia.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold my-6 text-purple-600">
                CSS
              </h3>
              <p>
                CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation (appearance and layout) of a document written in HTML. While HTML defines the structure and content of a web page, CSS is responsible for controlling how that content is displayed visually, including aspects like colors, fonts, spacing, and positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-8 md:p-16 bg-sky-500 from-indigo-100 via-purple-50 to-indigo-100 text-gray-900"
      >
        <div className="container mx-auto text-center bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Feel free to reach out to me via email at:
            <a
              href="mailto:abc@gmail.com"
              className="text-indigo-600 hover:underline transition-colors duration-300"
            >
              {" "}
              abc@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
