import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAlbumsByArtistName } from '../http/albums';
import ThreeDotsLoader from './Loader/ThreeDotsLoader';
import Title from './Title';

import FormInput from './FormInput';
import AlbumList from './AlbumList/AlbumList';
import Artist from './Artist/Artist';

const AlbumSearch = () => {

  const [artistName, setArtistName] = useState('');

  const {
    isLoading,
    data,
    refetch,
    isFetching
  } = useQuery(`albums`, () => getAlbumsByArtistName(artistName), { enabled: false });

  const onSearchClickHandle = () => {
    if (artistName) {
      refetch();
    }
  }

  return (
    <>
      <Title title='Search Albums by Artist Name' />

      <FormInput
        value={artistName}
        onInputChange={(value: string) => setArtistName(value)}
        onSearchClickHandle={onSearchClickHandle}
      />

      {(!isLoading && data) && (
        <>
          <Artist
            name={data.artistName}
            image={data.artistImages[data.artistImages.length -1].url || ''} 
          />
          <AlbumList albums={data} />
        </>
      )}

      {(isLoading || isFetching) && (<ThreeDotsLoader />)}

    </>
  )
}

export default AlbumSearch;