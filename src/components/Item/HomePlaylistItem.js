import React, { useState, useEffect } from "react";
import {
  FavoriteBorderOutlined,
  MoreHoriz,
  PlayCircleFilled,
} from "@mui/icons-material";
import { useContext } from "react";
import MusicPlayerContext from "../../MusicPlayerContext";
import { Link } from "react-router-dom";
import "../../styles/PlaylistAlbum.css";
// import { getitem } from "../../service";

function PlaylistAtHome({ item, index}) {
  console.log(index);
  const song = useContext(MusicPlayerContext);
  const [rnd, setRnd] = useState(0);
  var tracks = new Array();
  var length = 0;
  if(item != null){
    tracks = item.songPlaylist;
    length = tracks.length;
  }
    const play = () => {
      setRnd(Math.floor(Math.random() * length));
      song.setUsing(true);
      song.setTracks(tracks);
      song.setSongIndex(rnd);
      song.setSong(tracks[rnd]);
      song.setPlay(true);
      localStorage.setItem("song", JSON.stringify(tracks[rnd]));
      localStorage.setItem("tracks", JSON.stringify(tracks));
      localStorage.setItem("index", JSON.stringify(rnd));
      localStorage.setItem("play", JSON.stringify(true));
      localStorage.setItem("playlist", JSON.stringify(tracks));
      song.setPlaylist(tracks);
    }; 
    if (item != null) {
      return (
        <>
          <div className="playlistItem">
            {item && <></>}
            <img
              src={`${item.playlistImage}`}
              className="imagePlaylist"
              alt={item.playlistName}
              title={item.playlistName}
            />
            <div className="playPlaylist">
              <FavoriteBorderOutlined
                className="icon"
                fontSize="large"
                style={{ color: "white" }}
              />
              <Link to={`/playlistDetail/${item.playlistName}`} state={item.id}>
                <PlayCircleFilled
                  className="icon"
                  fontSize="large"
                  onClick={play}
                  style={{ color: "white" }}
                />
              </Link>
              <MoreHoriz
                className="icon"
                fontSize="large"
                style={{ color: "white" }}
              />
            </div>
          </div>
          <Link to={`/playlistDetail/${item.playlistName}`} state={item.id}>
            <h3 className="playlistName">{item.playlistName}</h3>
          </Link>
        </>
      );
    }
  
}

export default PlaylistAtHome;
