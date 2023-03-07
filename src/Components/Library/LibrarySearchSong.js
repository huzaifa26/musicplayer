import React, { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";
import '../../Styles/app.scss'

export default function LibrarySearchSong({ searchSongs, clearSearch, isDesktop }) {
  const [searchSong, setSearchSong] = useState("");

  return (
      <div className="nav__header" style={!isDesktop ? { padding: "2px", width: "60vw", height: "40px", borderRadius: "8px", border: "2px solid #fff", background: "rgba(0,0,0,0)", display: "flex", position: "relative" } : { padding: "2px", width: "60vw", height: "35px", borderRadius: "8px", border: "2px solid #fff", background: "rgba(0,0,0,0)", display: "flex", position: "relative", maxWidth: "300px", margin: "auto", marginBottom: "4px" }}>
        <input value={searchSong} onChange={(e) => { setSearchSong(e.target.value); searchSongs(e.target.value) }} style={{ background: "rgba(0,0,0,0)", color: "white", padding: "5px", border: "0", fontSize: "18px", flex: "1" }} placeholder="Search Song"></input>
        {searchSong.length > 0 &&
          <RiCloseFill
            className="library__menu__icon"
            style={{ position: "absolute", right: "0%", cursor: "pointer" }}
            onClick={() => { setSearchSong(""); clearSearch() }}
          />
        }
      </div>
  )
}
