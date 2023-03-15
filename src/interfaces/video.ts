export interface VideoI {
  [x: string]: any;
  videos: VideoProps[];
}
export interface VideoProps {
  kind: string;
  id: Id;
  snippet: VideoSnippet;
}
export interface VideoCardProps {
  video: VideoProps;
}
export interface Id {
  kind?: string;
  videoId: string;
}
export interface ChannelCardProps {
  channelId: string;
}
export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}
export interface Default {
  url: string;
  width: number;
  height: number;
}
export interface Medium {
  url: string;
  width: number;
  height: number;
}
export interface High {
  url: string;
  width: number;
  height: number;
}