import React from "react";
import LibraryHeader from "../Components/Library/LibraryHeader";
import LibraryListItem from "../Components/Library/LibraryListItem";
import LibrarySearchSong from "../Components/Library/LibrarySearchSong";

function Library({
    uiState,
    setUiState,
    setSongState,
    songState,
    songData,
    audioRef,
    searchSongs,
    clearSearch
}) {
    return (
        <div
            className={`library ${uiState.libraryShown ? "" : "library--hidden"
                }`}
        >
            <LibraryHeader uiState={uiState} setUiState={setUiState} searchSongs={searchSongs} clearSearch={clearSearch} />
            <nav className="nav__header2">
                <LibrarySearchSong searchSongs={searchSongs} clearSearch={clearSearch} isDesktop={true} />
            </nav>
            <div className="library__wrapper">
                {songData.map((song) => (
                    <LibraryListItem
                        song={song}
                        songState={songState}
                        setSongState={setSongState}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
