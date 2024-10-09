import React from 'react';

const Blog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-BgColor">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {/* Blog Post 1 */}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Dynamic Portfolio</span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Building a Dynamic Portfolio with React and Express</h2>
            <p className="leading-relaxed mb-8">
              Created an engaging and responsive portfolio essential for developers looking to showcase their work. I wanted mine to go beyond a static display of projects and serve as an interactive hub for showcasing my skills and sharing insights through blogs. This led to the creation of a dynamic portfolio that not only renders my projects but also features blog posts that can be easily updated and shared with the development community!
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a  className="text-indigo-500 inline-flex items-center" href='https://dynamic-portofolio-6x5d-git-main-shanmukhi406s-projects.vercel.app/'>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Competitive Coding</span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">My Journey of Solving 150+ Problems Across Multiple Platforms</h2>
            <p className="leading-relaxed mb-8">
              As a competitive coder, I have always been driven by the challenge of solving problems and improving my problem-solving skills. Over the past few years, I have tackled more than 150 problems across some of the most popular coding platforms, including Leetcode, GeeksforGeeks, Coding Ninjas. 
              In today's tech-driven world, mastering algorithms and data structures is key to excelling as a software developer. Each platform pushed me to think critically and adapt. I invite you to follow my coding journey and explore the projects where I utilize these skills in action!
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a className="text-indigo-500 inline-flex items-center" href="https://leetcode.com/u/chinnishanmukhi/">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
