import { invoke } from "@tauri-apps/api/tauri";

interface CheckDockerResult {
  success: boolean;
  error?: string;
  version?: string;
}

export async function checkDockerInstallation(): Promise<CheckDockerResult> {
  try {
    const res: any = await invoke("check_docker");

    //

    return { success: true, version: res };
  } catch (err) {
    return { success: false, error: err };
  }
}
