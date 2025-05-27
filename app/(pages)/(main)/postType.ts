import type { StaticImageData } from "next/image";

export type Post = {
  username: string,
  message: string
  picture?: StaticImageData
}