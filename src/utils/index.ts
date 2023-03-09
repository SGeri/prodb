export * from "./hooks";

import { Image } from "@types";

export function transformImages(rawImages: any[]) {
  const images: Image[] = rawImages.map((rawImage) => {
    const image = {};

    Object.keys(rawImage).forEach((key) => {
      const chars = key.split("");
      const camelCaseKey = chars[0].toLowerCase() + chars.slice(1).join("");

      image[camelCaseKey] = rawImage[key];
    });

    return image as Image;
  });

  return images;
}
