import React from "react";
import Link from "next/link";

const AboutPageBanner = () => {
  return (
    <>
      {" "}
      <div className="px-32 py-14">
        <div className="h-auto  mt-24">
          <p className="">
            <span className="text-gray-700 font-light text-3xl underline">
              Our Mission :
            </span>{" "}
            <br />
            <br />
            At algabay, we revolutionize equity research with Language Models,
            offering unparalleled access to non-financial data. Democratizing
            financial insights, we empower everyone with comprehensive market
            knowledge, fostering informed decisions and a more inclusive
            financial landscape.
            <br />
            <br />@ Follow algabay&ensp;
            <a href="https://twitter.com/biswarupz" className="underline ">
              Twitter
            </a>
            <br />@ Follow algabay&ensp;
            <a href="https://twitter.com/biswarupz" className="underline ">
              Linkedin
            </a>
            <br />@ Follow algabay&ensp;
            <a href="https://twitter.com/biswarupz" className="underline ">
              Instagram
            </a>
          </p>
        </div>
        <div className="h-auto  mt-10">
          <p className="">
            <span className="text-gray-700 font-light text-3xl underline">
              Meet the Team :
            </span>
            <br />
            <br />
            We believe that innovation and expertise are at the heart of
            delivering superior investment solutions. Our team is composed of
            passionate individuals with diverse backgrounds.
          </p>
        </div>
        <div className="">
          <div className="h-auto border border-gray-500 mt-8 justify-center p-6 rounded-md">
            <p className="text">
              <span className="">Biswarup Sen</span>
              <br />
              <span className="underline">Founder & CEO →</span>
              <br />
              <br />
              As the founder and CEO, Biswarup Sen brings his lifelong passion
              for AI and machine learning to the world of finance. With over
              years of experience in Fullstack development and AI, His journey
              is a testament to his dedication to learning new technologies. His
              background is deeply rooted in technology, and he has a vision for
              creating value in society by combining technology with finance.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Linkedin
              </a>
            </p>
          </div>

          <div className="h-auto border border-gray-500 mt-8 justify-center p-6 rounded-md">
            <p className="">
              <span className="">Sai Sharan</span>
              <br />
              <span className="underline">Co-founder & CFO →</span>
              <br />
              <br />
              Sai Sharan, our co-founder and CFO, is the financial backbone of
              Algabay. With over 5 years of hands-on experience as a financial
              trader, Sai brings a unique perspective to our team. He has
              successfully navigated the intricacies of stock trading, forex
              trading, and cryptocurrency markets, making him a valuable asset
              in understanding market dynamics and trends.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Linkedin
              </a>
            </p>
          </div>
          <div className="h-auto border border-gray-500 mt-8 justify-center p-6 rounded-md">
            <p className="">
              <span className="">Adarsh Arunkumar</span>
              <br />
              <span className="underline">Co-founder & CTO →</span>
              <br />
              <br />
              As the CTO and Co-Founder of Algabay AI, Adarsh brings his deep
              expertise in machine learning and AI to the company, with over 4
              years of experience in ML, ethical hacking, MERN stack, applied
              AI, and research. He is an active open source contributor and has
              worked in several startups before joining Algabay.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageBanner;
