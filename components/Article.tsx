import React from 'react';

const RecentPosts = () => {
  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">Recent Blog Posts</h1>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        
        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img className="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww" />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-indigo-500">Coding</p>
              <p className="mb-2 text-xl font-medium text-gray-800">Get Started in Problem Solving</p>
              <p className="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#problem</div>
              </div>
            </div>
          </a>
        </article>
        
        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img className="max-h-40 w-full object-cover" alt="featured image" src="https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-indigo-500">Development</p>
              <p className="mb-2 text-xl font-medium text-gray-800">Road map for web development</p>
              <p className="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#web</div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#Html</div>
              </div>
            </div>
          </a>
        </article>
        
        <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" className="block h-full w-full">
            <img className="max-h-40 w-full object-cover" alt="featured image" src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <div className="w-full bg-white p-4">
              <p className="text-md font-medium text-indigo-500">Career</p>
              <p className="mb-2 text-xl font-medium text-gray-800">What is Data Analytics ?</p>
              <p className="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#data</div>
                <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#analytics</div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default RecentPosts;
