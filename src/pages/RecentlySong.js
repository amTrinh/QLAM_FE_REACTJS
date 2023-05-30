import React, { useContext, useState, useEffect } from "react";
import { SongData } from "../components/Data/SongData";
import TrackItem from "../components/Item/TrackItem";
import MusicPlayerContext from "../MusicPlayerContext";
// import "../styles/MyRecently.css";
import "../styles/RecentlySong.css";
import songApi from "../apiData/SongApi";

function RecentlySong() {
      const userid = localStorage.getItem("user");
      const [SongData, setSongs] = useState([]);
      useEffect(() => {
        songApi.getHearedSong(userid).then((res) => {
          setSongs(res.data);
        });
      }, []);
  const tracks = SongData;
  const song = useContext(MusicPlayerContext);
  if(SongData.length != 0){
    return (
      <div className="recentlySongContainer">
        {SongData.map((item, index) => (
          <div className="song shadowDiv">
            <TrackItem
              key={item.id}
              item={item}
              tracks={tracks}
              song={song}
              index={index}
            />
          </div>
        ))}
        <div style={song.isUsing ? { height: "9em" } : { height: "1em" }}></div>
      </div>
    );
  }
return <h1>Không có bài hát nào</h1>;
}

export default RecentlySong;
