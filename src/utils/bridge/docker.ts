import { invoke } from "@tauri-apps/api/tauri";
import {
  BridgeCommands as BC,
  GetVersionResult,
  GetLocalImagesResult,
} from "@types";
import { transformImages } from "@utils";

const catchError = (err) => ({
  success: false,
  error: err,
});

export async function checkDockerInstallation(): Promise<GetVersionResult> {
  try {
    const res: GetVersionResult["version"] = await invoke(BC.GetVersion);

    return { success: true, version: res };
  } catch (err) {
    return catchError(err);
  }
}

export async function getLocalImages(): Promise<GetLocalImagesResult> {
  try {
    const images: GetLocalImagesResult["images"] = await invoke(
      BC.GetLocalImages
    );

    return {
      success: true,
      images: transformImages(images),
    };
  } catch (err) {
    return catchError(err);
  }
}
