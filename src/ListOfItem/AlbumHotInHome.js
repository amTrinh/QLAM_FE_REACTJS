import React, { useState, useEffect } from "react";
import "../styles/PlaylistAlbum.css";
import HomeAlbumItem from "../components/Item/HomeAlbumItem";
import albumApi from "../apiData/AlbumApi";

function AlbumHotInHome() {
  const [getAlbumsTop, setAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const pl = await albumApi.getAllAlbumsTop();
      setAlbums(pl.data);
    })();
  }, []);
  // console.log(getAlbumsTop);
  if(getAlbumsTop != null)
    return (
      <>
        {getAlbumsTop.map((item, key) => (
          <div className="listPlaylists">
            <HomeAlbumItem key={key} item={item} />
          </div>
        ))}
      </>
    );
}
export default AlbumHotInHome;
