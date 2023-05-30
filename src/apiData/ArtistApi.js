import axios from "axios";
import { API_URL } from "../app/constant";

class ArtistApi {
  getAllartists = () => {
    const url = `${API_URL}/artists`;
    return axios.get(url);
  };
  
  getArtistById = (id) => {
    const url = `${API_URL}/artists/${id}`;
    return axios.get(url);
  };
  updateArtist = (artist) => {
    const url = `${API_URL}/artists/${artist.id}`;
    return axios.put(url, artist);
  };
  addArtist = (artist) => {
    const url = `${API_URL}/artists`;
    // console.log(artist);
    return axios.post(url, artist);
  };
}

const artistApi = new ArtistApi();
export default artistApi;
