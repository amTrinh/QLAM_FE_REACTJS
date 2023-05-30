import React, { useContext, useState, useEffect } from "react";
import PlaylistItem from "../components/Item/PlaylistItem";
import MusicPlayerContext from "../MusicPlayerContext";
import { Grid } from "@mui/material";
// import { getRecentlyPlaylist } from "../components/API/getRecentlyPlaylist";
import playlistApi from "../apiData/PlaylistApi";

function RecentlyPlaylist() {
      const [getRecentlyPlaylist, setPlaylists] = useState([]);
      useEffect(() => {
        playlistApi.getAllPlaylists().then((res) => {
          setPlaylists(res.data);
        });
      }, []);
  const song = useContext(MusicPlayerContext);
  return (
    <div>
      <Grid
        container
        className="myPlaylist recently"
        rowSpacing={1}
        columnSpacing={{ sm: 2, xs: 1 }}
      >
        {getRecentlyPlaylist.map((item, index) => (
          <Grid item sm={3} xs={4}>
            <PlaylistItem item={item} key={index} />
          </Grid>
        ))}
      </Grid>
      <div style={song.isUsing ? { height: "8em" } : { height: "1em" }}></div>
    </div>
  );
}

export default RecentlyPlaylist;
