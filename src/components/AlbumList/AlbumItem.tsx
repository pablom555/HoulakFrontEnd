export interface AlbumItemProps {
  image: string;
  name: string;
  totalTracks: number;
  popularity: number;
  releaseDate: Date;
}

const AlbumItem = ({ name, image, totalTracks, popularity, releaseDate }: AlbumItemProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="block w-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg w-full"
            src={image}
            alt="" />
        </a>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
            Popularity: {popularity}
          </p>
          <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
            Total Tracks: {totalTracks}
          </p>
          <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
            Release Date: {new Date(releaseDate).toISOString().substring(0, 10)}
          </p>

        </div>
      </div>
    </div>
  )
}

export default AlbumItem;