import React, { useContext, useState , useEffect} from "react";
import MusicPlayerContext from "../MusicPlayerContext";
import Track from "../components/Item/TrackItem";
import "../styles/PageNewSongs.css";
// import {SongData} from '../components/Data/SongData';
import songApi from "../apiData/SongApi";

function NewSongs() {
  const [toggleState, setToggleState] = useState(1);
  const tracksByCountry = [];
  const [SongData, setSongs] = useState([]);
  useEffect(() => {
    songApi.getAllSongsRelease().then((res) => {
      setSongs(res.data);
    });
  }, []);
  SongData.map((item, index) => {
    if (toggleState === 1) {
      tracksByCountry.push(item);
    } 
    else if (toggleState === 2) {
        if (item.country.id === 1) {
          tracksByCountry.push(item);
        }
    } 
    else if (toggleState === 3) {
      if (item.country.id === 2) {
        tracksByCountry.push(item);
      }
    }
    else {
      if (item.country.id === 3) {
        tracksByCountry.push(item);
      }
    }
  });
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const tracks = tracksByCountry;
  const song = useContext(MusicPlayerContext);
  return (
    <div className="newSongReleaseContainer">
      <div className="newSongsBtn">
        <button className={toggleState === 1 ? 'active' : "inactive"}
          onClick={() => toggleTab(1)}>Tất cả</button>
        <button className={toggleState === 2 ? 'active' : "inactive"}
          onClick={() => toggleTab(2)}>Việt Nam</button>
        <button className={toggleState === 3 ? 'active' : "inactive"}
          onClick={() => toggleTab(3)}>US-UK</button>
        <button className={toggleState === 4 ? 'active' : "inactive"}
          onClick={() => toggleTab(4)}>Khác</button>
      </div>
      <div className="newSongsBodyHeading">
        <div>Bài hát</div>
        <div className="releaseDate">Phát hành</div>
        <div>Thời lượng</div>
      </div>
      <div className="newSongsBody">
        {tracksByCountry.map((item, key) => 
          <div className='song shadowDiv'>
            <Track key={key}
                  item={item}
                  tracks={tracks}
                  song={song}
                  index={key} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewSongs;
