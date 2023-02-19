export * from "./hooks";

import { camelCaseRegex } from "@constants";
import { Image } from "@types";

export function transformImages(rawImages: any[]) {
  const images: Image[] = rawImages.map((rawImage) => {
    const imageMap = new Map();

    for (const [key, value] of Object.entries(rawImage)) {
      const camelCaseKey = key.replace(camelCaseRegex, (_, c) =>
        c.toUpperCase()
      );

      imageMap.set(camelCaseKey, value);
    }

    return Object.fromEntries(imageMap) as Image;
  });

  return images;
}
