import React, { useState } from "react";
import LibraryHeaderTitle from "../../Elements/Library/LibraryHeaderTitle";
import LibraryHeaderCloseIcon from "../../Elements/Library/LibraryHeaderCloseIcon";
import LibrarySearchSong from "./LibrarySearchSong";

function MenuHeader({ uiState, setUiState, searchSongs, clearSearch }) {
    return (
        <nav className="nav__header">
            <LibraryHeaderTitle />
            <LibrarySearchSong searchSongs={searchSongs} clearSearch={clearSearch} isDesktop={true}/>
            <LibraryHeaderCloseIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    );
}

export default MenuHeader;
