import Api from '../api';
import {
  GetAlbumsResponse
} from './interfaces';

const api = new Api();

export const getAlbumsByArtistName = async (artistName: string, config?: any): Promise<GetAlbumsResponse> => api.get<GetAlbumsResponse>(`albums?artistName=${artistName}`,config);