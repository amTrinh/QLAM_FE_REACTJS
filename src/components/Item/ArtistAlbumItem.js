import React from "react";
import "../../styles/ArtistAlbumItem.css";
import {
  MoreHoriz,
  PlayCircleFilled,
  FavoriteBorderRounded,
} from "@mui/icons-material";

function ArtistAlbumItem({ item }) {
  console.log(item);
  function getReleaseYear(dateParam) {
    const date = new Date(dateParam);
    return date.getFullYear();
  }
  return (
    <div className="artistAblumDetail">
      <div className="artistAlbum">
        <div className="albumImage">
          <img src={item.albumImage} alt={item.albumName} />
        </div>
        <div className="albumMoreDetail">
          <button className="btn">
            <FavoriteBorderRounded sx={{ fontSize: "2.4vw" }} />
          </button>
          <button>
            <PlayCircleFilled sx={{ fontSize: "2.4vw" }} />
          </button>
          <button>
            <MoreHoriz sx={{ fontSize: "2.4vw" }} />
          </button>
        </div>
      </div>
      <div className="albumTitle">
        <h3 style={{ fontSize: "1.2vw" }}>{item.albumName}</h3>
        <h4 style={{ fontWeight: "normal", fontSize: "1vw" }}>
          {getReleaseYear(item.releaseDate)}
        </h4>
      </div>
    </div>
  );
}

export default ArtistAlbumItem;
