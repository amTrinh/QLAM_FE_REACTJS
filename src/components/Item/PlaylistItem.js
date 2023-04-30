import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import "../../styles/PlaylistItem.css";
import { Link } from "react-router-dom";

function PlaylistItem({ item }, props) {
  function getPlaylistImgUrl(url) {
    return require("../../assets/" + url);
  }
  return (
    <Link to={`/playlistDetail/${item.playlistName}`} state={item}>
      <Card className={"cardPlaylist"}>
        <div className="cardContent">
          <CardMedia
            className="playlistMedia"
            component="img"
            height="100%"
            style={{
              width: `250px`,
              height: `250px`,
              border: `0.2px solid transparent`,
              borderRadius: `3px`,
            }}
            image={getPlaylistImgUrl(`${item.playlistImg}`)}
            alt={item.playlistName}
          />
          <div className="playlistMoreDetail">
            <button className="btn">
              <ClearIcon fontSize="large" />
            </button>
            <button>
              <PlayCircleFilled fontSize="large" />
            </button>
            <button>
              <MoreHoriz fontSize="large" />
            </button>
          </div>
        </div>
        <Typography
          component="header"
          sx={{ fontSize: `large`, marginTop: `10px` }}
        >
          {item.playlistName}
        </Typography>
      </Card>
    </Link>
  );
}

export default PlaylistItem;
