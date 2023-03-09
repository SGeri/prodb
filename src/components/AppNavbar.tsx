import { useRouter } from "next/router";
import Link from "next/link";
import { ActionIcon, Group, Stack, Text, clsx } from "@mantine/core";
import {
  Home,
  Layers,
  Table,
  Plus,
  Package,
  Settings,
  Database,
} from "react-feather";
import { Heading } from ".";
import { NavbarElement } from "@types";

const pages: NavbarElement[] = [
  {
    title: "Dashboard",
    href: "/",
    color: "violet",
    icon: Home,
  },
  {
    title: "Local Images",
    href: "/images",
    color: "red",
    icon: Database,
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
  // Add billing & settings pages
  {
    title: "Billing & Usage",
    href: "/billing",
    color: "yellow",
    icon: Package,
    disabled: true,
  },
  {
    title: "Settings",
    href: "/settings",
    color: "pink",
    icon: Settings,
    disabled: true,
  },
];

export default function AppNavbar() {
  const { pathname } = useRouter();

  const PageComponents = pages
    .filter(({ disabled }) => !disabled)
    .map(({ title, href, color, icon: Icon, disabled }) => (
      <Link
        key={title}
        href={href}
        className={clsx(
          "cursor-pointer rounded-md",
          pathname === href ? "bg-slate-700" : "hover:bg-slate-800"
        )}
      >
        <Group m="xs">
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
