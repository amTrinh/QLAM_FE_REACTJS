import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DiscoveryRecentlyPlaylist.css";
// import { MyPlaylistData } from "./Data/MyPlaylistData";
import playlistApi from "../apiData/PlaylisttApi";
function RecentlyPlaylist() {
  const [MyPlaylistData, setPlaylists] = useState([]);
  useEffect(() => {
    playlistApi.getAllplaylists().then((res) => {
      setPlaylists(res.data);
    });
  }, []);
  return (
    <div className="recentlyListen" style={{ width: `100%` }}>
      {MyPlaylistData.map(
        (item, index) =>
          index < 4 && (
            <Link to={`/playlistDetail/${item.playlistName}`} state={item}>
              <div key={index} className="playlistItem">
                <img
                  src={item.playlistImg}
                  className="imagePlaylist"
                  alt={item.playlistName}
                />
                <p>{item.playlistName}</p>
              </div>
            </Link>
          )
      )}
    </div>
  );
}

export default RecentlyPlaylist;
