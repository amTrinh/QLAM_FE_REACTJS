import axios from "axios";
import { API_URL } from "../app/constant";

class PlaylistApi {
  getAllPlaylists = () => {
    const url = `${API_URL}/playlists`;
    // console.log(url);
    return axios.get(url);
  };
  getAllPlaylistsTop = () => {
    const url = `${API_URL}/playlists/top`;
    // console.log(url);
    return axios.get(url);
  };
  getPlaylistById = (id) => {
    const url = `${API_URL}/playlists/${id}`;
    // console.log(url);
    return axios.get(url);
  };
  updatePlaylist = (playlist) => {
    const url = `${API_URL}/playlists/${playlist.id}`;
    return axios.put(url, playlist);
  };
  addPlaylist = (playlist) => {
    const url = `${API_URL}/playlists`;
    // console.log(playlist);
    return axios.post(url, playlist);
  };
  addSongToPlaylist = (playlistid, songid) => {
    const url = `${API_URL}/playlists/${playlistid}/songs/${songid}`;
    return axios.put(url);
  };

  getLikedPlaylistByUserId = (id) => {
    const url = `${API_URL}/playlists/user/${id}/liked`;
    return axios.get(url);
  };
  getCreatedPlaylistByUserId = (id) => {
    const url = `${API_URL}/playlists/user/${id}/created`;
    return axios.get(url);
  };
  updatedPlaylistName = (id, playlistName) => {
    const url = `${API_URL}/playlists/${id}/edit`;
    return axios.put(url, playlistName);
  }
  deleteById = (plid, uid) => {
    const url = `${API_URL}/playlists/${plid}/user/${uid}`;
    const url_ = `${API_URL}/playlists/${plid}/user/${uid}/unlike`;
    axios.put(url_);
    return axios.put(url);
  }
}

const playlistApi = new PlaylistApi();
export default playlistApi;
