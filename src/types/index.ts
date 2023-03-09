import { Icon } from "react-feather";

/* * * * * * * * * * * * 
      BRIDGE TYPES
 * * * * * * * * * * * */
export enum BridgeCommands {
  GetVersion = "get_version",
  GetLocalImages = "get_images",
}

type BridgeResult<T, K extends string> = {
  success: boolean;
  error?: string;
} & { [P in K]?: T };

export type GetVersionResult = BridgeResult<string, "version">;

export type GetLocalImagesResult = BridgeResult<Image[], "images">;

/* * * * * * * * * * * * 
      SERVICE TYPES
 * * * * * * * * * * * */
export type ServiceType = "mysql" | "mssql" | "postgres" | "redis" | "mongo";
export type ServiceStatus = "running" | "stopped";

export type Service = {
  name: string;
  container: string;
  type: ServiceType;
  version: string;
  status: ServiceStatus;
};

/* * * * * * * * * * * * 
      DOCKER TYPES
 * * * * * * * * * * * */
export type Image = {
  containers: number;
  created: number;
  id: string;
  labels: any; // todo figure out what this is
  parentId: string;
  repoDigests: string[];
  repoTags: string[];
  sharedSize: number;
  size: number;
  virtualSize: number;
};

export type Container = {};

/* * * * * * * * * * * * 
      Client Types
 * * * * * * * * * * * */
export type NavbarElement = {
  title: string;
  href: string;
  color: string;
  icon: Icon;
  disabled?: boolean;
};
