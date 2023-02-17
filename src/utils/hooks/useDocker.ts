import { checkDockerInstallation } from "../bridge/docker";

export default function useDocker() {
  const checkDocker = async () => {
    const res = await checkDockerInstallation();

    console.log("checkDocker", res);

    return res;
  };

  return { checkDocker };
}
