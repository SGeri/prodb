import { invoke } from "@tauri-apps/api/tauri";
import { CheckDockerResult } from "@types";

export async function checkDockerInstallation(): Promise<CheckDockerResult> {
  try {
    const res: CheckDockerResult["version"] = await invoke("check_docker");

    return { success: true, version: res };
  } catch (err) {
    return { success: false, error: err };
  }
}
