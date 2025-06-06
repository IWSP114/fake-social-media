import type { StaticImageData } from "next/image";

export type Post = {
  username: string,
  message: string,
  likes: number,
  comments: number,
  shares: number,
  picture?: StaticImageData
}