import React, { useState, useEffect } from "react";
import { Card, Typography, Grid } from "@mui/material";
import PlaylistItem from "./Item/PlaylistItem";
import { AddCircleRounded } from "@mui/icons-material";
import "../styles/MyPlaylist.css";
import { PlaylistData } from "./Data/PlaylistData";
// import { MyPlaylistData } from "./Data/MyPlaylistData";
// import { getAllPlaylists } from "./API/getAllPlaylists";
// import { getMyPlaylists } from "./API/getMyPlaylists";
import playlistApi from "../apiData/PlaylistApi";

function AllPlaylist() {
  const userid = localStorage.getItem("user");
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

  const AllPlaylist = [...LikedPlaylist, ...CreatedPlaylist];

  return (
    <Grid
      container
      className="myPlaylist"
      rowSpacing={1}
      columnSpacing={{ sm: 2, xs: 1 }}>
      <Grid item sm={3} xs={4}>
        <Card
          className="createNew"
          sx={{
            width: "19vw",
            height: "21vw",
            backgroundColor: "#FEE9EF",
            borderRadius: "15px",
            marginRight: 0,
          }}>
          <AddCircleRounded
            sx={{
              fontSize: "5vw",
              color: "#FF9EB6",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          />
          <Typography variant="h6" sx={{ fontSize: "1.4vw" }}>
            Tạo playlist mới
          </Typography>
        </Card>
      </Grid>
      {AllPlaylist.map((item, index) => (
        <Grid item sm={3} xs={4}>
          <PlaylistItem item={item} key={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AllPlaylist;
