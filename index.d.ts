import { Project } from './src/interfaces';

export {};

declare global {
  interface Window {
    nearInitPromise: Promise<void>;
    accountId: string;
    walletConnection: {
      isSignedIn: () => boolean;
    };
    contract: {
      getById: ({ id: number }) => Project;
      get: ({ offset: number, limit: number }) => Project[];
      create: ({
        name: string, url: string, description: string, wallet: string,
      }) => Project;
      del: ({ id: number }) => void ;
      donate: ({ id: number, amount: any }) => void;
    }
  }
}