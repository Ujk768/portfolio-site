import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";

type ProjectsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export default function ProjectsCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectsCardProps) {
  const { theme } = useTheme();
  return (
    <a
      href={projectUrl}
      target="_blank"
      className={`dark:bg-gray-800 dark:border-gray-700 bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md w-full `}
    >
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
