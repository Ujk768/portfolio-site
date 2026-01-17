"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`bg-background relative transition-colors duration-300 
      `}
    >
      <main className="w-full h-full">
        <div
          className={`w-full h-svh justify-center p-5 items-center align-center ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="flex md:flex-row flex-col justify-center items-center gap-10">
            <div className="w-1/4 flex justify-center items-center">
              <div className="animate-[bounce_1s_ease-in-out_2]">
                {theme === "dark" ? (
                  <Image
                    className="rounded-full aspect-square object-cover"
                    src="/kakashi-dark.jpg"
                    alt="Kakashi"
                    width={400}
                    height={400}
                  />
                ) : (
                  <Image
                    className="rounded-full aspect-square object-cover"
                    src="/kakashi-light.webp"
                    alt="Kakashi"
                    width={400}
                    height={400}
                  />
                )}
              </div>
            </div>
            <div className="w-3/4 justify-center items-center align-center">
              <h1 className="font-bold text-center text-4xl p-10">
                Hi, I'm Utkarsh Kanade
              </h1>
              <h6 className="font-medium text-center text-2xl ">
                I’m a Full-Stack Developer with a strong focus on React and
                Next.js, passionate about building performant, scalable, and
                user-centric web applications. I enjoy working across the stack,
                learning system design, and turning ideas into reliable
                products.
              </h6>
            </div>
          </div>
        </div>
        <div>
          <h1>Experience</h1>
          <h1>Experience</h1>
          <h1>Experience</h1>
          <h1>Experience</h1>
          <h1>Experience</h1>
          <h1>Experience</h1>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Projects</h1>
        </div>
        <div>
          <h1>My Playlists</h1>
        </div>
        <div>
          <h1>Contact Me</h1>
        </div>
      </main>
    </div>
  );
}
