import React, { useState, useEffect ,useContext } from "react";
// import { SongData } from "./Data/SongData";
// import SongItem from "./Item/SongItem";
import TrackItem from "./Item/TrackItem";
import MusicPlayerContext from "../MusicPlayerContext";
import "../styles/FavoriteSong.css";
import songApi from "../apiData/SongApi";
function FavoriteSong() {
  const userid = localStorage.getItem("user");
  console.log(userid);
  const [SongData, setSongs] = useState([]);
  useEffect(() => {
    songApi.getLikedSong(userid).then((res) => {
      setSongs(res.data);
    });
  }, []);
  // console.log(SongData);
  const tracks = SongData;
  const song = useContext(MusicPlayerContext);
  const favTracks = [];
  tracks.map((item, index) => {
    if (item.isFavorite === 1) {
      favTracks.push(item);
    }
  });
  if(SongData != null){
    return (
      <div
        className={"favSong"}
        style={{
          position: `relative`,
        }}>
        {tracks.map((item, index) => (
          <div className="song shadowDiv">
            <TrackItem
              key={index}
              item={item}
              tracks={favTracks}
              song={song}
              index={index}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FavoriteSong;
