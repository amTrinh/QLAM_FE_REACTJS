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
// import { getAlbumDetail } from "../../service";
import albumApi from "../../apiData/AlbumApi";

function HomeAlbumItem({ key, item }) {
  // console.log(item);
  const song = useContext(MusicPlayerContext);
  const [rnd, setRnd] = useState(0);

  //
  const [getAlbumById, setAlbums] = useState([]);
  useEffect(() => {
    albumApi.getAlbumById(item.id).then((res) => {
      setAlbums(res.data);
    });
  }, []);

  // console.log(getAlbumById);
  //

  var tracks = new Array();
  var length = 0;
  if (getAlbumById != null) {
    tracks = getAlbumById.songs;
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
  if (getAlbumById != null) {
    return (
      <>
        <div className="playlistItem">
          <img
            src={getAlbumById.albumImage}
            className="imagePlaylist"
            alt={getAlbumById.albumImage}
            title={getAlbumById.albumImage}
          />
          <div className="playPlaylist">
            <FavoriteBorderOutlined
              className="icon"
              fontSize="large"
              style={{ color: "white" }}
            />
            <Link to={`/album/${getAlbumById.albumName}`} state={getAlbumById.id}>
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
        <Link to={`/album/${getAlbumById.albumName}`} state={getAlbumById.id}>
          <h3 className="playlistName">{getAlbumById.albumName}</h3>
        </Link>
        <div className="artists">
          <span>
            {item.artist.map((child, index) => {
              return (
                <span key={index} item={child} className="artist">
                  <Link to={`/artist/${child.artistName}`} state={child}>
                    {child.artistName}
                  </Link>
                </span>
              );
            })}
          </span>
        </div>
      </>
    );
  }
}

export default HomeAlbumItem;
