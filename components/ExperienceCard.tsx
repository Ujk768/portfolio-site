import React from "react";
import { useTheme } from "next-themes";
import {motion} from "framer-motion"
import Image from "next/image";


type ExperienceCardProps = {
  logo: string;
  title: string;
  duration: string;
  role: string;
  details: string[];
};

export default function ExperienceCard({
  logo,
  title,
  duration,
  role,
  details,
}: ExperienceCardProps) {
  const { theme } = useTheme();
  return (
    <motion.div
    initial={{ scale: 0, opacity: 0 }} // Start state
      whileInView={{ scale: 1, opacity: 1 }} // End state when scrolled into view
      viewport={{ once: true }} // Only animate once
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
      className={`${theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"} p-4 rounded-lg shadow-md w-full`}
    >
      <div className="flex md:flex-row flex-col items-center mb-4 ">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
         <Image src={logo} alt={title} width={100} height={100} className="object-contain"/>
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center space-x-4 mb-2">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-bold">{duration}</p>
          </div>
          <h4 className="font-semibold text-lg mb-2">{role}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="text-md">
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}
