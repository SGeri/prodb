import Link from "next/link";
import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { Home, Layers, Table, Plus, Package } from "react-feather";
import { Heading } from ".";

const pages = [
  {
    title: "Dashboard",
    href: "/",
    color: "violet",
    icon: Home,
  },
  {
    title: "Your Services",
    href: "/services",
    color: "blue",
    icon: Layers,
  },
  {
    title: "New Service",
    href: "/new-service",
    color: "green",
    icon: Plus,
  },
  {
    title: "Explorer",
    href: "/explorer",
    color: "grape",
    icon: Table,
  },
  {
    title: "Billing & Usage",
    href: "/billing",
    color: "yellow",
    icon: Package,
  },
];

export default function AppNavbar() {
  const PageComponents = pages.map(({ title, href, color, icon: Icon }) => (
    <Link key={title} href={href}>
      <Group m="xs" sx={{ cursor: "pointer" }}>
        <ActionIcon color={color} variant="filled">
          <Icon size={20} />
        </ActionIcon>

        <Text>{title}</Text>
      </Group>
    </Link>
  ));

  return (
    <>
      <Heading type="gradient" text="ProDB Menu" mb="xs" />

      <Stack spacing="xs">{PageComponents}</Stack>
    </>
  );
}
