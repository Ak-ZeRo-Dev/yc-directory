import { auth } from "@/auth";
import StartupForm from "@/components/create/StartupForm";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">SUBMIT YOUR STARTUP PITCH</h1>
      </section>
      <StartupForm />
    </>
  );
}
