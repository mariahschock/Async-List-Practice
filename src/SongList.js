import React from 'react';
import Songs from './Songs';

export default function SongList({ songs = [] }) {
  return (
    <div className="song-list">
      {
        songs.map((song, i) => {
          return <Songs
            {...song} key={song.title + i + song.id} />;
        })
      }
    </div>
  );
}

