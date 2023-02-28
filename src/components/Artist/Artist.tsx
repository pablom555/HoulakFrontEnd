export interface ArtistProps {
  image: string;
  name: string;
}

const Artist = ({ name, image }: ArtistProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-6">
        <h1 className="mb-2 text-5xl font-medium leading-tight text-gray-700 md:text-7xl">
          {name}
        </h1>
      </div>
      <div className="block w-60 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-lg w-full"
            src={image}
            alt="" />
        </a>

      </div>
    </div>
  )
}

export default Artist;