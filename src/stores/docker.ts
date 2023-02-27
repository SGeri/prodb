import { create } from "zustand";
import {
  checkDockerInstallation,
  getLocalImages,
} from "src/utils/bridge/docker";
import { Image } from "@types";

export type DockerState = {
  ready: boolean;
  version: string | null;
  images: Image[];
  getVersion: () => Promise<{
    success: boolean;
    version?: string;
    error?: string;
  }>;
  fetchImages: () => Promise<void>;
};

const initialState = {
  ready: false,
  version: null,
  images: [],
};

// todo solve error handling

export const useDocker = create<DockerState>((set) => ({
  ...initialState,
  getVersion: async () => {
    const { success, error, version } = await checkDockerInstallation();

    if (!success) return { success, error };

    set({ version, ready: true });
    return { success, version };
  },
  fetchImages: async () => {
    const { success, error, images } = await getLocalImages();

    if (!success) return;

    set({ images });
  },
}));
