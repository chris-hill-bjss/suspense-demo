import Delayer from "@/ui/Delayer/Delayer";

export default async function Implicit() {
  return (
    <main>
      <Delayer timeout={5000}>whatup</Delayer>
    </main>
  );
}
