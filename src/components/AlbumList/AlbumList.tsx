import React from 'react'
import { GetAlbumsResponse } from '../../http/albums/interfaces';
import AlbumItem from './AlbumItem';

interface AlbumListProps {
  albums: GetAlbumsResponse
}

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div>
      <div className="p-6">
        <h1 className="mb-2 text-5xl font-medium leading-tight text-gray-700">
          Albums List
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 min-w-full shadow overflow-hidden shadow-dashboard rounded-md p-4">
        {albums.albums.map(album => (
          <AlbumItem
            key={album.id}
            image={album.images[0].url}
            name={album.name}
            totalTracks={album.total_tracks}
            popularity={album.popularity}
            releaseDate={album.release_date}
          />
        ))}
      </div>
    </div>

  )
}

export default AlbumList;