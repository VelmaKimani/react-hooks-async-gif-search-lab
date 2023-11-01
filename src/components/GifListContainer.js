import React, { useEffect, useState } from "react";

import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dolphins");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=dolphins&api_key=c7nWVdxSIi17NdT3zSLWA9ilURkRhF3Q&limit=5`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}

export default GifListContainer;