import axios from "axios";
import { API_URL } from "../app/constant";

class AlbumApi {
  getAllAlbums = () => {
    const url = `${API_URL}/albums`;
    return axios.get(url);
  };

  getAllAlbumsRecently = () => {
    const url = `${API_URL}/albums/recently`;
    return axios.get(url);
  };

  getAllAlbumsTop = () => {
    const url = `${API_URL}/albums/top`;
    return axios.get(url);
  };
  getAlbumById = (id) => {
    const url = `${API_URL}/albums/${id}`;
    return axios.get(url);
  };
  updateAlbum = (album) => {
    const url = `${API_URL}/albums/${album.id}`;
    return axios.put(url, album);
  };
  addAlbum = (album) => {
    const url = `${API_URL}/albums`;
    // console.log(album);
    return axios.post(url, album);
  };
}

const albumApi = new AlbumApi();
export default albumApi;
