import { useState, ReactNode } from "react";
import {
  AppShell as BaseAppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { AppFooter, AppHeader, AppNavbar } from ".";

interface MyAppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: MyAppShellProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <BaseAppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 280, lg: 350 }}
        >
          <AppNavbar />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <AppFooter />
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <AppHeader />
          </div>
        </Header>
      }
    >
      {children}
    </BaseAppShell>
  );
}
