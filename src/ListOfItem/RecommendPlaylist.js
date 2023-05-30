import React, { useState, useEffect } from "react";
import "../styles/PlaylistAlbum.css";
import HomePlaylistItem from "../components/Item/HomePlaylistItem";

import playlistApi from "../apiData/PlaylistApi";

function RecommendationPlaylist() {
  const [getPlaylistsTop, setPlaylists] = useState([]);
  useEffect(() => {
    (async () => {
      const pl = await playlistApi.getAllPlaylistsTop();
      setPlaylists(pl.data);
    })();
  }, []);
  // console.log(getPlaylistsTop);
  return (
    <>
      {getPlaylistsTop.map((item, index) => (
        <div className="listPlaylists">
          <HomePlaylistItem item={item} index={index} />
        </div>
      ))}
    </>
  );
}
export default RecommendationPlaylist;
