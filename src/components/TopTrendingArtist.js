import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TopTrendingArtist.css";
import artistApi from "../apiData/ArtistApi";

function TopTrendingArtist() {
  const [ArtistsData, setArtists] = useState([]);
  useEffect(() => {
    artistApi.getAllartists().then((res) => {
      setArtists(res.data);
    });
  }, []);

  // console.log(ArtistsData);
  return (
    <div className="topTrendingArtists" style={{ width: `100%` }}>
      {ArtistsData.map(
        (item, index) =>
          index < 5 && (
            <Link to={`/artist/${item.artistName}`} state={item}>
              <div key={index} className="artist">
                <img
                  src={item.artistImage}
                  title={item.artistName}
                  alt={item.artistName}
                />
              </div>
            </Link>
          )
      )}
    </div>
  );
}

export default TopTrendingArtist;
