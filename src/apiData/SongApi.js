import axios from "axios";
import { API_URL } from "../app/constant";

class SongApi {
  getAllSongs = () => {
    const url = `${API_URL}/songs`;
    return axios.get(url);
  };

  getAllSongsRelease = () => {
    const url = `${API_URL}/songs/recently`;
    return axios.get(url);
  };

  getAllSongOnTop = () => {
    const url = `${API_URL}/songs/ontop`;
    return axios.get(url);
  };

  getSongById = (id) => {
    const url = `${API_URL}/songs/${id}`;
    return axios.get(url);
  };
  getLikedSong = (id) => {
    const url = `${API_URL}/users/${id}/likedSongs`;
    return axios.get(url);
  };
  getHearedSong = (id) => {
    const url = `${API_URL}/hearedsongs/${id}`;
    return axios.get(url);
  };
  updateSong = (song) => {
    const url = `${API_URL}/songs/${song.id}`;
    return axios.put(url, song);
  };
  addsong = (song) => {
    const url = `${API_URL}/songs`;
    // console.log(song);
    return axios.post(url, song);
  };
}

const songApi = new SongApi();
export default songApi;
