import { useEffect } from "react";
import { Title } from "@mantine/core";
import { useDocker } from "@stores";

export default function Services() {
  const { images, fetchImages } = useDocker();

  console.log(images);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Title order={2} align="center" my="xl">
        Local Images
      </Title>

      {JSON.stringify(images)}
    </>
  );
}
