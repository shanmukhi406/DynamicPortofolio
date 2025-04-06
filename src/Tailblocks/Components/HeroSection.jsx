import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['I am a Full Stack Developer'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section className="text-gray-600 body-font bg-BgColor">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <br className="hidden lg:inline-block" />
            My name is Shanmukhi
          </h1>
          <h2 className="text-2xl mb-4 font-medium text-gray-900">
            {text}
            <Cursor />
          </h2>

          <p className="mb-4 text-gray-700 text-lg">
            I worked as a <span className="font-semibold text-indigo-600">Full Stack Developer Intern</span> at <span className="font-semibold">BuzzVerse</span>, a platform that connects celebrities with brands for collaboration. I contributed to building matchmaking features using the MERN stack.
          </p>

          <div className="flex justify-center flex-wrap">
            {/* Project Buttons */}
            <a
              href="https://careerpath-git-master-shanmukhi406s-projects.vercel.app/"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1
            </a>

            <a
              href="https://shoppingcart1-git-main-shanmukhi406s-projects.vercel.app/"
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2
            </a>

            <a
              href="https://todo-list-dun-two.vercel.app/"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 3
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-4">
            <a
              href="./shannuresume.pdf"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              download
            >
              Download My Resume
            </a>
          </div>

          {/* Certificate Button */}
          <div className="mt-4">
            <a
              href="internshipplanetcelluliod.jpg" // or .pdf if it's a PDF
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Internship Certificate
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src="shanmukhiimg.jpg"
            width="300px"
            alt="Shanmukhi"
            className="rounded-xl shadow-md mb-4"
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
