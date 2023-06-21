import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" container p-4 mx-auto flex flex-col justify-center w-full px-16 py-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am a web developer with expertise in JavaScript and
          Ruby, dedicated to delivering exceptional web development solutions.
          With a strong passion for creating dynamic and visually appealing
          websites, I am driven by the opportunity to contribute to impactful
          projects.
        </p>

        <br />

        <p className="text-xl">
          Having completed a Certificate in Software Engineering, I have gained
          valuable skills in UI/UX design, JavaScript programming, data
          structures, object-oriented design, database management systems, and
          software testing. My educational background also includes experience
          in architectural studies. This diverse knowledge base allows me to
          approach web development with a unique perspective, combining both
          technical expertise and a creative flair.
        </p>
      </div>
    </div>
  );
}

export default About;
