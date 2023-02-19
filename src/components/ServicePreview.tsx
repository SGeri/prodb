import Image from "next/image";
import { ActionIcon, Container, Group, Text, Title } from "@mantine/core";
import { Edit, Eye, Trash } from "react-feather";
import {
  MysqlLogo,
  MssqlLogo,
  PostgresLogo,
  RedisLogo,
  MongoLogo,
} from "@images";
import { Service, ServiceStatus, ServiceType } from "@types";

export interface ServicePreviewProps extends Service {
  onInspect: (container: string) => void;
  onEdit: (container: string) => void;
  onRemove: (container: string) => void;
}

const getServiceImage = (type: ServiceType) => {
  switch (type) {
    case "mysql":
      return {
        image: MysqlLogo,
        alt: "MySQL Logo",
      };
    case "mssql":
      return {
        image: MssqlLogo,
        alt: "MSSQL Logo",
      };
    case "postgres":
      return {
        image: PostgresLogo,
        alt: "Postgres Logo",
      };

    case "redis":
      return {
        image: RedisLogo,
        alt: "Redis Logo",
      };
    case "mongo":
      return {
        image: MongoLogo,
        alt: "Mongo Logo",
      };
  }
};

const getFormattedStatus = (status: ServiceStatus) => {
  const color = status === "running" ? "green" : "red";

  return {
    status: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
    color,
  };
};

export default function ServicePreview({
  onInspect,
  onEdit,
  onRemove,
  ...service
}: ServicePreviewProps) {
  const { image, alt } = getServiceImage(service.type);
  const { status, color } = getFormattedStatus(service.status);

  const handleClickInspect = () => onInspect(service.container);
  const handleClickEdit = () => onEdit(service.container);
  const handleClickRemove = () => onRemove(service.container);

  return (
    <Container
      className="flex flex-row bg-slate-900 rounded-2xl hover:bg-slate-800 shadow-lg items-center justify-between px-20"
      py="md"
      my="md"
    >
      <Container mx="xl">
        <Title order={2}>{service.name}</Title>
        <Title order={5} color="gray">
          {service.container}
        </Title>

        <Group>
          <Text fw={700}>Status:</Text>
          <Text color={color}>{status}</Text>
        </Group>

        <Text bottom={0} left={0}>
          {service.type} - {service.version}
        </Text>

        <Group mt="md">
          <ActionIcon
            color="blue"
            variant="filled"
            onClick={handleClickInspect}
          >
            <Eye size={20} />
          </ActionIcon>
          <ActionIcon color="orange" variant="filled" onClick={handleClickEdit}>
            <Edit size={20} />
          </ActionIcon>
          <ActionIcon color="red" variant="filled" onClick={handleClickRemove}>
            <Trash size={20} />
          </ActionIcon>
        </Group>
      </Container>

      <Image src={image} alt={alt} width={200} />
    </Container>
  );
}
