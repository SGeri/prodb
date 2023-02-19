import { Button, Center, Title } from "@mantine/core";
import { ServicePreview } from "@components";
import { Service } from "@types";
import { Plus } from "react-feather";

const services: Service[] = [
  {
    name: "WM Agency Development Database",
    container: "wm-agency-dev-db",
    type: "mysql",
    version: "8.0.23",
    status: "running",
  },
  {
    name: "Local test DB",
    container: "local-test-db",
    type: "mssql",
    version: "2019-latest",
    status: "stopped",
  },
  {
    name: "Production Postgres v12",
    container: "my-epic-postgres-db",
    type: "postgres",
    version: "12.5",
    status: "running",
  },
  {
    name: "My Redis DB",
    container: "redis-db-local-1",
    type: "redis",
    version: "6.0.9",
    status: "running",
  },
  {
    name: "Mongo Cluster",
    container: "mongo-cluster-1",
    type: "mongo",
    version: "4.4.4",
    status: "running",
  },
];

export default function Services() {
  const onEdit = (container: string) => {
    console.log("Edit", container);
  };

  const onInspect = (container: string) => {
    console.log("Inspect", container);
  };

  const onRemove = (container: string) => {
    console.log("Remove", container);
  };

  return (
    <>
      <Title order={2} align="center" my="xl">
        Services
      </Title>

      <Center>
        <Button color="green" size="md">
          <Plus /> Add Service
        </Button>
      </Center>

      {services.map((service) => (
        <ServicePreview
          key={service.container}
          onEdit={onEdit}
          onInspect={onInspect}
          onRemove={onRemove}
          {...service}
        />
      ))}
    </>
  );
}
