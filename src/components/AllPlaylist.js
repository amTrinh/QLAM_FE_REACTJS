import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PlaylistItem from "./Item/PlaylistItem";
import { PlaylistData } from "./Data/PlaylistData";
import { AddCircleRounded } from "@mui/icons-material";
import "../styles/MyPlaylist.css";
import MusicPlayerContext from "../MusicPlayerContext";

function AllPlaylist() {
  const song = useContext(MusicPlayerContext);
  return (
    <div className={song.isUsing ? "myPlaylist active" : "myPlaylist inactive"}>
      <Card
        className="createNew"
        sx={{
          width: "250px",
          height: "300px",
          backgroundColor: "#FEE9EF",
        }}
      >
        <AddCircleRounded
          sx={{ fontSize: "5em", color: "#FF9EB6", cursor: "pointer" }}
        />
        <CardContent>
          <Typography variant="h6">Tạo playlist mới</Typography>
        </CardContent>
      </Card>
      {PlaylistData.map((item, index) => (
        <PlaylistItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AllPlaylist;
