"use client";

import { HydrationBoundary } from "@tanstack/react-query";

export const ReactQueryHydrateProvider = (props: any) => {
  return <HydrationBoundary {...props} />;
};
