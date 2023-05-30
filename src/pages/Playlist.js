import React, { useState, useEffect } from "react";
import "../styles/Playlist.css";
import MyPlaylist from "../components/MyPlaylist";
import AllPlaylist from "../components/AllPlaylist";
import { useContext } from "react";
import MusicPlayerContext from "../MusicPlayerContext";
import playlistApi from "../apiData/PlaylistApi";
function Playlist() {
  const userid = localStorage.getItem("user");
  const [all, setAll] = useState(true);
  const [LikedPlaylist, setLikedPlaylists] = useState([]);
  const [CreatedPlaylist, setCreatedPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      const lpl = await playlistApi.getLikedPlaylistByUserId(userid);
      setLikedPlaylists(lpl.data);
      console.log(LikedPlaylist);

      const cpl = await playlistApi.getCreatedPlaylistByUserId(userid);
      setCreatedPlaylists(cpl.data);
      console.log(CreatedPlaylist);
    })();
  }, []);

  const Page = all ? AllPlaylist : MyPlaylist;
  const musicPlayer = useContext(MusicPlayerContext);
  if (CreatedPlaylist != null && CreatedPlaylist != null){
        return (
          <div className="libraryPlaylist">
            <div>
              <div className="horizoneLine"></div>
              <div className="libraryPlaylistBtn">
                <button
                  className={all ? "playlistActiveBtn" : "playlistInactiveBtn"}
                  onClick={() => setAll(true)}>
                  Tất cả
                </button>
                <button
                  className={all ? "playlistInactiveBtn" : "playlistActiveBtn"}
                  onClick={() => setAll(false)}>
                  Của tôi
                </button>
              </div>
            </div>
            <div className="libraryPlaylistContent">
              <Page />
            </div>
            <div
              style={
                musicPlayer.isUsing ? { height: "6em" } : { height: "1em" }
              }></div>
          </div>
        );
  }

}

export default Playlist;
