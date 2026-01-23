export const InfiniteCarousel = () => {
  const items = [
    "React",
    "AEM - Adobe Experience Manager",
    "Next.js",
    "Solid.js",
    "Tailwind",
    "Node.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PostgreSQL",
    "Firebase",
    "Redis",
    "MongoDB",
    "SCSS",
    "SQL",
    "Go Lang",
    "Docker",
    "AWS Lambda",
    "Python",
    "Java",
    "C++",
    "Git",
    "Redux",
    "REST APIs",
    "Akamai",
  ];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex w-max flex-nowrap">
        <ul className="flex items-center gap-16 px-8 animate-infinite-scroll">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-2xl font-bold text-slate-500 whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
