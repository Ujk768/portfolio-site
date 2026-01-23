// app/components/SpotifyPlaylists.tsx
import { getPlaylists } from "@/lib/spotify";

export default async function SpotifyPlaylists() {
  const data = await getPlaylists();
  console.log(data);
  return (
    <div>
      <h2>My Spotify Playlists</h2>
      <div className="grid">
        {/* {data.items.map((p: any) => (
          <a key={p.id} href={p.external_urls.spotify} target="_blank">
            <img src={p.images[0]?.url} />
            <p>
            {p.name}</p>
          </a>
        ))} */}
      </div>
    </div>
  );
}
