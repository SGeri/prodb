/* * * * * * * * * * * * 
      BRIDGE TYPES
 * * * * * * * * * * * */

type BridgeResult<T, K extends string> = {
  success: boolean;
  error?: string;
} & { [P in K]?: T };

export type CheckDockerResult = BridgeResult<string, "version">;

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
