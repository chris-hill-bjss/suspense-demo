import Delayer from "@/ui/Delayer/Delayer";
import { Suspense } from "react";

export default async function Boundaries() {
  return (
    <Suspense fallback={<p>doing things....</p>}>
      <Delayer timeout={3000}>whatup</Delayer>
    </Suspense>
  );
}
