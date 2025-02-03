import { ReactNode } from "react";

// eslint-disable @typescript-eslint/no-empty-object-type
export type WithChildren<T extends object = {}> = T & { children: ReactNode };
