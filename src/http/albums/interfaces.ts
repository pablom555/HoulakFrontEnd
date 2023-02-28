export interface GetAlbumsResponse {
  artistId:     string;
  artistName:   string;
  artistImages: Image[];
  albums:       AlbumItem[];
}

export interface AlbumItem {
  id:           string;
  name:         string;
  images:       Image[];
  popularity:   number;
  release_date: Date;
  total_tracks: number;
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}