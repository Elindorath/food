/// <reference types="expo/types" />

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- Allowed in ".d.ts" files.
    interface ProcessEnv {
      /**
       * API base URL for backend requests
       * @example "http://localhost:3000/api"
       */
      readonly EXPO_PUBLIC_API_URL?: string;
    }
  }
}

export {};
