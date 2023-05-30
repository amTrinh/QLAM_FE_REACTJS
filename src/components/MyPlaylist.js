import React, { useState, useEffect } from "react";
import PlaylistItem from "./Item/PlaylistItem";
import "../styles/MyPlaylist.css";
import { Card, Typography, Grid } from "@mui/material";
import { AddCircleRounded } from "@mui/icons-material";
// import { getMyPlaylists } from "./API/getMyPlaylists";
import playlistApi from "../apiData/PlaylistApi";

function MyPlaylist() {
  const userid = localStorage.getItem("user");
  const [CreatedPlaylist, setCreatedPlaylists] = useState([]);

  useEffect(() => {
    (async () => {
      const cpl = await playlistApi.getCreatedPlaylistByUserId(userid);
      setCreatedPlaylists(cpl.data);
      console.log(CreatedPlaylist);
    })();
  }, []);

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
      {CreatedPlaylist.map((item, index) => (
        <Grid item sm={3} xs={4}>
          <PlaylistItem item={item} key={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MyPlaylist;
