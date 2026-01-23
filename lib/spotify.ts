// lib/spotify.ts
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 30 }, // ISR caching
    },
  );

  if (res.status === 204) return null;
  return res.json();
};

export const getPlaylists = async () => {
  const { access_token } = await getAccessToken();
  console.log(access_token);
  const res = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json();
};
