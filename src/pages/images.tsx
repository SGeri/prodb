import { useEffect } from "react";
import { Center, Group, Loader, Text, Title } from "@mantine/core";
import { useDocker } from "@stores";

export default function Services() {
  const { images, loading, fetchImages } = useDocker();

  console.log(images);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Title order={2} align="center" my="xl">
        Local Images
      </Title>

      <Text align="center">
        This page shows all the images that are currently stored on your local
        machine.
      </Text>

      {loading && (
        <Center>
          <Text>Loading...</Text>
          <Loader />
        </Center>
      )}

      {images.map((image) => (
        <Group position="center">
          <Text fw={700}>{image.repoDigests[0].split("@")[0]}</Text>
          <Text>{image.repoDigests[0].split("@")[1]}</Text>
        </Group>
      ))}
    </>
  );
}
