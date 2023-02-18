type BridgeResult<T, K extends string> = {
  success: boolean;
  error?: string;
} & { [P in K]?: T };

export type CheckDockerResult = BridgeResult<string, "version">;
