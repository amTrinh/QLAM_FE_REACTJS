import React, { useContext, useState, useEffect } from "react";
import { SongData } from "./components/Data/SongData";
// import { RecentlyPlaylistData } from "./components/Data/RecentlyPlaylistData";
import { PlaylistData } from "./components/Data/PlaylistData";
import { AlbumData } from "./components/Data/AlbumData";

import playlistApi from "./apiData/PlaylistApi";

export const getSongDetail = (songId) => {
  return SongData.find((song) => song.id === songId);
};

// function findPlaylistById(){
//   const [getRecentlyPlaylist, setPlaylists] = useState([]);
//   useEffect(() => {
//     playlistApi.getAllPlaylists().then((res) => {
//       setPlaylists(res.data);
//     });
//   }, []);
// }
export const getPlaylistDetail = (playlistId) => {
  return PlaylistData.find((playlist) => playlist.id === playlistId);
};

export const getAlbumDetail = (albumId) => {
  return AlbumData.find((album) => album.id === albumId);
};
