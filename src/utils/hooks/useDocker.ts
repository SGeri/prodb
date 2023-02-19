import { checkDockerInstallation, getLocalImages } from "../bridge/docker";

export default function useDocker() {
  const showError = (error: string) => {
    console.error(error);
  };

  const checkDocker = async () => {
    try {
      return await checkDockerInstallation();
    } catch (err) {
      showError(err);
    }
  };

  const getImages = async () => {
    try {
      return await getLocalImages();
    } catch (err) {
      showError(err);
    }
  };

  return { checkDocker, getImages };
}
