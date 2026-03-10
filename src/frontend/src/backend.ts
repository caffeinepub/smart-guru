// Stub backend module for frontend-only app
import { HttpAgent } from "@icp-sdk/core/agent";

export type backendInterface = {
  _initializeAccessControlWithSecret: (token: string) => Promise<void>;
  [key: string]: unknown;
};

export type CreateActorOptions = {
  agentOptions?: ConstructorParameters<typeof HttpAgent>[0];
};

export class ExternalBlob {
  static fromURL(_url: string): ExternalBlob {
    return new ExternalBlob();
  }
  async getBytes(): Promise<Uint8Array> {
    return new Uint8Array();
  }
  onProgress?: (progress: number) => void;
}

export function createActor(
  _canisterId: string,
  _upload: unknown,
  _download: unknown,
  _options?: CreateActorOptions,
): backendInterface {
  return {
    _initializeAccessControlWithSecret: async () => {},
  };
}
