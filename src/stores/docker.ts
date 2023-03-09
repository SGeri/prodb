import { create } from "zustand";
import {
  checkDockerInstallation,
  getLocalImages,
} from "src/utils/bridge/docker";
import { Image } from "@types";

export type DockerState = {
  ready: boolean;
  loading: boolean;
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
  loading: false,
  version: null,
  images: [],
};

// todo solve error handling

export const useDocker = create<DockerState>((set) => ({
  ...initialState,

  getVersion: async () => {
    set({ loading: true });
    const { success, error, version } = await checkDockerInstallation();

    if (!success) return { success, error };

    set({ version, ready: true, loading: false });
    return { success, version };
  },

  fetchImages: async () => {
    set({ loading: true });
    const { success, images } = await getLocalImages();

    if (!success) return set({ loading: false });

    set({ images, loading: false });
  },
}));
