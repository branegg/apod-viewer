type MediaType = 'video' | 'image';

export interface IPhoto {
  date: string;
  explanation: string;
  media_type: MediaType;
  resource: string;
  service_version: string;
  title: string;
  url: string;
}
