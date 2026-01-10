import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] shadow-lg relative border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <main className="flex flex-col p-5 w-full h-full">
        <div>
          <h1>About Me</h1>
        </div>
        <div>
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
