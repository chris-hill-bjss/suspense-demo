import { PropsWithChildren } from "react";

type DelayerProps = PropsWithChildren<{ timeout: number }>;

export default async function Delayer({ children, timeout }: DelayerProps) {
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <>{children}</>;
}
