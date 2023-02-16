import { ReactNode } from "react";
import { Text, TextProps } from "@mantine/core";

interface HeadingProps extends TextProps {
  type: "base" | "gradient";
  text?: string;
  children?: ReactNode;
}

export default function Heading({
  type,
  text,
  children,
  ...props
}: HeadingProps) {
  const body = text || children;

  switch (type) {
    case "base":
      return <Text {...props}>{body}</Text>;

    case "gradient":
      return (
        <Text
          variant="gradient"
          gradient={{ from: "grape", to: "violet" }}
          ta="center"
          fz="xl"
          fw={700}
          {...props}
        >
          {body}
        </Text>
      );

    default:
      return <Text {...props}>{body}</Text>;
  }
}
