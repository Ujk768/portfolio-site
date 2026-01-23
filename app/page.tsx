import HomeClient from "@/components/HomeClient";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div
      className={`bg-background relative transition-colors duration-300 
      `}
    >
      <main className="w-full h-full">
        <HomeClient />
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">My Playlists & Activity</h2>
          <Suspense fallback={<p>Loading Spotify Activity...</p>}>
            <SpotifyNowPlaying />
          </Suspense>
        </section>
        <div>
          <h1>Contact Me</h1>
        </div>
      </main>
    </div>
  );
}
