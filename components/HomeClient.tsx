"use client";
import React, { Suspense } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { InfiniteCarousel } from "./InfiniteCarousel";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";

export default function HomeClient() {
  const { theme } = useTheme();
  return (
    <div>
      <section
        className={`w-full h-full justify-center p-5 items-center align-center`}
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:mt-20 mt-10 md: mb-20 mb-10">
          <div className="md:w-1/4 flex justify-center items-center">
            <div className="animate-[bounce_1s_ease-in-out_2]">
                <Image
                  className={`rounded-full aspect-square object-cover ${theme === "dark" ? "block" : "hidden"}`}
                  src="/kakashi-dark.jpg"
                  alt="Kakashi"
                  width={300}
                  height={300}
                />
                <Image
                  className={`rounded-full aspect-square object-cover ${theme === "dark" ? "hidden" : "block"}`}
                  src="/kakashi-light.webp"
                  alt="Kakashi"
                  width={300}
                  height={300}
                />
            </div>
          </div>
          <div className="w-3/4 flex flex-col justify-center items-center align-center gap-4">
            <h1 className="font-bold md:text-center text-left text-4xl mb-10">
              Hi, I'm Utkarsh Kanade
            </h1>
            <h6 className="font-medium md:text-center text-left text-2xl ">
              I’m a Full-Stack Developer with a strong focus on React and
              Next.js, passionate about building performant, scalable, and
              user-centric web applications. I enjoy working across the stack,
              learning system design, and turning ideas into reliable products.
            </h6>
            {/* <h6 className="font-medium md:text-center text-left text-2xl ">
                I also work with backend technologies like Node.js, Express, and
                databases like MongoDB and PostgreSQL to create robust APIs and
                data-driven applications. I'm also learning and exploring AI /
                ML projects using Python, PyTorch , Cuda and other related
                technologies.
              </h6> */}
            <h6 className="font-medium md:text-center text-left text-2xl mt-5 ">
              I'm currently a graduate student at the University of Windsor
              studying Masters in Applied Computing. I'm always open to new
              opportunities and collaborations, so feel free to reach out!
            </h6>
            <h6 className="font-medium md:text-center text-left text-2xl mt-5 ">
              I also love playing football, listening to music, watching anime,
              and exploring new technologies in my free time.
            </h6>
            <div className="mt-10 flex md:flex-row flex-col items-center justify-center md:space-x-10 lg:space-x-20 cursor-pointer space-y-5 md:space-y-0">
              <div>Instagram Button</div>
              <div>Linked in Button</div>
              <div>GitHub Button</div>
              <div>Resume Button</div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`pt-5 pb-5  flex flex-col justify-center items-center`}
      >
        <h5 className="font-bold text-xl  md:text-center text-left">
          Technologies I've worked With{" "}
        </h5>
        <InfiniteCarousel />
      </section>
      <section>
        <h1 className="text-center font-bold text-xl">Experience</h1>
        <div className="flex flex-col w-full p-5 gap-10">
          <ExperienceCard
            logo="/logo1.png"
            title="Bajaj Finserv Limited, Pune, India"
            duration="Jul 2023 - Sept 2025"
            role="Software Engineer"
            details={[
              "Led the end-to-end development of innovative financial calculators, driving a 15% increase in customer engagement.",
              "Revamped existing Fixed Deposit and Personal Loan journeys, resulting in a 20% improvement in traffic and engagement.",
              "Integrated partner scripts into the website to display advertisements while maintaining high performance, contributingto increased site revenue.",
              "Assisted in migrating critical React components to SolidJS, improving application performance by 10%.",
              "Designed and implemented UI components in React and SolidJS, ensuring seamless integration with AEM and optimizing page performance, reducing load times by 30%.",
              "Collaborated with cross-functional teams to define software requirements and deliver solutions using Agile methodologies, ensuring on-time delivery.",
              "Conducted thorough code reviews for peers and junior developers to ensure code quality, adherence to best practices, and effective debugging of software issues.",
            ]}
          />
          <ExperienceCard
            logo="/logo1.png"
            title="Bajaj Finserv Limited, Pune, India"
            duration="Jul 2023 - Sept 2025"
            role="Software Engineer Intern"
            details={[
              "Led the end-to-end development of innovative financial calculators, driving a 15% increase in customer engagement.",
              "Revamped existing Fixed Deposit and Personal Loan journeys, resulting in a 20% improvement in traffic and engagement.",
              "Integrated partner scripts into the website to display advertisements while maintaining high performance, contributingto increased site revenue.",
              "Assisted in migrating critical React components to SolidJS, improving application performance by 10%.",
              "Designed and implemented UI components in React and SolidJS, ensuring seamless integration with AEM and optimizing page performance, reducing load times by 30%.",
              "Collaborated with cross-functional teams to define software requirements and deliver solutions using Agile methodologies, ensuring on-time delivery.",
              "Conducted thorough code reviews for peers and junior developers to ensure code quality, adherence to best practices, and effective debugging of software issues.",
            ]}
          />
        </div>
      </section>
      <section
        className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} pt-5 pb-5  flex flex-col justify-center items-center`}
      >
        <h1 className="font-bold text-xl  md:text-center text-left">
          Projects & Hackathons
        </h1>
        <div className="mb-4 mt-4 p-5 gap-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
          <ProjectsCard
            title="JLR Hackathon"
            description="Developed an AI-powered voice assistant for Jaguar Land Rover vehicles that provides real-time information and enhances driver safety."
            imageUrl="/jlr-hackathon.png"
            projectUrl="https://www.linkedin.com/posts/utkarsh-kanade_jlr-hackathon-activity-7069276546936931328-4Y2D"
          />
        </div>
      </section>
    </div>
  );
}
