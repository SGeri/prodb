import { useState } from "react";
import { open } from "@tauri-apps/api/shell";
import {
  Button,
  Center,
  Container,
  ContainerProps,
  List,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { openConfirmModal, openModal } from "@mantine/modals";
import { useDocker } from "@utils";

function App() {
  const [loading, setLoading] = useState(false);
  const [dockerReady, setDockerReady] = useState<boolean>(false);
  const { checkDocker } = useDocker();

  const checkInstallation = async () => {
    setLoading(true);
    const { success, version, error } = await checkDocker();

    if (success) {
      openDockerInstalledModal(version);
      setDockerReady(true);
    } else {
      openDockerInstallationModal(error);
    }

    setLoading(false);
  };

  const openDockerInstalledModal = (dockerVersion: string) =>
    openModal({
      title: "Successfully detected",
      children: (
        <Text size="sm">
          Docker can be found on your machine. <br />
          Your current Docker version: {dockerVersion}
        </Text>
      ),
    });

  const openDockerInstallationModal = (error: string) =>
    openConfirmModal({
      title: "Install Docker?",
      children: (
        <Text size="sm">
          Docker cannot be found. Potential reasons:
          <List withPadding>
            <List.Item>Docker Daemon is not running.</List.Item>
            <List.Item>Docker cannot be found in PATH.</List.Item>
            <List.Item>
              To start development server run npm start command
            </List.Item>
            <List.Item>
              Docker has no exposed TCP port. (expose in settings!)
            </List.Item>
            <List.Item>Docker is not installed.</List.Item>
          </List>
          <Text fw={700}>Error code:</Text>
          <Text>{error}</Text>
        </Text>
      ),
      labels: { confirm: "Install Docker", cancel: "Cancel" },
      onConfirm: () => open("https://docs.docker.com/desktop/"),
    });

  return (
    <div className="container">
      <Section>
        <Title order={2} align="center" my="xl">
          Usage Guide
        </Title>

        <Text mb="md">
          This is your first time running ProDB. To get started, please follow
          the steps below to setup your environment and start building your
          awesome local infrastructure.
        </Text>
      </Section>

      <Section>
        <Title order={3}>Setting up the environment</Title>

        <Text mb="md">
          Before you could start building infrastructure, we have to make sure,
          Docker is successfully installed and configured for ProDB, so that it
          can manage containers using it.
        </Text>
      </Section>

      <Section>
        <Button
          size="md"
          mb="md"
          onClick={checkInstallation}
          disabled={loading}
          fullWidth
        >
          {loading ? (
            <Loader color="red" variant="dots" />
          ) : (
            "Check Docker Availability"
          )}
        </Button>

        <Text fw={700}>Current Docker Status:</Text>

        <Text size="lg">
          {dockerReady
            ? "Docker is ready to be used!"
            : "Docker is not yet ready. Please click on the button!"}
        </Text>
      </Section>
    </div>
  );
}

const Section = ({
  children,
  ...props
}: { children: React.ReactNode } & ContainerProps) => (
  <Container mb="md" {...props}>
    {children}
  </Container>
);

export default App;
