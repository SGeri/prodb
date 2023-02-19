import { useState, useEffect } from "react";
import { Title } from "@mantine/core";
import { useDocker } from "@utils";

export default function Services() {
  const [images, setImages] = useState([]);
  const { getImages } = useDocker();

  const getImages_ = async () => {
    setImages((await getImages()).images);
  };

  useEffect(() => {
    getImages_();
  }, []);

  return (
    <>
      <Title order={2} align="center" my="xl">
        Local Images
      </Title>
    </>
  );
}
