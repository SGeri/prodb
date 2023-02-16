import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/shell";
import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";

function App() {
  const checkDocker = async () => {
    try {
      const isDockerInstalled = await invoke("check_docker");

      if (isDockerInstalled) {
        // Docker is installed
      } else {
        throw new Error();
      }
    } catch (e) {
      openDockerInstallationModal();
      console.log("Error:", e);
    }
  };

  const openDockerInstallationModal = async () =>
    openConfirmModal({
      title: "Install Docker?",
      children: (
        <Text size="sm">
          Docker cannot be found. Potential reasons: <br />
          <ul>
            <li>Docker Daemon is not running.</li>
            <li>Docker cannot be found in PATH.</li>
            <li>Docker is not installed.</li>
          </ul>
        </Text>
      ),
      labels: { confirm: "Install Docker", cancel: "Cancel" },
      onConfirm: () => open("https://docs.docker.com/desktop/"),
    });

  return (
    <div className="container">
      <Link href="/0">
        <h1>Irány teszt!</h1>
      </Link>

      <Button onClick={checkDocker}>Check Docker</Button>
    </div>
  );
}

export default App;
